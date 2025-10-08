import React from "react";
import { Link } from "react-router";
import TrendingAppsCards from "./TrendingAppsCards";
import useApps from "../../Hooks/useApps";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../Error Page/ErrorPage";

const TrendingApps = () => {
  const allApps = useApps();
  const { apps, loading, error } = allApps;

  const featuredApps = apps.slice(0, 8);

  if(loading) return <LoadingPage></LoadingPage>
  if(error) return <ErrorPage></ErrorPage>

  return (
    <div className="my-7 text-center">
      <h1 className="font-semibold text-2xl mb-1">Trending Apps</h1>
      <p className="text-gray-500">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {loading ? (
          <LoadingPage></LoadingPage>
        ) : (
          featuredApps.map((app) => (
            <TrendingAppsCards key={app.id} app={app}></TrendingAppsCards>
          ))
        )}
      </div>
      <Link
        to="/apps"
        className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
      >
        Show All
      </Link>
    </div>
  );
};

export default TrendingApps;
