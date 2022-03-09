import {useState} from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import styles from "./filter-btn-popover.module.scss";
import SelectDropdown from '../select-dropdown/select-dropdown';


function FilterButtonPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'filter-popover' : undefined;

  return (
    <div
      className="filter-btn-container"
    >
      <Button 
        variant="text"
        onClick={handleClick}
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
        onClose={handleClose}
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
          <SelectDropdown />
          <SelectDropdown />

        </div>
      </Popover>
    </div>
  );
}


export default FilterButtonPopover;