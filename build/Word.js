"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TextField_1 = require("./TextField");
class Word extends React.Component {
    constructor(props) {
        super(props);
        this.css = `
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
        this.logo = `
  @font-face {
    font-family: "Shink";
    src:url("../fonts/Shink.woff");
  }
  
  .logoStyle {
    font-family: "Shink";
    color: white;
  }`;
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
                    this.setState({ word: res.word });
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
        });
    }
    componentDidMount() {
        this.infinite();
    }
    handleTiming(nb) {
        this.setState({ timing: nb });
    }
    render() {
        const style = {
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
        };
        return (React.createElement("div", null,
            React.createElement("style", null, this.logo),
            React.createElement("h1", { className: "logoStyle" }, "Murmure ASMR"),
            React.createElement("div", { style: style },
                React.createElement(TextField_1.default, { title: "Intervalle (en seconde)", onDataFetched: this.handleTiming })),
            React.createElement("style", null, this.css),
            React.createElement("h1", { className: "textStyle" }, this.state.word)));
    }
}
exports.default = Word;
//# sourceMappingURL=Word.js.map