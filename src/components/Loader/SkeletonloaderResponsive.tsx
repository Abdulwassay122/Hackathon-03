import React from "react";
import ContentLoader from "react-content-loader";

const ProductDetailLoader: React.FC = () => (
  <ContentLoader 
    speed={2}
    className="w-screen h-auto"
    viewBox="0 0 800 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Image placeholder */}
    <rect x="50" y="50" rx="10" ry="10" width="700" height="400"/>

    {/* Title placeholder */}
    <rect x="50" y="480" rx="4" ry="4" width="400" height="25" />

    {/* Description placeholder */}
    <rect x="50" y="520" rx="3" ry="3" width="700" height="15" />
    <rect x="50" y="545" rx="3" ry="3" width="650" height="15" />
    <rect x="50" y="570" rx="3" ry="3" width="600" height="15" />

    {/* Colors label and button */}
    <rect x="50" y="610" rx="4" ry="4" width="80" height="15" />
    <rect x="140" y="605" rx="10" ry="10" width="50" height="30" />

    {/* Sizes label and buttons */}
    <rect x="50" y="655" rx="4" ry="4" width="80" height="15" />
    <rect x="140" y="645" rx="10" ry="10" width="40" height="30" />
    <rect x="190" y="645" rx="10" ry="10" width="40" height="30" />
    <rect x="240" y="645" rx="10" ry="10" width="40" height="30" />
    <rect x="290" y="645" rx="10" ry="10" width="40" height="30" />

    {/* Rating stars and score */}
    <rect x="50" y="700" rx="4" ry="4" width="150" height="20" />
    <rect x="220" y="700" rx="4" ry="4" width="40" height="20" />

    {/* Price details */}
    <rect x="50" y="740" rx="4" ry="4" width="120" height="25" />
    <rect x="180" y="745" rx="4" ry="4" width="60" height="15" />
    <rect x="250" y="740" rx="4" ry="4" width="80" height="25" />

    {/* Add to cart button */}
    <rect x="350" y="740" rx="8" ry="8" width="180" height="40" />
  </ContentLoader>
);

export default ProductDetailLoader;
