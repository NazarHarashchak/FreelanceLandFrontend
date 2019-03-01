import React from "react";

import "./taskbody.css";

class UserPanel extends React.Component {
  render() {
    return (
      <div className="right-panel">
        <form>
          <div id="top-row">Замовник</div>
          <table id="user-table">
            <tr id="bottom-row">
              <td>
                <img src="" alt="фото користувача" width="30px" heigth="40px" />
              </td>
              <td>
                <a href="">{this.props.name}</a>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default UserPanel;
