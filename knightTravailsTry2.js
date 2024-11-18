const { createAdjList } = require ("./createEdges.js")
var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

let doBFS = function(graph) {
    let total = 0;
    let bfsInfo = [];

    for (let i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null,
         };
    }
    
     for (let i = 0; i < 8; i++) {
       for (let j = 0; j < 8; j++) {
          bfsInfo[total].abstr = (`${i}-${j}`)
          total +=1
         }
       }

    return bfsInfo;
};

let doBFS2 = function (graph, source) {
  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);
  while (!queue.isEmpty()) {
     let temp = queue.dequeue();
     for (let i = 0; i < graph[temp].length; i++) {
       let test = graph[temp][i]
       if (bfsInfo[test].distance == null) {
            bfsInfo[test].distance = bfsInfo[temp].distance + 1;
            bfsInfo[test].predecessor = temp;
            queue.enqueue(test)
      }
     }
  }
  
  return bfsInfo;
}

let adjList2 = new Array(64)
let bfsInfo = doBFS(adjList2);
createAdjList(adjList2, bfsInfo)

function knightMoves(start, end) {
  let strStart = start.map(str => String(str)).join("-");
  let strEnd = end.map(str => String(str)).join("-");
  let bfsInfo3;
  let moves = 0;
  let total = [];
  let result = [];

  for (let i = 0; i < adjList2.length; i++) {
    if (bfsInfo[i].abstr === strStart) {
      bfsInfo3 = doBFS2(adjList2, i)
    }
 }

  for (let i = 0; i < adjList2.length; i++) {
    if (bfsInfo3[i].abstr === strEnd) {
        total.push(bfsInfo3[i].predecessor)
        result.push(bfsInfo3[i].abstr)
    }
  }

  while (total.length !== 0) {
    let temp = total.shift();
     if (bfsInfo3[temp] !== undefined) {
       moves +=1;
       result.push(bfsInfo3[temp].abstr)
       total.push(bfsInfo3[temp].predecessor)
  }
 }

  console.log(`=> You made it in ${moves} moves!  Here's your path: `)
  console.log(result.reverse())
 // return result.reverse()
}

knightMoves([3,3],[7,7])

