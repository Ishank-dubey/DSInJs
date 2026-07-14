function neetCode() {

	function validSudoku(grid) {
    let rowSet = {};
    let colSet = {};
    let square = {};

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let currentVal = grid[r][c];

            if (currentVal === ".") {
                continue;
            }

            let squareR = Math.floor(r / 3);
            let squareC = Math.floor(c / 3);
            let squareKey = `${squareR},${squareC}`;

            if (
                rowSet[r]?.has(currentVal) ||
                colSet[c]?.has(currentVal) ||
                square[squareKey]?.has(currentVal)
            ) {
                return false;
            }

            if (!rowSet[r]) {
                rowSet[r] = new Set();
            }

            if (!colSet[c]) {
                colSet[c] = new Set();
            }

            if (!square[squareKey]) {
                square[squareKey] = new Set();
            }

            rowSet[r].add(currentVal);
            colSet[c].add(currentVal);
            square[squareKey].add(currentVal);
        }
    }

    return true;
}//Time complexity is constant O(1)

function searchInRotaedSortedArray(array, target) {
    let l = 0;
    let r = array.length - 1;
    while(l <= r) {
       let mid = Math.floor((l + r)/2);
        if(target == array[mid]) {
            return mid;
        }
        if(array[l] <= array[mid]) {/*left sorted portion*/
            if(target > array[mid] || target < array[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }else {/*right sorted portion*/
             if(target < array[mid] || target > array[r]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }   
        }
    }
    return -1;
}

//searchInRoatedSortedArray([4,5,6,7,0,1,2],0);
//4
	
function getDiameterOfTree(root) {
    let result = 0;
    function DFS(node) {
        if(!node) {
            return 0;
        }
        let leftD = DFS(node.left);
        let rightD = DFS(node.right);
        result = Math.max(result, leftD + rightD);
        return 1 + Math.max(leftD, rightD);
    }
    DFS(root);
    return result;
} 
	
	class MergeKSortedLLSolution {
    
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        const minHeap = new MinPriorityQueue((x) => x.val);
        for (let list of lists) {
            if (list != null) minHeap.enqueue(list);
        }

        let res = new ListNode(0);
        let cur = res;
        while (minHeap.size() > 0) {
            let node = minHeap.dequeue();
            cur.next = node;
            cur = cur.next;

            node = node.next;
            if (node != null) {
                minHeap.enqueue(node);
            }
        }
        return res.next;
    }
}
	function mergeTwoSortedLinkedLists(head1, head2) {
    let dummy = {data:-1, next:null};
    let tail = dummy;
    while(head1 && head2) {
        if(head1.val < head2.val) {
            tail.next = head1;
            head1 = head1.next;
        } else{
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }
    if (head1) {
        tail.next = head1;
    }
    if (head2) {
        tail.next = head2;
    }
    return dummy.next;
}

	function generateParanthesis(N) {
    let result = [];
    function DFS(open, close, expr) {
        if(open == N && close == N) {
            result.push(expr);
            return 1;
        }
        if(open < N) {
            DFS(open + 1, close, expr + "(");
        }
        if(close < open) {
            DFS(open, close + 1,expr + ")");
        }
    }
    DFS(0,0,"");
    return result;
}
	//generateParanthesis(3)
	// ['((()))', '(()())', '(())()', '()(())', '()()()']

	function jumpGame(array) {
        
        let needed = array.length - 1;
    for(let i=array.length - 1;i >= 0;i--) {
        if(needed - i <= array[i] ) {
           needed = i;    
        }
    }
    return needed == 0;
} 
//jumpGame([2,3,1,0,4])
//true

	function removeNthNodeFromEndOfAlnkedList(head, N) {
    let dummy = {data:0, next:head};
    let left = dummy;
    let right = head;
    while(n > 0 ) {
        n--;
        right = right.next;
    }
    while(right) {
        left = left.next;
        right  = right.next;
    }
    left.next = left.next.next;
    return dummy.next;
}//spiralMatrix([[1,2,3],[4,5,6],[7,8,9]])
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

function letterCombinationOfAPhoneNumber(digits) {
    let mapOfCharacters = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    };
    let result = [];
    function backtrackingFn(i, currentStr) {
        if(currentStr.length == digits.length) {
            result.push(currentStr);
        } else {
            for(let char of mapOfCharacters[digits[i]]) {
                backtrackingFn(i + 1, currentStr + char);
            }
        }
    }
    if(digits.length) {
        backtrackingFn(0, "");
    }
    return result;
}//letterCombinationOfAPhoneNumber([2,3]);//O(4^n) time, O(n) in space
/*[
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf"
]*/

	
	function Sum3(array) {
    let result = [];
    let sortedArray = array.sort((a, b) => a - b);

    for (let i = 0; i < sortedArray.length; i++) {
        if (i >= 1 && sortedArray[i] === sortedArray[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = sortedArray.length - 1;

        while (l < r) {
            let sumCurrent = sortedArray[i] + sortedArray[l] + sortedArray[r];

            if (sumCurrent > 0) {
                r--;
            } else if (sumCurrent < 0) {
                l++;
            } else {
                result.push([sortedArray[i], sortedArray[l], sortedArray[r]]);

                l++;
                while (l < r && sortedArray[l] === sortedArray[l - 1]) {
                    l++;
                }
            }
        }
    }

    return result;
}//Sum3([-1,0,1,2,-1,-4])
/*[
    [
        -1,
        -1,
        2
    ],
    [
        -1,
        0,
        1
    ]
]*/

	function rottenOranges(grid) {
    let queue = [];
    let ROW = grid.length;
    let COL = grid[0].length; 
    let fresh = 0;
    let time = 0;
    for(let i=0;i < ROW;i++) {
        for(let j=0;j < COL;j++) {
            if(grid[i][j] == 1) {
                fresh ++;
            } else if(grid[i][j] == 2){
                queue.push([i, j]);
            }
        }
    }
    while(queue.length && fresh >0) {
        let length = queue.length;
        for(let i=0;i < length;i++) {
            let [rx, ry] = queue.shift();
            for([dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
                   let newx = rx + dx;
                    let newy = ry + dy;
                if( newx >= 0 && newy >=0 && newx < ROW && newy < COL && grid[newx][newy] == 1) {
                grid[newx][newy] = 2;
                queue.push([newx, newy]);
                fresh --;
            }
            }
        }
        time ++;
    } 
    return fresh ==0 ? time : -1;
}//rottenOranges([[2,1,1,],[1,1,0],[0,1,1]])
// 4

	
	function findAllPathsFromSourceToTarget(graph, target, edges, start) {
    	let visited = [];
    	let path = [];
    	let paths = [];
    	for(let [src, dest] of edges) {
        	if(!graph[src]) {
            graph[src] = [dest];
        	} else {
            	graph[src].push(dest);
        	}
    }
    function DFS(node) {
        path.push(node);
        visited[node] = true;
        if(node == target) {
            paths.push([...path]);
        }else {
        for(let adj of graph[node] || []) {
            if(!visited[adj]) {
                DFS(adj);
            }
        }
        }
        visited[node] = false;
        path.pop();
    }
    DFS(start);
    return paths;
}
	function findPaths(maze) {
    const n = maze.length;
    const result = [];
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    const directions = [
        [1, 0, "D"],
        [0, -1, "L"],
        [0, 1, "R"],
        [-1, 0, "U"]
    ];

    function dfs(row, col, path) {
        if (row === n - 1 && col === n - 1) {
            result.push(path);
            return;
        }

        visited[row][col] = true;

        for (const [dr, dc, move] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 &&
                newRow < n &&
                newCol >= 0 &&
                newCol < n &&
                maze[newRow][newCol] === 1 &&
                !visited[newRow][newCol]
            ) {
                dfs(newRow, newCol, path + move);
            }
        }

        visited[row][col] = false;
    }

    if (maze[0][0] === 1) {
        dfs(0, 0, "");
    }

    return result;
}
	const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];
	//[ 'DDRDRR', 'DRDDRR' ]


	

console.log(findPaths(maze));
	function buildBinaryTreeFromPostOrderAndInOrderLinearTime(post, inorder) {
    let inorder_map = {};
    for(let i=0;inorder.length;i++){
        inorder_map[inorder[i]] = i;
    }
    function hepler(l, r) {
        if(l > r) {
            return null;
        }
        let data = post.pop();
        let node = {data};
        let mid = inorder_map[data];
        node.right = helper(mid+1, r);
        node.left = helper(l, mid - 1);
        return node;
    }
}
function constructBinaryTreefromInorderandPreorderTraversalLinear(preorder, inorder) {
    const inorderIndex = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderIndex.set(inorder[i], i);
    }

    function build(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) {
            return null;
        }

        const data = preorder[p1];
        const node = { data, left: null, right: null };

        const mid = inorderIndex.get(data);
        const leftSize = mid - i1;

        node.left = build(
            p1 + 1,
            p1 + leftSize,
            i1,
            mid - 1
        );

        node.right = build(
            p1 + leftSize + 1,
            p2,
            mid + 1,
            i2
        );

        return node;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
}

	function buildFromPreorderPostOrder(preorder, postorder) {
    let postOrderMap = {};
    for(let i in postorder) {
        postOrderMap[postorder[i]] = i;
    }
    function DFS(i1, i2, j1, j2) {
        if(i1 > i2 || j1 > j2) {
            return null;
        }
        let data = preorder[i1];
        let node = {data};
        if(i1 != i2) {
            let left_val = preorder[i1 + 1];
            let mid = postOrderMap[left_val];
            let left_size = mid - j1 + 1;
            node.left = DFS(i1 + 1, i1 + left_size, j1, mid);
            node.right = DFS(i1 + left_size + 1, i2, mid + 1, j2 - 1);
        }
        return node;
    }
		 return DFS(0, preorder.length - 1, 0, postorder.length - 1);
}
	
	function buildBSTFromPostOrderAndInorder(postOrder, inOrder) {
    function DFS(postO, inO) {
        if(inO.length == 0) {
            return null;
        }
        let data = postO.pop();
        let node = {data};
        let index = inO.indexOf(data);
        node.right = DFS(postO, inO.slice(index + 1));
        node.left = DFS(postO, inO.slice(0, index));
        return node;
    }
    return DFS(postOrder, inOrder);
}//buildBSTFromPostOrderAndInorder([9,15,7,20,3], [9,3,15,20,7])
/*
    "data": 3,
    "right": {
        "data": 20,
        "right": {
            "data": 7,
            "right": null,
            "left": null
        },
        "left": {
            "data": 15,
            "right": null,
            "left": null
        }
    },
    "left": {
        "data": 9,
        "right": null,
        "left": null
    }
}*/

	function containerWithMostWater(array) {
    //array is the list of heights at the indexes coordinate
    let left = 0;
    let right = array.length - 1;
    let area = 0;
    while(left < right) {
        let currentArea = (right - left) * Math.min(array[left], array[right]);
        area = Math.max(currentArea, area);
        if(array[left] < array[right]) {
            left ++;
        }
        else {
          right --;    
        }
    }
    return area;
}
	//containerWithMostWater([1,8,6,2,5,4,8,3,7]); = 49


	function goodNodes(root) {
    function DFS(node, currentMax) {
        if(!node) {
            return 0;
        }
        let result = 0;
        if(node.data >= currentMax){
            result = 1;
        }
        currentMax = Math.max(currentMax, node.data);
        return result + DFS(node.left, currentMax) + DFS(node.right, currentMax);
    }
    return DFS(root, root.data);
}
	/*
	let node1 = {data:1, left:null, right:null};
let node3 = {data:3, left:null, right:null};
node3.left = node1;
root= node3;


let node4 = {data:4, left:null, right:null};
let node12=  {data:1, left:null, right:null};
let node5 = {data:5,left:null, right:null};
node4.right = node5;
node4.left = node12;
node3.right = node4;
node1 .left = {data:3, left:null, right:null};
goodNodes(root);// 4
O(n) - time
O(h) - space
	
	
	
	*/

	function reverseInteger(x) {
    const MIN = - Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;
    let result = 0;
    while(x) {
        let digit = x % 10;
        x = Math.floor(x / 10);
        if(result == Math.floor(MAX / 10) && digit > MAX % 10 ||
          result > Math.floor(MAX / 10)
          ) {
            return 0;
          } 
        if(result == Math.floor(MIN / 10) && digit > MIN % 10 ||
          result < Math.floor(MIN / 10)
          ) {
            return 0;
          } 
        result = result * 10 + digit;
    }
    return result;
}

function encode(number) {
    let   _chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let result = '';
    while(number){
        let digitIndex = number % 64;
        let char = _chars[digitIndex];
        result = char + result;
        number = Math.floor(number / 64); 
    }
    return result;
}
function decode(base64Str) {
    let   _chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let result = 0;
    for(let i=0;i < base64Str.length;i++){
        let char = base64Str[i];
        let index = _chars.indexOf(char);
        result = result * 64 + index;
    }
    return result;
}

function isSumRec(array, target) {
    let caching = {};
    function DFS(idx, current) {
        if(current == target ) {
            return true;
        }
        if(idx == array.length || current > target) {
            return false;
        } 
        if(caching[idx+''+current] != undefined) {
            caching[idx+''+current];
        }
        if(array[idx] > target) {
            caching[idx+''+current] = DFS(idx + 1, current);
        } else {
            caching[idx+''+current] =  DFS(idx + 1, current) || DFS(idx + 1, current + array[idx]);
        }
    return caching[idx+''+current];
    }
    return DFS(0, 0);
}//isSumRec([3, 34, 4, 12, 5, 2], 9) - true


	function createDom(root) {
  const node = document.createElement(root.type);
  
  if(root.attributes != null)
  for([key, value] of Object.entries(root.attributes)){
    node.setAttribute(key, value);
  }
  root.children?.forEach(child => {
    node.append(typeof child === 'string' ? child : createDom(child));
  });
  return node;
}


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

// Do not edit the line below.



	function coinChange2(coins, sum){
    let cache = {};  
    function DFS(idx, currentSum){
        if(currentSum == sum) {
            return 1;
        }
        if(currentSum > sum) {
              return 0;
          }
        if( idx>= coins.length) {
            return 0;
        }
        
        if(cache[idx+''+currentSum]) {
            return cache[idx+''+currentSum];
        }
        cache[idx+''+currentSum] = DFS(idx, currentSum + coins[idx]) + DFS(idx + 1, currentSum);
        return cache[idx+''+currentSum];
      }
    return DFS(0, 0);
}//coinChange2([1,2,5], 5)
// 4
	
	function addTwoNumbers(head1, head2) {
    let carry = 0;
    let outputHead = {};
    while(head1 || heade2 || carry) {
        let val1 = head1 ? head1.data: 0;
        let val2 = head2 ? head2.data: 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let val = sum % 10;
        outputHead.next = {data: val};
        
        outputHead = outputHead.next;
        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
    }
    return outputHead.next;
}

	function longestPalindromicSubString(str) {
    let result = '';
    let resLength = 0;
    for(let i=0;i < str.length;i++) {
        let left = i;
        let right = i;
        while(left >=0 && right < str.length && str[left] == str[right]) {
            if(right - left + 1 > resLength ){
                resLength = right - left + 1;
                result = str.substring(left, right + 1);
            }
            left --;
            right ++;
            //console.log(result);
        }
    }

    //Even length str
    for(let i=0;i < str.length;i++) {
        let left = i;
        let right = i + 1;
        while(left >=0 && right < str.length && str[left] == str[right]) {
            if(right - left + 1 > resLength ){
                resLength = right - left + 1;
                result = str.substring(left, right + 1);
            }
            left --;
            right ++;
            //console.log(result);
        }
    }
    return result;
}

	//longestPalindromicSubString('aba') - aba
	//longestPalindromicSubString('cbbd') - bb

function mediaOfTwoSortedArrays(array1, array2) {
     let left = array2;
     let right = array1;
     if(array1.length < array2.length) {
         left = array1;
         right = array2;
     }
    let total = array1.length + array2.length;
    let half = Math.floor(total / 2);
    let lIdx = 0;
    let rIdx = left.length - 1;
    //let k = 1;//debug related code
    while (true) {
        
        let i = Math.floor((lIdx + rIdx) / 2);
        let j = half - (i + 1) - 1; // i + 1 indicates the length of the left partition of the left array, we need the j to be an index half - (i + 1) is a length so to get the index we do -1
        
        let leftLeft = - Infinity;
        if(i >= 0 ) {
            leftLeft = left[i];
        }
        let leftRight = Infinity;
        if(i + 1 < left.length) {
            leftRight = left[i + 1];
        }
        
        let rightLeft = -Infinity;
        if(j >=0 ) {
            rightLeft = right[j];
        }
        let rightRight = Infinity;
        if(j + 1 < right.length) {
            rightRight = right[j + 1];
        }
        console.log(leftLeft, leftRight, rightLeft, rightRight, j);
        if(leftLeft < rightRight && rightLeft < leftRight){
            if(total % 2 ==0 ) {
                return (Math.max(leftLeft, rightLeft) + Math.min(leftRight, rightRight)) / 2;
            } else{
                return Math.min(leftRight, rightRight);
            } 
        } else if(leftLeft > rightRight) {
            rIdx = i - 1;
        }else {
            lIdx = i + 1;
        }
    }
}
//mediaOfTwoSortedArrays([1, 3], [2]);

//2
//mediaOfTwoSortedArrays([1, 2], [3, 4]);
//2.5
	
function longestSubstringWithoutRepeating(str) {
    let left = 0;
    let right = 0;
    let set = new Set();
    let result = 0;
    for(;right < str.length;right++) {
        while(set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        result = Math.max(result, right - left + 1);
    }
    return result;
}
	//longestSubstringWithoutRepeating('abcabcbb'); --- 3
	
function twoSum(array, sum) {
    let map = {};
    for(let i=0;i < array.length;i++) {
        map[array[i]] = i;
    }
    let result = [];
    for(let j=0;j < array.length ;j++) {
        let diff = sum - array[j];
        if(map[diff] != undefined && map[diff] != j) {
            result.push(j);
            result.push(map[diff]);
            return result;
        }
    }
    return result;
}

//twoSum([2,7,11,15], 9)
// [0, 1]
//twoSum([3,2,4], 6)
// [1, 2]
//twoSum([3,3], 6)
// [0, 1]
	
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  // Write your code here.
  if(preOrderTraversalValues.length == 0){
    return null;
  }
  let currentValue = preOrderTraversalValues[0];
  let rightArrayIdx = preOrderTraversalValues.length;
  for(let i=1;i < preOrderTraversalValues.length;i++) {
    if(preOrderTraversalValues[i] >= currentValue){
      rightArrayIdx = i;
      break;
    }
  }
  let leftTreeArray = preOrderTraversalValues.slice(1, rightArrayIdx);
  let rightArray = preOrderTraversalValues.slice(rightArrayIdx);

  let leftTreeRootNode = reconstructBst(leftTreeArray);
  let rightTreeRootNode = reconstructBst(rightArray);
  return new BST(currentValue, leftTreeRootNode, rightTreeRootNode);
}
	//construct a BST from Pre ordered traversal array
	

class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

function insert(root, word) {
    let curr = root;

    for (let ch of word) {
        if (!curr.children[ch]) {
            curr.children[ch] = new TrieNode();
        }

        curr = curr.children[ch];
    }

    curr.isWord = true;
}

function wordBreak(s, wordDict) {
    let root = new TrieNode();

    for (let word of wordDict) {
        insert(root, word);
    }

    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
        if (!dp[i]) {
            continue;
        }

        let curr = root;

        for (let j = i; j < n; j++) {
            let ch = s[j];

            if (!curr.children[ch]) {
                break;
            }

            curr = curr.children[ch];

            if (curr.isWord) {
                dp[j + 1] = true;
            }
        }
    }

    return dp[n];
}

	//console.log(wordBreak("leetcode", ["leet", "code"])); 
// true

//console.log(wordBreak("applepenapple", ["apple", "pen"])); 
// true

//console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); 
// false
	
	function allNodesDistanceKinBST(root, target, K) {
    let graph = {};

    function getGraph(node) {
        let queue = [];
        queue.push(node);

        while (queue.length) {
            let n = queue.shift();

            if (!graph[n.data]) {
                graph[n.data] = [];
            }

            if (n.left) {
                graph[n.data].push(n.left.data);

                if (!graph[n.left.data]) {
                    graph[n.left.data] = [];
                }

                graph[n.left.data].push(n.data);
                queue.push(n.left);
            }

            if (n.right) {
                graph[n.data].push(n.right.data);

                if (!graph[n.right.data]) {
                    graph[n.right.data] = [];
                }

                graph[n.right.data].push(n.data);
                queue.push(n.right);
            }
        }
    }

    getGraph(root);

    let visited = {};
    let q = [];
    let result = [];

    q.push([target, 0]);
    visited[target] = true;

    while (q.length) {
        let [node, dist] = q.shift();

        if (dist === K) {
            result.push(node);
        } else {
            for (let neigh of graph[node] || []) {
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.push([neigh, dist + 1]);
                }
            }
        }
    }

    return result;
}
	
	function numDecodings(encoded){
    let dp = {[encoded.length]: 1};
    function DFS(i) {
        if(dp[i]) {
            return dp[i];
        }
        if(encoded[i] == '0') {
            return 0;
        }
        let result = DFS(i + 1);
        if(i + 1 < encoded.length && ((encoded[i] =='2' && '0123456'.includes(encoded[i + 1])) || encoded[i] == '1')) {
            result = result + DFS(i + 2);
        }
        dp[i] = result;
        return result;
    }
    return DFS(0);
}// numDecodings('226') - 3
	// numDecodings('12') - 2

function detectSquare() {
    let pointsCount = new Map();
    function add(point) {
        let key = point[0]+','+point[1];
        if(pointsCount.get(key)) {
            pointsCount.set(pointsCount.get(key) + 1);
        } else {
            pointsCount.set(key, 1);
        }
    }
    function getPoint(x, y) {
        let key = x+','+y;
        return pointsCount.get(key) ? pointsCount.get(key) : 0;
    }
    function count(px, py) {
        let result = 0;
        console.log('out');
        for(let [key, value] of pointsCount) {
            console.log('dd');
            let [x, y] = key.split(',');
            x = parseInt(x);
            y = parseInt(y);
            if(Math.abs(x - px) != Math.abs(y - py) && x == px && y == py){
                continue;
            }
            result = result  + getPoint(x, py) * getPoint(px, y);
        }
        return result;
    }
    return {
        add, count
    };
}
	
function interLeavingStringsDP(str1, str2, str3) {
    let DP = [];
    for(let i=0;i <= str1.length;i++){
        DP.push(new Array(str2.length + 1).fill(false));
    }
    DP[str1.length][str2.length] = true;
    for(let r=str1.length;r >=0 ;r--) {
        for(let c=str2.length;c >=0 ;c--) {
            if(r < str1.length && str1[r] == str3[r + c] && DP[r + 1][c]){
                DP[i][j] = true;
            }
            if(c < str2.length && str2[c] == str3[r + c] && DP[r][c + 1]) {
                DP[i][j] = true;
            }
        }
    }
    return DP[0][0];
}

	function interLeavingStringsRecurssion(str1, str2, str3) {
    let DP = {};
    function interLeavingStringsInner(i, j){
        if(i == str1.length && j == str2.length) {
            return true;
        }
        if(DP[i+''+j] != undefined) {
            return DP[i+''+j];
        }
        if(i < str1.length && str1[i] == str3[i+j] && interLeavingStringsInner(i + 1, j)) {
            return true;
        }
        if(j < str2.length && str2[j] == str3[i+j] && interLeavingStringsInner(i, j + 1)) {
            return true;
        }
        DP[i+''+j] = false;
        return false;
    }
    return interLeavingStringsInner(0, 0);
}

	function maxAreaOfIsland(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let visited = {};
    function DFS(row, col) {
        if(row < 0 || row >= ROWS || col < 0 || col >= COLS || visited[row+''+col]) {
            return 0;
        }
        visited[row+''+col] = true;
        return 1 + DFS(row + 1, col) + DFS(row - 1, col) + DFS(row, col - 1) + DFS(row, col + 1);
    }
    let area = 0;
    
    for(let i=0;i < ROWS;i++) {
       for(let j=0;j < COLS;j++) {
           area = Math.max(DFS(i, j));
       }
    }
    return area;
}

	function validBST(root){
    function isValidBST(node, min,max) {
        if(!node) {
            return true;
        }
        if(node.data > max || node.data < min) {
            return false;
        }
        return isValidBST(node.left, min, node.data) && isValidBST(node.right, node.data, right);
    }
        return isValidBST(root, -Infinity, Infinity);
}

	function sameTree(node1, node2){
    if(!node1 && !node2) {
        return true;
    }
    if(!node1 || !node2 || node1.data != node2.data) {
        return false;
    }
    return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
}

	function binaryLevelOrderTraversal(root) {
    let queue = [];
    let result = [];
    queue.push(root);
    while(queue.length){
        let length = queue.length;
        let level = [];
        for(let i=0;i < length;i++) {
            let node = queue.shift();
            level.push(node.data);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }    
        }
        result.push(level);
    }
}

	function binaryLevelOrderTraversal2(root) {
    let queue = [];
    let result = [];
    queue.push(root);
    while(queue.length){
        let length = queue.length;
        let level = [];
        for(let i=0;i < length;i++) {
            let node = queue.shift();
            if(node) {
                level.push(node.data);
                queue.push(node.left);
                queue.push(node.right);   
            }    
        }
        result.push(level);
    }
}

	function lastStoneWeight(stones) {
    stones.sort((a, b) => b - a);
    while(stones.length > 1) {
        let first = stones.shift();
        let second = stones.shift();
        if(first - second > 0 ) {
            stones.push(first - second);
            stones.sort((a, b) => b - a);
        }
    }
    return stones[0];
} 
	//lastStoneWeight([2,7,4,1,8,1]) - 1
	//lastStoneWeight([2,7,4,1,8,1]) - 1

	function maximumDepthOfTree(root) {
    if(!node){
        return 0;
    }
    let leftDepth = maximumDepthOfTree(root.left);
    let rightDepth= maximumDepthOfTree(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}


	function macDepthBFS(root) {
    let heap = [];
    let dist = 0;
    heap.push(root);
    while(heap.length) {
        let length = heap.length;
        for(let i=0;i < length;i++) {
            let node = heap.shift();
            if(node.left) {
                heap.push(node.left);
            }
            if(node.right) {
                heap.push(node.right);
            }
        }
        dist++;
    }
    return dist;
}
	function constructBinaryTreefromInorderandPreorderTraversal(preorder, inorder) {
    if(!preorder.length || !inorder.length) {
        return null;
    }
    let data =  preorder[0];
    let node = {data, left:null, right: null};
    let mid = inorder.indexOf(data);
    node.left = constructBinaryTreefromInorderandPreorderTraversal(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    node.right = constructBinaryTreefromInorderandPreorderTraversal(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length));
    return node;
}

function taskSchedular(array, N) {
    let maxHeapArray = [];
    let queue = [];

    function createHeap(input) {
        input.sort((a, b)=> b - a );
        maxHeapArray = input;
    }
    function addToHeap(item) {
        maxHeapArray.push(item);
        maxHeapArray.sort((a, b)=> b - a );
    }
    function getFromHeap() {
        return maxHeapArray.shift();
    }
    let time = 0;
    let countMap = {};
    for(let item of array) {
        countMap[item] = countMap[item] ? countMap[item] + 1: 1; 
    }
    createHeap(Object.values(countMap));//create the max heap, queue is empty
    while(maxHeapArray.length || queue.length) {
        time++;
        if(maxHeapArray.length) {
            let taskCount = getFromHeap();
            taskCount = taskCount - 1;
            if(taskCount) {
                queue.push([taskCount, time + N]);
            }
        }
        if(queue.length && time == queue[0][1]) {
            addToHeap(queue.shift()[0]);
        } 
    }
    console.log(countMap);
    return time;
}//taskSchedular(['A', 'A', 'A', 'B', 'B', 'B'], 2), 8
	function formBinaryTree(array) {
    function formBinaryTreeInner(left, right) {
        if(left > right) {
            return null;
        }
        let mid = Math.floor((left + right) / 2);
        let node = {data: array[mid], left: null, right : null};
        node.left = formBinaryTreeInner(left, mid - 1 );
        node.right = formBinaryTreeInner(mid + 1, right );
        return node;
    }
    return formBinaryTreeInner(0, array.length - 1);
}

function isBalancedBinaryTree(root) {
    function isBalancedBinaryTreeDFS(node) {
        if(!node) {
            return {depth:0, isBalanced : true};
        }
        let left = isBalancedBinaryTreeDFS(node.left);
        let right = isBalancedBinaryTreeDFS(node.right);
        let isBalanced = left.isBalanced && right.isBalanced && Math.abs(left.depth - right.depth); //the difference in the left and right node depth is the factor for the balanced tree not the depth as it is which can be bigger
        return {isBalanced, depth: 1 + Math.max(left.depth, right.depth)};
    }
}

	function binaryTreeMaxSumPath(root) {
    let result = 0; 
    function DFS(node) {
        if(!node) {
            return 0;
        }
        let leftLength = DFS(node.left);
        let rightLength = DFS(node.right);
        leftLength = Math.max(leftLength, 0);
        rightLength = Math.max(rightLength, 0);
        result = Math.max(result, node.value + leftLength + rightLength);
        return Math.max(node.value + leftLength , node.value +  rightLength);
    }
}

	
function distinctSubsequences(src, target) {
    let cache = {};
    function dfs(s, t) {
        if(s == src.length && t == target.length) {
            return 1;
        }
        if(s == src.length){
            return 0;
        }
        if(t == target.length) {
            return 1;
        }
        if(cache[s+''+t]) {
            return cache[s+''+t];
        }
        if(src[s] == target[t]){
            cache[s+''+t] = dfs( s+1, t) + dfs( s+1, t + 1);
        } else {
            cache[s+''+t] = dfs( s+1, t);
        }
        return cache[s+''+t];
    }
    return dfs(0, 0);
}//
	//distinctSubsequences("rabbbit", "rabbit")
	//3

	function  bestTimetoBuyandSellStock(array) {
    let left = 0;
    let right = 0;
    let result = 0;
    for(;right < array.length;right++) {
        if(array[right] > array[left]) {
            result = Math.max(result, array[right] - array[left]);
        }else {
            left = right;
        }
    }
    return result;
}
	//bestTimetoBuyandSellStock([7, 1, 5, 3, 6, 4])
    // 5
function gasStation(gas, cost) {
    if(gas.reduce((accumulator, currentValue) => accumulator + currentValue, 0) < cost.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) {
        return false;
    }
    let total = 0;
    let result = 0;
    for(let i=0;i < cost.length;i++){
        console.log('ss');
        total= total + (gas[i] - cost[i]);
        if(total < 0 ) {
            total = 0;
            result = i + 1;
            
        }
    }
    return result;
}

//gasStation([1,2,3,4,5], [3,4,5,1,2]) - 3
	
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const left = [];
        const star = [];
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            if (ch === '(') {
                left.push(i);
            } else if (ch === '*') {
                star.push(i);
            } else {
                if (left.length === 0 && star.length === 0) {
                    return false;
                }
                if (left.length > 0) {
                    left.pop();
                } else {
                    star.pop();
                }
            }
        }

        while (left.length > 0 && star.length > 0) {
            if (left.pop() > star.pop()) return false;
        }
        return left.length === 0;
    }
}

	
function palindromeWithAlphaNumeric(str) {
    function isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
         return (
        (code > 47 && code < 58) ||   // Numeric (0-9)
        (code > 64 && code < 91) ||   // Uppercase (A-Z)
        (code > 96 && code < 123)     // Lowercase (a-z)
  );
    }

    let l = 0;
    let r = str.length - 1;
    while(l < r) {
        while(l < r && !isAlphaNumeric(str[l])) {
            l++;
        } 
        while(l < r && !isAlphaNumeric(str[r])) {
            r--;
        } 
        if(str[l].toLowerCase() != str[r].toLowerCase()){
            return false;
        }
        l = l + 1;
        r = r - 1;
    }
    return true;
}
//undefined
//palindromeWithAlphaNumeric('aba')
//true
//palindromeWithAlphaNumeric('abA')
//true
	
function findTheLongestConsecutiveList(array) {
    let newSet = new Set(array);
    let result = 0;
    for(let item of array) {
        let length = 0;
        if(!newSet.has(item - 1)) {
            while(newSet.has( item + length)) {
                length++;
            }
        }
        result = Math.max(result, length);
    }
    return result;
}//findTheLongestConsecutiveList([0,3,7,2,5,8,4,6,0,1])
	// 9
	
function surroundedRegions(grid) {
    let ROW = grid.length;
    let COL = grid[0].length;
    function capture(row, col) {
        if(row == ROW || row < 0 || col == COL || col <0 || grid[row][col] != 'O') {
            return;
        }
        grid[row][col] = "T";
        capture(row + 1, col);
        capture(row - 1, col);
        capture(row, col - 1);
        capture(row, col + 1);
    
    }
    for(let r=0;r < ROW;r++) {
        for(let c=0;c < COL;c++) {
            if(r ==0 || r == ROW-1 || c ==0 || c == COL - 1 ) {
                capture(r, c);
            }
        }
    }
    return grid;
}
	//let grid = [
	//['x','x','x','x'],
	//['x','O','O','x'],
	//['x','x','O','x'],
	//['x','O','x','x']
	//]
	//surroundedRegions(grid)
	//['x', 'x', 'x', 'x']
	//['x', 'O', 'O', 'x']
	//['x', 'x', 'O', 'x']
	//['x', 'T', 'x', 'x']

	
	function cloneGraph(root) {
    let oldToNew = new Map();
    function cloneDFS(node){
        if(oldToNew.get(node)) {
            return oldToNew.get(node);
        }
        let newNode = {data: node.data, neighbours:[]};
        oldToNew.set(node, newNode);
        for(let neigh of node.neighbours) {
            newNode.neighbours.push(cloneDFS(neigh));
        }
        return newNode;
    }
}

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
			break;
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
