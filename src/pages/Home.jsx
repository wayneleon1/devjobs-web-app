import React from "react";
import Input from "../components/UI/HsInput";
import Button from "../components/UI/HsButton";
import JobCard from "../components/JobCard";
function Home() {
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-4  gap-[1px] w-full z-10">
          <div className="col-span-2">
            <Input placeholder="Filter by title, companies, expertise…" />
          </div>
          <div className=" col-span-1">
            <Input placeholder="Filter by location…" />
          </div>
          <div className="col-span-1 flex items-center justify-between  rounded-md px-4 bg-white dark:bg-VeryDarkBlue">
            <input type="checkbox" />
            <p className="font-semibold dark:text-white">Full Time Only</p>
            <Button title="Search" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-8">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </>
  );
}

export default Home;
