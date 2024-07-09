import Img from "../../../element/img";

const items = [
  {
    src: "/public/static/images/diskon-2webp.jpg",
    price: "Rp85.000",
    originalPrice: "Rp 222.000",
    discount: "61%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-3webp.jpg",
    price: "Rp24.500",
    originalPrice: "Rp 52.000",
    discount: "71%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-4webp.jpg",
    price: "Rp10.000",
    originalPrice: "Rp 25.000",
    discount: "67%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-5webp.jpg",
    price: "Rp563.000",
    originalPrice: "Rp 1.250.000",
    discount: "77%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-6webp.jpg",
    price: "Rp154.000",
    originalPrice: "Rp 250.000",
    discount: "59%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-7webp.jpg",
    price: "Rp2.000",
    originalPrice: "Rp 5.000",
    discount: "53%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-8webp.jpg",
    price: "Rp63.000",
    originalPrice: "Rp 120.000",
    discount: "80%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-9webp.jpg",
    price: "Rp13.000",
    originalPrice: "Rp 25.000",
    discount: "88%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-10webp.jpg",
    price: "Rp1.500",
    originalPrice: "Rp 4.000",
    discount: "59%",
    status: "Segera Habis",
    progress: 80,
  },
  {
    src: "/public/static/images/diskon-11webp.jpg",
    price: "Rp55.000",
    originalPrice: "Rp 25.000",
    discount: "78%",
    status: "Segera Habis",
    progress: 80,
  },
];

const DiskonBottom = () => {
  return (
    <div className="flex">
      <div className="sm:w-[370px] w-[1050px] h-[280px] color-costom mr-4 xl:flex hidden justify-center items-start p-4 rounded-lg">
        <Img src="/public/static/images/diskon-1.webp" className="w-[130px] h-[280px]" />
      </div>

      <div className="overflow-x-auto whitespace-nowrap ">
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
        <div className="flex gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 sm:w-60 w-40 bg-white shadow rounded-lg"
            >
              <div className="sm:h-40  bg-gray-200 rounded-t-lg overflow-hidden">
                <Img src={item.src} className="object-cover w-full h-full" />
              </div>
              <div className="p-2">
                <p className="font-bold text-lg">{item.price}</p>
                <div className="flex gap-1">
                  <p className="text-sm text-gray-500 line-through">
                    {item.originalPrice}
                  </p>
                  <p className="text-sm text-red-500">{item.discount}</p>
                </div>
                <div className="sm:pt-8 pt-4">
                  <div className="flex h-1">
                    <div className="w-4/5 bg-red-400 rounded-l-lg"></div>
                    <div className="w-1/5 bg-slate-300 rounded-r-lg"></div>
                  </div>
                  <p className="text-sm font-bold text-slate-600">
                    {item.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiskonBottom;
