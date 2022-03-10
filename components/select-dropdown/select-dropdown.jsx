import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./select-dropdown.module.scss";

function SelectDropdown({label, menuItemsList, handleChange, selectedValue}) {

  const menuProps = {
    className:styles["state-city-select-menu"]
  };

  return (
    <FormControl id={styles["form-control-root"]} className={styles["form-control-root"]} fullWidth>
      <InputLabel id="select-label">{label?label:"label"}</InputLabel>
      <Select
        labelId="selectd-value-label"
        id="select-root"
        value={selectedValue}
        label={label?label:"label"}
        onChange={handleChange}
        MenuProps={menuProps}
      >
        {
          menuItemsList
          ?
          menuItemsList.map((item) => {
            return (
              <MenuItem 
                key={item.name} 
                value={item.name}
              >
                {item.name}
              </MenuItem>
            ) 
          })
          :
          [].map((item,i) => {
            return <MenuItem key={i} value={item}>{item}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  );
}

export default SelectDropdown;