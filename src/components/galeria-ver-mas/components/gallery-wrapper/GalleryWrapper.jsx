import ImageGallery from "../image-gallery";
import styles from "./gallery-wrapper.module.scss";

const GalleryWrapper = ({ images, fallbackImages, productTitle = '' }) => {
  return (
    <div className={styles.galleryWrapper}>
      <ImageGallery 
        images={images}
        fallbackImages={fallbackImages}
        productTitle={productTitle}
      />
    </div>
  );
};

export default GalleryWrapper; 