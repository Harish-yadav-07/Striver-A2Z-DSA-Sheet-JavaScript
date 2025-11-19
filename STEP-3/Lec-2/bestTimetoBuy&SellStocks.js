function stockTime(prices) {
    let mini = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        let cost = prices[i] - mini;
        maxProfit = Math.max(maxProfit, cost);
        mini = Math.min(prices[i], cost);
    }
    return maxProfit;
}
console.log(stockTime([7,1,5,3,6,4]));