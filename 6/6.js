import readInput from "../utils/readInput.js";


//Part 1
;(() => {
  const array = readInput(6)
  const res = []
  array.forEach(code => {
    const split = code.split('')
    const temp =  []
    for(let j = 0; j < split.length; j++){
      temp.push(split[j])
      const set = Array.from(new Set(temp.slice(-4)))
      if(set.length === 4){
        res.push(j + 1)
        break
      }
    }
  })
  console.log("part 1 answer", res);
})()

//Part 2
;(() => {
  const array = readInput(6)
  const res = []
  array.forEach(code => {
    const split = code.split('')
    const temp =  []
    for(let j = 0; j < split.length; j++){
      temp.push(split[j])
      const set = Array.from(new Set(temp.slice(-14)))
      if(set.length === 14){
        res.push(j + 1)
        break
      }
    }
  })
  console.log("part 2 answer", res);
})()