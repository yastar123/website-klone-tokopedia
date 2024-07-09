import { useState, useEffect } from "react";
import Img from "../../../element/img";
import Button from "../../../element/button";

const products = [
  {
    src: "/public/image/trending-1.webp",
    title: "Kulkas 2 Pintu",
    description: "749rb produk",
  },
  {
    src: "/public/image/trending-2.webp",
    title: "Celana Pria",
    description: "398rb produk",
  },
  {
    src: "/public/image/trending-3.webp",
    title: "Redmi Note 10",
    description: "112rb produk",
  },
  {
    src: "/public/image/trending-4.webp",
    title: "Iphone 12",
    description: "231rb produk",
  },
  {
    src: "/public/image/trending-5.webp",
    title: "Ps 4",
    description: "30rb produk",
  },
  {
    src: "/public/image/trending-6.webp",
    title: "Mesin Cuci",
    description: "128rb produk",
  },
  {
    src: "/public/image/trending-7.webp",
    title: "Headset Gaming",
    description: "216rb produk",
  },
  {
    src: "/public/image/trending-8.webp",
    title: "Susu Bubuk",
    description: "36rb produk",
  },
];

const TrendingBottom = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDisplayedProducts(products);
      }
      else if (window.innerWidth >= 768) { 
        setDisplayedProducts(products.slice(0, 4));
      } else {
        setDisplayedProducts(products.slice(0, 4));
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return (
    <div className="flex flex-wrap  sm:justify-evenly xl:justify-center gap-1.5">
      {displayedProducts.map((product, index) => (
        <Button
          key={index}
          className="rounded-lg shadow-xl flex xl:gap-8 py-2 px-4 xl:mx-2 xl:mt-3  sm:w-[310px] lg:w-[265px] sm:h-[100px] w-[161px]"
        >
          <div className="">
            <Img src={product.src} to="/" className="object-cover w-full sm:h-[80px]" />
          </div>
          <div className="self-center w-full text-xs sm:text-lg">
            <p className="font-bold">{product.title}</p>
            <p className="text-slate-400 font-normal">{product.description}</p>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default TrendingBottom;
