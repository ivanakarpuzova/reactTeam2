import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { LogInPage } from './pages/LogInPage';
import { MainLayout } from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import amber from '@material-ui/core/colors/amber';
import Checkout from '../src/checkout/Checkout';
import Dashboard from './dashboard/Dashboard';
import CustomChart from './chart/CustomChart';

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
          <MainLayout path="/home" render={() => <Redirect to="/" />} />
          <Route path="/login" component={LogInPage} />
          <Route path="/input" component={Checkout} />
          <Route path="/chart" component={CustomChart} />
          <Route path="/statistiki" component={Dashboard} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
