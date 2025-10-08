import React from "react";
import logo from "../../assets/Vector (1).png";

const LoadingPage = () => {
  return (
    <div>
      <h1 className="flex items-center">
        <span>L</span><img className="w-8 h-8 inline-block" src={logo} alt="o" />
        <span>ading</span>
      </h1>
    </div>
  );
};

export default LoadingPage;
