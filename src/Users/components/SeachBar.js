import React from 'react';


const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class SeachBar extends React.Component{
  state = {
    filter: '',
  }
 
  dataSearch = (e) => {
    this.setState({
      filter: e.target.value
    });
  }
render(){
    return(
      <div class="container">
      <div class="col-md-3">
        <form class="navbar-form" role="search">
          <div class="input-group add-on">
       
            <input class="form-control" placeholder="Search"  onChange={this.dataSearch} name="srch-term" id="srch-term" type="text" />
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </form>
        </div>
        </div>
    )
}
}
export default SeachBar;