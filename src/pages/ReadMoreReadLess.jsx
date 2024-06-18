import React, { useState } from "react";

const ReadMoreReadLess = ({ title, shortContent, longContent }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="box bg-red-40 md:w-auto h-auto md:flex justify-between items-center ">
      <div className="content shadow-md ">
        <p className="text-black text-xl font-bold">{title}</p>
        {shortContent}
        <span className={`long-text ${collapse ? "expanded" : ""}`}>
          {longContent}
        </span>
        <button onClick={() => setCollapse((prev) => !prev)}>read more</button>
      </div>
    </div>
  );
};

export default ReadMoreReadLess;
