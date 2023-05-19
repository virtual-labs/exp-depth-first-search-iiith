var visit = [];
var e;
var c;
var started = false;
var noEdges = false;

var nuxtdis = false;
var refreshIntervalId = null;

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
	var rand = Math.random();
    console.log(rand);
	if (rand < 0.2) { // chance = 2/10
		 isQuestion = true;
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
    e = visit.pop();
    c = e;
    if (!noEdges) visited.push(e);
    trav_circle(parent[e], e);  
	var rand = Math.random();
    console.log(rand);
	if (rand < 0.2) { // chance = 2/10
		 isQuestion = true;
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
