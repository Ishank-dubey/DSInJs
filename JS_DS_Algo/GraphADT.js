function GraphADTAdjacencyMatrix(){
	var E;
	var V;
	var matrix = [[]];
	
	function setVertixes(arg){
		V = arg;
	}
	function initializeAdjecencyMatrix(){
		for(let i=0; i < V ; i++){
			matrix[i] = [];
			for(let j=0; j < V ; j++){
				matrix[i][j] = 0;	 
			}
		}
		console.log(matrix, 'matrix is in place');
	}
	
	function addNodesInAdjecencyMAtrix(u, v, value, isUndirected){
		if( u<0 || u >= V || v < 0 || v >=V ){
			return;
		}
		martix[u][v] = value;
		if(isUndirected){
			martix[v][u] = value;
		}
	}
	
	return {
		setVertixes,
		initializeAdjecencyMatrix,
		addNodesInAdjecencyMAtrix
	};
}// Adjecency matrix has O(V^2) for initialization so is good only when the E is comparable to V^2


function GraphADTUsingAdjacencyList(){
	var V;
	var array = []; //Array of head node e.g. [{vertix:0, next:array[0]}], the length of this array 
	                //is the number of Vertices
	function setVertices(arg){
		V = arg;
	}
	function initialize(initWithVertix){
		for(let i=0;i<V;i++){
			array[i] = {vertix:i, next: null};
			if(initWithVertix){
				array[i].next = array[i];
			}
		}
	}
	
	
	
	function addEdge(src, dest, isUnidirectional){
		if(src <0 || src >=V || dest < 0 || dest >= V)return null;
		
		/*
		 * Adding the new node as the first next
		 * */
		var node = {vertix: dest, next:null};
		node.next = array[src].next;
		array[src].next = node;
		
		if(isUnidirectional){
			var node2 = {vertix:src, next:null};
			node2.next = array[dest].next;
			array[dest].next = node2;
		}
	}
	return {
		setVertices,
		initialize,
		addEdge
	};
}// Its costlier to find if an edge exists between two vertixes and this was constant time in matrix representation


/*
 * Depth first search (DFS) traversal
 * */

   function piTill50Decimal(n){
	   var initialVal = 10;
	   var newVal;
	   for(let i=0;i<n;i++){
		   newVal = Math.floor(initialVal/7);
		   initialVal = (initialVal % 7) * 10;
		   console.log(newVal, " {PI");
	   }
   }


module.exports = {GraphADTAdjacencyMatrix, GraphADTUsingAdjacencyList, piTill50Decimal};