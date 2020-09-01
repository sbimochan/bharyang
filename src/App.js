import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Paper, Grid, Container, Button, Typography } from '@material-ui/core';
import './App.css';
import { getHypotenuse, getAngle } from './engine/engine';

function App() {
	const [hypotenuse, setHypotenuse] = useState(0);
	const [angle, setAngle] = useState(0);

	const { handleSubmit, register } = useForm();

	const onSubmit = (values) => {
		const hypotenuse = getHypotenuse(values.perpendicular, values.base);
		setHypotenuse(hypotenuse);

		const angle = getAngle(values.base, hypotenuse);
		setAngle(angle);
	};

	return (
		<Container maxWidth="sm">
			<Grid container spacing={3} alignItems="center" direction="row">
				<Paper elevation={3} classes={{ root: 'pl-10' }}>
					<h2>Bharyang</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
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
					<div className="result-section">
						<Typography variant="h5">Result</Typography>
						<Typography variant="subtitle1">Hypotenuse</Typography>
						{hypotenuse.toFixed(2)}
						<Typography variant="subtitle1">Angle of ladder</Typography>
						&theta; {angle.toFixed(2)}
					</div>
				</Paper>
				<img src="ladder.gif" alt="ladder reference" />
			</Grid>
		</Container>
	);
}

export default App;
