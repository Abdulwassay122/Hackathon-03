import React from "react";
import ContentLoader from "react-content-loader";

const OrderLoader = () => (
  <ContentLoader
    speed={2}
    width={600}
    height={200}
    viewBox="0 0 600 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Image placeholder */}
    <rect x="10" y="10" rx="10" ry="10" width="200" height="200" />
    
    {/* Title */}
    <rect x="230" y="20" rx="5" ry="5" width="200" height="20" />
    
    {/* Subtitle */}
    <rect x="230" y="50" rx="5" ry="5" width="180" height="15" />
    
    {/* Size, Quantity, Color */}
    <rect x="230" y="80" rx="5" ry="5" width="250" height="15" />
    
    {/* MRP */}
    <rect x="230" y="110" rx="5" ry="5" width="150" height="15" />
    
    {/* Status */}
    <rect x="230" y="140" rx="5" ry="5" width="100" height="15" />
    
    {/* Order date */}
    <rect x="500" y="20" rx="5" ry="5" width="80" height="15" />
    <rect x="500" y="50" rx="5" ry="5" width="120" height="15" />
  </ContentLoader>
);

export default OrderLoader;
