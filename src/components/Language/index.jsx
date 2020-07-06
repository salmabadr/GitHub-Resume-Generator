import React from "react";

const Language = ({ lang, percent, className }) => {
  const percentage = `${percent}%`;
  return (
    <section className={className}>
      <span className="pink-color open-sans-font">{lang}</span>
      <span> {percentage}</span>
      <article className="progress-bar-wrapper">
        <span
          className="progress-bar open-sans-font"
          style={{ width: percentage }}
        ></span>
      </article>
    </section>
  );
};

export default Language;
