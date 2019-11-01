import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { LogInPage } from './pages/LogInPage';
import { MainLayout } from './layout/MainLayout';
import { SecondaryLayout } from './layout/SecondaryLayout';
import { HomePage } from './pages/HomePage';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import amber from '@material-ui/core/colors/amber';
import Checkout from './components/checkout/Checkout';
import { Error404Page } from './pages/Error404Page';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: orange
  },
  status: {
    danger: 'orange'
  }
});

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <MainLayout exact path="/" component={HomePage} />
          <Route path="/login" component={LogInPage} />
          <SecondaryLayout path="/prijavi" component={Checkout} />
          <Route path="*" component={Error404Page} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
