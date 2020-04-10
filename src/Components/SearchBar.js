import React, { Component } from "react";

class SearchBar extends React.Component {
  state = { query: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onRec(this.state.query);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="Image">Image Search</label>
            <input
              type="text"
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
