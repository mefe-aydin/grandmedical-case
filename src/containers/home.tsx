import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../commons/interfaces/IReduxStore";
import { Select } from "../components";
import { TOGGLE_SELECT_INPUT } from "../store/actions/actionTypes";
import styles from "../commons/styles/home.module.css";

export const Home: FC = () => {
  const dispatch = useDispatch();
  const selectInputs = useSelector((state: IReduxStore) => state.selectInputs);

  console.log(selectInputs);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.selectsContainer}>
          {selectInputs?.map((select, index) => (
            <Select
              key={index}
              name={select.name}
              options={select.options}
              selectIndex={select.index}
              isCollapse={select.isCollapse}
            />
          ))}
        </div>
        <div className={styles.submitContainer}>
          <button>TEST</button>
        </div>
      </div>

      <button
        onClick={() => {
          dispatch({
            type: TOGGLE_SELECT_INPUT,
            payload: {
              index: 2,
              data: true,
            },
          });
        }}
      >
        DEDASDAS
      </button>
      <h1>home page</h1>
    </div>
  );
};
