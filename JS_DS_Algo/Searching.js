function Search(){
	function unorderedLinearSort(array, number){
		for(let i=0;i < array.length;i++){
			if(array[i]==number){
			  return number;	
			}
		}
		return -1;
	}//O(n)
	function iterativeBinarySearch(array, number){
		var low = 0;
		var high = array.length - 1;
		while(low <= high){
			var mid = Math.floor((low+ high)/2);
			if(array[mid] == number){
				return number;
			}
			if(array[mid] < number){
				low = mid + 1;
			}else{
				high = mid - 1; 
			}
		}
		return -1;
	}//O(log n)
	function recursiveBinarySearch(array, number){
		return recursionBinarySearchInner(0, array.length - 1);
		function recursionBinarySearchInner(low, high){
			if(low > high){
				return -1;
			}
			var mid = Math.floor((low + high)/2);
			if(array[mid] == number){
				return number;
			}else if(array[mid] > number){
				recursionBinarySearchInner(low, mid-1);
			}else{
				recursionBinarySearchInner(mid + 1, high);
			}
		}
	}//O(log n)
	
	//Check of a number is been repeated in an Array
	//using 2 for loops
	function checkIfAnyDupplicate(array){
		for(let i=0 ; i < array.length-1 ; i++){
			for(let j=i+1 ; j < array.length ; j++){
				if(array[j]== array[i]){
					console.log("there is a duplicate:: ");
					return number;
				}
			}
		}
	}//O(n^2)
	
	
	//Sort the array then check the adjacents
	function checkIfDuplicateExistsAfterSorting(array){
		require("./HeapADT").HeapADT().heapSort(array);
		for(let i=0;i < array.length-1;i++){
			if(array[i] == array[i+1]){
				console.log("there is a duplicate atleast:: ", array[i]);
				return array[i];
			}
		}
		console.log("Not a duplicate present");
		return -1;
	}//O(n log n)
	
	//Find the duplicate using a hash table whose read time is constant of O(1)
	function checkIfDuplicateUsingHashTable(array){
		var hash = {};
		for(let i=0;i < array.length;i++){
			if(hash[array[i]] != undefined){
				hash[array[i]] = hash[array[i]] + 1;
				console.log("Duplicate found- ", array[i]);
				return array[i];
			}else{
				hash[array[i]] = 1;
			}
		}
		console.log("Duplicate not there in this array");
	}//O(n) in Time and Space
	
	/*
	 * Given an array whose range is in 0 to n-1
	 * The elements too are in the same range
	 * Take an index and mark as negative the A[abs(A[i])]
	 * All the elements are positive
	 * We are checking the value are index and marking the value at that index as negative
	 * */
	function findDuplicate(array){
		for(let i=0 ; i < array.length ; i++){
			if(array[Math.abs(array[i])] < 0){
				console.log("Duplicate is there--> ", Math.abs(array[i]));
				return Math.abs(array[i]);
			}
			array[Math.abs(array[i])] = -1 * array[Math.abs(array[i])];
		}
		console.log("No Duplicates");
	}//O(n) but will have the limitations that are discussed above
	
	
	//This is a brute force way to find the element with highest repetations
	function findTheElementWithMaxRepetations(array){
		var max = 0;
		var counter = 0;
		var element = -1;
		var maxElement;
		for(let i=0;i < array.length;i++){
			counter = 0;
			for(let j=i+1; j < array.length;j++){
				if(array[j] == array[i]){
					element = array[j];
					counter++;
				}
			}
			if(counter > max){
				max = counter;
				maxElement = element;
			}
		}
		console.log("The maximum occuring element ", maxElement, "It occured: ", max+1, " times");
	}//O(n^2)
	/*
	 * We can solve the above problem after sorting and then checking for the max repetations-- O(n log n)
	 * Or we can have a hash that solves this in O(n) time and space complexity
	 * The O(n), O(1) in space is discussed in the following function
	 * */
	return {unorderedLinearSort, 
		    iterativeBinarySearch,
		    recursiveBinarySearch,
		    checkIfAnyDupplicate,
		    checkIfDuplicateExistsAfterSorting,
		    checkIfDuplicateUsingHashTable,
		    findDuplicate,
		    findTheElementWithMaxRepetations
		   };
}
module.exports = {Search};