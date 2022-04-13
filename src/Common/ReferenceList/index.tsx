import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./index.module.scss";

const ReferenceList: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  return <div className={styles.list}>{props.children}</div>;
};

export default ReferenceList;
