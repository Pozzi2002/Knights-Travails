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
let graph = new Graph;
graph.addNode(12)
graph.addNode(13)
graph.addEdge(12, 13)
console.log(graph)