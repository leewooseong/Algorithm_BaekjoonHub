function solution(prices) {
  const spendTimeInfoList = [...new Array(prices.length)];
  const priceStack = [];

  prices.forEach((price, index) => {
    if (priceStack.length === 0) {
      priceStack.push([price, index]);
      return;
    }

    let top = priceStack[priceStack.length - 1];

    while (priceStack.length > 0) {
      if (top[0] > price) {
        const fallingPriceInfo = priceStack.pop();
        spendTimeInfoList[fallingPriceInfo[1]] = index - fallingPriceInfo[1];
        top = priceStack[priceStack.length - 1];
      } else {
        break;
      }
    }

    priceStack.push([price, index]);
  });

  priceStack.forEach(priceInfo => {
    const [, index] = priceInfo;
    spendTimeInfoList[index] = prices.length - 1 - index;
  });

  return spendTimeInfoList;
}