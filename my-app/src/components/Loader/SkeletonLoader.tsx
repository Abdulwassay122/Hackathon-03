import React from "react";
import ContentLoader from "react-content-loader";

const ProductPageLoader: React.FC = () => (
  <ContentLoader 
    speed={2}
    className="w-full h-auto"
    viewBox="0 0 1000 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Image placeholder */}
    <rect x="50" y="50" rx="10" ry="10" width="300" height="300" />

    {/* Title placeholder */}
    <rect x="400" y="50" rx="4" ry="4" width="400" height="25" />

    {/* Description placeholder */}
    <rect x="400" y="90" rx="3" ry="3" width="450" height="10" />
    <rect x="400" y="110" rx="3" ry="3" width="450" height="10" />
    <rect x="400" y="130" rx="3" ry="3" width="350" height="10" />

    {/* Color options placeholder */}
    <rect x="400" y="160" rx="4" ry="4" width="100" height="15" />
    <rect x="510" y="160" rx="10" ry="10" width="50" height="25" />

    {/* Sizes placeholder */}
    <rect x="400" y="200" rx="4" ry="4" width="100" height="15" />
    <rect x="510" y="195" rx="10" ry="10" width="40" height="30" />
    <rect x="560" y="195" rx="10" ry="10" width="40" height="30" />
    <rect x="610" y="195" rx="10" ry="10" width="40" height="30" />
    <rect x="660" y="195" rx="10" ry="10" width="40" height="30" />

    {/* Rating placeholder */}
    <rect x="400" y="240" rx="4" ry="4" width="150" height="15" />

    {/* Price placeholder */}
    <rect x="400" y="280" rx="4" ry="4" width="100" height="20" />
    <rect x="520" y="280" rx="4" ry="4" width="60" height="15" />

    {/* Add to cart button placeholder */}
    <rect x="400" y="320" rx="8" ry="8" width="180" height="40" />
  </ContentLoader>
);

export default ProductPageLoader;
