import { connect } from "react-redux";
import SplashOrganism from "../../organisms/home/home-organism";
import { getProducts } from "@/src/store/product/actions";

const mapStateToProps = (state: any) => ({
  products: state?.product?.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProducts: (payload: any) => dispatch(getProducts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashOrganism);
