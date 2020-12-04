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
			buyDate = j;
			for(let k=j+1;k < array.length;k++){
				if(array[k]-array[j] > profit){
					profit = array[k]-array[j];
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
				console.log(mid, s, 'MID');
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
				console.log(crossLeftMax, crossRightMax);
				return Math.max(crossRightMax + crossLeftMax, sumLeft, sumRight);
			}
		}
	}//2T(n/2) + O(n) = O(n logn)
	
	return {
		     stockBuyAndSellBruteForce,
		     stockBuyAndSellDandC,
		     maximumContinousSum
		};
}
module.exports = {DandC};