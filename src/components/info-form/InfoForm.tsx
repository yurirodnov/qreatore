// src/components/info-form/InfoForm.tsx

import { useStateContext } from "../../context/StateProvider";
import trashbin from "./../../assets/trashbin.png";
import { validateInput } from "../../lib/validateData";
import styles from "./InfoForm.module.css";

export const InfoForm = () => {
  const { handleUserInput, clearUserInput, userInput } = useStateContext();

  if (userInput !== "") {
    validateInput(userInput);
  }

  return (
    <form className={styles.userInputForm}>
      <div className={styles.inputWrapper}>
        <input
          id="user-input"
          value={userInput}
          type="text"
          placeholder="Paste here your URL"
          className={styles.userInput}
          onChange={handleUserInput}
        />
        {userInput !== "" ? <img src={trashbin} className={styles.trashbinPic} onClick={clearUserInput} /> : null}
      </div>
    </form>
  );
};
