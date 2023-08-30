import { useState } from 'react';

type Tag = string;

type TagInputProps = {
  onAddTag: (tag: Tag) => void;
  tags: Tag[];
  onRemoveTag: (tags: Tag[]) => void;
};

export const TagInput: React.FC<TagInputProps> = ({ onAddTag, tags, onRemoveTag }) => {
  const [inputValue, setInputValue] = useState('');

  const addTag = () => {
    if (inputValue.trim() !== '' && !tags.includes(inputValue)) {
      onAddTag(inputValue);
      setInputValue('');
    }
  };

  const removeTag = (tag: Tag) => {
    const filteredTags = tags.filter((t: Tag) => t !== tag);
    onRemoveTag(filteredTags);
  };

  return (
    <div className="m-2 mx-auto flex flex-wrap min-h-48 w-auto p-2 border border-blue-500 rounded-lg">
      <ul className="flex flex-wrap p-0">
        {tags.map((tag: Tag) => (
          <li key={tag} className="flex items-center justify-center w-auto h-8 text-sm text-blue-500 px-2 list-none rounded-lg m-2 bg-cyan-100">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon text-blue-500 ml-2 text-sm rounded-full cursor-pointer" onClick={() => removeTag(tag)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        className="flex-1 border-none h-11 text-sm p-1 outline-none dark:text-slate-100 rounded-lg dark:bg-slate-800"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            addTag();
          }
        }}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};
