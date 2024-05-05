import React, { useState } from 'react';
import { Grid, Container, Tabs, Tab } from '@material-ui/core';
import './App.css';
import TabPanel from './components/TabPanel';
import Angle from './components/Angle';
import Base from './components/Base';
import Guide from './components/Guide';

function App() {
  const [value, setValue] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <h2>Bharyang</h2>
      <Grid container spacing={3} alignItems="center" direction="row" wrap>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Angle finder" {...a11yProps(0)} />
          <Tab label="Width finder" {...a11yProps(1)} />
          <Tab label="Guide" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Angle />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Base />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Guide />
        </TabPanel>
      </Grid>
    </Container>
  );
}

export default App;
