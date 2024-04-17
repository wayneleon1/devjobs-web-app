import React from "react";
import Input from "../components/UI/HsInput";
import Button from "../components/UI/HsButton";
import JobCard from "../components/JobCard";
import data from "../dummy/data";
import { MdSearch } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function Home() {
  return (
    <div className="relative">
      <div className="absolute top-[-50px] z-10 w-full">
        <div className="grid md:grid-cols-3 lg:grid-cols-4  gap-[1px]  bg-white dark:bg-VeryDarkBlue rounded-sm">
          <div className="md:col-span-1 lg:col-span-2 border-r-[1px] border-DarkGrey/20">
            <Input
              icon={<MdSearch className="text-PrimaryViolet size-7" />}
              placeholder="Filter by title, companies, expertise…"
            />
          </div>
          <div className="col-span-1 border-r-[1px] border-DarkGrey/20">
            <Input
              icon={<MdLocationOn className="text-PrimaryViolet size-7" />}
              placeholder="Filter by location…"
            />
          </div>
          <div className="col-span-1 flex items-center justify-between px-4">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                class="bg-VeryDarkBlue/10 dark:bg-white/10 dark:hover:bg-white/25 checked:bg-PrimaryViolet checked:border-transparent checked:outline-none size-5 rounded-sm cursor-pointer hover:bg-PrimaryViolet/25"
              />
              <p className="font-medium dark:text-white ">Full Time Only</p>
            </div>
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
