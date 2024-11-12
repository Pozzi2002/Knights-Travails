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
          }
        }
      }
      currentLayer = nextLayer;
      nextLayer = [];
      distance += 1;
    }
  
    return -1;
  }
  
  // Example usage
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'C', 'D'],
    C: ['A', 'B', 'E', 'F'],
    D: ['B'],
    E: ['C'],
    F: ['C']
  };
  //console.log(graph)
  //console.log("Shortest Distance Between A and F is:");
  console.log(findShortestDistance(graph, 'A', 'F'))