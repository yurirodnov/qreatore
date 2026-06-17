import styles from "./Button.module.css";

type buttonType = "submit" | "reset" | "save";

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
      className={`${styles.button} ${disabled ? styles.disabled : styles[buttonType]}`}
    >
      {title}
    </button>
  );
};
