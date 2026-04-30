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
  function mergeTripletToFormTargetTripilet(triplets, targetTriplet) {
    let result = [];
    for (let triplet of triplets) {
        if(triplet[0] > targetTriplet[0] || triplet[1] > targetTriplet[1]|| triplet[2] > targetTriplet[2]) {
            continue;
        }
        //if we are here that means that there are triplets whose items are lesser or equal to the target triplet items
       // so lets find [max(ai, bi), max(ai+1, bi+1), max(ai+2, bi+2)]
        for (let tripletItem in triplet) {
            if(triplet[tripletItem] == targetTriplet[tripletItem]) {
                result.push(triplet[tripletItem]);
            }
        }
    }
    return result.length >= 3;
}
  function kMostFrequentItemsInArray(array, k) {
    let map = {};
    for(let item of array) {
        map[item] = map[item] ? map[item] + 1 : 1;
    }
    let frequencies = [];
    for(let j of Object.keys(map)) {
        frequencies[map[j]] = frequencies[map[j]] ? frequencies[map[j]].push(j) : [j];
    }
    let result = [];
    for (let count = array.length + 1;count >= 0 ;count--) {
        if(frequencies[count]) {
            result.push(...frequencies[count]);
        }
        if(result.length == k) {
            return result;
        }
    }
    return result;
}
  //mergeTripletToFormTargetTripilet([[2,5,3], [1,8,4], [1,7,5]], [2,7,5]) -> true
  //merging means the - while merging two 

  function numberOfConnectdComponentsInGraph(edges, n) {
    let rank = [];
    let parent = [];
    for(let i=0;i < n;i++) {
        rank.push(1);
        parent.push(i);
    }
    function find(i) {
      if(i == parent[i]) {
        return i;
     }
    parent[i] = find(parent[i]);
    return parent[i];
    }
function union(p1, p2){
    let parent1 = find(p1);
    let parent2 = find(p2);
    
    if(parent1 == parent2) {
        return 0;
    }
    if(rank[parent1] < rank[parent2]) {
        parent[parent1] = parent2;
        rank[parent2] += rank[parent1];
    } else {
        parent[parent2] = parent1;
        rank[parent1] += rank[parent2];
    }
    return 1;
}
let result = n;
for (let edge of edges) {
    result = result - union(edge[0], edge[1])
}
    return result;
}

//numberOfConnectdComponentsInGraph([[0,1],[1,2],[3,4]], 5)
//2


  // 1 - 2- 6 - 9, the path starts at 1 so that indicates the the longest path from 2 is lesser than the path from 1
function findLongestIncresingPathInMatrix(matrix) {
    let ROW = matrix.length;
    let COL = matrix.length;
    let cache = new Map();
    function dfs(row, column, previousValue) {
        if(row < 0 || row == ROW || column <0 || column == COL || matrix[row][column] <= previousValue) {
            return 0;
        }
         if(cache[row+''+column]) {
             return cache[row+''+column];
         }
        let res = 1;
        res = Math.max(res, 1 + dfs(row + 1, column, matrix[row][column]));
        res = Math.max(res, 1 + dfs(row - 1, column, matrix[row][column]));
        res = Math.max(res, 1 + dfs(row , column + 1, matrix[row][column]));
        res = Math.max(res, 1 + dfs(row, column - 1, matrix[row][column]));
        cache[row+''+column] = res;
        return cache[row+''+column]
    }
    let result = 0;
    for(let i=0;i < ROW;i++) {
        for (let j=0;j < COL;j++) {
            result = Math.max(result, dfs(i, j, -1)); //see this the default is -1
        }
    }
    return result;
}
  //simple way to ger the number of 1s in a binary representatio of a number in  log(n) time
  function numberof1(n){
    let result = 0;
   while(n) {
    result = n % 2 + result;
    n = Math.floor(n/2);
   }
console.log(result);
}

  // O(n)
 function getOnesArray(n) {
    let dp = [0];
    let offSet = 1;
    for (let i=1;i <= n;i++) {
        if(2 * offSet == i) {
            offSet = 2 * offSet;
        }
        dp[i] = 1 + dp[i - offSet];
    }
    return dp;
}
  //getOnesArray(4) -  [0, 1, 1, 2, 1]
  

//findLongestIncresingPathInMatrix([[9,9,4], [6,6,8], [2,1,1]]);

  function mergeSortedArrays(arrays) {
  const initialArray = [];
  const sortedList = [];
  for(let i=0;i < arrays.length;i++) {
    initialArray.push({
      num: arrays[i][0],
      arrayIdx: i,
      elementIdx: 0
    });
  }
  const minHeap = new MinHeap(initialArray);
  while(minHeap.heap.length) {
    const smallestItem = minHeap.remove();
    const {num, elementIdx, arrayIdx} = smallestItem;
    sortedList.push(num);
    if(elementIdx == arrays[arrayIdx].length - 1){
      continue;
    } 
    minHeap.insert({
      arrayIdx,
      elementIdx: elementIdx + 1,
      num: arrays[arrayIdx][elementIdx + 1]
    });
  }
  return sortedList;
}

class MinHeap {
  constructor(array) {
    this.heap = array;
    const parent = Math.floor((this.heap.length - 2) / 2);
    for(let i=parent;i >= 0;i--) {
      this.shiftDown(i, array.length - 1, array);
    }
  }
  shiftUp(currentIndex, array) {
    let parent = Math.floor((currentIndex - 1) / 2);
    while(currentIndex > 0 && array[parent].num > array[currentIndex].num){
      this.swap(currentIndex, parent, array);
      currentIndex = parent;
      parent = Math.floor((currentIndex - 1) / 2);
    }
  }
  shiftDown(currentIndex, endIndex, array) {
    let childLeft = 2 * currentIndex + 1;
    while(childLeft <= endIndex) {
      let indexToBeSwapped = -1;
      let childRight = (2 * currentIndex + 2) <= endIndex ? (2 * currentIndex + 2) : -1;
      if(childRight != -1 && array[childRight].num < array[childLeft].num) {
        indexToBeSwapped = childRight;
      } else {
        indexToBeSwapped = childLeft;
      }
      if(array[currentIndex].num > array[indexToBeSwapped].num) {
        this.swap(indexToBeSwapped, currentIndex, this.heap);
        currentIndex = indexToBeSwapped;
        childLeft = currentIndex * 2 + 1;  
      }else {
        break;
      }
    }
  }
  swap(source, dest, array) {
    const temp = array[source];
    array[source] = array[dest];
    array[dest] = temp;
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length -1 , this.heap);
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const returnValue = this.heap.pop();
    this.shiftDown(0, this.heap.length - 1, this.heap);
    return returnValue;
  }
}
  function coinChange(array, sumNeeded) {
    
    const dp = new Array(sumNeeded + 1).fill(sumNeeded + 1);//initialize with the greatest value
    dp[0] = 0;
    for(let item=1;item <= sumNeeded;item++) { // this is to be the index of the dp array not the value
        for(let coin of array) {
            if(item - coin >=0 ) {
                dp[item] = Math.min(1+ dp[item - coin], dp[item]);
            }
        }
    }
    let result = dp[sumNeeded] != sumNeeded + 1 ? dp[sumNeeded] :-1;
    return result;
} // coinChange([1,2,5], 11);--- 3
  // coinChange([2], 3); --- -1


  function popBallons(array) {
    console.log('test');
    let newArray = [1, ...array, 1];
    let cache = {};
    function DFS(L, R) {
        if(L > R) {
            return 0;
        }
        if(cache[L+''+R]) {
            return cache[L+''+R];
        }
        let coins = 0;
        for(let i=L;i <=R;i++) {
            coins = newArray[L - 1] * newArray[i] * newArray[R+1];
            coins += DFS(L, i-1) + DFS(i+1, R);
            cache[L+''+R] = Math.max(cache[L+''+R] ? cache[L+''+R]: 0, coins);
        }
        return cache[L+''+R];
    }
    return DFS(1, newArray.length - 2);
}
  //popBallons([3,1,5,8]); ---> 167

  
function maxProfit(array) {
    let cache = {};
    function DFS(i, buying) {
        if(i >= array.length) {
            return 0;
        }
        if(cache[i+''+buying]) {
            return cache[i+''+buying];
        }
        let coolDown = DFS(i + 1, buying);
        if(buying) {
            let buy = DFS(i + 1, false) - array[i];
            cache[i+''+buying] =  Math.max(buy, coolDown);
        } else {
            let sell = DFS(i + 2, true) + array[i];
            cache[i+''+buying] =  Math.max(sell, coolDown);
        }
    return cache[i+''+buying];
}
return DFS(0, true);
}
    //maxProfit([1,2,3,0,2]); ----> 3 //O(n), O(2n)

  function flatten(value) {
  if(typeof value !== 'object' || value === null){
    return value;
  }
  if(Array.isArray(value)){
    return flattenArray(value);
  }
  return flattenObject(value);
}
function flattenArray(value){
  return value.reduce((item, current) => { return item.concat(flatten(current)) }, []);
}
function flattenObject(obj){
  const flatResult = {};
  for(const [key, value] of Object.entries(obj)){
    const isValueObject = typeof value === 'object' && value !== null && !Array.isArray(value);
    const flatObj = flatten(value);

    if(isValueObject){
      Object.assign(flatResult, flatObj);
    } else{
      flatResult[key] = flatObj;
    }
  }
  return flatResult;
}

  function LIS(array) {
    let DP = new Array(array.length).fill(1);
    
        for(let j=1;j < array.length;j++) {
            for(let i=0;i < j;i++){
               if(array[j] > array[i] && DP[i] + 1 > DP[j]){
                   DP[j] = DP[i] + 1;
            }    
            }
        }
    let result = 1;
    for(let item of DP){
        if(result < item) {
            result = item;
        }
    }
    return result;
}
  //LIS([0,1,0,3,2,3]) - 4
  //LIS([10,9,2,5,3,7,101,18]) - 4
  //LIS([7,7,7,7,7,7,7]) - 1
  // O(n^2)


  function serialize(node) { //Using the DFS
    let result = [];
    function DFS(node) {
        if(!node) {
            result.push('N');
            return;
        }
        result.push(node.value);
        DFS(node.left);
        DFS(node.right);
    }
    DFS(node);
    return result;
}

function deserilaize(array) {
    let i = 0;
    function DFS() {
        if(array[i] == 'N') {
            i++;
            return null;
        }
        let node = new Node(array[i]);
        i++;
        node.left = DFS();
        node.right = DFS();
        return node;
    }
    return DFS();
}

  class Node {
    constructor(x) {
        this.value = x;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(60);


  //Serialize Deserialize using the BFS and queues
  function serialize(root) {
    const arr = [];
    const q = new Queue();

    q.enqueue(root);

    while (!q.isEmpty()) {
        const curr = q.dequeue();

        // If curr node is null,
        // append -1 to result.
        if (curr === null) {
            arr.push(-1);
            continue;
        }

        // else push its value into result
        arr.push(curr.data);

        // enqueue children
        q.enqueue(curr.left);
        q.enqueue(curr.right);
    }

    return arr;
}

// function to deserialize a tree.
function deserialize(arr) {
    if (arr[0] === -1) return null;

    const root = new Node(arr[0]);
    const q = new Queue();
    q.enqueue(root);

    let i = 1;
    while (!q.isEmpty()) {
        const curr = q.dequeue();

        // Left child
        if (arr[i] !== -1) {
            const left = new Node(arr[i]);
            curr.left = left;
            q.enqueue(left);
        }
        i++;

        // Right child
        if (arr[i] !== -1) {
            const right = new Node(arr[i]);
            curr.right = right;
            q.enqueue(right);
        }
        i++;
    }

    return root;
}

  function findCheapestFlightInKStops(n, K, flights, src, dst) {
    let costs = new Array(n).fill(Infinity);
    costs[src] = 0;
    let tempCost = new Array(n).fill(Infinity);
    tempCost[src] = 0;
    for(let i=0;i <= K;i++) { // K + 1 iterations
        tempCost = [...costs]; //new copy
    for(let edge of flights) {
        let [src, dst, cost] = edge;
        if(costs[src] == Infinity) {
            continue;
        }
        if(costs[src] + cost < tempCost[dst]) {
            tempCost[dst] = costs[src] + cost;
        }
    }
    costs = tempCost;
    }
    return costs[dst];
}
// think about BFS for one inner iteration
//findCheapestFlightInKStops(4, 1, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3) -- 700

function wallAndGate(rooms) {
    //  - 1 is a wall cell, 0 is a Gate, intiall cell value is Infinity
    // we can go BFS one neightbour each iteraton startin with the Gates whose distance is 0
    let queue = [];
    let visited = {}; //keep the Row, Col that are visited in the BFS 
    let ROW = rooms.length;
    let COL = rooms[0].length;
    
    //Find the Gates and start thr BFS with them
    for(let r=0;r , r < ROW;r++){
        for(c=0;c < COL;c++) {
            if(rooms[r][c] == 0) {
                queue.push([r,c]);
                visited[r+''+c] = 1;
            }
        }
    }
    let dist = 0;
    while(queue.length) {
      let currentLength = queue.length;
      for(let i=0;i < currentLength;i++){
         let [r,c] = queue.shift();
          rooms[r][c] = dist;   
          addRoom(r+1, c);
          addRoom(r-1, c);
          addRoom(r, c+1);
          addRoom(r, c-1);
      }
        dist++;
         
    }
    function addRoom(r, c) {
        if(r<0 || r>= ROW || c<0 || c>= COL || rooms[r][c] == -1 || visited[r+''+c] ==1) {
            return;
        }
        visited[r+''+c] = 1;
        queue.push([r,c]);
    }
}

  //let rooms = [[Infinity, -1, 0, Infinity],[Infinity, Infinity, Infinity, -1], [Infinity, -1, Infinity, -1], [0 , -1, Infinity, Infinity]];
  // wallAndGate(rooms);
  // console.log(rooms) -->  [[3,-1,0,1], [2,2,1,-1],[1,-1, 2,-1],[0,-1,3,4]]

  
  return {
    targetSum, 
    overlappingIntervals, 
    longestRepeatingCharacterReplacement,
    partitionArray
  };
} 
