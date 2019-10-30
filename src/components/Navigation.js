import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: '#fff',
    textShadow: '2px #fff',
    '&:hover': {
      backgroundColor: '#00000052',
      color: '#fff'
    }
  },
  logOutButton: {
    margin: theme.spacing(1)
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px'
  },
  userIcon: {
    marginRight: '5px'
  }
}));

export const Navigation = () => {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AppBar style={{ background: '#0e101561', boxShadow: 'none' }}>
      <Toolbar>
        <Grid item sm={6}>
          <Button onClick={scrollToTop} className={classes.button}>
            #НЕБидиЃубре
          </Button>
        </Grid>
        <Grid item sm={6} container direction="row" justify="flex-end">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button href="" className={classes.button}>
                  Section 1
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button href="" className={classes.button}>
                  Section 2
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button href="" className={classes.button}>
                  Section 3
                </Button>
              </Link>
            </li>
          </ul>

          {/* <Button
            className={classes.logOutButton}
            variant="contained"
            color="secondary"
          >
            Log out
          </Button>  */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
