var visit = [];
var edges_weight = [];
var weight = [];

var e;
var c;
var started = false;
var noEdges = false;

var nuxtdis = false;
var refreshIntervalId = null;

var isObservation = false; 

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
        if (typeof edges[e] != 'undefined') {
        for (const next of edges[e].slice()) {
            if (!visited.includes(next) && exist[next] && parent[next] == e) {
                noEdges = false;
                console.log(next);
            }
        }
        console.log('end: ', e);
        } else {
            started = false;
        }
        return;
    }
    e = visit.shift();
    c = e;
    if (!noEdges) visited.push(e);
    trav_circle(parent[e], e);
	if (!NoQuestion && visit.length != 0) { // chance = 2/10
		var rand = Math.random();
		console.log(rand);
		if (rand < chance) {
			isQuestion = true;
			question();
		}
	}
    noEdges = true;  
    if (typeof edges[e] != 'undefined') {
        console.log(typeof edges[e]);
        for (const next of edges[e].slice().reverse()) {
            if (!visited.includes(next) && !visit.includes(next) && exist[next]) {
                //if (visit.includes(next)) visit.splice(visit.indexOf(next), 1);
                //console.log('next: ', next);
                noEdges = false;  
                visit.unshift(next);
                parent[next] = e;
            }
        }
    } else {
        started = false;
    }
}
