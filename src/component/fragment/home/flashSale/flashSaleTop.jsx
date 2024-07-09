// import { ArrowRight } from "lucide-react"
// import { NavLink } from "react-router-dom"
// const FlashSaleTop = () => {
//   return (
//     <div className="w-full py-2 px-6 flex justify-between">
//       <div className="font-bold text-lg w-5/6">Serbu flash sale-nya! ⚡</div>
//       <NavLink className="w-8 rounded-full items-center flex justify-center bg-white shadow-md h-[30px]" to="/">
//         <ArrowRight className="text-slate-400 " width={25} />
//       </NavLink>
//     </div>
//   )
// }

// export default FlashSaleTop

import Menu from "../../../element/menu";
import { ArrowRight } from "lucide-react";
const FlashSaleTop = () => {
  return (
    <Menu
      text="Serbu flash sale-nya! ⚡"
      icon={<ArrowRight className="text-slate-400 " width={25} />}
    />
  );
};

export default FlashSaleTop;
