import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./tabs-component.module.scss";
import TabPanel from '../tab-panel/tab-panel';
import Ride from '../ride/ride';

function TabsComponent({rides: {nearestRides,upComingRides,pastRides}}) {
  // console.log(nearestRides);
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
          <Tab label={`Upcoming Rides(${upComingRides.length})`} disableRipple/>
          <Tab label={`Past Rides(${pastRides.length})`} disableRipple/>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} sx={{padding: "16px"}}>
        {
          nearestRides.map((ridesObj,i) => {
            return <Ride key={i} rideData={ridesObj}/>
          })
        }
        {
          (nearestRides.length === 0)
          ?
            <p>There are no Nearest Rides</p>
          :
          ""
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          upComingRides.map((ridesObj,i) => {
            return <Ride key={i} rideData={ridesObj}/>
          })
        }
        {
          (upComingRides.length === 0)
          ?
            <p>There are no Upcoming Rides</p>
          :
          ""
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
          pastRides.map((ridesObj,i) => {
            return <Ride key={i} rideData={ridesObj}/>
          })
        }
        {
          (pastRides.length === 0)
          ?
            <p>There are no Past Rides</p>
          :
          ""
        }
      </TabPanel>


    </Box>
  );
}


export default TabsComponent;