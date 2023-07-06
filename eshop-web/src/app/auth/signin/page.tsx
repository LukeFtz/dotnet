"use client";

import { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="text-black">
      <form>
        <div className="">
          <label>Username </label>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="">
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handlePassword}

            // defaultValue={""}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
