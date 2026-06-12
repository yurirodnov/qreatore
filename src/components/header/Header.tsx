import { Logo } from "../logo/Logo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo title="QR Code Generator" />
    </header>
  );
};
