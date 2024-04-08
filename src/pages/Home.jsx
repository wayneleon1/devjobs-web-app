import React from "react";
import Input from "../components/UI/HsInput";
function Home() {
  return (
    <div className="grid grid-cols-4 gap-[2px] absolute ">
      <div className="col-span-2">
        <Input placeholder="Filter by title, companies, expertise…" />
      </div>
      <div className=" col-span-1">
        <Input placeholder="Filter by location…" />
      </div>
    </div>
  );
}

export default Home;
