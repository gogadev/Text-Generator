import React, { Component } from "react";
import axios from "axios";

import Header from "./components/header/Header";
import Select from "./components/select/Select";
import Paragraph from "./components/paragraph/Paragraph";
import Output from "./components/output/Output";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paragraphs: 5,
      typeText: "all-meat",
      text: "",
    };
  }

  getText = () => {
    axios
      .get(
        `https://baconipsum.com/api/?type=${this.state.typeText}&paras=${this.state.paragraphs}&format=text`
      )
      .then((res) => {
        this.setState({ text: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getText();
  };

  toggleText = () => {
    this.setState(
      {
        typeText: this.state.typeText ? "meat-and-filler" : "all-meat",
      },
      this.getText
    );
  };

  changeParas = (number) => {
    this.setState({ paragraphs: number }, this.getText);
  };

  render() {
    const { paragraphs, text, typeText } = this.state;
    return (
      <React.Fragment>
        <Header />
        <form className="form">
          <label htmlFor="toggleText">~Select Text~</label>
          <Select value={typeText} onChange={this.toggleText} />
        </form>
        <form className="form">
          <label htmlFor="paragraphs">~Paragraphs~ </label>
          <Paragraph value={paragraphs} onChange={this.changeParas} />
        </form>
        <Output value={text} />
      </React.Fragment>
    );
  }
}

export default App;
