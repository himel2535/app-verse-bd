import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default LoadingPage;
