var visit = [];
var edges_weight = [];

var e;
var c;
var started = false;
var noEdges = false;

var nuxtdis = false;
var refreshIntervalId = null;

var NoQuestion = true

function ALG_STOP() {
    console.log("ALG_STOP");
    started = false;
    noEdges = false;
    e = undefined;
    c = undefined;
    document.getElementById("nuxt").disabled = false;
    nuxtdis = false;
    clearInterval(refreshIntervalId);
}

function DFS() {
    started=true;
	if (isQuestion) { return; }
    if (noEdges) {
        if (e == SN) {
            ALG_STOP();
            return;
        }
        visited.push(e);
        trav_circle(e, parent[e]);
        c = parent[e];
        e = parent[e];
        for (const next of edges[e].slice().reverse()) {
            if (!visited.includes(next) && !exist.includes(next)) {
                noEdges = false;
            }
        }
        return;
    }
    e = visit.pop();
    c = e;
    if (!noEdges) visited.push(e);
    trav_circle(parent[e], e);  
	if (!NoQuestion && rand < 0.2) { // chance = 2/10
		 isQuestion = true;
		var rand = Math.random();
		console.log(rand);
	}
    noEdges = true;  
    for (const next of edges[e].slice().reverse()) {
        if (!visited.includes(next) && !visit.includes(next) && exist[next]) {
            noEdges = false;  
            visit.push(next);
            parent[next] = e;
        }
    }
}

function BEFS() {
    started=true;
	if (isQuestion) { return; }
    if (noEdges) {
        if (e == SN) {
            ALG_STOP();
            return;
        }
        visited.push(e);
        trav_circle(e, parent[e]);
        c = parent[e];
        e = parent[e];
        for (const next of edges[e].slice().reverse()) {
            if (!visited.includes(next) && !exist.includes(next)) {
                noEdges = false;
            }
        }
        return;
    }
    e = visit.shift();
    c = e;
    if (!noEdges) visited.push(e);
    trav_circle(parent[e], e);  
	if (!NoQuestion && rand < 0.2) { // chance = 2/10
		var rand = Math.random();
		console.log(rand);
		 isQuestion = true;
	}
    noEdges = true;
    tmp = [];
    tmp_w = [];
    for (const next of edges[e].slice()) {
        if (!visited.includes(next) && !visit.includes(next) && exist[next]) {
            noEdges = false;
			tmp.push(next);
			tmp_w.push(edges_weight[e][edges[e].slice().indexOf(next)]);
			parent[next] = e;
        }
    }

    for (let i = 0; i < tmp.length; i++) {
        for (let j = 0; j < tmp.length - i - 1; j++) {	
            if (tmp_w[j + 1] < tmp_w[j]) {
                [tmp_w[j + 1], tmp_w[j]] = [tmp_w[j], tmp_w[j + 1]];
                [tmp[j + 1], tmp[j]] = [tmp[j], tmp[j + 1]];
            }
        }
    }

	console.log(tmp);
	console.log(tmp_w);
	console.log(visit);
	visit.push(...tmp);
	console.log(visit);
}
