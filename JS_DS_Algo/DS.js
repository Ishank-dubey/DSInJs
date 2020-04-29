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
}

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
}






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
	  if(!isEmpty())
	  return stack[stack.length-1];
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


module.exports = {findBiggest : findBiggest, insertToLinkedList : insertToLinkedList,
		printLinkedList : printLinkedList, getHeadOfLinkedList: function(){return head;}, insertToLinkedListAtLast,
		countLinkedListItems, fiboWithoutRecurssion, fibo, formCircularLinkedList, printKNodesOfLinkedList, stack, findSmallest,
		findSpansWithStack, findSpansWithStart, reverseStack
		
};

