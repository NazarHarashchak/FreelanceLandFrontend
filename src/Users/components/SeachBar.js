import React from 'react';


const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class SearchBar extends React.Component {
  render() {
    return (
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" 
          class="form-control" 
          placeholder="Search"  
        />
      </div>
    );
  }
}
export default SearchBar;