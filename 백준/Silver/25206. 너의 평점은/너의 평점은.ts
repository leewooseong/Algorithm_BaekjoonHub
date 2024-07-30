import * as fs from "fs";
// const fs = require("fs");

try {
  // 백준 환경에서는 /dev/stdin를 사용하고, 로컬 환경에서는 src/input.txt를 사용한다.
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "src/input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const ratePointInfo: Record<string, number> = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
    P: 0.0,
  };

  let avgOfRate = 0;
  let sumOfRate = 0;
  let sumOfPoint = 0;

  for (let i = 0; i < input.length; i++) {
    const [name, point, rate] = input[i].split(" ");
    const pointNum = Number(point);
    sumOfRate += pointNum * ratePointInfo[rate];
    if (rate != "P") sumOfPoint += pointNum;
  }

  avgOfRate = sumOfRate / sumOfPoint;

  console.log(avgOfRate.toFixed(6));
} catch (error) {
  console.error("파일 읽기 오류:", error);
}
