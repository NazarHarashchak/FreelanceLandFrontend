import React from "react";
import CategoriesList from "./CategoriesList";

class Filter extends React.Component {
    render() {
      return (
        <div class="well">
          <h3>Task Filter:</h3>
          <form>
            <div className="form-group">
              <a class="btn btn-primary" data-toggle="collapse" href="#collapse-catigories" aria-expanded="false" aria-controls="collapseExample">
                Categories:
              </a>  
              <div class="collapse" id="collapse-catigories">
                <CategoriesList />
              </div>
            </div>
             <div className="form-group">
              <label>Price:</label>
              <input type="text" className="form-control" id="price"/>
            </div>
          </form>
        </div>
      );
    }
  }
export default Filter;