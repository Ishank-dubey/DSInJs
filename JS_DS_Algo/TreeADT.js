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
	function size(){

		if(!root){
			return console.log('0');
		}
		var queue = require('./QueueADT').QueueADT();
	    queue.enQueue(root);
	    var count = 0;
	    while(!queue.isEmpty()){
	    	count++;
	    	var node = queue.deQueue();
	    	if(node.left)
	    		queue.enQueue(node.left);
	    	if(node.right)
	    		queue.enQueue(node.right);
	    }
	    console.log(count);
	    return count;
	
	}
	function height(){}
	function findMaxInTree(){
		if(!root){
			return;
		}
		var queue = require('./QueueADT').QueueADT();
		queue.enQueue(root);
		var max = -99999;
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			if(max < node.data){
				max = node.data;
			}
			if(node.left)
			  queue.enQueue(node.left);
			if(node.right)
		      queue.enQueue(node.right);
		}
		console.log(max);
	}
	function levelWhichHasMax(){
		
	}
	function leastCommonAncestor(){}
	

	function searchElement(data){
      var queue = require('./QueueADT').QueueADT();
      queue.enQueue(root);
      while(!queue.isEmpty()){
    	  var node = queue.deQueue();
    	  if(node.data == data){
    		  
    		  return console.log(data+ " Was Found");;
    	  }
    	  if(node.left)
    		  queue.enQueue(node.left);
    	  if(node.right)
    		  queue.enQueue(node.right);
    }
     return console.log('not found'); 
	}
	
	function printTreeElementsInReverseOrderAtEachLevel(){
		var queue = require('./QueueADT').QueueADT();
		var stack = require('./DS').stackFunction();
		
		queue.enQueue(root);
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			//Right child is to be enqueued first
			if(node.right){
				queue.enQueue(node.right);
			}
			if(node.left){
				queue.enQueue(node.left);
			}
			stack.push(node);
		}
		
		while(!stack.isEmpty()){
			var node = stack.pop();
			console.log(node.data);
		}
	}
	
	function findNumberofLevels(){
		var queue = require('./QueueADT').QueueADT();
		var level = 1;
		queue.enQueue(root);
		queue.enQueue(null);
		
		while(!queue.isEmpty()){
			var node  = queue.deQueue();
			
			if(!node && !queue.isEmpty()){
				level++;
				queue.enQueue(null);
			}
			
			if(node && node.left){
				queue.enQueue(node.left);
			}
			if(node && node.right){
				queue.enQueue(node.right);
			}
		}
		console.log(level, " <<-- Levels in the Tree");
		return level;
	}
	function heightFromGivenNode(node){
		if(!node){
			return 0;
		}
		var queue = require('./QueueADT').QueueADT();
		var level = 1;
		queue.enQueue(node);
		queue.enQueue(null);
		
		while(!queue.isEmpty()){
			var node  = queue.deQueue();
			
			if(!node && !queue.isEmpty()){
				level++;
				queue.enQueue(null);
			}
			
			if(node && node.left){
				queue.enQueue(node.left);
			}
			if(node && node.right){
				queue.enQueue(node.right);
			}
		}
		return level;
	}
	
    function findDiameter1(){
    	return findDiameter1Inner(root, {height:0});
    	function findDiameter1Inner(node, heightObj){
    		
    		
    		if(!node){
    			heightObj.height = 0;
            	return 0;
            }
    		
    		var nodeLeftHeight = {height:0}, 
    		  nodeRightHeight = {height:0};
            var leftDiameter = findDiameter1Inner(node.left, nodeLeftHeight);
            var rightDiameter = findDiameter1Inner(node.right, nodeRightHeight);
            
            heightObj.height = Math.max(nodeLeftHeight.height, nodeRightHeight.height) +  1;
            
            return Math.max((nodeLeftHeight.height + nodeRightHeight.height +1), Math.max(leftDiameter, rightDiameter));
    	}
    }
    
    function diameterUsingHeight(){
    	return diameterUsingHeightInner(root);
    	function diameterUsingHeightInner(node){
    		if(!node){
    			return 0;
    		}
          var leftheight = height(node.left);
          var rightheight = height(node.right);
          console.log(leftheight, rightheight);
          var leftDiameter = diameterUsingHeightInner(node.left);
          var rightDiameter = diameterUsingHeightInner(node.right);

          return Math.max(leftheight + rightheight +1, Math.max(leftDiameter, rightDiameter));
          /*
           * Left Tree height + Right Tree height +1 or Diameter of the Left or the Diameter of the Right Tree O(n^2)
           * */
    	}
    }
    
    function findLevelWithMaxSum(){
    	if(!root){
    		console.log(0, 0);
    		return 0;
    	}
    	var maxSum = 0;
    	var queue = require('./QueueADT').QueueADT();
		var level = 1;
		var maxLevel = level;
		queue.enQueue(root);
		queue.enQueue(null);
		var currentLevelSum = 0;
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			
			if(!node){
				if(maxSum < currentLevelSum){
					maxSum = currentLevelSum;
					maxLevel = level;
				}
				if(!queue.isEmpty())
				  queue.enQueue(null);
				level++;
				currentLevelSum = 0;
			}else{
				currentLevelSum = currentLevelSum + node.data;
				if(node.left){
					queue.enQueue(node.left);
				}
				if(node.right){
					queue.enQueue(node.right);
				}
			}
		}
		console.log(maxLevel, maxSum);
    }
	function allRoutesFromRootToLeaf(){
		allRoutesFromRootToLeafInner(root, [], 0);
		function allRoutesFromRootToLeafInner(node, array, index){
			if(!node){
				return 0;
			}else{
				array[index] = node;
				//console.log(node, array, index);
				index++;
				
				if(!node.left && !node.right){
					printpath(array, index);
					return;
				}
				allRoutesFromRootToLeafInner(node.left, array, index);
				allRoutesFromRootToLeafInner(node.right, array, index);
			}
		}
		
		
	}
	
	
	function printpath(array, index){
		for(let i=0; i < index ;i++){
			console.log(array[i].data);
		}
		console.log('-----');
	}
	
	function findIfPathHasExactSum(sum){
		return findIfPathHasExactSumInner(root, sum, [], 0);
		function findIfPathHasExactSumInner(node, sumRemaining, array, index){
			if(!node){
				if(sumRemaining == 0){printpath(array, index)}
				return sumRemaining == 0;
			}
			sumRemaining = sumRemaining - node.data;
			array[index] = node;
			index++;
			if((!node.left && !node.right) || (node.left && node.right)){
				return(findIfPathHasExactSumInner(node.left, sumRemaining, array, index) || findIfPathHasExactSumInner(node.right, sumRemaining, array, index));
			}else if(node.left){
				return(findIfPathHasExactSumInner(node.left, sumRemaining, array, index));
			}else{
				return (findIfPathHasExactSumInner(node.right, sumRemaining, array, index));
			}
		}
	}
	
	function sumOfAllNodesInTree(){
		return sumOfAllNodesInTreeInner(root);
		function sumOfAllNodesInTreeInner(root){
			if(!root)
				return 0;
			
			var queue = require('./QueueADT').QueueADT();
			queue.enQueue(root);
			var sum = 0;
			while(!queue.isEmpty()){
				var node = queue.deQueue();
				sum = sum + node.data;
				if(node.left){
					queue.enQueue(node.left);
				}
				if(node.right){
					queue.enQueue(node.right);
				}
			}
			return sum;
		}
	}
	
	
	function findIfTreesAreStructurallySimilar(root1, root2){
		if(!root2 && !root1){
			return true;
		}
		if(!root1 || !root2){
			return 0;
		}
		return (root1.data == root2.data && findIfTreesAreStructurallySimilar(root2.left, root1.left) && findIfTreesAreStructurallySimilar(root2.right, root1.right))
	}
	
	function getRootNode(){
		return root;
	}
	
	function findMirrorOfTree(){
		findMirrorOfTreeInner(root);
		function findMirrorOfTreeInner(root){
			if(root){
				findMirrorOfTreeInner(root.left);
				findMirrorOfTreeInner(root.right);
				var temp = root.left;
				root.left = root.right;
				root.right = temp;
			}
			return root;
		}
	}
	
	function findIfTreesAreMirrors(root1, root2){
		if(!root1 && !root2){
			return true;
		}
		if(!root1 || !root2){
			return false;
		}
		
		if(root1.data != root2.data){
			return false;
		}
		return (findIfTreesAreMirrors(root2.left, root1.right) && findIfTreesAreMirrors(root2.right, root1.left));
		
	}
	
	
	/*
	 * Find the path from root to node1, find the path from root to node2 and store the paths in two arrays
	 * Compare the arrays for a mismatch- this approach takes 2 traversals of the tree
	 * 
	 * */
	function lowsetCommonAnsestorOfTwoNodesMethod1(targetNode1Data, targetNode2Data){
	   var array1 = [];
	   lowestCommonAnsestorOfTwoNodesMethod1Inner(root, [], 0, targetNode1Data, array1);
	   
	   
	   var array2 = [];
	   lowestCommonAnsestorOfTwoNodesMethod1Inner(root, [], 0, targetNode2Data, array2);
	   
	   return compareAndFindTheLowestCommonNode(array1, array2);
	   
       function lowestCommonAnsestorOfTwoNodesMethod1Inner(node, array, index, targetNodeData, arrayOp){
    	   if(!node){
    		   return false;
    	   }
    	   array[index] = node;
		   index++;
    	   if(node.data == targetNodeData){
    		   saveInArray(array, index, arrayOp);
    		   return true;
    	   }
    	   return (lowestCommonAnsestorOfTwoNodesMethod1Inner(node.left, array, index, targetNodeData, arrayOp) || 
    			   lowestCommonAnsestorOfTwoNodesMethod1Inner(node.right, array, index, targetNodeData, arrayOp));
       }
       
       function saveInArray(array, index, arrayOp){
    	   for(let i=0 ; i < index ; i++){
    		   arrayOp[i] = array[i];
    	   }
       }
       
       function compareAndFindTheLowestCommonNode(a1, a2){
		   var previousValue = null;
    	   for(let i=0;i< a2.length;i++){
    		   
    		   if((a1[i] && a2[i]) && (a1[i].data === a2[i].data)){
    			   previousValue = a1[i].data;
    		   }else{
    			   break;
    		   }
    	   }
    	   return previousValue;
	   }
	}
	
	/*
	 * Find the lowest common ancestor of two nodes in a binary tree in one traversal
	 * */
	
	function lowestCommonAncestorInOneTraversal(node1, node2){
		var flag1 = false; var flag2 = false;
		
		var result = lowestCommonAncestorInOneTraversalInner(root, node1, node2);
		
		if(result && flag1 && flag2){
			return result;
		}else {
			return null;
	    }
		
		function lowestCommonAncestorInOneTraversalInner(node, node1, node2){
			if(!node){
				return null;
			}
			var temp = null;
			
			if(node1 == node.data){
				flag1 = true;
				temp = node;
			}
			
			if(node2 == node.data){
				flag2 = true;
				temp = node;
			}
			
			var leftNode = lowestCommonAncestorInOneTraversalInner(node.left, node1, node2);
			var rightNode = lowestCommonAncestorInOneTraversalInner(node.right, node1, node2);
			
			if(temp){
				return temp;
			}
			
			if( leftNode && rightNode ){
				return node;
			}
			
			if(leftNode || rightNode){
				return leftNode ? leftNode : rightNode;
			}
			
		}
	}
	function constructTreeFromInorderAndPreorderTraversal(startIndex, endIndex, inOrderArray, preOrderArray){
		var preIndex = 0;
		var root = constructTreeFromInorderAndPreorderTraversalInner(startIndex, endIndex, inOrderArray, preOrderArray);
		
		return root;
		function constructTreeFromInorderAndPreorderTraversalInner(startIndex, endIndex, inOrderArray, preOrderArray){
			if(startIndex > endIndex){
				return null;
			}
			var data = preOrderArray[preIndex];
			preIndex++;
			var node = {data:data};
			
			if(startIndex == endIndex){
				node.left = null; node.right = null;
				return node;
			}

			var indexOfDatainInOrderArray = inOrderArray.indexOf(data);

			node.left = constructTreeFromInorderAndPreorderTraversalInner(startIndex, indexOfDatainInOrderArray-1, inOrderArray, preOrderArray);
			node.right = constructTreeFromInorderAndPreorderTraversalInner(indexOfDatainInOrderArray+1, endIndex, inOrderArray, preOrderArray);
			return node;
		}
	}
	
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
		    printNodesLevelWise,
		    findMaxInTree,
		    searchElement,
		    printTreeElementsInReverseOrderAtEachLevel,
		    findNumberofLevels,
		    findDiameter1,
		    diameterUsingHeight,
		    heightFromGivenNode,
		    findLevelWithMaxSum,
		    allRoutesFromRootToLeaf,
		    findIfPathHasExactSum,
		    findIfTreesAreStructurallySimilar,
		    sumOfAllNodesInTree,
		    getRootNode,
		    findMirrorOfTree,
		    findIfTreesAreMirrors,
		    lowsetCommonAnsestorOfTwoNodesMethod1,
		    lowestCommonAncestorInOneTraversal,
		    constructTreeFromInorderAndPreorderTraversal
		   };
	
}
module.exports = {TreeADT}