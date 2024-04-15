import React from "react";
import Input from "../components/UI/HsInput";
import Button from "../components/UI/HsButton";
import JobCard from "../components/JobCard";
import data from "../dummy/data";

function Home() {
  return (
    <div className="relative">
      <div className="absolute top-[-35px] z-10">
        <div className="grid grid-cols-4  gap-[1px] w-full ">
          <div className="col-span-2">
            <Input placeholder="Filter by title, companies, expertise…" />
          </div>
          <div className=" col-span-1">
            <Input placeholder="Filter by location…" />
          </div>
          <div className="col-span-1 flex items-center justify-between  rounded-md px-4 bg-white dark:bg-VeryDarkBlue">
            <input type="checkbox" />
            <p className="font-semibold  dark:text-white">Full Time Only</p>
            <Button title="Search" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10  gap-x-5 pt-20">
        {data.map((ele, index) => {
          return (
            <JobCard
              key={index}
              companyName={ele.companyName}
              jobTitle={ele.jobTitle}
              jobType={ele.jobType}
              logo={ele.companyLogo}
              Published={ele.Published}
              companyColor={ele.companyColor}
              location={ele.location}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center py-5">
        <Button title="Load more" />
      </div>
    </div>
  );
}

export default Home;
