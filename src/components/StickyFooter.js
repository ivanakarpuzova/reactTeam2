import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Grid from '@material-ui/core/Grid';
import Subscribe from './Subscribe/Subscribe';

const useStyles = makeStyles({
  footer: {
    padding: '0',
    marginTop: '20px',
    background: '#0e101561',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        spacing={4}
        style={{
          boxShadow: 'none',
          padding: '20px',
          width: '80%',
          marginBottom: '0px'
        }}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Typography variant="body1">
              <img src="/korpi.png" width="170px" height="150px" />
            </Typography>
            <Typography variant="body2" color="textSecondary" align="left">
              {'Copyright © '}
              <Link color="inherit" href="https://material-ui.com/">
                Your Website
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '20px'
            }}
          >
            <Subscribe />
            <div
              style={{
                marginTop: '20px'
              }}
            >
              <a href="https://www.facebook.com/">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/">
                <TwitterIcon />
              </a>
              <a href="https://www.pinterest.com/">
                <PinterestIcon />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}
