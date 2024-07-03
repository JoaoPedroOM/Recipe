import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '{}';
  return JSON.parse(stringifiedUser);
};

export const Protector = ({ children }) => {
  const navigate = useNavigate();
  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [navigate, jwt]);

  return children;
};

export const ProtectorAccount = ({ children }) => {
  const navigate = useNavigate();
  const { jwt } = userData();

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [navigate, jwt]);

  return children;
};