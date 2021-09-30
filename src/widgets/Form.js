import { useState } from "react";
import Card from "../components/Card";

export default function Form() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handdleSubmit() {
    setIsSubmited(true);

    const isValid = !isLogin
      ? name !== "" &&
        lastName !== "" &&
        email !== "" &&
        isEmail(email) &&
        password !== "" &&
        password.length >= 8 &&
        confirmPassword !== "" &&
        confirmPassword === password
      : password !== "" && email !== "";

    if (isValid) {
      if (isLogin) {
        console.log({ email: email, password: password });
      } else {
        console.log({
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        });
      }
    }
  }

  function isEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Card>
      <form
        onSubmit={function (e) {
          e.preventDefault();
          handdleSubmit();
        }}
        className="w-full sm:w-3/4 lg:w-2/5 xl:w-1/4"
      >
        <h1 className="card-title text-3xl">
          {isLogin ? "Login" : "Register"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-4 w-full">
          {!isLogin && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                className={`input input-bordered ${
                  name !== ""
                    ? "input-success"
                    : isSubmited && name === ""
                    ? "input-error"
                    : ""
                }`}
                onChange={function (e) {
                  setName(e.target.value);
                }}
              />
              {isSubmited && name === "" && (
                <label className="label">
                  <span className="label-text-alt">Name is required</span>
                </label>
              )}
            </div>
          )}
          {!isLogin && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Lastname</span>
              </label>
              <input
                type="text"
                placeholder="Lastname"
                value={lastName}
                className={`input input-bordered ${
                  lastName !== ""
                    ? "input-success"
                    : isSubmited && lastName === ""
                    ? "input-error"
                    : ""
                }`}
                onChange={function (e) {
                  setLastName(e.target.value);
                }}
              />
              {isSubmited && lastName === "" && (
                <label className="label">
                  <span className="label-text-alt">Lastname is required</span>
                </label>
              )}
            </div>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              className={`input input-bordered ${
                !isLogin && email !== "" && isEmail(email)
                  ? "input-success"
                  : !isLogin && isSubmited && (email === "" || !isEmail(email))
                  ? "input-error"
                  : !isLogin && !isSubmited && email !== "" && !isEmail(email)
                  ? "input-warning"
                  : ""
              }`}
              onChange={function (e) {
                setEmail(e.target.value);
              }}
            />
            {!isLogin && isSubmited && (email === "" || !isEmail(email)) && (
              <label className="label">
                <span className="label-text-alt">
                  {email === ""
                    ? "Email is required"
                    : "This is not a correct email"}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className={`input input-bordered ${
                !isLogin && password !== "" && password.length >= 8
                  ? "input-success"
                  : !isLogin &&
                    isSubmited &&
                    (password === "" || password.length < 8)
                  ? "input-error"
                  : !isLogin &&
                    !isSubmited &&
                    password !== "" &&
                    password.length < 8
                  ? "input-warning"
                  : ""
              }`}
              onChange={function (e) {
                setPassword(e.target.value);
              }}
            />
            {isLogin && (
              <label className="label">
                <a href="/" className="label-text-alt">
                  Forgot password?
                </a>
              </label>
            )}
            {!isLogin &&
              isSubmited &&
              (password === "" || password.length < 8) && (
                <label className="label">
                  <span className="label-text-alt">
                    {password === ""
                      ? "Password is requided"
                      : "Password should be at least 8 characters"}
                  </span>
                </label>
              )}
          </div>
          {!isLogin && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                className={`input input-bordered ${
                  confirmPassword !== "" && confirmPassword === password
                    ? "input-success"
                    : isSubmited &&
                      (confirmPassword === "" || confirmPassword !== password)
                    ? "input-error"
                    : !isSubmited &&
                      confirmPassword !== "" &&
                      confirmPassword !== password
                    ? "input-warning"
                    : ""
                }`}
                onChange={function (e) {
                  setConfirmPassword(e.target.value);
                }}
              />
              {isSubmited &&
                (confirmPassword === "" || confirmPassword !== password) && (
                  <label className="label">
                    <span className="label-text-alt">
                      {confirmPassword === ""
                        ? "Need to confirm the password"
                        : "Passwords do not match"}
                    </span>
                  </label>
                )}
            </div>
          )}
        </div>
        <div className="card-actions grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 w-full">
          <button type="submit" className="btn btn-primary w-full">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          <button
            className="btn btn-outline w-full"
            onClick={function (e) {
              e.preventDefault();
              setIsLogin(!isLogin);
              setIsSubmited(false);
              setEmail("");
              setPassword("");
              setName("");
              setLastName("");
              setConfirmPassword("");
            }}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </form>
    </Card>
  );
}
