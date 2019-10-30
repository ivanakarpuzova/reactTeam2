import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import StickyFooter from '../components/StickyFooter';

export const MainLayout = ({ component: Component, ...rest }) => {
  const ScrollToTop = () => {
    useEffect(() => window.scrollTo(0, 0));
    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Route {...rest} render={matchProps => <Component {...matchProps} />} />
      <StickyFooter />
    </>
  );
};
