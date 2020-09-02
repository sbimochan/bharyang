import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	TextField,
	Paper,
	Button,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import { getHypotenuse, getAngle } from '../engine/engine';

export default function Angle() {
	const [hypotenuse, setHypotenuse] = useState(0);
	const [angle, setAngle] = useState(0);

  	const useStyles = makeStyles((theme) => ({
			root: {
				'& > *': {
					margin: theme.spacing(1),
					width: '25ch',
				},
			},
		}));
	const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
		const hypotenuse = getHypotenuse(values.perpendicular, values.base);
		setHypotenuse(hypotenuse);

		const angle = getAngle(values.base, hypotenuse);
		setAngle(angle);
  };
	const classes = useStyles();
  
  return (<Paper elevation={3} classes={{ root: 'pl-10' }}>
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <TextField
        type="number"
        name="perpendicular"
        label="Height"
        inputRef={register({ required: true })}
      />
      <TextField
        type="number"
        name="base"
        label="Width"
        inputRef={register({ required: true })}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    <Typography variant="caption" display="block">
      Supports any type of units such as inches, cm, meters, etc.
    </Typography>
    <Typography variant="caption" display="block">
      Make sure both height and base are in same units.
    </Typography>
    <div className="result-section">
      <Typography variant="h5">Result</Typography>
      <Typography variant="subtitle1">Hypotenuse</Typography>
      {hypotenuse.toFixed(2)}
      <Typography variant="subtitle1">Angle of ladder</Typography>
      &theta; {angle.toFixed(2)}
    </div>
  </Paper>
  )
}
