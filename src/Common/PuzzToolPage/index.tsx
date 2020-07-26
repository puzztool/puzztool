import React, { ReactChild } from 'react';
import PuzzToolDocumentTitle from '../PuzzToolDocumentTitle';
import './index.scss';

interface Props {
  children: ReactChild;
  description?: ReactChild;
  title: string;
}

function PuzzToolPage({children, description, title}: Props) {
  function renderDescription() {
    if (description) {
      return (
        <div className="PuzzToolPage-description">
          {description}
        </div>
      )
    }

    return undefined;
  }

  return (
    <PuzzToolDocumentTitle title={title}>
      <>
        <div className="PuzzToolPage-header">
          <h2 className="PuzzToolPage-title">{title}</h2>
          {renderDescription()}
        </div>
        {children}
      </>
    </PuzzToolDocumentTitle>
  );
}

export default PuzzToolPage;
