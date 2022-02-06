import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../commons/interfaces/IReduxStore";
import { Button, Select } from "../components";
import styles from "../commons/styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { SELECTED_OPTION_CLEAR } from "../store/actions/actionTypes";

export const Home: FC = () => {
  const [showSelectState, setShowSelectState] = useState(false);
  const dispatch = useDispatch();
  const selectsState = useSelector((state: IReduxStore) => state.selectsState);

  return (
    <div className={styles.container}>
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
  );
};
