import readInput from "../utils/readInput.js";

(() => {
  //const mockArray = readInput(3)
  const mockArray = "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg".split("\n")
  let reducer = 0
  
  for (let item of mockArray) {
    let arr = []
    const comp1 = Array.from(new Set(item.slice(0, Math.floor(item.length) / 2).slice("")))
    const comp2 = Array.from(new Set(item.slice(Math.floor(item.length) / 2, item.length).slice("")))
    arr.push(comp1)
    arr.push(comp2)
    
    const getvalue = comp1.filter(x => comp2.includes(x))
    if(getvalue[0]) {
      reducer += getvalue[0] === getvalue[0].toLocaleLowerCase() ? getvalue[0].charCodeAt() -  96 : getvalue[0].charCodeAt() - 64 + 26
    }
  }

  console.log("Result 1", reducer);
})()

;(() => {
  const mockArray = readInput(3)
  const separray = []


  for(let i = 0; i < mockArray.length; i += 3) {
    const arr = []
    arr.push(Array.from(new Set(mockArray[i])))
    arr.push(Array.from(new Set(mockArray[i + 1])))
    arr.push(Array.from(new Set(mockArray[i + 2])))
    separray.push(arr)
  }

  let reducer = 0

  for (let item of separray) {
    const getvalue = item[0].filter(x => item[1].includes(x) && item[2].includes(x))
    
    if(getvalue[0]) {
      reducer += getvalue[0] === getvalue[0].toLocaleLowerCase() ? getvalue[0].charCodeAt() -  96 : getvalue[0].charCodeAt() - 64 + 26
    }
  }

  console.log("Result 2", reducer);
})()