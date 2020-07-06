import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { getUserInfo } from "../../actions";
import spinnerShown from "../../actions/showSpinner";
import error from "../../actions/error";

class GeneratorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
  }

  handleChange = (e) => {
    // Reset form error for empty field
    this.props.setError("");
    this.setState({ userName: e.target.value, emptyError: "" });
  };

  generateResume = (e) => {
    e.preventDefault();
    // Handling empty input field
    if (isEmpty(this.state.userName)) {
      this.setState({ emptyError: "Please enter your Github username" });
    } else {
      // Requesting user's info
      this.props.spinnerShown(true);
      this.props.getUserInfo(this.state.userName);
    }
  };

  render() {
    // error from the store contains API's errors
    const { error } = this.props;
    return (
      <form className="generator-form row" onSubmit={this.generateResume}>
        <section className="column-left">
          <h1 className="ubuntu-font">Github username</h1>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
            placeholder="Ex: John Doe"
          />
          {this.state.emptyError ? (
            <span className="error-message">{this.state.emptyError}</span>
          ) : (
            error && <span className="error-message">{error}</span>
          )}
        </section>
        <button className="generate-btn column-right ubuntu-font" type="submit">
          Generate
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (userName) => dispatch(getUserInfo(userName)),
    spinnerShown: (spinnerBoolean) => dispatch(spinnerShown(spinnerBoolean)),
    setError: (errorMsg) => dispatch(error(errorMsg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneratorComponent);
