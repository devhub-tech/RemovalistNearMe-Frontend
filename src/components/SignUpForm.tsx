import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="h1_auth">Create Account</h1>
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
        <span className="span_auth">or use your email for registration</span>
        <input
          className="auth_input"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="auth_input"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="auth_input"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="auth_btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
