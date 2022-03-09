import styles from "./rides-details.module.scss";
import TabsComponent from "../tabs-component/tabs-component";
import Button from '@mui/material/Button';
import FilterButtonPopover from "../filter-btn-popover/filter-btn-popover";

function RidesDetails({rides}) {
  
  return (
    <div
      className={styles["rides-details-container"]}
    >
      <TabsComponent 
        rides={rides}
      />
      
      <FilterButtonPopover />
      
    </div>
  );
}

export default RidesDetails;