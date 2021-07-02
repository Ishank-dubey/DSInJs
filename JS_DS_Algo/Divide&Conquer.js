function DandC(){
	/*
	 * 1. Index of the array is the time and value is the stock value on that day
	 * 2. Find the buy and sell time so that we get the maximum profit - Brute and D and C
	 * 3. For D and C - check for the left and check for the right, also need to check cross left and right
	 * */
	function stockBuyAndSellBruteForce(array){
		let profit = -Infinity;
		let buyDate;
		let sellDate;
		for(let j=0;j < array.length-1;j++){
			
			for(let k=j+1;k < array.length;k++){
				if(array[k]-array[j] > profit){
					profit = array[k]-array[j];
					buyDate = j;
					sellDate = k;
				}
			}
		}
		console.log("Stock:: ", profit, buyDate, sellDate);
	}
	function stockBuyAndSellDandC(array){
		return stockBuyAndSellDandCInner(0, array.length - 1);
		function stockBuyAndSellDandCInner(s, l){
			if(s == l){
				return {profit:0, buyDate:s, sellDate:l};
			}else if(s+1 == l){
				if(array[l] > array[s]){
					return {profit:array[l] - array[s], buyDate:s, sellDate:l};
				}else{
					return {profit:0 , buyDate:s, sellDate:s};
				}
			}else if(s < l){
				let mid = Math.floor((s+l)/2);
				let leftDetail = stockBuyAndSellDandCInner(s, mid);
				let rightDetail = stockBuyAndSellDandCInner(mid+1, l);
				let crossMinDetail = getMin(array, s, mid);
				let crossMaxDetail = getMax(array, mid+1, l);
				let crossProfit = crossMaxDetail.max - crossMinDetail.min;
				
				if(leftDetail.profit > rightDetail.profit){
					if(crossProfit > leftDetail.profit){
						return {
							profit: crossProfit, 
							buyDate:crossMinDetail.minIndex , 
							sellDate:crossMaxDetail.maxIndex
							};
					}else{
						return {
							profit: leftDetail.profit, 
							buyDate:leftDetail.buyDate , 
							sellDate:leftDetail.sellDate
							};
					}
				}else{
					if(crossProfit > rightDetail.profit){
						return {
							profit: crossProfit, 
							buyDate:crossMinDetail.minIndex , 
							sellDate:crossMaxDetail.maxIndex
							};
					}else{
						return {
							profit: rightDetail.profit, 
							buyDate:rightDetail.buyDate , 
							sellDate:rightDetail.sellDate
							};
					}
				}
				
				
			}
		}//T(n/2) + T(n/2) + O(n) = O(n logn)
		
		/*Util methods to the min and max in an array within a givne index*/
		function getMin(array, s, l){
			let min = Infinity;
			let minIndex;
			for(let i=s;i<= l;i++){
				if(array[i] < min){
					min = array[i];
					minIndex = i;
				}
			}
			return {min, minIndex};
		}
		function getMax(array, s, l){
			let max = -Infinity;
			let maxIndex;
			for(let i=s;i <= l;i++){
				if(array[i] > max){
					max = array[i];
					maxIndex = i;
				}
			}
			return {max, maxIndex};
		}
	}
	
	/*
	 * Best continous window summation
	 * 1. Similar to the above where we check the left and right and then also the cross
	 * */
	
	function maximumContinousSum(array){
		return maximumContinousSumInner(0, array.length-1);
		function maximumContinousSumInner(s, l){
			if(s == l){
				return array[s] > 0 ? array[s] : 0;
			}else if(s+1 == l){
				if((array[s]+ array[l]) > array[s] && (array[s]+ array[l]) > array[l]){
					return array[s]+ array[l];
				}else{
					if(array[s] > 0){
						return array[s];
					}else if(array[l] > 0){
						return array[l];
					}else{
						return 0;
					}
				}
			}else if(s < l){
				let mid = Math.floor((s+l)/2);
				let sumLeft = maximumContinousSumInner(s, mid);
				let sumRight = maximumContinousSumInner(mid+1, l);
				let crossLeftMax = 0;
				let crossRightMax = 0;
				
				let crossLeftSum = 0;
				let crossRightSum = 0;
				for(let i=mid;i >= s;i--){
					crossLeftSum = crossLeftSum + array[i];
					if(crossLeftSum > crossLeftMax){
						crossLeftMax = crossLeftSum;
					}
				}
				
				for(let i=mid+1;i <= l;i++){
					crossRightSum = array[i]+ crossRightSum;
					if(crossRightSum > crossRightMax){
						crossRightMax = crossRightSum;
					}
				}
				return Math.max(crossRightMax + crossLeftMax, sumLeft, sumRight);
			}
		}
	}//2T(n/2) + O(n) = O(n logn), mind that the left is been started from the right end and right is started from the left so as to maintain the continous.
	
	/*
	 * Find the Closest Pair of Points using Divide and Conquer algorithm in a 2D plane
	 * 0. Pre processing is to sort on the basis of the x coordinates
	 * 1. get closest points in the left half, get the closest points in the right half, then get the cross elements
	 * 2. The mid point will act as a strip that consists of the points whose x coordinates are < than d
	 * 3. Use the same d to filter the points based on the y coordinates- so the inner loop will have max eight iterations for every element of the outer loop
	 * 4. We can use the crossStrip1 and crossStrip2 and compare elements of these sets efficiently 
	 * */
	 function dist(p1, p2){
		 return Math.pow(Math.pow(p1.x-p2.x, 2) + Math.pow(p1.y - p2.y, 2), .5);
	 }
     function closestPair(array){
    	 array = array.sort((a, b)=> a.x- b.x);
    	 let arrayY = array.sort((a, b)=> a.y- b.y);
    	 return closestPairInner(0, array.length-1);
    	 function closestPairInner(s, l){
    		 if(s == l){
    			 return Infinity;
    		 }else if(s+1 == l){
    			 return dist(array[s], array[l]);
    		 }else if(s < l){
    			 let mid = Math.floor((s+l)/2);
    			 let leftDist = closestPairInner(s, mid);
    			 let rightDist = closestPairInner(mid+1, l);
    			 let depth = Math.min(leftDist, rightDist);
    			 let crossStrip = [];
    			 for(let i=s;i <=l ;i++){
    				 if( Math.abs(array[i].x - array[mid].x) < depth ){
    					 crossStrip.push(array[i]);
    				 }
    			 }
    			 return Math.min(findClosestFromTheStrip(crossStrip, depth), depth);
    			 
    		 }
    	 }//T(n) = 2T(n/2) + O(n) + O(nLogn) + O(n) => O(n log^2 n)
    	 function findClosestViaX(array1, array2, d){
    		 
    	 }
    	 function findClosestFromTheStrip(array, d){
    		 let min = d;
    		 
    		 console.log(array);
    		 //array = array.sort((a, b)=> b.y - a.y); //- instead of a new sort, use the arrayY to pull put inorder the Y sorted array from x sorted array
    		
    		 for(let i=0;i < array.length-1;i++){
    			 for(let j=i+1;j < array.length && Math.abs(array[i].y-array[j].y) < min;j++){
    				 if(dist(array[j], array[i]) < min){
    					 min = dist(array[j], array[i]);
    				 }
    			 }
    		 }
    		 return min;
    	 }
     }
	
	
	
	
	
	/* Efficient way to find the k^n 
	 * Example - 9^24 = (9^2)^12 = ((9^2 * 9)^2)^ 4 = (((9^2 * 9)^2)^2)^2
	 * Consider an example of 9^4 -> 9^2 * 9^2
	 * */
	function square(k, n){
		if(n==0){
			return 1;
		}
		if(n%2 == 1){
			return k * square(k, n-1);
		}
		if(n%2 == 0){
			k = square(k , n/2);
			return k*k;
		}
	}//
	
	
	return {
		     stockBuyAndSellBruteForce,
		     stockBuyAndSellDandC,
		     maximumContinousSum,
		     square,
		     closestPair
		};
}
module.exports = {DandC};