import Img from "../../../element/img";

const products = [
  { id: 1, brand: "Telkomsel", image: "/public/static/images/pulsa-2.jpg" },
  { id: 2, brand: "XL", image: "/public/static/images/pulsa-3.jpg" },
  { id: 3, brand: "Indosat", image: "/public/static/images/pulsa-4.jpg" },
  { id: 4, brand: "Axis", image: "/public/static/images/pulsa-5.jpg" },
  { id: 5, brand: "Tri", image: "/public/static/images/pulsa-6.jpg" },
  { id: 6, brand: "Smartfen", image: "/public/static/images/pulsa-7.jpg" }
];

const PulsaBottom = () => {
  return (
    <div className="flex flex-wrap gap-y-2 justify-evenly py-4 bg-[#00a650]">
      {products.map((product) => (
        <div key={product.id} className="block shadow-m rounded-lg py-2 bg-white w-[110px] h-[90px] gap-1">
          <div className="pt-4 flex justify-center bg-white ">
            <Img
              src={product.image}
              to={"/"}
              className="rounded-full shadow-md py-1 px-2 object-cover w-[45px] h-[35px]"
            />
          </div>
          <div className="text-center">
            <p className="font-bold">{product.brand}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PulsaBottom;
