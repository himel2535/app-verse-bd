import React from "react";
import iconRatings from "../../assets/icon-ratings.png";
import iconDownload from "../../assets/icon-downloads.png";
import { Link } from "react-router";

const TrendingAppsCards = ({ app }) => {
  const { image, title, ratingAvg, downloads,id } = app;

  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out cursor-pointer">
        <figure className="h-50 m-4 mb-3 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="m-4 mt-0">
          <h2 className="card-title mb-3">{title}</h2>
          <div className="flex justify-between">
            <div className="badge badge-outline">
              <img className="w-[12px] h-[12px]" src={iconDownload} alt="" />
              {downloads}
            </div>
            <div className="badge badge-outline">
              <img className="w-[12px] h-[12px]" src={iconRatings} alt="" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingAppsCards;
