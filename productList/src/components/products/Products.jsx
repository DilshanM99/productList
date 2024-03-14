import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./Products.module.css";

function Products() {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const fetchData = () => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setVisibleData(data.slice(0, 8));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight
    ) {
      const newStartIndex = startIndex + 4;
      if (newStartIndex < data.length) {
        setVisibleData((prevData) => [
          ...prevData,
          ...data.slice(newStartIndex, newStartIndex + 3)
        ]);
        setStartIndex(newStartIndex);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startIndex, data]);

  return (
    <div className={styles.container}>
      {visibleData.map((product, id) => (
        <ProductCard key={id} product={product} />
      ))}
    </div>
  );
}

export default Products;
