import { FC } from "react";
import styles from "./eachMonth.module.css";

export const EachMonth: FC<Props> = ({ q, name, days, isColored }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <span>{q}</span>
        <span>{name}</span>
      </div>
      <div className={styles.daysContainer}>
        {days.map((_day, index) => (
          <div
            className={`${styles.dayContainer} ${
              isColored ? styles.coloredDayContainer : ""
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  q: string;
  name: string;
  days: number[];
  isColored: boolean;
}
