var head = null;

function findBiggest(array){
	let k = 0, len = array.length;
	for(let i=0;i < len;i++){
		if(array[k] < array[i]){
			k = i;
		}
	}
	console.log("Biggest Number is ", array[k]);
}//O(n)

function findSmallest(array){
	let k = 0, len = array.length;
	for(let i=0;i < len;i++){
		if(array[k] > array[i]){
			k = i;
		}
	}
	console.log("Smallest Number is ", array[k]);
}


function fibo(N){
	if(N==0 || N===1){
		return N;
	}else{
		var result = fibo(N-1) + fibo(N-2);
		return result;
	}
}//time complexity goes exponential- O(n^2), lower numbers are called again and again

function fiboWithoutRecurssion(N){
	var last = 1, lastToLast = 01, summation = 01;
	if(N == 0){
		return 0;
	}else if(N ==1){
		return summation;
	}else if(N==2){
		return summation;
	}
	for(let i=3; i <= N; i++){
		summation = last + lastToLast;
		
		lastToLast = last;
		
		last = summation;
	}
	return summation;
}/*O(n) time complexity*/


function insertToLinkedList(arg){
	arg.next = head;
	head = arg;
}
function insertAtPosition(arg, K){
	let current = head;
	let previous = head;
	let pos = 1;
	let newNode = {data: arg, next:head};
	if(K==1 || !head){
		head = newNode;
		return;
	}
	while(current && pos < K){
		previous = current;
		current = current.next;
		pos++;
	}
	if(pos == K){
		previous.next = newNode;
		newNode.next = current;
	}
}

function insertToLinkedListAtLast(arg){
	if(!head){
	  head = arg;
	  head.next = null;
	  return;
	}
	var temp = head;
	while(temp.next){
		temp = temp.next;
	}
	temp.next = arg;
	arg.next = null;
}

function insertSorted(data){
	let newNode = {data, next:null};

	if(!head){
	   head = newNode;
	   return;
	}
	if(data <= head.data){
		newNode.next = head;
		head = newNode;
		return;
	}
	let current = head;
	let previous = head;
	while(current && current.data < data){
		  previous = current;
		  current = current.next;
	}
	previous.next = newNode;
	newNode.next = current;
}

function printLinkedList(){
	let current = head;
	while(current){
		console.log(current.data);
		current = current.next;
	}
}

function countLinkedListItems(){
	var count = 0, temp = head;
	while(temp){
		temp = temp.next;
		count++;
	}
	return count;
}

function findMiddleOfLL(){}

function formCircularLinkedList(N){
  var head = {data:1, next:null};
  var temp = head;
  for(let i = 2 ;i<=N; i++){
	  var newNode = {data:i, next:null};
	  temp.next = newNode;
	  temp = newNode;
  }
  temp.next = head;
  //console.log(head);
  return head;
}

function josepheusProblemViaCircularLL(N, M) {
	var head = formCircularLinkedList(N);
	var node = head;
	var parent = node;
	while(node.next != node){
		for(let i=1;i < M;i++){
			parent = node;
			node = node.next;
		}
		parent.next = node.next;
		node = parent.next;
	}
	return node.data;
}

function reverseLL(head, K){
	var previous = null;
	var current = head;
	var next;
	var count = 0;
	//if we want to reverse the entire LL than just have while(current){}
	while(count < K && current){
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
		count++;
	}
	return {previous, current};//previous is the head and current is the next to this new head
}
function reverseLLinGroups(K){
	head = reverseLLinGroupsInner(head);
	function reverseLLinGroupsInner(head) {
		if(!head){
			return head;
		}
		var {previous, current} = reverseLL(head, K);
		head.next = reverseLLinGroupsInner(current);
		return previous;
	}
}//O(n) in time and space


function printKNodesOfLinkedList(head, K){
	var temp = head;
	for(let i=0;i<K && temp ;i++){
		console.log(temp.data);
		temp = temp.next;
	}
	return temp;
}

/*
* Flatten the array that can have
 [1,2, [3,4, [5, 6]]] ---> [1,2,3,4,5]
 {a: [1,2, [3, 4]]} ----> {a:[1,2,3,4]}
*/
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
  
  
  /*
  * map, filter and reduce functions impls
  */
  Array.prototype.myMap = function (callback) {
	const result = [];
	for(let i=0;i < this.length;i++){
	  result.push(callback(this[i], i, this));
	}
	return result;
  };
  
  Array.prototype.myFilter = function (callback) {
	const result = [];
	for(let i=0;i < this.length;i++){
	  if(callback(this[i], i, this) === true){
		result.push(this[i]);
	  }
	}
	return result;
  };
  
  Array.prototype.myReduce = function (callback, initialValue) {
	let accumulator = initialValue;
	for(let i=0;i < this.length;i++){
		 if(initialValue === undefined && i===0){
			accumulator = this[i];
	  }else {
			 accumulator = callback(accumulator, this[i], i, this);
	   }
	}
	return accumulator;
  };

  
  /* 
   * 
   * custom this binding instead of call, bind, apply
   * 
   */
  Function.prototype.myCall = function (thisContext, ...args) {

	const symbol = Symbol();
	thisContext[symbol] = this;
	const result = thisContext[symbol](...args);
	delete thisContext[symbol];
	return result;
  };
  
  Function.prototype.myApply = function (thisContext, args = []) {
	return this.myCall(thisContext, ...args);
  };
  
  Function.prototype.myBind = function (thisContext, ...args) {
	return (...newArgs) => {
	  return this.myApply(thisContext, [...args, ...newArgs]);
	}
  };
  /*
   Custom Promisify 
  */
  function promisify(callback) {
	return function (...args){
	  return new Promise((res, rej) => {
		function handleResponse(error, value) {
		  if(error == null){
			res(value);
		  }else{
			rej(error);
		  }
		}
		callback.call(this, ...args, handleResponse);
	  });
	}
  }
  
  // Do not edit the line below.
  exports.promisify = promisify;
  
  
function stackFunction(){
  var stack = [];
  
  function pop(){
	  return stack.pop();
  }
  function push(arg){
	  stack.push(arg);
  }
  function isEmpty(){
	  return stack.length == 0;
  }
  function top(){
	  if (!isEmpty()) {
		  return stack[stack.length-1];
	  }else{
		  return -1;
	  }
	  
  }
  function createNewStack(arg){
	  stack = arg || [];
  }
  function get(){
	  return stack;
  }
  return {
	  pop, push, isEmpty, top, createNewStack, get
  }
}


function infixToPrefix(expression){
   let operatorObj = {
	   "+":1,
	   "-":1,
	   "*":2,
	   "/":2,
	   "^":3
   };
   function isOperator(character){
        return '+-/*^'.includes(character);
   }
   let stack = stackFunction();
   let output = "";  
   for(let i=0; i < expression.length; i++){
	   console.log('ss');
      if(!isOperator(expression.charAt(i))){
		  output = output + expression.charAt(i);
	  } else if(isOperator(expression.charAt(i))){
          while(!stack.isEmpty() && operatorObj[stack.top()] >= operatorObj[expression.charAt(i)]){
			output = output + stack.pop();
		  }
		  stack.push(expression.charAt(i));
	  }else if(expression.charAt(i) == '('){
		stack.push(expression.charAt(i));
	  }else if(expression.charAt(i) == ')'){
		while(!stack.isEmpty() && stack.top() != '('){
			output = output + stack.pop();
		  }
		  if(!stack.isEmpty() && stack.top() != '('){
            throw new Error();
		  }
		  stack.pop();
	  }
   }
   while(!stack.isEmpty()){
	output = output + stack.pop();
   }
   return output;
}

function postFixEvaluation(postFixExp){
	let stack = stackFunction();
	let operatorObj = {
		"+":1,
		"-":1,
		"*":2,
		"/":2,
		"^":3
	};
	function isOperator(character){
		 return '+-/*^'.includes(character);
	}
	for(let i=0;i < postFixExp.length;i++){
        if(!operatorObj[postFixExp.charAt(i)]){
             stack.push(postFixExp.charAt(i));
		}else{
			let operand1 = parseInt(stack.pop());
			let operand2 = parseInt(stack.pop());
			let result;
			if(postFixExp.charAt(i) == "+"){
				result = operand2 + operand1;
			}else if(postFixExp.charAt(i) == "-"){
				result = operand2 - operand1;
			}else if(postFixExp.charAt(i) == "*"){
				result = operand2 * operand1;
			}else if(postFixExp.charAt(i) == "/"){
				result = operand2 / operand1;
			}else if(postFixExp.charAt(i) == "^"){
				result = operand2 ^ operand1;
			}
			stack.push(result);
		}
	}
	return stack.top();
}

/*
*  1. Start from the right 
*  2. keep result string, stack
*  3. keep adding to the string for the character
*  4. for an operator do - if incoming character is more precendece then push it, if it has lesser
	  keep on poping till the smaller precedence operator is found and then push it, while popping
	  keep on adding the operator to the string
   5. If the closing bracket is found ')' please push it
   6. If the opening bracket is found i.e. '(' please start poping and adding to the string
   7. Pop remaining things from the stack and append to the results
   8. Reverse the result string
*/
function infixToPrefix(expression){
   let stack = stackFunction();
   let result = '';
   let operatorObj = {
	   "+":1,
	   "-":1,
	   "*":2,
	   "/":2,
	   "^":3
   };
   function isOperator(character){
	   return "+-*/^".includes(character);
   }
   for(let i=expression.length-1;i >=0 ;i--){
       if(!isOperator(expression.charAt(i))){
            result = result + expression.charAt(i); 
	   } else if(isOperator(expression.charAt(i))){
         while(!stack.isEmpty() && operatorObj[stack.top()] >= operatorObj[expression.charAt(i)]){
           result = result + stack.pop();
		 }
		 stack.push(expression.charAt(i));
	   } else if(expression.charAt(i) == ')'){
		   stack.push(expression.charAt(i));
	   } else if(expression.charAt(i) == '('){
		while(!stack.isEmpty() && stack.top() != ')'){
			result = result + stack.pop();
		  }
		  stack.pop();
	   }
   }
   while(!stack.isEmpty()){
	result = result + stack.pop();
   }
   let stringArray = result.split('');
   stringArray = stringArray.reverse();
   return stringArray.join('');//please reverse
}


function preFixEvaluation(postFixExp){
	let stack = stackFunction();
	let operatorObj = {
		"+":1,
		"-":1,
		"*":2,
		"/":2,
		"^":3
	};
	function isOperator(character){
		 return '+-/*^'.includes(character);
	}
	for(let i=postFixExp.length-1;i >=0 ;i--){
        if(!operatorObj[postFixExp.charAt(i)]){
             stack.push(postFixExp.charAt(i));
		}else{
			let operand1 = parseInt(stack.pop());
			let operand2 = parseInt(stack.pop());
			let result;
			if(postFixExp.charAt(i) == "+"){
				result = operand2 + operand1;
			}else if(postFixExp.charAt(i) == "-"){
				result = operand1 - operand2;
			}else if(postFixExp.charAt(i) == "*"){
				result = operand2 * operand1;
			}else if(postFixExp.charAt(i) == "/"){
				result = operand1 / operand2;
			}else if(postFixExp.charAt(i) == "^"){
				result = operand1 ^ operand2;
			}
			stack.push(result);
		}
	}
	return stack.top();
}

function ratInMaze(matrix, dx, dy){
	var x = y = 0;
	var stack = stackFunction();
	stack.push({x, y, dir:0});
	var rows = matrix.length;
	var cols = matrix[0].length;
	var visitable = [];
	for (let i=0;i < rows;i++){
		visitable[i] = [];
		for (let j=0;j < cols;j++) {
			visitable[i][j] = true;
		}
	}
	
	while(!stack.isEmpty()) {
		var obj = stack.pop();
		var i = obj.x, j = obj.y, dir = obj.dir;
		obj.dir = obj.dir+1;
		stack.push(obj);
		visitable[i][j] = false;
		if(i==dx && j==dy){
			return true;
		}
		
		if(dir==0){
			if(i > 0 && visitable[i-1][j] && matrix[i-1][j]==1){
				var node = {x:i-1, y:j, dir:0};
				
				stack.push(node);
			}
		} else if(dir==1){
			if(i < rows-1 && visitable[i+1][j] && matrix[i+1][j]==1){
				var node = {x:i+1, y:j, dir:0};
				//visitable[i+1][j] = false;
				stack.push(node);
			}
			
		} else if(dir==2) {
			if(j > 0 && visitable[i][j-1] && matrix[i][j-1]==1){
				var node = {x:i, y:j-1, dir:0};
				//visitable[i][j-1] = false;
				stack.push(node);
			}
		} else if(dir==3) {
			if(j < cols-1 && visitable[i][j+1] && matrix[i][j+1]==1){
				var node = {x:i, y:j+1, dir:0};
				//visitable[i][j+1] = false;
				stack.push(node);
			}
		} else {
			stack.pop(obj);
			visitable[i][j] = true;
		}	
	}
	return false;
}


var stack = stackFunction();


function findSpansWithStart(arg){
	var A= [];
	for(var i=0;i<arg.length;i++){
		var j = 1;
		while(j<=i && arg[i] >= arg[i-j]){
			j++;
		}
		A[i] = j;
	}
	return A;
}

function findSpansWithStack(arg){
	var stack = stackFunction();
	var A = [];
	stack.push(0);
	A[0] = 1;
	for(var i=1;i<arg.length;i++){
		while(!stack.isEmpty() && arg[stack.top()] <= arg[i]){
			stack.pop();
		}
		if(stack.isEmpty()){
			A[i] = i + 1;
		}else{
			A[i] = i - stack.top();
		}
		stack.push(i);
	}
	
	return A;
}

function reverseStack(arg){
	var stack = stackFunction();
	stack.createNewStack(arg);
	
	reverseStack1();
	
	function reverseStack1(){
		if(stack.isEmpty()){
			return;
		}
		var data = stack.pop();
		reverseStack1();
		reverseAgain(data);
	}
	
	function reverseAgain(data){
		
		if(stack.isEmpty()){
			stack.push(data);
			return;
		}
		
		var old  = stack.pop();
		reverseAgain(data);
		stack.push(old);
		
	}
	
	return stack.get();
}

function highestRectangularAreaInHistogram(arg){
	var stack = stackFunction(), finalArea = -1;
	let i=0;
	while(i<arg.length){
		if(stack.isEmpty() || arg[stack.top()] <= arg[i]){
			stack.push(i++);
		}else{
			let topValue = arg[stack.top()];
			stack.pop();
			let newArea = topValue*(i-1-stack.top());
			if(newArea > finalArea){
				finalArea = newArea;
			}
		}
	}
	
	while(!stack.isEmpty()){
		let topValue = arg[stack.top()];
		stack.pop();
		if(stack.isEmpty()){
			let newArea = topValue*i;
			if(newArea > finalArea){
				finalArea = newArea;
			}
		}else{
			let newArea = topValue*(i-1-stack.top());
			if(newArea > finalArea){
				finalArea = newArea;
			}
		}
	}
	return finalArea;
}

// Arrange all 'a's before 'b's
function arrangeTwoOfTwo(arg){
	console.log(arg);
	var a = 0, b = arg.length-1;
	while( a<=b ){
		if(arg[a]=='a'){
			a++;
		}else if(arg[a]=='b'){
			var temp = arg[b];
			arg[b] = arg[a];
			arg[a] = temp;
			b--;
		}
	}
	console.log(arg);
}

//arrange all 'a's before 'b's and 'b's before 'c's
function arrangeThreeOfThree(arg){
	console.log(arg);
	var a = 0, b = 0, c= arg.length-1;
	while( b<=c ){
		if(arg[b]=='b'){
			b++;
		}else if(arg[b]=='a'){
			let temp = arg[b];
			arg[b] = arg[a];
			arg[a] = temp;
			a++;b++;
		}else if(arg[b]=='c'){
			let temp = arg[b];
			arg[b] = arg[c];
			arg[c] = temp;
			c--;
		}
	}
	console.log(arg);
}
/*
 * Equilibrium point is the one that-
 * The sum of numbers earlier and the numbers after is the same
 * [1, 3, 5, 2, 2], the sum of numbers before 5 is 1+3=4, sum of numbers after 5 is 2+2=4
 * the position is index+1 = 2+1 = 3rd position
 * When there is only one element the position is 1
 * When there is none then position is -1 
 * */

function findEquilibrium(array, n) {
	let sum = 0;
    
    if(n == 1){
        return 1;
    }
    for(let i=0;i < n;i++){
        sum += array[i];
    }
    let localSum = array[0];
    for(let i=1;i < n;i++){
        if(localSum == sum - localSum - array[i]){
            return i+1;
        }
        localSum += array[i];
    }
    return -1;
}

function removeDuplicacyCharacters(str){
	let currentChar = str.charAt(0);
	let outPutStr = "";
	outPutStr = outPutStr.concat(currentChar);
	for(let i=1;i<str.length;i++){
		if(str.charAt(i)!=currentChar){
			currentChar = str.charAt(i);
			outPutStr = outPutStr.concat(currentChar);
		}
	}
	return outPutStr;
}

function removeRepeatingChars(str){
  var outputArray = [];
  var ptr = -1;
  var length = str.length;
  var i = 0;
  while(i < length){
	  if(ptr==-1 || str.charAt(i) != outputArray[ptr]){
		  ptr++;
		  outputArray[ptr] = str.charAt(i);
		  i++;
	  }else{
		  while(str.charAt(i) == outputArray[ptr]){
			  i++;
		  }
		  outputArray.pop();
		  
		  ptr--;
		  
	  }
  }
  ++ptr;
  outputArray[ptr] = '';
  return outputArray;
}


function fractionToDecimal(numerator,denominator){
    let apply = false;
    if((numerator < 0 && denominator >0) || (numerator > 0 && denominator < 0)){
         apply = true;
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
     let base = Math.floor(numerator / denominator);
     let mod = numerator % denominator;
     let str = base+".";
     let decimal;
     let map = {}; 
     let decStr='';
     let  index = 0;

     while(mod) {
          //console.log(index);
         if(map[mod] != undefined) {
               break;
         } else {
           //console.log(index, mod);
           map[mod] = index;
           mod = mod * 10;
           decStr = decStr + '' + Math.floor(mod/denominator); 
           mod =  mod % denominator;
}
index++;

}
if(mod){
  decStr = decStr.slice(0, map[mod]) + '('+decStr.slice(map[mod], decStr.length) + ')';
} 
//console.log(map);
     if(apply) {return '-'+ str + decStr;}
     return str + decStr;
}

function nextGreatestNumberWithForLoop(arg){
	for(let i=0;i<arg.length;i++){
		let j=i+1;
		while(j<arg.length){
			if(arg[i]<arg[j]){
				console.log('Next Greater Number for '+arg[i]+' is '+arg[j]);
				break;
			}
			j++;
		}
		if(j==arg.length){
			console.log("No greatest Next to "+arg[i]);
		}
	}
}

function nextGreatestWithStack(arg){
	var stack = stackFunction();
	stack.push(arg[0]);
	let index = 0;
	while(index < arg.length){
		let nextGreatest = arg[index];
		if(!stack.isEmpty()){
			let element = stack.pop();
			while(element < nextGreatest){
			  console.log("Next greatest for "+element+" is "+ nextGreatest);
			  if(!stack.isEmpty()){
				  element = stack.pop();
			  }else{
				  break;
			  }
			}
			if(element > nextGreatest){
				stack.push(element);
			}
		}
		stack.push(nextGreatest);
		index++;
	}
	
	while(!stack.isEmpty()){
		console.log("There is no next greater for "+stack.pop());
	}
}

function sequentialRemoval(parent, child){
	if(child.length > parent.length){
		return false;
	}
	var parentIndex = 0;
	var childIndex = 0;
	for(;parentIndex < parent.length && childIndex < child.length;parentIndex++){
		if(parent[parentIndex] == child[childIndex]){
			childIndex++;
		}
	}
	return childIndex == child.length ? true : false;
}

module.exports = {findBiggest : findBiggest, insertToLinkedList : insertToLinkedList,
		printLinkedList : printLinkedList, getHeadOfLinkedList: function(){return head;}, insertToLinkedListAtLast,
		countLinkedListItems, fiboWithoutRecurssion, fibo, formCircularLinkedList,reverseLLinGroups, josepheusProblemViaCircularLL,  printKNodesOfLinkedList, stack, findSmallest,
		findSpansWithStack, findSpansWithStart, reverseStack,arrangeTwoOfTwo, arrangeThreeOfThree
		,highestRectangularAreaInHistogram, removeDuplicacyCharacters,fractionToDecimal, 
		removeRepeatingChars, nextGreatestNumberWithForLoop, nextGreatestWithStack, stackFunction, ratInMaze, sequentialRemoval, findEquilibrium, insertAtPosition
		
};

