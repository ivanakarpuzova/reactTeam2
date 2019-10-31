import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CustomDropzone from '../components/CustomDropzone';
import { makeStyles } from '@material-ui/core/styles';
import CustomMapBox from '../components/CustomMapBox';

const useStyles = makeStyles(theme => ({
  payment: {
    height: '150px',
    width: '100%',
    backgroundColor: '#fff',
    border: '2px dashed rgb(187, 186, 186)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '16px'
  }
}));

export default function PaymentForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Локација
          </Typography>
          <TextField required id="cardName" label="Општина" fullWidth />
          <TextField required id="cardName" label="Град" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.payment}>
            <CustomDropzone />
          </div>
        </Grid>
        <Grid item xs={12}>
          <CustomMapBox />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
