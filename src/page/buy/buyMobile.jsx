import {
  ShoppingCart,
  Share2,
  Menu,
  Search,
  MoveLeft,
  Heart,
  NotebookPen,
  Plus,
  Minus,
} from "lucide-react";
import { getProduct, getProductById } from "../../service/serviceProduct";
import { useEffect, useState } from "react";
import ProductBottom from "../../component/fragment/home/Product/productBottom";
import Img from "../../component/element/img";
import Button from "../../component/element/button";
import Alert from "../../component/element/alert";
import { X } from "lucide-react";

const BuyMobile = () => {
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState([]);
  const [price, setPrice] = useState([]);
  const [filter, setFilter] = useState([]);
  const [click, setClick] = useState(1);
  const [getId, setGetId] = useState([]);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    totalCart: 0,
    visible: false,
  });

  useEffect(() => {
    getProduct((data) => {
      setProduct(data);
    });
  }, []);

  const handleClickPlus = () => {
    setClick(click + 1);
  };

  const handleClickMinus = () => {
    setClick(click - 1);
  };

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("id"));
    if (storedIds && storedIds.length > 0) {
      const item = [];
      const itemPromises = storedIds.map((id) => {
        return new Promise((resolve) => {
          getProductById(id, (data) => {
            item.push(data);
            resolve();
          });
        });
      });

      Promise.all(itemPromises).then(() => {
        setItem(storedIds);
      });
    }

    getProduct((data) => {
      if (data.length > 0) {
        const findItem = data.filter((item) => item.id === item);
        setItem(findItem);
      }

      const getIdLocalStorage = JSON.parse(localStorage.getItem("id"));
      setGetId(getIdLocalStorage);

      const parseId = getIdLocalStorage.map((numStr) => parseInt(numStr, 10));

      const prices = localStorage.getItem("prices")
        ? JSON.parse(localStorage.getItem("prices"))
        : [];

      setPrice(prices);

      const filteredPrices = parseId.map((index) => {
        if (index < prices.length) {
          return prices[index - 1];
        }
        return null;
      });

      setFilter(filteredPrices);
      setProduct(data);
    });
  }, []);

  var itemNumber = item.map((numStr) => parseInt(numStr, 10));

  const total = filter.reduce((a, b) => a + b, 0);
  const handleTotal = () => {
    setAlert({
      message: "Lakukan pembayaran sebesar: ",
      totalCart: "$" + total,
      type: "success",
      visible: true,
    });
  };

  return (
    <div>
      <div className="flex justify-between border-b top-0 right-0 border-slate-300 fixed w-full py-3 bg-white">
        <div className="flex">
          <MoveLeft className="text-slate-700 ml-3" width={19} />
        </div>
        <div className="flex">
          <Search className="text-slate-700 mr-3.5" width={19} />
          <Share2 className="text-slate-700 mr-3.5" width={19} />
          <ShoppingCart className="text-slate-700 mr-3.5" width={19} />
          <Menu className="text-slate-700 mr-3.5" width={19} />
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-between px-3 border border-b py-2">
          <p className="font-semibold">Produk yang di pilih</p>
          <p className="font-semibold text-[#00aa5b]">Hapus</p>
        </div>
        {alert.visible && (
          <div className="max-w-sm flex justify-evenly my-4  mx-auto">
            <div>
              <Alert
                message={alert.message}
                totalCart={alert.totalCart}
                type={alert.type}
                className={"py-2 px-4 text-sm"}
              />
            </div>
            <div className="flex justify-center items-center bg-red-200 border border-red-600 rounded-lg px-3">
              <Button onClick={() => setAlert({ ...alert, visible: false })}>
                <X className="w-4 h-4 text-red-600" />
              </Button>
            </div>
          </div>
        )}
        {itemNumber.map((item) => (
          <div key={item} className="mt-4 px-4">
            {product.map((products) => {
              if (products.id === item) {
                return (
                  <div key={products.id} className="flex gap-4">
                    <div>
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                    <div>
                      <Img
                        src={products.image}
                        className="w-[70px] h-[70px] object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <div>
                        <p className="font-bold">{products.title}</p>
                        <p>{products.price}</p>
                      </div>
                      <div className="flex justify-between w-full mt-4">
                        <div className="flex gap-4">
                          <NotebookPen
                            className="text-slate-700 mr-3.5"
                            width={19}
                          />
                          <Heart className="text-slate-700 mr-3.5" width={19} />
                        </div>
                        <div className="flex gap-2 rounded-lg border ">
                          <Plus className=" text-[#00aa5b]" width={19} />
                          <p>1</p>
                          <Minus className="text-slate-700 " width={19} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}

        <div
          className="flex bg-red-100  p-4 mt-4 text-sm text-red-700"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path>
          </svg>
          <div>
            <span className="font-medium">Peringatan!</span> Terkadang Perlu di
            refresh beberapa kali agar menu keranjang tampil
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="mt-14 mb-7 px-4">
          <p className="text-2xl font-bold">Rekomendasi Untuk Mu</p>
        </div>
        <div className="flex flex-wrap px-3 justify-center">
          {product.length > 0 &&
            product.map((item) => (
              <ProductBottom
                key={item.id}
                className="rounded-lg shadow-lg w-[45%] mt-2"
              >
                <ProductBottom.Header
                  src={item.image}
                  id={item.id}
                  className={"w-[45%] sm:w-[15%] justify-center mx-auto"}
                />
                <ProductBottom.Body
                  name={item.title}
                  price={item.price}
                  id={item.id}
                  rating={item.rating.rate}
                  sold={item.rating.count}
                  className="w-full"
                />
              </ProductBottom>
            ))}
        </div>
      </div>

      <div className="fixed bottom-0 w-full right-0 flex justify-between px-5 py-3 bg-white">
        <div className="flex self-end gap-2">
          <p className="text-slate-500 text-lg ">Total:</p>{" "}
          <p className="font-bold text-xl">
            ${filter.reduce((a, b) => a + b, 0)}
          </p>
        </div>
        <div className="bg-[#00aa5b] text- font-bold  text-white rounded-xl py-1 px-8 text-lg  hover:bg-white hover:text-[#00aa5b] hover:border hover:border-[#00aa5b]">
          <Button text="Beli"onClick={handleTotal} />
        </div>
      </div>
    </div>
  );
};

export default BuyMobile;
