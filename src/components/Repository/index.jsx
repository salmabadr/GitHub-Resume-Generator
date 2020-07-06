import React from "react";

const Repository = ({ repoInfo, userID }) => {
  let {
    name,
    lang,
    ownerID,
    description,
    yearFrom,
    yearTo,
    starsCount,
    forksCount,
    link,
  } = repoInfo;

  let starWord = "star";
  let forkWord = "fork";

  // check if count is multiple
  if (starsCount === 0 && starsCount > 1) starWord += "s";
  if (forksCount === 0 && starsCount > 1) forkWord += "s";

  return (
    <section className="single-repo">
      <article>
        <article className="row">
          {name && <p className="repo-col-1 pink-color ubuntu-font">{name}</p>}
          {yearFrom && yearTo ? (
            <p className="repo-col-2 grey-color ubuntu-font">
              {new Date(yearFrom).getFullYear()} -{" "}
              {new Date(yearTo).getFullYear()}
            </p>
          ) : yearFrom ? (
            <p className="repo-col-2 grey-color ubuntu-font">
              {new Date(yearFrom).getFullYear()}
            </p>
          ) : (
            ""
          )}
        </article>
        {lang && ownerID === userID ? (
          <p className="grey-color repo-paragraph open-sans-font">
            {lang} - Creator and Owner
          </p>
        ) : lang ? (
          <p className="grey-color repo-paragraph open-sans-font">{lang}</p>
        ) : (
          ownerID === userID && (
            <p className="grey-color repo-paragraph open-sans-font">
              Creator and owner
            </p>
          )
        )}
      </article>
      <article>
        {description && (
          <p className="repo-paragraph open-sans-font">{description}</p>
        )}
        {(starsCount || forksCount || link) && (
          <p className="repo-paragraph open-sans-font">
            {(starsCount || starsCount === 0) &&
            (forksCount || forksCount === 0) ? (
              <span>
                This repository has {starsCount} {starWord} and {forksCount}{" "}
                {forkWord}.
              </span>
            ) : starsCount || starsCount === 0 ? (
              <span>
                This repository has {starsCount} {starWord}.
              </span>
            ) : forksCount || forksCount === 0 ? (
              <span>
                This repository has {forksCount} {forkWord}.
              </span>
            ) : (
              ""
            )}
            {link && (
              <span>
                {" "}
                If you would like more information about this repository and my
                contributed code, please visit{" "}
                <a href={link} target="blank" className="link">
                  the repo
                </a>{" "}
                on GitHub.
              </span>
            )}
          </p>
        )}
      </article>
    </section>
  );
};

export default Repository;
