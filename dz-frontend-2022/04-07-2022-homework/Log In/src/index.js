import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

const App = () => (
  <Router>
    <div>
      <main>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </main>
    </div>
  </Router>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "", msg: "", msgg: "" };
  }
  handleSubmit = () => {
    if (this.state.name === "admin" && this.state.password === "password")
      this.setState({ msgg: "Логин и пароль верные", msg: "", state: true });
    else this.setState({ msg: "Логин и пароль неверные", msgg: "" });
  };

  render() {
    return (
      <div className="form">
        <h1>Log In</h1>

        <div className="form-name">
          <h3>User name:</h3>
          <input onChange={(e) => this.setState({ name: e.target.value })} />
        </div>

        <div className="form-name">
          <h3>Password:</h3>
          <input
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
            onKeyDown={this.handleKeyDown}
          />
        </div>

        <button onClick={this.handleSubmit}>Submit</button>
        <div>
          <label style={{ color: "red" }}>{this.state.msg}</label>
          <label style={{ color: "green" }}>{this.state.msgg}</label>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
