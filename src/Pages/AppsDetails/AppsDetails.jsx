import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import LoadingPage from "../LoadingPage/LoadingPage";
import downloadsLogo from "../../assets/icon-downloads.png";
import avgRatingLogo from "../../assets/icon-ratings.png";
import reviewsLogo from "../../assets/icon-review.png";

import Carts from "../Charts/Carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "../Error Page/ErrorPage";
import appsError from "../../assets/App-Error.png";

const AppsDetails = () => {
  const { id } = useParams();

  const { apps, loading, error } = useApps();

  const app = apps.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;
    const existingList =
      JSON.parse(localStorage.getItem("installedList")) || [];
    const alreadyInstalled = existingList.some((a) => a.id === app.id);
    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [app]);

  if (loading) return <LoadingPage></LoadingPage>;
  if (error) return <ErrorPage></ErrorPage>;

  if (!app) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img src={appsError} alt="" />
        <h1 className="font-semibold text-4xl text-center my-5">
          Not Found This App
        </h1>
      </div>
    );
  }
  const {
    title,
    image,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  const handleInstall = () => {
    const existingList =
      JSON.parse(localStorage.getItem("installedList")) || [];

    const alreadyInstalled = existingList.some((a) => a.id === app.id);
    if (alreadyInstalled) return;

    const updatedList = [...existingList, app];
    localStorage.setItem("installedList", JSON.stringify(updatedList));
    setIsInstalled(true);

    toast("Installed", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="h-[310px] w-[310px]">
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <div className="border-b mb-4">
            <h2 className="card-title">{title}</h2>
            <p className="mb-3 pb-4 pt-1">Developed By : {companyName}</p>
          </div>
          <div className="flex md:gap-15 gap-10 lg:gap-30 my-2">
            <div>
              <img
                className="w-[25px] h-[25px]"
                src={downloadsLogo}
                alt="logo"
              />
              <p className="text-gray-600 mb-1 mt-2">Downloads</p>
              <p className="font-bold text-3xl">{downloads}</p>
            </div>
            <div>
              <img
                className="w-[25px] h-[25px]"
                src={avgRatingLogo}
                alt="logo"
              />
              <p className="text-gray-600 mb-1 mt-2">Average Ratings</p>
              <p className="font-bold text-3xl">{ratingAvg}</p>
            </div>
            <div>
              <img className="w-[25px] h-[25px]" src={reviewsLogo} alt="logo" />
              <p className="text-gray-600 mb-1 mt-2">Total Reviews</p>
              <p className="font-bold text-3xl">{reviews}</p>
            </div>
          </div>
          <div className="card-actions ">
            <button
              onClick={handleInstall}
              className={`btn ${
                isInstalled
                  ? "btn-success cursor-not-allowed "
                  : "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
              }`}
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : `Install Now (${size}mb)`}
            </button>
          </div>
        </div>
      </div>

      {/* ----Bar Charts----- */}
      <div className="my-7 py-6 border-y">
        <Carts ratings={ratings}></Carts>
      </div>
      {/* ----Description---- */}
      <div>
        <h3>
          <span className="font-semibold text-xl">Description</span> <br />{" "}
          <span className="text-gray-500">{description}</span>
        </h3>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppsDetails;
