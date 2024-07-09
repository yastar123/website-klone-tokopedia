import Button from "../../../element/button";
import { NavLink } from "react-router-dom";
import Icon1 from "../../../element/icon/icon1";
import Icon2 from "../../../element/icon/icon2";

const KategoriBottom = () => {
  const item = [
    {
      id: 1,
      text: "Belanja 2 Jam Tiba",
      iconSrc: "/public/static/images/icon-1.png",
    },
    {
      id: 2,
      text: "Kategori",
      iconSrc: "/public/static/images/icon-2.png",
    },
    {
      id: 3,
      text: "Handphone & Tablet",
      iconSrc: "/public/static/images/icon-3.png",
    },
    {
      id: 4,
      text: "Top-UP & Tagihan",
      iconSrc: "/public/static/images/icon-4.png",
    },
    {
      id: 5,
      text: "Elektronik",
      iconSrc: "/public/static/images/icon-5.png",
    },
    {
      id: 6,
      text: "Perawatan Hewan",
      iconSrc: "/public/static/images/icon-6.png",
    },
    { id: 7, text: "Keuangan", iconSrc: "/public/static/images/icon-8.png" },
    { id: 8, text: "Penerbangan", iconSrc: "/public/static/images/icon-7.png" },
    {
      id: 9,
      text: "Promo hari Ini",
      iconSrc: "/public/static/images/icon-9.png",
    },
    {
      id: 10,
      text: "Promo hari Ini",
      iconSrc: "/public/static/images/icon-10.png",
    },
    {
      id: 11,
      text: "Top Up & Tagihan",
      iconSrc: "/public/static/images/icon-11.png",
    },
    {
      id: 12,
      text: "Tokopedia NOW!",
      iconSrc: "/public/static/images/icon-12.png",
    },
    {
      id: 13,
      text: "Beli Lokal Now",
      iconSrc: "/public/static/images/icon-13.png",
    },
    {
      id: 14,
      text: "Tiket & Hiburan",
      iconSrc: "/public/static/images/icon-14.png",
    },
    { id: 15, text: "Fashion", iconSrc: "/public/static/images/icon-15.png" },
    { id: 16, text: "Tokopedia Seru", iconSrc: "/public/static/images/icon-16.png" },
  ];

  const item1 = [
    {
      id: 1,
      text: "Komputer & Laptop",
      iconSrc: "/public/static/images/icon-9.png",
    },
    {
      id: 2,
      text: "Promo hari Ini",
      iconSrc: "/public/static/images/icon-10.png",
    },
    {
      id: 3,
      text: "Top Up & Tagihan",
      iconSrc: "/public/static/images/icon-11.png",
    },
    {
      id: 4,
      text: "Tokopedia NOW!",
      iconSrc: "/public/static/images/icon-12.png",
    },
    {
      id: 5,
      text: "Beli Lokal Now",
      iconSrc: "/public/static/images/icon-13.png",
    },
    {
      id: 6,
      text: "Tiket & Hiburan",
      iconSrc: "/public/static/images/icon-14.png",
    },
    { id: 7, text: "Fashion", iconSrc: "/public/static/images/icon-15.png" },
    { id: 8, text: "Tokopedia Seru", iconSrc: "/public/static/images/icon-16.png" },
    {
      id: 1,
      text: "Belanja 2 Jam Tiba",
      iconSrc: "/public/static/images/icon-1.png",
    },
    {
      id: 2,
      text: "Kategori",
      iconSrc: "/public/static/images/icon-2.png",
    },
    {
      id: 3,
      text: "Handphone & Tablet",
      iconSrc: "/public/static/images/icon-3.png",
    },
    {
      id: 4,
      text: "Top-UP & Tagihan",
      iconSrc: "/public/static/images/icon-4.png",
    },
    {
      id: 5,
      text: "Elektronik",
      iconSrc: "/public/static/images/icon-5.png",
    },
    {
      id: 6,
      text: "Perawatan Hewan",
      iconSrc: "/public/static/images/icon-6.png",
    },
    { id: 7, text: "Keuangan", iconSrc: "/public/static/images/icon-8.png" },
    { id: 8, text: "Penerbangan", iconSrc: "/public/static/images/icon-7.png" },
  ];

  return (
    <div className="relative font-sans sm:py-4">
      <div
        className="overflow-x-auto whitespace-nowrap"
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
      >
        <div className="sm:flex hidden space-x-2 ">
          {item.map((item) => (
            <NavLink key={item.id} to={"/"} className="flex-none">
              <Button className="flex items-center px-4 py-1 rounded-xl bg-white border border-slate-300">
                <img
                  src={item.iconSrc}
                  alt="Icon"
                  className="w-8 h-8 object-cover"
                />
                <p className="text-sm font-normal">{item.text}</p>
              </Button>
            </NavLink>
          ))}
        </div>
        <div className="sm:flex xl:hidden pt-4 hidden space-x-2 ">
          {item1.map((item) => (
            <NavLink key={item.id} to={"/"} className="flex-none">
              <Button className="flex items-center px-4 py-1 rounded-xl bg-white border border-slate-300">
                <img
                  src={item.iconSrc}
                  alt="Icon"
                  className="w-8 h-8 object-cover"
                />
                <p className="text-sm font-normal">{item.text}</p>
              </Button>
            </NavLink>
          ))}
        </div>
        <div className="sm:hidden">
          <Icon1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
};

export default KategoriBottom;
