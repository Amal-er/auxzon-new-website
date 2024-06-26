// import React, { useState } from "react";

// const ReadMoreReadLess = ({ img, title, shortContent, longContent }) => {
//   const [collapse, setCollapse] = useState(false);
//   return (
//     <div className="box bg-red-40 md:w-auto h-auto md:flex justify-between items-center ">
//       <div className="content shadow-md ">
//         <div>{img}</div>
//         <p className="text-black text-xl font-bold">{title}</p>
//         {shortContent}
//         <span className={`long-text ${collapse ? "expanded" : ""}`}>
//           {longContent}
//         </span>
//         <button onClick={() => setCollapse((prev) => !prev)}>read more</button>
//       </div>
//     </div>
//   );
// };

// export default ReadMoreReadLess;

// import { useState } from "react";

// const ReadMoreReadLess = ({ img, title, shortContent, longContent }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//       {img && (
//         <img
//           src={img}
//           alt={title}
//           className="w-full h-48 object-cover rounded-t-lg mb-4"
//         />
//       )}
//       <h3 className="text-lg font-bold mb-2">{title}</h3>
//       <p
//         className={`transition-all duration-300 ease-in-out ${
//           isExpanded
// ? "max-h-full opacity-100"
//             : "max-h-24 opacity-75 overflow-hidden"
//         }`}
//       >
//         {isExpanded ? longContent : shortContent}
//       </p>
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
//       >
//         {isExpanded ? "Read Less" : "Read More"}
//       </button>
//     </div>
//   );
// };

// export default ReadMoreReadLess;

import { useState } from "react";

const ReadMoreReadLess = ({ img, title, shortContent, longContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      )}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="opacity-75">{shortContent}</p>
      {isExpanded && (
        <p className="transition-all duration-300 ease-in-out max-h-full opacity-100">
          {longContent}
        </p>
      )}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
