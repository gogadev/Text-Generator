import React, { Component } from "react";

import image from "../../assets/image.png";

import "./output.style.css";

class Output extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  render() {
    const { value } = this.props;
    return (
      <div className="output">
        <div className="output-img">
          {" "}
          <img className="image" src={image} alt="" />
        </div>
        <p className="paras" align="justify">
          {value}
        </p>
      </div>
    );
  }
}

export default Output;
