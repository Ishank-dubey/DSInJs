function neetCode() {
  function longestRepeatingCharacterReplacement(array, k) {
    let map = {};
    let start = 0, end = 0;
    let result = 0;
    for ( ;end < array.length;end++) {
        if(map[array[end]]){
            map[array[end]] += 1
        } else{
            map[array[end]] = 1
        };
        while((end - start + 1) - getCharacterWithMaxCount(map) > k) {
            map[array[start]] --;
            start ++;
        }
        result = Math.max(result, (end - start + 1));
    }
    return result;
}
function getCharacterWithMaxCount(map) {
        let result = 0;
        for (let key of Object.keys(map)) {
            if(map[key]) {
                if(result < map[key]) {
                    result = map[key];
                } 
            }
        }
        return result;
    }
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

  function partitionArray(array) {
     let sum = array.reduce((a, b)=> a  + b, 0);
    if(sum % 2 == 1){
        return false;
    }
    let dp = new Set();
    dp.add(0);
    for(let i of array) {
        let nextdp = new Set();
        for(let j of dp) {
            nextdp.add(i + j);
            nextdp.add(j);
        }
        dp = nextdp;
    }      
    return dp.has(sum / 2);
}
//partitionArray([1,5,11,5])


  function kokoBanana(array, h) {
    let start =1, end;
    let maxBannas = 0;
    for(let j of array) {
        if(j > maxBannas) {
            maxBannas = j
        }
    }
    end = maxBannas;
    result = maxBannas;//rate is the max bananas in the pile at once
    while ( start <= end) {
        let mid = Math.floor((end + start)/2);
        let currentSpeed = 0;
        for(let j of array) {
            currentSpeed += Math.ceil(j / mid);
        }
        if(currentSpeed <= h) {
            end = mid - 1;
            result = Math.min(result, mid);// make sure its the mid not the currentSpeed as mid is the speed,, currentSpeed is bacially the hours! the name current speed is miss leading
        } else {
            start = mid + 1;
        }
    }
    return result;
}


  //target is the destination position
  //position_speed = [position of the car, speed of the car]
  function carFleet(target) {
     console.log('dd');
     let stack = [];
     let position_speed = [[10,2],[8,4],[0,1],[5,1], [3,3]]; 
     position_speed.sort((a, b) => a[0] - b[0]);
     for(let j = position_speed.length - 1; j >= 0 ;j--) {
         stack.push((target - position_speed[j][0])/ position_speed[j][1]);
         if(stack.length >= 2) {
             if(stack[stack.length - 1] <= stack[stack.length - 2]) {
                 stack.pop();
             }
         }
     }
    return stack.length;
}

  function isConsecutiveSequenceGroup(array, groupSize) {
    if(array.length % groupSize !=0 ) return false;
    let hash = {};
    for(j of array) {
        if(hash[j]) {
            hash[j] = hash[j] + 1;
        } else {
            hash[j] = 1;
        }
    }
    
    array.sort((a, b)=> a - b);
    const unique = [...new Set(array)]; /// using this in place of the min heap
    while (unique.length) {
        let number = unique[0];
        let end = number + groupSize;
        for (;number < end ;number++) {
            if(hash[number] == undefined) { return false;}
            hash[number]--;
            if(hash[number] ==0) {
                if(number != unique[0]) {
                    return false;
                }
                unique.shift();
            }
        }
    }
    return true;
    console.log(hash, array);
}

  return {
    targetSum, 
    overlappingIntervals, 
    longestRepeatingCharacterReplacement,
    partitionArray
  };
} 
