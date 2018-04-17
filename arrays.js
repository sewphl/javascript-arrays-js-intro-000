var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(anar,anel) {
  return([anel,...anar]);
}
///////////////
//function destructivelyAddElementToBeginningOfArray(anar,anel) {
//  var anar[0] = anel;
//  return(anar);
//}
//////////////////
function addElementToEndOfArray(anar,anel) {  
  return([anar,...anel]);
}

//function destructivelyAddElementToEndOfArray(anar, anel) {
//  var anar[anar.length] = anel;
//  return(anar);
//}


function accessElementInArray(anarray,ind) {
  return(anarray[ind]);
}

function destructivelyRemoveElementFromBeginningOfArray(anotherarray) {
  return(anotherarray.shift());
}

function removeElementFromBeginningOfArray(somearray) {
  return(somearray.slice(1));
}

function destructivelyRemoveElementFromEndOfArray(thingy) {
  thingy.pop();
  return(thingy);
}

function removeElementFromEndOfArray(th) {
  return(th.slice(0,th.length-1));
}
