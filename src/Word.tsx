import * as React from "react";
import * as ReactDOM from "react-dom";
import FilledTextFields from './TextField';

export default class Word extends React.Component<{}, {word: string, timing: number}> {

  public css = `
  @font-face {
    font-family: "CaviarDreams";
    src:url("../fonts/caviardreams.woff");
  }
  
  .textStyle {
    font-family: "CaviarDreams";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }`;

  public logo = `
  @font-face {
    font-family: "Shink";
    src:url("../fonts/Shink.woff");
  }
  
  .logoStyle {
    font-family: "Shink";
    color: white;
  }`;

  constructor(props) {
    super(props);
    this.state = {
      word: "Bienvenue",
      timing: 4,
    };
    this.handleTiming = this.handleTiming.bind(this);
  }

  interval() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.state.timing);
        fetch("https://murmure-asmr-api.herokuapp.com/api/v1/random-word")
        .then(res => res.json())
        .then(res => {
          this.setState({word: res.word});
          resolve();
        })
        .catch(e => console.log(e));
      }, this.state.timing * 1000);
    });
  }

  infinite() {
    this.interval()
    .then(() => {
      this.infinite();
    })
  }

  componentDidMount() {
    this.infinite();
  }

  handleTiming(nb) {
    this.setState({timing: nb});
  }

  render() {
      const style = {
        height: "400px",/*Only for the demo.*/
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }
      return (
        <div>
          <style>
            {this.logo}
          </style>
          <h1 className="logoStyle">
            Murmure ASMR
          </h1>
          <div style={style}>
            <FilledTextFields title="Intervalle (en seconde)" onDataFetched={this.handleTiming}/>
          </div>
          <style>
            {this.css}
          </style>
          <h1 className="textStyle">
            {this.state.word}
          </h1>
        </div>);
  }
}