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
		return lisRecurssionInner(array.length);
		function lisRecurssionInner(N){
			var maxInner = 1, result;
			if(N == 1){
				return 1;
			}
			for(let i=1;i < N;i++){
				 result = lisRecurssionInner(i);
				if(array[i-1] < array[N-1] && (result + 1) > maxInner){
					maxInner = result + 1;
				}
			}
			max = Math.max(max, maxInner);
			return maxInner;
		}
	}//Time complexity is O(exponential)
	
	
	/*
	 * 1. Above LIS problem via DP
	 * 2. L[i] = Max(L[i-1]...L[0])+1
	 * 3. LIS[x] = 1;
	 * 4. Use 2 for loops the second is nested
	 * */
	
	function LISviaDP(array){
		var LIS = [];
		var getTheIndexesArray = [];
		LIS[0] = 1;
		
		for(let q=0;q < array.length;q++){
			getTheIndexesArray.push(-1);
		}
		
		for(let i=1;i < array.length;i++){
			LIS[i] = 1;
			for(let j=0;j < i;j++){
				if(array[j] < array[i] && LIS[i] < LIS[j]+1){
					LIS[i] = LIS[j]+1;
					getTheIndexesArray[i] = j;
				}
			}
		}
		var max = -Infinity;
		var theIndexAtLast;
		for(let k=0;k < LIS.length;k++){
			if(LIS[k] > max){
				max = LIS[k];
				theIndexAtLast = k;
			}
		}
		let k = theIndexAtLast;
		
		print(theIndexAtLast);
		function print(index){
			if(getTheIndexesArray[index] == -1 ){
				console.log(array[index]);
				return 
			}
			print(getTheIndexesArray[index]);
			console.log(array[index]);
		}
		
		return max;
	}//O(n^2) in time and O(n) in space
	
	
	
	/*
	 * 1. Given T[n] = Σ 2 * T[i] * T[i-1], where i varies from 1 to n-1
	 * 2. Given that T[0] = T[1] = 2; 
	 * */
	
	function expression1(N) {
		var DP = [];
		var T = [];
		DP[0] = DP[1] = 2;
		DP[2] = 8;
		var sum = 0;
		for(let i=1;i <= N-1;i++){
			DP[ i+1 ] = 2 * DP[i] * DP[i-1] + sum;
			sum = DP[i + 1 ];
		}
		return sum;
		
		/*
		 * The book way is a bit different, it is - 
		 *  function test(N){
              var DP = [];DP[0] = DP[1] = 2; DP[2] = 8;
                for(let i=2;i <= N-1;i++){
		          DP[i+1] = (2*DP[i]*DP[i-1]) + DP[i];
		        }
		        return DP[N];
             }

		 * 
		 * 
		 * */
		
		
	}//O(n) in space and time
	
	/*
	 * 1. To find the maximum continous sum given that the sequence is not to have two continous elements
	 * 2. 
	 * 
	 *      M[i] = A[i] when i =1, M[i] = Max(A[i], A[i+1]) when i = 2 ====> base conditions
	 *      M[i] = Max(A[i] + M[i-2], M[i-1]) when i >= 3
	 *  
	 * */
	function findMaxSumWhenTWOContinousNOTAllowed(array) {
	   var M = [];
	   M[0] = array[0];
	   M[1] = Math.max(array[0], array[1]);
	   for(let j=2;j < array.length;j++){
		   M[j] = Math.max(array[i]+M[i-2], M[i-1]);
	   }
	   return M[array.length - 1];
	}//O(n) in time and Space
	
	
	/*
	 * M[i] = max of either A[i]+A[i-1]+M[i-3] or
	 *                      A[i] + M[i-2] or
	 *                      M[i-1]
	 * 
	 * */
	function findMaxSumWhenTHREEContinousNOTAllowed(A) {
		var k = 3;
		var n = A.length;
		var M = [];
		M[0] = A[0];
		M[1] = Math.max(A[1]+A[0], Math.max(A[1], A[0]));
		M[2] = Math.max(A[2], M[1]);//Don't check for A[2]+ M [1] as three aren't allowed
		
		for(let i=3;i < A.length;i++){
			M[i] = Math.max(A[i]+A[i-1]+M[i-3], Math.max(A[i], M[i-2], M[i-1]));
		}
		return M[n-1];
	}//O(n) in time and space
	
	/*
	 * Catalan Numbers
	 * Given N vertices, how many binary Trees are possible
	 * Observation - C[n] =  Σ C[i-1] * C[N-i] where i varies from 1 to N
	 *               C[0] = 0;
	 *               C[1] = 1;
	 *               C[2] = 2;
	 *               C[3] = 5;
	 *   for C[3] consider the following - 
	 *   
	 *               
	 *               
	 *                2          1                   1               3                  3
	 *               / \          \                    \            /                  /
	 *              1   3 ,        2       ,            3   ,      1       ,          2
	 *                               \					/           \                /
	 *                               3				   2             2              1
	 *                               
	 *  This shows that there are 5 combination that are obtained from 3 vertixes
	 * */
	function catalanRecursive (N) {
		return catalanRecursiveInner(N);
		function catalanRecursiveInner (n) {
			if (n == 0){
				return 1;
			}
			if (n==1 || n==2){
				return n;
			}
			var count = 0;
			for(let i=1;i <= n;i++){
				count = count + catalanRecursiveInner(i-1) * catalanRecursiveInner(n-i);
			}
			return count;
		}
	}//Goes to exponential
	
	function catalanViaDP(N) {
		var DP = [];
		for (let i=1;i <= N;i++) {
			DP[i] = 0;
		}
		
		DP[0] = 0;
		DP[1] = 1;
		DP[2] = 2;
		return catalanDPInner(N);
		function catalanDPInner (n) {
			console.log(DP[n]);
			if(DP[n]){
				return DP[n];
			}
			if(n==0){
				return 1;
			}
			for (let j=1;j <= n;j++) {
			 	DP[n] = catalanDPInner(j-1) * catalanDPInner(n - j) + DP[n];
			}
			return DP[n];
		}
	}//O(n^2)
	
	/*
	 * 1. Matrix chain multiplication
	 * 2. Let M[i][j] be the min number of multiplicatons
	 * 3. Dimensions of a Matrix from the array are of the form p[k-1], p[k] are of kth matrix
	 * 4. Now, the multiplications needed for ith to be multiplied by ith matrix is 0
	 * 5. This indicates that we know the diagonal of the 2D matrix so the L way
	 * 6. p[0] * p[1] * p[3] + M[1][1] +M[2][3] indicates - A*(B*C), p[0], p[1] are dimensins of 1st Matrix
	 * 7. p[0] * p[2] * p[3] + M[1][2] + M[3][3] indicates - (A*B)*C, p[2], p[3] is the dimension of 3rd matrix 
	 * */
	function matrixChain(A) {
		var n = A.length;
		var M = [];
		for(let i=0;i < n;i++){
			M.push([]);
		}
		for(let k=0;k < n;k++){
			M[k][k] = 0;
		}
		for(let L=2;L < n;L++){
			for(let i=1;i < n - L +1;i++){
				let j = i + L -1;
				M[i][j] = Infinity;
				for (let k=i;k <=j-1;k++){
					let sum = M[i][k] + M[k+1][j] + A[i-1]*A[k]*A[j];
					if(sum < M[i][j]){
						M[i][j] = sum;
					}
				}
			}
		}
		return M[1][n-1];
	}//O(n^3)
	
	
	/*
	 * 1. Unbounded Kanpsack problem
	 * 2. Dupliactes are allowed
	 * 3. items with weight and value are given
	 * 4. We need to maximise the amount that fills that weight
	 * 5. Eg. - W=100, given items with value = [1, 30] and weight = [1, 50]
	 *          a. 2 items of (30)*2 value lead to 100 weight
	 *          b. 100 items of (1)*100 value lead to 100 weight
	 *          c. 50 items of value 1*50 + item of 30*1 giving total of 51 items
	 *  6. let DP[i] indicate the max value for i Weight
	 *     a. DP[0] = 0
	 *     b. DP[i] = max(DP[i], DP[i - wt[j]] + val[j]) where j is from 0 to n-1 and wt[j] <= i 
	 *  7. NOTE: the value may not end up having exact wieght         
	 * */
	
	function knapsackWithDuplicateAllowed (values, weights, W) {
		var DP = [];
		for(let k=0;k <= W;k++) {
			DP[k] = 0;
		}
		for(let i=0;i <= W;i++) {
			for(let j=0;j < weights.length;j++) {
				if(weights[j] <= i) {
					DP[i] = Math.max(DP[i], values[j] + DP[i - weights[j]]);
				}
			}
		}
		return DP[W];
	}//O(n^2) in time, O(n) in space
	
	
	/* 0-1 Kanpsack 
	 * Given the values and weights array and a wieight W 
	 * We can select an item only once or 0
	 * Need to maximize the the total value that leads to W or less then W
	 * Theory - we can see this via recurssion and DP 
	 *     1. Recurssion
	 *        a. We will check recurssively that when weight of an item is <= W then we may take it or we may not take it
	 *        b. If the item's wieght is greater than W we can not take it
	 *        c. Base condition will be either no items are left or W is completed
	 * */
	function knapsack01Recurssion (values, weights, W) {
		return knapsack01RecurssionInner(values.length, W);
		function knapsack01RecurssionInner (n, w) {
			if(n==0 || w==0){
				return 0;
			}
			if(weights[n-1] > w){
				knapsack01RecurssionInner(n-1, w);
			}
			return Math.max(
					values[n-1] + knapsack01RecurssionInner(n-1, w - weights[n-1]),
					knapsack01RecurssionInner(n-1, w)
			
			);
		}
	}//O(2^n)
	
	/*
	 * Same above problem using DP
	 * DP[i][j] is the max value when the weight is  j and the items are i
	 * Eventually the DP[n][W] will be the answer
	 * Base condition DP[0][j] = DP[i][0] = 0
	 * */
	function knapsack01DP (values, weights, W) {
		var DP = [];
		for (let k=0;k <= values.length;k++) {
			DP.push([]);
		}
		for(let i=0;i <= values.length;i++){
			for (let wt=0;wt <= W;wt++) {
				if(i==0 || wt==0){
					DP[i][wt] = 0;
				} else {
					if(weights[i-1] <= wt){
						DP[i][wt] = Math.max(DP[i-1][wt], values[i-1]+ DP[i-1][wt - weights[i-1]]);
					} else {
						DP[i][wt] = DP[i-1][wt];
					}
				}
			}
		}
		return DP[values.length][W];
	}//O(N*W) in time and space
	
	
	/*
	 * 1. Coin Change problem
	 * 2. What are all the ways we can get a sum using a given coins
	 * 3. A coin can be used multiple times
	 * 4. DP[i] is the number of ways the that i change can be obtained from the given coins
	 * 5. DP values will be updated when coin[i] <= N then the DP[i] = DP[i - coin[j]] + DP[i]
	 * 6. initialize DP[0] = 1
	 * */
	function coinChange(coins, N) {
		var DP = [];
		DP[0] = 1;
		for (let j=1;j <= N;j++) {
			DP[j] = 0;
		}
		
		
	    //Please note that the order is important here i.e. coins need to the outer loop
		// We need to calculate for each coin and all the weights
		for (let c=0;c < coins.length;c++) {
			for (let i=1;i <= N;i++) {
			if (coins[c] <= i) {
				DP[i] = DP[i] + DP[i - coins[c]];
			}
		}
	}
	return DP[N];
	}
	
	/*
	 * 1. Coin Change problem
	 * 2. The coins needed are to be minimized
	 * 3. DP[i] indicates the min coins needed to have change of i
	 * 4. If a coin is less than i we can add 1 to DP[i - coin[c]]and compare with the existing DP[i]
	 * 5. DP[0] = 0;
	 * 6. Bottom up
	 * */
	function coinChangeMin (coins, N) {
		var DP = [];
		DP[0] = 0;
		for (let amount=1;amount <= N;amount++) {
			DP[amount] = Infinity;
			for (let c=0;c < coins.length;c++) {
				if(coins[c] <= amount){
					DP[amount] = Math.min(DP[amount], DP[amount- coins[c]]+1);
				}
			}
		}
		return DP[N];
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
		LISviaDP,
		expression1,
		findMaxSumWhenTWOContinousNOTAllowed,
		findMaxSumWhenTHREEContinousNOTAllowed,
		catalanRecursive,
		catalanViaDP,
		matrixChain,
		knapsackWithDuplicateAllowed,
		knapsack01Recurssion,
		knapsack01DP,
		coinChange,
		coinChangeMin
		};
}
module.exports = {DP}