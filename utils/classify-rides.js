function findRideDistances(rides,userStationCode) {
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
}

export function getNearestRides(rides,userStationCode) {
  const rideDistancesArray = findRideDistances(rides,userStationCode);
  rideDistancesArray.sort((a,b) => a.distance - b.distance);
  return rideDistancesArray;
}

export function getUpComingRides(rides) {
  // const nrides = getNearestRides(rides,userStationCode);
  const currentDate = new Date();
  const upComingRides = [];
  rides.forEach((ride) => {
    const rideDate = new Date(ride.date);
    if(rideDate > currentDate) {
      upComingRides.push(ride);
    }
  });
  return upComingRides;
}

export function getPastRides(rides) {
  // const nrides = getNearestRides(rides,userStationCode);
  const currentDate = new Date();
  const pastRides = [];
  rides.forEach((ride) => {
    const rideDate = new Date(ride.date);
    if(rideDate < currentDate) {
      pastRides.push(ride);
    }
  });
  return pastRides;
}

export function getClassifiedRides(rides,userStationCode) {
  if(rides && userStationCode) {
    const nearestRides = getNearestRides(rides,userStationCode);
    const upComingRides = getUpComingRides(nearestRides);
    const pastRides = getPastRides(nearestRides);
    return {
      nearestRides,
      upComingRides,
      pastRides
    };
  }

  return {};
}