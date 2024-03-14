
import ProductSlider from "../productSlider/ProductSlider";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product: { ImageSrc, title, price, quantity } }) => {
  return (
    <div className={styles.container}>

      <ProductSlider images={ImageSrc}/>

      <div className={styles.details}>
        <h3 className={styles.name}>{title}</h3>
        <p className={styles.price}>{price}</p>
        <p className={styles.quantity}>{`Quantity : ${quantity}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
