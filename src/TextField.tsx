import * as React from 'react';
import * as PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';

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

class FilledTextFields extends React.Component<any> {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.props.onDataFetched(event.target.value)
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: blue,
      },
      typography: { useNextVariants: true },
    });
    const style = {
      textfield:{
        background: "#FFFFFF",
      }
    }
    return (
      <form>
        <MuiThemeProvider theme={theme}>
          <TextField
            style = {style.textfield}
            id="filled-name"
            label={this.props.title}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
        </MuiThemeProvider>
      </form>
    );
  }
}

export default FilledTextFields;
// export default withStyles(styles)(FilledTextFields);