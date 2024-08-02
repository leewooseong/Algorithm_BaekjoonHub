import * as fs from "fs";

// 메모리 제한 1024MB
// 시간 제한 0.1초
try {
  const filePath =
    process.platform === "linux"
      ? "/dev/stdin"
      : "src/Baekjoon/bronze/b3_30802/input.txt";

  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const participantNum = Number(input[0]);
  const shirtNumbersToNeed = input[1]
    .split(" ")
    .map((shirtNum) => Number(shirtNum));
  const shirtBundleNum = Number(input[2].split(" ")[0]);
  const penBundleNum = Number(input[2].split(" ")[1]);

  let numToOrderShirtBundles = 0;

  shirtNumbersToNeed.forEach((shirtNumToNeed) => {
    numToOrderShirtBundles += Math.ceil(shirtNumToNeed / shirtBundleNum);
  });

  const numToOrderPenBundles = Math.floor(participantNum / penBundleNum);
  const numToOrderPenSingle = participantNum % penBundleNum;

  console.log(numToOrderShirtBundles);
  console.log(numToOrderPenBundles, numToOrderPenSingle);
} catch (error) {}
