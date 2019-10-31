import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DonutChart from './DonutChart';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '64px',
    height: '100vh'
  },
  card: {
    display: 'flex',
    width: 290,
    height: 150
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '500px'
  }
}));

export default function Dasboard_new() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center'
              }}
            >
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      573
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Исчистени локации
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}></div>
                </div>
                <CardMedia className={classes.cover} title="1236" />
                <img src="/ecoOff.jpg" width="200px" height="140px" />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center'
              }}
            >
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      78
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Локации на кои се работи
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}></div>
                </div>
                <CardMedia className={classes.cover} title="1236" />
                <img src="/inprogress.jpg" width="200px" height="140px" />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center'
              }}
            >
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      109
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Локации кои треба да се чистат
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}></div>
                </div>
                <CardMedia className={classes.cover} title="109" />
                <img src="/warning2.jpg" width="200px" height="140px" />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center'
              }}
            >
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      1236
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Пријавени во еко-акциите
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}></div>
                </div>
                <CardMedia className={classes.cover} title="1236" />
                <img src="/pp.png" width="200px" height="140px" />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <DonutChart />
        </Grid>
      </Grid>
    </div>
  );
}
