/*
 * The Disjoint set is an auxilliary data structure that can be used in Graph Theory
 * Initially all the nodes are all belonging to their own disjoint sets
 * */
function DisjointSetADT(){
	var size = 10; //default 10 elements
	var parent = [];
	var rank = [];
	
	for(let i=0;i < size;i++){
		rank[i] = 0;
	}
	function setSize(arg){
		size = arg;
		for(let i=0;i < size;i++){
			rank[i] = 0;
		}
	};
	function makeSet(){
		for(let i=0;i< size;i++){
			parent[i] = i;
		}
	}
	function find(i){
		if(parent[i] == i){
			return i;
		}
		return find(parent[i]);
	}
	
	function union(node1, node2){
		if(node1 < 0 || node2 < 0 || node1 >= parent.length || node2 >= parent.length){
			return;
		}
		var representativeOfNode1 = find(node1);
		var representativeOfNode2 = find(node2);
		if(representativeOfNode1 == representativeOfNode2){return;}
		parent[representativeOfNode1] = representativeOfNode2;
	}
	
	/*
	 * Path compressions- find and union
	 * 1. Cache the representative values in parent[i] itself
	 * 2. While doing union increment the rank[i] value  
	 * */
	
	
	function findWithPathCompression(i){
		if(parent[i] == i){
			return i;
		}
		var result = findWithPathCompression(parent[i]);
		parent[i] = result;
		return result;
	}
	
	/*
	 * While changing the representative consider
	 * 1. check the ranks for the iRep and jRep and insert as in code 
	 * */
	function unionWithPathCompression(i, j){
		var iRepresentative = findWithPathCompression(i);
		var jRepresentative = findWithPathCompression(j);
		if(iRepresentative == jRepresentative){
			return;
		}
		var iRepRank = rank[iRepresentative];
		var jRepRank = rank[jRepresentative];
		if(jRepRank == iRepRank){
			parent[iRepresentative] = jRepresentative;
			rank[jRepresentative] = rank[jRepresentative]+1;
		}else if(jRepRank < iRepRank){
			parent[jRepresentative] = iRepresentative;
			//rank[jRepresentative] = rank[jRepresentative]+1;
		}
		else if(iRepRank < jRepRank){
			parent[iRepresentative] = jRepresentative;
			//rank[iRepresentative] = rank[iRepresentative]+1;
		}
	}
	return{
		makeSet,
		setSize,
		union,
		find,
		findWithPathCompression,
		unionWithPathCompression
	};
}

module.exports = {DisjointSetADT};