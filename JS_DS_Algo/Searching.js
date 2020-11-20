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
	
	/*
	 * When the range is 0 to n-1 then we can add the value 'n' each time a value is found
	 * A[A[i]%n] = A[A[i]%n] + n;
	 * Then check finally like - A[i]/n => the maxium occuring element will be A[i]%n
	 * */
	
	function findMaxOccuring(array){
		console.log(array);
		var N = array.length;
		for(let i=0;i < array.length;i++){
			array[array[i]%N] = array[array[i]%N] + N;
		}
		console.log(array);
		var max = 0;
		var element = undefined;
		for(let i =0;i < array.length;i++){
			if(array[i]/N > max){
				max = Math.floor(array[i]/N);
				element = array[i]% N;
			}
		}
		console.log("Maximun occuring element is ", element, ",It occures ", max, " times");
	}//O(n)
	
	
	/*
	 * The brute force method -
	 * Take an element and find it in the next elements in the Array
	 * O(n^2)
	 * */
	function findFirstRepeatingBruteForce(array){
		for(let i=0;i < array.length-1;i++){
			for(let j=i+1;j < array.length;j++){
				if(array[i] == array[j]){
					console.log("First repeating number using brute force is - ", array[i]);
					return;
				}
			}
		}
	}
	
	/*
	 * We will save the index of the values in a map then -
	 * if max two repetation - then just make the value as negative when the second value is
	 * encounterd
	 * if the repetation is more than 2 then once the value is marked as negative dont mark it
	 * negative again
	 * Last - find the max in Map the max index gives the first repeating
	 * Scan only the negative indexed value as they are the ones that even repeated
	 * */
	function findFirstRepeatingUsingMap(array){
		var theObj = {};
		array = [null, ...array];//make the array have its index start from 1 as it will help us use the < 0 condition
		for(let i=1;i< array.length;i++){
			if(theObj[array[i]] == undefined){
				theObj[array[i]] = i;
			}else if(theObj[array[i]] > 0){
				theObj[array[i]] = -1*theObj[array[i]];
			}
		}
		var max = -Infinity;
		var number;
		let j;
		for( j of Object.keys(theObj)){//we need the values of the keys array so OF
			if(max < theObj[j] && theObj[j]< 0){
				max = theObj[j];
				number = j;
			}
		}
		console.log("First repetation via Map - ", number);
	}//O(n)
	
	
	/*
	 * Find the missing number form a list when its a list of n-1 numbers
	 * In Range 1 to n
	 * none is repeated
	 * Brute force is been performed here, sort can help in O(n log n)
	 * We can also have a Map with all the initial values as 0 now, in one iteration all will have a 
	 * value 1 except the one thats missing
	 * Another way is using n*(n+1)/2 - (sum of all the numbers in the array)
	 * 
	 * */
	function findMissing(array, n){
		for(let i=1; i<= n;i++){
			var found = 0;
			for(let j=0; j < array.length ;j++){
				if(array[j]==i ){
					found = 1;
					break;
				}
			}
				if(!found){
				console.log(i+" is not found");
			}
		}
	}//O(n^2)
	
	/*
	 * Finding the missing number via XOR operations
	 * 1. XOR all the numbers from 1 to n = X (say)
	 * 2. XOR all the numbers in the array = Y(say)
	 * 3. XOR X with Y is the missing number.
	 * */
	function findMissingXOR(array, N){
		let X = array[0], Y = 1;
		for(let j=2;j <= N;j++){
			Y = Y ^ j;
		}
		for(let k=1;k < array.length;k++){
			X = X ^array[k];
		}
		
		let missingNumber = X ^ Y;
		console.log("missingNumber ", missingNumber);
	}//O(n) in time and O(1) in space
	
	
	/*
	 * To find the number that is ossuring ODD number of times
	 * Just XOR all the elements of the Array
	 * The numbers that are even will become zero leaving the one thats occuring Odd number of times
	 * */
	
	/*
	 * Given an array of size n+2 out of which n are occuring one time and only 2 are
	 * occuring 2 times, rang from 1 to n
	 * 1. Use a Map 
	 * 2. x+y = n*(n+1)/2 - S, x*y = P/n!
	 * */
	
	/*
	 * Given that there are n-1 numbers that are occuring 3 times and one is occuring 2 times
	 * to find the one occuring 2 times -
	 * XOR all the elements in the array with all the numbers in 1 to n 
	 * */
	
	/*
	 * to find of any two numbers have a sum equal to a given number
	 * */
	function findNumbersWithsum(array, SUM){
		array.sort((a, b)=> a - b);
		let low =0;
		let high = array.length-1;
		while(low < high){
			let temp = array[low]+ array[high];
			if(temp==SUM){
				console.log(array[low]+" "+array[high]+" are the elements with Sum "+SUM);
				return;
			}else{
				if(temp < SUM){
					low++;
				}else{
					high--
				}
			}
		}
		console.log("No such elements");
	}//O(n log n)
	
	/*
	 * Above problem using a Map in O(n) time
	 * */
	function findNumbersWithSumUsingMap(array, SUM){
		let map = {};
		for(let i=0;i< array.length;i++){
			map[array[i]] = i;
		}
		for(let k=0;k < array.length;k++){
			if(map[SUM - array[k]]){
				console.log(array[k] + " " +(SUM - array[k])+" "+" sum to "+ SUM);
				return;
			}
		}
		console.log("none so");
	}//O(n) in time and space
	
	return {unorderedLinearSort, 
		    iterativeBinarySearch,
		    recursiveBinarySearch,
		    checkIfAnyDupplicate,
		    checkIfDuplicateExistsAfterSorting,
		    checkIfDuplicateUsingHashTable,
		    findDuplicate,
		    findTheElementWithMaxRepetations,
		    findMaxOccuring,
		    findFirstRepeatingBruteForce,
		    findFirstRepeatingUsingMap,
		    findMissing,
		    findMissingXOR,
		    findNumbersWithsum,
		    findNumbersWithSumUsingMap
		   };
}
module.exports = {Search};