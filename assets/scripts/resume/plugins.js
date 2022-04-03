function isdark() {
  const now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;

  if (
    (hours > 7 && hours <= 11 && ampm == "pm") ||
    (hours >= 1 && hours < 7 && ampm == "am") ||
    (hours == 12 && ampm == "am")
  ) {
    return true;
  }
  return false;
}
