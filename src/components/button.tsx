import { FC, ReactElement } from "react";

export const Button: FC<Props> = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

interface Props {
  label: string | ReactElement;
  onClick: () => void;
  className?: string;
}
