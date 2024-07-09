import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getProductById,
  getProductByIdDummy,
  getProductDummy,
} from "../../../service/serviceProduct";
import {
  MoveLeft,
  ShoppingCart,
  Menu,
  Share2,
  Search,
  Heart,
  Star,
  Camera,
  MessageSquareMore,
  Dot,
} from "lucide-react";
import Img from "../../../component/element/img";
import DiskonTimer from "../../../component/element/diskonTimer";
import Button from "../../../component/element/button";
import { ThumbsUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { User } from "lucide-react";
import ProductBottom from "../../../component/fragment/home/Product/productBottom";

const ProductcardMobile = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [dummy, setDummy] = useState({});
  const [getDummy, setGetDummy] = useState({});

  const [active, setActive] = useState("A");

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    getProductById(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  useEffect(() => {
    getProductByIdDummy(id, (data) => {
      setDummy(data);
    });
  }, [id]);

  useEffect(() => {
    getProductDummy((data) => {
      setGetDummy(data);
    });
  }, []);

  console.log(getDummy);
  console.log(product);

  return (
    <div className="font-inter font-sans bg-slate-200">
      <div className="flex justify-between border-b border-slate-300 fixed w-full py-3 bg-white">
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
      <div className="pt-14">
        <div className="bg-white">
          <div className="max-w-[200px] mx-auto bg-white">
            <Img src={product.image} className="obeject-cover" />
          </div>
        </div>
        <div className="flex justify-between bg-red-600 py-2 font-bold">
          <div className="ml-4 mt-2 w-3/5">
            <div className="w-3/4">
              <Img
                src="/src/assets/image/kejarDiskon.png"
                className="obeject-cover"
              />
            </div>
            <div className="flex items-center self-center">
              <div className="bg-white rounded-lg w-16 h-1.5 mr-2"></div>
              <p className="text-white text-sm tracking-wide">Segera Habis</p>
            </div>
          </div>
          <div className=" items-center mr-4">
            <p className="text-white text-sm mb-1">Berakhir Dalam</p>
            <DiskonTimer className={"text-white text-xs"} />
          </div>
        </div>
        <div className="px-3 mt-2 bg-white pb-3">
          <div className="flex items-center">
            <p className="font-bold text-2xl">${product.price}</p>
            <Img src="/src/assets/image/ongkir.png" className="w-1/4 ml-2" />
          </div>
          <div className="my-3 flex justify-between">
            <div className="w-4/5">
              <p className="float-left ">{product.title}</p>
            </div>
            <div className=" flex items-center">
              <Heart className="text-slate-600" width={25} />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <p>Terjual {product.rating?.count ?? "N/A"}</p>
            </div>
            <div className="flex border border-slate-400 px-4 py-1 rounded-lg hover:bg-slate-100">
              <Star className="text-yellow-500 " width={18} />
              <p className="text-slate-400 ml-2">
                {product.rating?.rate ?? "N/A"}
              </p>
            </div>
            <div className="flex border border-slate-400 px-4 py-1 rounded-lg hover:bg-slate-100">
              <Camera className="text-slate-600" width={18} />
              <p className="text-slate-400 ml-2">
                {dummy.minimumOrderQuantity}
              </p>
            </div>
            <div className="flex border border-slate-400 px-4 py-1 rounded-lg hover:bg-slate-100">
              <MessageSquareMore className="text-slate-600" width={18} />
              <p className="text-slate-400 ml-2">{dummy.weight}</p>
            </div>
          </div>
        </div>

        <div className="mt-2 bg-white px-2">
          <div className="flex justify-between py-4">
            <p className="font-bold text-lg">Ulasan Pembeli</p>
            <p className="text-[#00aa5b] font-bold">Lihat Semua</p>
          </div>
          <div className="flex gap-1">
            <Star className="text-yellow-500 flex mt-0.5 mr-1 " width={20} />
            {dummy.reviews && dummy.reviews.length > 0 ? (
              <div className="font-bold">
                {dummy.reviews && dummy.reviews.length > 0 ? (
                  <div className="flex gap-1 items-center">
                    <p className="text-xl font-bold mr-1">
                      {(
                        dummy.reviews.reduce(
                          (total, review) => total + review.rating,
                          0
                        ) / dummy.reviews.length
                      )
                        .toFixed(2)
                        .toString()
                        .substring(0, 4)}{" "}
                    </p>
                    <div className="flex items-center">
                      {" "}
                      {dummy.reviews.reduce(
                        (total, review) => total + review.rating,
                        0
                      )}{" "}
                      <span className="text-slate-400 ml-1 font-normal text-sm ">
                        Rating
                      </span>
                      <Dot className="text-slate-400" width={20} />
                      <p>
                        {dummy.reviews.length}{" "}
                        <span className="text-slate-400 font-normal text-sm ">
                          Ulasan
                        </span>
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="px-2 mt-4">
            {dummy.reviews && dummy.reviews.length > 0 ? (
              dummy.reviews.map((review, index) => (
                <div className="mt-4 border-b border-slate-200" key={index}>
                  <div className="flex mb-2 mt-4">
                    <p className="text-sm">Rating: 5 / {review.rating}</p>
                    <p className="text-slate-400 text-sm mx-2">{review.date}</p>
                  </div>
                  <div>
                    <div className="flex">
                      <div className="h-[40px] w-[40px] flex justify-center rounded-full bg-slate-400 items-center mr-3">
                        <User width={25} className="" />
                      </div>
                      <p className="self-center font-semibold">
                        {review.reviewerName}
                      </p>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {review.reviewerEmail}
                    </p>
                  </div>
                  <p className="mt-2">{review.comment}</p>
                  <div className="flex justify-between mt-8 mb-5">
                    <div className="flex text-slate-800">
                      <ThumbsUp width={15} className="mr-2" />
                      <p>Membantu</p>
                    </div>
                    <div className="flex text-slate-800">
                      <p>Lihat Balasan</p>
                      <ChevronDown width={15} className="mr-2" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white mt-2">
        <div className="flex justify-between py-4 px-4">
          <p className="font-bold text-xl">Produk Lainnya</p>
          <p className="text-[#00aa5b] font-bold">Lihat Semua</p>
        </div>
        <div className=" sm:bg-slate-100 mt-0 sm:p-5">
          <div className="mt-6 flex flex-wrap">
            {getDummy.products &&
              getDummy.products.length > 0 &&
              getDummy.products.map((item) => (
                <ProductBottom key={item.id} className="w-[45%]" id={item.id}>
                  <ProductBottom.Header src={item.images[0]} />
                  <ProductBottom.Body
                    name={item.title}
                    price={item.price}
                    id={item.id}
                    rating={item.rating}
                    sold={item.minimumOrderQuantity}
                    className={"w-1/2 "}
                  />
                </ProductBottom>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-20 bg-slate-100"></div>
      <div className="fixed bg-white py-3 bottom-0 w-full flex justify-evenly ">
        <div className="p-2 border border-slate-600 rounded-lg">
          <MessageSquareMore className="text-slate-600" width={25} />
        </div>
        <Button
          text={"Beli Sekarang"}
          className="bg-white text-[#00aa5b] hover:text-white border border-[#00aa5b] rounded-lg px-7 py-2 group hover:bg-[#00aa5b]"
          on
        />
        <Button
          text={"+ Keranjang"}
          className="bg-[#00aa5b] text-white hover:text-[#00aa5b] border border-[#00aa5b] rounded-lg px-7 py-2 group hover:bg-white"
        />
      </div>
    </div>
  );
};

export default ProductcardMobile;
