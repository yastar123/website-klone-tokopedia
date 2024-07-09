import { Timer } from "lucide-react";
import Img from "../../../element/img";

const products = [
  {
    id: 1,
    to:"/",
    price: "Rp339.000",
    cashback: "CashBack 5rb",
    image: "/public/static/images/flashSale-16.jpg",
  },
  {
    id: 2,
    to:"/",
    price: "Rp520.000",
    cashback: "CashBack 5rb",
    image: "/public/static/images/flashSale-17.jpg",
  },
  {
    id: 3,
    to:"/",
    price: "Rp120.000",
    cashback: "CashBack 5rb",
    image: "/public/static/images/flashSale-18.jpg",
  },
  {
    id: 4,
    to:"/",
    price: "Rp299.000",
    cashback: "CashBack 5rb",
    image: "/public/static/images/flashSale-19.jpg",
  },
  {
    id: 5,
    to:"/",
    price: "Rp150.000",
    cashback: "CashBack 5rb",
    image: "/public/static/images/flashSale-20.jpg",
  },
];

const FlashSaleBottom = () => {
  return (
    <div className="block sm:hidden">
      <div className="px-6">
        <div className="flex rounded-r-lg rounded-l-lg bg-red-50 py-1 justify-evenly px-3">
          <div className="w-3/5">Berakhir Dalam</div>
          <div className="font-bold text-red-500 w-2/5 text flex place-items-center justify-end">
            <Timer />
            <p>3 Hari</p>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="overflow-x-auto whitespace-nowrap">
          <style>
            {`
              .overflow-x-auto::-webkit-scrollbar {
                display: none; 
              }
              .overflow-x-auto {
                scrollbar-width: none;
              }
            `}
          </style>
          <div className="flex gap-3">
            {products.map((product) => (
              <div key={product.id} className="w-[170px] shadow-md">
                <div>
                  <Img src={product.image} to={product.to} />
                </div>
                <div className="py-2 px-4">
                  <p className="font-bold text-lg">{product.price}</p>
                  <div className="text-red-500 border border-red-500 bg-red-100 font-bold text-sm text-center mt-2 w-[105px]">
                    <p>{product.cashback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleBottom;
