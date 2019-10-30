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
import Chatting from './components/Chatting';
import CustomMapBox from './components/CustomMapBox';

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
          <MainLayout path="/input" component={Checkout} />
          <MainLayout path="/chart" component={CustomChart} />
          <MainLayout path="/chat" component={Chatting} />
          {/* <MainLayout
            path="/map"
            render={() => <Redirect to="/map?access_token=token" />}
          /> */}
          <MainLayout path="/map" component={CustomMapBox} />
          <MainLayout path="/dashboard" component={Dashboard} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
