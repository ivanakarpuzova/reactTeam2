import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' }
// ];
// const addresses = [
//   '1 Material-UI Drive',
//   'Reactville',
//   'Anytown',
//   '99999',
//   'USA'
// ];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' }
// ];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: '700'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className={classes.title}>
            <Typography variant="h6">
              Успешна пријава. <br /> Ви благодариме!
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.title}>
            <img alt="" height="150px" width="200" src="/neBidiGubreLogo.jpg" />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
