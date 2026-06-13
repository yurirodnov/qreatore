import styles from "./NoQr.module.css";

export const NoQr = () => {
  return (
    <div className={styles.noQrBlock}>
      <span>Your QR code</span>
      <span>will be here :)</span>
    </div>
  );
};
