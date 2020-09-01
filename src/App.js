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
				<Paper elevation={3}>
					<h2>Please fill any two fields.</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							type="number"
							name="perpendicular"
							label="Height"
							inputRef={register}
						/>
						<TextField type="number" name="base" label="Base" inputRef={register} />
						<Button type="submit">Submit</Button>
					</form>
					<div>
            <Typography>Result</Typography>
            <Typography>Hypotenuse</Typography>
            {hypotenuse}
            <Typography>Angle of ladder</Typography>
            {angle}
            </div>
				</Paper>
			</Grid>
		</Container>
	);
}

export default App;
