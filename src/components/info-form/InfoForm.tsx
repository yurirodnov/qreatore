import { useStateContext } from "../../context/StateProvider";
import trashbin from "./../../assets/trashbin.png";
import styles from "./InfoForm.module.css";

export const InfoForm = () => {
  const { handleUserInput, clearUserInput, userInput } = useStateContext();

  return (
    <form className={styles.userInputForm}>
      <div className={styles.inputWrapper}>
        <input
          id="user-input"
          value={userInput}
          type="text"
          placeholder="Your URL"
          className={styles.userInput}
          onChange={handleUserInput}
        />
        <img src={trashbin} className={styles.trashbinPic} onClick={clearUserInput} />
      </div>
    </form>
  );
};
