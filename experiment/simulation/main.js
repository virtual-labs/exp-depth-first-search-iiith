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
} preset();

var visit = [];
var visit_p = [undefined];
var e;
var c;
var ep;
var started = false;
var noEdges = false;

var nuxtdis = false;
var refreshIntervalId = null;

function DFS_Restart() {
    started = false;
    noEdges = false;
    c = undefined;
    document.getElementById("nuxt").disabled = false;
    nuxtdis = false;
    // clearInterval(refreshIntervalId);
    visited.push(e);

}

function DFS() {
    started=true;
    e = visit.pop();
    if (e == undefined) {
        DFS_Restart();
        return;
    }
    c = e;
    ep = visit_p.pop();
    visited.push(e);
    refresh();
    trav_circle(ep, e);  
    noEdges = true;  
    for (const next of edges[e].slice().reverse()) {
        if (!visited.includes(next) && !visit.includes(next) && !exist.includes(next)) {
            noEdges = false;  
            visit.push(next);
            visit_p.push(e);
        }
    }
}

function autoPlay() {
    if (document.getElementById('auto').checked && started) {
        oneshotAuto = false;
        nuxtdis = true;
        document.getElementById('nuxt').disabled = true;
        refreshIntervalId = setInterval(DFS, 1000);
    } else {
        document.getElementById('nuxt').disabled = false;
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

function getEase(currentProgress, start, distance, steps, power) {
  currentProgress /= steps/2;
  if (currentProgress < 1) {
    return (distance/2)*(Math.pow(currentProgress, power)) + start;
  } 
  currentProgress -= 2;
  return distance/2*(Math.pow(currentProgress,power)+2) + start;
}

function getX(x1, x2, cframes, tframes) {
  let distance = x2 - x1;
  let steps = tframes;
  let currentProgress = cframes;
  return getEase(currentProgress, x1, distance, steps, 3);
}

function getY(y1, y2, cframes, tframes) {
  let distance = y2 - y1;
  let steps = tframes;
  let currentProgress = cframes;
  return getEase(currentProgress, y1, distance, steps, 3);
}

function _trav_circle(params) {
    ctx.lineWidth = edgeD*2;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(getX(params.xFrom, params.xTo, params.frame, params.frames), getY(params.yFrom, params.yTo, params.frame, params.frames), nodeR * 2, 0, Math.PI * 2);
    ctx.stroke();

    if (params.frame < params.frames) {
        params.frame = params.frame + 1;
        window.requestAnimationFrame(_trav_circle.bind(null, params))
    } else {
        if (!nuxtdis) document.getElementById("nuxt").disabled = false;
    }
}

function trav_circle(e, m) {
  if (e == undefined) return;
  document.getElementById("nuxt").disabled = true;
  _trav_circle({
    frame: 0,
    frames: 100,
    xFrom: nodes[e][0],
    xTo: nodes[m][0],
    yFrom: nodes[e][1],
    yTo: nodes[m][1]
  });
}
