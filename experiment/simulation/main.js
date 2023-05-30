var visit = [];
var edges_weight = [];
var weight = [];

var e;
var c;
var started = false;
var noEdges = false;

var nuxtdis = false;
var refreshIntervalId = null;

var EndVect = null;

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
        for (const next of edges[e].slice()) {
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
	if (!NoQuestion && visit.length != 0) { // chance = 2/10
		var rand = Math.random();
		console.log(rand);
		if (rand < chance) {
			isQuestion = true;
			question();
		}
	}
    noEdges = true;  
    for (const next of edges[e].slice().reverse()) {
        if (!visited.includes(next) && !visit.includes(next) && exist[next]) {
            noEdges = false;  
            visit.unshift(next);
            parent[next] = e;
        }
    }
}

var isGoal = false;
function BEFS() {
	if (isQuestion) { return; }
    e = visit.shift();
    weight.shift();
    trav_circle(c, e);
    c = e;
    visited.push(e);
    if (e == EndVect) {
		isGoal = true;
		document.getElementById('question').innerHTML = "Found Goal!";
		ALG_STOP();
		return;
	}
	if (visit.length == 0 && started) {
		ALG_STOP();
		isGoal = true;
		document.getElementById('question').innerHTML = "Didn't Find Goal";
		return;
	}
    started=true;
	if (!NoQuestion) { // chance = 2/10
		var rand = Math.random();
		console.log(rand);
		if (rand < chance) {
			isQuestion = true;
			question();
		}
	}
    for (const next of edges[e].slice()) {
        if (!visited.includes(next) && !visit.includes(next) && exist[next]) {
			visit.push(next);
			weight.push(edges_weight[e][edges[e].slice().indexOf(next)]);
        }
    }

    for (let i = 0; i < weight.length; i++) {
        for (let j = 0; j < weight.length - i - 1; j++) {	
            if (weight[j + 1] < weight[j]) {
                [visit[j + 1], visit[j]] = [visit[j], visit[j + 1]];
				//console.log("nobutwhybutafterinbefs: ", visit);
                [weight[j + 1], weight[j]] = [weight[j], weight[j + 1]];
            }
        }
    }
}
