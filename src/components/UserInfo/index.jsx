import React from "react";

const UserInfo = ({ userInfo }) => {
  const {
    username,
    userProfileLink,
    githubStartYear,
    city,
    country,
    followersCount,
    publicReposCount,
  } = userInfo;

  let repoWord = "repository";
  let followerWord = "follower";

  // check if count is multiple
  if (publicReposCount > 1) repoWord = "repositories";
  if (followersCount > 1) followerWord += "s";
  return (
    <section>
      {username && <h1 className="resume-title ubuntu-font">{username}</h1>}
      <article>
        {username && (
          <p className="resume-subtitle ubuntu-font">
            A passionate Github user
          </p>
        )}
        {userProfileLink && (
          <p className="link-paragraph">
            <a
              target="blank"
              href={userProfileLink}
              className="link open-sans-font"
            >
              {userProfileLink}
            </a>
          </p>
        )}
        <p className="open-sans-font">
          {githubStartYear && (
            <span>
              On Github since {new Date(githubStartYear).getFullYear()},
            </span>
          )}
          {username && <span> {username} is a developer</span>}
          {city && country ? (
            <span>
              {" "}
              based in {city}, {country}
            </span>
          ) : city ? (
            <span> based in {city}</span>
          ) : country ? (
            <span> based in {country}</span>
          ) : (
            ""
          )}
          {publicReposCount &&
          publicReposCount > 0 &&
          followersCount &&
          followersCount > 0 ? (
            <span>
              {" "}
              with{" "}
              <span className="pink-color">
                {publicReposCount} public {repoWord}
              </span>{" "}
              and{" "}
              <span className="pink-color">
                {followersCount} {followerWord}
              </span>
              .
            </span>
          ) : followersCount && followersCount > 0 ? (
            <span>
              {" "}
              with{" "}
              <span className="pink-color">
                {followersCount} {followerWord}
              </span>
              .
            </span>
          ) : publicReposCount && publicReposCount > 0 ? (
            <span>
              {" "}
              with{" "}
              <span className="pink-color">
                {publicReposCount} public {repoWord}
              </span>
              .
            </span>
          ) : (
            ""
          )}
        </p>
      </article>
    </section>
  );
};
export default UserInfo;
