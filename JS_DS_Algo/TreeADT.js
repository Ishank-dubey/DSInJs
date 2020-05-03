function TreeADT(){
	var root = null;
	
	function insert(data){
		if(!root){
			root = {data:data, left:null, right:null};
			return;
		}
		var parent = root;
		var node = root;
		while(1){
			if(!node){
				node = {left:null, right:null};
				node.data = data;
				if(parent){
				if(data >= parent.data){
				  parent.right = node;	
				}else{
				  parent.left = node;	
				}
				}
				break;
			}else{
				parent = node;
				if(node.data <= data){
					node = node.right;
				}else if(node.data > data){
					node = node.left;
				}
			}
		}
	}
	
	function deleteNode(){
		return root.length;
	}
	
	function search(){
		
	}
	/*DLR*/
	function traverseRecursivePreOrder(){
		node = root;
		innerFunction(node);
		function innerFunction(node){
			if(!node)return;
			console.log(node.data);
			innerFunction(node.left);
			innerFunction(node.right);
		}
		
	}
	/*DLR*/
	function traverseNoRecurssionPreOrder(){
	  var stack = require('./DS').stackFunction();
	  var node = root;
	  while(1){
		  while(node){
			  console.log(node.data);
			  stack.push(node);
			  node = node.left;
		  }
		  
		  if(stack.isEmpty()){
			  break;
		  }
		  node = stack.pop();
		  node = node.right;
	  }
	}
	function inOrderTraverseWithRecursion(){
		node = root;
		innerFunction(node);
		function innerFunction(node){
			if(!node)return;
			innerFunction(node.left);
			console.log(node.data);
			innerFunction(node.right);
		}
	}
	function inOrderTraverseWithStack(){
		var node = root;
		var stack = require('./DS').stackFunction();
		while(1){
		  while(node){
			stack.push(node);
			node = node.left;
		  }
		  if(stack.isEmpty())break;
		  node = stack.pop();
		  console.log(node.data);
		  node = node.right;
		}
	}
	function postOrderWithRecursion(){
		var node = root;
		innerFunction(node);
		function innerFunction(node){
			if(!node)return;
			innerFunction(node.left);
			innerFunction(node.right);
			console.log(node.data);
		}
	}
	function postOrderWithStack(){
		var node = root;
		var stack = require('./DS').stackFunction();
		
		while(1){
			
			if(node){
				stack.push(node);
				node = node.left;
			}else{
				if(stack.isEmpty()){
					console.log('Traversal Over');
					return;
				}
				
				if(!stack.top().right){
					node = stack.pop();
					console.log(node.data);
					
					if(node == stack.top().right){
						node = stack.pop();
						console.log(node.data);
						
					}
				}
			if(!stack.isEmpty() ){
			  if(stack.top().right == node){// This step is missing in Narasimha K Book and leads to infinite recurssion
				  stack.top().right = null;
				  node = null;  
			  }
			  else {
				  node = stack.top().right;
			  }
			}
			else{
				node = null;
			}
			}
		
		}
	}
	function printNodesAtLevel(desiredLevel){
		
		var node = root;
		innerPrintNodesAtLevel(desiredLevel, 1, node);
		function innerPrintNodesAtLevel(desiredLevel, currentLevel, node){
			if(!node || desiredLevel < 1){
				return;
			}
			if(currentLevel == desiredLevel){
				console.log(node.data);return;
			}else{
				currentLevel = currentLevel+1;
				innerPrintNodesAtLevel(desiredLevel, currentLevel, node.left);
				innerPrintNodesAtLevel(desiredLevel, currentLevel, node.right);
			}
		}
	}
	function printNodesLevelWise(){
		if(!root){
			console.log('nothing to print');
			return;
		}
		var queue = require('./QueueADT').QueueADT();
		queue.enQueue(root);
		while(!queue.isEmpty()){
			let currentNode = queue.deQueue();
			console.log(currentNode.data);
			if(currentNode.left){
				queue.enQueue(currentNode.left);
			}
			if(currentNode.right){
				queue.enQueue(currentNode.right);
			}
		}
	}
	function size(){}
	function height(){}
	function levelWhichHasMax(){}
	function leastCommonAncestor(){}
	
	return {insert,
		    deleteNode,
		    search,
		    traverseRecursivePreOrder,
		    traverseNoRecurssionPreOrder,
		    inOrderTraverseWithRecursion,
		    inOrderTraverseWithStack,
		    postOrderWithRecursion,
		    postOrderWithStack,
		    size,
		    height,
		    levelWhichHasMax,
		    leastCommonAncestor,
		    printNodesAtLevel,
		    printNodesLevelWise
		   };
	
}
module.exports = {TreeADT}