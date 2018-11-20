import * as React from "react";
import * as ReactDOM from "react-dom";
import FilledTextFields from './TextField';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import "./Word.scss";
import "./Logo.scss";

export default class Word extends React.Component<{}, {word: string, timing: number}> {

  public logo = `
  @font-face {
    font-family: "Shink";
    src:url("../fonts/Shink.woff");
  }`;

  public css = `
  @font-face {
    font-family: "CaviarDreams";
    src:url("../fonts/caviardreams.woff");
  }`

  constructor(props) {
    super(props);
    this.state = {
      word: "Bienvenue",
      timing: 4,
    };
    this.handleTiming = this.handleTiming.bind(this);
  }

  changeTiming() {
    var cols = document.getElementsByClassName('wordStyle');
    for (var i=0; i<cols.length; i++) {
      (cols[i] as HTMLElement).style.animationDuration = `${this.state.timing}s`;
    }
  }

  interval() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var element = document.getElementById("word");
        element.classList.remove("wordStyle");
        void element.offsetWidth;
        element.classList.add("wordStyle");
        this.changeTiming();
        fetch("https://murmure-asmr-api.herokuapp.com/api/v1/random-word")
        .then(res => res.json())
        .then(res => {
          console.log(res.word);
          this.setState({word: res.word});
          resolve();
        })
        .catch(e => console.log(e));
      }, this.state.timing * 1000 - 500);
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
      const client = {
        sandbox:    'APP-80W284485P519543T',
        production: 'APP-80W284485P519543T',
      }
      return (
        <div>
          <style>
            {this.logo}
          </style>
          <h1 className="logoStyle">
            Murmure ASMR
          </h1>
          <div className="wordStyle" id="word">{this.state.word}</div>
          <div style={style}>
            <FilledTextFields title="Intervalle (en seconde)" onDataFetched={this.handleTiming}/>
          </div>
          {/* <PaypalExpressBtn client={client} currency={'USD'} total={1.00} /> */}
        </div>);
  }
}
