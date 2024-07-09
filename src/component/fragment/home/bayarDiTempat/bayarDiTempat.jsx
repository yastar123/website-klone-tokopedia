import { NavLink } from "react-router-dom";
import { useState } from "react";
import Img from "../../../element/img";
import { Crown, Star } from "lucide-react";

const BayarDiTempat = () => {
  const initialImages = [0, 1, 2, 3, 4, 5];

  const [currentImages, setCurrentImages] = useState(initialImages);

  const images = [
      {
        id: 1,
        src: "/public/static/images/bayarDiTempat-1.png",
        text: "LIGER Handsfree headset earphone L-10 METAL stereo & bass",
        price: "Rp75.000",
        location: "Jakarta",
        rating: "4.8",
        sold: "250",
      },
      {
        id: 2,
        src: "/public/static/images/bayarDiTempat-2.png",
        text: "kaos import lengan pendek pria | baju pria import polos kaos",
        price: "Rp80.000",
        location: "Surabaya",
        rating: "4.6",
        sold: "300",
      },
      {
        id: 3,
        src: "/public/static/images/bayarDiTempat-3.png",
        text: "kaos cowok tribal lengan pendek navy / baju kaos pria motif tribal",
        price: "Rp120.000",
        location: "Bandung",
        rating: "4.7",
        sold: "500",
      },
      {
        id: 4,
        src: "/public/static/images/bayarDiTempat-4.png",
        text: "Ellipsesinc - Kaos Oversize Pria Wanita Polos",
        price: "Rp90.000",
        location: "Yogyakarta",
        rating: "4.5",
        sold: "400",
      },
      {
        id: 5,
        src: "/public/static/images/bayarDiTempat-5.png",
        text: "Ellipsesinc - Kaos Oversize Pria Wanita NY",
        price: "Rp70.000",
        location: "Semarang",
        rating: "4.4",
        sold: "350",
      },
      {
        id: 6,
        src: "/public/static/images/bayarDiTempat-6.png",
        text: "HIPPO ORIGINAL HIP HANDSFEE UNIVERSAL BASS POWERFUL",
        price: "Rp85.000",
        location: "Medan",
        rating: "4.9",
        sold: "200",
      },
      {
        id: 7,
        src: "/public/static/images/bayarDiTempat-7.png",
        text: "baju kaos hitam lengan pendek / baju kaos ditro hitam",
        price: "Rp150.000",
        location: "Bali",
        rating: "4.7",
        sold: "420",
      },
      {
        id: 8,
        src: "/public/static/images/pencarian-8.jpg",
        text: "Ocean Breeze Parfum Unisex 50ML",
        price: "Rp65.000",
        location: "Makassar",
        rating: "4.6",
        sold: "380",
      },
      {
        id: 9,
        src: "/public/static/images/pencarian-9.jpg",
        text: "Vanilla Essence Parfum Wanita 75ML",
        price: "Rp95.000",
        location: "Palembang",
        rating: "4.5",
        sold: "310",
      },
      {
        id: 10,
        src: "/public/static/images/pencarian-10.jpg",
        text: "Woodland Musk Parfum Pria 100ML",
        price: "Rp140.000",
        location: "Malang",
        rating: "4.8",
        sold: "330",
      },
      {
        id: 11,
        src: "/public/static/images/pencarian-11.jpg",
        text: "Tropical Bliss Parfum Unisex 50ML",
        price: "Rp70.000",
        location: "Lampung",
        rating: "4.3",
        sold: "270",
      },
      {
        id: 12,
        src: "/public/static/images/pencarian-12.jpg",
        text: "Classic Charm Parfum Wanita 100ML",
        price: "Rp130.000",
        location: "Bogor",
        rating: "4.7",
        sold: "290",
      },
      {
        id: 13,
        src: "/public/static/images/pencarian-13.jpg",
        text: "Energetic Sport Parfum Pria 75ML",
        price: "Rp85.000",
        location: "Bekasi",
        rating: "4.5",
        sold: "410",
      },
      {
        id: 14,
        src: "/public/static/images/pencarian-14.jpg",
        text: "Romantic Rose Parfum Wanita 50ML",
        price: "Rp75.000",
        location: "Depok",
        rating: "4.6",
        sold: "350",
      },
      {
        id: 15,
        src: "/public/static/images/pencarian-15.jpg",
        text: "Mystic Oud Parfum Pria 100ML",
        price: "Rp160.000",
        location: "Tangerang",
        rating: "4.9",
        sold: "290",
      },
      {
        id: 16,
        src: "/public/static/images/pencarian-16.jpg",
        text: "Summer Vibes Parfum Unisex 75ML",
        price: "Rp110.000",
        location: "Pekanbaru",
        rating: "4.7",
        sold: "230",
      },
      {
        id: 17,
        src: "/public/static/images/pencarian-17.jpg",
        text: "Midnight Glam Parfum Wanita 100ML",
        price: "Rp145.000",
        location: "Bandar Lampung",
        rating: "4.8",
        sold: "270",
      },
      {
        id: 18,
        src: "/public/static/images/pencarian-18.jpg",
        text: "Urban Cool Parfum Pria 50ML",
        price: "Rp70.000",
        location: "Samarinda",
        rating: "4.5",
        sold: "360",
      },
    ];
    

  const handleNext = () => {
    setCurrentImages((prevImages) =>
      prevImages.map((index) => (index + 1) % images.length)
    );
  };

  const handlePrev = () => {
    setCurrentImages((prevImages) =>
      prevImages.map((index) => (index - 1 + images.length) % images.length)
    );
  };

  return (
    <div className="rounded-lg shadow-inner bg-slate-50 py-3 px-4 my-4 hidden sm:block font-inter">
      <div className="my-2 flex font-bold self-end items-end">
        <div className="mx-2 text-xl">Bayar di tempat </div>
        <NavLink className="text-[#00aa5b] text-base" to="/">
          Lihat Semua
        </NavLink>
      </div>
      <div className="carousel w-full relative group">
        <div className="carousel-item w-full">
          <div className="w-full flex justify-evenly">
            {currentImages.map((imageIndex, idx) => (
              <div key={idx} className="shadow w-[110px] h-[280px] sm:h-[300px] lg:w-[175px] lg:h-[320px]">
                <div className="rounded-t-lg">
                  <Img
                    src={images[imageIndex].src}
                    className="w-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="px-2 rounded-b-lg my-2 py-2 ">
                  <p className="text-base -tracking-wide">{images[imageIndex].text.substring(0, 37)}</p>
                  <p className="font-bold">{images[imageIndex].price}</p>
                  <div className="flex">
                    <Crown className="text-[#00aa5b] mr-2" width={18} />
                    <p className="text-slate-400 text-sm">
                      {images[imageIndex].location}
                    </p>
                  </div>
                  <div className="lg:flex sm:hidden">
                    <Star className="text-yellow-500 mr-2" width={18} />
                    <p className="text-slate-400 text-sm">
                      {images[imageIndex].rating} | {images[imageIndex].sold} Terjual
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePrev}
              className="btn btn-circle bg-slate-300 rounded-full w-[35px] h-[35px]"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle bg-slate-300 rounded-full w-[35px] h-[35px]"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayarDiTempat;
