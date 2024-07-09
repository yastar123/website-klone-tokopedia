import { Home, TvMinimalPlay, Cuboid, Heart, NotepadText } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { icon: Home, label: "Home" },
  { icon: TvMinimalPlay, label: "Feed" },
  { icon: Cuboid, label: "Official Store" },
  { icon: Heart, label: "Wishlist" },
  { icon: NotepadText, label: "Transaksi" },
];

const LayoutBottom = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 bg-slate-100 sm:hidden">
      <div className="flex justify-evenly">
        {items.map((item, index) => (
          <NavLink key={index} to={"/"} className="w-[70px]">
            <div className="flex justify-center">
              <item.icon className="text-[#333] hover:text-[#00aa5b]" />
            </div>
            <div className="text-center">
              <p className="text-slate-500 text-xs mt-1">{item.label}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LayoutBottom;
