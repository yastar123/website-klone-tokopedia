import Item from "../element/icon";

const Icon = () => {
  const items1 = [
    { id: 1, text1: "Belanja 2 Jam Tiba", iconSrc: "/public/image/icon-1.png" },
    { id: 2, text1: "Kategori", iconSrc: "/public/image/icon-2.png" },
    { id: 3, text1: "Handphone & Tablet", iconSrc: "/public/image/icon-3.png" },
    { id: 4, text1: "Top-UP & Tagihan", iconSrc: "/public/image/icon-4.png" },
    { id: 5, text1: "Elektronik", iconSrc: "/public/image/icon-5.png" },
    { id: 6, text1: "Perawatan Hewan", iconSrc: "/public/image/icon-6.png" },
    { id: 7, text1: "Keuangan", iconSrc: "/public/image/icon-8.png" },
    { id: 8, text1: "Penerbangan", iconSrc: "/public/image/icon-7.png" },
  ];

  return (
    <div
      className="flex sm:hidden space-x-3 my-4  w-full justify-center"
      style={{ width: "500px", height: "120px" }}
    >
      {items1.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Icon;
