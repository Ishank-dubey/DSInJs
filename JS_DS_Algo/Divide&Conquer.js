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
		
		/*
		 * Best continous window summation
		 * 1. 
		 * */
		
		
		
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
	return {
		     stockBuyAndSellBruteForce,
		     stockBuyAndSellDandC
		};
}
module.exports = {DandC};