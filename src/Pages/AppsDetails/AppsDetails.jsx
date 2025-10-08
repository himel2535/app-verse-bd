import React from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import LoadingPage from "../LoadingPage/LoadingPage";
import downloadsLogo from "../../assets/icon-downloads.png";
import avgRatingLogo from "../../assets/icon-ratings.png";
import reviewsLogo from "../../assets/icon-review.png";

const AppsDetails = () => {
  const { id } = useParams();

  const { apps, loading } = useApps();

  const app = apps.find((a) => String(a.id) === id) || {};
  
  if (loading) return <LoadingPage></LoadingPage>;
  const {
    title,
    image,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    // ratings,
  } = app;

  const handleInstall=()=>{

    const existingList=JSON.parse(localStorage.getItem("installedList"))

    let updatedList=[]

    if(existingList){

        const isDuplicate=existingList.some(a=>a.id===app.id)

        if(isDuplicate) return alert('sorry this is already installed')

      updatedList=[...existingList,app]
    }
    else{
      updatedList.push(app)
    }

    localStorage.setItem("installedList",JSON.stringify(updatedList))
  }

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

          {/* dnld,rtng,rvw */}
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
            <button onClick={()=>handleInstall()} className="btn btn-primary">Install Now ({size}mb)</button>
          </div>
        </div>
      </div>
      <div className="my-7 py-6 border-y">
        <h1>Recharts</h1>
      </div>
      <div>
        <h3>
          <span className="font-semibold text-xl">Description</span> <br />{" "}
          <span className="text-gray-500">{description}</span>
        </h3>
      </div>
    </div>
  );
};

export default AppsDetails;
