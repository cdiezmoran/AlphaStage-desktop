import React, { Component } from 'react';

export default class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.goToSignup = this.goToSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  goToSignup(e) {
    e.preventDefault();

    const { toggleState } = this.props;
    toggleState();
  }

  handleLogin(e) {
    e.preventDefault();
    const { login } = this.props;
    // TODO: Validate user input

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    let user = {
      email,
      password
    }

    login(user);
  }

  render() {
    return(
      <div className="login-box">
        <div className="login-input-div">
          <p className="login-tag">EMAIL</p>
          <div className="input-group">
            <div className="input-group-addon login-icon"><i className="fa fa-envelope"></i></div>
            <input type="email" className="form-control login-input" ref="email"/>
          </div>
        </div>
        <div className="login-input-div">
          <p className="login-tag">PASSWORD</p>
          <div className="input-group">
            <div className="input-group-addon login-icon"><i className="fa fa-key"></i></div>
            <input type="password" className="form-control login-input" ref="password"/>
          </div>
        </div>
        <div className="lb-div">
          <a href="#" className="btn play-btn logbtn" onClick={this.handleLogin}>Login</a>
        </div>
        <p className="switch-p">New to alpha Stage? <a href="#" className="switch-ls" onClick={this.goToSignup}>Sign up now!</a></p>
      </div>
    )
  }
}