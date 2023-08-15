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