"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Word_1 = require("./Word");
const react_helmet_1 = require("react-helmet");
ReactDOM.render(React.createElement("div", { className: "application" },
    React.createElement(react_helmet_1.Helmet, null,
        React.createElement("style", null, 'body { background-color: #09171E; }')),
    React.createElement(Word_1.default, null)), document.getElementById("root"));
//# sourceMappingURL=app.js.map