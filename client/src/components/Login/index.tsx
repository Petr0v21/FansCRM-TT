import React, { useEffect, useState } from "react";
import "./index.css";
import { useAuth } from "@context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginArgs } from "types/auth";

//Use react-hook-form!!!

const validation = (state: LoginArgs) => {
  try {
    if (!state.login) {
      throw new Error("Input login");
    }

    if (state.login.length < 3) {
      throw new Error("Password length must be more or equal 3");
    }

    if (!state.password) {
      throw new Error("Input password");
    }

    if (state.password.length < 6) {
      throw new Error("Password length must be more or equal 6");
    }
    return true;
  } catch (err: any) {
    alert(err.message);
    return false;
  }
};

const Login: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState<LoginArgs>({
    login: "",
    password: "",
  });

  useEffect(() => {
    if (auth.user) {
      navigate("/me");
    }
  }, [auth.user, navigate]);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validation(state);
    if (!result) {
      return;
    }
    auth.login(state).then((res) => {
      if (!res) {
        alert("Invalid cradetionals!");
      }
    });
  };

  return (
    <form onSubmit={formHandler} className="login-form">
      <h3 className="page-title">Login Form</h3>
      <input
        value={state.login}
        placeholder="Login"
        onChange={(e) =>
          setState((prev) => ({ ...prev, login: e.target.value }))
        }
      />
      <input
        value={state.password}
        placeholder="Password"
        onChange={(e) =>
          setState((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <button>Button</button>
    </form>
  );
};

export default Login;
