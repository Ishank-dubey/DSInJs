function Sorting(){
	
	function bubbleSort(array){
		console.log("Before Sort:: ", array);
		var pass = array.length - 1;
		//var length = pass;
		var swapped = 1;
		for(;(swapped && pass>=0);pass--){
			swapped = 0;
			 for(let i = 0;i < pass-1 ;i++){
				if(array[i] > array[i+1]){
					let temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
					swapped = 1;
				}
			 }
		}
		console.log("After Sort:: ", array);
	}//O(n^2) in worst case, O(n) when is already sorted- this is one advantage of Bubble sort that it can detect an already sorted array
	//O(1) is extra(auxilliary) space
	
	
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
		console.log("Sorted:: ", array);
	}
	
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
		
	}//O(n*log n)
	
	
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
			if(leftArray[leftIndex] <= rightArray[rightIndex]){
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
		
	}
	
	
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
		//console.log("", j);
		var temp2 = array[j];
		array[j] = array[h];
		array[h] = temp2;
		//console.log("CONSOLE ", j, array[h], h);
		return j;
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
      for(let j=0;j< array.length;j++){
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
			
			//this order is important here in Radix sort
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
	
	return {bubbleSort, selectionSort, insertionSort, shellSort, mergeSort, quickSort,
		    iterativeMergeSort, iterativeQuickSort , countSort, bucketSort, radixSort
	       };
}

module.exports = {Sorting}