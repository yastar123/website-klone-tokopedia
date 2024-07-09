import ProductCardDekstop from "./productCardDekstop";
import ProductCardMobile from "./producCardMobile/productCardMobile";
import useDeviceType from "../../component/element/useDeviceType";

const Product = () => {
  const { isMobile } = useDeviceType();

  return <div>{isMobile ? <ProductCardMobile /> : <ProductCardDekstop />}</div>;
};

export default Product;
