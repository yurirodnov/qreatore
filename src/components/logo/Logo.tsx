import styles from "./Logo.module.css";

interface LogoProps {
  title: string;
}

export const Logo = ({ title }: LogoProps) => {
  return <span className={styles.logo}>{title}</span>;
};
