import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import TrendingAppsCards from "../TrendingApps/TrendingAppsCards";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../Error Page/ErrorPage";
import AppsNotFound from "../../assets/App-Error.png"

const Apps = () => {
  const { apps, loading, error } = useApps();

  const [search, setSearch] = useState("");

  const [searchLoading, setSearchLoading] = useState(false);

  const [timeoutId, setTimeoutId] = useState(null);

  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  if (loading) return <LoadingPage></LoadingPage>;
  if (error) return <ErrorPage></ErrorPage>;

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);

    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setSearchLoading(false);
    }, 300);
    setTimeoutId(id);
  };

  return (
    <div className="my-7 ">
      <div className="text-center mb-8">
        <h1 className="font-semibold text-2xl mb-1">Our All Applications</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-lg">
          ({searchedApps.length}) Apps Found
        </h1>

        {/* Search box */}
        <label className="input">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>

      <div className="mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {searchedApps.length === 0 && !searchLoading ? (
          <div className="col-span-full items-center flex flex-col text-gray-500 text-lg">
            <img src={AppsNotFound} alt="" />
            <h1 className="font-bold text-4xl text-center text-black mb-3 mt-5">OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>

          </div>
        ) : (
          searchedApps.map((app) => (
            <TrendingAppsCards key={app.id} app={app} />
          ))
        )}

        {searchLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/70 z-50">
            <LoadingPage />
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
