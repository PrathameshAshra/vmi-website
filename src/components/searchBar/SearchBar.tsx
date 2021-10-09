import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import enIN from 'date-fns/locale/en-IN';

import { DatePicker } from "@mui/lab";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { InputWrapper, SearchBarWrapper } from "./SearchBarElements";
import { width } from "@mui/system";
import router from "next/router";

function SearchBar() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [checkInDate, setCheckInDate] = React.useState<Date >(today);
  const [checkOutDate, setCheckOutDate] = React.useState<Date>(tomorrow);
  const [serviceType, setServiceType] = React.useState("All");

  const handleChange = (type: any) => {
    switch (type) {
      case 'submit':
        router.push({
          pathname: '/PropertyList/[dateServiceType]',
          query: { dateServiceType: `${checkInDate}/${checkOutDate}/${serviceType}` },
        })
        console.log(checkInDate,checkOutDate,serviceType)
        
        break;
    
      default:
        break;
    }
  };
  
  
  
  return (
    <SearchBarWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={enIN}>
        <InputWrapper >
          <DatePicker
                    minDate={today}

            label="Check-in Date"
            value={checkInDate}
            orientation="portrait"
            onChange={(newValue) => {
              setCheckInDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </InputWrapper>
        <InputWrapper>
          <DatePicker
          minDate={tomorrow}
            label="Check-out Date"
            value={checkOutDate}
            orientation="portrait"
            onChange={(newValue) => {
              setCheckOutDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </InputWrapper>
      <InputWrapper>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Service</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={serviceType}
            label="Service"
            onChange={(event)=> (setServiceType(event.target.value as string))}
          >
            <MenuItem value={`All`}>All</MenuItem>
            <MenuItem value={`FilmLocation`}>Film Location</MenuItem>
            <MenuItem value={`EventVenues`}>Event Venues</MenuItem>
            <MenuItem value={`VillasandBunglow`}>Villas and Bunglow</MenuItem>
          </Select>
        </FormControl>
      </InputWrapper>
      <InputWrapper>
        <Button
       

         onClick={() => handleChange('submit')} variant="contained" sx={{width: '100%'}}>Search</Button>
      </InputWrapper>
      </LocalizationProvider>
    </SearchBarWrapper>
  );
}

export default SearchBar;
