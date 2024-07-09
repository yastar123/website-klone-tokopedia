import { MapPin, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
const NavbarBottom = () => {
  const items = [
    "Laptop",
    "Samsung S21",
    "Beras Sumo",
    "Dompet Wanita",
    "Tempat Sampah",
    "Gitar Akustik",
  ];

  return (
    <div className="flex sm:justify-end font-sans px-2">
      <div className="sm:m-auto hidden sm:flex"></div>
      <div className="xl:flex sm:hidden hidden justify-evenly w-1/2">
        {items.map((item, index) => (
          <NavLink
            to={"/"}
            key={index}
            className="text-slate-400 text-sm hover:text-[#00aa5b] s"
          >
            {item}
          </NavLink>
        ))}
      </div>
      <div className="sm:m-auto hidden sm:flex"></div>
      <div className="flex justify-evenly w-[230px] text-sm ">
        <MapPin className="text-[#00aa5b]" width={17} />
        <p className="text-sm">Dikirim ke </p>
        <p className="font-bold text-sm">Jakarta Pusat</p>
        <ChevronDown />
      </div>
    </div>
  );
};

export default NavbarBottom;
