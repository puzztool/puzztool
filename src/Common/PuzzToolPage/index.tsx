import { PropsWithChildren, ReactNode } from "react";
import { Title, Text } from "@mantine/core";
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
  return (
    <>
      <PuzzToolDocumentTitle title={title} />
      <div className={styles.header}>
        <Title order={2} className={styles.title}>
          {title}
        </Title>
        {description && <Text component="div">{description}</Text>}
      </div>
      {children}
    </>
  );
}

export default PuzzToolPage;
