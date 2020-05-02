function QueueADT(){
	var queue = [];
	var enQueue = (arg) => {
		queue.push(arg);
	}
	var deQueue = () => {
		if(queue.length){
		  return queue.shift();	
		}
	}
	var front = () => {
		return queue[0];
	}
	var size = () => {
		return queue.length;
	}
	var isEmpty = () => {
		return !queue.length;
	}
	return{
		enQueue,
		deQueue,
		front,
		size,
		isEmpty
	}
}


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
}


function reverseQueue(queueLocal){
	var stack = require('./DS').stackFunction();
	while(!queueLocal.isEmpty()){
		stack.push(queueLocal.deQueue());
	}
	while(!stack.isEmpty()){
		queueLocal.enQueue(stack.pop());
	}
}


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