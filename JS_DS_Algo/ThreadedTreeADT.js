/**
 * When LTag  == 0 -  left points to the predecessor
 * When LTag  == 1 -  left points to the left child
 * When RTag == 0 -  right points to the descendent
 * When RTag == 1 -  right points to the child
 * */


function ThreadedTreeADT(){
  function findInOrderSuccessorInInOrderTraversal(node){
	  if(node.RTag == 0){
		  return node;
	  }
	  node = node.right;
	  while(node.LTag == 1){
		  node = node.left;
	  }
	  return node;
  }
  
  /*
   * There is a dummy root node whose RTag is 1 and right points to itself, LTag is 1 when the actual Tree exists
   * The LTag of the dummy root will 0 when the Tree doesn't exist
   * When LTag is 1 the left points to the actual Tree root
   * */
  
  //Starting with the Dummy root
  function InOrderTraversalOfInOrderThreadedTree(root){
	  var node = root;
	  for(;;){
		  node = findInOrderSuccessorInInOrderTraversal(node);
		  if(node == root){
			  return;
		  }
		  cosole.log(node.data);
	  }
	  //O(n) Time complexity, Space complexity is O(1)
  }
  
  /*
   * Finding the Pre order successor from InOrder tree
   * */
  function preOrderSuccessorFromInorderThreadTree(node){
	  if(node.LTag ==1 ){
		  return node.left;
	  }
	  while(node.RTag ==0 ){
		  node = node.right;
	  }
	  return node.right;
  }
  
  /*
   * Again start with Dummy node as defined earlier
   * */
  function PreOrderTraversal(root){
	  var node = root;
	  while(1){
		  node = preOrderSuccessorFromInorderThreadTree(node);
		  if(root == node)return;
		  console.log(node.data);
	  }
	  
  }
  
  return {
	      findInOrderSuccessorInInOrderTraversal,
	      InOrderTraversalOfInOrderThreadedTree,
	      preOrderSuccessorFromInorderThreadTree,
	      PreOrderTraversal
  }
}

module.exports = { ThreadedTreeADT }