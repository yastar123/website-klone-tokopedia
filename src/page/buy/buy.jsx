import BuyDesktop from "./buyDesktop";
import BuyMobile from "./buyMobile";
import useDeviceType from "../../component/element/useDeviceType";

const Buy = () => {
  const { isMobile } = useDeviceType();

  return <div>{isMobile ? <BuyMobile /> : <BuyDesktop />}</div>;
};

export default Buy;
