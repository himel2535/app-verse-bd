import React from "react";
import notFound from "../../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={notFound} alt="" />
      <h1 className="font-semibold text-4xl mt-4 text-center">
        Oops, page not found!
      </h1>
      <p className="mt-4 text-gray-600 text-center">
        The page you are looking for is not available.
      </p>
    </div>
  );
};

export default NotFound;
