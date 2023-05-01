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
    refresh();
}

var visit = [];
var e;

function DFS() {
    e = visit.pop();
    visited.push(e);
    refresh();

    for (const next of edges[e].slice().reverse()) {
        if (!visited.includes(next) && !exist.includes(next)) {
            visit.push(next);
        }
    }
}

function BFS() {
    e = visit.shift();
    visited.push(e);
    refresh();

    for (const next of edges[e]) {
        if (!visited.includes(next)) {
            visit.push(next);
        }
    }
}

var node_info;
var edge_info;
var status;

//preset();
