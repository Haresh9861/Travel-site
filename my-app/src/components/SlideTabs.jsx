"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import LocalTaxiOutlinedIcon from "@mui/icons-material/LocalTaxiOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined";
import FlightIcon from "@mui/icons-material/Flight";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);
  const style = {
    bgcolor: "#01010178",
    padding: "0 30px",
    height: "60px",
    textTransform: "unset",
    fontWeight: 600,
    color: "#fff",
    mx: 0.3,
    borderRadius: "10px 10px 0 0",
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const travellers = [
    {
      id: 1,
      label: "1 Travelers, 1 Room",
    },
    {
      id: 2,
      label: "2 Travelers, 1 Room",
    },
    {
      id: 3,
      label: "2 Travelers, 2 Room",
    },
    {
      id: 4,
      label: "4 Travelers, 2 Room",
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%", mt: 0 }}>
        <Box sx={{ zIndex: 0 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab
              label="Packages"
              sx={style}
              icon={<DirectionsBusOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Hotel"
              sx={style}
              icon={<LocalHotelOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Cabs"
              sx={style}
              icon={<LocalTaxiOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Activities"
              sx={style}
              icon={<LocalTaxiOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Trains"
              sx={style}
              icon={<TrainOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Buses"
              sx={style}
              icon={<DirectionsBusOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Flights"
              sx={style}
              icon={<FlightIcon />}
              iconPosition="start"
            />
          </Tabs>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#cedde7",
          borderRadius: "10px",
          mt: -1,
          position: "relative",
          zIndex: 9,
          minHeight: 80,
        }}
      >
        <CustomTabPanel value={value} index={0}>
          Search for Packages
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box variant="form">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
            >
              <TextField
                id="filled-basic"
                label="Search Your Desired Hotels"
                variant="filled"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "4px",
                  minWidth: 350,
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ mt: 0 }}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    views={["day", "month"]}
                    format="MM-DD"
                    slotProps={{
                      textField: {
                        variant: "filled",
                        sx: {
                          bgcolor: "#fff",
                          borderRadius: "4px",
                        },
                      },
                    }}
                    label="Check In"
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ mt: 0 }}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    views={["day", "month"]}
                    format="MM-DD"
                    slotProps={{
                      textField: {
                        variant: "filled",
                        sx: {
                          bgcolor: "#fff",
                          borderRadius: "4px",
                        },
                      },
                    }}
                    label="Check Out"
                  />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                id="filled-select-currency"
                select
                label="Travellers"
                defaultValue="EUR"
                variant="filled"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "4px",
                  minWidth: 200,
                }}
              >
                {travellers.map((option) => (
                  <MenuItem key={option.id} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  bgcolor: "#29383E",
                  textTransform: "none",
                  minWidth: "150px",
                }}
              >
                Search
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
                padding: "0 15px",
                bgcolor: "#01010188",
                color: "#fff",
                mt: 1,
                borderRadius: "10px",
                width: "fit-content",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#fff",
                    }}
                  />
                }
                label="Add a Flight"
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: "#fff" }} />}
                label="Add a Cab"
              />
            </Box>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Four
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Item Five
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          Item Six
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          Item Seven
        </CustomTabPanel>
      </Box>
    </>
  );
}
