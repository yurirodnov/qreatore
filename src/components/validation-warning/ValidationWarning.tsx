import styles from "./ValidationWarning.module.css";

interface ValidationWarningProps {
  isWarning: boolean;
}

export const ValidationWarning = ({ isWarning }: ValidationWarningProps) => {
  return (
    <div className={styles.warningBlock}>
      {!isWarning ? <span className={styles.warningText}>Use real URL max length 500 charactes in</span> : null}
    </div>
  );
};
