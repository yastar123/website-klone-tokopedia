import { useState, useEffect } from "react";
import { getProduct, getProductById } from "../service/serviceProduct";

const Show = () => {
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState([]);
  const [getId, setGetId] = useState([]);
  const [click, setClick] = useState(1);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("id"));
    if (storedIds && storedIds.length > 0) {
      const item = [];
      const itemPromises = storedIds.map((id) => {
        return new Promise((resolve) => {
          getProductById(id, (data) => {
            item.push(data);
            resolve();
          });
        });
      });

      Promise.all(itemPromises).then(() => {
        setItem(item);
      });
    }

    const savedClickCount = localStorage.getItem("click");
    if (savedClickCount) {
      setClick(parseInt(savedClickCount, 10));
    }
  }, []);

  useEffect(() => {
    getProduct((data) => {
      setProduct(data);

      const getIdLocalStorage = JSON.parse(localStorage.getItem("id"));
      setGetId(getIdLocalStorage);

      const parseId = getIdLocalStorage.map((numStr) => parseInt(numStr, 10));

      const prices = localStorage.getItem("prices")
        ? JSON.parse(localStorage.getItem("prices"))
        : [];

      const filteredPrices = parseId.map((index) => {
        if (index <= prices.length) {
          return prices[index - 1];
        }
        return null;
      });

      setFilter(filteredPrices);
    });
  }, []);

  const itemNumbers = item.map((numStr) => parseInt(numStr, 10));

  return (
    <div className="font-sans flex justify-center items-center min-h-screen">
      <div className="max-w-4xl bg-slate-600 rounded-lg shadow-lg px-6 py-2">
        <div className="text-center font-bold text-xl text-[#00aa5b] pb-2 mt-2 mb-4 border-b border-white">
          Checkout your items
        </div>
        <div className="flex gap-4 justify-between">
          <p className="font-bold">Nama:</p>
          <div>
            {itemNumbers.map((itemId) => (
              <div key={itemId}>
                {product.map((prod) => {
                  if (prod.id === itemId) {
                    return (
                      <div key={prod.id}>
                        <p className="font-normal">{prod.title}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <p className="flex">Harga:</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Show;
