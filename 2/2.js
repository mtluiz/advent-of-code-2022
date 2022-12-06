import readInput from "../utils/readInput.js";

const jokenoptions = {
  "r": {
    "win": "s",
    "draw": "r",
    "lose": "p"
  },

  "p": {
    "win": "r",
    "draw": "p",
    "lose": "s"
  },

  "s": {
    "win": "p",
    "draw": "s",
    "lose": "r"
  },
}


function jokenpo(player, enemy) {
  const options = {
    A: "r",
    B: "p",
    C: "s",

    X: "r",
    Y: "p",
    Z: "s"
  }

  const points = {
    r: 1,
    p: 2,
    s: 3
  }

  const outcomes = {
    "rp": "win",
    "pr": "lose",
    "pp": "draw",
    "rr": "draw",
    "ps": "win",
    "sp": "lose",
    "ss": "draw",
    "sr": "win",
    "rs": "lose",
    "rr": "draw",
  }

  const playerc = options[player]
  const enemyc = options[enemy]
  const outcome = outcomes[enemyc + playerc]

  if (outcome === "win") {
    return 6 + points[playerc]
  } else if (outcome === "draw") {
    return 3 + points[playerc]
  } else {
    return 0 + points[playerc]
  }
}

function jokenpo2(player, enemy) {

  const options = {
    A: "r",
    B: "p",
    C: "s",
  }

  const points = {
    r: 1,
    p: 2,
    s: 3
  }
  
  const enemyc = options[enemy]  

  if (player === "X") {
    return 0 + points[jokenoptions[enemyc].win]
  } else if (player === "Y") {
    return 3 + points[jokenoptions[enemyc].draw]
  } else {
    return 6 + points[jokenoptions[enemyc].lose]
  }
}

(() => {
  const array = readInput(2)
  const sepparated = array.map(x => x.split(" "))

  const result = []
  const resultsegundo = []
  for (let item of sepparated) {
    const getpo = jokenpo(item[1], item[0])
    result.push(getpo)
  }

  const result1 = result.reduce((x, y) => x += y)
  console.log("Result1", result1);

  for (let item of sepparated) {
    const getpo = jokenpo2(item[1], item[0])
    resultsegundo.push(getpo)
  }

  const result2 = resultsegundo.reduce((x, y) => x += y)
  console.log("Result2", result2);
})()