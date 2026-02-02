import React from "react";
import { MyAuth } from "../context/index";

const Profile = () => {
  const { user } = MyAuth();
  console.log(user);

  if (!user) {
    return <h2 className="text-center mt-20">No user logged in</h2>;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Password:</strong> {user.password}</p>
    </div>
  );
};

export default Profile;
