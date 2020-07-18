function GenericTreeADT(){
	/*
	 * The generic tree node can have a nextSibling and single child that 
	 * in turn will have nextSibling and one child, this way with a single child 
	 * we can have access to all the children
	 * */
	
	
	/*
	 * P[i] indicates the parent of ith node in the tree
	 * Assume the parent of root node is -1
	 * Find the depth
	 * O(n^2)
	 * */
	function findDepthFromParentParray(parentArray){
		var maxDepth = 0;
		for(var i=0 ; i < parentArray.length ; i++){
    	   var j = i;
    	   var currentDepth = 0;
    	   j = i;
    	   while(parentArray[j] != -1){
    		   j = parentArray[j];
    		   currentDepth++;
    	   }
    	   if(currentDepth > maxDepth){
    		   maxDepth = currentDepth;
    	   }
       }
		return maxDepth;
	}
	
	function findSiblingsOfTheGenericTree(root){
		var currentSiblingNode = null;
		var count = 0;
		if(root){
			currentSiblingNode = root.nextSibling;
		}
		while(currentSiblingNode){
			console.log(currentSiblingNode.data);
			currentSiblingNode = currentSiblingNode.nextSibling;
			count ++;
		}
		console.log("Total: ", count);
	}//O(n) time, O(1) space
	
	function findChildNodesGivenANode(root){
		var child = null;
		if(root){
			child = root.firstChild;
		}
		var count = 0;
		while(child){
			count++;
			console.log(child.data, "----");
			child = child.nextSibling;
		}
		console.log("Total: ", count);
	}
	
	/*
	 * Given a preorder traversaled array, K- size of the children, any node will have 0 or K children 
	 * For any node i the children will be from K*i+1 to K*(i+ 1)
	 * */
	function formAKArrayTreeFromPreOrderTraversal(traversedArray, index, K){
		var newNode = {};
		newNode.data = traversedArray[index];
		for(var i=0; i<K; i++){
			if( K*(index+1) <  traversedArray.length){//Because there will be K or 0 children so compare with the max index of the child 
			  newNode[i] = formAKArrayTreeFromPreOrderTraversal(traversedArray, K*index+1+i, K);
			}else{
			  newNode[i] = null;
			}
		}
		return newNode;
	}
	//O(n) time, n is the size of the array
	
	/*
	 * To find the levels in the K-Ary tree
	 *     (K^LEVEL-1)/(K-1)+K <= n <= (K^(LEVEL+1)-1)/(K-1)
	 * */
	function findTheLevelsInKArrayTree(traversedArray, K){
		var level = 0;
		if(traversedArray.length == 0 || traversedArray.length == 1){
			return level;
		}
	    if(traversedArray.length == K+1){
	    	level ++;
	    	return level;
	    }
	    var found = false;
	    level = 2;
	    while(!found){
	      if((Math.pow(K, level)-1)/(K-1)+K <= traversedArray.length && traversedArray.length <= (Math.pow(K, level+1)-1)/(K-1)){
	    	  return level;
	      }
	      level = level+1;
	    }
	}
	
	return {
		    findDepthFromParentParray,
		    findSiblingsOfTheGenericTree,
		    findChildNodesGivenANode,
		    formAKArrayTreeFromPreOrderTraversal,
		    findTheLevelsInKArrayTree
		};
}
module.exports = {GenericTreeADT};