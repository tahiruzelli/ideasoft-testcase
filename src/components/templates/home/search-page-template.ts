import { connect } from "react-redux";
import SearchOrganism from "../../organisms/home/search-organism";
import { getProducts } from "@/src/store/product/actions";

const mapStateToProps = (state: any) => ({
  products: state?.product?.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProducts: (payload: any) => dispatch(getProducts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOrganism);
