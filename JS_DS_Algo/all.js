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
	
	
	return {
		increment,
		findNumberOfBase,
		reverseInteger,
		arrangeAnArrayInPairsWithNewArray,
		arrangeAnArrayInPairsWithNewArraySpaceOptimized
	}
}
module.exports = All;