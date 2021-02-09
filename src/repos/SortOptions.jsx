import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const SortOptions = (props) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>

        <ToggleButtonGroup
          value={props.initialValue}
          exclusive
          onChange={props.onToggle}
          aria-label="Grid Sort"
        >
          <ToggleButton value="alpha" aria-label="Alphabetical">
            <SortByAlphaIcon /> Alphabetical
          </ToggleButton>

          <ToggleButton value="stars" aria-label="Stars">
            <StarBorderIcon /> Stars
          </ToggleButton>

        </ToggleButtonGroup>
      </div>
  );
};

export default SortOptions;
