import { FC, ReactElement } from "react";
import styles from "./input.module.css";

export const Input: FC<Props> = ({ placeholder, icon }) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={placeholder} />
      {icon}
    </div>
  );
};

interface Props {
  placeholder: string;
  icon: ReactElement;
}
