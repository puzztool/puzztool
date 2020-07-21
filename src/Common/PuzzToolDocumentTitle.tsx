import React, { ReactChild } from 'react';
import DocumentTitle from 'react-document-title';

const PUZZTOOL_TITLE = "PuzzTool";

interface Props {
  children?: ReactChild;
  title?: string;
}

function PuzzToolDocumentTitle({children, title}: Props) {
  function getDocumentTitle() {
    if (title) {
      return `${title} - ${PUZZTOOL_TITLE}`;
    }
  
    return PUZZTOOL_TITLE;
  }

  return (
    <DocumentTitle title={getDocumentTitle()}>
      {children}
    </DocumentTitle>
  );
}

export default PuzzToolDocumentTitle;
