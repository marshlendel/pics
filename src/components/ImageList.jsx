const ImageList = (props) => {
  const pics = props.images.map(({ id, src, alt }) => (
    <img key={id} src={src.medium} alt={alt} />
  ));

  return <div>{pics}</div>;
};

export default ImageList;
