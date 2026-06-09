// src/components/main/Main.tsx

import { InfoForm } from "../info-form/InfoForm";
import { Qr } from "../qr/Qr";

import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <InfoForm />

        <Qr />
      </div>
    </main>
  );
};
