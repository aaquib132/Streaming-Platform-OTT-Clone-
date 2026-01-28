import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const user_auth = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleState = (state) => {
    setSignState(state);
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[url('/background_banner.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <img src={logo} alt="Netflix" className="relative z-10 w-44 px-12 py-6" />

      <div className="relative z-10 flex justify-center">
        <div className="mt-8 w-full max-w-112.5 rounded bg-black/75 px-14 py-12">
          <h1 className="mb-7 text-[32px] font-medium text-white">
            {signState}
          </h1>

          <form onSubmit={user_auth} className="space-y-4">

            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="h-12 w-full rounded bg-[#333] px-5 text-white
                           placeholder:text-[14px] placeholder:text-gray-400
                           focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="h-12 w-full rounded bg-[#333] px-5 text-white
                         placeholder:text-[14px] placeholder:text-gray-400
                         focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="h-12 w-full rounded bg-[#333] px-5 text-white
                         placeholder:text-[14px] placeholder:text-gray-400
                         focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <button
            type="submit"
            disabled={loading}
            className="mt-6 h-12 w-full rounded bg-[#e50914] text-[16px] font-medium text-white
                      hover:bg-[#f6121d] transition disabled:opacity-60"
          >
            {loading ? "Please wait..." : signState}
          </button>
          </form>

          <div className="mt-10 text-[14px] text-[#737373]">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?
                <span
                  onClick={() => toggleState("Sign Up")}
                  className="ml-2 cursor-pointer font-medium text-white hover:underline"
                >
                  Sign up now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?
                <span
                  onClick={() => toggleState("Sign In")}
                  className="ml-2 cursor-pointer font-medium text-white hover:underline"
                >
                  Sign in
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
