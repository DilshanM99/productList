import React, { useState, useEffect } from 'react';
import styles from "./ProductSlider.module.css";

const ProductSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className={styles.container}>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className={styles.image}/>
        </div>
    );
};

export default ProductSlider;
