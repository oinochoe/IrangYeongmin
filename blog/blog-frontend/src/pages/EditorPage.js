import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';


const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}
    />
  );
};

export default EditorPage;