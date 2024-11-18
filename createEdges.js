const createAdjList = function(adjList2, bfsInfo) {
  for (let i = 0; i < adjList2.length; i++) {
    for (let j = 0; j < adjList2.length; j++) {

      if (Number(bfsInfo[i].abstr.split("-")[0]) >= 2 && Number(bfsInfo[i].abstr.split("-")[1]) >= 1) {
        if (Number(bfsInfo[i].abstr.split("-")[0]) - 2 === Number(bfsInfo[j].abstr.split("-")[0]) &&
            Number(bfsInfo[i].abstr.split("-")[1]) - 1 === Number(bfsInfo[j].abstr.split("-")[1])) {
             adjList2[i] = []
             adjList2[i].push(j)
     }
    }

    if (Number(bfsInfo[i].abstr.split("-")[0]) >= 1 && Number(bfsInfo[i].abstr.split("-")[1]) >= 2) {
        if (Number(bfsInfo[i].abstr.split("-")[1]) - 2 === Number(bfsInfo[j].abstr.split("-")[1]) &&
            Number(bfsInfo[i].abstr.split("-")[0]) - 1 === Number(bfsInfo[j].abstr.split("-")[0])) {
             if (adjList2[i] == undefined) adjList2[i] = [];
             adjList2[i].push(j)
     }
    }

    if (Number(bfsInfo[i].abstr.split("-")[0]) <= 5 && Number(bfsInfo[i].abstr.split("-")[1]) <= 6) {
        if (Number(bfsInfo[i].abstr.split("-")[1]) + 1 === Number(bfsInfo[j].abstr.split("-")[1]) &&
            Number(bfsInfo[i].abstr.split("-")[0]) + 2 === Number(bfsInfo[j].abstr.split("-")[0])) {
             if (adjList2[i] == undefined) adjList2[i] = [];
             adjList2[i].push(j)
      }
    }

    if (Number(bfsInfo[i].abstr.split("-")[0]) <= 6 && Number(bfsInfo[i].abstr.split("-")[1]) <= 5) {
        if (Number(bfsInfo[i].abstr.split("-")[1]) + 2 === Number(bfsInfo[j].abstr.split("-")[1]) &&
            Number(bfsInfo[i].abstr.split("-")[0]) + 1 === Number(bfsInfo[j].abstr.split("-")[0])) {
             if (adjList2[i] == undefined) adjList2[i] = [];
             adjList2[i].push(j)
      }
    }

    if (Number(bfsInfo[i].abstr.split("-")[0]) >= 2) {
        if (Number(bfsInfo[i].abstr.split("-")[1]) + 1 === Number(bfsInfo[j].abstr.split("-")[1]) &&
            Number(bfsInfo[i].abstr.split("-")[0]) - 2 === Number(bfsInfo[j].abstr.split("-")[0])) {
             if (adjList2[i] == undefined) adjList2[i] = [];
             adjList2[i].push(j)
      }
    }

    if (Number(bfsInfo[i].abstr.split("-")[1]) >= 2) {
        if (Number(bfsInfo[i].abstr.split("-")[1]) - 2 === Number(bfsInfo[j].abstr.split("-")[1]) &&
            Number(bfsInfo[i].abstr.split("-")[0]) + 1 === Number(bfsInfo[j].abstr.split("-")[0])) {
             if (adjList2[i] == undefined) adjList2[i] = [];
             adjList2[i].push(j)
      }
    }

    if (Number(bfsInfo[i].abstr.split("-")[0]) >= 1) {
        if (Number(bfsInfo[i].abstr.split("-")[1]) + 2 === Number(bfsInfo[j].abstr.split("-")[1]) &&
            Number(bfsInfo[i].abstr.split("-")[0]) - 1 === Number(bfsInfo[j].abstr.split("-")[0])) {
             if (adjList2[i] == undefined) adjList2[i] = [];
             adjList2[i].push(j)
      }
    }

    if (Number(bfsInfo[i].abstr.split("-")[1]) >= 1) {
        if (Number(bfsInfo[i].abstr.split("-")[1]) - 1 === Number(bfsInfo[j].abstr.split("-")[1]) &&
            Number(bfsInfo[i].abstr.split("-")[0]) + 2 === Number(bfsInfo[j].abstr.split("-")[0])) {
             if (adjList2[i] == undefined) adjList2[i] = [];
             adjList2[i].push(j)
      }
    }
  }
 }
 return adjList2
}

module.exports = { createAdjList }