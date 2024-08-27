import React, { useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

const Profile: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  }, [auth.user, navigate]);

  return (
    <div className="profile">
      <h3 className="page-title">Profile</h3>
      <p>ID: {auth.user?.id}</p>
      <p>Login: {auth.user?.login}</p>
      <p>Phone: {auth.user?.phone}</p>
      <p>
        Created At:{" "}
        {auth.user?.createdAt.toString().replace("T", " ").slice(0, 16)}
      </p>
    </div>
  );
};

export default Profile;
