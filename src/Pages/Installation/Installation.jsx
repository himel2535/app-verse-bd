import React, { useEffect, useState } from "react";
import downloadLogo from "../../assets/icon-downloads.png";
import ratingAvg from "../../assets/icon-ratings.png";

const Installation = () => {
  const [installedList, setInstalledList] = useState([]);

  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedList"));

    if (savedList) setInstalledList(savedList);
  }, []);

  const sortItem = (() => {
    if (sortOrder == "size-asc") {
      return [...installedList].sort((a, b) => a.size - b.size);
    } else if (sortOrder == "size-desc") {
      return [...installedList].sort((a, b) => b.size - a.size);
    } else {
      return installedList;
    }
  })();

  const handleUnInstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installedList"));

    let updatedList = existingList.filter((p) => p.id !== id);

    setInstalledList(updatedList)

    localStorage.setItem("installedList", JSON.stringify(updatedList));
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
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low-High</option>
            <option value="size-desc">High-Low</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>

      <div className="space-y-3">
        {sortItem.map((p) => (
          <div className="card card-side bg-base-100 shadow-sm items-center">
            <figure>
              <img
                className="h-28 w-40 object-cover"
                src={p.image}
                alt="image"
              />
            </figure>

            <div className="flex justify-between items-center w-full px-4">
              <div className="space-y-2">
                <h2 className="card-title">{p.title}</h2>
                <div className="flex items-center ">
                  <div className="flex items-center">
                    <img
                      className="w-1/5 h-1/5 mr-1"
                      src={downloadLogo}
                      alt=""
                    />
                    <p className="text-base-content/70">{p.downloads}</p>
                  </div>
                  <div className="flex items-center">
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
                  className="btn btn-primary bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
