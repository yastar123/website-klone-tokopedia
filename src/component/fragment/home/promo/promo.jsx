import Menu from "../../../element/menu";
import { ArrowRight } from "lucide-react";
import Img from "../../../element/img";

const Promo = () => {
  const promoImages = [
    "/src/assets/image/promo-1.jpg",
    "/src/assets/image/promo-2.jpg",
    "/src/assets/image/promo-3.jpg",
    "/src/assets/image/promo-4.jpg",
    "/src/assets/image/promo-5.jpg",
    "/src/assets/image/promo-6.jpg",
    "/src/assets/image/promo-7.jpg",
    "/src/assets/image/promo-8.jpg",
    "/src/assets/image/promo-9.jpg",
    "/src/assets/image/promo-10.jpg",
    "/src/assets/image/promo-11.jpg",
    "/src/assets/image/promo-12.jpg",
    "/src/assets/image/promo-13.jpg",
    "/src/assets/image/promo-14.jpg",
    "/src/assets/image/promo-15.jpg",
    "/src/assets/image/promo-16.jpg",
    "/src/assets/image/promo-17.jpg",
    "/src/assets/image/promo-18.jpg",
  ];

  return (
    <div className="sm:hidden">
      <div>
        <Menu
          text="Pilihan Promo Hari Ini"
          icon={<ArrowRight className="text-slate-400" width={25} />}
        />
      </div>
      <div className="flex h-[250px]">
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
          <div className="flex gap-2">
            {promoImages.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-[150px] h-[250px] rounded-lg">
                <Img src={src} className="object-center rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
