import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./select-dropdown.module.scss";

function SelectDropdown() {

  const [countryState,setCountryState] = useState("");

  const handleCountryStateChange = (event) => {
    setCountryState(event.target.value);
  }

  return (
    <FormControl className={styles["form-control-root"]} fullWidth>
      <InputLabel id="select-label">State</InputLabel>
      <Select
        labelId="selectd-value-label"
        id="select-root"
        value={countryState}
        label="State"
        onChange={handleCountryStateChange}
      >
        <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectDropdown;