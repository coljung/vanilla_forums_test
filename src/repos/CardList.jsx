import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles({

  card: {
    minWidth: 175,
    border: '1px solid #333',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

//URL to get actual repo watchers
//https://api.github.com/repos/{user}/{repo_name}/subscribers

const CardList = (props) => {
  const { repoList } = props;
  const classes = useStyles();
  return (
    <div style={{ padding: '20px 0' }}>
      <Grid container spacing={3}>
        {repoList.map((repo) => {
          return (
            <Grid key={repo.id} item xs={12} md={6} lg={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Repo:
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {repo.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {repo.description}
                  </Typography>
                  <Chip icon={<StarBorderIcon />} label={repo.stargazers_count} />
                 <Chip icon={<VisibilityIcon />} label={repo.watchers} />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

    </div>
  );
}

export default CardList;

// <Layout />
