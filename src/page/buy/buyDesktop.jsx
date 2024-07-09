import Navbar from "../../component/fragment/home/navbar/navbar";
import Img from "../../component/element/img";
import { ArrowRight } from "lucide-react";
import Button from "../../component/element/button";
import { useEffect, useState } from "react";
import { getProduct, getProductById } from "../../service/serviceProduct";
import ProductBottom from "../../component/fragment/home/Product/productBottom";
import { Heart, Plus, Trash2, Minus, NotebookPen, X } from "lucide-react";
import Alert from "../../component/element/alert";
const BuyDesktop = () => {
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
    <div className="font-sans">
      <Navbar />
      <div className="font-bold text-2xl pl-5 pb-2 bg-slate-100">Keranjang</div>

      {alert.visible && (
        <div className="max-w-xl flex justify-evenly  mx-auto">
          <div>
            <Alert
              message={alert.message}
              totalCart={alert.totalCart}
              type={alert.type}
              className="p-3 py-4"
            />
          </div>
          <div className="flex justify-center items-center bg-red-200 border border-red-600 rounded-lg px-3">
            <Button onClick={() => setAlert({ ...alert, visible: false })}>
              <X className="w-8 h-8 text-red-600" />
            </Button>
          </div>
        </div>
      )}

      <div className="w-full px-4 bg-slate-100 h-full ">
        <div className="flex w-full">
          <div className="w-full">
            <div>
              <div className="flex rounded-t-lg shadow-lg py-4 bg-white mt-5">
                <input type="checkbox" className="w-[10%] rounded-xl " />
                <p className="font-bold ">Pilih Semua</p>
              </div>
              <div>
                {itemNumber.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-blg shadow-lg mt-2 w-full py-3"
                  >
                    <div className="flex">
                      <input type="checkbox" className="w-[10%] rounded-xl " />
                      <Img
                        src="/src/assets/image/badge.png"
                        alt="badge"
                        className={"w-[73%]"}
                      />
                    </div>
                    {product.map((product) => {
                      if (product.id === item) {
                        return (
                          <div key={product.id} className="px-5 flex mt-6">
                            <div className="w-[8%] pl-2">
                              <input
                                type="checkbox"
                                className=" rounded-xl form-checkbox h-6 w-6 "
                              />
                            </div>
                            <div className="w-[10%]">
                              <Img src={product.image} />
                            </div>
                            <div className="mx-4 w-full">
                              <div className="flex justify-between">
                                <div className="w-10/12">
                                  <p className="font-bold">{product.title}</p>
                                </div>
                                <div>
                                  <p className="font-bold">
                                    $. {product.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-end mt-6">
                                <div className="flex">
                                  <div className="flex gap-3 mx-6 self-end items-end">
                                    <NotebookPen className="text-slate-400" />
                                    <Heart className="text-slate-400" />
                                    <Trash2 className="text-slate-400" />
                                  </div>
                                  <div className="flex rounded-lg border border-slate-400 px-3 gap-3 py-0.5">
                                    <Button
                                      onClick={
                                        click > 0 ? handleClickMinus : null
                                      }
                                    >
                                      <Minus
                                        className="text-slate-400"
                                        width={25}
                                      />
                                    </Button>
                                    <div>
                                      <p>{click}</p>
                                    </div>
                                    <Button onClick={handleClickPlus}>
                                      <Plus
                                        className="text-[#00aa5b]"
                                        width={25}
                                      />
                                    </Button>
                                  </div>
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
              </div>
            </div>

            <div className="max-w-4xl">
              <div className="mt-7 ">
                <p className="text-2xl font-bold">Rekomendasi Untuk Mu</p>
              </div>
              <div className="flex flex-wrap ">
                {product.length > 0 &&
                  product.map((item) => (
                    <ProductBottom
                      key={item.id}
                      className="rounded-lg shadow-lg w-[23%] justify-center"
                    >
                      <ProductBottom.Header
                        src={item.image}
                        id={item.id}
                        className={"w-full h-[130px]"}
                      />
                      <ProductBottom.Body
                        name={item.title}
                        price={item.price}
                        id={item.id}
                        rating={item.rating.rate}
                        sold={item.rating.count}
                      />
                    </ProductBottom>
                  ))}
              </div>
            </div>
          </div>

          <div className=" bg-slate-100 w-1/2  mt-5 ml-6">
            <div className="bg-white  rounded-lg shadow-lg p-5 pb-8">
              <p className="font-bold text-xl">Ringkasan Belanja</p>
              <div className="flex justify-between mt-3 mb-6">
                <p className="text-slate-500">Total</p>
                <p className="font-bold">
                  ${filter.reduce((a, b) => a + b, 0)}
                </p>
              </div>
              <div className="flex justify-between bg-[#EDfff9] py-2 px-3 rounded-lg border border-[#43d6a5] ">
                <div className="flex gap-1 justify-center items-center ">
                  <Img
                    src="/src/assets/image/promo-coupon.svg"
                    className="mr-2"
                  />
                  <p>Makin hemat pakai promo</p>
                </div>
                <div className="flex justify-center items-center">
                  <ArrowRight />
                </div>
              </div>
              <div>
                <Button
                  onClick={handleTotal}
                  text="Beli"
                  className="bg-[#00aa5b] w-full font-bold text-xl text-white py-1 rounded-xl mt-8 hover:bg-white hover:text-[#00aa5b] hover:border hover:border-[#00aa5b]"
                />
              </div>
            </div>

            <div
              className="flex bg-red-100 rounded-lg p-4 mt-4 text-sm text-red-700"
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
                <span className="font-medium">Peringatan!</span> Terkadang Perlu
                di refresh beberapa kali agar menu keranjang tampil
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyDesktop;
