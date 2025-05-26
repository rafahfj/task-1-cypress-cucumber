"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <label htmlFor="cPassword">Confirm Password</label>
        <input
          type="password"
          onChange={({ target }) => setCPassword(target.value)}
          value={cPassword}
        />
      </div>
    </div>
  );
}
