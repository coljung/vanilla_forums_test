import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px',
  },
  title: {
    flexGrow: 1,
    paddingLeft: '26px',
  },
}));


const Header = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6" className={classes.title}>
                  Github Repository Coding Test
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default Header;
