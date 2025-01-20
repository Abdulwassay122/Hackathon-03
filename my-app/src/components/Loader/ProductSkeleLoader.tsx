import React from "react";
import ContentLoader from "react-content-loader";

const ProductSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Product Image */}
    <rect x="10" y="10" rx="10" ry="10" width="348" height="348" />

    {/* Label */}
    <rect x="10" y="370" rx="5" ry="5" width="100" height="15" />

    {/* Title */}
    <rect x="10" y="400" rx="5" ry="5" width="200" height="20" />

    {/* Subtitle */}
    <rect x="10" y="430" rx="5" ry="5" width="150" height="15" />

    {/* Color */}
    <rect x="10" y="460" rx="5" ry="5" width="80" height="15" />

    {/* Original Price */}
    <rect x="10" y="490" rx="5" ry="5" width="100" height="15" />

    {/* Discounted Price */}
    <rect x="10" y="520" rx="5" ry="5" width="70" height="25" />

    {/* Rating */}
    <rect x="10" y="560" rx="5" ry="5" width="100" height="20" />
  </ContentLoader>
);

export default ProductSkeleton;
