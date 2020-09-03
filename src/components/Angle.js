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
import Canvas from './Canvas';

export default function Angle() {
	const [hypotenuse, setHypotenuse] = useState(0);
	const [angle, setAngle] = useState(0);
	const [perpendicular, setPerpendicular] = useState(0);
	const [base, setBase] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

  	const useStyles = makeStyles((theme) => ({
			root: {
				'& > *': {
					margin: theme.spacing(1),
					width: '25ch',
				},
			},
		}));
	const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
		setIsLoading(true);
		const hypotenuse = getHypotenuse(values.perpendicular, values.base);
		setHypotenuse(hypotenuse);
		setPerpendicular(values.perpendicular);
		setBase(values.base);

		const angle = getAngle(values.base, hypotenuse);
		setAngle(angle);
		setIsLoading(false);

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
					helperText={
						errors.perpendicular?.type === 'pattern' && 'Please enter a valid number.'
					}
				/>
				<TextField
					name="base"
					label="Width"
					inputRef={register({ required: true, pattern: /^(\d*\.)?\d+$/ })}
					error={!!errors.base}
					helperText={errors.base?.type === 'pattern' && 'Please enter a valid number.'}
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
			{!isLoading && <Canvas perpendicular={perpendicular} base={base} />}
		</Paper>
	);
}
