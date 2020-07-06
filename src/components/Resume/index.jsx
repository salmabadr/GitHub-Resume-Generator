import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Language from "../Language";
import UserInfo from "../UserInfo";
import Repository from "../Repository";

class ResumeComponent extends React.Component {
  render() {
    const { langs, userInfo, repos, showSpinner } = this.props;
    return (
      <section>
        {!showSpinner &&
        Object.keys(langs).length > 0 &&
        Object.keys(userInfo).length > 0 &&
        repos.length > 0 ? (
          // Show the resume section only after data is retrieved
          <section className="resume">
            <section className="user-info">
              {Object.keys(userInfo).length > 0 && (
                <UserInfo userInfo={userInfo} />
              )}
            </section>
            {Object.keys(langs).length > 0 && (
              <section className="langs">
                <h1 className="ubuntu-font">Languages</h1>
                <article>
                  {Object.keys(langs).map((key, index) => (
                    <Language
                      className={`col-${index + 1}`}
                      key={index}
                      lang={key}
                      percent={langs[key]}
                    />
                  ))}
                </article>
              </section>
            )}
            {repos.length > 0 && (
              <section className="repos">
                <h1 className="ubuntu-font">Popular Repositories</h1>
                {repos.map((repo, index) => (
                  // Passing userID to check the user's repo rights
                  <Repository
                    key={index}
                    repoInfo={repo}
                    userID={userInfo.id}
                  />
                ))}
              </section>
            )}
          </section>
        ) : (
          // If no data is retrieved yet, show loading icon
          showSpinner && (
            <Loader
              className="spinner"
              type="Oval"
              color="#ec174d"
              height={30}
              width={30}
              visible={showSpinner}
            />
          )
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  repos: state.repos,
  langs: state.langs,
  showSpinner: state.showSpinner,
});

export default connect(mapStateToProps)(ResumeComponent);
