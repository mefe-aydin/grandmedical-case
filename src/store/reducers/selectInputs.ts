import { ISelectInput } from "../../commons/interfaces/ISelectInput";
import { TOGGLE_SELECT_INPUT } from "../actions/actionTypes";

const initialState: ISelectInput[] = [
  {
    name: "product",
    index: 0,
    isCollapse: false,
    options: ["item1", "item2", "item3", "item4", "item5"],
  },
  {
    name: "indication",
    index: 1,
    isCollapse: false,
    options: ["item1", "item2", "item3", "item4", "item5"],
  },
  { name: "profile", index: 2, isCollapse: false, options: ["item1"] },
  { name: "promo subject", index: 3, isCollapse: false, options: ["item1"] },
  { name: "promo material", index: 0, isCollapse: false, options: ["item1"] },
];

const selectInputs = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_SELECT_INPUT:
      const { index, data } = action.payload;
      const newState = state.map((item) => {
        if (item.index === index) {
          return { ...item, isCollapse: data };
        }

        return item;
      });

      return newState;
    default:
      return state;
  }
};

export default selectInputs;
