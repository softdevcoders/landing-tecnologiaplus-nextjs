import style from "./responsive-image.module.scss";

const ResponsiveImage = ({ className, image }) => {
  const baseUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_`;
  const {src, alt, sizes, ...props} = image;
  const [defaultSize, ...restSizes] = sizes;
  
  const sources = restSizes.reverse().map((size) => (
    <source
      key={size.imageWidth}
      media={size.mediaQuery} 
      srcSet={`${baseUrl}${size.imageWidth}/${src}`}
      type="image/webp"
    />
  ));

  return (
    <picture className={`${className} ${style.responsiveImagePicture}`} {...props}>
      {sources}
      <img
        src={`${baseUrl}${defaultSize.imageWidth}/${src}`}
        alt={alt}
        className={style.responsiveImageImg}
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;