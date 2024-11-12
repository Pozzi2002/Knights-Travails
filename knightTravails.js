function findShortestDistance(graph, start, end) {
  let currentLayer = [start];
  let nextLayer = [];

  let distance = 0;

  let visited = new Set();

  visited.add(start);

  while (currentLayer.length > 0) {
    for (let node of currentLayer) {

      if (node === end) {
        return distance;
      }
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          nextLayer.push(neighbor);
          visited.add(neighbor);
          console.log(neighbor)
        }
      }
    }
    currentLayer = nextLayer;
    nextLayer = [];
    distance += 1;
  }

  return -1;
}
class Graph {
  adjacencyList;
  constructor() {
      this.adjacencyList = new Map();
  }
  addNode(node) {
      this.adjacencyList.set(node, new Set())
  }
  addEdge(node1, node2) {
      this.adjacencyList.get(node1).add(node2);
      this.adjacencyList.get(node2).add(node1)
  }
  getNeighboors(node) {
     return this.adjacencyList.get(node)
  }
  hasEdge(node1, node2) {
      return this.adjacencyList.get(node1).has(node2)
  }
}
function createBoard() {
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
        graph.addNode(`${i}-${j}`)
    }
  }
}

let graph = new Graph;
let test = new Map()
createBoard()
graph.addEdge("0-0", "2-1")
graph.addEdge("2-1", "3-3")
graph.addEdge("2-1", "4-2")
graph.addEdge("4-2", "6-3")
graph.addEdge("6-3", "4-4")
graph.addEdge("4-4", "6-5")
graph.addEdge("6-5", "7-7")
findShortestDistance(Object.fromEntries(graph.adjacencyList), "0-0", "7-7")
//console.log(graph)
//console.log(Object.fromEntries(graph.adjacencyList))
//[3,3] -> [4,5] -> [2,4] -> [4,3]