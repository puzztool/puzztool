import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ErrorIcon from "./ErrorIcon";
import styles from "./index.module.scss";

interface Props {
  delay?: number;
  timeout?: number;
}

function Loading(props: Props) {
  const [pastDelay, setPastDelay] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const delay = props.delay;
    const timeout = props.timeout;
    let delayTimer: number;
    let timeoutTimer: number;

    if (delay && delay > 0) {
      delayTimer = window.setTimeout(() => setPastDelay(true), delay);
    } else {
      setPastDelay(true);
    }

    if (timeout && timeout > 0) {
      timeoutTimer = window.setTimeout(() => setTimedOut(true), timeout);
    }

    return () => {
      if (delayTimer) {
        clearTimeout(delayTimer);
      }

      if (timeoutTimer) {
        clearTimeout(timeoutTimer);
      }
    };
  }, [props.delay, props.timeout]);

  function getContent() {
    if (timedOut) {
      return (
        <div className={styles.content}>
          <ErrorIcon />
          <div>Timed out while loading content</div>
        </div>
      );
    } else if (pastDelay) {
      return (
        <div className={styles.content}>
          <Spinner animation="border" role="status">
            <div className="visually-hidden">Loading...</div>
          </Spinner>
          <div>Loading...</div>
        </div>
      );
    }

    return null;
  }

  return <div>{getContent()}</div>;
}

export default Loading;
