const maxProfit = (prices) => {
    let left = 0, right = 1, max_profit = 0
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            curr_max = prices[right] - prices[left]
            max_profit = Math.max(max_profit, curr_max)
        }
        else {
            left = right
        }
        right++
    }
    return max_profit
}
console.log(maxProfit([7, 1, 5, 3, 4]))
