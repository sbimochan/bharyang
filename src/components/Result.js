import React from 'react';
import { Typography } from '@material-ui/core';

export default function Result({children}) {
  return (
    <div className="result-section m-10">
      <Typography variant="h5">Result</Typography>
      {children}
    </div>
	);
}