var _graph2 = require('./GraphADT').GraphADTUsingAdjacencyList();
_graph2.setVertices(4);
_graph2.addEdge(0, 1, true, 4);
_graph2.addEdge(0, 2, true, 8);
_graph2.addEdge(1, 3, true, 11);
_graph2.addEdge(2, 3, true, 8);
_graph2.bfs();