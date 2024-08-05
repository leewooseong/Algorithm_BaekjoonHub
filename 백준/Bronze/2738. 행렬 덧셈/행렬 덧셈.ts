import * as fs from "fs";

const filePath = process.platform === "linux" ? "/dev/stdin" : "src/Baekjoon/bronze/b3_2738/input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const result: number[][] = [];

for (let i = 0; i < n; i++) {
    const row1 = input[i + 1].split(" ").map(Number);
    const row2 = input[i + n + 1].split(" ").map(Number);
    result.push(row1.map((num, j) => num + row2[j]));
}

console.log(result.map(row => row.join(" ")).join("\n"));