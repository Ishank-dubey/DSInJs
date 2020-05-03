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
	function traverseNoRecurssionPreOrder(){
	  var stack = require('./DS').stackFunction();
	  while(1){
		  while(root){
			  console.log(root.data);
			  stack.push(root);
			  root = root.left;
		  }
		  
		  if(stack.isEmpty()){
			  break;
		  }
		  root = stack.pop();
		  root = root.right;
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
		    size,
		    height,
		    levelWhichHasMax,
		    leastCommonAncestor
		   };
	
}
module.exports = {TreeADT}