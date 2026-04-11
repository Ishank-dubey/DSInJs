function neetCode() {
  // x is the input array
  // sum is the target sum
  // use array here
function targetSum (x, sum) {
  let dp = [];
  dp = [[0, 1]];

  for (let i=0;i < x.length;i++) {
    let next_dp = [];
    for (let [sum, ways] of dp) {
        let summation =  sum + x[i];
        let index1 = findIndex(next_dp, summation);
        
         if( index1 != -1) {
             next_dp[index1] = [next_dp[index1][0], next_dp[index1][1] + ways];
         }else {
             next_dp.push([summation, ways]);
         }   
        let substraction =  sum - x[i];
        let index2 = findIndex(next_dp, substraction);
        if( index2 != -1) {
             next_dp[index2] = [next_dp[index2][0], next_dp[index2][1] + ways];
         }else {
             next_dp.push([substraction, ways]);
         }
}
    dp = next_dp;
}
  
}

function findIndex(array, sum) {
    return array.findIndex((s)=> {
        return sum == s[0];
    });
  }






  return {targetSum}
} 
