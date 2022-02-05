import { FC } from "react";
import { Provider } from "react-redux";
import { Home } from "../containers";
import store from "../store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
