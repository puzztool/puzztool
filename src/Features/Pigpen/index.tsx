import PuzzToolPage from "../../Common/PuzzToolPage";
import PigpenKey from "../../Images/pigpen_key.svg";
import styles from "./index.module.scss";

function Pigpen() {
  return (
    <PuzzToolPage title="Pigpen">
      <div className={styles.container}>
        <img
          className={styles.image}
          src={PigpenKey}
          alt="Pigpen cipher reference chart"
        />
      </div>
    </PuzzToolPage>
  );
}

export default Pigpen;
