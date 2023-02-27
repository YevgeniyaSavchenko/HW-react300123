import React, { useEffect, useState } from "react";
import Calculation from "../Calculation/Calculation";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      const newData = data.products;
      const newArray = newData.map(
        ({ id, title, description, price, discountPercentage, thumbnail }) => ({
          id,
          title,
          description,
          price,
          discountPercentage,
          thumbnail,
          priceDiscount: price - (price * discountPercentage) / 100,
        })
      );
      setProducts(newArray);
    })();
  }, []);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div>
      <div>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <div><Calculation  products={products}/></div>
    </div>
  );
}
