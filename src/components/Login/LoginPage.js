import React from "react";
import AuthService from "../../services/AuthService";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    AuthService.logout();

    this.state = {
      email: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    this.setState({ loading: true });
    AuthService.login(email, password).then(
      user => {
        const { from } = this.props.location.state || {
          from: { pathname: "/" }
        };
        this.props.history.push(from);
      },
      error => this.setState({ error, loading: false })
    );
  }

  render() {
    const { email, password, submitted, loading, error } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form name="login" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {submitted && !email && <div>Email is required</div>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div>
            <button disabled={loading}>Login</button>
          </div>
          {error && <div>{error}</div>}
        </form>
      </div>
    );
  }
}

export default LoginPage;
