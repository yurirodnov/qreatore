import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  disabled: boolean;
  onClick: () => void;
}

export const Button = ({ title, disabled, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${disabled ? styles.disabled : styles.enabled}`}
    >
      {title}
    </button>
  );
};
