function All(){
	function increment(arr, n){
		let carry = Math.floor((arr[n-1]+1) / 10);
        arr[n-1] = (arr[n-1]+1) % 10;
        if(carry) {
            for(let j=n-2;j >= 0;j--){
                if(carry){
                    carry = Math.floor((arr[j]+1) / 10);
                    arr[j] = (arr[j] + 1) % 10;
                }
            }
        }
        if(carry) {
            arr = [carry, ...arr];
        }
        return arr;
	}
	
	function findNumberOfBase(N, base){
		var p = 1;
		var op = 0;
		while(N){
			op = op + N%9 * p;
			N = Math.floor(N/9);
			p = p * 10;
		}
		return op;
	}
	function reverseInteger(N) {
		var rev = 0;
		while(N){
			var x = N%10;
			N = Math.floor(N/10);
			rev = rev * 10 + x;
		}
		return rev;
	}
	function flipMZerosToGetMaxocnsecutiveOnes(array, M) {
		var left = 0, right = 0, max = 0, zeroCountSoFar = 0, aleft;
		
		var i = 0;
		while(right < array.length){
			if(zeroCountSoFar <= M){
				if(array[right]==0){
					zeroCountSoFar++;
				}
				right++;
			}
			if(zeroCountSoFar > M){
				if(array[left]==0){
					zeroCountSoFar--;
				}
				left++;
			}
			
			if(right - left  > max && zeroCountSoFar <= M){
				max = right - left;
				aleft = left;
			}
		}
		for(let i = aleft;i < aleft + max;i++){
			if(array[i]==0){
				console.log(i);
			}
		}
		console.log(max, "max window", aleft);
	}//Note that the (right - left) is the width not (right - left + 1) since right is one ahead of the length of array
	
	
	/*
	 * Given a Sorted array, arrange it for example like this - i/p array [1,2,3,4]
	 * o/p - [4,3,2,1]
	 * Using extra space
	 * */
	function arrangeAnArrayInPairsWithNewArray(array){
		var newArray = [];
		var lastIndex = array.length - 1;
		var firstIndex = 0;
		for(let i=0;i < array.length;i++){
			if(i % 2 == 0){
				newArray.push(array[lastIndex --]);	
			} else{
				newArray.push(array[firstIndex ++]);
			}
		}
		return newArray;
	}
	
	/*
	 * Given a Sorted array, arrange it for example like this - i/p array [1,2,3,4]
	 * o/p - [4,3,2,1]
	 * Using NO extra space
	 * 1. Get Maximun Element + 1
	 * 2. Replace 
	 * */
	function arrangeAnArrayInPairsWithNewArraySpaceOptimized(array){
		
		var maxIndex = array.length - 1;
		var minIndex = 0;
		var max = array[maxIndex] + 1;
		for(let i=0;i < array.length;i++){
			if(i % 2 == 0){
				array[i] += (array[maxIndex--] % max) * max;	
			} else{
				array[i] += (array[minIndex++] % max) * max;
			}
		}
		return array.map((a) => Math.floor(a/max));
	}
	
    /*
     * Reverse array in pairs
     * */	
	function reverseInGroups(arr, n, k){
        let newArray = [];
        for(let i=0;i < n; i = i+ k){
            let left = i;
            let right = Math.min(i+ k - 1, n-1);
            while(left < right){
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
    }
	
	/*
	 * Chocolate Distribution Problem
	 * The array elements are the number of chocolates 
	 * These need to be distributed so that the difference between the min and max in a distribution is minimum
	 * N = 8, M = 5
			A = {3, 4, 1, 9, 56, 7, 9, 12}
			Output: 6
			Explanation: The minimum difference between 
			maximum chocolates and minimum chocolates 
			is 9 - 3 = 6 by choosing following M packets :
			{3, 4, 9, 7, 9}.
			
			Solution - sort the given array, slide the window of given size while checking for the difference
	 * */
	function findMinDiff(arr,n,m){
        arr = arr.sort((a, b)=> a-b );
        let min = Infinity;
        for(let i=0;i < n-m+1;i++){
            if(min >  arr[i+m-1] - arr[i]){
                min =  arr[i+m-1] - arr[i];
            }
        }
        return min;
    }



	function GCD(a, b){
         if(b==0) {
			 return a;
		 }
		 return GCD(b, a % b);
	}

	function GCDSimple(a, b){
		while(a!=b){
			if(a > b){
				a = a - b;
			}else{
                b = b - a;
			}
		}
		return a;
   }


	function isPrime(N){
		if(N % 2==0 || N % 3==0){
			return false;
		}
			 for(var i=5; i*i < N;i=i+6) {
			     if(N % i ==0 || N % (i+2)==0){
					 return false;
				 }
			 }
			 return false;
	}


	function primeNumbersUptoN(N){
		let isPrime = [];
		for(let i=0;i <=N ;i++){
			isPrime[i] = true;
		}
		for(let i=2; i <= N  ;i++){
			if(isPrime[i]) {
				console.log(i);
				for(let j= i*i; j <= N; j= j + i){
					isPrime[j] = false;
				}
			}
		}
	}

	function calculatePower(x, y){
		if(y==0) {
			return 1;
		}
		let result = calculatePower(x, Math.floor(y/2));
		result = result * result;
		if(y%2==0){
			return result;
		}else {
			return result * x;
		}
	}//Log(n)
	

	function findDivisorsOne(N){
		let j = 0;
		for(let i=1; i*i<=N; i++) {
			j =  i;
			if(N % i ==0){
				console.log(i);
			}
		}
		j++;
		for(;j <= N ;j++) {
			if(N % j ==0){
				console.log(j);
			}
		}
	}

	function findDivisorsTwo(N){
		let i;
		for(i=1; i*i<N; i++) {
			if(N % i ==0){
				console.log(i);
			}
		}
		
		for(;i >= 1 ;i--) {
			if(N % i ==0){
				console.log(N/i);
			}
		}
	}


	function powerUsingBinary(x, y){
		let result = 1;
		while(y){
			if(y % 2 == 1){
				result = result * x;
			}
			x = x * x;
			y = Math.floor(y/2);
		}
		return result;
	}

	function kThBitSetNive(N, k){
	   let x = 1;
       for(let i=0;i < (k-1);i++){
          x = x * 2;
	   }
	   if(n & x !=0){
           console.log('Set');
	   } else{
		console.log('UnSet');
	   }
	}

	function isKthBitSetRightShift(N, k){
		let x = N >> k-1;
		if(x & 1!=0){
           console.log('Set');
		}else {
			console.log('UnSet');
		}
	}

	function isKthBitSetLeftShift(N, k){
		let x = 1 << k-1;
		if(N & x!=0){
           console.log('Set');
		}else {
			console.log('UnSet');
		}
	}
	
    function countSetBits(N){
		let res = 0;
		while(N!=0){
			if(N%2!=0){
				res++;
			}
			// res = res + (N & 1) - //short
			N = Math.floor(N/2);
		}
		return res;
	}


	function countSetBitsEfficient(N){
		let res = 0;	  
		while(N){
				  N = N & (N-1);
				  res++;
			  }
			  return res;
	}

	function efficientFindSetBits(N){
	  let table = [];
	  table[0] = 0;
	  for(let i=1;i < 256 ;i++){
		  table[i] = table[i & (i-1)] + 1;
	  }
	  return table[N & 255] + table[N >> 8 & 255] + table[N >> 16 & 255] + table[N >> 24]
	}//O(1) - constant time after the table is in place


    function primeFactors(N){
		for(let i=2;i*i <=  N;i++){
			while(N%i == 0){
				console.log(i);
				N = Math.floor(N/i);
			}
		}
		if(N > 1){
			console.log(N);
		}
	}

	/*
	* Given a number N, return if its a power of 2
	*/
	function powerOfTwo(N){
		while(N){
			if(N % 2 ==0){
				N = Math.floor(N/2);
			}else {
				break;
			}
		}
		return N ==1;
	}

	/*
	* Given a number N, find an efficient way to check if its a power of 2
	*
	*/
	function powerOfTwoEfficient(N){
		if(N==0)
		return false;
		return (N & (N-1)) ==0 ;
	}

	/*
	* This program takes an array of integers and displays the number that has odd occurrences in the array.
	*/
    function oddOccuring(array){
	   let result = array[0];
       for(let i=1;i < array.length;i++){
		result = result ^ array[i];
	   }
	   return result;
	}

	/*
	* Find the two numbers that occur odd number of times in a given list 
	*/
    function twoOddNumbers(list){
		let result = list[0];
		for(let i=1;i< list.length;i++){
			result = result ^ list[i];
		}
		let resultWithBitSet = result & (~(result-1));
		let result1 = 0;
		let result2 = 0;
		for(let j=0;j < list.length;j++){
			if(list[j] & resultWithBitSet) {
				result1 = result1 ^ list[j];
			}else {
				result2 = result2 ^ list[j];
			}
		}
		console.log(result1, result2);
	}

	/*
		Power set i.e all the combinations of a set - sub sets of a set = 2^n , Including the Blank Set
		- Always make sure to use the small braces while using the binary operators
	*/
	function powerSet(list){
		 let n = list.length;
		 let setsCount = 1 << n;
		 for(let i=0;i < setsCount;i++){
			 for(let j=0;j < n;j++){
				 if((i & (1 << j)) != 0){
					 console.log(list[j], i);
				 }
			 }
			 console.log('----')
		 }
	}


	/*
	 Number raised to how many powers of 2
	*/
	function howManyPowersOfTwo(N){
		if(N==1){
			return 0;
		}
		N = Math.floor(N/2);
		return(1 + howManyPowersOfTwo(N));
	}

	/*
	Change to Binary representation
	*/
	function printBinary(N){
		if(N ==0 ){
			return 0;
		}
		X = Math.floor(N/2);
		printBinary(X);
		console.log(N%2);
	}

	function printNto1(N){
        if(N==0){
			return;
		}
		console.log(N);
		printNto1(N-1);
	}//T(n) = T(n-1) + theta(1)


	function print1ToN(N){
        if(N == 0){
			return;
		}
		print1ToN(N - 1);
		console.log(N);
	}


	function tailRecurssionFactorial(N, K){
		// a function is tail recurssive when the last thing that the functinon does is call itself and
		// when that is done there is nothing left for the parent to do.
		// example printNto1
		if(N==1 || N==0){
			return K;
		}
		return tailRecurssionFactorial(N-1, K*N);
	}//tailRecurssionFactorial(N, 1)//lesser auxiliary space

	return {
		increment,
		findNumberOfBase,
		reverseInteger,
		arrangeAnArrayInPairsWithNewArray,
		arrangeAnArrayInPairsWithNewArraySpaceOptimized,
		GCD,
		GCDSimple,
		isPrime,
		primeNumbersUptoN,
		calculatePower,
		findDivisorsOne,
		findDivisorsTwo,
		kThBitSetNive,
		isKthBitSetRightShift,
		isKthBitSetLeftShift,
		countSetBits,
		countSetBitsEfficient,
		powerOfTwo,
		twoOddNumbers,
		howManyPowersOfTwo,
		printBinary,
		printNto1,
		print1ToN
	}
}
module.exports = All;