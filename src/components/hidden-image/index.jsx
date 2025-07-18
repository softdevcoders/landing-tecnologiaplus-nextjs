import Image from "next/image";

const HiddenImage = ({ url, alt, width, height, unoptimized = true }) => {
  return (
    <Image 
      src={url} 
      alt={alt} 
      width={width} 
      height={height} 
      style={{ display: 'none' }}
      loading="eager"
      unoptimized={unoptimized} 
    />
  );
};

export default HiddenImage;