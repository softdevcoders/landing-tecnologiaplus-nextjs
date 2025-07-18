const Arrows360 = ({ size = 16, color = "currentColor", className = "", ...props }) => {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_56_119)">
        <path d="M4.62998 16.3C4.62998 16.3 -9.32002 6.19999 16.95 4.92999" stroke={color} strokeWidth="1.86" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.12 0L16.46 9.94L21.26 4.8L16.12 0Z" fill={color}/>
        <path d="M26.85 6.13C26.85 6.13 40.79 16.23 14.53 17.51" stroke={color} strokeWidth="1.86" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.36 22.43L15.02 12.49L10.22 17.63L15.36 22.43Z" fill={color}/>
      </g>
      <defs>
        <clipPath id="clip0_56_119">
          <rect width="31.48" height="22.43" fill={color}/> 
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrows360;