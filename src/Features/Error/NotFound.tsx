import { Link } from "react-router-dom";
import PuzzToolPage from "../../Common/PuzzToolPage";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <PuzzToolPage title="Not Found">
      <p className={styles.container}>
        If this was reached in error, use the navigation options or go{" "}
        <Link to="/">home</Link>.
      </p>
    </PuzzToolPage>
  );
}

export default NotFound;
