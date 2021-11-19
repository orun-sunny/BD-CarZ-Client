import { useEffect, useState } from "react";


const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://arcane-cove-15684.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {

      });
  }, []);
  return products;
};

export default useProducts;
