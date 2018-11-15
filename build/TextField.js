"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("@material-ui/core/styles");
const TextField_1 = require("@material-ui/core/TextField");
const blue_1 = require("@material-ui/core/colors/blue");
// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },
// });
class FilledTextFields extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            age: '',
            multiline: 'Controlled',
            currency: 'EUR',
        };
        this.handleChange = name => event => {
            this.props.onDataFetched(event.target.value);
            this.setState({
                [name]: event.target.value,
            });
        };
    }
    render() {
        const theme = styles_1.createMuiTheme({
            palette: {
                primary: blue_1.default,
            },
            typography: { useNextVariants: true },
        });
        const style = {
            textfield: {
                background: "#FFFFFF",
            }
        };
        return (React.createElement("form", null,
            React.createElement(styles_1.MuiThemeProvider, { theme: theme },
                React.createElement(TextField_1.default, { style: style.textfield, id: "filled-name", label: this.props.title, value: this.state.name, onChange: this.handleChange('name'), margin: "normal", variant: "filled" }))));
    }
}
exports.default = FilledTextFields;
// export default withStyles(styles)(FilledTextFields);
//# sourceMappingURL=TextField.js.map