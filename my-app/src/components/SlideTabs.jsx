"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import FlightIcon from '@mui/icons-material/Flight';


export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
  const style ={
   bgcolor:"#CEDDE7",
   width:"152px",
   Height:"51px"
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary" 
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Packages" sx={style} icon={<DirectionsBusOutlinedIcon/>} />
        <Tab value="two" label="Hotel" icon={<LocalHotelOutlinedIcon/>} />
        <Tab value="three" label="Cabs" icon={<LocalTaxiOutlinedIcon/>}/>
        <Tab value="four" label="Activities" icon={<LocalTaxiOutlinedIcon/>} />
        <Tab value="five" label="Trains" icon={<TrainOutlinedIcon/>}/>
        <Tab value="five" label="Buses" icon={<DirectionsBusOutlinedIcon/>}/>
        <Tab value="six" label="Flights" icon={<FlightIcon/>}/>
      </Tabs>
    </Box>
  );
}