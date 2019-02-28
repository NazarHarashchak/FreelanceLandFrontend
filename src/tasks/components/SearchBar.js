import React from "react";

class SearchBar extends React.Component {
    render() {
      return (
          <div className="l-search-bar">
              <form method="get" role="search" action="">
                  <input type="search" className="form-control" placeholder="Find task" />
              </form>
          </div>
      );
    }
  }
export default SearchBar;