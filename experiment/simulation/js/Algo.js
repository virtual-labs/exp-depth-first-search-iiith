class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
        this.nodesVal = [];
        this.visNode = new Array(50);
        this.visNode.fill(0);
        this.chanceType = new Array(50);
        this.dfsRes = []
        this.nextNodeMinimax = new Array(50);
        this.nextNodeMinimax.fill(-10000);
    }

    addNode(node, nodeVal = 100000) {
        this.nodes.push(node);
        this.nodesVal.push(nodeVal);
        this.edges[node] = [];
    }

    addEdge(node1, node2, id) {
        this.edges[node1].push({ node: node2, id: id });
    }

    dfs(curNode, parentNode, maximizer, strtNode) {
        this.visNode[curNode] = 1;
        this.chanceType[curNode] = maximizer;
        var mxNode, mnNode;
        var mxNodeVal = -10000, mnNodeVal = 10000;
        console.log(this.dfsRes)
        for (var i = 0; i < this.edges[curNode].length; i++) {
            if (this.visNode[this.edges[curNode][i].node] == 0) {
                this.dfsRes.push({ st: curNode, end: this.edges[curNode][i].node, forward: true, wait: false, edge_id: this.edges[curNode][i].id });
                this.dfs(this.edges[curNode][i].node, curNode, !maximizer, strtNode);
                if (this.nodesVal[this.edges[curNode][i].node - strtNode] != 100000) {
                    if (this.nodesVal[this.edges[curNode][i].node - strtNode] > mxNodeVal) {
                        mxNodeVal = this.nodesVal[this.edges[curNode][i].node - strtNode];
                        mxNode = this.edges[curNode][i].node;
                    }
                    if (this.nodesVal[this.edges[curNode][i].node - strtNode] < mnNodeVal) {
                        mnNodeVal = this.nodesVal[this.edges[curNode][i].node - strtNode];
                        mnNode = this.edges[curNode][i].node;
                    }
                }
            }
        }
        if (this.edges[curNode].length > 0) {
            if (maximizer) {
                this.nodesVal[curNode - strtNode] = mxNodeVal;
                this.dfsRes.push({ type: "maximizer", childNodes: this.edges[curNode], wait: true, curNode: curNode });
                this.dfsRes.push({ type: "maxSelect", wait: true, curNode: mxNode, nodeVal: mxNodeVal });
                this.dfsRes.push({ type: "nodeValDefineMax", wait: true, curNode: curNode, nodeVal: mxNodeVal });
                this.nextNodeMinimax[curNode] = mxNode;
            }
            else {
                this.nodesVal[curNode - strtNode] = mnNodeVal;
                this.dfsRes.push({ type: "minimizer", childNodes: this.edges[curNode], wait: true, curNode: curNode });
                this.dfsRes.push({ type: "minSelect", wait: true, curNode: mnNode, nodeVal: mnNodeVal });
                this.dfsRes.push({ type: "nodeValDefineMin", wait: true, curNode: curNode, nodeVal: mnNodeVal });
                this.nextNodeMinimax[curNode] = mnNode;
            }
        }

        if (curNode != parentNode) {
            this.dfsRes.push({ st: curNode, end: parentNode, forward: false, wait: false });
        }
        // else {
        //     var tempNode = curNode;
        //     var tempEdgeId, node2_id;
        //     while (tempNode != -10000) {
        //         for (var i = 0; i < this.edges[tempNode].length; i++) {
        //             if (this.edges[tempNode][i].node == this.nextNodeMinimax[tempNode]) {
        //                 tempEdgeId = this.edges[tempNode][i].id;
        //                 node2_id = this.nextNodeMinimax[tempNode];
        //             }
        //         }
        //         this.dfsRes.push({ type: "finalEdgeDisp", wait: true, edge_id: tempEdgeId, node1_id: tempNode, node2_id: node2_id });
        //         tempNode = this.nextNodeMinimax[tempNode];
        //         console.log(tempNode);
        //         console.log("hi")
        //     }
        // }
    }
}

let gTicTac = new Graph();
let g = new Graph();

