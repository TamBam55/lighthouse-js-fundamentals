function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(x) {
  var triangle = '';

  for (t = 1; t <= x; t++) {
      triangle += makeLine(t)
  }

    return triangle;
  
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));

// anonymous function
var laugh = function(num) {
  var laughString = '';
  
  for (i = 0; i < num; i++) {
    laughString += "ha";
  }

  laughString += '!';
  return laughString;

}


console.log(laugh(10));

// a named onymous function
var cry = function makeCry(n) {
  var cryString = 'boohoo!';
  return cryString;

}


console.log(cry());

//Functions inline function
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  var laughString = ""; {
    
  for (i = 0; i < num; i++) 
      laughString += "ha";  
  }

  laughString += '!';
  return laughString;
});

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const goodStations = []

  for (const station of stations) {
    const capacity = station[1]

    
    if (capacity >= 20) {

      const type = station [2]

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }

  return goodStations
}

console.log(chooseStations(stations));