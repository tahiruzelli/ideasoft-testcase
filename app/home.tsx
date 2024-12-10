import React from "react";
import HomeTemplate from "../src/components/templates/home";
import { Provider } from "react-redux";
import store from "@/src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <HomeTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
