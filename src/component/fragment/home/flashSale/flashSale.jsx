import FlashSaleTop from "./flashSaleTop";
import FlashSaleMiddle from "./flashSaleMiddle";
import FlashSaleBottom from "./flashSaleBottom";

const FlashSale = () => {
  return (
    <div className="my-2 block sm:hidden">
      <FlashSaleTop />
      <FlashSaleMiddle />
      <FlashSaleBottom />
    </div>
  );
};

export default FlashSale;
