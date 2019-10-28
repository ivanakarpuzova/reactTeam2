import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { LogInPage } from './LogInPage';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Example from './Example';
import orange from '@material-ui/core/colors/orange';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: orange
  },
  status: {
    danger: 'orange'
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/home" component={Example} />
          <Route path="/login" component={LogInPage} />
          <Route path="*" render={() => <Redirect to="/home" />} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;