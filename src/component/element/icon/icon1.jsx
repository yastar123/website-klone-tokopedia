import Button from "../button";
import { NavLink } from "react-router-dom";

const Icon1 = () => {
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
  ];
  return (
    <div
      className="flex sm:hidden space-x-3 mt-4 ml-1.5 w-full justify-center "
      style={{ width: "500px", height: "100px" }}
    >
      {item.map((item) => (
        <div key={item.id} className="w-full h-full">
          <div
            className="flex justify-center "
            style={{ height: "50px", width: "70px" }}
          >
            <NavLink
              key={item.id}
              to={"/"}
              className="bg-slate-200 border-8 rounded-full border-slate-200"
            >
              <Button className="flex bg-slate-200 rounded-full ">
                <img
                  src={item.iconSrc}
                  alt="Icon"
                  className="object-cover"
                  width={35}
                />
              </Button>
            </NavLink>
          </div>
          <div
            className="overflow-y-visible text-sm text-center "
            style={{ height: "70px" }}
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

export default Icon1;
