import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";
import Input from "../../../element/input";
import Button from "../../../element/button";

const KategoriMiddle = () => {
  const scrollContainerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const images = [
    { src: "/public/image/kategori-1.webp", alt: "Hero 1" },
    { src: "/public/image/kategori-2.webp", alt: "Hero 2" },
    { src: "/public/image/kategori-3.webp", alt: "Hero 3" },
    { src: "/public/image/kategori-4.webp", alt: "Hero 4" },
    { src: "/public/image/kategori-5.webp", alt: "Hero 5" },
    { src: "/public/image/kategori-6.webp", alt: "Hero 6" },
  ];

  const categories = [
    "Pulsa",
    "Paket Data",
    "Flight",
    "Listrik PLN",
  ];

  useEffect(() => {
    if (scrollContainerRef.current) {
      setContainerWidth(scrollContainerRef.current.clientWidth);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sm:hidden xl:grid hidden grid-cols-2 font-sans">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="snap-x overflow-hidden scroll-smooth flex"
          ref={scrollContainerRef}
        >
          {images.map((image, index) => (
            <NavLink
              key={index}
              to="/"
              className="snap-start flex-shrink-0 p-6"
              style={{ width: containerWidth / 3 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover rounded-md shadow-md"
              />
            </NavLink>
          ))}
        </div>
        {hovered && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"
              onClick={scrollLeft}
            >
              &lt;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"
              onClick={scrollRight}
            >
              &gt;
            </button>
          </>
        )}
      </div>
      <div className="py-6">
        <div className="rounded-md">
          <div className="grid costom-colom">
            <NavLink to="/" className="flex justify-evenly costom-border py-2">
              {categories.map((category, index) => (
                <p key={index} className="font-bold text-slate-500 text-base hover:text-[#00aa5b]">
                  {category}
                </p>
              ))}
            </NavLink>
            <NavLink to="/" className="flex justify-center items-center">
              <EllipsisVertical size={20} />
            </NavLink>
          </div>
          <div className="py-6 flex justify-evenly">
            <div>
              <p className="text-slate-500 font-semibold -tracking-wide pb-2">
                Nomor Telepon
              </p>
              <Input
                placeholder="Masukan Nomor"
                className="px-3 border border-slate-200 py-2 rounded-lg"
              />
            </div>
            <div>
              <p className="text-slate-500 font-semibold -tracking-wide pb-2">
                Nominal
              </p>
              <Input
                className="px-3 border border-slate-200 py-2 rounded-lg"
              />
            </div>
            <div className="flex items-end">
              <Button className="text-slate-400 bg-slate-200 px-6 py-2 rounded-md">
                Beli
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KategoriMiddle;
