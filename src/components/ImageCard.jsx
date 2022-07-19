import React from "react";

class ImageCard extends React.Component {

    state = {span: 0}

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setColumnRowEnd);
  }

  setColumnRowEnd = () => {
    const height = this.imageRef.current.clientHeight
    const span = Math.ceil(height / 10)
    this.setState({span})
  };

  render() {
    const { alt, src } = this.props.image;

    return (
      <div style={{gridRowEnd: `${this.state.span} span`}}>
        <img ref={this.imageRef} alt={alt} src={src.medium} />
      </div>
    );
  }
}

export default ImageCard;
