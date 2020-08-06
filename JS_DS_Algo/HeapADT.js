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
		if(left >= count){
			return -1;
		}
		return left;
	}
	
	function parent(i){
		if(i==0 || i >= count) return -1;
		
		return Math.floor((i-1)/2);
	}
	
	function topBottom(index){
	  
	  if(index < 0 || index > count)return -1;
	  
      var leftChildIndex = leftChild(index);
      var rightChildIndex = rightChild(index);
      var maxIndex = index;
      if(leftChildIndex < count && leftChildIndex!=-1 && array[index] < array[leftChildIndex]){
    	  maxIndex = leftChildIndex;
      }
      if(rightChildIndex < count && rightChildIndex!= 1 && array[maxIndex] < array[rightChildIndex]){
    	  maxIndex = rightChildIndex;
      }
      if(index != maxIndex){
    	  var temp = array[maxIndex];
          array[maxIndex] = array[index];
          array[index] = temp;
          topBottom(maxIndex);
      }
      
	}//O(log n) in worst case i.e. when this goes from the root to the leaf
	
	function deleteRoot(){
		if(count == 0) return -1;
		var data = array[0];
		
		if(count>0){
			array[0] = array[count-1];
			count--;
		}
		else{
			return -1;
		}
		topBottom(0);
		return data;
	}//O(log n)
	
	function getMax(){
		if(count == 0) return -1;
		return array[0];
	}
	
	function insert(data){
		count = count+1;
		var i = count-1;
		while(i >= 1 && data > array[Math.floor((i-1)/2)]){
			array[i] = array[Math.floor((i-1)/2)];
			i = Math.floor((i-1)/2);
		}
		array[i] = data;
	}//O(log n)
	
	function destroyHeap(){
		array = [];
		count = 0;
	}
	
	/*
	 * There is no point in heapifying the leaf nodes so -
	 * We go the parent of the last element and keep on decresing the index till 0th index(root)
	 * Now, the last child of the heap is (count-1)th element
	 * The sum of heights of all the nodes is approx n - h -1 = n - log(n) -1
	 * this way we get a complexity of O(n)
	 * 
	 * Brute force method is to have an empty heap and insert the array elements one by one in it.
	 * */
	
	function heapifyArray(ipArray){
		array = ipArray;
		count = ipArray.length;
		let i = Math.floor((count - 1 - 1)/2);// = n/2 -1
		for( ;i>=0; i--){
			topBottom(i);
		}
		console.log(array);
		//note that leaves are compared with the parent 
		//as left and right children in the topBottom method
	}
	
	/*
	 * 1. Create the heap with the above heapifyArray method to create a max heap
	 * 2. Get the root and swap it with the last element and hepify the root element after decreasing the count
	 * 3. The last elements start pointing to the sorted data
	 * */
	
	function heapSort(inputArray){
		heapifyArray(inputArray);
		
		count = inputArray.length;
		let i = count - 1;
		for( ; i>=1 ; i--){
			var tempMax = array[0];
			array[0] = array[i];
			array[i] = tempMax;
			count = count-1;
			topBottom(0);
		}
		console.log('Sorted Array:: ', array);
	}
	
	return {
		     rightChild,
		     leftChild,
		     parent,
		     topBottom,
		     deleteRoot,
		     getMax,
		     insert,
		     destroyHeap,
		     heapSort,
		     heapifyArray
		    };
}

module.exports = {HeapADT}