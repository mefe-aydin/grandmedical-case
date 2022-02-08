import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faCalendarAlt,
  faShapes,
  faMailBulk,
  faUsers,
  faCropAlt,
  faUnderline,
  faCube,
  faDotCircle,
  faSubway,
  faChartLine,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./leftMenu.module.css";

export const LeftMenu: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <FontAwesomeIcon icon={faAtom} color="#fff" size="2x" />
      </div>
      <div className={styles.restContainer}>
        <FontAwesomeIcon icon={faShapes} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faCalendarAlt} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faMailBulk} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faUsers} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faCropAlt} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faUnderline} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faCube} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faDotCircle} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faSubway} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faChartLine} color="#82919e" size="lg" />
        <FontAwesomeIcon icon={faShareAlt} color="#82919e" size="lg" />
      </div>
    </div>
  );
};
