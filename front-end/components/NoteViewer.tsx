import { FC } from 'react';
import styled from 'styled-components';
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  Divider,
} from 'verbum';

const Container = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f8f8;
  dark: background-color: gray;
`;

const NoteViewer: FC = () => {
  return (
    <>
      <div className="mt-6 mb-4">
          <label htmlFor="small-input" className="block mb-2 text-xm font-medium text-gray-900 dark:text-slate-200">Title</label>
          <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <label htmlFor="small-input" className="block mb-2 text-xm font-medium text-gray-900 dark:text-slate-200">Content</label>
      <EditorComposer>
        <Editor hashtagsEnabled={true} >
          <ToolbarPlugin defaultFontSize="10px" >
            <FontFamilyDropdown />
            <FontSizeDropdown />
            <Divider />
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <CodeFormatButton />
            <InsertLinkButton />
            <TextColorPicker />
            <BackgroundColorPicker />
            <TextFormatDropdown />
            <Divider />
            <InsertDropdown enablePoll={true} enableImage={true} enableTable={true} />
            <Divider />
            <AlignDropdown />
          </ToolbarPlugin>
        </Editor>
      </EditorComposer>
    </ >
  );
};

export default NoteViewer;