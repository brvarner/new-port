import React from "react";

export default function Job({ title, company, dates, points, index }) {
  return (
    <div className="my-3">
      <h3 className="font-semibold text-2xl">{title}</h3>
      <h4 className="font-bold">{company}</h4>
      <h4 className="font-light mb-3">{dates}</h4>

      <ul className="list-disc list-inside">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {index == 3 ? null : <hr className="mt-5" />}
    </div>
  );
}
