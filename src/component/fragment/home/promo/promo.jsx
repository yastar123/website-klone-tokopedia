import Menu from "../../../element/menu";
import { ArrowRight } from "lucide-react";
import Img from "../../../element/img";

const Promo = () => {
  const promoImages = [
    "/public/static/images/promo-1.jpg",
    "/public/static/images/promo-2.jpg",
    "/public/static/images/promo-3.jpg",
    "/public/static/images/promo-4.jpg",
    "/public/static/images/promo-5.jpg",
    "/public/static/images/promo-6.jpg",
    "/public/static/images/promo-7.jpg",
    "/public/static/images/promo-8.jpg",
    "/public/static/images/promo-9.jpg",
    "/public/static/images/promo-10.jpg",
    "/public/static/images/promo-11.jpg",
    "/public/static/images/promo-12.jpg",
    "/public/static/images/promo-13.jpg",
    "/public/static/images/promo-14.jpg",
    "/public/static/images/promo-15.jpg",
    "/public/static/images/promo-16.jpg",
    "/public/static/images/promo-17.jpg",
    "/public/static/images/promo-18.jpg",
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
              <div
                key={index}
                className="flex-shrink-0 w-[150px] h-[250px] rounded-lg"
              >
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
