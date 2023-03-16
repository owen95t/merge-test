import { merge } from "./merge";

const sortedArr1: number[] = [1, 2, 3];
const sortedArr2: number[] = [3, 5, 6, 9];

const a3: number[] = [72, 94, 96, 103];
const a4: number[] = [1, 5, 95, 501]

console.log(merge(sortedArr1, sortedArr2));
console.log(merge(a3, a4));
console.log(merge([1,2,3], [0]))
