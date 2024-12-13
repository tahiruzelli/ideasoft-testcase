import React from "react";
import SearchTemplate from "../src/components/templates/home/search-page-template";
import { Provider } from "react-redux";
import store from "@/src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <SearchTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
