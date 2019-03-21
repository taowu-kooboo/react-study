import React from "react";
import Logo from "../../component/logo/logo";
import { WingBlank, Button, WhiteSpace, List, InputItem } from "antd-mobile";
import { connect } from "react-redux";
import { login } from "../../redux/user.redux";
import { Redirect } from "react-router-dom";

@connect(
  state => state.user,
  { login }
)
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "", pwd: "" };
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.login(this.state);
  }
  register() {
    this.props.history.push("/register");
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          {this.props.msg ? (
            <p className="error-msg">{this.props.msg}</p>
          ) : null}
          <List>
            <InputItem onChange={v => this.handleChange("user", v)}>
              用户：
            </InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.handleChange("pwd", v)}
              type="password"
            >
              密码：
            </InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type="primary">
            登录
          </Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
