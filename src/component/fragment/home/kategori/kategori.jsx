import KategoriTop from "./kategoriTop";
import KategoriMiddle from "./kategoriMiddle";
import KategoriBottom from "./kategoriButottom";
const Kategori = () => {
  return (
    <div className="sm:rounded-lg sm:shadow-inner sm:bg-slate-50 sm:px-4 sm:mt-5 sm:pl-2">
      <KategoriTop />
      <KategoriMiddle />
      <KategoriBottom />
    </div>
  );
};

export default Kategori;
