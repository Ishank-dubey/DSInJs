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
	function getCount(){
		return count;
	}
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
	
	function deleteRootMinHeap(){
		if(count == 0) return -1;
		var data = array[0];
		
		if(count>0){
			array[0] = array[count-1];
			count--;
		}
		else{
			return -1;
		}
		topBottomOfMinHeap(0);
		console.log("DELETE:: ", array);
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
	
	
	function insertMinHeap(data){
		count = count+1;
		var i = count-1;
		while(i >= 1 && data < array[Math.floor((i-1)/2)]){
			array[i] = array[Math.floor((i-1)/2)];
			i = Math.floor((i-1)/2);
		}
		array[i] = data;
		console.log("insert::", array);
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
	 * Brute force method is to have an empty heap and insert the array elements one by one in it with n*Log n.
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
	}//O(n) as sum of all the heights of the nodes in a tree is almost n
	
	function heapifyInaMInHeap(ipArray){
		array = ipArray;
		count = ipArray.length;
		let i = Math.floor((count - 1 - 1)/2);// = n/2 -1
		for( ;i>=0; i--){
			topBottomOfMinHeap(i);
		}
		console.log("Min Heap:: ", array);
	}
	
	
	function topBottomOfMinHeap(index){
		if(index < 0 || index >= array.length){
			return;
		}
		var rChild = rightChild(index);
		var lChild = leftChild(index);
		
		var minIndex = index;
		if(lChild < count && lChild != -1 && array[lChild] < array[minIndex]){
			minIndex = lChild;
			console.log(array[minIndex], "Mehhhhh");
		}
        if(rChild < count && rChild != -1 && array[rChild] < array[minIndex]){
        	minIndex = rChild;
		}
        if(minIndex != index){
        	var temp = array[index];
        	array[index] = array[minIndex];
        	array[minIndex] = temp;
        	topBottomOfMinHeap(minIndex);
        }
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
	}//O(nlog(n))
	
	/*
	 * 1. Maximum number of nodes in the Heap of height h = 2^(h+1)-1, min nodes is 2^h i.e -
	 * 2^(h-1+1)-1+1 - the full nodes till the second last(h-1 level) level plus 1
	 * 
	 * 2. Max heap whose preorder traversal to give sorted results
	 *     
	 *                 7
	 *                /  \
	 *               6    3
	 *              / \  / \
	 *             5   4 2  1 => 7, 6, 5, 4 , 3, 2, 1
	 *  3. Min heap whose pre order traversal to give sorted output
	 *  
	 *             1
	 *            /  \ 
	 *           2     5
	 *          / \   / \
	 *         3   4  6  7 => 1, 2, 3, 4, 5, 6, 7
	 *         
	 *  4. For in-order - consider a min heap or a max-heap its not possible in case of a in-order traversal
	 *  5. For post-order- max heap
	 *                  7
	 *                 / \
	 *                3    6 
	 *               / \  / \
	 *              1   2 4  5 => 1, 2, 3, 4, 5, 6, 7
	 *  
	 *  6. For post-order min heap - 
	 *                        1
	 *                       / \
	 *                      5    2
	 *                     / \  / \
	 *                    7   6 4  3 => 7, 6, 5, 4, 3, 2, 1
	 *  7. The height of a Heap is given by 2^(h+1) - 1
	 *  
	 *  8. To delete a given element find it in O(n) then follow the delete root procedure in O(log n) so totally
	 *     O(n) time complexity
	 * */
	
	/*
	 * Get the maximum from a min-heap
	 * The maximum in a min heap is from the leaves so we can just check in the leaves
	 * Now, the last leave is at (count-1) index => the leaves start from the next element of the parent of the last 
	 * leave for Example - 
	 *                               1
	 *                              / \
	 *                             5   14
	 *                            / \  / \
	 *                           2  10 21 18
	 *                          / \ /\   \
	 *                         3  1128 37 42
	 *                         see - node 18
	 * */
	
	function findMaxInMinHeap(){
		var startingIndex = Math.floor((count-1-1)/2) + 1;
		var lastIndex = count - 1;
		var index = startingIndex;
		var max = -Infinity;
		for( ; index<=lastIndex ; index++ ){
			if(array[index] > max){
				max = array[index];
			}
		}
		return max;
	}//O(n)
	
	/*
	 * Find the index of the given data key
	 * 
	 * */
	function findIndex(data){
		return array.indexOf(data);
	}//O(1) - constant time
	
	/*
	 * To delete a given index
	 * */
	function deleteAtIndex(index){
		if(index >= count || index < 0) return -1;
		var data = array[index];
		if(index == count-1 ){
			count --;
		}else {
			array[index] = array[count-1];
			topBottom(index);
		}
		return data;
	}//O(n)
	
	/*
	 * Similar to the insert method defined earlier but for a Min Heap
	 * */
	function insertAsMInHeap(data){
		count = count + 1;
		var lastIndex = count - 1;
		let i = lastIndex;
		while(i >=1  && data < array[Math.floor((i-1)/2)]){
			array[i] = array[Math.floor((i-1)/2)];
			i = Math.floor((i-1)/2);
		}
		array[i] = data;
	}//O(log n) in Time
	
	/*
	 * Get and delete the min in a m in heap
	 * */
	function deleteMin(){
		if(!count){return -1;}
		var data = array[0];
		array[0] = array[count-1];
		count = count -1;
		topBottomMinHeap(0);
		return data;
	}
	
	/*
	 * Top bottom - heapify for object Min heap
	 * Object is {vertix, distance}, the priority is on the min distance 
	 * Mainly to be used in Dijkstra’s algo
	 * */
	function topBottomMinHeapWithObjects(index){
		if(index >= count || index <0 ) return -1;
		
		var leftChildIndex = leftChild(index);
	    var rightChildIndex = rightChild(index);
	    var minIndex = index;
	    if(leftChildIndex < count && leftChildIndex!=-1 && array[index].distance > array[leftChildIndex].distance){
	    	minIndex = leftChildIndex;
	    }
	    if(rightChildIndex < count && rightChildIndex!=-1 && array[minIndex].distance > array[rightChildIndex].distance){
	    	minIndex = rightChildIndex;
	    }
	    if(minIndex != index){
	    	var temp = array[index];
	    	array[index] = array[minIndex];
	    	array[minIndex] = temp;
	    	topBottomMinHeapWithObjects(minIndex);
	    }
	    
	}//O(log n)
	
	/*
	 * Heapify the array of objects as a Min Heap
	 * This is to be used in Dijkstra’s shortest path algo
	 * */
	function heapifyTheArrayOfObjectToMinHeap(inputArray){
		count = inputArray.length;
		array = inputArray;
		let i = Math.floor((count - 1 - 1)/2);// = n/2 -1
		for( ;i>=0; i--){
			topBottomMinHeapWithObjects(i);
		}
		console.log(array);
	}//O(n)
	
	
	
	/* to be used in sDijkstra’s algo
	 * get the minimum val from the object min heap
	 * */
	function deleteMinFromObjectMinHeap(){
		if(!count){return -1;}
		var dataNode = array[0];
		array[0] = array[count-1];
		count = count - 1;
		topBottomMinHeapWithObjects(0);
		return dataNode.vertix;
	}
	
	/*
	 * Function to reduce an existing node's distance value
	 * Since we are going to decrease the distance from an existing value - 
	 * We only need to traverse above till the root so O(log n) 
	 * */
	function reduceTheDistanceValInObjectHeap(V, dist){
		
		
		var index;
		for(let j=0;j< count;j++){
			if(array[j].vertix == V){
				index =  j;
				break;
			}
		}
		
		while(index>=1 && dist < array[Math.floor((index-1)/2)].distance){
			array[index] = array[Math.floor((index-1)/2)];
			index = Math.floor((index-1)/2);
		}
		
		array[index] = {vertix: V, distance: dist};
	}
	
	/*
	 * Check of a vertix is present in the heap or not
	 * */
	function isPresentInObjectMinHeap(V){
		var isVPresent = false;
		//console.log(array, '---', count);
		for(let j=0;j< count;j++){
			if(array[j].vertix == V){
				isVPresent = true;
			}
		}
		return isVPresent;
	}
	/*
	 * Top bottom for min heap
	 * */
	function topBottomMinHeap(index){
		if(index < 0 || index > count)return -1;
		  
	      var leftChildIndex = leftChild(index);
	      var rightChildIndex = rightChild(index);
	      var minIndex = index;
	      if(leftChildIndex < count && leftChildIndex!=-1 && array[index] > array[leftChildIndex]){
	    	  minIndex = leftChildIndex;
	      }
	      if(rightChildIndex < count && rightChildIndex!= 1 && array[minIndex] > array[rightChildIndex]){
	    	  minIndex = rightChildIndex;
	      }
	      if(index != minIndex){
	    	  var temp = array[minIndex];
	          array[minIndex] = array[index];
	          array[index] = temp;
	          topBottom(minIndex);
	      }
	}
	/*
	 * To find the maximum of the sliding window of size w thats <=n
	 * Complexity we are looking at is O(n log w)
	 * 1. maintain the index of the element thats going out then do a delete of that index
	 * 2. Insert the newly coming element
	 * 3. Steps 1 and 2 are O(log k)+ O(log k) so O(log k)
	 * 4. Steps 1 to 3 are done for all the (n - w +1) elements approximate - n
	 * 5. Considering the above steps the complexity is O(n log k) 
	 * */
	function slidingWindowMaximum(inputArray, w){
		if(inputArray.length < w.length) return -1;
		var outputArray = [];
		for( let i=0 ; i<w ; i++ ){
			heapifyArray(inputArray.slice(0, w));
		}
		outputArray.push(getMax());
		var length = inputArray.length;
		for( let j=1 ; j<=(length-w) ; j++ ){
			deleteAtIndex(findIndex(inputArray[j-1]));
			insert(inputArray[j+w-1]);
			outputArray.push(getMax());
		}
		return outputArray;
	}//O(n log k)
	
	
	
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
		     heapifyArray,
		     findMaxInMinHeap,
		     findIndex,
		     deleteAtIndex,
		     slidingWindowMaximum,
		     insertAsMInHeap,
		     deleteMin,
		     getCount,
		     heapifyTheArrayOfObjectToMinHeap,
		     reduceTheDistanceValInObjectHeap,
		     deleteMinFromObjectMinHeap,
		     isPresentInObjectMinHeap,
		     heapifyInaMInHeap,
		     deleteRootMinHeap,
		     insertMinHeap
		    };
}

/*
 * Running median using the heap
 * 
 * */
function runningMedian(){
	var maxHeap = HeapADT();
	var minHeap = HeapADT();
	
	return function runningMedianInner(key){
		var minCount = maxHeap.getCount();
		var maxCount = minHeap.getCount();
		if(minCount==0 && maxCount==0){
			maxHeap.insert(key);
			return maxHeap.getMax();
		}
		if(Math.abs(maxHeap.getCount() - minHeap.getCount()) ==1){
			if(key < maxHeap.getMax() && minHeap.getCount() < maxHeap.getCount()){
				minHeap.insertAsMInHeap(maxHeap.deleteRoot());
				maxHeap.insert(key);
			}else if(key < maxHeap.getMax() && minHeap.getCount() > maxHeap.getCount()){
				maxHeap.insert(key);
			}else if(key > maxHeap.getMax() && maxHeap.getCount() > minHeap.getCount()){
				minHeap.insertAsMInHeap(key);
			}else if(key > maxHeap.getMax() && maxHeap.getCount() < minHeap.getCount()){
				if(key > minHeap.getMax()){
					minHeap.insertAsMInHeap(key);
					maxHeap.insert(minHeap.deleteMin());
				}else{
					maxHeap.insert(key);	
				}
			}
		}else if(maxHeap.getCount() - minHeap.getCount() ==0){
			if(key > maxHeap.getMax()){
				minHeap.insertAsMInHeap(key);
			}else{
				maxHeap.insert(key);
			}
		}
		if(maxHeap.getCount() == minHeap.getCount()){
			return (maxHeap.getMax()+minHeap.getMax())/2
		}else if(maxHeap.getCount() > minHeap.getCount()){
			return maxHeap.getMax();
		}else {
			return minHeap.getMax();
		}
	}
}//O(log n)


module.exports = {HeapADT, runningMedian}