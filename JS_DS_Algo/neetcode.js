function neetCode() {

function permutations(str) {
    let visited = {};
    let perms = [];
    function permutationInner(index){
        if(index == str.length) {
            console.log(perms);
            return;
        }
        for(let j=0;j < str.length;j++) {
            if(!visited[j]) {
                visited[j] = 1;
                perms[index] = str[j];
                permutationInner(index + 1);
                visited[j] = 0;
            }
        }
    }
    permutationInner(0);
}
	//permutations('123')
	//['1', '2', '3']
//['1', '3', '2']
//['2', '1', '3']
//['2', '3', '1']
//['3', '1', '2']
//['3', '2', '1']
	
	function palindrom(str){
   let result = [];
   let part = [];
   function isPali(str, i, j) {
      while(i <= j){
         if(str[i] != str[j]) {
             return false;
            }
         i++;j--;
      }
    return true;
   }
   function DFS(i) {
        if(i >= str.length) {
            result.push([...part]);
            return;
         }
        for (let j=i; j < str.length;j++) {
                if(isPali(str, i, j)) {
                    part.push(str.substring(i, j+1));
                    DFS(j + 1);
                    part.pop();
                }           
         }
     }
DFS(0);
return result;
}
	//palindrom('aab'); - [[a,a,b], [aa, b]]

function wordBreakDisctionary(word, words) {
    let dp = new Array(word.length + 1).fill(false);
    dp[word.length] = true;
    for(let i= word.length - 1;i >=0 ;i--) {
        for(let item of words) {
            if(item.length + i <= word.length && item == word.substr(i, i + item.length)) {
                dp[i] = dp[i + item.length];
            }
            if(dp[i]) {
                break;
            }
        }
    }
    return dp[0];
}


//wordBreakDisctionary('leetcode', ["leet", "code"]) - true
	
	function detectLoopInLLFindDuplicateNumber(array) {
  let slow = 0;
  let fast = 0;
    while(true) {
        slow = array[slow];
        fast = array[array[fast]];
        if(slow == fast) {break;}
    }
    let slow2 = 0;
    while(slow != slow2) {
        slow = array[slow];
        slow2 = array[slow2];
    }
    return slow2;
}

//detectLoopInLLFindDuplicateNumber([1,3,4,2,2]) - 2
	
function reorderList(head){
    let slow = head;
    let fast = head.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let next = null;
    let secondHead = slow.next;
    let prev = null;
    slow.next = null;//Important to prevent a recurssion when the node is to become the last node in the reordered LL
    
    while(secondHead) {
        next = secondHead.next;
        secondHead.next = prev;
        prev = secondHead;
        secondHead = next;
    }
    let first = head;
    let second = prev;
    while(second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
}

function printLL(node){
    let count = 0;
    while(node){
        console.log(node.data);
        count++;
        node = node.next;
        
    }
}

let head = null;
function insertLL(node) {
    if(!head) {
        head = node;
        head.next = null;
    }
    else {
        let curr = head;
    while(curr.next) {
        curr = curr.next;
    }
    curr.next = node;
    }
    
}
//insertLL({data:1})
//insertLL({data:2})
//insertLL({data:3})
//insertLL({data:4})
//printLL(head) - 1,2,3,4
//reorderList(head);
//printLL(head) - 1,4,2,3

	
  class LRUCache {
    constructor(capacity) {
        this.cache = {};
        this.left = {data:'l'};
        this.capacity = capacity;
        this.right = {data:'r'};
        this.left.next = this.right;
        this.right.previous = this.left;
    }
    insert(node) {
        let prev = this.right.previous;
        node.next = this.right;
        node.previous = this.right.previous;
        prev.next = node;
        this.right.previous = node;
    }
    remove(node) {
        let prev = node.previous;
        let next = node.next;
        prev.next = next;
        next.previous = prev;
    }
    put(key, data){
        if(this.cache[key]) {
            this.remove(this.cache[key]);
        }
        let node = {data, key};
        this.insert(node);
        this.cache[key] = node;
        if(Object.keys(this.cache).length > this.capacity) {
            let node = this.left.next;
            this.remove(node);
            delete this.cache[node.key];
        }
    }
    get(key){
        console.log('ddd');
        if(this.cache[key]) {
            this.remove(this.cache[key]);
            this.insert(this.cache[key]);
            return this.cache[key].data;
        }
        return -1;
    }   
}
	
  function reversePolishNotation(tokens) {
    let stack = [];
    for(item of tokens) {
        if(item == "*") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b * a);
        }else if(item == "+") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b + a);
        } else if(item == "-"){
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if(item == "/") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.floor(b / a));
        } else {
            stack.push(item);
        }
    }
    return stack[0];
}//O(n)
	//reversePolishNotation([2, 1, "+", 3, "*"])

	
	function combinationsFunction(str) {

			let result = [];

		combinations(0, 0);
	function combinations(index, charIndex) {
    	for(let i=charIndex;i < str.length;i++){
        	result[index] = str[i];
       	 	console.log(result.slice(0, index + 1));
        	if(i + 1 < str.length) {
            	combinations(index +1 , i + 1);
        }
    }
}
	}

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


function swimInRisingWater(grid) {
    let visited = {};
    let array = [[grid[0][0], 0, 0]];
    let ROW = grid.length;
    let COL = grid[0].length;
    while (array.length) {
        let [value, x, y] = array.shift();
        //visited[x+''+y] = 1;
        if(x == ROW - 1 && y == COL - 1) {
            return value;
        }
        for(let [rd, rc] of [[1,0],[-1,0],[0,1],[0, -1]]) {
            let xnew =  rd + x;
            let ynew = rc + y;
            if(xnew >= ROW || ynew >= COL || xnew < 0 || ynew < 0 || visited[xnew+''+ynew]) {
                continue;
            }
            visited[xnew+''+ynew] = 1;
            addAsMinHeap(Math.max(grid[xnew][ynew], value), xnew, ynew, array);
        }    
    } 

    function addAsMinHeap(value, x, y, array) {
        array.push([value, x, y]);
        array = array.sort((a, b)=> a[0] - b[0]);
    }
}
  //swimInRisingWater([[0,2],[1,3]]) - 3
  //swimInRisingWater([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]) - 16

function dijkstrasAlgorithm(start, edges) {
  const minDistances = new Array(edges.length).fill(Infinity);
  const visited = new Set();
  minDistances[start] = 0;

  while(visited.size != edges.length) {
    const [minDistance, minDistanceNode] = getMinDistanceVertix(visited, minDistances);

    if(minDistance == Infinity) {
      break;
    }
    visited.add(minDistanceNode);
    for(edge of edges[minDistanceNode]) {
      const [destination, distance] = edge;
      if(visited.has(destination)) {
        continue;
      }
      const newDistance = minDistance + distance;
      const currentMinDistance = minDistances[destination];
      if(newDistance < currentMinDistance) {
        minDistances[destination] = newDistance;
      }
    }
  }
  return minDistances.map( x=> x == Infinity ? -1 : x);
}

function getMinDistanceVertix(visited, minDistances) {
  let minDistance = Infinity;
  let minDistanceVertex = -1;
  for(const [node, distance] of minDistances.entries()) {
    if(visited.has(node)) {
      continue;
    }
    if(minDistance >= distance) {
         minDistance = distance;
         minDistanceVertex = node;
    }
    }
  return [minDistance, minDistanceVertex];
}

  function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(array[mid] == target) {
            return mid;
        }
        if(array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
  //binarySearch([-1,0,3,5,9,12],9) - 4
  // binarySearch([-1,0,3,5,9,12],2) -1


  function encodeDecodeStrings(list) {
    let encoded = '';
    for(let item of list) {
        encoded += item.length+"#"+item;
    }

    //begin decode
    let i = 0; let decoded = [];
    while(i < encoded.length) {
        let j = i;
        while(encoded[j]!='#') {
            j++;
        }
        let length = +encoded.substring(i, j);
        decoded.push(encoded.substring(j + 1, j + 1 + length));
        i = j + 1 + length;
    }
    return decoded;
}
  //encodeDecodeStrings(['love','you']) --  ['love', 'you']

function alienDictionary(words) {
    let graph = {};
    for(let word of words){
        for(let char of word){
            if(!graph[char]) {
                graph[char] = new Set();
            }
        }
    }
    
    for(let j=0;j < words.length -1 ;j++) {
        let word1 = words[j];
        let word2 = words[j+1];
        let minLength = Math.min(word1.length, word1.length);
        if(word1.length > word2.length && word1.substring(0, minLength) == word2.substring(0, minLength)) {
            return '';
        }
        for(let k=0;k < minLength;k++) {
            if(word1[k]!= word2[k]) {
                graph[word1[k]].add(word2[k]);
                break;
            }
        }
    }

let visits = {};
let result = [];
function dfs(char) {
    if(visits[char] != undefined){
        return visits[char];
    }
    visits[char] = true;
    for(const node of graph[char]) {
        if(dfs(node)) {
            return true;
        }
    }
    visits[char] = false;
    result.push(char);
}
    for(let x in graph) {
        if(dfs(x)){
            return '';
        }
    }
    console.log(graph);
    return result;
    //return graph;*/
}
  // alienDictionary(['wrt', 'wrf','er','ett','rftt']).reverse(); ---- ['w', 'e', 'r', 't', 'f']
  
  function missingNumber(numbers) {
    let sum = (numbers.length + 1)* (numbers.length) /2;
    let arraySum = 0;
    for(const item of numbers) {
        arraySum += item;
    }
    if(arraySum == sum) {
        return 0;
    }
    return sum - arraySum;
}

  //missingNumber([3,0,1]) - 2, missingNumber([0,1]) - 2, missingNumber([9,6,4,2,3,5,7,0,1]) - 8, missingNumber([1])

  function missingSumUsingXOR(numbers) {}


  function missingNumber(numbers) {
    let sum = numbers.length;;
    
    for(const item in numbers) {
        sum += (item - numbers[item]);
    }
    
    return sum;

    //here fundamentally are find the sum of 0....len(num) and substracting at the numbers in the array at the same time
    // so  the code is smaller
}

  function validGraphTree(N, edges) {
     if(!N){
         return true;
     }
     let visited = {};
     let graph = {};
     for(let [src, des] of edges){
         if(!graph[src]) {
             graph[src] = [des];
         } else {
             graph[src].push(des);
         }
         if(!graph[des]) {
             graph[des] = [src];
         } else {
             graph[des].push(src);
         }
     }

     function DFS(item, prev) {
         if(visited[item]) {
             return true;
         }
         visited[item] = true;
         for(let neigh of graph[item]) {
             if(neigh != prev) {
                if(DFS(neigh, item)){
                 return true;
               }    
             }
         }
         return false;//indicate that the loop is not found
     }
     let loopResult = DFS(0 , -1);
     if(loopResult == false) {
         return Object.keys(visited).length == N;
     }
     return false;
 }
  //validGraphTree(5, [[0,1],[0,2],[0,3],[1,4]]) - true

  function labelPartition(string){
    let lastIndex = {};    
    for(let i in string) {
       lastIndex[string[i]] = i;
    }
    let size = 0;
    let endIndex = 0;
    let result = [];
    for(let char in string){
        endIndex = Math.max(endIndex, lastIndex[string[char]]);
        size ++;
        if(char == endIndex){
            result.push(size);
            size = 0;
        }
    }
    return result;
}
  //labelPartition('ababacacadefegdehijhklik'); -- [9, 7, 8], labelPartition('eccbbbbdec'); - [10]

  function meetingRooms(intervals) {
    intervals.sort((a, b)=> a[0] - b[0]);
    let endTime = intervals[0][1];
    let overlaps = 0;
    for(let i=1;i < intervals.length;i++) {
        if(intervals[i][0] >= endTime) {
            endTime = intervals[i][1];
        } else {
            overlaps++;
            endTime = Math.max(intervals[i][1], endTime);
        }
    }
    return overlaps;
}

  function meetingRooms(intervals) {
    intervals.sort((a, b)=> a[0] - b[0]);
    let endTime = intervals[0][1];
    let overlaps = 0;
    for(let i=1;i < intervals.length;i++) {
        if(intervals[i][0] >= endTime) {
            endTime = intervals[i][1];
        } else {
            overlaps++;// overlap to indicate how many meeting rooms are needed
            endTime = Math.max(intervals[i][1], endTime);
        }
    }
    return overlaps == 0 && intervals.length ? 1 : overlaps;// as even when there is not overlap one meeting room is needed when intervals is finite
}
  //nlog(n)


  function validAnagram(str1, str2) {
     let mapStr1 = {};
     let mapStr2 = {};
     for(let i=0;i < str1.length;i++) {
         mapStr1[str1[i]] = !mapStr1[str1[i]] ? 1 : mapStr1[str1[i]] + 1;
         mapStr2[str2[i]] = !mapStr2[str2[i]] ? 1 : mapStr2[str2[i]] + 1;
     }
     for(let key of Object.keys(mapStr1)) {
         if(mapStr1[key] != mapStr2[key]) {
             return false;
         }
     }
     return true;
 }
//validAnagram('cat', 'cat'); true, O(n) memory


  function slidingWindowMax(nums, K) {
    let end = 0;
    let start = 0;
    let queue = [];//assume that this is the monotonic array
    let result = [];
    for(;end < nums.length;end++){
        while(queue.length && nums[queue[queue.length - 1]] < nums[end]){
            queue.pop()
        }
        queue.push(end);
        if(start > queue[0]) {
            queue.shift();
        }
        if(end + 1 >= K) {
            start ++;
            result.push(nums[queue[0]]);
        }
       // end ++
    }
    return result;
}
  //slidingWindowMax([1,3,-1,-3,5,3,6,7], 3); -- [3, 3, 5, 5, 6, 7]


  unction productOfArrayExceptIteself(nums) {
    let prefix = 1;
    let output = [];
    for(let num of nums){
        //if(output.length < nums.length) {//this condition is not needed really
           output.push(prefix);
           prefix = prefix * num;
        //}
    }
    let postfix = 1;
    for(let i = nums.length - 1;i >=0;i--) {
        output[i] = output[i] * postfix;
        postfix = postfix * nums[i];
    }
    return output;
}
//productOfArrayExceptIteself([1,2,3,4])


  function minCostClimbingStairCase(stairs){
    let dp = [];
    stairs.push(0);
    for (let i=stairs.length - 3;i >=0 ;i--) {
        dp[i] = Math.min(stairs[i] + stairs[i + 1], stairs[i] + stairs[i + 2]);
    }
    return Math.min(dp[0], dp[1]);
}
// minCostClimbingStairCase([10, 15, 20]) = 15


  function lowestCommonAncestorLCA(root, p, q) {
    let current = root;
    while (current) {
        if(p > current.data && q > current.data) {
            current = current.right;
        } else if(p < current.data && q < current.data) {
            current = current.left;
        } else {
            return current;
        }
    }
} //O(log N)


  function kthSmallestValueInABST(root, N){
		var node = root;
		var stack = require('./DS').stackFunction();
    var k = 0;
		while(1){
		  while(node){
			stack.push(node);
			node = node.left;
		  }
		  if(stack.isEmpty())break;
      
		  node = stack.pop();

      k++;
      if(k == N) {
        return node.value
      }
      
		  console.log(node.data);
		  node = node.right;
		}
	}//O(n) in time, O(h) in space

  function kthSmallestValueInABST(root, N){
		var node = root;
		var stack = require('./DS').stackFunction();
    var k = 0;
		while(1){
		  while(node){
			stack.push(node);
			node = node.left;
		  }
		  if(stack.isEmpty())break;
      
		  node = stack.pop();

      k++;
      if(k == N) {
        return node.value
      }
      
		  console.log(node.data);
		  node = node.right;
		}
	}//O(n) in time, O(h) in space

  function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  let obj = {k:0, value:null};
  reverseInPorderTraversal(tree);
  return obj.value;
  
  function reverseInPorderTraversal(node) {
   if(!node || obj.k >= k)
     return;
   reverseInPorderTraversal(node.right);
    if(obj.k < k){
      obj.k++;
      obj.value = node.value;
      reverseInPorderTraversal(node.left);
    }
   }
  }

	function longestCommonSubSequenct(str1, str2) {
    // abcde, ace
    // a matches so now see bcde, ce

    let str1_len = str1.length;
    let str2_len = str2.length;
    let DP = new Array(str1_len + 1).fill(new Array(str2_len + 1).fill(0));

    for(let row= str1_len - 1;row >=0;row--) {
        for(let col= str2_len - 1;col >=0;col--){
            if(str1[row] = str2[col]) {
                DP[row][col] = 1 + DP[row+1][col+1];
            } else {
                DP[row][col] = Math.max(DP[row+1][col], DP[row][col + 1]);
            }
        }
     
    }
    return DP[0][0];
}

	//longestCommonSubSequenct('abcde','ace') - 3


	function dailyTempratures(temperatures){
    let monotonicDecreasingStack = [];
    let output = new Array(temperatures.length).fill(0);
    for (let [index, temp] of temperatures.entries()) {
        while(monotonicDecreasingStack.length && temp > monotonicDecreasingStack[monotonicDecreasingStack.length - 1][1]) {
            let [ind, value] = monotonicDecreasingStack.pop();
            output[ind] = (index - ind);
        }
        monotonicDecreasingStack.push([index, temp]);
    }
    return output;
}
	//dailyTempratures([73, 74, 75, 71, 69, 72, 76,73]); - [1, 1, 4, 2, 1, 1, 0, 0]
	//dailyTempratures([30, 60 , 90]); - [1, 1, 0]


function networkDelayTime(times, start, n) {
    let edges = new Array(n + 1);// as the nodes are from 1 to n so the 0th index is not going to be populated but the nth will
    let visited = {};
    for(let index=0; index < edges.length; index++){
        edges[index] = [];
    }
    for([src, dest, weight] of times) {
        edges[src].push([weight, dest])
    }
    let heap = [];
    heap.push([0, start]);
    let result = 0;
    while(heap.length){
        let [wt, current] = heap.shift();
        if(visited[current]) {
            continue;
        }
        result = Math.max(result, wt);
        visited[current] = 1;
        console.log('dddd');
        for(let [neighWt, neighNode] of edges[current]){
            pushAsHeap([neighWt + wt, neighNode]);
        }
    }
    return Object.keys(visited).length == n ? result : -1;
    
    function pushAsHeap(item) {
        heap.push(item);
        heap.sort((a, b)=> a[0]-b[0] );
    }
}
	//O(E * log(V^2)) as the heap is there
	// networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],2,4) - 
	
function invertBinaryTree(tree) {
  if(!tree){
    return;
  }
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;

	//pre order will also work

  /*
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  */
  
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

	function containsDuplicate(array) {
    let visited = {};
    for(let item of array){
        if(visited[item]){
            return true;
        }
        visited[item] = true;
    }
    return false;
}
	//containsDuplicate([1,2,3,4]) - false
	//containsDuplicate([1,2,3,1]) - true
function kthLargestNumberInArrayUsingQuickSort(array, k) {
    k = array.length - k;
    return quickSort(0, array.length - 1);
    
    function quickSort(l, r) {
        let pivot = array[r];
        let p = l;
        for(let i=l;i < r;i++) {
            if(array[i] < pivot) {
                let temp = array[p];
                array[p] = array[i];
                array[i] = temp;
                p++;
            }
        }
        console.log(l, r);
        let temp = array[r];
        array[r] = array[p];
        array[p] = pivot;
        if(p == k) {
            return array[p];
        }else if(p < k) {
            return quickSort(p+1, r);
        } else if(p > k) {
            return quickSort(l, p-1);
        }
    }
}
	//kthLargestNumberInArrayUsingQuickSort([3,2,1,5,6,4], 2); -- 5, 
	//kthLargestNumberInArrayUsingQuickSort([3,2,3,1,2,4,5,5,6], 4);  -- 4
class TireNode {
    children = {};
    isWord = false;
    addWord(word) {
        let current = this;
        for(let char in word) {
            if(!current.children[word[char]]) {
                current.children[word[char]] = new TireNode();
            }
            current = current.children[word[char]];
        }
        current.isWord = true;
    }
}

	function wordSearchii(grid, words) {
    let visited = {};
    let root = new TireNode();
    for(let word of words) {
        root.addWord(word);
    }
    let ROWS = grid.length - 1;
    let COLS = grid[0].length - 1;
    let result = [];
    function DFS(row, col, node, word) {
        if(row < 0 || row > ROWS || col < 0 || col > COLS || visited[row+''+col] || !node.children[grid[row][col]]) {
            return;
        }
        word = word + grid[row][col];
        
        visited[row+''+col] = true;
        node = node.children[grid[row][col]];
        
        if(node.isWord) {
            result.push(word);
        }
        
        DFS(row + 1 , col, node, word);
        DFS(row - 1 , col, node, word);
        DFS(row , col + 1, node, word);
        DFS(row , col - 1, node, word);
        
        visited[row+''+col] = false;
    }
    for(let row =0;row <= ROWS;row++) {
        for(let col=0;col <= COLS;col++){
             DFS(row, col, root, '');       
        }
    }
    console.log(result);
}
	// wordSearchii([["o", "a", "a", "n"], ["e","t","a","e"], ["i", "h", "k", "r"], ["i","f","l","v"]], ['oath', 'pea', 'eat', 'rain']);
	// ['oath', 'eat']

let root = new TireNode();
root.addWord('bad');
root.addWord('dad');
root.addWord('mad');
console.log(root);
	//search('.ad') - true
	//search('pad') - false
	//search('dad') - true

	//search and add, searchusing tire, search using tire
	function search(word) {

    function DFS(startIdx, node) {
        
        for(let j=startIdx;j < word.length;j++) {
            let current = word[j];


            if(current !='.') {
                if(!node.children[current]) {
                    return false;
                }
                node  = node.children[current];
            } else if(current == '.') {
                //console.log(current);
                for(let obj of Object.values(node.children)) {
                    if(DFS(j + 1, obj)){
                        return true;
                    }
                }
                return false;
            }
        }
        return node.isWord;
    }
    return DFS(0, root);
}

	function reverseLinkedListIterative(head) {
        let current = head;
        let prev = null;
        let next;
        while(current) {
         next = current.next;
         current.next = prev;
         prev = current;
         current = next;
     }
     return prev;
}//O(n) in time, memory - O(constant)


	function reverseLinkedListRec(node) {
    if(!node) {
        return null;
    }
    let newHead = node;

    if(head.next) {
        newHead = reverseLinkedListRec(node.next);
        head.next.next = head;
    }
    head.next = null;

    return newHead;
}

	function reverseKItemsInLL(root, k) {
      let current = root;
      let newHead = null;
      let tail;
    while(current){
        let count = 0;
		let next = null;
        let groupHead = current;
		let prev = null;
        while(current && count < k){
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
          count ++;
       }
       count = 0;
        if(tail) {
            tail.next = prev;
        }
        if(!newHead) {
            newHead = prev;
        }
        tail = groupHead;
    }
    return newHead;
}


	function printRightSideViewOfTree(root){
    let queue = [];
    queue.push(root);
    let result = [];
    while(queue.length) {
        let levelLength = queue.length;
        let rightMost;
        
        for(let i=0;i < levelLength;i++) {
            let node = queue.shift();
            if(node) {
                rightMost = node;
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        result.push(rightMost.value);
    }
    return result;
}


	function happyNumber(num){

   let visited = {};
    while(!visited[num]) {
        visited[num] = true;
        num = getSumOfSquares(num);
        if(num == 1) {
            return true;
        }
    }
    return false;

    function getSumOfSquares(num){
        let sum = 0;
        while(num) {
            let digit = num % 10;
            sum = sum + Math.pow(digit, 2);
            num = Math.floor(num / 10);
        }
        return sum;
    }
}


	function findMinimumConnetedPoints(points) {
    let adjList = [];
    for(let i in points){
        adjList.push([]);
    }
    for(let i=0;i < points.length;i++) {
        for(let j=i+1;j < points.length;j++) {
            let dist = Math.abs(points[j][0] - points[i][0]) + Math.abs(points[j][1] - points[i][1]);
            adjList[i].push([dist, j]);
            adjList[j].push([dist, i]);
        }
    }
    let heap = [];

    heap.push([0, 0]);
    let visited = new Map();
    let cost = 0;
    //console.log(visited.size);
    while(visited.size < points.length) {
        let [wt, node] = heap.shift();
        //console.log(wt);
        if(visited.get(node)) {
            continue;
        }
        visited.set(node, true);
        cost = cost + wt;

        for(let info of adjList[node]) {
            let neigh = info[1];
            let cost = info[0];
            if(!visited.get(neigh)) {
                addAsHeap(cost, neigh);
            }
        }
    }
    return cost;

    function addAsHeap(wt, node){
        heap.push([wt, node]);
        heap.sort((a, b) => a[0]-b[0])
    }
}

	//findMinimumConnetedPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]) - 20
	//O(n^2 log n)



	function twoNumberSumToTargetInSortedrray(array, target) {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        let currentSum = array[left] + array[right];
        if(currentSum < target){
            left = left + 1;
        } else if(currentSum > target) {
            right = right - 1;
        } else {
            return [left + 1, right +1];
        }
    }
}

	//twoNumberSumToTargetInSortedrray([2,5,7,11,15], 9) - [1, 3]
	// the question is looking for the index + 1 so 


	function validParanthesisRecurssion(string){
    let caching = {};
    function innerFunction(index, openCount) {
        if(openCount < 0) {
            return false;
        }
        if( index == string.length) {
            return openCount == 0;
        }
        if(caching[index+''+openCount] != undefined) {
            return caching[index+''+openCount]
        }
        if(string[index] == '(') {
           caching[index+''+openCount] = innerFunction(index + 1, openCount + 1); 
        }else if(string[index] == ')'){
            caching[index+''+openCount] = innerFunction(index + 1, openCount - 1); 
        } else {
            caching[index+''+openCount] = innerFunction(index + 1, openCount - 1) || innerFunction(index + 1, openCount + 1) || innerFunction(index + 1, openCount);
        }
        return caching[index+''+openCount];
    }
        return innerFunction(0, 0);
}

	//O(n^2) in time and space
	//validParanthesisRecurssion("(*))") = true


	function findTheMinInRotatedArray(array) {
    let left = 0;
    let right = array.length - 1;
    result = Infinity;
    while(left <= right) {
        if(array[left] < array[right]) {
            result = Math.min(result, array[left]);
        }
        let mid = Math.floor((left + right)/2);
        result = Math.min(result, array[mid]);
            if(array[mid] >= array[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
    }
    return result;
}

//findTheMinInRotatedArray([3,4,5,1,2,]) = 1


	function robHouse(array) {
    let rob1 = 0;
    let rob2 = 0;
    let result = 0;
    for(let house of array) {
        result = Math.max(house + rob1, rob2);
        rob1 = rob2;
        rob2 = result;
    }
    return result;
}

	//robHouse([1,2,3,1]) - 4
	//robHouse([2,7,9,3,1]) - 12

	function maxProductSubArray(array) {
    let currentMin = 1;
    let currentMax = 1;
    let result = Math.max(...array);
    for(let element of array) {
        if(element == 0){
            currentMax = 1;
            currentMin = 1;
            continue;
        }
        let temp = element * currentMax;
        currentMax = Math.max(element, element * currentMax, element * currentMin);
        currentMin = Math.min(element, temp, element * currentMin);
        result = Math.max(result, currentMax);
    }
    return result;
}

	//maxProductSubArray([2,3,-2,4]); - 6


	function regularExpressionMatching(str, pattern) {
    function regularExpressionMatchingDFS(i, j) {
        if(i >= str.length && j >= pattern.length) {
            return true;
        }
        if(j >= pattern.length) {
            return false;
        }
        let match = false;
        if(i < str.length) {
            match = (str[i] == pattern[j]) || pattern[j] == '.';
        }
        if(j + 1 < pattern.length && pattern[j + 1] == "*") {
            return (match && regularExpressionMatchingDFS(i + 1, j)) || regularExpressionMatchingDFS(i, j + 2);
        } else if(match) {
            return regularExpressionMatchingDFS(i + 1, j + 1);
        }else {
            return false;
        }
    }
    return regularExpressionMatchingDFS(0,0);
}
	//regularExpressionMatching('aa', 'a'); - false
	// regularExpressionMatching('aa', 'a*'); - true

 function curry(callback) {
  return function curriedCallack(...args){
    if(!args.length){
      return callback();
    }
    return function(...newArgs) {
      if(!newArgs.length){
        return callback(...args);
      }
      return curriedCallack(...args, ...newArgs);
    };
  };
}

 
 // This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let nodeOneDepth = getDepth(topAncestor, descendantOne);
  let nodeTwoDepth = getDepth(topAncestor, descendantTwo);
  if(nodeOneDepth > nodeTwoDepth) {
     return getYoungAncestor(descendantOne, descendantTwo, nodeOneDepth - nodeTwoDepth);
  } else {
    return getYoungAncestor(descendantTwo, descendantOne, nodeTwoDepth - nodeOneDepth);
  }
}

function getDepth(top, node) {
  let depth =  0;
  while(top != node) {
      depth = depth + 1;
      node = node.ancestor;
  }
  return depth;
}
function getYoungAncestor(lowerNode, higherNode, diff) {
  while(diff > 0) {
    diff--;
    lowerNode = lowerNode.ancestor;
  }
  while(lowerNode != higherNode) {
     lowerNode = lowerNode.ancestor;
     higherNode = higherNode.ancestor;
  }
  return lowerNode;
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;


 
  return {
    targetSum, 
    overlappingIntervals, 
    longestRepeatingCharacterReplacement,
    partitionArray
  };
} 
