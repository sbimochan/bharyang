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
import { getHypotenuse, getBase } from '../engine/engine';

export default function Angle() {
	const [hypotenuse, setHypotenuse] = useState(0);
	const [base, setBase] = useState(0);

  	const useStyles = makeStyles((theme) => ({
			root: {
				'& > *': {
					margin: theme.spacing(1),
					width: '25ch',
				},
			},
		}));
	const { handleSubmit, register,errors } = useForm();

  const onSubmit = (values) => {
    const base = getBase(values.perpendicular, values.angle);
		setBase(base);
		const hypotenuse = getHypotenuse(values.perpendicular, base);
		setHypotenuse(hypotenuse);
  };
	const classes = useStyles();
  
  return (
		<Paper elevation={3} classes={{ root: 'pl-10' }}>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
				<TextField
					name="perpendicular"
					label="Height"
					inputRef={register({ required: true, pattern: /^(\d*\.)?\d+$/ })}
					error={!!errors.perpendicular}
					helperText={errors.perpendicular?.type === 'pattern' && 'Please enter a valid number.'}
				/>
				<TextField
					name="angle"
					label="Angle in degree"
					inputRef={register({ required: true, pattern: /^(\d*\.)?\d+$/ })}
					error={!!errors.angle}
					helperText={errors.angle?.type === 'pattern' && 'Please enter a valid number.'}
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
				<Typography variant="subtitle1">Required Width</Typography>
				{base.toFixed(2)}
			</div>
		</Paper>
	);
}
