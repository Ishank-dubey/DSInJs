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
	 * The indegree array also represents
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
	}//O(E*V), In a negative edge graph there can be a cyclic shortest path
	//Cyclic shortest path can't be cyclic whe all the edges are positive.
	
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
			
			var adjacentNode = array[u].next;
			
			while(adjacentNode){
				if(!minSet[adjacentNode.vertix] && key[adjacentNode.vertix] > adjacentNode.weight){
					
					parent[adjacentNode.vertix] = {p:u, w: adjacentNode.weight};
					key[adjacentNode.vertix] = adjacentNode.weight;
				}
				adjacentNode = adjacentNode.next;
			}
		}
		printTheSpanningTree(parent);
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
		
		
		
	}//O(V^2)
	
	function printTheSpanningTree(parent){
		console.log("Printing the spanning Tree:: - ", parent);
		for(let v=1;v < V;v++){
			console.log(parent[v].p+" - "+v+" - "+parent[v].w);
		}
	};
	
	function primsMethodUsingHeap(){
		var minHeap = require('./HeapADT').HeapADT();
		var arrayToBeheapified = [];
		var key = [];
		for(let j=0;j<V;j++){
			arrayToBeheapified[j] = {vertix:j, distance: Infinity};
			key[j] = Infinity;
		}
		var parent = [];
		
		minHeap.heapifyTheArrayOfObjectToMinHeap(arrayToBeheapified);
		minHeap.reduceTheDistanceValInObjectHeap(0, 0);
		parent[0] = -1;
		key[0] = 0;
		
		while(minHeap.getCount()){
			var u = minHeap.deleteMinFromObjectMinHeap();
			var adjacentNode = array[u].next;
			while(adjacentNode){
				var adjacentVertix = adjacentNode.vertix;
				if(minHeap.isPresentInObjectMinHeap(adjacentVertix) && key[adjacentVertix] > adjacentNode.weight){
					minHeap.reduceTheDistanceValInObjectHeap(adjacentVertix, adjacentNode.weight);
					key[adjacentVertix] = adjacentNode.weight;
					parent[adjacentVertix] = {p: u, w: adjacentNode.weight};
				}
				adjacentNode= adjacentNode.next;
			}
		}
		printTheSpanningTree(parent);
	}//O((V+E) log V)
	
	/*
	 * Kruskal's method
	 * 1. Iterating over all the edges
	 * 2. Use Disjoint Sets method isCycle to see if a cycle is introduced or not
	 * */
	function kruskalViaDisjointSet(){
		var disjointSet = require('./DisjointSet').DisjointSetADT();
		disjointSet.setSize(V);
		disjointSet.makeSet();
		
		sortEdgesByWeight();
		var parent = [];
		var count = 0;
		for(let e=0;e<edgesArray.length ;e++){
			var src = edgesArray[e].src;
			var dest = edgesArray[e].dest;
			
			var srcRep = disjointSet.findWithPathCompression(src);
			var destRep = disjointSet.findWithPathCompression(dest);
			if(srcRep != destRep){
				disjointSet.unionWithPathCompression(srcRep, destRep);
				parent.push({src, dest, w: edgesArray[e].weight});
			}
			
		}
		console.log("Kruskal:: ", parent);
	}//E log E
	
	
	function sortEdgesByWeight(){
		edgesArray.sort((a, b) => a.weight-b.weight );
		console.log(edgesArray, 'edgesArray');
	}//O(n log n)
	
	/*
	 * Detect Cycle in a Graph via disjoint sets data structure
	 * */
	function isCycle(){
		var disjointSet = require('./DisjointSet').DisjointSetADT();
		disjointSet.setSize(V);
		disjointSet.makeSet();
		for(let e=0;e < edgesArray.length ;e++){
			var src = edgesArray[e].src;
			var dest = edgesArray[e].dest;
			
			var srcRep = disjointSet.findWithPathCompression(src);
			var destRep = disjointSet.findWithPathCompression(dest);
			if(srcRep == destRep){
				return true;
			}
			disjointSet.unionWithPathCompression(srcRep, destRep);
		}
		return false;
	}//O(E log V)
	
	/*
	 * Start - Now, below are the problems on Graphs given in the Book
	 * */
	/*
	 * 1. Maxiumum number of edges in a graph = n(n-1) - no loops - Undirected graph
	 * 2. How many adjancency matrix are possible for a Graph of n nodes - n! = nPn
	 * 3. Number of Adjacency lists are possible for E edges = ePe = e!
	 * 4. In a directed graph the maxium edges are n^2, when no loops are allowed then n(n-1)/2
	 * 5. Simple directed graphs  - V(V-1) as any node
	 * 6. In order to get the maximum spanning tree Use the minimum spanning algo after making the edges as negative
	 * */
	
	// to find the Cut vertixes in a Guraph that make it disconnected
	/*
	 * We do a DFS with some additions - 
	 * 1. When its a root node with more than one child then its a Cut vertex
	 * 2. When its not a root and any of its child don't have connection to its ancestor then also its a cut edge
	 * 3. We will find the 2nd condition via the comparison of the discovery time of the non parent elements even if they 
	 *    are visited also the condition of whether its a root node or not needs be checked
	 * */
	function articulationPoints(){
		var discovery = [];
		var low = [];
		var visited = [];
		var parent = [];
		var cutVertixesArray = [];
		var level = 0;
		for(let j=0;j< V;j++){
			visited[j] = false;
			parent[j] = null;
			cutVertixesArray[j] = false;
		}
		for(let k=0;k< V;k++){
			if(!visited[k]){
				articulationDFS(k);
			}
		}
		console.log("Cut vertixes:: ", cutVertixesArray);
		
		function articulationDFS(u){
			visited[u] = true;
			low[u] = ++level;
			discovery[u] = low[u];
			var children = 0;
			
			var currentNode = array[u].next;
			console.log(u);
			while(currentNode){
				
				var vertix = currentNode.vertix;
				  
				if(!visited[vertix]){
					parent[vertix] = u;
					children = children+1;
					articulationDFS(vertix);
					low[u] = Math.min(low[u], low[vertix]);
					if(!parent[u] && children >1){
						cutVertixesArray[u] = true;
					}
					
					if(parent[u] !=null && low[vertix] >= discovery[u]){
						cutVertixesArray[u] = true;
					}
				}else if(vertix != parent[u] ){
					low[u] = Math.min(low[u], discovery[vertix]);
				}
				currentNode =  currentNode.next;
			}
		}
	}//O(E + V)
	
	
	/*
	 * Articulate Edges
	 * 1. Similar to the Cut vertices above
	 * 2. Only condition is low[v] > discovery[u]
	 * */
	function articulateEdge(){
		var parent = [];
		var low = [];
		var discovery = [];
		var level = 0;
		var visited= [];
		for(let j=0;j< V;j++){
			visited[j] = false;
			parent[j] = null;
		}
		for(let k=0;k< V;k++){
			if(!visited[k])
			dfsArticulateEdge(k);
		}
		function dfsArticulateEdge(u){
			low[u] = ++level;
			discovery[u] = low[u];
			visited[u] = true;
			var currentNode = array[u].next;
			while(currentNode){
				var v = currentNode.vertix;
				if(!visited[v]){
					parent[v] = u;
					dfsArticulateEdge(v);
					low[u] = Math.min(low[v], low[v]);
					if(low[v] > discovery[u]){
						console.log(u+" - "+v);
					}
				}else if(v != parent[u]){
					low[u] = Math.min(low[u], discovery[v]);
				}
				currentNode = currentNode.next;
			}
		}
	}//O(V + E), the brute force approach its O(E(E+V))
	
	
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
		primsMSTWithArray,
		primsMethodUsingHeap,
		isCycle,
		sortEdgesByWeight,
		kruskalViaDisjointSet,
		articulationPoints,
		articulateEdge
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