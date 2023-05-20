var visit = [];
var edges_weight = [];
var weight = [];

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
    weight.shift();
    c = e;
    if (!noEdges) visited.push(e);
    trav_circle(parent[e], e);  
	if (!NoQuestion && rand < 0.2) { // chance = 2/10
		var rand = Math.random();
		console.log(rand);
		 isQuestion = true;
	}
    noEdges = true;
    for (const next of edges[e].slice()) {
        if (!visited.includes(next) && !visit.includes(next) && exist[next]) {
            noEdges = false;
			visit.push(next);
			weight.push(edges_weight[e][edges[e].slice().indexOf(next)]);
			parent[next] = e;
        }
    }

    for (let i = 0; i < weight.length; i++) {
        for (let j = 0; j < weight.length - i - 1; j++) {	
            if (weight[j + 1] < weight[j]) {
                [visit[j + 1], visit[j]] = [visit[j], visit[j + 1]];
                [weight[j + 1], weight[j]] = [weight[j], weight[j + 1]];
            }
        }
    }
}
