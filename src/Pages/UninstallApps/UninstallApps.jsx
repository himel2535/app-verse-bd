import React from "react";
import downloadLogo from "../../assets/icon-downloads.png";
import ratingAvg from "../../assets/icon-ratings.png";

const UninstallApps = ({handleUnInstall,p}) => {
    console.log(p)
  return (
    <div className="card card-side bg-base-100 shadow-sm items-center">
      <figure>
        <img className="h-28 w-40 object-cover" src={p.image} alt="image" />
      </figure>

      <div className="flex justify-between items-center w-full px-4">
        <div className="space-y-2">
          <h2 className="card-title">{p.title}</h2>
          <div className="flex items-center ">
            <div className="flex items-center">
              <img className="w-1/5 h-1/5 mr-1" src={downloadLogo} alt="" />
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

  );
};

export default UninstallApps;
