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
var isDFS = true;

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
    //valid_input(document.getElementById("bf"), document.getElementById("bfi"));
    valid_input(document.getElementById("td"), document.getElementById("tdi"));
    
    //document.getElementById("bf").style.color = "gray";
    document.getElementById("td").style.color = "gray";
    //document.getElementById("bf").style.color = "";
    document.getElementById("td").style.color = "";

    // document.getElementById('visit_node').innerHTML = String(e);
	document.getElementById('visit_array').innerHTML = '[' + String(visit.slice()) + ']'
    // document.getElementById('visiting_node').innerHTML = String(visit[visit.length - 1]);
    // document.getElementById('visited_array').innerHTML = '[' + String(visited.slice(0, visited.length-1)) + ']';
    // console.log(visit);
    
    if (document.getElementById('auto').checked) {
        if (started) {
            nuxtdis = true;
            document.getElementById('nuxt').disabled = true;
            if (oneshotAuto) {
                oneshotAuto = false;
                if (isDFS) {
					refreshIntervalId = setInterval(DFS, 1000*input.value)
                } else {
					refreshIntervalId = setInterval(BEFS, 1000*input.value)
				}
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
    
    if (isQuestion) {
		document.getElementById('QuestionBox').style.display = "";
	} else {
		document.getElementById('QuestionBox').style.display = "none";
	}
}

setInterval(refresh, 30);
