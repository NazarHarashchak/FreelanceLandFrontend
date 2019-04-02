import React from "react";
import { connect } from 'react-redux';

class Pagination extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="col-lg-9 pagination">
          <li className="disabled"><span>«</span></li>
          <li className="active"><span>1</span></li>
        
          <li><a data-page="2" className="j-pgn-page" >»</a></li>
        </ul>

      </div>
    );
  }
}
export default connect(
  state => state.tasksReducers
)(Pagination);
