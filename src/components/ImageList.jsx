import "./ImageList.css"
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const pics = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{pics}</div>;
};

export default ImageList;
