const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

function zipList(listA, listB) {
  const combinedList = [];
  for (let i = 0; i < listA.length; i++) {
    combinedList.push(listA[i], listB[i]);
  }
  return combinedList;
}

console.log(zipList(listOne, listTwo));

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB), 1);
}

console.log(zipListTheSimpleWay(listOne, listTwo));
