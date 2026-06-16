// src/components/main/Main.tsx

import { InfoForm } from "../info-form/InfoForm";
import { Qr } from "../qr/Qr";
import { ValidationWarning } from "../validation-warning/ValidationWarning";
import { useStateContext } from "../../context/StateProvider";
import styles from "./Main.module.css";

export const Main = () => {
  const { isInputValid } = useStateContext();

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <InfoForm />
        <ValidationWarning isWarning={isInputValid} />
        <Qr />
      </div>
    </main>
  );
};
