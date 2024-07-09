import {
  getProductById,
  getProductByIdDummy,
} from "../../service/serviceProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/fragment/home/navbar/navbar";
import Img from "../../component/element/img";
import { Star } from "lucide-react";
import { Dot } from "lucide-react";
import { NavLink } from "react-router-dom";
import ProductCardDetail from "../../component/layout/productCard/productCardDetail";
import ProductCardInfoPenting from "../../component/layout/productCard/productCardInfoPenting";
import {
  Plus,
  Minus,
  Pencil,
  MessageSquareMore,
  Heart,
  Share2,
} from "lucide-react";
import Button from "../../component/element/button";

const ProductCardDekstop = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [dummy, setDummy] = useState({});
  const [active, setActive] = useState("A");
  const [button, setButton] = useState(1);

  const handleClick = () => {
    let storedIds = JSON.parse(localStorage.getItem("id")) || [];
    storedIds.push(id);
    localStorage.setItem("id", JSON.stringify(storedIds));
  };

 

  const renderButtonPlus = () => {
    setButton((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("click", newCount);
      return newCount;
    });
  };

  const renderButtonMinus = () => {
    setButton(button - 1);
  };

  const renderActive = () => {
    switch (active) {
      case "A":
        return <ProductCardDetail />;
      case "B":
        return <ProductCardInfoPenting />;
    }
  };

  useEffect(() => {
    getProductById(id, (data) => {
      setProduct(data);
    });

    getProductByIdDummy(id, (data) => {
      setDummy(data);
    });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="font-sans mt-5">
        <div className="max-w-6xl flex justify-center m-auto">
          <div className="grid grid-cols-3">
            <div className="flex justify-center relative">
              <div className="fixed translate-x-32">
                <div className="rounded-lg w-1/2">
                  <Img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg object-cover shadow"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="p-2">
                <p className="font-bold text-lg">{product.title}</p>
                <div className="flex">
                  <p>
                    Terjual{" "}
                    <span className="text-slate-400">
                      {product.rating?.count ?? "N/A"}
                    </span>
                  </p>
                  <Dot className="text-black font-bold ml-1" />
                  <Star className="text-yellow-500 " width={18} />
                  <p>
                    5{" "}
                    <span className="text-slate-400">
                      ({product.rating?.rate ?? "N/A"} rating)
                    </span>
                  </p>
                </div>
                <div className="my-2">
                  <p className="font-bold text-3xl">${product.price}</p>
                </div>
                <div className="block">
                  <div className="flex border-b border-t py-2 mt-6 border-slate-400">
                    <button className=" mx-4" onClick={() => setActive("A")}>
                      <NavLink className="">
                        <p className="font-bold text-base text-slate-400">
                          Detail
                        </p>
                      </NavLink>
                    </button>

                    <button className=" mx-4" onClick={() => setActive("B")}>
                      <NavLink className="">
                        <p className="font-bold text-base text-slate-400">
                          Info Penting
                        </p>
                      </NavLink>
                    </button>
                  </div>
                  {renderActive()}
                </div>
              </div>
            </div>
            <div className=" pt-4 px-16">
              <div className="relative">
                <div className="rounded-lg shadow-lg pb-4 pt-2 border p-2 px-3 fixed">
                  <div className="mb-4 py-1 font-bold text-lg">
                    <p>Atur jumlah dan catatan</p>
                  </div>
                  <div className="flex">
                    <div className="border border-slate-400 py-1 rounded-lg flex">
                      <button
                        className="mx-4"
                        onClick={button > 0 ? renderButtonMinus : null}
                      >
                        <Minus className="text-black" width={18} />
                      </button>
                      <p className="mx-2 ">
                        {button > dummy.stock ? dummy.stock : button}
                      </p>
                      <button className="mx-4" onClick={renderButtonPlus}>
                        <Plus className="text-[#00aa5b]" width={18} />
                      </button>
                    </div>
                    <p className="ml-4 self-end items-end">
                      Stock:{" "}
                      <span className="text-[#F36819] font-bold">
                        Sisa {dummy.stock}
                      </span>
                    </p>
                  </div>
                  <div className="flex mt-2 mb-8">
                    <Pencil className="text-[#00aa5b]" width={18} />
                    <p className="text-[#00aa5b] font-bold text-sm ml-2">
                      Tambah Catatan
                    </p>
                  </div>
                  <div className="flex mt-1 text justify-between items-end">
                    <p className="text-slate-400 text-base">Subtotal</p>
                    <p className="font-bold text-2xl">
                      $
                      {(button < dummy.stock
                        ? product.price * button
                        : dummy.stock * product.price
                      )
                        .toString()
                        .substring(0, 5)}
                    </p>
                  </div>
                  <div className="flex justify-evenly font-bold">
                    <Button
                      className="bg-white text-[#00aa5b] w-[45%] mt-4 border border-[#00aa5b] rounded-xl py-2 hover:bg-[#00aa5b] hover:text-white hover:border hover:border-[#8a8d8c]"
                      onClick={handleClick}
                    >
                      <NavLink to={"/show"}>Beli</NavLink>
                    </Button>
                    <Button
                      text="+ Keranjang"
                      className="bg-[#00aa5b] text-white w-[45%] mt-4 rounded-xl py-2 hover:bg-white hover:text-[#00aa5b] hover:border hover:border-[#00aa5b]"
                      onClick={handleClick}
                    />
                  </div>
                  <div className="flex mt-4 justify-center">
                    <div className="flex mx-1">
                      <MessageSquareMore
                        className="text-black mr-3"
                        width={15}
                      />
                      <p className="font-bold text-xs mt-1">Chat</p>
                    </div>
                    <div className="flex mx-1 border-l border-r border-slate-400 px-4">
                      <Heart className="text-black mr-3" width={15} />
                      <p className="font-bold text-xs mt-1">Wishlist</p>
                    </div>
                    <div className="flex mx-1">
                      <Share2 className="text-black mr-3" width={15} />
                      <p className="font-bold text-xs mt-1">Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDekstop;
