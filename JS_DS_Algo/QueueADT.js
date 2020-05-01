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



module.exports = {QueueADT, QueueLinkedListImplementation, reverseQueue};