function Sorting(){
	
	function bubbleSort(array){
		//console.log("Before Sort:: ", array);
		var pass = array.length - 1;
		//var length = pass;
		var swapped = 1;
		for(;(swapped && pass>=0);pass--){
			swapped = 0;
			 for(let i = 0;i <= pass-1 ;i++){
				if(array[i] > array[i+1]){
					let temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
					swapped = 1;
				}
			 }
		}
		console.log("After Bubble Sort:: ", array);
	}//O(n^2) in worst case, O(n) when is already sorted- this is one advantage of Bubble sort that it can detect an already sorted array
	//O(1) is extra(auxilliary) space, Stable
	
	
	//here we find the minimum and iterate
	function selectionSort(array){
		var pass = 0;
		var length = array.length;
		var min = 0;
		for(;pass < length - 1 ;pass++){
			min = pass;
			for(var i=pass+1;i< length;i++){
				if(array[i] < array[min]){
					min = i;
				}
			}
			var temp = array[pass];
			array[pass] = array[min];
			array[min] = temp;
		}
		console.log("Sorted via Selection aort:: ", array);
	}//O(n^2), 
	 //unstable, for example consider - 4, 3, 2, 4, 1, the earlier 4 ends after the later 4
	
	//Here we want to stablize the above bubble sort
	//Instead of swapping the min we will shift the min to its postion
	function stableSelectionSort(array){
		for(let i=0;i < array.length-1;i++){
			let min = i;
			for(let j=i+1;j < array.length;j++){
				if(array[min] > array[j]){
					min = j;
				}
			}
			var lowKey = array[min];
			while(min > i){
				array[min] = array[min-1];
				min = min-1; 
			}
			array[i] = lowKey;
		}
		console.log("After Stable Selection Sort:: ", array);
	}// Stable slection sort, time complexity is same
	
	
	function insertionSortLittelDifferent(array){
		for(let i=1;i < array.length;i++){
			let j = i - 1;
			let key = array[i];
			while(array[j] > key && j >= 0){
				array[j+1] = array[j];
				j--;
			}
			array[j + 1] = key;
		}
		return array;
	}//O(n^2),  if the array is sorted already then its O(n)
	function insertionSort(array){
		var length = array.length;
		for(let i=1; i < length;i++){
			let j = i;
			let key = array[i];
			//shift upwards in case its more
			while(array[j-1] > key && j>=0 ){
				array[j] = array[j-1];
				j--;
			}
			array[j] = key;
		}
		console.log("Sorted Array via insertion sort:: ", array);
	}//O(n^2) in worst case, O(n) when its already sorted as the while loop is not started, O(1) auxilliary space
	 //Stable - consider the same sequence - 4, 5, 3 ,2 ,4 , 1
	
	//This is similar to insertion sort but the Gap is bigger and that goes to 1 implying that the array is sorted
	function shellSort(array){
		var gap = Math.floor(array.length/2);
		var length = array.length;
		for(;gap > 0; gap = Math.floor(gap/2)){
			for(var i=gap ; i < length ; i++){
				var j = i;
				var key = array[i];
				while((array[j - gap] > key && j >= gap)){
					array[j] = array[j - gap];
					j = j - gap;
				}
				array[j] = key;
			}
		}
		console.log("Sorted array via Shell Sort:: ", array);
	}//O(n^2) worst case time complexity but with the right gap value we can go till O(log^2 n)
	
	
	//it's an example of divide and conquer
	// divide and array into sub array with 0..k lesser than k+1...n arrays
	// It's good for sorting linked list
	function mergeSort(array){
		
		mergeSortInner(0, array.length-1);
		console.log("Sorted Via Merge Sort:: ", array);
		function mergeSortInner(l, r){
			if(l < r){
				var m = Math.floor((l+r)/2)
				mergeSortInner(l, m);
				mergeSortInner(m+1, r);
				merge(l, m, r, array);
			}
		}
		
	}//O(n*log n) in time, Stable, theta(n) in space
	
	
	function merge(l, m , r, array){
		var len1 = m - l + 1;
		var len2 = r - m;
		
		var leftArray = [];
		var rightArray = [];
		
		//from left to mid- inculde the mid
		for(let i=0; i < len1;i++){
			leftArray.push(array[l + i]);
		}
		//from mid+1 to right
		for(let j=0; j < len2;j++){
			rightArray.push(array[m + 1 + j]);
		}
		
		var leftIndex = 0;
		var rightIndex = 0;
		var k = l;
		while(leftIndex < len1 && rightIndex < len2){
			if(leftArray[leftIndex] <= rightArray[rightIndex]){ //equal to is important for stability
				array[k] = leftArray[leftIndex];
				leftIndex++;
			}else {
				array[k] = rightArray[rightIndex];
				rightIndex++;
			}
			k++;
		}
		
		while(leftIndex < len1){
			array[k] = leftArray[leftIndex];
			leftIndex++;
			k++;
		}
		while(rightIndex < len2){
			array[k] = rightArray[rightIndex];
			rightIndex++;
			k++;
		}
		
	}//O(n + m) in time and space

	/*
	* given two SORTED arrays print the common elements
	* make sure the common elements are printed only once
	* [1, 20, 20, 40, 60],[2, 20, 20, 20] - print 20
	**/
	function intersectionOfSortedArraysNaive(array1, array2){
		for(let i=0;i < array1.length;i++){
			if(i > 0 && array1[i-1] == array1[i]){
                continue;
			}
			for(let j=0;j < array2.length;j++){
				if(array1[i]== array2[j]){
					console.log(array1[i]);
					break;
				}
			}
		}
	}


	function findIntersectionOfSortedArraysEfficient(array1, array2){
		 let i = 0; 
		 let j = 0;
		 while(i < array1.length && j < array2.length){
			 if(i > 0 && array1[i] == array1[i-1]){
				 i++;
                 continue;
			 } 
			 if(array1[i] < array2[j]){
				 i++;
			 }else if(array1[i] > array2[j]){
				 j++;
			 }else{
				 console.log(array1[i]);
				 i++;
				 j++;
			 }
		 }
	}// theta(n + m)


	/*
	*  Union of two sorted arrays
	* Effieient, dont print duplicate
	*/
	function unionOfTwoSortedArrays(array1, array2){
		 let i=0;
		 let j =0;
		 while(i < array1.length && j < array2.length){
			 if(i >0 && array1[i] == array1[i-1]){
				 i++;
				 continue;
			 }
			 if(j >0 && array2[j] == array2[j-1]){
				j++;
				continue;
			}
			if(array1[i] < array2[j]){
				console.log(array1[i]);
				i++;
			}else if(array2[j] < array1[i]){
				console.log(array2[j]);
				j++;
			}else{
				console.log(array1[i]);
				i++;
				j++;
			}
		 }
		 while(i < array1.length){
			 if( i > 0 && array1[i] == array1[i-1]){
				 i++;
				 continue;
			 }
			 console.log(array1[i]);
             i++
		 }
		 while(j < array2.length){
			if( j > 0 && array2[j] == array2[j-1]){
				j++;
				continue;
			}
			console.log(array2[j]);
			j++
		}
	}//O(M + N)
	
	
	/*
	 * This is a divide and conquer technique
	 * 1. Partition an array and choose a pivot point then have the elements lesser on the left and bigger
	 * on the right
	 */
	function quickSort(array){
		
		quickSortInner(0, array.length-1);
		console.log("Quick Sort :: ", array);
		function quickSortInner(l, h){
			if(l < h){
			var pivot = partition(l, h, array);
			quickSortInner(l, pivot-1);
			quickSortInner(pivot+1, h);
			}
			
		}
	}//O(n^2) in worst case when the pivot is from the right most and its already sorted in and average case - O(nLog n) 
	 //Not stable
	function partition(l, h, array){
		var pi = array[h];
		var j = l-1;
		var k = l;
		for(;k <= h-1 ;k++){
			if(array[k] < pi){
				j++;
				let temp = array[k];
				array[k] = array[j];
				array[j] = temp;
			}
		}
		j++;
		var temp2 = array[j];
		array[j] = array[h];
		array[h] = temp2;
		return j;
	}


	function partitionHoare(array, low, high){
		 let i = low  - 1;
		 let j = high + 1;
		 let pi = array[low];
		 while(true){
			do{
				i++;
		  }	while(array[i] < pi);
		  do{
				j--;
		  }	 while(array[j] > pi)
		  if(i >= j){
			  return j;
		  }
		  let temp = array[j];
		  array[j] = array[i];
		  array[i] = temp;
		 }
		 
	}



	function countInversions(array){
		let low = 0;
		let high = array.length - 1;
		return countInversionInner(0, array.length-1);
		function countInversionInner(low, high){
			let result = 0;
			let mid = Math.floor((low+high)/2);
			if(low < high){
				result = result + countInversionInner(low, mid)
				result = result + countInversionInner(mid+1, high);
				result = result + inversoinMergeHelper(array, low, high, mid);
			}
			return result;
		}
	}

	function inversoinMergeHelper(array, low, high, mid){
		let leftLength = mid - low + 1;
		let rightLength = high - mid;
		let inversions = 0;
		let left = [];
		let right = [];
		for(let i=0;i < leftLength;i++){
			left.push(array[low + i]);
		}
		for(let i=0;i <rightLength;i++){
			right.push(array[mid + i + 1]);
		}
		let index = low;
		let i = 0;
		let j=0;
		while(i < leftLength && j < rightLength){
			if(left[i] <= right[j]){
			   array[index] = left[i];
			   i++;
			   index++;
			} else{
			   array[index] = right[j];
			   j++;
			   index++;
			   inversions = inversions + (leftLength - i);
			}
		}
		while(i < leftLength){
			array[index] = left[i];	
			index++;
			i++;
		}
		while(j < rightLength){
			array[index] = right[j];
			index++;
			j++;
		}
		return inversions;
	}

	/*
	* Given the m children find the min difference distrbution
	* Basically the difference between the highest and lowest items is to be minimum
	* sort the array then check the difference between i and (i + m - 1)th item
	* i.e. highest and lowest in the subarray
	*/
	function chocolateDistrubutionProblem(array, M){
		console.log("before sort", array);
		mergeSort(array);
		console.log("after sort", array);
		let result = Infinity;
		let highestIndex = array.length - M;
		for(let i=0;i <= highestIndex;i++){
			result = Math.min(result, array[M - 1 + i] - array[i]);
		}
		return result;
	}


	/*
	* 1. positive and negative [15, -3, -2, 18] ----> [-3,-2,15, 18] 
	* 2. odd vs even [15, 14, 13, 12] --> [14, 12, 15, 13]
	* 3. binary [0,1,1,1,0]---> [0,0,1,1,1]
	*/
	function sortArrayBasedOnThreeTypes(array){
		let i = -1;
		let j = array.length;
		let pi = 0;

		while(true){
			do{
				i++;
		   }while(array[i] < 0);
	
			do{
			j--;
		   }while(array[j] >= 0);
		   
		   if(i >= j){
			   return array;
		   }
		   let temp = array[i];
		   array[i] = array[j];
		   array[j] = temp;
		}
		
	}//Theta(n)

	/*
	* given an arrray of three categories - 0, 1, 2
	* make an array that has 0s then 1s then 2s
	* low is the last+1 index of the 0s, mid is the last+1 index of the 1s and
	* high is the i-1 of the 2s 
	*/
	function segregateRGB(array){
		let low = 0;
		let mid = 0;
		let high = array.length - 1;
		for(let i=0; i < array.length;i++){
			if(array[mid]==1){
				mid ++;
			} else if(array[mid]==0){
				let temp = array[mid];
				array[mid] = array[low];
				array[low] = temp;
				mid++;
			    low++;
			} else{
				let temp  = array[high];
				array[high] = array[mid];
				array[mid] = temp;
				high--;
			}
		}
		return array;
	}


	/*
	* Find the Merge overlapping intervals
	* [{start:5, end:10},{start:3,end:15}, {start:18, end:30}, {start:2, end:7}]
	* => [{start:2, end:15}, {start:18, emd:30}]
	* Solution - 1. when the smaller of the start lies in the other interval then its an overlap
	* 1. Sort the given array based on the start intervals
	* traverse the array and only check the last item if the current shall be merged or not
	* */
	function mergeIntervals(array){
		let res = 0;
		array.sort((a, b)=>  a.start - b.start);
		for(let i=1;i < array.length;i++){
			if(array[i].start <= array[res].end){
			   array[res].end =  Math.max(array[i].end, array[res].end);
			   //not needed really since the array is sorted   
			   //array[res].start = Math.min(array[i].start, array[res].start);
			} else{
				res++;
				array[res] = array[i];
			}
		}
		//Print the merged array
		for(let j=0;j <= res;j++){
			console.log(array[j]);
		}
	}

	/*
	* You are given arrival and departure times of the guests, 
	* you need to find the minimum time interval to attend the party so that there are maximum people at 
	* the party.
	* Sort the arrival and departure arrays
	* keep track of the current people staying
	*/
	function meetMaxGuests(arrival, departure){
		arrival.sort((a, b)=> a - b);
		departure.sort((a, b)=> a - b);
		let result  = 0;
		let current  = 0;
		let i=0;
		let j=0;
		while(i < arrival.length && j < departure.length){
			if(arrival[i] <= departure[j]){
				i++;
				current++;
			}else{
				j++;
				current--;
			}
			result = Math.max(current, result);
		}
		return result;
	}//O(nlogn) for sorting
	
	/*
	* Cycle sort
	* Number of writes in the memory is small
	*/

	function cycleSort(array){
		let writes = 0;
		for(let start_index=0;start_index < (array.length -1) ;start_index++){
			let position = start_index;
			let item = array[start_index];
			for(let j=start_index+1;j < array.length;j++){
			    if(item > array[j]){
					position++;
				}	
			}
			if(position == start_index){
				continue;
			}
			while(item == array[position]){
				position++;
			}
			//swap the item with the position item
			let temp = item;
			item = array[position];
			array[position] = temp;
			writes++;

			//now go for cycle
			while(position != start_index){
				position = start_index;
                for(let j=start_index+1;j < array.length;j++){
                    if(array[j] < item){
						position++;
					}
				}
				while(item == array[position]){
					position++;
				}
				if(array[position]!= item) //unnecessary
				{
					let temp = item;
					item = array[position];
					array[position] = temp;
					writes++;
				}
				
			}
			
		}
		return array;
	}


	
	
	/*
	 * here we try to do the sorting like this -
	 * (0, 1), (2, 3), (4, 5) then increase the size and merge (0,3), (0, 5)
	 * this order is a bit different from the recursive merge sort version
	 * */
	function iterativeMergeSort(array){
		var rightMost = array.length-1;
		for(let size=1;size <= rightMost;size = 2*size){
			for(let left=0;left< rightMost;left=left+2*size){
				let mid = Math.min(left+size-1, rightMost);
				let rightEnd = Math.min(left+2*size-1, rightMost);
				merge(left, mid, rightEnd, array);
			}
		}
		console.log("Iterative merge sort:: ", array);
	}//O(nlog n)
	
	
	/*
	 * This will require a stack that will store left and right points then use the same partition
	 * function on the range received
	 * the points are pushed in the stack only when they are in correct range 
	 * */
	function iterativeQuickSort(array){
		var stack = require("./DS").stackFunction();
		stack.push(0);
		stack.push(array.length - 1);
		while(!stack.isEmpty()){
			var right = stack.pop();
			var left = stack.pop();
			var pi = partition(left, right, array);
			if(pi - 1 > left){
				stack.push(left);
				stack.push(pi - 1);
			}
			if(pi + 1 <  right){
				stack.push(pi + 1);
				stack.push(right);
			}
		}
		console.log("Iteration - Quick Sort:   ", array);
	}
	
	
	/*
	 * This is useful when there is a predefined array length or range
	 * 1. create a count array that will have the counts of all the occurances 
	 *    of all the charaters at their index
	 * 2. Create another output array and fill it at the indexs obtained while iterating on the input array
	 * 3. Lastly after the o/p array is in place we can change the i/p array
	 * */
	//K is the range
	function countSort(array, K){
      var count = [];
      
      //initialize the count array with all 0 values
      for(let i=0 ;i < K;i++){
    	  count[i] = 0;
      }
      //fill the count array with the counts of the array elements
      for(let i = 0;i < array.length;i++){ 
        count[array[i]] = count[array[i]] +1;
      }
      
      //modify the count array so that an element contains the sum of the previous
      //element occurances and its own
      //we dont see for zero th index since ots value will be the same as found just above
      for(let i=1;i< K ;i++){
    	  count[i] = count[i] + count[i-1]; 
      }
      
      var op = [];
      for(let j=0;j< array.length;j++){//we can traverse from n-1 to 0 for stability!!
        op[count[array[j]]-1] = array[j];
        count[array[j]] = count[array[j]] - 1;
      }
      
      for(let j=0;j< array.length;j++){
        array[j] = op[j];
      }
      console.log("Count Sort::  ", array);
	}//O(n+K)
	
	
	/*
	 * This is useful when there is a decimal range
	 * When decimal is present than we can not use the above count sort
	 * We will save the decimal number in the bucket - n*array[i]th bucket
	 * Now the buckets are uniformly distributes so insertion sort has a complexity of log n
	 * */
	function bucketSort(array){
		var bucket = [];
		for(let i=0;i < array.length;i++){
			bucket[i] = [];
		}
		
		for(let i=0;i < array.length;i++){
			bucket[Math.floor(array.length* array[i])].push(array[i]);
		}
		
		//Now sort the array in the bucket array - as these are uniform so log n
		for(let j=0 ; j < array.length ; j++){
			bucket[j].sort();
		}
		
		//Now append the results
		var index = 0;
		for(let j=0 ; j < bucket.length ; j++){
          for(let k=0;k < bucket[j].length;k++){
        	  array[index] = bucket[j][k];
        	  index++;
          }
		}
		console.log("Bucket Sort:: ", array);
	}//O(N + K)
	
	
	/*
	 * 1. Find the maximum of the array
	 * 2. Use the max of the array to find the digits in the max number found
	 * 3. Start the count sort starting with the least significant digit in the array numbers
	 * 4. Its complexity is compareble to Quick sort but its Space complexity is more that Quick sort
	 * 5. Mainly when the range is upto n^2
	 * */
	function radixSort(array){
		function findMax(array){
			var max = -Infinity;
			for(let i=0;i < array.length ;i++){
				if(array[i] > max){
					max = array[i];
				}
			}
			return max;
		}
		function findMin(array) {
			var min = Infinity;
			for(var i in array){
				if(array[i] < min){
					min = array[i];
				}
			}
			return min;
		} 
		
		function countSortWithRadixFacility(exp, base){
			var count = [];
			
			//the range is the base i.e the number of unique digits
			for(let i=0;i< base;i++){
				count[i] = 0;
			}
			
			for(let i=0;i < array.length;i++){
				count[Math.floor(array[i]/exp) % 10] = count[Math.floor(array[i]/exp) % 10] + 1;
			}
			
			for(let i=1;i < base;i++){
				count[i] = count[i] + count[i-1];
			}
			var op = [];
			
			//this order is important here in Radix sort to make it stable and the result
			for(let i=array.length - 1; 0 <= i ;i--){
				op[ count [(Math.floor(array[i]/exp) % 10)] -1 ] = array[i];
				count[(Math.floor(array[i]/exp) % 10)] = count[(Math.floor(array[i]/exp) % 10)] - 1;
			}
			
			for(let i=0 ; i < array.length ; i++){
				array[i] = op[i];
			}
		}
		var max = findMax(array);//'d' i.e. the number of digits in max number
		for(let exp=1 ; Math.floor(max/exp) > 0 ; exp = exp*10){
			countSortWithRadixFacility(exp, 10);
		}
		console.log("Radix Sort:: ", array);
	}//O(d( n+ base))
	
	function nearlySorted(array, K){
		var minHeap = require("./HeapADT").HeapADT();
		var op = [];
		var heapifyArray = [];
		for(let k=0;k< K+1;k++){
			heapifyArray.push(array[k]);
		}//Consider this as O(K) due to a proof in GFG
		minHeap.heapifyInaMInHeap(heapifyArray);
		console.log("DELETE START");
		var opIndex = 0;
		for(let j=K+1;j < array.length;j++){
			op[opIndex++] = minHeap.deleteRootMinHeap();
			minHeap.insertMinHeap(array[j]);
		}
		while(minHeap.getCount()){
			op[opIndex++] = minHeap.deleteRootMinHeap();
		}
		console.log("Sorted after nearlySorted:: ",op);//As we have arrayHeafity only for MAx heap
	}//O(n log K)
	
	function getMiddleOfLL(head){
		var slow = head, fast = head;
		while(fast && fast.next && fast.next.next){
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow;
	}
	function mergeSortedLL(left, right){
		if(!left){
			return right;
		}
		if(!right){
			return left;
		}
		var op;
		if(left.data < right.data){
			op = left;
			op.next = mergeSortedLL(left.next, right);
		}else{
			op = right;
			op.next = mergeSortedLL(left, right.next);
		}
		return op;
	}
	function sortLinkedListViaMergeSort(head){
		if(!head || !head.next){
			return head;
		}
		var middle = getMiddleOfLL(head);
		var nextToMiddle = middle.next;
		
		middle.next = null;
		var left = sortLinkedListViaMergeSort(head);
		var right = sortLinkedListViaMergeSort(nextToMiddle);
		return mergeSortedLL(left, right);
	}//O(n Log n)
	function sortLinkedListViaQuickSort(start, end){
		if(start == end){
			return;
		}
		var prev = partitionForLL(start, end);
		sortLinkedListViaQuickSort(start, prev);
		
		if(prev && prev == start){
			sortLinkedListViaQuickSort(prev.next, end);
		}else if(prev && prev.next){
			sortLinkedListViaQuickSort(prev.next.next, end);//Since prev.next is start itself so we must go from next of it
		}
		
		function partitionForLL(start, end){
			if(start == end || !start || !end){
				return start;
			}
			var pivot = end.data;
			var previous_pivot = start;
			var current = start;
			while(end != start){
				if(start.data < pivot){
					var temp = current.data;
					current.data = start.data;
					start.data = temp;
					previous_pivot = current;
					current = current.next;
				}
				start = start.next;
			}
			var temp1 = current.data;
			current.data = pivot;
			start.data = temp1;
			return previous_pivot;
		}
	}
	
	/*
	 * Size of A is m + n of which m are having values
	 * Size of B is n
	 * Merge these arrays in O(1) space complexity 
	 * */
	function mergeTwoSortedArrays(A, B, m, n){
		var k = m + n -1;
		var j = m-1, i = n-1;
		for(;k>=0;k--){
			if(B[i] > A[j] || j< 0){
				A[k] = B[i];
				i--
				if(i < 0){
					break;
				}
			}else{
				A[k] = A[j];
				j--
			}
		}
		console.log("Merged array in O(1) space and O(m+n) time cplxity : ", A);
	}
	
	
	return {bubbleSort, selectionSort, insertionSort, shellSort, mergeSort, quickSort,
		    iterativeMergeSort, iterativeQuickSort , countSort, bucketSort, radixSort,
		    stableSelectionSort, nearlySorted, sortLinkedListViaQuickSort, sortLinkedListViaMergeSort,
		    mergeTwoSortedArrays, cycleSort
	       };
}

module.exports = {Sorting}