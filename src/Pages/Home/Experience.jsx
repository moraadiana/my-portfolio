import React from "react";

import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="myExperience">
      <div className="experience--container">
        <h2 className="experience--section--heading">My Work Experience</h2>
      </div>
      <div className="experience--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
           
            <div className="experience--section--card--content">
              <h3 className="experience--section--title">{item.title}</h3>
              <h3 className="experience--section--company">{item.company}</h3>
              <p className="experience--section--duration">{item.duration}</p>
              <p className="experience--section--description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
