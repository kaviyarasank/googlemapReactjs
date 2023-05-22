import React from "react";
import SocialLogin from "react-social-login";
import "../App.css";

class SocialButton extends React.Component {
  render() {
    const { children, triggerLogin,image, ...props } = this.props;
    console.log("mmmmmmmmmmmmmmm",image);
    return (
      <button onClick={triggerLogin} {...props} className="buttons">
        <div className="buttonDiv">
        <img src={image} className="image"/>
        <p>{children}</p>

        </div>
      </button>
    );
  }
}

export default SocialLogin(SocialButton);
