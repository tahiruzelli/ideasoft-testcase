import React from "react";
import ProductTemplate from "../src/components/templates/product";
import { Provider } from "react-redux";
import store from "@/src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <ProductTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
