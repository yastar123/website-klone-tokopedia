import PropTypes from "prop-types";
import Button from "../element/button";
import { X, BookText, Star, ShoppingCart, Heart, Store, ScanBarcode, Users, UserCog } from "lucide-react";

const menuItems = [
  { icon: <BookText width={25} className="mr-2" />, text: "Daftar Transaksi" },
  { icon: <Star width={25} className="mr-2" />, text: "Ulasan" },
  { icon: <ShoppingCart width={25} className="mr-2" />, text: "Beli Lagi" },
  { icon: <Heart width={25} className="mr-2" />, text: "Wishlist" },
  { icon: <Store width={25} className="mr-2" />, text: "Toko yang di-follow" },
  { icon: <ScanBarcode width={25} className="mr-2" />, text: "Scan kode QR" },
  { icon: <Users width={25} className="mr-2" />, text: "Komunitas" },
  { icon: <UserCog width={25} className="mr-2" />, text: "Bantuan Tokopedia Care" }
];

const LayoutMenu = ({ onClick, className, isOpen = true}) => {
  return (
    <div className={`${className} ${isOpen ? "translate-y-0" : "translate-y-full"} fixed min-h-full bottom-0 right-0 bg-white w-full transform transition-transform duration-500 z-20`}>
      <div className="mb-1 px-3 bg-white">
        <div className="flex w-full mt-3 mb-7">
          <Button onClick={onClick} className="mr-2">
            <X width={25} className="text-slate-400 self-end" />
          </Button>
          <p className="font-bold text-lg self-end">Menu Utama</p>
        </div>
        <div className="w-full flex justify-between font-bold -tracking-wider">
          <Button
            text="Masuk"
            className="bg-[#00aa5b] text-white w-3/6 mr-3 rounded-xl py-1 hover:bg-white hover:text-[#00aa5b] hover:border hover:border-[#00aa5b]"
          />
          <Button
            text="Daftar"
            className=" w-3/6 bg-white text-[#00aa5b] border border-[#00aa5b] rounded-xl py-1 hover:bg-[#00aa5b] hover:text-white"
          />
        </div>
      </div>
      <div className="border border-t-8 border-slate-200 mt-6">
        {menuItems.map((item, index) => (
          <div className="flex py-4 hover:bg-slate-200 px-4" key={index}>
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

LayoutMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool
};

export default LayoutMenu;
