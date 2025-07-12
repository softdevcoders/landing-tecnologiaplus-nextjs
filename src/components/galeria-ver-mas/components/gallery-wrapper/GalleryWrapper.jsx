"use client";

import ImageGallery from "../../ImageGallery";
import styles from "./gallery-wrapper.module.scss";

const GalleryWrapper = ({ images, fallbackImages }) => {
  return (
    <div className={styles.galleryWrapper}>
      <ImageGallery 
        images={images}
        fallbackImages={fallbackImages}
      />
    </div>
  );
};

export default GalleryWrapper; 