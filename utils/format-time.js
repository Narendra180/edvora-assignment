const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function formatTime(timeString) {
  if(timeString && new Date(timeString).toString !== 'Invalid Date') {
    let date = new Date(timeString);
    let resString = `${date.getDate()}th ${monthNames[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes()}`
    return resString;
  }
  
  return "";
}