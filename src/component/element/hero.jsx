import { useState, useEffect } from "react";
import Img from "./img";

const images = [
  "/public/static/images/hero-1.webp",
  "/public/static/images/hero-2.webp",
  "/public/static/images/hero-3.webp",
  "/public/static/images/hero-4.webp",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" sm:rounded-xl w-full ">
      <Img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="sm:rounded-xl object-center w-full h-[120px] sm:h-auto"
        to={"/"}
      />
    </div>
  );
};

export default Hero;
