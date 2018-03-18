import React from "react";
import ToggleShortcut from "./toggle_shortcut";

import Connect from "../../../stores/connect";

class LoginInfo extends React.Component {
  render() {
    return (
      <div className="login-info">
        <span>
          <ToggleShortcut>
            {/* <img
              src={
                this.props.user
                  ? this.props.user.picture
                  : "/assets/img/avatars/sunny.png"
              }
              alt="me"
              className="online"
            /> */}
            <span><h4>{this.props.user ? this.props.user.username : "Hoa Phượng"}</h4></span>
            <i className="fa fa-angle-down" />
          </ToggleShortcut>
        </span>
      </div>
    );
  }
}

export default Connect(LoginInfo);
