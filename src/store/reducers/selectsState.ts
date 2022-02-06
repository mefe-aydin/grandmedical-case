import { ISelect } from "../../commons/interfaces/ISelect";
import {
  SELECTED_OPTION,
  SELECTED_OPTION_CLEAR,
  TOGGLE_SELECT,
} from "../actions/actionTypes";

const initialState: ISelect[] = [
  {
    name: "product",
    index: 0,
    isCollapse: false,
    options: ["item1", "item2", "item3", "item4", "item5"],
    selectedOption: null,
  },
  {
    name: "indication",
    index: 1,
    isCollapse: false,
    options: ["item1", "item2", "item3", "item4", "item5"],
    selectedOption: null,
  },
  {
    name: "profile",
    index: 2,
    isCollapse: false,
    options: ["item1"],
    selectedOption: null,
  },
  {
    name: "promo subject",
    index: 3,
    isCollapse: false,
    options: ["item1"],
    selectedOption: null,
  },
  {
    name: "promo material",
    index: 4,
    isCollapse: false,
    options: ["item1"],
    selectedOption: null,
  },
];

const selectInputs = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_SELECT: {
      const { index, data } = action.payload;
      const newState = state.map((item) => {
        if (item.index === index) {
          return { ...item, isCollapse: data };
        }

        return item;
      });

      return newState;
    }
    case SELECTED_OPTION: {
      const { index, data } = action.payload;
      const newState = state.map((item) => {
        if (item.index === index) {
          return { ...item, selectedOption: data };
        }

        return item;
      });

      return newState;
    }
    case SELECTED_OPTION_CLEAR: {
      const newState = state.map((item) => {
        item.selectedOption = null;

        return item;
      });

      return newState;
    }
    default:
      return state;
  }
};

export default selectInputs;
