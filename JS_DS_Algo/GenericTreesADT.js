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
	
	
	return {
		    findDepthFromParentParray,
		    findSiblingsOfTheGenericTree,
		    findChildNodesGivenANode
		};
}
module.exports = {GenericTreeADT};