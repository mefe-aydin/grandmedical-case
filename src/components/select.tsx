import { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_SELECT_INPUT } from "../store/actions/actionTypes";
import styles from "./select.module.css";

export const Select: FC<Props> = ({
  name,
  options,
  selectIndex,
  isCollapse,
}) => {
  const dispatch = useDispatch();

  const toggleDropDown = (e: FormEvent<HTMLSelectElement>, index: number) => {
    if (!isCollapse) {
      e.preventDefault();
    }

    dispatch({
      type: TOGGLE_SELECT_INPUT,
      payload: {
        index,
        data: !isCollapse,
      },
    });
  };

  return (
    <div className={styles.container}>
      {name}
      <div className={styles.selectContainer}>
        select <span>i</span>
      </div>
      {/* <select onMouseDown={(e) => toggleDropDown(e, selectIndex)} id={name}>
        {options.map((option, index) => (
          <option key={`${option}-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select> */}
    </div>
  );
};

interface Props {
  name: string;
  options: string[];
  selectIndex: number;
  isCollapse: boolean;
}
