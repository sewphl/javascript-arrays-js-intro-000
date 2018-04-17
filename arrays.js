var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(anar,anel) {
  return([anel,...anar]);
}

function destructivelyAddElementToBeginningOfArray(anar,anel) {
  var anar[0] = anel;
  return(anar);
}

var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
function accessElementInArray(anarray,ind) {
  return(anarray[ind]);
}
accessElementInArray(entrepreneurs);

function destructivelyRemoveElementFromBeginningOfArray(anotherarray) {
  anotherarray = anotherarray.shift()
  return();
}

function removeElementFromBeginningOfArray(somearray) {
  return(array.slice(1));
}

function destructivelyRemoveElementFromEndOfArray(thingy) {
  thingy.pop();
  return(thingy);
}

function removeElementFromEndOfArray(th) {
  return(th.slice(0,th.length-1));
}
