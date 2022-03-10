import { useState,useEffect } from "react";
import styles from "./rides-details.module.scss";
import { useRef } from "react";
import TabsComponent from "../tabs-component/tabs-component";
import FilterButtonPopover from "../filter-btn-popover/filter-btn-popover";
import { getFilteredRides } from "../../utils/classify-rides";

function RidesDetails({ rides,countryStates,cities }) {

  const [filteredRides,setFilteredRides] = useState([]);
  const compUpdateCount = useRef(0);

  useEffect(() => {
    if(compUpdateCount.current <= 2) {
      setFilteredRides(rides);
      compUpdateCount.current += 1;
      console.log("useefefe from ridedetails")
    }
  });

  const onCityChange = (selectedCityStateObject) => {
    const filteredRides = getFilteredRides({...selectedCityStateObject,rides});
    setFilteredRides(filteredRides);
    console.log(filteredRides)
  }

  return (
    <div
      className={styles["rides-details-container"]}
    >
      <TabsComponent 
        rides={filteredRides}
      />
      
      <FilterButtonPopover 
        countryStates={countryStates}
        cities={cities}
        onCityChange={onCityChange}
      />
      
    </div>
  );
}

export default RidesDetails;