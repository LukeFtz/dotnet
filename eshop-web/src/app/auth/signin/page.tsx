"use client";
import { signIn } from "next-auth/react";
import React, { useRef, useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const formRef = useRef(null);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      if (!formData.get("username") || !formData.get("password")) return;
      const aux = formData.get("username");
      const response = await signIn("credentials_api", {
        username: formData.get("username"),
        password: formData.get("password"),
      });

      if (response?.error) {
        return;
      }
    }
  };

  return (
    <div className="text-black">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="">
          <label>
            Username
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={handleUsername}
            />
          </label>
        </div>
        <div className="">
          <label>
            Password
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={handlePassword}

              // defaultValue={""}
            />
          </label>
        </div>
        <div className="button-container">
          <input type="submit" value={"Submits"} />
        </div>
        {/* <button onClick={handleSubmit}>submit</button> */}
      </form>
    </div>
  );
};

export default Signin;
