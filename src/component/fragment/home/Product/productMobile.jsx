import { NavLink } from "react-router-dom";
const ProductMobile = () => {
  return (
    <div className="flex sm:hidden my-4">
      <div className="overflow-x-auto whitespace-nowrap">
        <style>
          {`
              .overflow-x-auto::-webkit-scrollbar {
                display: none; 
              }
              .overflow-x-auto {
                scrollbar-width: none;
              }
            `}
        </style>
        <div className="flex gap-4 px-2 py-4 bg-slate-50">
          <NavLink to={"/"} className="flex-none">
            <p className="hover:text-[#00aa5b] text-base font-sans font-semibold">Four You</p>
          </NavLink>
          <NavLink to={"/"} className="flex-none">
            <p className="hover:text-[#00aa5b] text-base font-sans font-semibold">Perlengkapan Ibadah</p>
          </NavLink>
          <NavLink to={"/"} className="flex-none">
            <p className="hover:text-[#00aa5b] text-base font-sans font-semibold">Perawatan Kulit</p>
          </NavLink>
          <NavLink to={"/"} className="flex-none">
            <p className="hover:text-[#00aa5b] text-base font-sans font-semibold">Baju renang Muslim</p>
          </NavLink>
          <NavLink to={"/"} className="flex-none">
            <p className="hover:text-[#00aa5b] text-base font-sans font-semibold">Mirip Yang Kamu Cek</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductMobile;
