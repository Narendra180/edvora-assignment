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


// export function getStatesAndCities(rides) {
//   let statesAndCitiesObject = {
//     states: []
//   }

//   rides.forEach((ride) => {
//     let stateObjectFoundAtIndex = null;
//     let isStateAlreadyPresent = statesAndCitiesObject.states.find((stateObject,i) => {
//       stateObjectFoundAtIndex = i;
//       return stateObject.name === ride.state;
//     });

//     if(!isStateAlreadyPresent) {
//       statesAndCitiesObject.states.push({
//         name: ride.state,
//         cities: [{name: ride.city}]
//       })
//     }

//     if(isStateAlreadyPresent) {
//       let isCityAlreadyPresent = isStateAlreadyPresent.cities.find((city,i) => {
//         return city.name === ride.city;
//       })

//       if(!isCityAlreadyPresent) {
//         statesAndCitiesObject.states[stateObjectFoundAtIndex].cities.push({name: ride.city});
//       }
//     }

//   });
//   console.log(statesAndCitiesObject);
//   return statesAndCitiesObject;
// }


export function getStatesAndCities(rides) {
  let statesAndCitiesObject = {
    states: [],
    cities: {}
  }

  rides.forEach((ride) => {
    const { states,cities } = statesAndCitiesObject;
    let isStateAlreadyPresent = states.find(stateObject => {
      return stateObject.name === ride.state;
    });

    if(!isStateAlreadyPresent) {
      states.push({name: ride.state});
    }

    if(cities.hasOwnProperty(ride.state)) {
      let isCityAlreadyPresent = cities[ride.state].find(cityObject => {
        return cityObject.name === ride.city;
      });
      if(!isCityAlreadyPresent) {
        cities[ride.state].push({name: ride.city})
      }
    } else {
      cities[ride.state] = [{name: ride.city}]
    }
  })

  // console.log(statesAndCitiesObject);
  return statesAndCitiesObject;
}


export const getFilteredRides = ({state,city,rides}) => {
  const filteredNearestRides = rides.nearestRides.filter((ride) => {
    return ride.state === state && ride.city === city;
  });

  const filteredUpComingRides = rides.upComingRides.filter((ride) => {
    return ride.state === state && ride.city === city;
  });
  const filteredPastRides = rides.pastRides.filter((ride) => {
    return ride.state === state && ride.city === city;
  });
  
  // console.log( {
  //   nearestRides: filteredNearestRides,
  //   upComingRides: filteredUpComingRides,
  //   pastRides: filteredPastRides
  // })
  return {
    nearestRides: filteredNearestRides,
    upComingRides: filteredUpComingRides,
    pastRides: filteredPastRides
  }
}
