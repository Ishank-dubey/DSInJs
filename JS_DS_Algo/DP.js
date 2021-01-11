function DP(){
	function factorialRecurssion(N){
		if(N == 0 || N == 1){
			return N;
		}
		return N * factorialRecurssion(N-1);
	}//O(n), O(n) in space
	function factorialWithiteration(N){
		let n = N;
		let result = 1;
		for(;n > 0 ;n--){
			result = result * n;
		}
		return result;
	}//O(n), O(1) in space
	function factorialWithDPAndIteration(N){
		let fact = [];
		fact[0] = 1;
		for(let n=1;n <= N ;n++){
			fact[n] = fact[n-1] * n;
		}
		return fact[N];
	}//O(n), O(n) in space
	function factorialWithDPAndRecurssion(N){
		let fact = [];
		return factorialWithDPAndRecurssionInner(N);
		function factorialWithDPAndRecurssionInner(N){
			if(N == 0 || N ==1 ){
				return 1;
			}
			if(fact[N]){
				return fact[N];
			}
			fact[N] = N * factorialWithDPAndRecurssionInner(N-1);
			return fact[N];
		}
	}//O(N) for time and Space
	
	function fibonacciWithDP(N){
		let fibo = [];
		return fibonacciWithDPInner(N);
		function fibonacciWithDPInner(N){
			if(N == 0){
				return 0;
			}
			if(N == 1 || N == 2){
				return 1;
			}
			if(fibo[N]){
				return fibo[N];
			}
			fibo[N] = fibonacciWithDPInner(N - 1) + fibonacciWithDPInner(N - 2);
			return fibo[N];
		}
	}//O(n) in time and space else becomes O(n^n) if we use without fibo array
	
	/*
	 * Find window with the max sum, the window can have continous elements
	 * 1. n log n is already described in Divide and Conquer module
	 * 2. Here we will see the O(n) method
	 * */
	
	
	/*
	 * Find all the combinations that sum up to K
	 * */
	function setsWithSumOfK(array, K){
		let innerArray = [];
		setsWithSumOfKInner(K, array.length-1, 0);
		function setsWithSumOfKInner(sum, ini, index){
			if(sum==0){
				print(innerArray, index);
				return;
			}
			if(ini < 0){
				return;
			}
			if(array[ini] <= sum){
				innerArray[index] = array[ini];
				setsWithSumOfKInner(sum - array[ini], ini-1, index+1);	
			}
			setsWithSumOfKInner(sum, ini-1, index);
		}
	}//O(2^n), other way is find all the combinations and sum them
	function print(array, index){
    	let newArray = [];
	    	for(let i=0;i < index;i++){
	    		newArray.push(array[i]);
	    	}
    	console.log(newArray);
    }	
	
	/*
	 * Partition Problem
	 * Given an array of positive numbers - To check if the array(set) can be divided into
	 * Two halves so that their sums are equal
	 * 1. If the sum is odd - this is not possible to have two equal halves
	 * 2. If the Sum is even the problem boils down to finding a sub set that sums upto sum/2
	 * 3. This has a recurssion and a DP solution  
	 * */
	function recursivePartitionProblem(array, SUM){
		if(SUM % 2 !=0 ){
			return false;
		}
		return recurcivePartitioinProblemRecurssiveInner(array.length - 1, SUM/2);
		function recurcivePartitioinProblemRecurssiveInner(ini, sum){
			if(sum == 0){
				return true;
			}
			if(ini < 0){
				return false;
			}
			return (recurcivePartitioinProblemRecurssiveInner(ini - 1, sum - array[ini]) || 
			  recurcivePartitioinProblemRecurssiveInner(ini -1, sum));
		}
	}//time complexity is O(2^n)
	
	/*
	 * Partition problem described above via Dynamic Programming
	 * 1. Lets maintain a 2-D array that has Sum as row and index as column
	 * 2. We will create the 2-D array going Bottom-Up
	 * 3. DP[s][n] represents that sum s is possible with sub-set of n elements
	 * 4. Initial assumptions
	 *    a. DP[0][0] = true, DP[0][x] = true since 0 can be 
	 * */
	function partitionProblemViaDP(array, SUM){
		var DP = [];
		
		
		
		if(SUM % 2 != 0){
			return false;
		}
		
		for(let i=0;i <= SUM/2 ;i++){
			DP.push([]);
		}
		
		//SUM = SUM/2;
		
		for(let i=0;i <= array.length;i++){
			DP[0][i] = true;
		}
		for(let j=1;j <= SUM/2;j++){
			DP[j][0] = false;
		}
		
		for(let i=1; i <= SUM/2 ;i++){
			for(let j= 1; j <= array.length ;j++){
				DP[i][j] = DP[i][j-1];
				if(i >= array[j]){
					DP[i][j] = DP[i][j] || DP[i - array[j]][j-1];
				}
			}
		}
		
		return DP[SUM/2][array.length];
	}//O(sum * n)in time complexity
	
	
	/*
	 * 1. Matrix chain multiplication
	 * 2. 
	 * 
	 * */
	
	
	/*
	 * 1. Maximum Palindrominc sub-sequence
	 * 2. Its different form a Sub string, its a sub sequence - 
	 *    abca => aa is a sub sequence and is a palindrome
	 * 3. The below is a recursive approach
	 * 4. Since this is a sub sequence we can consider - 
	 *    a. L(i, j) is the longest sub sequence possible between i and j
	 *    b. if array[i] = array[j] then L(i, j) = 2 + L(i+1, j-1)
	 *    c. if array[i] = array[j] and j = i+1 then L(i, j) = 2
	 *    d. if i = j, L(i, j) = 1
	 *    e. check for L(i+1, j) or L(i, j-1) and select the Max of either
	 * */
	function longestPalendromicSubSequenceRecurssive(array){
		return longestPalendromicSubSequenceRecurssiveInner(0, array.length-1);
		
		function longestPalendromicSubSequenceRecurssiveInner(i, j){
			if(i == j){
				return 1;
			}
			if(array[i] == array[j] && j == i+1){
				return 2;
			}
			if(array[i] == array[j]){
				return 2 + longestPalendromicSubSequenceRecurssiveInner(i+1, j-1);
			}else{
				return Math.max(longestPalendromicSubSequenceRecurssiveInner(i+1, j)
						, longestPalendromicSubSequenceRecurssiveInner(i, j-1));
			}
		}
	}//Exponential time complexity
	
	/*
	 * 1. Same problem as above via DP
	 * 2. table[i][i] = 1 since each character is a plaindrom
	 * 3. point 2 gives this is table a bottom values for along the Diagonal
	 * 4. Since Diagonal elements are available we will need to go for bottom-up approach along the diagonal
	 * 5. The diagonal is the same approach for the Matrix multiplication chain problem 
	 * 6. We will follow the iteration that revolves around the diagonal
	 * */
	
	function longestPalindromeSubSeqViaDP(array){
		var DP = [];
		
		for(let j=0;j < array.length;j++){
			DP.push([]);
		}
		
		for(let j=0;j < array.length;j++){
			DP[j][j] = 1;
		}
		var N = array.length;
		for(let len=2;len <= N ;len++){
			for(let i=0;i < N-len+1;i++){
				var j = len + i - 1;
				
				if(len ==2 && array[i]== array[j]){
					DP[i][j] = 2;
				}else if(array[i]== array[j]){
					DP[i][j] = DP[i+1][j-1] + 2;
				}else {
					DP[i][j] = Math.max(DP[i+1][j], DP[i][j-1]);
				}
			}
		}
		return DP[0][N-1];
	}//O(n^2)
	
	/*
	 * Longest Palindrome sub string
	 * 1. Three nested loops
	 * 2. Outer loops maintain the sub string
	 * 3. The inner most loop will check if the string in question is a palindrom
	 * 4. Brute force with O(n^3)
	 * */
	function longestSubString(array){
		let length = 1;
		let start;
		for(let i=0;i < array.length;i++){
			for(let j=i+1;j < array.length;j++){
				let flag = true;
				
				for(let k=0;k < Math.floor(( j - i + 1)/2);k++){
					if(array[i+k] != array[j-k]){
						flag = false;
						break;
					}
				}
				
				if(flag && (j-i+1) > length){
					start = i;
					length = (j-i+1);
				}
			}
		}
		console.log("Substring: ", start, length);
	}
	
	/*
	 * 1. the above problem via DP
	 * 2. table[i][i] is one as a single letter is a palindrome
	 * 3. due to point 2 we can follow the diagonal approach
	 * 4. 
	 * */
	function longestPalindromeDP(array){
		let DP = [];
		let length = 1;
		let start;
		for(let i=0;i < array.length;i++){
			DP.push([]);
		}
		for(let i=0;i < array.length;i++){
			DP[i][i] = true;
		}
		for(let len=2;len <= array.length;len++){
			for(let i=0;i < array.length - len +1 ;i++){
				var j = len + i - 1;
				
				if(len ==2 && array[i]== array[j]){
					DP[i][j] = true;
				}else if(array[i]== array[j]){
					DP[i][j] = DP[i+1][j-1];
				}
				console.log('in');
				if(DP[i][j] && length < len){
					start = i;
					length = len;
				}
				
			}
		}
		console.log("Start: ", start, length);
	}
	
	return {
		factorialRecurssion,
		factorialWithiteration,
		factorialWithDPAndIteration,
		factorialWithDPAndRecurssion,
		fibonacciWithDP,
		setsWithSumOfK,
		recursivePartitionProblem,
		partitionProblemViaDP,
		longestPalendromicSubSequenceRecurssive,
		longestPalindromeSubSeqViaDP,
		longestSubString,
		longestPalindromeDP
		};
}
module.exports = {DP}