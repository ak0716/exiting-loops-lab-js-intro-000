function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array.splice(array[i], changeValue)
    } else if (array[i] === stopValue) {
      break;
    }
  } return array
}

function keepGoing(array, changeValue, skipValue) {

}

function findBy(array, findFn){

}
