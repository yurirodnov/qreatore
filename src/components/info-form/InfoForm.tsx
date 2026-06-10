import { useStateContext } from "../../context/StateProvider";
import styles from "./InfoForm.module.css";

export const InfoForm = () => {
  const { handleUserInput, userInput } = useStateContext();

  return (
    <form className={styles.userInputForm}>
      <input
        id="user-input"
        value={userInput}
        type="text"
        placeholder="Your URL"
        className={styles.userInput}
        onChange={handleUserInput}
      />
    </form>
  );
};
