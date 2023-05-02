var cwidth = canv.offsetWidth;
var cheight = canv.offsetHeight;

console.log(cwidth, cheight);

function preset() {
    cwidth = canv.offsetWidth;
    cheight = canv.offsetHeight;
    var trd = Number(document.getElementById("tdi").value);
    var brf = Number(document.getElementById("bfi").value);
    clear();
    nodes = [];
    edges = [];
    exist = [];
    n = 0;
    maxb = 1;
    vclear();
    type = false;
    for (i = 1; i <= trd; i++) {
        for (j = 1; j < Math.pow(2, i); j = j+2) {
            nodes.push([(j/Math.pow(2, i))*cwidth, (i/(trd+1))*cheight]);
            if (nodes.length-1 == 0) {
                edges.push([((2*nodes.length)-1), (2*nodes.length)]);
            } else if (nodes.length-1 >= Math.pow(2, trd-1) - 1) {
                edges.push([Math.floor((nodes.length-2)/2)]);
            } else {
                edges.push([Math.floor((nodes.length-2)/2), ((2*nodes.length)-1), (2*nodes.length)]);
            }
        }
    }
    // nodes.push([1/2 * cwidth, 1/4 * cheight], [1/4 * cwidth, 1/2 * cheight], [3/4 * cwidth, 1/2 * cheight], [1/8 * cwidth, 3/4 * cheight], [3/8 * cwidth, 3/4 * cheight], [5/8 * cwidth, 3/4 * cheight], [7/8 * cwidth, 3/4 * cheight]);
    // edges.push([1, 2], [0, 3, 4], [0, 5, 6], [1], [1], [2], [2]);
    for (n = 1; n <= nodes.length; n++) { 
        exist.push(true);
    }
    refresh();
}

var visit = [];
var e;

function DFS() {
    e = visit.pop();
    visited.push(e);
    refresh();

    // console.log(e);
    if (e == undefined) return;
    
    for (const next of edges[e].slice().reverse()) {
        if (!visited.includes(next) && !visit.includes(next) && !exist.includes(next)) {
            visit.push(next);
        }
    }
}

function BFS() {
    e = visit.shift();
    visited.push(e);
    refresh();

    console.log(e);
    for (const next of edges[e]) {
        if (!visited.includes(next)) {
            visit.push(next);
        }
    }
}

var node_info;
var edge_info;
var status;

preset();
