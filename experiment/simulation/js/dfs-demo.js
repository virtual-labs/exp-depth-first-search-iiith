function regen() {
    location.reload();
}

class dfs_class {
    constructor() {
        this.dfsres = [];
        this.curPos = 0;
        this.prevPos = -1;
        this.start = 0;
        this.src = 1;
        this.dfsresTictac = [];
        this.time = 0;
    };
};

addedEdges = 0;
let dfs_demo = new dfs_class();
var graph_chosen = 4;
graph_chosen = 4;
var nodes = new vis.DataSet(a[graph_chosen][0]);
var edges = new vis.DataSet(a[graph_chosen][1]);
graphs[graph_chosen]();
var container = document.getElementById('graphdemo');
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
                min: 25,
                max: 25
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
var networkCanvas = document.getElementById("graphdemo").getElementsByTagName("canvas")[0];
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

function clickednodeT(nodeID) {//green
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode)
        clickedNode.image = svgImgFill(ticTacToe[nodeID - 1], "#98CB3B")
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

function clickednode1T(nodeID) {//blue
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode)
        clickedNode.image = svgImgFill(ticTacToe[nodeID - 1], "#2C9AD1")
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

function clickednode2T(nodeID) {//light grey
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode)
        clickedNode.image = svgImgFill(ticTacToe[nodeID - 1], "grey")
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

function clickednode3T(nodeID) {//black
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode)
        clickedNode.image = svgImgBlackFill(ticTacToe[nodeID - 1], "black")
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

function clickednodeMinimizerT(nodeIDs) {
    for (var i = 0; i < nodeIDs.length; i++) {
        nodeID = nodeIDs[i];
        if (nodeID) {
            var clickedNode = nodes.get(nodeID);
            console.log(clickedNode)
            clickedNode.image = svgImgFill(ticTacToe[nodeID - 1], "#CCCCFF")
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

function clickednodeMaximizerT(nodeIDs) {
    for (var i = 0; i < nodeIDs.length; i++) {
        nodeID = nodeIDs[i];
        if (nodeID) {
            var clickedNode = nodes.get(nodeID);
            console.log(clickedNode)
            clickedNode.image = svgImgFill(ticTacToe[nodeID - 1], "#FFCCCB")
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

function clickednodeMaxSelectT(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode)
        clickedNode.image = svgImgFill(ticTacToe[nodeID - 1], "#FFCCCB", 10, "red")
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

function clickednodeMinSelectT(nodeID) {
    if (nodeID) {
        var clickedNode = nodes.get(nodeID);
        console.log(clickedNode)
        clickedNode.image = svgImgFill(ticTacToe[nodeID - 1], "#CCCCFF", 10, "purple")
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
            color: "black"
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

if (dfs_demo.start == 0) {
    document.getElementById("pause").disabled = true;
    document.getElementById("New_graph").disabled = true;
}

graph.on("click", function (params) {
    dfs_demo.resetter = 0;
});

function clicking() {
    if (dfs_demo.curPos < dfs_demo.dfsres.length) {
        if (!dfs_demo.dfsres[dfs_demo.curPos].wait) {
            if (dfs_demo.dfsres[dfs_demo.curPos].forward) {
                clickednode(dfs_demo.dfsres[dfs_demo.curPos].st);
                clickededge1(dfs_demo.dfsres[dfs_demo.curPos].edge_id);
                clickednode2(dfs_demo.dfsres[dfs_demo.curPos].end);
                clickednodeT(dfs_demo.dfsresTictac[dfs_demo.curPos].st);
                clickededge1(dfs_demo.dfsresTictac[dfs_demo.curPos].edge_id);
                clickednode2T(dfs_demo.dfsresTictac[dfs_demo.curPos].end);
            }
            else {
                clickednode3(dfs_demo.dfsres[dfs_demo.curPos].st);
                clickednode2(dfs_demo.dfsres[dfs_demo.curPos].end);
                clickednode3T(dfs_demo.dfsresTictac[dfs_demo.curPos].st);
                clickednode2T(dfs_demo.dfsresTictac[dfs_demo.curPos].end);
            }
        }
        else {
            if (dfs_demo.dfsres[dfs_demo.curPos].type == "maximizer") {
                var nodesForMaximizer = []
                for (var i = 0; i < dfs_demo.dfsres[dfs_demo.curPos].childNodes.length; i++) {
                    nodesForMaximizer.push(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node);
                }
                var nodesForMaximizerT = []
                for (var i = 0; i < dfs_demo.dfsresTictac[dfs_demo.curPos].childNodes.length; i++) {
                    nodesForMaximizerT.push(dfs_demo.dfsresTictac[dfs_demo.curPos].childNodes[i].node);
                }
                clickednodeMaximizer(nodesForMaximizer);
                clickednodeMaximizerT(nodesForMaximizerT);

            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "minimizer") {
                var nodesForMinimizer = []
                for (var i = 0; i < dfs_demo.dfsres[dfs_demo.curPos].childNodes.length; i++) {
                    nodesForMinimizer.push(dfs_demo.dfsres[dfs_demo.curPos].childNodes[i].node);
                }
                var nodesForMinimizerT = []
                for (var i = 0; i < dfs_demo.dfsresTictac[dfs_demo.curPos].childNodes.length; i++) {
                    nodesForMinimizerT.push(dfs_demo.dfsresTictac[dfs_demo.curPos].childNodes[i].node);
                }
                clickednodeMinimizer(nodesForMinimizer);
                clickednodeMinimizerT(nodesForMinimizerT);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "minSelect") {
                clickednodeMinSelect(dfs_demo.dfsres[dfs_demo.curPos].curNode);
                clickednodeMinSelectT(dfs_demo.dfsresTictac[dfs_demo.curPos].curNode);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "maxSelect") {
                clickednodeMaxSelect(dfs_demo.dfsres[dfs_demo.curPos].curNode);
                clickednodeMaxSelectT(dfs_demo.dfsresTictac[dfs_demo.curPos].curNode);
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "nodeValDefineMax") {
                clickednodeLabelDef(dfs_demo.dfsres[dfs_demo.curPos].curNode, dfs_demo.dfsres[dfs_demo.curPos].nodeVal);
                clickednodeLabelDef(dfs_demo.dfsresTictac[dfs_demo.curPos].curNode, dfs_demo.dfsresTictac[dfs_demo.curPos].nodeVal);
                document.getElementById("ins").innerHTML = "<b>Since it was maximizer's turn<br>" + dfs_demo.dfsres[dfs_demo.curPos].nodeVal + ", which is max of child node values is picked</b>";
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "nodeValDefineMin") {
                clickednodeLabelDef(dfs_demo.dfsres[dfs_demo.curPos].curNode, dfs_demo.dfsres[dfs_demo.curPos].nodeVal);
                clickednodeLabelDef(dfs_demo.dfsresTictac[dfs_demo.curPos].curNode, dfs_demo.dfsresTictac[dfs_demo.curPos].nodeVal);
                document.getElementById("ins").innerHTML = "<b>Since it was minimizer's turn<br>" + dfs_demo.dfsres[dfs_demo.curPos].nodeVal + ", which is min of child node values is picked</b>";
            }
            else if (dfs_demo.dfsres[dfs_demo.curPos].type == "finalEdgeDisp") {
                clickededgeFinal(dfs_demo.dfsres[dfs_demo.curPos].edge_id);
                clickededgeFinal(dfs_demo.dfsresTictac[dfs_demo.curPos].edge_id);
                document.getElementById("ins").innerHTML = "<b>Green arrows highlight the decision taken in each turn</b>";
            }
        }
        dfs_demo.curPos++;
    }
    else{
        document.getElementById("ins").innerHTML = "<b>Green arrows highlight the decision taken in each turn</b>";        
        clickededgeFinal(12);
        clickededgeFinal(1112);
    }
}


function start() {
    if (dfs_demo.start == 0) {
        document.getElementById("ins").innerHTML = "<b>Minimax demo started on source state</b>";
        gTicTac.dfs(1, 1, true, 1);
        dfs_demo.dfsresTictac = gTicTac.dfsRes;
        g.dfs(11, 11, true, 11);
        dfs_demo.dfsres = g.dfsRes;
        document.getElementById("start").disabled = true;
        document.getElementById("pause").disabled = false;
        document.getElementById("New_graph").disabled = false;
        dfs_demo.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
    }
}

function pause() {
    if (dfs_demo.prevPos == -1) {
        dfs_demo.prevPos = document.getElementById("interval").value;
        if (dfs_demo.time != 0) {
            clearInterval(dfs_demo.time);
        }
        document.getElementById("pause").value = "Play";
    }
    else {
        dfs_demo.prevPos = -1;
        clearInterval(dfs_demo.time);
        dfs_demo.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
        document.getElementById("pause").value = "Pause";
    }
}

function change_interval() {
    if (dfs_demo.time != 0 && dfs_demo.prevPos == -1) {
        clearInterval(dfs_demo.time);
        dfs_demo.time = setInterval(clicking, 3000 - document.getElementById("interval").value);
    }
}

function handlers() {
    document.getElementById("New_graph").onclick = function () { regen(); };
    document.getElementById("start").onclick = function () { start(); };
    document.getElementById("pause").onclick = function () { pause(); };
};
