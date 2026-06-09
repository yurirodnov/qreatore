import { useStateContext } from "../../context/StateProvider";
import styles from "./InfoForm.module.css";

export const InfoForm = () => {
  const { handleUserInput } = useStateContext();

  return (
    <form className={styles.userInputForm}>
      <input id="user-input" type="text" className={styles.userInput} onChange={handleUserInput} />
    </form>
  );
};
