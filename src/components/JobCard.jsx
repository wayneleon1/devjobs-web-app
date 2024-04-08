import React from "react";
import scoot from "../assets/logos/scoot.svg";

function JobCard({ logo, time, title, category, country }) {
  return (
    <div className="bg-white px-8 pb-8 pt-12  min-w-[350px] rounded-md relative">
      <div className="bg-[#E99210] w-[50px] h-[50px] rounded-xl overflow-hidden flex flex-col justify-center absolute top-[-25px]">
        <img src={scoot} alt="company_logo" className="mx-1" />
      </div>
      <div className="flex flex-col justify-between gap-11">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-DarkGrey">5h ago . Full Time</p>
          </div>
          <div>
            <h3 className="font-bold text-VeryDarkBlue cursor-pointer hover:text-DarkGrey">
              Senior Software Engineer
            </h3>
          </div>
          <div>
            <p className="text-DarkGrey">Scoot</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-PrimaryViolet">United Kingdom</h4>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
