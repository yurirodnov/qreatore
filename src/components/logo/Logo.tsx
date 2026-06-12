interface LogoProps {
  title: string;
}

export const Logo = ({ title }: LogoProps) => {
  return <span>{title}</span>;
};
