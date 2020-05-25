import React, { Component } from "react";

class Paragraph extends Component {
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
      const {value} = this.state
    return (
      <div>
        <div className="container">
          <input
            type="number"
            min="1"
            value={value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Paragraph;
