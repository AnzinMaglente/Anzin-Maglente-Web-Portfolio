import { useState } from "react";
import ChartComponent from "../partials/GraphComponent";

export default function AdminStatsTab() {
  // Variables for dynamic content
  const [isNotEmpty, setIsNotEmpty] = useState(true);

  return (
    <div>
      {/* Section Title */}
      <h2
        className="mx-6 my-8 text-xl font-semibold text-blue-600"
        onClick={() => setIsNotEmpty(!isNotEmpty)}
      >
        Stats
      </h2>
      <hr className="w-19/20 mx-auto border-gray-600" />
      <h2 className="mx-6 mt-2 py-6   text-xl font-semibold text-blue-600">
        Last 7 Days
      </h2>
      <div className="w-19/20 h-110 mx-6 bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h3 className="mx-6">Views</h3>
        <hr className="w-19/20 mx-auto my-6 border-gray-600" />
        {/* Sample Graph */}
        <div className="flex w-19/20 h-65 lg:mx-auto bg-gray-100 rounded-lg border border-gray-200 p-4 items-center justify-center text-center ">
          {isNotEmpty ? <ChartComponent /> : <p>Graph goes here</p>}
        </div>
        <div className="flex">
          {[
            {
              title: "Views: ",
              amount: 23,
            },
            {
              title: "Likes: ",
              amount: 16,
            },
            {
              title: "Comments: ",
              amount: 10,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex w-40 h-10 mx-6 my-3.5 py-3 bg-white rounded-lg border border-gray-200 text-center justify-center items-center shadow-sm"
            >
              {item.title} {item.amount}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
