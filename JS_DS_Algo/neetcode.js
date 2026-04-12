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

function tergetSumUsingTheMap(x, target) {
  let x = [1,1,1,1,1,];
let dp = new Map();
dp.set(0, 1);
for (let i=0;i < x.length;i++) {
    let next_dp = new Map();
    for (let [sum, ways] of dp) {
        let summation =  sum + x[i];
        let ways1 = next_dp.get(summation);
        if(ways1) {
            next_dp.set(summation, ways1 + ways);
        } else {
            next_dp.set(summation, ways);
        }

        let substraction =  sum - x[i];
        let ways2 = next_dp.get(substraction);
        if(ways2) {
            next_dp.set(substraction, ways2 + ways);
        } else {
            next_dp.set(substraction, ways);
        }
        
}
    dp = next_dp;
}
  reutrn dp.get(target);
console.log(dp);
}
  
function findIndex(array, sum) {
    return array.findIndex((s)=> {
        return sum == s[0];
    });
  }

  function overlappingIntervals(array) {
    array.sort((a, b)=> a[0] - b[0]);
    let nextEnd = array[0][1];
    let result = 0;    
    for (let i=1;i < array.length;i++) {
        if(array[i][0] >= nextEnd) {
            nextEnd = array[i][1];
        }else {
            result++;
            nextEnd = Math.min(nextEnd, array[i][1]);
        }
    }
    return result;
}






  return {targetSum, overlappingIntervals}
} 
