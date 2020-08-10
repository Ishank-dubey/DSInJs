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
	var indegree = [];
	function setVertices(arg){
		V = arg;
		initialize();
	}
	function initialize(initWithVertix){
		for(let i=0;i<V;i++){
			array[i] = {vertix:i, next: null};
			if(initWithVertix){
				array[i].next = array[i];
			}
		}
	}
	
	
	
	function addEdge(src, dest, isUndirectional){
		if(src <0 || src >=V || dest < 0 || dest >= V)return null;
		
		/*
		 * Adding the new node as the first next
		 * */
		var node = {vertix: dest, next:null, weight: 1};
		node.next = array[src].next;
		array[src].next = node;
		
		if(isUndirectional){
			var node2 = {vertix:src, next:null, weight:1};
			node2.next = array[dest].next;
			array[dest].next = node2;
		}
	}
	
	function findEdgeBetween(src, dest){
		var head = array[src];
		while(head){
		  if(head.vertix == dest){
			  return true;
		  }
		  head = head.next;
		}
		return false;
	}//O(E)
	
	
	/*
	 * Depth first traversal
	 * The nodes are traversed as and when they have further adjacent nodes
	 * We could have used stack but its earier to use recurssion as the adjacent can be any number
	 * */
	function dfs(){
		var visited = [];
		var connected = [];
		for(let i=0 ; i< array.length ; i++){
			if(!visited[i])
			  dfsInner(i);
		}
		function dfsInner(index){
			visited[index] = 1;
			console.log("DFS:: ", index);
			for(let j=0;j< array.length;j++){
				if(findEdgeBetween(index, j))
				  connected.push({src: index, dest: j});
				
				if(findEdgeBetween(index, j) && !visited[j]){
					dfsInner(j);
				}
			}
		}
		return {connected, visited};
	}//O(V+E) in this adjacency list implimentaion
	
	
	
	/*
	 * In this we want to traverse the vertixes that are adjecent to a given node and then go to the adjacent 
	 * node's adjacent nodes
	 * */
	function bfs(){
		var visited = [];
		var connected = [];
		
		for(let a=0; a< V ;a++){
			indegree[a] = 0;
		}
		for(let i=0;i< V;i++){
			if(!visited[i]){
				bfsInner(i);
			}
		}
		//console.log(indegree, 'IND');
		return {visited, connected};
		
		function bfsInner(index){
			//note that this queue will have one connected component
			var queue = require('./QueueADT').QueueADT();
			queue.enQueue(index);
			
			while(!queue.isEmpty()){
				var newIndex = queue.deQueue();
				if(!visited[newIndex]){
					visited[newIndex] = 1;
					console.log(newIndex, "NODE BFS");	
				}
				// For O(V+E) efficiency use the while loop as in the next function -topolgicalSort 
				for(let j=0;j< V;j++){
					if(findEdgeBetween(newIndex, j)){
						connected.push({src: newIndex, dest: j});
						if(newIndex != j){
							indegree[j] = indegree[j] + 1;
						}
						
					}
						if(findEdgeBetween(newIndex, j) && !visited[j]){
							queue.enQueue(j);
						}
				}
			}
			
		}
		
	}//O(V+E)
	
	
	/*
	 * Topological sort - each node comes before all the nodes to whom it has put going nodes
	 * In a directed graph the indegree is the compound of all the paths that send on it i.e.
	 * Its is the destination not Hamiltonian may have more than one correct sequences
	 * Topological sort of not 
	 * In topological sort we first go to the nodes whose indegree is 0
	 * The topological sort shall fail in case of a cyclic dependency graph
	 * To do a topological sort - 
	 *   1. Enqueue all the nodes w/ 0 indegree
	 *   2. While loop - then enqueue the adjecent nodes only when their indegree is 0
	 *   3. A counter also needs to keep the track for cyclic paths(see code)
	 * */
	function topolgicalSort(){
		var queue = require('./QueueADT').QueueADT();
		var count = 0;
		for(let a=0; a< V ;a++){
			if(indegree[a] == 0){
				queue.enQueue(a);
			}
		}
		while(!queue.isEmpty()){
			var node = queue.deQueue();
			console.log(node, "<<--TOPOLOGICAL SORT");
			count = count+1;
			// For O(V+E) efficiency use the while loop as in the next function -unWeightedShortestPath
			for(let j=0;j<V;j++){
				if(findEdgeBetween(node, j)){
					//console.log(indegree[j], 'indgree', j);
					indegree[j] = indegree[j]-1;
					if(indegree[j] == 0 ){
						queue.enQueue(j);
					}
				}
			}
		}
		if(count != V){
			console.log(`This Graph is cyclic so no Topological sort is valid`);
		}
	}//O(V + E)
	
	/*
	    * 1. Have a distance array, all elements are initalized to -1
	    * 2. distance of src itself is 0
	    * 3. Enque the adjacent elements and move farther away
	    * */
	   function unWeightedShortestPath(src){
		   var distance = [];
		   for(let j=0 ; j< V ; j++){
			   distance[j] = -1;
		   }
		   distance[src] = 0;
		   var queue = require('./QueueADT').QueueADT();
		   queue.enQueue(src);
		   while(!queue.isEmpty()){
			   var currentNode = queue.deQueue();
			   var node = array[currentNode];
			   
			   //Finding the adjacent nodes is cheaper this way
			   while(node){
				   var adjacentKey = node.next ? node.next.vertix : null;
				   //console.log(nextNode, 'VERTIX', currentNode, array[currentNode]);
				   if(adjacentKey != null && distance[adjacentKey] == -1){
					   distance[adjacentKey] = distance[currentNode] + 1;
					   queue.enQueue(adjacentKey); 
				   }
				   node = node.next;
			   }
			   //This for loop is costlier to find the adjacent nodes as this needs to chack all the nodes
			   /*for(let k=0 ; k < V ; k++){
				   if(findEdgeBetween(currentNode, k)){
					   if(distance[k] == -1){
						   distance[k] = distance[currentNode] + 1;
						   queue.enQueue(k);
					   }
				   }
			   }*/
		   }
		   return distance;
	   }//O(E+V)

	
	return {
		setVertices,
		initialize,
		addEdge,
		findEdgeBetween,
		dfs,
		bfs,
		topolgicalSort,
		unWeightedShortestPath
	};
}// Its costlier to find if an edge exists between two vertixes and this was constant time in matrix representation
   

   

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