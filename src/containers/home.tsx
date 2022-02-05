import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../commons/interfaces/IReduxStore";
import { Select } from "../components";
import { TOGGLE_SELECT } from "../store/actions/actionTypes";
import styles from "../commons/styles/home.module.css";

export const Home: FC = () => {
  const dispatch = useDispatch();
  const selectsState = useSelector((state: IReduxStore) => state.selectsState);

  console.log(selectsState);

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
          {selectsState.map((select) => (
            <span key={select.index}>{select.selectedOption}</span>
          ))}
          <button>TEST</button>
        </div>
      </div>

      <button
        onClick={() => {
          dispatch({
            type: TOGGLE_SELECT,
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
