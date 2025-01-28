import React from "react";
import ContentLoader from "react-content-loader";

const ProfileSectionLoader = () => (
  <ContentLoader
    speed={2}
    width={700}
    height={400}
    viewBox="0 0 700 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Avatar Placeholder */}
    <circle cx="100" cy="100" r="50" />

    {/* Name Placeholder */}
    <rect x="170" y="70" rx="5" ry="5" width="180" height="20" />

    {/* Divider under Name */}
    <rect x="170" y="100" rx="5" ry="5" width="100" height="10" />

    {/* Email Placeholder */}
    <rect x="170" y="130" rx="5" ry="5" width="250" height="15" />

    {/* Gender Placeholder */}
    <rect x="30" y="200" rx="5" ry="5" width="100" height="15" />
    <rect x="150" y="200" rx="5" ry="5" width="200" height="15" />

    {/* Phone Number Placeholder */}
    <rect x="30" y="230" rx="5" ry="5" width="140" height="15" />
    <rect x="190" y="230" rx="5" ry="5" width="220" height="15" />

    {/* Address Placeholder */}
    <rect x="30" y="260" rx="5" ry="5" width="120" height="15" />
    <rect x="170" y="260" rx="5" ry="5" width="300" height="15" />

    {/* DOB Placeholder */}
    <rect x="30" y="290" rx="5" ry="5" width="150" height="15" />
    <rect x="200" y="290" rx="5" ry="5" width="220" height="15" />
  </ContentLoader>
);

export default ProfileSectionLoader;
