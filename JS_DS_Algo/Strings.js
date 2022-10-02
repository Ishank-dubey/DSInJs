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
	function Trie(){
		let sNode = {data:'', isEndOfString: true, next: null};

		//to check if the char is child of the given node
		function subNode(node, char){
			return node.nodes.find(node=> node.data==char);
		}
		function getSnode(){
			return sNode;
		}
		function printString(){
			let node = sNode;
			while(node){
				console.log(node.data);
				node = node.next;
			}
		}
		function addWord(word){
			let index = 0;
			if(!sNode.next){
				sNode = {data:word[index], isEndOfString: true, next: null};
				index++;
			}
			let node = sNode;
			while(node.next){
				node = node.next;
			}
			node.next = add(word, index);
			function add(word, index){
				let newNode = {data: word[index], isEndOfString: false, next:null};

				if(index == word.length-1 ){
					newNode.isEndOfString = true;
				}   
				else{
					newNode.isEndOfString = false;
					newNode.next = add(word, index+1);
				}
				return newNode;
			}

		}
		//function (){}
		return {
			addWord,
			getSnode,
			printString
		};
	}

	/*
	 * Find the permutation of a given str
	 * */
	function permutations(str){
		let visited = [];
		let permutation = [];
		permutationInner(str, 0);
		function permutationInner(str, index){
			if(index == str.length){
				console.log(permutation);
			}else{
				for(let i=0;i < str.length ;i++){
					if(!visited[i]){
						visited[i] = 1;
						permutation[index] = str[i];
						permutationInner(str, index + 1);
						visited[i] = 0;
					}
				}
			}

		}
	} //O(n!)




	function combinations(str){
		let combinations = [];
		combinationsInner(0, 0);
		function combinationsInner(index, start){
			for(let i=start;i < str.length;i++){
				combinations[index] = str[i];
				console.log(combinations.slice(0, index+1));
				if(i < str.length - 1)
					combinationsInner(index + 1, i + 1);
			}
		}
	}//O(n!)


	function interLeavingStrings(str1, str2){
		let interLeavedArray = [];
		interLeavingStringsInner(str1, str2, "");
		function interLeavingStringsInner(iStr1, iStr2, result){
			if(iStr1.length ==0 && iStr2.length == 0){
				console.log(result);
			}

			if(iStr1.length > 0){
				interLeavingStringsInner(iStr1.substring(1), iStr2, result + iStr1.charAt(0));
			}
			if(iStr2.length > 0){
				interLeavingStringsInner(iStr1,  iStr2.substring(1) , result + iStr2.charAt(0));
			}
		}
	}
	
    function findPatternIn2DMatrix(mat, P, xRows, yRows){
    	let used = [];
    	mat = [];
    	P = [2, 5, 8];
    	for(let i=0;i < xRows;i++){
    		used.push([]);
    	}
    	/*
    	 * Populate the matrix w/ incremental values 1-9
    	 * */
    	for(let i=0;i < xRows;i++){
    		mat.push([]);
    		for(let j=0;j < yRows;j++){
    			if(j==0){
    			  mat[i] = [];
    			}
    			mat[i][j] = i*yRows + j+1;
    		}
    	}
    	mat = [
    		[1, 0, 2],[3, 4 , 5],[6, 7, 8]
    	];
    	console.log(mat, "findPatternIn2DMatrix01568x");
    	console.log(findPatternIn2DMatrixInner(0, 0, 0));
    	function findPatternIn2DMatrixInner(x, y, level){
    		if(level == P.length){
    			return true;
    		}
    		if(used[x][y]){
    			return false;
    		}
    		if(level==0 && mat[x][y]!=P[level]){
    			if(x < xRows-1){
    				return findPatternIn2DMatrixInner(x+1, y, level);
    			}else if(y < yRows-1){
    				return findPatternIn2DMatrixInner(0, y+1, level);
    			}else{
    				return false;
    			}
    		}
    		if(mat[x][y]==P[level]){
    			used[x][y] = 1;
    			let res =  (x > 0 && findPatternIn2DMatrixInner(x-1, y, level+1) ||
    			x < xRows-1 && findPatternIn2DMatrixInner(x+1, y, level+1)  ||
    		    y > 0 && findPatternIn2DMatrixInner(x, y-1, level+1) ||
    		    y < yRows - 1 && findPatternIn2DMatrixInner(x, y+1, level+1)  ||
    		    (x> 0 && y < yRows - 1) && findPatternIn2DMatrixInner(x-1, y+1, level+1) ||
    		    (x> 0 && y > 0) && findPatternIn2DMatrixInner(x-1, y-1, level+1) ||
    		    (x <  xRows-1 && y > 0) && findPatternIn2DMatrixInner(x+1, y-1, level+1)  ||
    		    (x <  xRows-1 && y < yRows-1) && findPatternIn2DMatrixInner(x+1, y+1, level+1)
    		    );
    			used[x][y] = 0;
    			return res;
    		}else{
    			return false;
    		}
    	}
    }//O(m*n)

	return {
		searchSubstring,
		KMP,
		Trie,
		permutations,
		combinations,
		interLeavingStrings,
		findPatternIn2DMatrix
	};
}
module.exports = {Strings};