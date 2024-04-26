import React from "react";
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="h1_auth">Login</h1>
        {/* <div className="social-container">
          <a href="#" className="a_auth">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="a_auth">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="a_auth">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
        <span className="span_auth">or use your account</span>
        <input
          className="auth_input"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="auth_input"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a className="a_auth" href="#">
          Forgot your password?
        </a>
        <button className="auth_btn">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
