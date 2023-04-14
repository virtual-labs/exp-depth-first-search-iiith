var cwidth = canv.offsetWidth;
var cheight = canv.offsetHeight;

console.log(cwidth, cheight);

function preset() {
    type = false;
    nodes.push([1/2 * cwidth, 1/4 * cheight], [1/4 * cwidth, 1/2 * cheight], [3/4 * cwidth, 1/2 * cheight], [1/8 * cwidth, 3/4 * cheight], [3/8 * cwidth, 3/4 * cheight], [5/8 * cwidth, 3/4 * cheight], [7/8 * cwidth, 3/4 * cheight]);
    edges.push([1, 2], [0, 3, 4], [0, 5, 6], [1], [1], [2], [2]);
    for (n = 1; n <= nodes.length; n++) { 
        exist.push(true);
    }
}
function refresh() {
    canv.width = canv.offsetWidth;
    canv.height = canv.offsetHeight;
    if (type) {
        force();
    }
    drawField();
    var inp = document.getElementById("sv");
    inp.max = -1
    for (var i of exist) {
        if (i == true) {
            inp.max = Number(inp.max) + 1;
        }
    }
}

var visit = [];
var prev = null;
var prevprev = null;

function drawiter(e) {
    visiting = e;
    visiting_edge = [prev, e];
    visited.push(prev);
    visited_edge.push([prevprev, prev]);
    refresh();

    prevprev = prev;
    prev = visiting;
}

function DFS() {
    e = visit.pop();
    drawiter(e);

    for (const next of edges[e].slice().reverse()) {
        if (!visited.includes(next)) {
            visit.push(next);
        }
    }
}

function BFS() {
    e = visit.shift();
    drawiter(e);

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
refresh();
