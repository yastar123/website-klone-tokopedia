import propTypes from "prop-types";

const categories = [
  { text: "For You", from: "#2C3E50", to: "#4CA1AF" },
  { text: "Dekorasi", from: "#1D4350", to: "#A43931" },
  { text: "Furniture", from: "#E0EAFC", to: "#CFDEF3" },
  { text: "Atasan Pria", from: "#4CA1AF", to: "#C4E0E5" },
  { text: "Mirip yang Kamu cek", from: "#834d9b", to: "#d04ed6" },
];

const CategoryItem = ({ text, from, to }) => (
  <div
    className="lg:w-1/6 ml-4 sm:w-32 pb-7 pl-2 bg-gradient-to-r rounded-lg"
    style={{ backgroundImage: `linear-gradient(to right, ${from}, ${to})` }}
  >
    <p className="text-base font-bold text-white">{text}</p>
  </div>
);

const ProductTop = () => {
  return (
    <div className="sm:flex hidden gap-2 flex-wrap">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          text={category.text}
          from={category.from}
          to={category.to}
        />
      ))}
    </div>
  );
};

categories.propTypes = {
  text: propTypes.string,
  from: propTypes.string,
  to: propTypes.string,
};

export default ProductTop;
