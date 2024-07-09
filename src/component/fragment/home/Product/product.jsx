import ProductTop from "./productTop";
import ProductBottom from "./productBottom";
import { useEffect, useState } from "react";
import { getProduct, getCity } from "../../../../service/serviceProduct";
import ProductMobile from "./productMobile";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProduct(data);
    });

    getCity((data) => {
      setCity(data);
    });
  }, []);

  
  return (
    <div className="sm:rounded-lg sm:bg-slate-100 sm:shadow-inner sm:py-5">
      <ProductTop />
      <ProductMobile />
      <div className="mt-6 gap-2 ">
        {product.length > 0 &&
          product.map((item) => (
            <ProductBottom key={item.id} id={item.id} className={"w-[43%] sm:w-[15%]"}>
              <ProductBottom.Header src={item.image} id={item.id} className={"w-full h-[130px] "} />
              <ProductBottom.Body
                name={item.title}
                price={item.price}
                id={item.id}
                rating={item.rating.rate}
                sold={item.rating.count}
                className={"h-full"}
              />
            </ProductBottom>
          ))}
      </div>
    </div>
  );
};

export default Product;