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
	}
	//Note that the (right - left) is the width not (right - left + 1) since right is one ahead of the length of array
	return {
		increment,
		findNumberOfBase,
		reverseInteger
	}
}
module.exports = All;