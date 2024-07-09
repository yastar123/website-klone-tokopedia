import { NavLink } from "react-router-dom";
const KategoriTop = () => {
  return (
    <div className="sm:grid hidden grid-cols-2 pt-4">
      <div className="font-bold text-2xl">Kategori Pilihan</div>
      <div className="font-bold text-2xl">
        Top Up & Tagihan{" "}
        <NavLink to={"/"} className={"text-[#00aa5b] font-bold text-base"}>
          Lihat Semua
        </NavLink>
      </div>
    </div>
  );
};

export default KategoriTop;
