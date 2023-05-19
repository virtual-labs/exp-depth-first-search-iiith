const nodeR = 10;
const edgeD = 1;
const INF = 1E9;

var canv = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const input = document.getElementById('autor');

var cur = -1;
var last = -1;
var type = true;
var d = [];
var maxb = 1;

var edges = [];
var nodes = [];
var parent = [];
var exist = [];

var visited = [];
var visited_edge = [];

var n = 0;
var SN = 0;

document.oncontextmenu = false;
canv.width = canv.offsetWidth;
canv.height = canv.offsetHeight;
ctx.font = "20px Arial";

function valid_input(l, inp) {
    if(inp.value == "") {
        return;
    } else if(inp.value > Number(inp.max) || inp.value < Number(inp.min) || parseFloat(inp.value) % 1 != 0 || !exist[Number(inp.value)]) {
        l.style.color = "red";
    } else {
        l.style.color = "";
    }
}

var oneshotAuto = true;

function refresh() {
    canv.width = canv.offsetWidth;
    canv.height = canv.offsetHeight;

    if (type) {
        force();
    }
    drawField();

    var inp = document.getElementById("svi");
    inp.max = exist.length-1;
    valid_input(document.getElementById("sv"), inp);
    valid_input(document.getElementById("bf"), document.getElementById("bfi"));
    valid_input(document.getElementById("td"), document.getElementById("tdi"));
    
    document.getElementById("bf").style.color = "gray";
    document.getElementById("td").style.color = "gray";
    document.getElementById("bf").style.color = "";
    document.getElementById("td").style.color = "";

    // document.getElementById('visit_node').innerHTML = String(e);
    document.getElementById('visit_array').innerHTML = '[' + String(visit.slice().reverse()) + ']';
    // document.getElementById('visiting_node').innerHTML = String(visit[visit.length - 1]);
    // document.getElementById('visited_array').innerHTML = '[' + String(visited.slice(0, visited.length-1)) + ']';
    // console.log(visit);
    
    if (document.getElementById('auto').checked) {
        if (started) {
            nuxtdis = true;
            document.getElementById('nuxt').disabled = true;
            if (oneshotAuto) {
                oneshotAuto = false;
                refreshIntervalId = setInterval(DFS, 1000*input.value);
            }
        } else {
            document.getElementById('nuxt').disabled = false;
        }
    } else if (refreshIntervalId != null) {
        clearInterval(refreshIntervalId);
        nuxtdis = false;
        document.getElementById('nuxt').disabled = false;
        oneshotAuto = true;
    }
}

setInterval(refresh, 30);

canv.addEventListener('contextmenu', function(e) {
    //console.log("contextmenu");
    var v = node(e.offsetX, e.offsetY);
    if (v != -1) {
        vclear();
        exist[v] = false;
    }
});

canv.addEventListener('click', function(e) {
    //console.log("click");
    if (cur != -1) {
        return;
    }
    var
        x = e.offsetX;
        y = e.offsetY;
        v = node(x, y);
    if (v == -1) {
        nodes.push([x, y]);
        edges.push([]);
        exist.push(true);
        if (exist[last] && last != -1) {
            if (edges[last].indexOf(n - 1))
            edges[last].push(n - 1);
            edges[n - 1].push(last);
            last = -1;
        }
		n++;
    } else {
        if (!exist[last] || last == -1) {
            last = v;
        } else {
            if (edges[last].indexOf(v) == -1) {
                edges[last].push(v);
                edges[v].push(last);
            } else {
                edges[last].splice(edges[last].indexOf(v), 1);
                edges[v].splice(edges[v].indexOf(last), 1);
            }
            last = -1;
        }
    }
    //console.log(nodes, edges, exist);
});

canv.addEventListener('mousedown', function(e) {
    //console.log("mousedown");
    var v = node(e.offsetX,  e.offsetY);
    if (v != -1) {
        cur = v;
    }
});

canv.addEventListener('mouseup', function(e) {
    //console.log("mouseup");
    cur = -1;
});

canv.addEventListener('mousemove', function(e) {
    //console.log("mousemove");
    if (cur != -1) {
        nodes[cur] = [e.offsetX, e.offsetY];
    }
});

canv.addEventListener('dblclick', function(e) {});

document.addEventListener('keydown', function(e) {
    //console.log("keydown ", e.keyCode);
    if (e.keyCode == 66) {
        tforce();
    } else if (e.keyCode == 67) {
        cclear();
    }
});

function tforce() {
    type = !type;
    console.log('force: ', type);
}

function clear() {
    ctx.beginPath();
    ctx.fillStyle = '#f2f2f0';
    ctx.fillRect(0, 0, canv.width, canv.height);
}

function vclear() {
    c = undefined;
    e = undefined;
    ep = undefined;
    visit = [];
    parent = [];
    visited = [];
    visited_edge = [];
    started = false;
    noEdges = false;
    oneshotAuto = true;
    console.log("clear");
}

function cclear() {
    clear();
    nodes = [];
    edges = [];
    exist = [];
    n = 0;
    maxb = 1;
    vclear();
}

function drawField() {
    clear();
    for (var i = 0; i < edges.length; ++i) {
        if (exist[i]) {
            for (var j = 0; j < edges[i].length; ++j) {
                if (exist[edges[i][j]] && i < edges[i][j]) {
                    ctx.lineWidth = edgeD;
					/*
                    if (i == c) {
                        ctx.lineWidth = edgeD*2;                   
                    }
                    */
                    ctx.strokeStyle = 'gray';
                    /*
                    if (visiting_edge[0] == i && visiting_edge[1] == edges[i][j]) {
                        ctx.strokeStyle = 'orange';
                    }
                    for (var k = 0; k < visited_edge.length; k++) {
                        if (visited_edge[k][0] == i && visited_edge[k][1] == edges[i][j]) {
                            //console.log(visited_edge);
                            ctx.strokeStyle = 'black';
                            break;
                        }
                    }
                    */
                    ctx.beginPath();
                    ctx.moveTo(nodes[i][0], nodes[i][1]);
                    ctx.lineTo(nodes[edges[i][j]][0], nodes[edges[i][j]][1]);
                    ctx.stroke();
                }
            }
        }
    }
    for (var i = 0; i < n; ++i) {
        if (exist[i]) {
            ctx.fillStyle = '#97d23d';
            for (var k = 0; k < visited.length -1; k++) {
                if (visited[k] == i) {
                    ctx.fillStyle = 'black';
                    break;
                }
            }
            for (var k = 0; k < visit.length; k++) {
                if (visit[k] == i) {
                    ctx.fillStyle = 'orange';
                }
            }
            if (i == last) {
                ctx.fillStyle = 'gray';
            }
			/* 
            if (i == visit[visit.length - 1]) {
                ctx.fillStyle = 'yellow';
            }
            */
            if (i == c && !visited.slice(0, visited.length - 1).includes(c)) {
                ctx.fillStyle = 'orange';
            }
            ctx.beginPath();
            ctx.arc(nodes[i][0], nodes[i][1], nodeR * (1 + (i == last)), 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'gray';
            for (var k = 0; k < visited.length -1; k++) {
                if (visited[k] == i) {
                    ctx.fillStyle = 'white';
                    break;
                }
            }
            if (e == undefined && started) {
                ctx.fillStyle = 'white';            
            }
            ctx.fillText(i,nodes[i][0] - nodeR/4 - (nodeR/4*(i >= 10)),nodes[i][1] + nodeR/4);

            if (i == c) {
                ctx.strokeStyle = 'black';
                ctx.lineWidth = edgeD*2;                    
            } else {
                ctx.strokeStyle = 'gray';
                ctx.lineWidth = edgeD;                    
            }
            ctx.beginPath();
            ctx.arc(nodes[i][0], nodes[i][1], nodeR * 2, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
}

function node(x, y) {
    for (var i = 0; i < n; i++) {
        if (exist[i]) {
            var dx = nodes[i][0] - x;
            var dy = nodes[i][1] - y;
            var len = Math.sqrt(dx * dx + dy * dy);
            if (len < nodeR * 3) {
                return i;
            }
        }
    }
    return -1;
}

function bfs(s) {
    var 
        q = [],
        beg = 0;
        used = [];
    for (var i = 0; i < n; ++i) {
        used.push(false);
    }
    q.push(s);
    used[s] = true;
    d[s][s] = 0;
    while (beg != q.length) {
        var v = q[beg];
        beg++;
        for (var j = 0; j < edges[v].length; ++j) {
            var u = edges[v][j];
            if (exist[u] && !used[u]) {
                used[u] = true;
                q.push(u);
                d[s][u] = d[s][v] + 1;
                maxb = Math.max(maxb, d[s][u]);
            }
        }
    }
}

function rib() {
    return Math.min(canv.width, canv.height) / (maxb + 1);
}

function f(v, u) {
    var
        dx = nodes[v][0] - nodes[u][0],
        dy = nodes[v][1] - nodes[u][1],
        len = Math.sqrt(dx * dx + dy * dy);
    return [(dx / len * d[v][u] * rib() - dx) / 30,
            (dy / len * d[v][u] * rib() - dy) / 30];
}

function force() {
    d = [];
    maxb = 0;
    for (var i = 0; i < n; ++i) {
        d.push([]);
        for (var j = 0; j < n; ++j) {
            d[i].push(INF);
        }
        if (exist[i]) {
            bfs(i);
        }
    }
    for (var i = 0; i < n; ++i) {
        if (exist[i]) {
            for (var j = 0; j < n; ++j) {
                if (exist[j] && i != j && d[i][j] != INF && i != cur) {
                    var delta = f(i, j);
                    nodes[i][0] += delta[0];
                    nodes[i][1] += delta[1];
                }
            }
        }
    }
    var 
        mxx = -INF,
        mxy = -INF,
        mnx = INF,
        mny = INF;
    for (var i = 0; i < n; ++i) {
        if (i != cur && exist[i]) {
            mxx = Math.max(mxx, nodes[i][0]);
            mxy = Math.max(mxy, nodes[i][1]);
            mnx = Math.min(mnx, nodes[i][0]);
            mny = Math.min(mny, nodes[i][1]);
        }
    }
    for (var i = 0; i < n; ++i) {
        if (i != cur && exist[i]) {
            nodes[i][0] += (canv.width / 2 - (mxx + mnx) / 2) / 30;
            nodes[i][1] += (canv.height / 2 - (mxy + mny) / 2) / 30;
        }
    }
}
