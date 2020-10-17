
class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    //create nodes with no edges
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1)

    }

    showConnection() {
        const allNodes = Object.keys

        (this.adjacentList)

        for (let node of allNodes) {
            let nodeConnections = 
            this.adjacentList[node]
            let connections = ''
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + ' '
            }
            console.log(node + '--> ' + connections)

        }
    }
    
}

export const mygraph = () => {
    const theGraph = new Graph();

    theGraph.addVertex('0')
    theGraph.addVertex('1')
    theGraph.addVertex('2')
    theGraph.addVertex('3')
    theGraph.addVertex('4')
    theGraph.addVertex('5')
    theGraph.addVertex('6')
    theGraph.addEdge('3', '1')
    theGraph.addEdge('3', '4')
    theGraph.addEdge('4', '2')
    theGraph.addEdge('4', '5')
    theGraph.addEdge('1', '2')
    theGraph.addEdge('1', '0')
    theGraph.addEdge('0', '2')
    theGraph.addEdge('6', '5')

    console.log('graph show connections')
    theGraph.showConnection()

    console.log('the graph!')
    console.log(theGraph)

}