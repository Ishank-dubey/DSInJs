/*
 * Heap property - any node is <=(or >=) its child nodes
 * this is min heap -             1
 *                               /  \
 *                              15   2
 *                             /  \  / \  
 *                           16   17 4  3
 *                           
 * max heap - 
 *                                  17
 *                                 / \
 *                                15  6
 *                               / \  / \
 *                              1  4  2  3
 * */
function HeapADT(){
	var array = [];
	var count = 0;
	
	function rightChild(i){
		var right = 2*i + 2;
		if(right >= array.length){
			return -1;
		}
		return right;
	}
	function leftChild(i){
		var  left = 2*i + 1;
		if(left >= array.length){
			return -1;
		}
		return left;
	}
	
	function parent(i){
		
	}
	
	return {
		     rightChild,
		     leftChild
		    };
}

module.exports = {HeapADT}