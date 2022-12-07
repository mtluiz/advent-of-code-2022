import readInput from "../utils/readInput.js";

const getsizes = (fs,dir,obj) => {
  const size = Object.entries(fs[dir]).reduce(
    (a,[file,size]) => a+(size=='dir'?getsizes(fs,`${dir}/${file}`,obj):size)
  ,0)

  obj[dir] = size
  return size
}

//Part 1
; (() => {
  const array = readInput(7).map(x => x.split(' '))
  const fs = {}
  const root = []

  for (let item of array) {
    if (item[0] === '$') {
      if (item[1] === 'cd') {
        if (item[2] === '..') root.pop()
        else root.push(item[2])
      }
    } else {
      if (!fs[root.join('/')]) fs[root.join('/')] = {size: 0}
      if (item[0] != 'dir') fs[root.join('/')][item[1]] = Number(item[0])
      else fs[root.join('/')][item[1]] = 'dir'
    }
  }

  const sizes = {}
  getsizes(fs,'/',sizes)

  console.log("result1", Object.entries(sizes).filter(x=>x[1]<=100_000).reduce((a,c)=>a+c[1],0));
  
  const toFree = 30000000 - (70000000 - sizes['/'])

  console.log("result2",Object.entries(sizes).filter(x=>x[1]>=toFree).sort((a,b)=>a[1]>b[1]?1:-1)[0][1])
})()