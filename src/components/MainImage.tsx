interface Props {
  src: string;
  alt: string;
}

const MainImage = ({ src, alt }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      draggable="false"
      className="image-1"
      loading="lazy"
    />
  );
};

export default MainImage;
