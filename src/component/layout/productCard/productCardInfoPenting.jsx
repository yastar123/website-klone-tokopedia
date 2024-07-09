import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../../service/serviceProduct";

const ProductCardInfoDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae
        amet quod, asperiores enim qui molestiae hic officia eum, exercitationem
        deleniti, harum illo ut tempora cumque excepturi earum dolorum atque.
      </div>
    </div>
  );
};

export default ProductCardInfoDetail;
