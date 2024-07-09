import axios from "axios";


export const getProduct = (callback) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      const products = res.data;
      callback(products);
      const prices = products.map(product => product.price);
      localStorage.setItem('prices', JSON.stringify(prices));
    })
    .catch((err) => {
      console.log(err);
    });
};



export const getProductById = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export const getProductDummy = (callback) => {
  axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}


export const getProductByIdDummy = (id, callback) => {
  axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
 
export const getCity = (callback) => {
  axios
    .get("https://d07791e998424b309ab5a4a0d0bd49b0.api.mockbin.io/")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


