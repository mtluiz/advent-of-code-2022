import readInput from "../utils/readInput.js";


//Part 1
; (() => {
  const array = readInput(5)

  // made manually fuck it
  const stacks = {
    1: "FTCLRPGQ",
    2: "NQHWRFSJ",
    3: "FBHWPMQ",
    4: "VSTDF",
    5: "QLDWVFZ",
    6: "ZCLS",
    7: "ZBMVDF",
    8: "TJB",
    9: "QNBGLSPH"
  }

  const crateMover9000 = (from, to) => {
    const stackFrom = stacks[from];
    const topCrate = stackFrom.slice(-1);
    stacks[from] = stackFrom.slice(0, -1);
    stacks[to] = stacks[to] + topCrate;
  }

  for (let move of array) {
    const [moves, from, to] = move
      .match(/move (\d+) from (\d+) to (\d+)/)
      .slice(1)
      .map(Number)

    for (let i = 1; i <= moves; i++) {
      crateMover9000(from, to);
    }
  }
  console.log(Object.values(stacks).map(stack => stack.slice(-1)).join(""));

})()

  //Part 2
  ; (() => {
    const array = readInput(5)

    const stacks = {
      1: "FTCLRPGQ",
      2: "NQHWRFSJ",
      3: "FBHWPMQ",
      4: "VSTDF",
      5: "QLDWVFZ",
      6: "ZCLS",
      7: "ZBMVDF",
      8: "TJB",
      9: "QNBGLSPH"
    }

    const crateMover9001 = (from, to, n) => {
      const stackFrom = stacks[from];
      const crates = stackFrom.slice(-n);
      stacks[from] = stackFrom.slice(0, -n);
      stacks[to] = stacks[to] + crates;
    }

    const processStacks = () => (move) => {
      const [moves, from, to] = move
        .match(/move (\d+) from (\d+) to (\d+)/)
        .slice(1)
        .map(Number)

      crateMover9001(from, to, moves);
    }

    const getTopCrates = () => Object.values(stacks).map(stack => stack.slice(-1)).join("");

    array.forEach(processStacks())

    console.log("Part 2: ", getTopCrates());
  })()