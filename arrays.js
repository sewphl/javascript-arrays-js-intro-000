var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray() {
  var myArray = [1,2,3];
  var myArray2 = [4,...myArray];
  return(myArray2);
}

function destructivelyAddElementToBeginningOfArray() {
  var myArray3 = [1,2,3];
  var myArray3[0] = 5;
  return(myArray3);
}

var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
function accessElementInArray(anarray) {
  return(anarray[0]);
}
accessElementInArray(entrepreneurs);

function destructivelyRemoveElementFromBeginningOfArray(anotherarray) {
  return
}
