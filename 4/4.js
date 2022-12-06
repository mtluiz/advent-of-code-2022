import readInput from "../utils/readInput.js";

(() => {
  const array = readInput(4)
  const newarr = array.map(x => x
    .split(",").map(x => x.split('-').map(x => +x)))
    .map(x => {
      const list1 = x[0]
      const list2 = x[1]
      const checkinto = list1[0] <= list2[0] && list1[1] >= list2[1] || list2[0] <= list1[0] && list2[1] >= list1[1]  
      return checkinto
    }).reduce((x, y) => x += +!!y)


  //console.log(newarr);
})()

;(() => {
  const array = readInput(4)
  const newarr = array.map(x => x
    .split(",").map(x => x.split('-').map(x => +x)))
    .map(x => {
      const list1 = x[0]
      const list2 = x[1]

      const listn1 = Array.from({length: list1[1] - list1[0] + 1}, (_,i) => i + list1[0])
      const listn2 = Array.from({length: list2[1] - list2[0] + 1}, (_,i) => i + list2[0])
      console.log(x);
      console.log(listn1, listn2);

      const checkinto = listn1.some(x => list2.includes(x)) ||  listn2.some(x => list1.includes(x))
      return checkinto
    }).reduce((x, y) => x += y ? 1 : 0)


  console.log(newarr);
})()