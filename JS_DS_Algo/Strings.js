function Strings(){
	function finiteStateAutomata(T, P){
		function state(P){
			
		}
	}
    function KMP(T, P){
    	let i = 0, j = 0, F = failFunction(P);
    	while(i < T.length){
    		if(T[i]==P[j]){
    			if(j == P.length-1){
    				/*
    				 * Uncomment the following 1 line in order to stop at first matched index
    				 * */
    				//return i - j;  
    				console.log("Match Index: ", i - j);
    				i++;
    				j = F[j-1];
    			}else{
    				i++;
    				j++;
    			}
    		}else if(j > 0){
    			j = F[j-1];
    		}else{
    			i++;
    		}
    	}
		
	}//O(n+m)
    
    function failFunction(P){
    	let i =1, j=0, F = [];
    	F[0] = 0;
    	while(i < P.length){
    		if(P[i]==P[j]){
    			F[i] = j+1;
    			i++;
    			j++;
    		}else if(j > 0){
    			j = F[j-1];
    		}else{
    			F[i] = 0;
    			i++;
    		}
    	}
    	return F;
    }
    
    function searchSubstring(T, P){
    	for(let i=0;i < T.length;i++){
    		let j = 0;
    		while(T[i+j] == P[j] && j < P.length && T[i + j]!= undefined){
    			j++;
    		}
    		if(j == P.length){
    			console.log("Substring index(s)", i);
    		}
    	}
    }//O(m*n)

    return {
    	    searchSubstring,
    	    KMP
    	   };
}
module.exports = {Strings};