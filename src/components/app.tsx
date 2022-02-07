import { FC } from "react";
import { Provider } from "react-redux";
import { Home } from "../containers";
import store from "../store";
import { Header } from "./header";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
};
