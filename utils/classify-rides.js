export function findRideDistances(rides,userStationCode) {

  // if(userStationCode && rides) {
    let arr = rides.map((ride) => {
      let distance = -1;
      const {station_path: stationCodeArray} = ride;

      if(stationCodeArray[0] >= userStationCode) {
        return {
          ...ride,distance: stationCodeArray[0] - userStationCode
        }
      } else if(stationCodeArray[stationCodeArray.length-1] <= userStationCode) {
         return {
          ...ride,distance: userStationCode - stationCodeArray[stationCodeArray.length-1]
         }
       } else {
         stationCodeArray.forEach(stationCode => {
          let difference = Math.abs(userStationCode-stationCode);
          if(distance === -1) distance = difference;
          if(difference < distance) distance = difference;
         })
         return {
           ...ride,distance
         }
       }
    });
    return arr;
  // }

  // return [];
  
}

export function getNearestRides(rides,userStationCode) {
  if(userStationCode && rides) {
    const rideDistancesArray = findRideDistances(rides,userStationCode);
    rideDistancesArray.sort((a,b) => a.distance - b.distance);
    return rideDistancesArray;
  }

  return [];
}

export function getUpComingRides(rides,userStationCode) {
  const nrides = getNearestRides(rides,userStationCode);
  const currentDate = new Date();
  const upComingRides = [];
  nrides.forEach((ride) => {
    console.log(new Date(ride.date))
    const rideDate = new Date(ride.date);
    if(rideDate > currentDate) {
      upComingRides.push(ride);
    }
  });
  console.log(upComingRides);
  return upComingRides;
}