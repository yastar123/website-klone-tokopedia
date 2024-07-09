import DiskonTop from "./diskonTop";
import DiskonBottom from "./diskonBottom";
const Diskon = () => {
  return (
    <div className="w-full sm:px-5 rounded-lg sm:shadow-inner sm:bg-slate-50 sm:mt-6 xl:mt-5 pb-4 font-sans">
      <DiskonTop />
      <div className="bg-[#f9f09dda] sm:bg-white py-6 sm:py-0">
        <DiskonBottom />
      </div>
    </div>
  );
};

export default Diskon;
