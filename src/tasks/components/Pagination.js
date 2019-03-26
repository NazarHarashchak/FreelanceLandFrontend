import React from "react";
import { connect } from 'react-redux';

class Pagination extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="col-lg-9 pagination">
          <li className="disabled"><span>«</span></li>
          <li className="active"><span>1</span></li>
          <li className="hidden-xs"><a data-page="2" className="j-pgn-page" href="">2</a></li>
          <li className="hidden-xs"><a data-page="3" className="j-pgn-page" href="">3</a></li>
          <li><span>...</span></li>
          <li><a data-page="241" className="j-pgn-page" href="">241</a></li>
          <li><a data-page="2" className="j-pgn-page" href="">»</a></li>
        </ul>
        <div className="col-lg-3 pagination-num">
          <label htmlFor="pagination-num">Go to page:</label>
          <input type="text" className="form-control j-pgn-goto" placeholder="№" />
        </div>
      </div>
    );
  }
}
export default connect(
  state => state.tasksReducers
)(Pagination);
