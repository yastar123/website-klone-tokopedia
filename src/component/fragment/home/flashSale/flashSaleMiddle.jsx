import Img from "../../../element/img";

const flashSaleMiddle = () => {
  const items = [
    { src: "/public/static/images/flashSale-a.jpg", to:"/", label: "Metocol" },
    { src: "/public/static/images/flashSale-2.jpg", to:"/", label: "Orinoco" },
    { src: "/public/static/images/flashSale-3.jpg", to:"/", label: "Baneskiy" },
    { src: "/public/static/images/flashSale-4.jpg", to:"/", label: "Jiniso.id" },
    { src: "/public/static/images/flashSale-5.jpg", to:"/", label: "Lindy" },
    { src: "/public/static/images/flashSale-6.jpg", to:"/", label: "Onassis" },
    { src: "/public/static/images/flashSale-7.jpg", to:"/", label: "houroffer" },
    { src: "/public/static/images/flashSale-8.jpg", to:"/", label: "IGA" },
    { src: "/public/static/images/flashSale-9.jpg", to:"/", label: "Kobaya" },
    { src: "/public/static/images/flashSale-10.jpg", to:"/", label: "Liem" },
    { src: "/public/static/images/flashSale-11.jpg", to:"/", label: "Digital" },
    { src: "/public/static/images/flashSale-12.jpg", to:"/", label: "Informa" },
    { src: "/public/static/images/flashSale-13.jpg", to:"/", label: "X&W" },
    { src: "/public/static/images/flashSale-14.jpg", to:"/", label: "Onda" },
    { src: "/public/static/images/flashSale-15.jpg", to:"/", label: "Muscle" },
  ];

  return (
    <div className="flex">
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
        <div className="flex py-6 gap-5">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[80px]">
              <Img src={item.src} className="object-cover rounded-full" to={item.to} />
              <p className="text-center font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default flashSaleMiddle;
