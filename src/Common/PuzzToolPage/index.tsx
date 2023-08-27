import { PropsWithChildren, ReactNode } from "react";
import PuzzToolDocumentTitle from "../PuzzToolDocumentTitle";
import styles from "./index.module.scss";

interface Props {
  description?: ReactNode;
  title: string;
}

function PuzzToolPage({
  children,
  description,
  title,
}: PropsWithChildren<Props>) {
  function renderDescription() {
    if (description) {
      return <div>{description}</div>;
    }

    return undefined;
  }

  return (
    <>
      <PuzzToolDocumentTitle title={title} />
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {renderDescription()}
      </div>
      {children}
    </>
  );
}

export default PuzzToolPage;
