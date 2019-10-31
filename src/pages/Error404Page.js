import React, { useState } from 'react';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
const { Button } = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: '100vh',
    // maxWidth: '60vw',
    display: 'block',
    margin: 'auto',
    marginTop: '-40px'
  }
}));

export const Error404Page = () => {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  setTimeout(() => setShow(true), 300);
  return (
    <>
      <Button
        variant="raised"
        style={{
          backgroundColor: 'black',
          color: 'white',
          marginLeft: '30px',
          marginTop: '30px'
        }}
        href="/"
      >
        Home
      </Button>
      <img
        src={show ? `/error404Page.png` : ''}
        disableSpinner
        className={classes.image}
      />
    </>
  );
};
