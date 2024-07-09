import Img from "../../../../element/img";
import Menu from "../../../../element/menu";
import { ArrowRight } from "lucide-react";

const KategoriMobile = () => {
  const items = [
    { src: "/public/static/images/kategoriMobile-1.jpg", text: "Buku" },
    { src: "/public/static/images/kategoriMobile-2.jpg", text: "Kamera" },
    { src: "/public/static/images/kategoriMobile-3.jpg", text: "Laptop" },
    { src: "/public/static/images/kategoriMobile-4.jpg", text: "Kursi" },
    { src: "/public/static/images/kategoriMobile-5.jpg", text: "Alat Dapur" },
    { src: "/public/static/images/kategoriMobile-6.jpg", text: "PS" },
    { src: "/public/static/images/kategoriMobile-7.jpg", text: "Kecantikan" },
    { src: "/public/static/images/kategoriMobile-8.jpg", text: "Olahraga" },
    { src: "/public/static/images/kategoriMobile-9.jpg", text: "Makanan" },
    { src: "/public/static/images/kategoriMobile-10.jpg", text: "Hadiak" },
    { src: "/public/static/images/kategoriMobile-11.jpg", text: "Hijab" },
    { src: "/public/static/images/kategoriMobile-12.jpg", text: "Ibu & Bayi" },
    { src: "/public/static/images/kategoriMobile-13.jpg", text: "Anak-Anak" },
    {
      src: "/public/static/images/kategoriMobile-14.jpg",
      text: "Fashion Pria",
    },
    { src: "/public/static/images/kategoriMobile-15.jpg", text: "Elektronik" },
    { src: "/public/static/images/kategoriMobile-16.jpg", text: "Office" },
    { src: "/public/static/images/kategoriMobile-17.jpg", text: "Perawatan" },
    { src: "/public/static/images/kategoriMobile-19.jpg", text: "Mainan" },
    {
      src: "/public/static/images/kategoriMobile-20.jpg",
      text: "Film & Music",
    },
    { src: "/public/static/images/kategoriMobile-21.jpg", text: "Pertukangan" },
    { src: "/public/static/images/kategoriMobile-22.jpg", text: "Obat-Obatan" },
    { src: "/public/static/images/kategoriMobile-23.jpg", text: "kendaraan" },
    { src: "/public/static/images/kategoriMobile-24.jpg", text: "Handphone" },
    {
      src: "/public/static/images/kategoriMobile-25.jpg",
      text: "Fashion Wanita",
    },
  ];

  return (
    <div className="sm:hidden mt-2">
      <div>
        <Menu
          text="Kategori Inspirasi Belanjamu"
          className="text-slate-400"
          icon={<ArrowRight />}
        />
      </div>
      <div className="flex">
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
          {[0, 1].map((_, idx) => (
            <div key={idx} className="px-2 flex gap-2">
              {items.slice(idx * 12, idx * 12 + 12).map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-[140px] w-[140px] my-1"
                >
                  <div className="h-[100px]">
                    <Img
                      src={item.src}
                      to="/"
                      className="rounded-t-lg object-cover h-full w-full"
                    />
                  </div>
                  <div className="text-center font-bold h-[40px] flex justify-center pt-2">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KategoriMobile;
