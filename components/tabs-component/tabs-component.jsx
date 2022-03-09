import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./tabs-component.module.scss";
import TabPanel from '../tab-panel/tab-panel';
import Ride from '../ride/ride';

function TabsComponent({rides}) {
  console.log(styles)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className={styles["tabs-component-container"]}>
      <Box>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          TabIndicatorProps={
            { 
              children: <span className="MuiTabs-indicatorSpan" /> 
            }
          }
        >
          <Tab label="Nearest Rides" disableRipple/>
          <Tab label="Upcoming Rides" disableRipple/>
          <Tab label="Past Rides" disableRipple/>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} sx={{padding: "16px"}}>
        {
          rides.map(ridesObj => {
            return <Ride rideData={ridesObj}/>
          })
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Ride />
        <Ride />
        <Ride />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ride />
        <Ride />
        <Ride />
        <Ride />
      </TabPanel>


    </Box>
  );
}


export default TabsComponent;