import React, { useState } from 'react';
import { Grid, Container, Tabs, Tab } from '@material-ui/core';
import './App.css';
import TabPanel from './components/TabPanel';
import Angle from './components/Angle';
import Base from './components/Base';

function App() {
  const [value, setValue] = useState(0);
  
	const a11yProps = (index) => {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container maxWidth="sm">
				<h2>Bharyang</h2>
			<Grid container spacing={3} alignItems="center" direction="row">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="Angle finder" {...a11yProps(0)} />
					<Tab label="Width finder" {...a11yProps(1)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<Angle />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Base />
				</TabPanel>

				<img src="ladder.gif" alt="ladder reference" className="pl-10"/>
			</Grid>
		</Container>
	);
}

export default App;
