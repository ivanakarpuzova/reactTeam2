import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Button } from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';
import TemporaryDrawer from './TemporaryDrawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  },
  list: {
    listStyleType: 'none'
  },
  li: {
    display: 'inline'
  }
}));

export const Navigation = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:680px)');

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AppBar
      style={{ background: '#0e101561', boxShadow: 'none', maxHeight: '64px' }}
    >
      <Toolbar>
        <Grid item sm={4}>
          <Button onClick={scrollToTop} className={classes.button}>
            #НЕБидиЃубре
          </Button>
        </Grid>
        <Grid item sm={8} container direction="row" justify="flex-end">
          <ul className={classes.list}>
            <>
              {' '}
              {matches ? (
                <>
                  {' '}
                  {
                    <>
                      <li className={classes.li}>
                        <Link
                          activeClass="active"
                          to="section1"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <Button href="" className={classes.button}>
                            Дома
                          </Button>
                        </Link>
                      </li>
                      <li className={classes.li}>
                        <Link
                          activeClass="active"
                          to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <Button href="" className={classes.button}>
                            За нас
                          </Button>
                        </Link>
                      </li>
                      <li className={classes.li}>
                        <Link
                          activeClass="active"
                          to="section3"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <Button href="" className={classes.button}>
                            Статистики
                          </Button>
                        </Link>
                      </li>
                      <li className={classes.li}>
                        <Link
                          activeClass="active"
                          to="section4"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <Button href="" className={classes.button}>
                            Галерија
                          </Button>
                        </Link>
                      </li>
                    </>
                  }{' '}
                </>
              ) : (
                <>
                  <li className={classes.li}>
                    <Button href="" className={classes.button}>
                      <TemporaryDrawer />
                    </Button>
                  </li>
                </>
              )}{' '}
            </>
          </ul>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
