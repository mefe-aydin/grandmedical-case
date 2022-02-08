import { FC } from "react";
import { Button, EachMonth } from "..";
import { ICalendarData } from "../../commons/interfaces/ICalendarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import styles from "./calendar.module.css";

export const Calendar: FC = () => {
  const calendarData: ICalendarData[] = [
    {
      q: "Q1",
      isPinned: true,
      calendar: [
        { name: "JAN", q: "Q1", days: 24, isColored: true },
        { name: "FEB", q: "Q1", days: 24, isColored: true },
        { name: "MAR", q: "Q1", days: 24, isColored: false },
      ],
    },
    {
      q: "Q2",
      isPinned: true,
      calendar: [
        { name: "APR", q: "Q1", days: 24, isColored: false },
        { name: "MAY", q: "Q1", days: 24, isColored: false },
        { name: "JUN", q: "Q1", days: 24, isColored: false },
      ],
    },
    {
      q: "Q3",
      isPinned: false,
      calendar: [
        { name: "JUL", q: "Q1", days: 24, isColored: true },
        { name: "AUG", q: "Q1", days: 24, isColored: true },
        { name: "SEP", q: "Q1", days: 24, isColored: true },
      ],
    },
    {
      q: "Q4",
      isPinned: true,
      calendar: [
        { name: "OCT", q: "Q1", days: 24, isColored: true },
        { name: "NOV", q: "Q1", days: 24, isColored: true },
        { name: "DEC", q: "Q1", days: 24, isColored: false },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.calendarContainer}>
        {calendarData.map((data) =>
          data.calendar.map((month, index) => (
            <div className={styles.eachCalendarContainer} key={index}>
              <EachMonth
                q={data.q}
                name={month.name}
                isColored={month.isColored}
                days={Array.from(Array(month.days).keys())}
              />
              {index === 2 && (
                <div className={styles.pinContainer}>
                  <Button
                    className={styles.pinButton}
                    label={
                      <FontAwesomeIcon
                        icon={faThumbtack}
                        size="xs"
                        color="#3b3b3b"
                      />
                    }
                  />
                  <Button
                    className={styles.pinButton}
                    label={
                      <FontAwesomeIcon
                        icon={faThumbtack}
                        size="xs"
                        color="#cecece"
                      />
                    }
                  />
                  <Button
                    className={styles.pinButton}
                    label={
                      <FontAwesomeIcon
                        icon={faThumbtack}
                        size="xs"
                        color="#cecece"
                      />
                    }
                  />
                  <Button
                    className={styles.pinButton}
                    label={
                      <FontAwesomeIcon
                        icon={faThumbtack}
                        size="xs"
                        color="#cecece"
                      />
                    }
                  />
                  <Button
                    className={styles.pinButton}
                    label={
                      <FontAwesomeIcon
                        icon={faThumbtack}
                        size="xs"
                        color="#cecece"
                      />
                    }
                  />
                  <Button
                    className={styles.pinButton}
                    label={
                      <FontAwesomeIcon
                        icon={faThumbtack}
                        size="xs"
                        color="#cecece"
                      />
                    }
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
