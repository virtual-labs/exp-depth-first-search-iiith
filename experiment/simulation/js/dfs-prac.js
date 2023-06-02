function resetedge(edgeID) {
    if (edgeID) {
        var clickedEdge = edges.get(edgeID);
        clickedEdge.color = {
            color: '#808080',
            highlight: '#808080',
            highlightwidth: 0
        };
        clickedEdge.width = 2.0;
        clickedEdge.selectionWidth = 0;
        edges.update(clickedEdge);
    }
}
function resetnode(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: "#98CB3B",
            background: "white"
        }
        clickedNode.font = {
            color: "black"
        }
        nodes.update(clickedNode);
    }
}

function randomIntegers(tot) {
    let rand_vals = []
    for (let i = 0; i < tot; i++) {
        rand_vals.push(Math.floor(Math.random() * 19) + -9)
    }
    return rand_vals;
}

function getValAsStr(graphs_rand_vals) {
    let graphs_rand_vals_str = []
    for (let i = 0; i < graphs_rand_vals.length; i++) {
        if (graphs_rand_vals[i] >= 0) {
            graphs_rand_vals_str.push(' ' + graphs_rand_vals[i].toString());
        }
        else {
            graphs_rand_vals_str.push(graphs_rand_vals[i].toString());
        }
    }
    return graphs_rand_vals_str;
}

class dfs_class {
    constructor() {
        this.dfsres = [];
        this.curPos = 0;
        this.start = 0;
        this.src = 1;
        this.prevPos = -1;
        this.inputWait = 0;
        this.time = 0;
        this.inpNode = 0;
        this.inpType = null;
        this.maximizer = true;
        this.graphnum = 2;
        this.randValGraph = 0;
        this.nodes = [];
        this.edges = [];
        this.graphRandomValues = [];
        this.nextNodeMinimax = new Array(50);
        this.nextNodeMinimax.fill(-10000);
        this.recentlySelectedNode = -1;
        this.prevSelected = -1000;
        this.inpNodePossibleChild = -1;
    };
};
// var dfs_prac.time = null;
addedEdges = 0;
let dfs_prac = new dfs_class();
var nodes;
var edges;

function declare_graph(isRandom = 0, refresh = 1) {
    var graph_chosen = dfs_prac.graphnum;
    if (!isRandom) {
        dfs_prac.randValGraph = 0;
        nodes = new vis.DataSet(a[graph_chosen][0]);
        edges = new vis.DataSet(a[graph_chosen][1]);
        g.edges = {};
        g.nodes = [];
        g.nodesVal = [];
        g.visNode = new Array(50);
        g.visNode.fill(0);
        g.chanceType = new Array(50);
        g.dfsRes = []
        g.nextNodeMinimax = new Array(50);
        g.nextNodeMinimax.fill(-10000);
        graphs[graph_chosen]();
    }
    else if (isRandom && refresh) {
        dfs_prac.randValGraph = 1;
        required_rand_vals = [8, 11, 3, 4]
        graph_rand_vals = randomIntegers(required_rand_vals[graph_chosen]);
        graph_rand_vals_str = getValAsStr(graph_rand_vals)
        nodes = new vis.DataSet(a_random_val[graph_chosen](graph_rand_vals_str)[0]);
        edges = new vis.DataSet(a_random_val[graph_chosen](graph_rand_vals_str)[1]);
        dfs_prac.nodes = a_random_val[graph_chosen](graph_rand_vals_str)[0];
        dfs_prac.edges = a_random_val[graph_chosen](graph_rand_vals_str)[1];
        g.edges = {};
        g.nodes = [];
        g.nodesVal = [];
        g.visNode = new Array(50);
        g.visNode.fill(0);
        g.chanceType = new Array(50);
        g.dfsRes = []
        g.nextNodeMinimax = new Array(50);
        g.nextNodeMinimax.fill(-10000);
        graphs_random_val[graph_chosen](graph_rand_vals);
        dfs_prac.graphRandomValues = graph_rand_vals;
    }
    else if (isRandom && !refresh) {
        dfs_prac.randValGraph = 1;
        nodes = new vis.DataSet(dfs_prac.nodes);
        edges = new vis.DataSet(dfs_prac.edges);
        g.edges = {};
        g.nodes = [];
        g.nodesVal = [];
        g.visNode = new Array(50);
        g.visNode.fill(0);
        g.chanceType = new Array(50);
        g.dfsRes = []
        g.nextNodeMinimax = new Array(50);
        g.nextNodeMinimax.fill(-10000);
        graphs_random_val[graph_chosen](dfs_prac.graphRandomValues);
    }

    var container = document.getElementById('graph');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var graph_options = {
        layout: {
            hierarchical: {
                direction: "UD",
            },
        }
    }
    var graph = new vis.Network(container, data, graph_options);
    handlers();
    graph.setOptions({
        clickToUse: true,
        nodes: {
            borderWidth: 2,
            heightConstraint: {
                minimum: 10,
            },
            borderWidthSelected: 1,
            chosen: false,
            font: { color: 'black' },
            shape: "circle",
            scaling: {
                label: {
                    enabled: true,
                    min: 35,
                    max: 35
                },
            },
            value: 1,
            color: {
                border: "#98CB3B",
                background: "#ffffff",
                highlight: {
                    border: "#98CB3B",
                    background: "#ffffff"
                },
                hover: {
                    border: "#98CB3B",
                    background: "#ffffff",
                }
            }
        },
        interaction: {
            dragView: false,
            zoomView: false,
            selectConnectedEdges: false,
            hover: true,
            hoverConnectedEdges: false,
            keyboard: {
                enabled: true,
                bindToWindow: true
            },
            navigationButtons: true,
            zoomView: false
        },
        physics: {
            enabled: false,
            stabilization: false
        },
        edges: {
            scaling: {
                min: 1,
                max: 3,
                label: {
                    enabled: true,
                    min: 20,
                    max: 20
                }
            },
            hoverWidth: 0,
            value: 1,
            selectionWidth: 0,
            font: { background: 'white' },
            width: 2,
            labelHighlightBold: false,
            color: {
                inherit: false,
                color: "#808080",
                opacity: 2.0
            },
            chosen: {
                inherit: false
            },
            arrows: {
                to: { enabled: true, scaleFactor: 1, type: 'arrow' },
                middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
                from: { enabled: false, scaleFactor: 1, type: 'arrow' }
            },
            chosen: {
            },
            physics: false
        }
    });
    var networkCanvas = document.getElementById("graph").getElementsByTagName("canvas")[0];
    function changeCursor(newCursorStyle) {
        networkCanvas.style.cursor = newCursorStyle;
    }
    function changeEventCursor(eventName, cursorType) {
        graph.on(eventName, function () {
            changeCursor(cursorType);
        });
    }
    graph.on('hoverNode', function () {
        changeCursor('pointer');
    });
    graph.on('blurNode', function () {
        changeCursor('default');
    });
    graph.on('hoverEdge', function () {
        changeCursor('default');
    });
    graph.on('blurEdge', function () {
        changeCursor('default');
    });
    graph.on('dragStart', function () {
        changeCursor('grabbing');
    });
    graph.on('dragging', function () {
        changeCursor('grabbing');
    });
    graph.on('dragEnd', function () {
        changeCursor('grab');
    });
    graph.on("click", function (params) {
        dfs_prac.resetter = 0;
        console.log(params);
        if (params['nodes'].length > 0 && dfs_prac.inputWait == 1 && params['nodes']['0']) {
            var selectedNode = params['nodes']['0'];
            var canBeSelected=0;
            console.log(dfs_prac.dfsres[dfs_prac.curPos-1]);
            for (var ti = 0; ti < dfs_prac.dfsres[dfs_prac.curPos-1].childNodes.length; ti++) {
                console.log(dfs_prac.dfsres[dfs_prac.curPos-1].childNodes[ti].node)
                if(dfs_prac.dfsres[dfs_prac.curPos-1].childNodes[ti].node==selectedNode){
                    canBeSelected=1;
                    break;
                }
            }
            if (canBeSelected && g.nodesVal[selectedNode - 1] == dfs_prac.inpNode && g.nextNodeMinimax[selectedNode] != dfs_prac.inpNodePossibleChild) {
                if (dfs_prac.inpType == "min") {
                    dfs_prac.recentlySelectedNode = selectedNode;
                    if (dfs_prac.prevSelected != -1000) {
                        clickednodeMinUnSelect(dfs_prac.prevSelected);
                    }
                    dfs_prac.prevSelected = selectedNode;
                    clickednodeMinSelect(selectedNode);
                    document.getElementById("ins").innerHTML = "<b>Correct node selected<br>Press Next to proceed</b>";
                    document.getElementById("inprequired").innerHTML = "";
                    document.getElementById("start").disabled = false;
                }
                else {
                    dfs_prac.recentlySelectedNode = selectedNode;
                    if (dfs_prac.prevSelected != -1000) {
                        clickednodeMaxUnSelect(dfs_prac.prevSelected);
                    }
                    dfs_prac.prevSelected = selectedNode;
                    clickednodeMaxSelect(selectedNode);
                    document.getElementById("ins").innerHTML = "<b>Correct node selected<br>Press Next to proceed</b>";
                    document.getElementById("inprequired").innerHTML = "";
                    document.getElementById("start").disabled = false;
                }
            }
            else {
                console.log("teststt");
                if (dfs_prac.inpType == "min") {
                    console.log("teststt")
                    if (dfs_prac.prevSelected != -1000) {
                        clickednodeMinUnSelect(dfs_prac.prevSelected);
                    }
                    document.getElementById("start").disabled = true;
                    document.getElementById("ins").innerHTML = "<b>This is minimizer's turn<br>Select the minimum value node from the purple colored child nodes of the current grey colored parent node</b>";
                    document.getElementById("inprequired").innerHTML = "Select Node !";
                }
                else {
                    console.log("teststt")

                    if (dfs_prac.prevSelected != -1000) {
                        clickednodeMaxUnSelect(dfs_prac.prevSelected);
                    }
                    document.getElementById("start").disabled = true;
                    document.getElementById("ins").innerHTML = "<b>This is maximizer's turn<br>Select the maximum value node from the red colored child nodes of the current grey colored parent node</b>";
                    document.getElementById("inprequired").innerHTML = "Select Node !";
                }
            }
        }
        dfs_prac.src = 1;
    });
}

declare_graph()

function clickednode(nodeID) {//green
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: '#3BFB11',
            background: "#98CB3B"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednode1(nodeID) {//blue
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: "black",
            background: "#2C9AD1"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednode2(nodeID) {//light grey
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: '#70746F',
            background: "grey"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednode3(nodeID) {//black
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: '#0C0D0C',
            background: "black"
        }
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickednodeMinimizer(nodeIDs) {
    for (var i = 0; i < nodeIDs.length; i++) {
        nodeID = nodeIDs[i];
        if (nodeID) {
            var clickedNode = nodes.get(nodeID);
            clickedNode.color = {
                border: 'black',
                background: "#CCCCFF"
            }
            clickedNode.font = {
                color: "black"
            }
            nodes.update(clickedNode);
        }
    }
}

function clickednodeMaximizer(nodeIDs) {
    for (var i = 0; i < nodeIDs.length; i++) {
        nodeID = nodeIDs[i];
        if (nodeID) {
            var clickedNode = nodes.get(nodeID);
            clickedNode.color = {
                border: 'black',
                background: "#FFCCCB"
            }
            clickedNode.font = {
                color: "black"
            }
            nodes.update(clickedNode);
        }
    }
}

function clickednodeMaxSelect(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: 'red',
        }
        nodes.update(clickedNode);
    }
}

function clickednodeMaxUnSelect(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        clickedNode.color = {
            border: 'black',
        }
        nodes.update(clickedNode);
    }
}

function clickednodeMinSelect(nodeID) {
    console.log(nodeID);
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode);
        clickedNode.color = {
            border: 'purple',
        }
        nodes.update(clickedNode);
    }
}

function clickednodeMinUnSelect(nodeID) {
    console.log(nodeID);
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode);
        clickedNode.color = {
            border: 'black',
        }
        nodes.update(clickedNode);
    }
}

function clickednodeLabelDef(nodeID, label) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        var tempLabel;
        if (label >= 0 && label < 10) {
            tempLabel = ' ' + label.toString();
        }
        else {
            tempLabel = label.toString();
        }

        clickedNode.label = tempLabel;
        clickedNode.font = {
            color: "white"
        }
        nodes.update(clickedNode);
    }
}

function clickededge1(edgeID) {
    if (edgeID) {
        var clickedEdge = edges.get(edgeID);
        clickedEdge.color = {
            color: 'black',
            highlight: 'black'
        }
        edges.update(clickedEdge);
    }
}

function clickededgeFinal(edgeID) {
    if (edgeID) {
        var clickedEdge = edges.get(edgeID);
        clickedEdge.color = {
            color: 'green',
            highlight: 'green',
            scaling: {
                min: 20,
                max: 20
            },
        }
        edges.update(clickedEdge);
    }
}

function clickednodelabel(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        nodes.update(clickedNode);
        return clickedNode.label;
    }
}

if (dfs_prac.start == 0) {
    document.getElementById("pause").disabled = true;
    document.getElementById("New_graph").disabled = true;
}

function clicking() {
    if (dfs_prac.curPos < dfs_prac.dfsres.length) {
        if (!dfs_prac.dfsres[dfs_prac.curPos].wait) {
            if (dfs_prac.dfsres[dfs_prac.curPos].forward) {
                clickednode(dfs_prac.dfsres[dfs_prac.curPos].st);
                clickededge1(dfs_prac.dfsres[dfs_prac.curPos].edge_id);
                clickednode2(dfs_prac.dfsres[dfs_prac.curPos].end);
            }
            else {
                clickednode3(dfs_prac.dfsres[dfs_prac.curPos].st);
                clickednode2(dfs_prac.dfsres[dfs_prac.curPos].end);
            }
        }
        else {
            if (dfs_prac.dfsres[dfs_prac.curPos].type == "maximizer") {
                var nodesForMaximizer = []
                for (var i = 0; i < dfs_prac.dfsres[dfs_prac.curPos].childNodes.length; i++) {
                    nodesForMaximizer.push(dfs_prac.dfsres[dfs_prac.curPos].childNodes[i].node);
                }
                clickednodeMaximizer(nodesForMaximizer);
                dfs_prac.inputWait = 1;
                dfs_prac.inpNode = dfs_prac.dfsres[dfs_prac.curPos + 1].nodeVal;
                dfs_prac.inpNodePossibleChild = dfs_prac.dfsres[dfs_prac.curPos + 1].curNode;
                document.getElementById("start").disabled = true;
                dfs_prac.inpType = "max";
                document.getElementById("ins").innerHTML = "<b>Select the correct node</b>";
                document.getElementById("inprequired").innerHTML = "Select Node !";
                document.getElementById("pause").disabled = true;
                document.getElementById("New_graph").disabled = false;
                clearInterval(dfs_prac.time);
            }
            else if (dfs_prac.dfsres[dfs_prac.curPos].type == "minimizer") {
                var nodesForMinimizer = []
                for (var i = 0; i < dfs_prac.dfsres[dfs_prac.curPos].childNodes.length; i++) {
                    nodesForMinimizer.push(dfs_prac.dfsres[dfs_prac.curPos].childNodes[i].node);
                }
                clickednodeMinimizer(nodesForMinimizer);
                dfs_prac.inputWait = 1;
                dfs_prac.inpNode = dfs_prac.dfsres[dfs_prac.curPos + 1].nodeVal;
                dfs_prac.inpNodePossibleChild = dfs_prac.dfsres[dfs_prac.curPos + 1].curNode;
                document.getElementById("start").disabled = true;
                dfs_prac.inpType = "min";
                document.getElementById("ins").innerHTML = "<b>Select the correct node</b>";
                document.getElementById("inprequired").innerHTML = "Select Node !";
                document.getElementById("pause").disabled = true;
                document.getElementById("New_graph").disabled = false;
                clearInterval(dfs_prac.time);
            }
            else if (dfs_prac.dfsres[dfs_prac.curPos].type == "minSelect") {
                clickednodeMinSelect(dfs_prac.dfsres[dfs_prac.curPos].curNode);
            }
            else if (dfs_prac.dfsres[dfs_prac.curPos].type == "maxSelect") {
                clickednodeMaxSelect(dfs_prac.dfsres[dfs_prac.curPos].curNode);
            }
            else if (dfs_prac.dfsres[dfs_prac.curPos].type == "nodeValDefineMax") {
                dfs_prac.nextNodeMinimax[dfs_prac.dfsres[dfs_prac.curPos].curNode] = dfs_prac.recentlySelectedNode;
                clickednodeLabelDef(dfs_prac.dfsres[dfs_prac.curPos].curNode, dfs_prac.dfsres[dfs_prac.curPos].nodeVal);
                document.getElementById("ins").innerHTML = "<b>Since it was maximizer's turn<br>" + dfs_prac.dfsres[dfs_prac.curPos].nodeVal + ", which is max of child node values is picked</b>";
            }
            else if (dfs_prac.dfsres[dfs_prac.curPos].type == "nodeValDefineMin") {
                dfs_prac.nextNodeMinimax[dfs_prac.dfsres[dfs_prac.curPos].curNode] = dfs_prac.recentlySelectedNode;
                clickednodeLabelDef(dfs_prac.dfsres[dfs_prac.curPos].curNode, dfs_prac.dfsres[dfs_prac.curPos].nodeVal);
                document.getElementById("ins").innerHTML = "<b>Since it was minimizer's turn<br>" + dfs_prac.dfsres[dfs_prac.curPos].nodeVal + ", which is min of child node values is picked</b>";
            }
            else if (dfs_prac.dfsres[dfs_prac.curPos].type == "finalEdgeDisp") {
                clickededgeFinal(dfs_prac.dfsres[dfs_prac.curPos].edge_id);
                document.getElementById("ins").innerHTML = "<b>Green arrows highlight the decision taken in each turn</b>";
            }
        }
        dfs_prac.curPos++;
    }
    else {
        document.getElementById("pause").disabled = true;
        var tempNode = dfs_prac.src;
        var tempEdgeId;
        document.getElementById("ins").innerHTML = "<b>Green arrows highlight the decision taken in each turn</b>";
        while (tempNode != -10000) {
            for (var i = 0; i < g.edges[tempNode].length; i++) {
                if (g.edges[tempNode][i].node == dfs_prac.nextNodeMinimax[tempNode]) {
                    tempEdgeId = g.edges[tempNode][i].id;
                }
            }
            // this.dfsRes.push({ type: "finalEdgeDisp", wait: true, edge_id: tempEdgeId, node1_id: tempNode, node2_id: node2_id });
            clickededgeFinal(tempEdgeId);
            tempNode = dfs_prac.nextNodeMinimax[tempNode];
        }
    }
}

function reset() {
    if (dfs_prac.time != 0) {
        clearInterval(dfs_prac.time);
    }
    dfs_prac.dfsres = [];
    dfs_prac.curPos = 0;
    dfs_prac.start = 0;
    dfs_prac.prevPos = -1;
    dfs_prac.src = 1;
    dfs_prac.inputWait = 0;
    dfs_prac.time = 0;
    dfs_prac.inpNode = 0;
    dfs_prac.inpType = null;
    dfs_prac.nextNodeMinimax = new Array(50);
    dfs_prac.nextNodeMinimax.fill(-10000);
    if (dfs_prac.randValGraph == 0)
        declare_graph()
    else {
        declare_graph(1, 0)
    }
    document.getElementById("start").value = "Start";
    document.getElementById("start").disabled = false;
    document.getElementById("interval").value = 1500;
    document.getElementById("pause").disabled = true;
    document.getElementById("New_graph").disabled = true;
    document.getElementById("pause").value = "Pause";
    document.getElementById("ins").innerHTML = "";
    document.getElementById("inprequired").innerHTML = "";
}

function start() {
    if (dfs_prac.start == 0) {
        if (dfs_prac.maximizer)
            document.getElementById("ins").innerHTML = "<b>Minimax algorithm started on source node<br>Maximizer will start with the first turn</b>";
        else {
            document.getElementById("ins").innerHTML = "<b>Minimax algorithm started on source node<br>Minimizer will start with the first turn</b>";
        }
        g.dfs(dfs_prac.src, dfs_prac.src, dfs_prac.maximizer, dfs_prac.src);
        dfs_prac.dfsres = g.dfsRes;
        console.log(dfs_prac.dfsres);
        document.getElementById("start").value = "Next";
        document.getElementById("start").disabled = true;
        dfs_prac.start = 1;
        document.getElementById("pause").disabled = false;
        document.getElementById("New_graph").disabled = false;
        dfs_prac.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
    }
    else if (document.getElementById("start").value == "Next") {
        clearInterval(dfs_prac.time);
        dfs_prac.prevSelected = -1000;
        dfs_prac.inputWait = 0;
        dfs_prac.curPos += 1;
        dfs_prac.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
        document.getElementById("start").disabled = true;
        document.getElementById("pause").disabled = false;
    }
    else {
        document.getElementById("start").disabled = true;
        document.getElementById("start").style.backgroundColor = "grey";
    }
}

function pause() {
    if (dfs_prac.prevPos == -1) {
        dfs_prac.prevPos = document.getElementById("interval").value;
        if (dfs_prac.time != 0) {
            clearInterval(dfs_prac.time);
        }
        document.getElementById("pause").value = "Play";
    }
    else {
        dfs_prac.prevPos = -1;
        clearInterval(dfs_prac.time);
        dfs_prac.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
        document.getElementById("pause").value = "Pause";
    }
}

function change_interval() {
    if (dfs_prac.time != 0 && dfs_prac.inputWait == 0 && dfs_prac.prevPos == -1) {
        console.log("interval changed")
        clearInterval(dfs_prac.time);
        dfs_prac.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
    }
}


function change_player() {
    console.log(document.getElementById("first_player").value);
    if (dfs_prac.time != 0) {
        clearInterval(dfs_prac.time);
    }
    if (document.getElementById("first_player").value == "minimizer") {
        dfs_prac.maximizer = false;
    }
    else {
        dfs_prac.maximizer = true;
    }

    dfs_prac.dfsres = [];
    dfs_prac.prevPos = -1;
    dfs_prac.curPos = 0;
    dfs_prac.start = 0;
    dfs_prac.src = 1;
    dfs_prac.inputWait = 0;
    dfs_prac.time = 0;
    dfs_prac.inpNode = 0;
    dfs_prac.inpType = null;
    dfs_prac.nextNodeMinimax = new Array(50);
    dfs_prac.nextNodeMinimax.fill(-10000);
    if (dfs_prac.randValGraph == 0)
        declare_graph()
    else {
        declare_graph(1, 0)
    }
    document.getElementById("start").value = "Start";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("New_graph").disabled = true;
    document.getElementById("ins").innerHTML = "";
    document.getElementById("inprequired").innerHTML = "";
}

function change_graph() {
    if (dfs_prac.time != 0) {
        clearInterval(dfs_prac.time);
    }
    var graph_number = document.getElementById("graph_num").value - 1;
    dfs_prac.graphnum = graph_number;
    dfs_prac.dfsres = [];
    dfs_prac.curPos = 0;
    dfs_prac.prevPos = -1;
    dfs_prac.start = 0;
    dfs_prac.src = 1;
    dfs_prac.inputWait = 0;
    dfs_prac.time = 0;
    dfs_prac.inpNode = 0;
    dfs_prac.inpType = null;
    dfs_prac.nextNodeMinimax = new Array(50);
    dfs_prac.nextNodeMinimax.fill(-10000);
    declare_graph()
    document.getElementById("start").value = "Start";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("New_graph").disabled = true;
    document.getElementById("ins").innerHTML = "";
    document.getElementById("inprequired").innerHTML = "";
}

function random_graph() {
    if (dfs_prac.time != 0) {
        clearInterval(dfs_prac.time);
    }
    var graph_number = Math.floor(Math.random() * 4);
    document.getElementById("graph_num").value = graph_number + 1;
    dfs_prac.graphnum = graph_number;
    dfs_prac.dfsres = [];
    dfs_prac.curPos = 0;
    dfs_prac.start = 0;
    dfs_prac.prevPos = -1;
    dfs_prac.src = 1;
    dfs_prac.inputWait = 0;
    dfs_prac.time = 0;
    dfs_prac.inpNode = 0;
    dfs_prac.inpType = null;
    dfs_prac.nextNodeMinimax = new Array(50);
    dfs_prac.nextNodeMinimax.fill(-10000);
    declare_graph()
    document.getElementById("start").value = "Start";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("New_graph").disabled = true;
    document.getElementById("ins").innerHTML = "";
    document.getElementById("inprequired").innerHTML = "";
}

function random_graph_values() {
    if (dfs_prac.time != 0) {
        clearInterval(dfs_prac.time);
    }
    dfs_prac.dfsres = [];
    dfs_prac.curPos = 0;
    dfs_prac.start = 0;
    dfs_prac.src = 1;
    dfs_prac.prevPos = -1;
    dfs_prac.inputWait = 0;
    dfs_prac.time = 0;
    dfs_prac.inpNode = 0;
    dfs_prac.inpType = null;
    dfs_prac.nextNodeMinimax = new Array(50);
    dfs_prac.nextNodeMinimax.fill(-10000);
    declare_graph(1);
    document.getElementById("start").value = "Start";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("New_graph").disabled = true;
    document.getElementById("ins").innerHTML = "";
    document.getElementById("inprequired").innerHTML = "";
}


function handlers() {
    document.getElementById("New_graph").onclick = function () { reset(); };
    document.getElementById("start").onclick = function () { start(); };
    document.getElementById("new_graph").onclick = function () { random_graph(); };
    document.getElementById("rand_val").onclick = function () { random_graph_values(); };
    document.getElementById("pause").onclick = function () { pause(); };

};
