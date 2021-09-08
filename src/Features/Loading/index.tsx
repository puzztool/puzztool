import { LoadingComponentProps } from "react-loadable";
import styles from "./index.module.scss";

function Loading(props: LoadingComponentProps) {
  function getContent() {
    if (props.error) {
      return (
        <div className={styles.content}>
          <div className={styles.error} />
          <div>Failed to load content</div>
        </div>
      );
    } else if (props.timedOut) {
      return (
        <div className={styles.content}>
          <div className={styles.error} />
          <div>Timed out while loading content</div>
        </div>
      );
    } else if (props.pastDelay) {
      return (
        <div className={styles.content}>
          <div className={styles.spinner} />
          <div>Loading</div>
        </div>
      );
    } else {
      return null;
    }
  }

  return <div>{getContent()}</div>;
}

export default Loading;
