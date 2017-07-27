var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // debugger;
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  currentBandString = '';
  currentBandString += '<div id="boy-bands">';
  currentBandString += 	"<p>" + currentBand + "</p>";
  currentBandString += '</div>'

  bandElement.innerHTML += currentBandString;
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  currentVeggieString = '';
  currentVeggieString += '<div id="boy-bands">';
  currentVeggieString += 	"<p>" + currentVeggie + "</p>";
  currentVeggieString += '</div>'

  veggieElement.innerHTML += currentVeggieString;

}
