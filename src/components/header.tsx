import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import {
  faFlagUsa,
  faArrowLeft,
  faBug,
  faSquareFull,
  faBell,
  faInfo,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} size="1x" />
      <div className={styles.rightContainer}>
        <FontAwesomeIcon icon={faFlagUsa} size="1x" />
        <FontAwesomeIcon icon={faBug} size="1x" />
        <FontAwesomeIcon icon={faSquareFull} size="1x" />
        <FontAwesomeIcon icon={faBell} size="1x" />
        <FontAwesomeIcon icon={faInfo} size="1x" />
        <div className={styles.userContainer}>
          <img
            alt="avatar"
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          />
          <span>Necip Uysal</span>
          <FontAwesomeIcon icon={faCaretDown} size="1x" />
        </div>
      </div>
    </header>
  );
};
