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
	}//O(sum * n)
	
	return {
		factorialRecurssion,
		factorialWithiteration,
		factorialWithDPAndIteration,
		factorialWithDPAndRecurssion,
		fibonacciWithDP,
		setsWithSumOfK,
		recursivePartitionProblem,
		partitionProblemViaDP
		};
}
module.exports = {DP}