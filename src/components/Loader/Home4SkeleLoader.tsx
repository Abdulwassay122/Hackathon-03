import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={400} // Adjusted height for image + text
      viewBox="0 0 300 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="rounded-lg"
    >
      {/* Image Placeholder */}
      <rect x="0" y="0" rx="8" ry="8" width="300" height="300" />
      
      {/* Product Name */}
      <rect x="0" y="320" rx="4" ry="4" width="220" height="20" />
      
      {/* Product Price */}
      <rect x="0" y="350" rx="4" ry="4" width="80" height="20" />
    </ContentLoader>
  );
};

export default ProductSkeleton;
