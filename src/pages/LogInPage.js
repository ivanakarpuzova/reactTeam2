import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ff9b4f'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ff9b4f'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ff9b4f'
      },
      '&:hover fieldset': {
        borderColor: '#ff9b4f'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff9b4f'
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundImage: 'url(./login-background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    fontSize: 'large',
    backgroundColor: '#ff9b4f'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#ff9b4f'
  },
  signin: {
    backgroundColor: fade('#fff', 0.8)
  },
  textField: {
    marginBottom: '20px',
    color: '#000'
  }
}));

export const LogInPage = () => {
  const classes = useStyles();

  const [errorObject, setErrorObject] = useState({});
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    console.log('submited');
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        sm={5}
        component={Paper}
        elevation={6}
        className={classes.signin}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DeleteIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <CssTextField
              fullWidth
              onChange={onChange}
              value={email}
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.textField}
            />
            {errorObject && errorObject.email && <div>{errorObject.email}</div>}
            <CssTextField
              fullWidth
              onChange={onChange}
              value={password}
              type="password"
              label="Password"
              name="password"
              autoComplete="password"
              className={classes.textField}
            />
            {errorObject && errorObject.password && (
              <div>{errorObject.password}</div>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="secondary"
              fullWidth
              variant="contained"
              bgcolor="#ff9b4f"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" color="inherit">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" color="inherit">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
