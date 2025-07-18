const Gallery = ({ size = 16, color = "currentColor", className = "", ...props }) => {
  return (
<svg 
  className={className}
  width={size} 
  height={size} 
  viewBox="0 0 23 21" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <g clipPath="url(#clip0_56_111)">
    <path d="M17.12 1H1V15.37H17.12V1Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.24 4.62V19.61H4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 11.24H13.87L12.12 8.62L10.49 10.49L7.5 6.12L3.5 11.24Z" fill={color}/>
    <path d="M12.31 7.5C13.1053 7.5 13.75 6.85529 13.75 6.06C13.75 5.26471 13.1053 4.62 12.31 4.62C11.5147 4.62 10.87 5.26471 10.87 6.06C10.87 6.85529 11.5147 7.5 12.31 7.5Z" fill={color}/>
  </g>
  <defs>
    <clipPath id="clip0_56_111">
      <rect width="22.24" height="20.61" fill={color}/>
    </clipPath>
  </defs>
</svg>
  );
};

export default Gallery;