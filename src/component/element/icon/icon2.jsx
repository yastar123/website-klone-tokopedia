import Button from "../button";
import { NavLink } from "react-router-dom";

const Icon2 = () => {
  const item = [
    {
      id: 1,
      text: "Promo hari Ini",
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
  ];
  return (
    <div
      className="flex sm:hidden space-x-3 w-full justify-center "
      style={{ width: "500px", height: "95px" }}
    >
      {item.map((item) => (
        <div key={item.id} className="w-full h-full">
          <div
            className="flex justify-center "
            style={{ height: "53px", width: "70px" }}
          >
            <NavLink
              key={item.id}
              to={"/"}
              className=" border-8 rounded-full border-slate-200"
            >
              <Button className="flex bg-slate-200 rounded-full ">
                <img
                  src={item.iconSrc}
                  alt="Icon"
                  className="object-cover"
                  width={38}
                />
              </Button>
            </NavLink>
          </div>
          <div
            className="overflow-y-visible text-sm text-center "
            style={{ height: "30px" }}
          >
            <p style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Icon2;
