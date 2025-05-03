'use client'

const { CldImage } = require("next-cloudinary");

const ImageCloudinary = ({ src, alt, className, ...props }) => (
  <CldImage
    src={src}
    alt={alt}
    className={className}
    {...props}
  />
)

export default ImageCloudinary;