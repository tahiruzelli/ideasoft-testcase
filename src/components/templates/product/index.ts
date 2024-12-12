import { connect } from "react-redux";
import ProductOrganism from "../../organisms/product/product-detail";

const mapStateToProps = (state: any) => ({
  product: state?.product?.currentProduct,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrganism);
