import { FC } from "react";
import { useDispatch } from "react-redux";
import { SELECTED_OPTION, TOGGLE_SELECT } from "../store/actions/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./select.module.css";

export const Select: FC<Props> = ({
  name,
  options,
  selectIndex,
  isCollapse,
  selectedOption,
}) => {
  const dispatch = useDispatch();

  const toggleDropDown = () => {
    dispatch({
      type: TOGGLE_SELECT,
      payload: {
        index: selectIndex,
        data: !isCollapse,
      },
    });
  };

  const selectOption = async (option: string) => {
    await dispatch({
      type: TOGGLE_SELECT,
      payload: {
        index: selectIndex,
        data: false,
      },
    });

    dispatch({
      type: SELECTED_OPTION,
      payload: {
        index: selectIndex,
        data: option,
      },
    });
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>{name}</span>
      <div onClick={toggleDropDown} className={styles.selectContainer}>
        {selectedOption ? selectedOption : "select"}{" "}
        <FontAwesomeIcon
          icon={!isCollapse ? faArrowDown : faArrowUp}
          size="sm"
        />
      </div>
      {isCollapse && (
        <div className={styles.optionContainer}>
          {options.map((option, index) => (
            <span
              onClick={() => selectOption(option)}
              key={`${option}-${index}`}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

interface Props {
  name: string;
  options: string[];
  selectIndex: number;
  isCollapse: boolean;
  selectedOption: null | string;
}
