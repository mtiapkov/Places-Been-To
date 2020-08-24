function LocationBook() {
  this.locations = [];
  this.currentId = 0;
}

LocationBook.prototype.addLocation = function (location) {
  location.id = this.assignId();
  this.locations.push(location);
}

LocationBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

LocationBook.prototype.findLocation = function(id) {
  for (let i=0; i< this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        return this.locations[i];
      }
    }
  };
  return false;
}

LocationBook.prototype.deleteLocation = function(id) {
  for (let i=0; i< this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].id == id) {
        delete this.locations[i];
        return true;
      }
    }
  };
  return false;
}

//Business Logic for 
function Location (locationName, landMarks, timeOfYear) {
  this.locationName = locationName;
  this.landMarks = landMarks;
  this.timeOfYear = timeOfYear;
}

Location.prototype.fullDetails = function () {
  return "Visited " + this.locationName + " saw " + this.landMarks + " during " + this.timeOfYear;
}