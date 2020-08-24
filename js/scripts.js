//Business Logic for 
function Location (locationName, landMarks, timeOfYear) {
  this.locationName = locationName;
  this.landMarks = landMarks;
  this.timeOfYear = timeOfYear;
}

Location.prototype.fullDetails = function () {
  return "Visited " + this.locationName + " saw " + this.landMarks + " during " + this.timeOfYear;
}