import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../commons/interfaces/IReduxStore";
import { Button, Input, Select } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faCaretSquareRight,
  faGift,
  faSort,
  faSearch,
  faArrowLeft,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { SELECTED_OPTION_CLEAR } from "../store/actions/actionTypes";
import styles from "../commons/styles/home.module.css";

export const Home: FC = () => {
  const [showSelectState, setShowSelectState] = useState(false);
  const dispatch = useDispatch();
  const selectsState = useSelector((state: IReduxStore) => state.selectsState);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>
          <h1>Cardiology, A, Hospital-Policlinc</h1>
          <h2>Marketing / Visit Mix / Cardiology, A, Hospital-Policlinc</h2>
        </div>
        <div className={styles.titleButtonContainer}>
          <Button label="back to page" className={`${styles.button}`}>
            <FontAwesomeIcon icon={faArrowLeft} color="#b1b1b1" />
          </Button>
          <Button
            label={<FontAwesomeIcon icon={faPhone} color="#b1b1b1" />}
            className={`${styles.button}`}
          />
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.filterContainer}>
          <Input
            placeholder="search"
            icon={<FontAwesomeIcon icon={faSearch} color="#7e7e7e" />}
          />
          <div className={styles.filterRightContainer}>
            <Button
              label="send to approval"
              className={`${styles.button} ${styles.approvalButton}`}
            />
            <Button
              label="pre-plan"
              className={`${styles.button} ${styles.buttonTypeTwo}`}
            />
            <Button
              label={<FontAwesomeIcon icon={faPencilRuler} />}
              className={`${styles.button} ${styles.iconButton}`}
            />
            <Button
              label={<FontAwesomeIcon icon={faCaretSquareRight} />}
              className={`${styles.button} ${styles.iconButton}`}
            />
            <Button
              label={<FontAwesomeIcon icon={faGift} />}
              className={`${styles.button} ${styles.iconButton} ${styles.lastIconButton}`}
            />
            <Button
              label="filtre"
              className={`${styles.button} ${styles.filterButton}`}
            >
              <FontAwesomeIcon icon={faSort} />
            </Button>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.selectsContainer}>
            {selectsState?.map((select, index) => (
              <Select
                key={index}
                name={select.name}
                options={select.options}
                selectIndex={select.index}
                isCollapse={select.isCollapse}
                selectedOption={select.selectedOption}
              />
            ))}
          </div>
          <div className={styles.submitContainer}>
            <div>
              {showSelectState &&
                selectsState
                  .filter((select) => select.selectedOption)
                  .map((select, index) => (
                    <span className={styles.optionContainer} key={index}>
                      {select.name}: {select.selectedOption}
                    </span>
                  ))}
            </div>
            <div className={styles.buttonContainer}>
              <Button
                onClick={() => setShowSelectState(true)}
                label="apply"
                className={`${styles.button} ${styles.buttonTypeOne}`}
              />
              <Button
                onClick={() => {
                  setShowSelectState(false);
                  dispatch({ type: SELECTED_OPTION_CLEAR });
                }}
                label="cancel"
                className={`${styles.button} ${styles.buttonTypeTwo}`}
              />
              <Button
                onClick={() => {}}
                label={<FontAwesomeIcon icon={faPencilRuler} size="sm" />}
                className={`${styles.button} ${styles.buttonTypeThree}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
