const ArrowDown = ({ size = 44, color = "currentColor", className = "", ...props }) => (
  <svg 
    className={className} 
    stroke={color} 
    fill={color} 
    strokeWidth="0" 
    viewBox="0 0 512 512" 
    height={size} 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
  </svg>
);

export default ArrowDown; 