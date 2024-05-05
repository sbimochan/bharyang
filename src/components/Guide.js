import React from 'react';
import { Paper, Typography } from '@material-ui/core';

export default function Guide() {
  return (
    <Paper elevation={3}>
      <Typography display="block">Supports any type of units such as inches, cm, meters, etc.</Typography>
      <Typography display="block">Make sure both height and base are in same units.</Typography>
      <img src="ladder.gif" alt="ladder reference" />
    </Paper>
  );
}
