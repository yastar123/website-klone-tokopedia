import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getProductById,
  getProductByIdDummy,
} from "../../../service/serviceProduct";
import { User, Smartphone, QrCode, ThumbsUp, ChevronDown } from "lucide-react";

const ProductCardDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [dummy, setDummy] = useState({});

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

  return (
    <div className="font-sans">
      <div className="py-5">
        <p className="text-slate-400">
          Kondisi: <span className="text-black">Baru</span>
        </p>
        <p className="text-slate-400">
          Min. Pemesanan: <span className="text-black"> 1 Buah</span>
        </p>
        <p>
          <p className="text-slate-400">
            category:
            <span className="text-black"> {product.category}</span>
          </p>
        </p>
        <p className="text-slate-400">
          description:
          <span className="text-black"> {product.description}</span>
        </p>
      </div>
      <div className="border-t border-slate-400 pb-5 pt-3 border-b">
        <div>
          <p className="font-bold text-base my-2">
            Beli di aplikasi, makin banyak promo!
          </p>
          <div className="flex justify-evenly">
            <div className="pt-1">
              <Smartphone className="text-[#00aa5b]" />
            </div>
            <div className="mx-2">
              <p>
                Scan QR-nya untuk lihat barang ini di aplikasi Tokopedia. Bebas
                ongkir, lho~
              </p>
            </div>
            <div className="w-[50%]">
              <div className="flex border border-slate-400  justify-center items-center px-2 rounded-lg py-1">
                <QrCode className="text-slate-400" width={15} />
                <p className="font-bold text-sm ml-2 mr-1">Scan</p>
                <p className="font-bold text-sm ">QR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-bold text-lg">Ulasan</p>
      </div>
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
              <p className="text-slate-400 text-sm">{review.reviewerEmail}</p>
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
  );
};

export default ProductCardDetail;
