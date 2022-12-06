import {readFileSync} from "fs";

export default function readInput(number){
  return (readFileSync(`./${number}/input.txt`, {encoding: "utf8"})).split('\n')
}

