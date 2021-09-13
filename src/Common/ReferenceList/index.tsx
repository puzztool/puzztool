import { FunctionComponent } from "react";
import styles from "./index.module.scss";

const ReferenceList: FunctionComponent = (props) => {
  return <div className={styles.list}>{props.children}</div>;
};

export default ReferenceList;
