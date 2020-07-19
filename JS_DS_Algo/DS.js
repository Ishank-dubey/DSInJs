var head = null;

function findBiggest(array){
	let k = 0, len = array.length;
	for(let i=0;i < len;i++){
		if(array[k] < array[i]){
			k = i;
		}
	}
	console.log("Biggest Number is ", array[k]);
}

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

function printLinkedList(){
	while(head){
		console.log(head.data);
		head = head.next;
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

function printKNodesOfLinkedList(head, K){
	var temp = head;
	for(let i=0;i<K && temp ;i++){
		console.log(temp.data);
		temp = temp.next;
	}
	return temp;
}


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
		countLinkedListItems, fiboWithoutRecurssion, fibo, formCircularLinkedList, printKNodesOfLinkedList, stack, findSmallest,
		findSpansWithStack, findSpansWithStart, reverseStack,arrangeTwoOfTwo, arrangeThreeOfThree
		,highestRectangularAreaInHistogram, removeDuplicacyCharacters,
		removeRepeatingChars, nextGreatestNumberWithForLoop, nextGreatestWithStack, stackFunction, sequentialRemoval
		
};

