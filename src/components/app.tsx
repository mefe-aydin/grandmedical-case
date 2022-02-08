import { FC } from "react";
import { Provider } from "react-redux";
import { Home } from "../containers";
import store from "../store";
import { Header } from "./header";
import { LeftMenu } from "./leftMenu";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <LeftMenu />
        <div>
          <Header />
          <Home />
        </div>
      </div>
    </Provider>
  );
};
