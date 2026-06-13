import styles from "./Button.module.css";

type buttonType = "submit" | "reset";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  buttonType: buttonType;
  onClick: () => void;
}

export const Button = ({ title, disabled, buttonType, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles.buttonType} ${disabled ? styles.disabled : styles.enabled}`}
    >
      {title}
    </button>
  );
};
