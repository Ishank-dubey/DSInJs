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
	
	var edgesArray = [];
	
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
	
	
	
	function addEdge(src, dest, isUndirectional, weight){
		if(src <0 || src >=V || dest < 0 || dest >= V)return null;
		
		/*
		 * Adding the new node as the first next
		 * */
		var node = {vertix: dest, next:null, weight: weight || 1};
		node.next = array[src].next;
		array[src].next = node;
		
		edgesArray.push({src, dest, weight: weight || 1});
		if(isUndirectional){
			edgesArray.push({dest:src, src:dest, weight: weight || 1});
			var node2 = {vertix:src, next:null, weight:weight || 1};
			node2.next = array[dest].next;
			array[dest].next = node2;
		}
	}
	
	function findEdgeBetween(src, dest){
		var head = array[src];
		while(head){
		  if(head.vertix == dest){
			  return head;
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
      
	   /*
	    * Djkstra method to find the shortest distance in a weighted non negative edges
	    * 1. all the nodes to be initialized with Infinity distance
	    * 2. Source is given 0 distance and also upadted to the Min Heap
	    * 
	    * */
	   function dij(src){
		   src = src || 0;
		   var parentArray = [];
		   
		   var heap = require('./HeapADT').HeapADT();
		   var distance = [];
		   var heapArray = [];
		   
		   //O(n) operation
		   for(let j=0;j<V;j++){
			   distance[j] = Infinity;
			   parentArray[j] = 0;
			   heapArray[j] = {vertix:j, distance:Infinity}
		   }
		   
		   
		   heap.heapifyTheArrayOfObjectToMinHeap(heapArray);// This is O(n) operation
		   heap.reduceTheDistanceValInObjectHeap(src, 0);//O(log n)
		   distance[src] = 0;
		   parentArray[0] = -1;	
		   while(heap.getCount()){//O(V + E) as this is similar to BFS
			   var minVal = heap.deleteMinFromObjectMinHeap();
			   console.log(minVal, 'mv');
			   var currentVertix = minVal;
			   
			   var adjacentNode = array[currentVertix].next;
			   while(adjacentNode){
				   var adjacentVertix = adjacentNode.vertix;
				   if(isFinite(distance[currentVertix]) && heap.isPresentInObjectMinHeap(adjacentVertix)
					 && ((distance[currentVertix]+findEdgeBetween(currentVertix, adjacentVertix).weight) < distance[adjacentVertix])){
					   distance[adjacentVertix] = (distance[currentVertix]+findEdgeBetween(currentVertix, adjacentVertix).weight);
					   heap.reduceTheDistanceValInObjectHeap(adjacentVertix, distance[adjacentVertix]);//O(log V)
					   parentArray[adjacentVertix] = currentVertix;
				   }
				   adjacentNode = adjacentNode.next;
			   }
		   }
		   console.log("Shortest path values::", distance);
		   console.log('Printing the path for src to vertex 4->');
		   printPath(4, parentArray);//Example to print the shortest path for vertix 4
	   }//O((V+E)log V) is almost E*log V, V+E is for the BFS traversal
	function printPath(vertix, parent){
		if(parent[vertix] == -1){
			return;
		}
		printPath(parent[vertix], parent);
		console.log(vertix);
	}
	
	/*
	 * The above Dijkistra algorithm is a greedy algo and takes the smallest first but
	 * When a negative node is present then this is can fail so we use BellmanFord algo that states -
	 * The simple path is obtained when we see through all the edges V-1 times then another iteration is need to finalize
	 * the shortest paths
	 * */
	
	function bellmanFord(src){
		var distance = [];
		for(let j=0;j<V;j++){
			distance[j] = Infinity;
		}
		distance[src] = 0;
		
		
		//This loop is V-1 times and gives a simple shortest path
		for(let v=1; v< V;v++){
			for(let e=0; e < edgesArray.length;e++){
				var srclocal = edgesArray[e].src;
				var destlocal = edgesArray[e].dest;
				var weightlocal = edgesArray[e].weight;
				
				if(isFinite(distance[srclocal]) &&
				   distance[destlocal] > distance[srclocal]+ weightlocal){
					distance[destlocal] = distance[srclocal]+ weightlocal;
				}
				
			}
		}
		
		//this loop finds if there is even more short distance then there is cycle
		for(let e=0; e < edgesArray.length;e++){
			var srclocal = edgesArray[e].src;
			var destlocal = edgesArray[e].dest;
			var weightlocal = edgesArray[e].weight;
			
			if(isFinite(distance[srclocal]) &&
			   distance[destlocal] > distance[srclocal]+ weightlocal){
				console.log("there is a cycle");
				return;
			}
			
		}
		console.log("Shortest using bellman ford::: ",distance);
	}//O(E*V)
	
	/*
	 * Minimum spanning tree- a tree formed that connects all the vertixes and the edges give the minimum
	 * possible weight i.e. minimum total cost
	 * 1. Prim's 
	 * 2. Kruskal's algos are well known
	 * this makes sense on a undirected graph
	 * */
	
	
	//In this method we are not using a minHeap and so O(V^2) 
	function primsMSTWithArray(src){
		src = src || 0;
		var minSet = [];
		var key = [];
		var parent = [];
		parent[0] = -1;
		for(let j=0;j< V;j++){
			minSet[j] = false;
			key[j] = Infinity;
		}
		key[src] = 0;
		
		
		
		for(let c=0;c < V-1;c++){
			var u = findMinKey();
			minSet[u] = true;
			console.log(u, "u");
			var adjacentNode = array[u].next;
			//console.log(array, 'array', adjacentNode);
			while(adjacentNode){
				if(!minSet[adjacentNode.vertix] && key[adjacentNode.vertix] > adjacentNode.weight){
					console.log(u, adjacentNode.vertix, adjacentNode.weight, "ganganam style");
					parent[adjacentNode.vertix] = {p:u, w: adjacentNode.weight};
					key[adjacentNode.vertix] = adjacentNode.weight;
				}
				adjacentNode = adjacentNode.next;
			}
		}
		printTheSpanningTree();
		function findMinKey(){
			var min_index = 0;
			var min_val = Infinity;
			for(let k=0;k< V;k++){
				console.log(!minSet[k] , isFinite(key[k]) ,min_val > key[k], k, "k", key);
				if(!minSet[k] && isFinite(key[k]) && min_val > key[k]){
					min_val = key[k];
					min_index = k;
				}
			}
			return min_index;
		}
		function printTheSpanningTree(){
			console.log("Printing the spanning Tree:: - ", parent);
			for(let v=1;v < V;v++){
				console.log(parent[v].p+" - "+v+" - "+parent[v].w);
			}
		};
		
		
	}//O(V^2)
	
	return {
		setVertices,
		initialize,
		addEdge,
		findEdgeBetween,
		dfs,
		bfs,
		topolgicalSort,
		unWeightedShortestPath,
		dij,
		bellmanFord,
		primsMSTWithArray
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