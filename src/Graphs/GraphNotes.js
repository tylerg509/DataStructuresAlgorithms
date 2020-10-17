// edge list 
// shows connections
// 0 is connected to 2, 2 is connected to 3, 2 is connectet to 1
const graph = [[0,2], [2,3], [2,1], [1,3]]

// adjacent list 
// node at index 0 is connected to 2, index 1 is connected to 2,3, index 2 is connected to 0,1,3
const graph2 = [[2], [2,3], [0,1,3], [1,2]]

// adjacent matrix - same as edge list and adjacent list
// index node 0 has connection to index 2 
// index node 1 has connection to index 2 and 3, etc
const graph3 = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]