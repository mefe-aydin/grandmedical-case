import { FC, ReactElement } from "react";

export const Button: FC<Props> = ({ label, onClick, className, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

interface Props {
  label: string | ReactElement;
  onClick?: () => void;
  className?: string;
  children?: ReactElement;
}
