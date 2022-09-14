import React from "react";
import Unsplash from "../API/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await Unsplash.get('https://api.unsplash.com/search/photos', {
            params: { 
                query: term,
                // per_page: 5
            },
        });
        this.setState({ images: response.data.results });
        console.log(response.data.results)
        console.log(term);
    }


  render () {
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      );
  }
}

export default App;
