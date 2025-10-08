import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import TrendingAppsCards from "../TrendingApps/TrendingAppsCards";

const Apps = () => {
  const { apps } = useApps();

  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="my-7 ">
      <div className="text-center mb-8">
        <h1 className="font-semibold text-2xl mb-1">Our All Applications</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-lg">({searchedApps.length}) Apps Found</h1>

        {/* Search box */}
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      <div className="mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {searchedApps.map((app) => (
          <TrendingAppsCards key={app.id} app={app}></TrendingAppsCards>
        ))}
      </div>
    </div>
  );
};

export default Apps;
