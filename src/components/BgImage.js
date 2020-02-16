/** @jsx jsx */
import { jsx } from "theme-ui";

import { Image } from "mdx-deck";

const BgImage = ({
  opacity,
  color,
  backgroundSize,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <div
      className="bg-image"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        height: "100%",
        color,
        backgroundColor,
        zIndex: 1
      }}
    >
      <Image
        {...props}
        sx={{
          backgroundSize,
          opacity,
          position: "absolute",
          zIndex: -1
        }}
      />
      {children}
    </div>
  );
};

BgImage.defaultProps = {
  color: "white",
  opacity: 1,
  backgroundColor: "white",
  backgroundSize: "contain"
};

export default BgImage;
