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
	
	return {
		factorialRecurssion,
		factorialWithiteration,
		factorialWithDPAndIteration,
		factorialWithDPAndRecurssion,
		fibonacciWithDP,
		setsWithSumOfK
		};
}
module.exports = {DP}