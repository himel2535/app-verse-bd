import React, { useEffect, useState } from "react";
import downloadLogo from "../../assets/icon-downloads.png";
import ratingAvg from "../../assets/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appsNotFound from "../../assets/App-Error.png";
import LoadingPage from "../LoadingPage/LoadingPage";

const Installation = () => {
  const [installedList, setInstalledList] = useState([]);

  const [sortOrder, setSortOrder] = useState("none");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const savedList = JSON.parse(localStorage.getItem("installedList")) || [];
      setInstalledList(savedList);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage></LoadingPage>;

  if (!installedList.length) {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src={appsNotFound} alt="" />{" "}
        <h1 className="font-bold text-3xl text-center items-center mt-6">
          You have not installed any apps yet
        </h1>
      </div>
    );
  }

  const sortItem = (() => {
    if (sortOrder == "downloads-asc") {
      return [...installedList].sort(
        (a, b) => parseInt(a.downloads) - parseInt(b.downloads)
      );
    } else if (sortOrder == "downloads-desc") {
      return [...installedList].sort(
        (a, b) => parseInt(b.downloads) - parseInt(a.downloads)
      );
    } else {
      return installedList;
    }
  })();

  const handleUnInstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installedList"));

    let updatedList = existingList.filter((p) => p.id !== id);

    setInstalledList(updatedList);

    localStorage.setItem("installedList", JSON.stringify(updatedList));

    toast("Uninstalled This App", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-2xl">
          ({installedList.length}) Apps Found
        </h1>
        {/* -----Sort Button---- */}
        <label className="form-control w-full max-w-xs">
          <select
            className="cursor-pointer select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Downloads</option>
            <option value="downloads-asc">Low-High</option>
            <option value="downloads-desc">High-Low</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>

      <div className="space-y-3">
        {sortItem.map((p) => (
          <div
            key={p.id}
            className="card card-side bg-base-100 shadow-sm items-center"
          >
            <figure>
              <img
                className="h-28 w-40 object-cover"
                src={p.image}
                alt="image"
              />
            </figure>

            <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 ">
              <div className="md:space-y-2 space-y-1 flex flex-col  items-center md:items-start">
                <h2 className="card-title text-center md:text-start">{p.title}</h2>
                <div className="flex  items-center  mb-2 md:mb-0">
                  <div className="flex items-center">
                    <img
                      className="w-1/5 h-1/5 mr-1"
                      src={downloadLogo}
                      alt=""
                    />
                    <p className="text-base-content/70">{p.downloads}</p>
                  </div>
                  <div className="flex  items-center">
                    <img className="w-1/5 h-1/5 mr-1" src={ratingAvg} alt="" />
                    <p className="text-base-content/70">{p.ratingAvg}</p>
                  </div>
                  <p className="text-base-content/70">{p.size} MB</p>
                </div>
              </div>
              {/* ------Button------ */}
              <div className="flex items-center">
                <button
                  onClick={() => handleUnInstall(p.id)}
                  className="btn btn-primary  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
                  
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
