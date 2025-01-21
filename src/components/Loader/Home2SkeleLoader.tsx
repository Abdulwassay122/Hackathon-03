import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={425}
      height={500} // Total height accommodates the image + text
      viewBox="0 0 425 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="rounded-lg"
    >
      {/* Image Placeholder */}
      <rect x="0" y="0" rx="8" ry="8" width="425" height="425" />
      
      {/* Product Name */}
      <rect x="0" y="440" rx="4" ry="4" width="280" height="20" />
      
      {/* Product Price */}
      <rect x="0" y="470" rx="4" ry="4" width="100" height="20" />
    </ContentLoader>
  );
};

export default ProductSkeleton;
