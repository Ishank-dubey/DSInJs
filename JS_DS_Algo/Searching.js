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
				return recursionBinarySearchInner(low, mid-1);
			}else{
				return recursionBinarySearchInner(mid + 1, high);
			}
		}
	}//O(log n) //Basically we need to find the height of the search tree and that is log(n)
	
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
		for(let i =0;i < array.length;i++){
			array[i] = array[i] % N;
		}
		element = array.indexOf(element);
		console.log("Maximun occuring element is value--", element, ",It occures ", max, " times");
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
	 * To find the number that is occuring ODD number of times
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
	 * To find if any two numbers have a sum equal to a given number
	 * Two pointers approach
	 * */
	function findNumbersWithsum(array, SUM, s, e){
		array.sort((a, b)=> a - b);
		let low =0;
		let high = array.length-1;
		if(s != undefined){
			low = s;
			high = e;
		}
		while(low < high){
			let temp = array[low]+ array[high];
			if(temp==SUM){
				console.log(array[low]+" "+array[high]+" are the elements with Sum "+SUM);
				return true;
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


	function findTripletUsingTwoPointers(array, tripletSum){
		let N = array.length;
		for(let i=0; i < N -2 ;i++){
			if(findNumbersWithsum(array, tripletSum - array[i], i+1 , N - 1)){
				return true;
			}
		}
		return false;
	}//findTripletUsingTwoPointers([2,3,4,8,9,20,40], 32);
	 //O(n^2)

	/*
	[30, 40, 50, 60], [5, 6, 7, 8, 9]
	array1 is a smaller length
	*/
    function findMedianOfTwoSortedArray(array1, array2){
		let n1 = array1.length;
		let n2 = array2.length;
		let begin = 0;
		let end = n1;// in order to find the median of the first array
        while(begin <= end){
			let i1 = Math.floor((end + begin)/2);
			let i2 = Math.floor((n1 + n2 + 1)/2) - i1;
			let max1 = i1 == 0 ? -Infinity : array1[ i1-1 ];
			let min1 = i1 == n1 ? Infinity : array1[i1];
			let max2 = i2 == 0 ? -Infinity : array2[ i2-1 ];
			let min2 = i2 == n2 ? Infinity : array2[i2];
			if(max1 <= min2 && max2 <= min1){
				if((n1+n2) % 2 == 0){
					return (Math.max(max1, max2) + Math.min(min1, min2))/2;
				}else{
					return Math.max(max1, max2);
				}
			}else{
				if(max1 > min2){
					end = i1 - 1; //move left in the smaller array
				}else{
                    begin = i1 + 1;  //Move right in the smaller array
				}
			}
		}

	}

	
	/*
	 * Above problem using a Map in O(n) time
	 * */
	function findNumbersWithSumUsingMap(array, SUM){
		let map = {};
		for(let i=0;i< array.length;i++){
			if(map[SUM - array[i]] != undefined){
				return true;
			}else{
				map[array[i]] = i;
			}
		}
		/*for(let k=0;k < array.length;k++){
			if(map[SUM - array[k]]){
				console.log(array[k] + " " +(SUM - array[k])+" "+" sum to "+ SUM);
				let j = findIndexWithVal(array, SUM - array[k]);
				return [k, j];
			}
		}*/
		console.log("none so");
		return null;
	}//O(n) in time and space
	
	
	//Get the index where the value is the given value
	function findIndexWithVal(array, val){
		for(let i=0;i < array.length;i++){
			if(array[i]==val){
				return i;
			}
		}
	}
	
	
	//find i, j, k such that - A[i]^2 + A[j]^2 = A[z]^2
	/*
	 * 1. Square the numbers
	 * 2. Sort the array
	 * 3. for any element at ith index, linearly search from 0 to i-1
	 * */
	function threeIndexes(array){
		
		for(let i=0;i< array.length;i++){
			array[i] = array[i]* array[i];
		}
		
		array.sort(function(a, b){return a-b;});//nlog(n)
		
		for(let j=0;j < array.length;j++){
			let result = findNumbersWithSumUsingMap(array, array[j]);
			if(result){
				console.log(result, j);
				return result;
			}
		}
		console.log("No such number");
	}//n*O(n) = O(n^2)
	//Book Narasimha says to sort first that might fail when -(ives) are present in the array
	
	
	//Brute force
	function findThePairWithSumClosestToZero(array){
		let minI = 0;
		let minJ = 1;
		let minSum = Math.abs(array[0]+ array[1]);
		for(let i=0;i< array.length-1;i++){
			for(let j=i+1;j< array.length;j++){
				if(Math.abs(array[j]+ array[i]) < minSum){
					minSum = Math.abs(array[j]+ array[i]);
					minI = i;
					minJ = j;
				}
			}
		}
		console.log("Closest to zero sum for indexes- ", minI, minJ);
	}//O(n^2) and O(1)
	
	//Optimal way to find the closest to zero sum and the indexes
	function findThePairWithSumClosestToZeroOptimal(array){
		array.sort((a, b)=> a-b);
		let positiveClosest = Infinity;
		let negativeClosest = -Infinity;
		let i = 0;
		let j = array.length -1;
		let sum= 0;
		let indexesP = [i, j];
		let indexesN = [i, j];
		while(i < j){
			sum = array[i]+ array[j];
			if(sum < 0){
				if(sum > negativeClosest){
					negativeClosest = sum;
					indexesN = [i, j];
					i++;
				}
			}else if(sum > 0){
				if(sum < positiveClosest){
					positiveClosest = sum;
					indexesP = [i, j];
					j--;
				}
			}else{
				positiveClosest = negativeClosest = 0;
				break;
			}
		}
		if(Math.abs(positiveClosest) < Math.abs(negativeClosest)){
			console.log("Closest Sum:: ", positiveClosest, indexesP, array);
		}else{
			console.log("Closest Sum:: ", negativeClosest, indexesN, array);
		}
		
	}//nlog(n)
	
	
	/*
	 * to find if three indexes sum up to K like - K = A[i]+A[j]+A[k]
	 * find i, j, k
	 * */
	//Brute force way
	function findThreeIndexesThatSumToK(array, K){
		for(let i=0;i < array.length-2;i++){
			for(let j=i+1;j< array.length-1;j++){
				for(let k=j+1;k< array.length;k++){
					if(array[i]+array[j]+array[k] == K){
						console.log("The three indexes are: ", i, j, k);
						return;
					}
				}
			}
		}
		console.log('No such three indcies');
	}
	
	/*
	 * 1. Sort
	 * 2. Use two for loops
	 * */
	function findTheThreeIndexesInOptimal(array, K){
		array.sort((a, b)=> a-b);
		for(let k=0; k < array.length;k++){
			for(let i=k+1, j = array.length-1;i<j;){
				if(array[i]+ array[j]+ array[k]===K){
					console.log(i, j, k);
					return;
				}else if(array[i]+ array[j]+ array[k] < K){
					i++;
				}else{
					j--;
				}
			}
		}
		console.log('No three indices');
	}//O(n^2)
	
	
	/*
	 * 1. Bitonic array - the element increase initially monotinically then decreases
	 * 2. To find the element thats the maximum 
	 * 3. Time complexity must be O(log n)
	 * */
	
	function bitonicPoint(array){
		let i = 0;
		let j = array.length-1;
		while(i <= j){
			if(i==j){
				console.log("Bitonic Point: ",array[i]);
				return array[i];
			}else if(i == j-1){
				console.log("Bitonic Point: ", array[i]);
				return array[i];
			}else{
				let mid = Math.floor((i+j)/2);
				if(array[mid-1] < array[mid] && array[mid] > array[mid+1]){
					console.log("Bitonic Point: ", array[mid]);
					return array[mid];
				}else if(array[mid-1]< array[mid] && array[mid]< array[mid+1]){
					i = mid+1;
				}else if(array[mid-1] > array[mid] && array[mid]> array[mid+1]){
					j = mid-1;
				}else{
					console.log("no bitonic");
					return;
				}
			}	
		}
		console.log("no bitonic");
	}//O(log n)
	
	
	/*
	 * Find pivot
	 * */
	function findPivot(array, start, last){
		if(start == last){
			return start;
		}else if(start == last-1){
			if(array[start] > array[last]){
				return start;
			}
			return last;
		}else{
			let mid = Math.floor((start+last)/2);
			if(array[start] >= array[mid]){
				return findPivot(array, start, mid);
			}else{
				return findPivot(array, mid, last);
			}
		}
	}
	
	/*
	 * To find the element in log(n) time in an array - 
	 * The array is sorted and has been rotated unknown number of times
	 * 1. Find Pivot - the element whose next element is smaller then it
	 * 2. Apply binary search on the left or the right of the pivot 
	 * */
	function findElementInRotatedSortedArray(array, element){
		let pivot = findPivot(array, 0, array.length - 1);
		if(array[pivot] == element){
			return pivot;
		}else if(array[pivot] > element && pivot != array.length-1){
			var result = binarySearch(array, pivot+1, array.length-1, element);
			if(result == -1){
			result = 	binarySearch(array, 0, pivot-1, element);
			}
			return result;
		}else if(pivot == array.length-1){
			return binarySearch(array, 0, pivot-1, element);
		}
	}//O(log n)
	
	function binarySearch(array, s, l, e){
		if(s <= l){
			let mid = Math.floor((s+l)/2);
			if(array[mid] == e){
				return mid;
			}else if(array[mid] > e){
				return binarySearch(array, s, mid-1, e);
			}else{
				return binarySearch(array, mid+1, l, e);
			}
		}
		return -1;
	}
	function binarySearch2(array, s, l, e){
		//console.log(s, l);
				if(s <= l){
					let mid = Math.floor((s+l)/2);//console.log(mid, 'mid');
					if(array[mid] == e){

						return mid;
					}else if(array[mid] > e){
						return binarySearch2(array, mid+1, l, e);
					}else{
						return binarySearch2(array, s, mid-1, e);
					}
				}
				return -1;
			}
	
	
	/*
	 * Find repeated element's first index in the array
	 * 1. array[mid]==data && array[mid-1]< data || array[mid] == data && low == mid
	 * */
	
	function findFirstIndex(array, s, l, element){
		if(s <= l){
			let mid = Math.floor((s+l)/2);
			if(array[mid]==element && array[mid-1] < element || array[mid]== element && s ==mid ){ // the condition can be simplified to mid==0 in place of the array[mid]==s
				return mid;
			}else if(array[mid] < element){
				return findFirstIndex(array, mid+1, l, element);
			}else{
				return findFirstIndex(array, s, mid-1, element); //Go to left half when the mid is lesser than or equal to
			}
		}
		return -1;
	}//Log(n)


	function firstIndexIteration(array, element){
		let s = 0, h = array.length - 1;
		while(s <= h){
			let mid = Math.floor((s + h)/2);
			if(array[mid] > element){
                 h = mid - 1;
			} else if(array[mid] < element){
                 s = mid + 1;
			}else {
                    if(mid ==0 || array[mid - 1] < array[mid]){
						return mid;
					} else{
						h = mid - 1;//go left
					}
			}
		}
		return -1;
	}//O(Log n), [5,10,10, 20,20]
	
	/*
	 * Find the last index of a repeated element
	 * 1. array[mid]==data && array[mid+1] > data || array[mid]==data && high == mid
	 * */
	function findLastIndex(array, s, l, element){
		if(s <= l){
			let mid = Math.floor((s+l)/2);
			if(array[mid]==element && array[mid+1]> element || array[mid]== element && l == mid ){
				return mid;
			}else if(array[mid] <= element){ //mind this to go right
				return findLastIndex(array, mid+1, l, element);
			}else{
				return findLastIndex(array, s, mid-1, element);
			}
		}
		return -1;
	}//Log(n)


	function iterationFindLastIndex(array, s, l , element){
		
		while(s <= l){
			let mid = Math.floor((s +l)/2);
			if(array[mid] > element){
                l = mid - 1;
			}else if(array[mid] < element){
				s = mid + 1;
			} else if(/*(array[mid] == element && */array[mid] != array[mid+1] || /*(array[mid] == element && */l == mid){
                return mid;
			} else{
				s = mid + 1;
			}
		}
		return -1;
	}

	/*
		Use the first index and last index occurance difference to find the count of occurances
		Use the first index method to also find the first one's index and substract from the length
	*/
	
	/*
	 * Use the above two methods to find the total repeatations of an element
	 * find first index, find last index, difference between them + 1 
	 * */
	
	
	
	function swap(array, i, j){
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
	
	/*
	 * To get the even on the left and odd on the right of the Array
	 * */
	function seperateOddAndEven(array){
		let left = 0;
		let right = array.length-1;
		while(left < right){
			while(array[left]%2==0 && left < right){
				left++;
			}
			while(array[right]%2==1 && left < right){
				right--;
			}
			if(left < right){
				swap(array, left, right);
				left++;
				right--;
			}
		}
		console.log("Odd and Even Seperated Array: ", array);
	}
	
	/*
	 * Finding i and j such that j - i is maximum and A[j] > A[i]
	 * Brute force O(n^2)
	 * */
	function maxIndexDiff(array){
		let maxDiff = -Infinity;
		for(let i=0;i< array.length-1;i++){
			for(let j=i+1;j< array.length;j++){
				if(array[j] > array[i]){
					if(maxDiff < j-i){
						maxDiff = j-i;
					}
				}
			}
		}
		console.log('Max Diff', maxDiff);
	}//O(n^2)
	
	
	/*
	 * Max index diff for the above problem in O(n)
	 * 1. Maintain the array of Mins - the first element and the min values in the rest
	 * 2. Maintain the array of Maxs - the last element is the same and the left ones are max
	 * */
	function maxIndexDiffOptimal(array){
		let minArray = [];
		minArray[0] = array[0];
		let i=1;
		while(i < array.length){
			minArray[i] = Math.min(array[i], minArray[i-1]);
			i++;
		}
		
		let maxArray = [];
		maxArray[array.length-1] = array[array.length-1];
		let j = array.length -2;
		while(j >=  0){
			maxArray[j] = Math.max(maxArray[j+1], array[j]);
			j--;
		}
		i = j = 0;
		let maxDiff = -Infinity;
		while(i < array.length && j < array.length){
			if(minArray[i] < maxArray[j]){
				if(maxDiff < j -i ){
					maxDiff = j -i;
				}
				j++;
			}else{
				i++;
			}
		}
		return maxDiff;
	}//O(n)
	
	/*
	 * Check of the array is pair wise sorted -i.e.  A[i] < A[i+1]
	 * */
	function checkIfArrayIsPairWiseSorted(array){
		for(let i=0;i < array.length-1;i++){
			if(array[i] > array[i+1]){
				return 'no';
			}
		}
		return 'yes';
	}
	
	/*
	 * Count the frequency of the elements where - 
	 * all the element are lesser than n, positive
	 * 1. Find the expected position of an element and negate it or increase the negative value if already touched
	 * 2. If a position is encountered thats been negated already dont do anything and move to next element
	 * 3. No extra space and 0 is included in the input data
	 * */
	function getFrequencyOptimal(array){
		let pos = 0;
		while(pos < array.length){
			let expectedPosition = array[pos];
			if(array[pos] >= 0 && (array[expectedPosition] >= 0 || array[expectedPosition]=='x') ){
				swap(array, pos, expectedPosition);
				array[expectedPosition] = -1;
			}else if(array[pos] >= 0){
				array[expectedPosition]--;
				array[pos++] = 'x';
			}else{
				pos++;
			}
		}
		console.log(array, "getFrequencyOptimal");
	}//O(n)


	function findSquareRoot(N){
		let start = 1, end = N, result = -1;
		while(start <= end){
			let mid = Math.floor((start + end)/2);
			if(mid * mid == N){
				return mid;
			} else if(mid * mid > N){
			   end = mid - 1;
			}else {
				start = mid + 1;
				result = mid;
			}
		}
		return result;
	}//O(n)


	function searchInInfiniteArrayNaive(array, N){
		let i = 0;
		while(true){
			if(arr[i] == N){
              return i;
			}
			if(arr[i] > N){
				return -1;
			}
			i++;
		}
	}//O(pos)
	
	/*
	  * increment the index by double until its array value is 
		equal or greater than the given number
		when its greater than the given number do a binarySearch for the given number between i/2+1 to i - 1
	  *
	*/
	function searchInInfiniteArrayEfficient(array, N){
		let i = 0;
		if(array[i] == N){
			return i;
		}
		i++;
		while(array[i] < N){
			i = i*2;
		}
		if(array[i]==N){
			return i;
		}
		return iterativeBinarySearch(i/2 + 1, i -1);

	}//The algorithm will reach 2 * position that is log(2*position) time Plus the time for binary search at last
	 //This is commonly called the unbounded binary search


	 /*
	 The array is sorted and may also be rotated and we need to find the given number index
	 [10,20,30,40,50,8,9], x= 30, index = 2
	 [100,200,300,10,20], x= 40, index = -1
	 Get the mid and compare it with the left most element to decide of the left half is sorted
	 From the range in the left most element and the mid element see if the given number is present there
	 else move to the right half
	 */
	 function searchInSortedBinaryArray(array, X){

		let low = 0, high = array.length -1;
		while(low <= high){
			let mid = Math.floor((low+high)/2);
			if(X == array[mid]){
				return mid;
			}
			if(array[mid]  >= array[low]){
				//left half is sorted
				if(array[mid] > X && X >= array[low]){
					//go left
					high = mid - 1;
				}else{
					low = mid + 1;
				}
			}else{
				//right half is sorted
				if(X > array[mid] && X <= X[high]){
					low = mid + 1;
				} else{
                    high = mid - 1;
				}
			}
		}
		return -1;
	 }
 
	 /*
	   Peak element is the one that is greater than its right and left element
	   The intersting property is that any array will have a peak element
	   If the left element of a mid is greater then there will be a peak on the left for sure or if the element
	   on the right is bigger then there is certainly going to be a peak on the right
	   for the first number check if the one to the right is lesser then its a peak
	   for the last element check the left to it
	   The given array is not necessarily sorted
	 */  
	 function findPeakElement(array){
		 let start  = 0;
		 let end = array.length - 1;
		 let length = array.length - 1;
		 while(start <= end){
			 let mid = Math.floor((end+start)/2);
			 if((mid == 0 || array[mid-1] <= array[mid]) && 
			 (mid == length || array[mid+1] <= array[mid])){
				 return mid;
			 }
			 if(mid > 0 && array[mid-1]> array[mid]){
                  end = mid - 1;
			 } else{
				start = mid + 1;
			 }
		 }
		 return -1;
	 }


	 /*
	   Use slow and fast to find the repeating element
	   All the elements upto the max element are present but one is repeating
	 */
	 function findRepeatingUsingSlowFastWHenZeroNotPresent(array){
		 let slow = array[0], fast = array[0];
		  slow = array[slow];
		  fast = array[array[fast]];
		  while(slow != fast){
			slow = array[slow];
			fast = array[array[fast]];
		  }
		  slow = array[0];
		  while(slow != fast){
			  slow = array[slow];
			  fast = array[fast];
		  }
		  return fast;

	}
    function findRepeatingUsingSlowFastWHenZeroPresent(array){
		let slow = array[0] + 1, fast = array[0] + 1;
		slow = array[slow] + 1;
		fast = array[array[fast] + 1] + 1;
		while(slow != fast){
		  slow = array[slow] + 1;
		  fast = array[array[fast] + 1] + 1;
		}
		slow = array[0] + 1;
		while(slow != fast){
			slow = array[slow] + 1;
			fast = array[fast] + 1;
		}
		return fast - 1;

  }

  /**
   * To find the minimize the max sum of pages that every student reads
   * The the book with max number of pages is the lower limit
   * Sum of all the books is the upper limit
   * We can find the mid and check if that is fesable 
   * K is the number of students
   * ***/


   function isFeasable(array, value, K){
	   let required = 1;
	   let sum = 0;
	   for(let i=0;i < array.length;i++){
		   if(sum + array[i] > value){
			   required ++;
			   sum = array[i];
		   }else{
			   sum = sum + array[i];
		   }
	   }
	   return K >= required;
   }

   function findMinPages(array, K){
	   let length = array.length;
	   let max = -Infinity;
	   let sum = 0;
	   for(let i=0;i < length;i++){
		  sum = sum + array[i];
		  max = Math.max(max, array[i]);
	   }

	   let low = max;
	   let high = sum;
	   let result;
	   while(low <= high){
		   let mid = Math.floor((low + high)/2);
		   if(isFeasable(array, mid, K)){
			   high = high - 1;
			   result = mid;
		   }else{
			   low = mid + 1;
		   }
	   }
	   return result;
   }//O(n * log(sum - max))


	

	
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
		    findNumbersWithSumUsingMap,
		    threeIndexes,
		    findThePairWithSumClosestToZero,
		    findThePairWithSumClosestToZeroOptimal,
		    findThreeIndexesThatSumToK,
		    findTheThreeIndexesInOptimal,
		    bitonicPoint,
		    findElementInRotatedSortedArray,
		    findFirstIndex,
		    findLastIndex,
		    seperateOddAndEven,
		    maxIndexDiff,
		    maxIndexDiffOptimal,
		    checkIfArrayIsPairWiseSorted,
			getFrequencyOptimal,
			searchInSortedBinaryArray,
			searchInInfiniteArrayEfficient,
			searchInInfiniteArrayNaive
		   };
}
module.exports = {Search};