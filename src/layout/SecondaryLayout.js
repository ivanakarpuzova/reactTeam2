import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import StickyFooter from '../components/StickyFooter';
import { NavBar } from '../components/Navigation/NavBar';

export const SecondaryLayout = ({ component: Component, ...rest }) => {
  const ScrollToTop = () => {
    useEffect(() => window.scrollTo(0, 0));
    return null;
  };
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Route {...rest} render={matchProps => <Component {...matchProps} />} />
    </>
  );
};
