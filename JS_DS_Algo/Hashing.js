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
    
    
    
    
	return {linearProbingInsert,
		    linearProbingSearch,
		    removeDuplicates,
		    checkIfTwoArraysHaveSameElements,
		    checkIfTwoArraysHaveSameElementsOptimal,
		    getPairsWithSum
	       };
}
module.exports = {Hashing};