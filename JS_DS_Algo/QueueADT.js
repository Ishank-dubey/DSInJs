function QueueADT(capacity){
	var queue = [];
	var capacityForCircular = capacity;
	var frontForCircular = 0;
	var rearForCircular = -1;
	var enQueue = (arg) => {
		queue.push(arg);
	}
	var deQueue = () => {
		if(queue.length){
		  return queue.shift();	
		}
	}
	var front = () => {
		if(queue.length)
		{
		return queue[0];
	    } else{
			return -1;
		}
	}
	var size = () => {
		return queue.length;
	}
	var isEmpty = () => {
		return !queue.length;
	}
	var rear = () => {
		if(queue.length){
            return queue[queue.length - 1];
		}else{
			return -1;
		}
		
	}
	var enqueueForCircular = (item) => {
		if(capacity != size){
			rearForCircular = (rearForCircular + 1)% capacity;
			queue[rearForCircular] = item;
			size = size + 1;
		}else{
			return -1;
		}
		
	}
	var dequeueForCircular = (item) => {
		if(size != 0){
			let item =  queue[frontForCircular];
			frontForCircular = (frontForCircular + 1)% capacity;
			size = size - 1;
		}else{
			return -1;
		}
		
	}
	var getFront = () => {
		if(size != 0){
			return queue[frontForCircular]
		}else{
			return -1;
		}
	}
	var getRear = () => {
		if(size != 0){
			return queue[rearForCircular]
		}else{
			return -1;
		}
	}
	return{
		enQueue,
		deQueue,
		front,
		size,
		isEmpty,
		enqueueForCircular,
		dequeueForCircular,
		getFront,
		getRear
	}
}//Last node of linked list is rear and the head is the front for the Linked List implementations 	


function QueueLinkedListImplementation(){
	var head = null;
	var enQueue = (arg) => {
		if(!head){
			head = {};
			head.data = arg;
			head.next = null;
		}else{
			var temp = head;
			while(temp.next){
				temp = temp.next;
			}
			temp.next = {data: arg, next: null};
		}
	}
	var deQueue = () => {
		if (head){
			var temp = head.data;
			head = head.next;
			return temp; 
		}
	}
	
	return {enQueue, deQueue};
}//Dequeue is O(1) but the enqueue is O(n) so we can maintain the head and also the tail


function reverseQueueRecurssion(){
	let queue = QueueADT();
	queue.enQueue(1);
	queue.enQueue(2);
	queue.enQueue(3);
	function reverseInner(){
		if(queue.isEmpty()){
			return;
		}
		let x = queue.deQueue();
		reverseInner();
		queue.enQueue(x);
	}
	reverseInner();
	while(!queue.isEmpty()){
		console.log(queue.deQueue());
	}
}


function reverseQueue(queueLocal){
	var stack = require('./DS').stackFunction();
	while(!queueLocal.isEmpty()){
		stack.push(queueLocal.deQueue());
	}
	while(!stack.isEmpty()){
		queueLocal.enQueue(stack.pop());
	}
}//O(n) in time


function findConsecutivePairsWise(localStack){
	var isConsecutivePaired = true;
	while(!localStack.isEmpty()){
		let n = localStack.pop();
		if(!localStack.isEmpty()){
			let m = localStack.pop();
			if(Math.abs(n-m) != 1){
				isConsecutivePaired = false;
			}
		}
	}
	return isConsecutivePaired;
}

function reverseLeavingQueue(localQueue){
  var length = localQueue.size();
  if(length % 2 !=0)
  {
	  return;
  }
  var halfLength = localQueue.size()/2;
  var stack = require('./DS').stackFunction();
  for(let i=0; i<halfLength ;i++){
   stack.push(localQueue.deQueue());
  }
  while(!stack.isEmpty()){
	  localQueue.enQueue(stack.pop());
  }
  for(let i=0; i<halfLength ;i++){
    localQueue.enQueue(localQueue.deQueue());
  }
  
  for(let i=0; i<halfLength ;i++){
	    stack.push(localQueue.deQueue());
	  }
  
  while(!stack.isEmpty()){
	  localQueue.enQueue(stack.pop());
	  localQueue.enQueue(localQueue.deQueue());
  }
}

function reverseKElementsInaQueue(inputQueue, K){
  if(K > inputQueue.size()){
	  K = inputQueue.size();
  }
  var stack = require('./DS').stackFunction(); 
  for(let i=0; i < K;i++){
	  stack.push(inputQueue.deQueue());
  }
  
  while(!stack.isEmpty()){
	  inputQueue.enQueue(stack.pop());
  }
  
  for(let j=0;j<inputQueue.size()-K;j++){
	  inputQueue.enQueue(inputQueue.deQueue());
  }
}

module.exports = {QueueADT, QueueLinkedListImplementation, reverseQueue, findConsecutivePairsWise, 
		reverseLeavingQueue, reverseKElementsInaQueue};