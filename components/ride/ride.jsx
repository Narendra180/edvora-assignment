import styles from "./ride.module.scss";
import { formatTime } from "../../utils/format-time";

function Ride({rideData}) {
  return (
    <div
      className={styles["ride-div"]}
    >
      <div
        className="ride-map-data-container"
      >
        <div 
          className="map-image-div"
        >
          <img className="map-img" src={rideData?.map_url} alt="map"/>
        </div>
        <div
          className="ride-data-div"
        >
          <dl>
            <div>
              <dt>Ride Id:</dt>
              <dd>{rideData?.id}</dd>
            </div>
            
            <div>          
              <dt>Origin Station:</dt>
              <dd>{rideData?.origin_station_code}</dd>
            </div>

            <div>
              <dt>Station Path:</dt>
              <dd>{(rideData?.station_path)?`[${rideData.station_path.toString()}]`:""}</dd>
            </div>

            <div>
              <dt>Date:</dt>
              <dd>
                {
                  (rideData?.date)
                  ?
                  formatTime(rideData.date)
                  :
                  ""
                }
              </dd>
            </div>

            <div>
              <dt>Distance:</dt>
              <dd>{rideData?.distance}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div
        className="city-state-container"
      >
        <table className="city-state-table">
          <tbody>
            <tr>
              <th><span>City Name</span></th>
              <th><span>State Name</span></th>
            </tr>
            <tr>
              <td>{rideData?.city}</td>
              <td>{rideData?.state}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ride;