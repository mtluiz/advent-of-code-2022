import readInput from "../utils/readInput.js";

(async () => {
  const array = readInput(1)
  
  //Array with end values
  const selectedData = []
  const sumArray = []
  
  //Array with temporary values
  let temp = []

  //reducer
  let reducer = 0

  //top 3

  for (let item of array) {
    if(item === '') {
      selectedData.push(temp)
      sumArray.push(reducer)
      reducer = 0
      temp = []
      continue
    }
    reducer += +item
    temp.push(+item)
  }

  const result1 = Math.max(...sumArray)
  console.log("Result 1 ", result1);

  let top3reducer = 0
  
  for (let i = 0; i < 3; i++) {
    const maxNow = Math.max(...sumArray)
    top3reducer += maxNow
    sumArray.splice(sumArray.indexOf(maxNow), 1)
  }

  
  console.log("Result 2", top3reducer)
})()