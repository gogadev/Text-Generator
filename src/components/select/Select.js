import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        this.props.onChange(this.state.value);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <select onChange={this.handleChange}>
          <option value="">Choose here</option>
          <option value="all-meat"> All Meat</option>
          <option value="meat-and-filler">Meat & Ipsum</option>
        </select>
      </div>
    );
  }
}

export default Select;
