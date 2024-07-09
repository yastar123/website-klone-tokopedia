import TrendingTop from "./trendingTop";
import TrendingBottom from "./trendingBottom";
const Trending = () => {
  return (
    <div className="w-full py-3 px-4 sm:rounded-lg  sm:shadow-inner mb-4 sm:mt-4 sm:bg-slate-50 block">
      <TrendingTop />
      <TrendingBottom />
    </div>
  );
};

export default Trending;
