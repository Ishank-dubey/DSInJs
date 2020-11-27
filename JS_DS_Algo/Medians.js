function Median(){
	function getMinAndMax(array){
		let small = array[0], big = array[0];
		let i = 0;
		
		while(i < array.length-1 ){
			if(array[i] < array[i+1]){
				if(small > array[i]){
					small = array[i];
				}
				if(big < array[i+1]){
					big = array[i+1];
				}
			}else{
				if(small > array[i+1]){
					small = array[i+1];
				}
				if(big < array[i]){
					big = array[i];
				}
			}
			i = i+2;
		}
		
		
		//used when the length is odd
		if(i === array.length-1){
			if(small > array[i]){
				small = array[i];
			}
			if(big < array[i]){
				big = array[i];
			}
		}
		
		console.log("Small:: ",small, "Big::  ", big);
		
	}//comparisons required are about 3(n)/2, O(n) time and O(1) in space
	return {getMinAndMax};
}
module.exports = {Median};