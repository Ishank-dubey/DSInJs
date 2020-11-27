function Hashing(){
	let N = 10; //Bucket table size
	let bucketArray = [];
	function linearProbingInsert(key){
	  function hashFunction(key){
		  return key%10;
	  }	
	}
    function linearProbingSearch(){
	  	
	}
    
    function removeDuplicates(A){
    	A.sort((a, b)=> a - b);//O(nlog n)
    	let current  = A[0];
    	let opArray = [];
    	opArray.push(current);
    	let k = 1;
    	for(;k < A.length;k++){
    		if(A[k] != current){
    			current = A[k];
    			opArray.push(current);
    		}
    	}
    	return opArray;
    }//O(nlog n)
    
    
    /*
     * To check of the two arrays have the same elements maybe in a different order
     * 1. Way is to sort them and thats a O(n logn) solution
     * 2. Another way is via a Map that gives O(n)
     * */
    function checkIfTwoArraysHaveSameElements(array1, array2){
    	if(array1.length != array2.length){
    	   return false;	
    	}
    	array1.sort((a, b)=> a - b);
    	array2.sort((a, b)=> a - b);
    	for(let i=0;i < array1.length;i++){
    		if(array1[i] != array2[i]){
    			return false;
    		}
    	}
    	return true;
    }//O(n logn ) in time and O(1) in space
    
    function checkIfTwoArraysHaveSameElementsOptimal(array1, array2){
    	if(array1.length != array2.length){
     	   return false;	
     	}
    	let map = {};
    	for(let i=0;i < array1.length;i++){
    		if(map[array1[i]]){
    			map[array1[i]] = map[array1[i]] + 1;
    		}else{
    			map[array1[i]] = 1;
    		}
    	}
    	
    	
    	
    	for(let j=0;j < array2.length;j++){
    		if(!map[array2[j]]){
    			return false;
    		}
    		if(map[array2[j]]){
    			map[array2[j]] = map[array2[j]] - 1;
    		}
    	}
    	
    	for(let k of Object.values(map)){
    		if(k != 0 ){
    			return false;
    		}
    	}
    	return true;
    }//O(n) in time and O(n) space
    
    /*
     * To find all the pairs that sum to K
     * */
    function getPairsWithSum(K, array){
    	let map = {};
    	let uniqueMap = {};
    	function checkIfPairExists(key, val){
    		return uniqueMap[val] == key;
    	}
        function addPair(key, val){
        	if(!checkIfPairExists(key, val))
        	  uniqueMap[key] = val;
    	}
    	for(let i=0;i < array.length;i++){
    		map[array[i]] = i;
    	}
    	for(let j=0;j < array.length;j++){
    		if(map[K - array[j]] != undefined ){
    			addPair(map[K - array[j]], j);
    		}
    	}
    	console.log("Pairs: ", uniqueMap);
    }//O(n)
    
    /*
     * To find all the pairs that sum to K via sorting and binary search
     * */
    function getPairsWithSumSpaceOptimised(K, array){
    	array.sort((a, b)=> a-b);
    	let s = 0;
    	let l = array.length - 1;
    	console.log("Sorted Array:: ", array);//Please note that the indices will be found accordingly
    	while(s < l){                         //Will not be the same as the ones got in the above function  
    		if(array[s]+ array[l]==K){
    			console.log("Pair", s, l);
    			s++; l--;
    		}else if(array[s]+ array[l] < K){
    			s++;
    		}else{
    			l--;
    		}
    	}
    }//O(nlog n) in time and O(1) in space
    
    /*
     * To find the first repeating char in an array/string
     * */
    function findFirstRepeating(array){
    	let map = {};
    	for(let j=0;j< array.length;j++){
    		if(map[array[j]] != undefined){
    			return array[j];
    		}else{
    			map[array[j]] = j;
    		}
    	}
    }//O(n) in time and space
    
    
    
    /*
     * To find the first character that is repeating char in an array/string
     * [3, 2, 2, 3] the output must be 3 not 2
     * */
    function findFirstCharaterThatIsRepeating(array){
    	let map = {};
    	for(let j=0;j< array.length;j++){
    		if(map[array[j]] != undefined){
    			map[array[j]] = -1*map[array[j]];
    		}else{
    			map[array[j]] = j+1;
    		}
    	}
    	let max = -Infinity;
    	for(k of Object.values(map)){
    		if(max < k && k < 0){
    			max = k;
    		}
    	}
    	console.log("Frist Repeat element at the first is having the index:", Math.abs(max+1));
    }//O(n) in time and space
    
    
    /*
     * to find the first non repeating character
     * 1. Two for loops approch
     * 2. Using map approach
     * */
    function getFirstNonRepeatingCharacter(array){
    	for(let i=0;i < array.length ;i++){
    		let repeated = 0;
    		for(let j=0;j < array.length;j++){
    			if(array[j]==array[i] && j != i){
    				repeated = 1;
    				break;
    			}
    		}
    		if(!repeated){
    			console.log("First non repeating: ", array[i]);
    			break;
    		}
    	}
    }//O(n^2)
    
    function getFirstNonRepeatingViaMap(array){
    	let map = {};
    	for(let i=0;i < array.length;i++){
    		if(!map[array[i]]){
    			map[array[i]] = i + 1;
    		}else{
    			map[array[i]] = -1 * map[array[i]];
    		}
    	}
    	for(let j=0;j < array.length ;j++){
    		if(map[array[j]] > 0){
    			console.log("First Non Repeating: ", array[j]);
    			break;
    		}
    	}
    }//O(n), O(n) space
    
    
    
	return {linearProbingInsert,
		    linearProbingSearch,
		    removeDuplicates,
		    checkIfTwoArraysHaveSameElements,
		    checkIfTwoArraysHaveSameElementsOptimal,
		    getPairsWithSum,
		    findFirstRepeating,
		    findFirstCharaterThatIsRepeating,
		    getPairsWithSumSpaceOptimised,
		    getFirstNonRepeatingCharacter,
		    getFirstNonRepeatingViaMap
	       };
}
module.exports = {Hashing};