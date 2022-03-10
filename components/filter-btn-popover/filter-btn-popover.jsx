import {useState} from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import styles from "./filter-btn-popover.module.scss";
import SelectDropdown from '../select-dropdown/select-dropdown';


function FilterButtonPopover({countryStates,cities,onCityChange}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleFilterButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const [countryStateSelected,setCountryStateSelected] = useState("");
  const [citySelected,setCitySelected] = useState("");
  // console.log(countryStates[0],countryStateSelected)
  const handleCountryStateChange = (e) => {
    setCountryStateSelected(e.target.value);
    setCitySelected("");
  }

  const handleCityStateChange = (e) => {
    setCitySelected(e.target.value);
    onCityChange({state: countryStateSelected,city: e.target.value});
  }
  
  const open = Boolean(anchorEl);
  const id = open ? 'filter-popover' : undefined;

  return (
    <div
      className="filter-btn-container"
    >
      <Button 
        variant="text"
        onClick={handleFilterButtonClick}
      >
        <span
          className="icon-span"
        >
          <img src="/filter-icon.svg"/>
        </span>
        Filter
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={styles["popover-container"]}
      >
        <div
          className={styles["state-city-dropdowns-container"]}
        >
          <h2>Filters</h2>
          <SelectDropdown 
            label="State"
            menuItemsList={countryStates}
            handleChange={handleCountryStateChange}
            selectedValue={countryStateSelected}
          />

          <SelectDropdown 
            label="City"
            menuItemsList={countryStateSelected?cities[countryStateSelected]:""}
            handleChange={handleCityStateChange}
            selectedValue={citySelected}
          />

        </div>
      </Popover>
    </div>
  );
}


export default FilterButtonPopover;