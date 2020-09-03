import React from 'react';
import { Paper, Typography } from '@material-ui/core';

export default function Guide() {
	return (
		<Paper elevation={3}>
			<Typography variant="caption" display="block">
				Supports any type of units such as inches, cm, meters, etc.
			</Typography>
			<Typography variant="caption" display="block">
				Make sure both height and base are in same units.
			</Typography>
			<img src="ladder.gif" alt="ladder reference" width="290" height="290"/>
		</Paper>
	);
}
