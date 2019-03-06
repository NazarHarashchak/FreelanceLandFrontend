import React from "react";

class Pagination extends React.Component {
    render() {
      return (
          <div className="row">
                <ul className="col-lg-8 pagination">
                  <li className="disabled"><span>«</span></li>
                  <li className="active"><span>1</span></li>
                  <li className="hidden-xs"><a data-page="2" className="j-pgn-page" href="<!--https://freelance.ua/?page=2&amp;t=1&amp;pc=1-->#">2</a></li>
                  <li className="hidden-xs"><a data-page="3" className="j-pgn-page" href="<!--https://freelance.ua/?page=3&amp;t=1&amp;pc=1-->#">3</a></li>
                  <li><span>...</span></li>
                  <li><a data-page="241" className="j-pgn-page" href="#">241</a></li>
                  <li><a data-page="2" className="j-pgn-page" href="<!--https://freelance.ua/?page=2&amp;t=1&amp;pc=1-->#">»</a></li>
                </ul>
               
          </div>
      );
    }
  }
export default Pagination;