import React from "react";

const ResponsiveImage = (props) => {
  const { mobileSrc, desktopSrc, alt, className } = props;
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />
      <source
        media="(min-width: 768px)"
        srcSet={desktopSrc}
        type="image/webp"
      />
      <img className={className} src={desktopSrc} alt={alt} />
    </picture>
  );
};

export default ResponsiveImage;
