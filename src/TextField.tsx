import * as React from 'react';
import * as PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';

class FilledTextFields extends React.Component<any> {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    if (event.target.value.match(/\D/g) === null &&
        parseInt(event.target.value) > 0 &&
        parseInt(event.target.value) <= 1000 &&
        event.target.value !== "") {
          this.props.onDataFetched(event.target.value)
        }
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
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                ev.preventDefault();
              }
            }}
            error={this.state.name.match(/\D/g) !== null || parseInt(this.state.name) > 1000}
            autoComplete='off'
          />
        </MuiThemeProvider>
      </form>
    );
  }
}

export default FilledTextFields;
// export default withStyles(styles)(FilledTextFields);