import React from "react";
import ContentLoader from "react-content-loader";

function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={100}
      viewBox="0 0 400 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="8" y="-1" rx="0" ry="0" width="4" height="3" />
      <rect x="26" y="7" rx="0" ry="0" width="100" height="10" />
      <rect x="24" y="35" rx="0" ry="0" width="70" height="40" />
      <rect x="104" y="35" rx="0" ry="0" width="70" height="40" />
      <rect x="184" y="35" rx="0" ry="0" width="70" height="40" />
    </ContentLoader>
  );
}

export default Loader;
