import React from "react";
import { connect } from "react-redux";
import Resume from "../Resume";
import Generator from "../Generator";

class WrraperComponent extends React.Component {
  render() {
    return (
      <section className="wrapper">
        <h2 className="title ubuntu-font">My Github Resumé</h2>
        <section className="form-section">
          <Generator />
        </section>
        <section className="resume-section">
          <Resume />
        </section>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  repos: state.repos,
  langs: state.langs,
});
export default connect(mapStateToProps)(WrraperComponent);
