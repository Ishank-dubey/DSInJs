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
				
				if(DP[i][j] && length < len){
					start = i;
					length = len;
				}
				
			}
		}
		console.log("Start: ", start, length);
	}
	
	
	/*
	 * 1. tiling Problem via DP
	 * 2. Boils down to this - F[N] = F[N-1] + F[N-2]
	 * 3. Given a tile of size 2 x 1
	 * 4. We can arrange them to tile(fill) an arean vertically or horizontally
	 * 5. How many ways we can fill an area of size - 2 x n
	 * 6. The equation says that for the length of n - can be filled by adding one vertical tile to 
	 *    what has been used to fill the length of n-1 OR
	 *    we can add two horizontal tiles to what has filles the lengt of n-2
	 * 7. F[1] can be filled only in one way
	 * 8. F[2] can be filled in two ways to begin with
	 * */
	function tilingProblem(N){
		var DP = [];
		
		DP[1] = 1;
		DP[2] = 2;
		
		for(let i = 3; i <= N; i++){
			DP[i] = DP[i-1] + DP[i-2];
		}
		return DP[N];
	}//O(n) in time and space
	
	
	/*
	 * Above problem via recurssion
	 * */
	function tilingProblemRecurssion(N){
		return tilingProblemRecusrrionInner(N);
		function tilingProblemRecusrrionInner(n){
			if(n == 1){
				return 1;
			}
			if(n == 2){
				return 2;
			}
			return (tilingProblemRecusrrionInner( n-1 ) + tilingProblemRecusrrionInner( n-2 ));
		}
	}//O(n ^ 2) in time
	
	
	/*
	 * 1. To check of a given string is present in a Text
	 * 2. Its not necessary to find the characters in a continous manner 
	 * 3. DP[length of sub string][length of the text] = number of sub strings found
	 * */
	function subStrNotInOrder(s1, s2){
		var DP =[];
		for(let i=0;i <= s1.length;i++){
			DP.push([]);
		}
		for(let z=0;z <= s2.length;z++){
			DP[0][z] = 1;
		}
		for(let l=1;l <= s1.length;l++){
			DP[l][0] = 0;
		}
		DP[0][0] = 1;
		

		for(let k=0;k < s2.length;k++){
		for(let j=0;j < s1.length;j++){
				if(s1[j] == s2[k]){
					DP[j+1][k+1] = DP[j][k] + DP[j+1][k];
				}else{
					DP[j+1][k+1] = DP[j+1][k];
				}
			}
		}
		return (DP[s1.length][s2.length]);
	}//O(m*n) in time and space
	
	
	/* 1. To find the maximum points that be acquired while going down or right in a 2-D matrix
	 * 
	 * */
	function collectMaximumApples(matrix){
		let rows = matrix.length;
		let columns = matrix[0].length;
		var s = [];
		for(let i=0;i < rows;i++){
			s.push([]);
		}
		for(let row=0;row < 1;row++){
			for(let column=0;column < columns;column++){
				if(column >=1 )
				 s[row][column] = matrix[row][column] +s[row][column-1];
				else
					s[row][column] = matrix[row][column];
			}
		}
		
		for(let column=0;column < 1;column++){
			for(let row=0;row < rows;row++){
				if(row >=1 )
				 s[row][column] = matrix[row][column] +s[row-1][column];
				else
					s[row][column] = matrix[row][column];
			}
		}
		
		for(let row=1;row < rows;row++){
			for(let column=1;column < columns;column++){
				s[row][column] = matrix[row][column] + Math.max(s[row-1][column], s[row][column-1]);
			}
		}
		console.log(s[rows-1][columns-1]);
	}//O(n^2) in time and space
	
	
	/*
	 * 1. The above problem when its possible to go diagonally
	 * 2. Since all the values are going to be positive the diagonal wont actually occur as we can always take
	 *    either the vertical or horizontal path along with the diagonal element
	 * */
	
	function collectMaximumApplesWithDiagonallyPossible(matrix){
		let rows = matrix.length;
		let columns = matrix[0].length;
		var s = [];
		for(let i=0;i < rows;i++){
			s.push([]);
		}
		for(let row=0;row < 1;row++){
			for(let column=0;column < columns;column++){
				if(column >=1 )
				 s[row][column] = matrix[row][column] +s[row][column-1];
				else
					s[row][column] = matrix[row][column];
			}
		}
		
		for(let column=0;column < 1;column++){
			for(let row=0;row < rows;row++){
				if(row >=1 )
				 s[row][column] = matrix[row][column] +s[row-1][column];
				else
					s[row][column] = matrix[row][column];
			}
		}
		
		for(let row=1;row < rows;row++){
			for(let column=1;column < columns;column++){
				s[row][column] = matrix[row][column] + Math.max(s[row-1][column], 
						                                  Math.max(s[row][column-1], s[row-1][column-1]));
			}
		}
		console.log(s[rows-1][columns-1]);
	}//O(n^2) in time and space
	
	/*
	 * 1. To find the biggest square of 1s in a 2-D binary matrix
	 * 2. Have an auxialliary matrix with the same 1sth row ans 1st column as the binary matrix
	 * 3. Now for every other element we need to see of the upper, left and diagonal are having 1
	 *    if they are all one and the element too is 1 then add 1 more to the min of the three from the Aux
	 * 4. Finally the Auxilliary matrix need to scanned for the max size of the 1s Square
	 * */
	function maximumSizeSquareOf1s(matrix){
		var columns = matrix[0].length;
		var rows = matrix.length;
		var aux = [];
		for(let r=0;r < rows;r++){
			aux.push([]);
		}
		for(let j=0; j < columns;j++){
			aux[0][j] = matrix[0][j];
		}
		for(let j=0; j < rows;j++){
			aux[j][0] = matrix[j][0];
		}
		let x=-1, y=-1, size=0;
		for(let row=1;row < rows;row++){
			for(let column=1;column < columns;column++){
				if(matrix[row][column] == 1){
					aux[row][column] = 1 + Math.min(aux[row-1][column], Math.min(aux[row][column-1], 
							                                                      aux[row-1][column-1]));
					if(aux[row][column] > size){
						size = aux[row][column];
						x = row;
						y = column;	
					}
				}else{
					aux[row][column] = 0;
				}
			}
		}
		console.log(size, x-size+1, y-size+1);
	}//O(m*n)
	
	
	/*
	 * 1. Find the max continous sum in an array, also called kadane's
	 * */
	
	function maxContinousSum(array){
		var max = -Infinity;
		var local = 0;
		var startIndex;
		var lastIndex;
		for(let i=0;i < array.length ;i++){
			if(array[i] >= array[i]+local){
				startIndex = i;
			}
			
			local = Math.max(array[i], array[i]+local);
			if(local > max){
				max = local;
				lastIndex = i;
			}
		}
		console.log(max, startIndex, lastIndex);
	}
	
	
	/* 1. To find the maximum sum possible in a matrix n x n in a sub-matrix
	 * 2. The matrix can have negative values
	 * 3. Now, we can have the entire sum first
	 * 4. The we can go row by row and see if including an element in this row w/o the 0th, 1st, 2nd an d so on..
	 * 5. The aux martix will have the sum of all the rows till its row including itself. 
	 * 
	 * */
	function findMaxSum(matrix){
		var aux = [];
		var columns = matrix[0].length;
		for(let i=0;i < matrix.length;i++){
			aux.push([]);
		}
		for(let j=0;j < columns;j++){
			aux[0][j] = matrix[0][j];
		}
		for(let i=1;i < matrix.length;i++){
			for(let j=0;j < columns ;j++){
				aux[i][j] = aux[i-1][j] + matrix[i][j];
			}
		}
		var maxOverall = 0;
		var min = 0, 
		    subMatrixSum = 0;//this sum is for the sub matrixes
		for(let i=0;i < columns;i++){
			for(let j=i;j < matrix.length;j++){
				subMatrixSum = 0;
				min = 0;
				
				for(let k=0;k < columns ;k++){
					if(i==0){
						subMatrixSum = subMatrixSum + aux[j][k];
					}else{
						subMatrixSum = subMatrixSum - aux[i-1][k] + aux[j][k]; 
					}
					if(min > subMatrixSum){
						min = subMatrixSum;
					}
					if(subMatrixSum - min > maxOverall){
						maxOverall = subMatrixSum - min;
					}
				}
			}
		}
		console.log(maxOverall);
		
	}//O(n^3)
	
	/*
	 * 1. Min jumps needed to reach from start to ending
	 * 2. The value of an element is the max we can jumps from there
	 * 3. We will need to fill the result array bottom-up
	 * */
	
	function minSteps(array){
		var result = [];
		result[0] = 0;
		for(i=1;i < array.length;i++){
			result[i] = Infinity;
			for(j=0;j < i ;j++){
				if(array[j] >= i-j){
					if(result[j] + 1 < result[i]){
						result[i] = result[j] + 1;
					}
				}
			}
		}
		console.log(result[array.length-1]);
	}//O(n^2)
	
	/*
	 * 1. Find biggest sub-matrix with all 1s
	 * 2. From an auxilliary matrix that has the sum of 1s for each row in a column
	 * 3. For each row please use the Stack chapter's max area in Histogramj and update the Max accordingly
	 * DS.highestRectangularAreaInHistogram([2, 5,6, 7, 2, 1, 10, 10])
	 * */
	function maxSubMatrix(matrix){
		var aux = [];
		var cols = matrix[0].length;
		for(let i=0;i < matrix.length;i++){
			aux.push([]);
		}
		for(let i=0;i < cols;i++){
			aux[0][i] = matrix[0][i];
		}
		for(let i=1;i < matrix.length;i++){
			for(let j=0;j < cols;j++){
				if(matrix[i][j]==1){
					aux[i][j] = aux[i-1][j]+1;
				}
			}
		}
		
		var DS = require('./DS');
		var max = 0;
		var local;
		for(let i=0;i < matrix.length;i++){
			local = DS.highestRectangularAreaInHistogram(aux[i]);
			if(local > max){
				max = local;
			}
		}
		console.log(local);
	}
	
	/*
	 * 1. Longest increasing Sub Sequence
	 * 2. Via recurssion
	 * 3. L[i] = 1 + L[j] where 1 < j < n, array[j] < array[i]
	 * 4. For Loop + Recurssion
	 * */
	function lisRecurssion(array){
		var max = 1;
		return lisRecurssionInner(array.length-1);
		function lisRecurssionInner(N){
			var maxInner = 1;
			if(N === 1){
				return 1;
			}
			for(let i=1;i < N;i++){
				var result = lisRecurssionInner(i);
				if(array[i-1] < array[N-1] && res+1 > maxInner){
					maxInner = res + 1;
				}
			}
			
			max = Math.max(max, maxInner);
			return max;
		}
	}//Time complexity is O(n*n)
	
	
	/*
	 * 1. Above LIS problem via DP
	 * 2. L[i] = Max(L[i-1]...L[0])+1
	 * 3. LIS[x] = 1;
	 * 4. Use 2 for loops the seconed is nested
	 * */
	
	function LISviaDP(array){
		var LIS = [];
		LIS[0] = 1;
		
		for(let i=1;i < array.length;i++){
			LIS[i] = 1;
			for(let j=0;j < i;j++){
				if(array[j] < array[i] && LIS[i] < LIS[j]+1){
					LIS[i] = LIS[j]+1;
				}
			}
		}
		var max = -Infinity;
		for(let k=0;k < LIS.length;k++){
			if(LIS[k] > max){
				max = LIS[k];
			}
		}
		return max;
	}//O(n^2) in time and O(n) in space
	
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
		longestPalindromeDP,
		tilingProblem,
		tilingProblemRecurssion,
		subStrNotInOrder,
		collectMaximumApples,
		collectMaximumApplesWithDiagonallyPossible,
		maximumSizeSquareOf1s,
		findMaxSum,
		maxContinousSum,
		minSteps,
		maxSubMatrix,
		lisRecurssion,
		LISviaDP
		};
}
module.exports = {DP}