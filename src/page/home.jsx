import Navbar from "../component/fragment/home/navbar/navbar";
import Hero from "../component/element/hero";
import Kategori from "../component/fragment/home/kategori/kategori";
import Diskon from "../component/fragment/home/diskon/diskon";
import Trending from "../component/fragment/home/trending/trending";
import Pulsa from "../component/fragment/home/pulsa/pulsa";
import Promo from "../component/fragment/home/promo/promo";
import FlashSale from "../component/fragment/home/flashSale/flashSale";
import KategoriMobile from "../component/fragment/home/kategori/kategoriMobile/kategoriMobile";
import Pencarian from "../component/fragment/home/pencarian/pencarian";
import MenuUtama from "../component/layout/layoutMenu";
import { useState, useEffect } from "react";
import LayoutBottom from "../component/layout/layoutBottom";
import LayoutTop from "../component/layout/layoutTop";
import BayarDiTempat from "../component/fragment/home/bayarDiTempat/bayarDiTempat";
import Product from "../component/fragment/home/Product/product";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menu]);

  return (
    <div>
      <LayoutTop onClick={handleMenu} />
      <Navbar/>
      <div className="w-full sm:px-8 pt-4">
        <Hero />
        <Kategori />
        <Diskon />
        <Trending />
        <Pulsa />
        <KategoriMobile />
        <FlashSale />
        <Promo />
        <Pencarian />
        <BayarDiTempat />
        <Product />
      </div>
      {menu && <MenuUtama className={menu ? "translate-y-0" : <MenuUtama className={menu ? "translate-y-0" : "translate-y-full"} onClick={handleMenu} />} onClick={handleMenu} />}
      <LayoutBottom />
    </div>
  );
};


export default Home;
