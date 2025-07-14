import ImageGallery from "../image-gallery";
import styles from "./gallery-wrapper.module.scss";

const GalleryWrapper = ({ media = [], colors = [], hasColors = false, productTitle = '' }) => {
  return (
    <div className={styles.galleryWrapper}>
      <ImageGallery 
        mediaItems={media}
        colors={colors}
        hasColors={hasColors}
        productTitle={productTitle}
      />
    </div>
  );
};

export default GalleryWrapper; 