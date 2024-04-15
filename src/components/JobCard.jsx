import React from "react";

function JobCard({
  logo,
  companyName,
  Published,
  jobTitle,
  jobType,
  location,
  companyColor,
}) {
  return (
    <div className="bg-white px-8 pb-8 pt-12  min-w-[350px] rounded-md relative dark:bg-VeryDarkBlue">
      <div
        className={`bg-[${companyColor}] w-[50px] h-[50px] rounded-xl overflow-hidden flex flex-col justify-center absolute top-[-25px]`}
      >
        <img src={logo} alt="company_logo" className="mx-1" />
      </div>
      <div className="flex flex-col justify-between gap-11">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-DarkGrey">
              {Published} . {jobType}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-VeryDarkBlue cursor-pointer hover:text-DarkGrey dark:text-white">
              {jobTitle}
            </h3>
          </div>
          <div>
            <p className="text-DarkGrey">{companyName}</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-PrimaryViolet">{location}</h4>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
