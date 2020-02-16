/** @jsx jsx */
import { jsx } from "theme-ui";

const Img = ({ src, alt, sx, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      sx={{
        maxWidth: "100%",
        objectFit: "contain",
        ...sx
      }}
      {...props}
    />
  );
};

export default Img;
