import React, { useState } from 'react';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
const { Button } = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: '100vh',
    maxWidth: '60vw'
  }
}));

export const Error404Page = () => {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  setTimeout(() => setShow(true), 300);
  return (
    <>
      <Image
        src={show ? `/error404Page.png` : ''}
        disableSpinner
        className={classes.image}
      />
      <Button variant="raised">Go back</Button>
    </>
  );
};
