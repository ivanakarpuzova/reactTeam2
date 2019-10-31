import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key={'X'}>
          <ListItemText
            primary={'X'}
            style={{ textAlign: 'right', paddingRight: '20px' }}
          />
        </ListItem>
        <ListItem button key={'Home'}>
          <ListItemText primary={'Home'} style={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem button key={'About'}>
          <ListItemText primary={'About'} style={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem button key={'Dashboard'}>
          <ListItemText primary={'Dashboard'} style={{ textAlign: 'center' }} />
        </ListItem>
        <ListItem button key={'Carousel'}>
          <ListItemText primary={'Carousel'} style={{ textAlign: 'center' }} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer('top', true)}
        style={{
          color: '#fff',
          textShadow: '2px #fff',
          '&:hover': {
            backgroundColor: '#00000052',
            color: '#fff'
          }
        }}
      >
        MENU
      </Button>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
      >
        {fullList('top')}
      </Drawer>
    </div>
  );
}
