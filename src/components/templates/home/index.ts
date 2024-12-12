import { connect } from "react-redux";
import HomeOrganism from "../../organisms/home/home-organism";
import { getProducts, setCurrentProduct } from "@/src/store/product/actions";

const mapStateToProps = (state: any) => ({
  products: state?.product?.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProducts: (payload: any) => dispatch(getProducts(payload)),
  setCurrentProduct: (payload: any) => dispatch(setCurrentProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeOrganism);
