import React from "react";
import pexels from "../api/pexels";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { query: "", images: [] };

  onSearchSubmit = async (term) => {
    this.setState({ query: term });
    const response = await pexels.get("", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.photos });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
