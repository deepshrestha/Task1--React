import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useFormValidator, errorMessage } from "./../FormValidator";

const Login = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const history = useHistory();

  const initialState = {
    mode: "I",
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  };

  const { onHandleChange, onHandleSubmit, onHandleBlur, fields } =
    useFormValidator(initialState);

  const { errors } = fields;

  useEffect(() => {
    inputEmailRef.current.focus();
  }, []);

  const onLogin = (event) => {
    event.preventDefault();

    if (onHandleSubmit(event)) {
      console.log(fields);
      console.log("validated");
      history.push("/home");
    } else {
      console.log("not validated");
    }
  };

  return (
    <>
      <div className="form-login-box text-center">
        <form className="form-label" onSubmit={(event) => onLogin(event)}>
          <img
            className="mb-4"
            src="/assets/public/dist/img/user-login.jpg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3">Please sign in</h1>
          <div className="form-group">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              ref={inputEmailRef}
              autoFocus
              type="email"
              name="email"
              className="form-control-sm inputText"
              placeholder="Email Address"
              onChange={onHandleChange}
              onBlur={onHandleBlur}
            />
            <div className="text-danger">
              {errors.email.length > 0 && errorMessage(errors.email)}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              ref={inputPasswordRef}
              type="password"
              name="password"
              minLength="3"
              maxLength="10"
              className="form-control-sm inputText"
              placeholder="Password"
              onChange={onHandleChange}
              onBlur={onHandleBlur}
            />
            <div className="text-danger">
              {errors.password.length > 0 && errorMessage(errors.password)}
            </div>
          </div>
          <div className="m-2">
            <button className="btn btn-sm btn-primary">Sign in</button>
          </div>
          <p className="mt-4 mb-3 text-muted">&copy; 2021</p>
        </form>
      </div>
    </>
  );
};

export default Login;
