import React from "react";
import useDefiner from "../helpers/use-definer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginForm() {
  const form = {};
  form.isValid = {};

  const isEmailValid = function () {
    const regex =
      /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = form.email;
    form.isValid.email = regex.test(email);
  };

  const isPasswordValid = function () {
    const pwd = form.password;
    form.isValid.password = pwd.length >= 8;
  };

  const isAllValid = function () {
    let valid = true;
    const vs = Object.entries(form.isValid).filter((e) => e[0] !== "all");
    for (const v of vs) valid = valid && v[1];
    form.isValid.all = valid;
  };

  useDefiner(form, "email", "", [], [], [isEmailValid]);
  useDefiner(form, "password", "", [], [], [isPasswordValid]);
  useDefiner(form, "submitted", false, [], [], []);

  useDefiner(form.isValid, "all", false);
  useDefiner(form.isValid, "email", false, [], [], [isAllValid]);
  useDefiner(form.isValid, "password", false, [], [], [isAllValid]);

  const postEmail = function () {
    form.submitted = true;

    if (form.isValid.all) {
      const { email, password } = form;
      // TODO: fectch data
      console.log({ email, password });
    }
  };

  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();
        postEmail();
      }}
      className="w-full px-2"
    >
      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="form-control">
          <label className="label" htmlFor="form-email">
            <span className="label-text font-bold text-white">Email</span>
          </label>
          <div className="w-full relative">
            <input
              id="form-email"
              type="text"
              placeholder="Email"
              value={form.email}
              className="input input-bordered pl-12 w-full"
              onChange={function (e) {
                form.email = e.target.value;
              }}
            />
            <div className="w-8 h-8 bg-info absolute top-0 left-0 ml-2 mt-2 bg-center bg-cover flex justify-center items-center rounded">
              <span className="fas fa-user text-white"></span>
            </div>
            {form.submitted && !form.isValid.email && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {!form.email
                    ? "Email is required"
                    : "This is not a correct email"}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="form-pwd">
              <span className="label-text font-bold text-white">Password</span>
            </label>
            <div className="w-full relative">
              <input
                id="form-pwd"
                type="password"
                placeholder="Password"
                value={form.password}
                className="input input-bordered pl-12 w-full"
                onChange={function (e) {
                  form.password = e.target.value;
                }}
              />
              <div className="w-8 h-8 bg-info absolute top-0 left-0 ml-2 mt-2 bg-center bg-cover flex justify-center items-center rounded">
                <span className="fas fa-key text-white"></span>
              </div>
            </div>
            {form.submitted && !form.isValid.password && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {!form.password
                    ? "Password is requided"
                    : "Password should be at least 8 characters"}
                </span>
              </label>
            )}
            <label className="label mt-2">
              <a href="/" className="label-text-alt link-accent">
                Forgot password?
              </a>
            </label>
          </div>
        </div>
        <div className="card-actions w-full">
          <button type="submit" className="btn btn-info w-full">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
