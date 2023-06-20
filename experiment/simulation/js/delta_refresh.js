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
	if (canv.width != canv.offsetWidth || canv.height != canv.offsetHeight) {
		canv.width = canv.offsetWidth;
		canv.height = canv.offsetHeight;
		preset();
	}

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

	document.getElementById('visit_array').innerHTML = '[' + String(visit.slice()) + ']';
    document.getElementById('visit_node').innerHTML = String(e);
    document.getElementById('visiting_node').innerHTML = String(visit[0]);
    // document.getElementById('visited_array').innerHTML = '[' + String(visited.slice(0, visited.length-1)) + ']';
    // console.log(visit);
    
    if (document.getElementById('auto').checked) {
        if (started) {
            nuxtdis = true;
            document.getElementById('nuxt').disabled = true;
            if (oneshotAuto) {
                oneshotAuto = false;
                refreshIntervalId = setInterval(DFS, 1000*input.value)
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
    
    if (isQuestion || isObservation) {
		document.getElementById('QuestionBox').style.display = "";
	} else {
		document.getElementById('QuestionBox').style.display = "none";
	}
	
	if (isObservation) {
		document.getElementById('qoro').innerHTML = "Observation";
		document.getElementById('submitform').style.display = "none";
	} else {
		document.getElementById('qoro').innerHTML = "Question";
		document.getElementById('submitform').style.display = "";
	}

	const mq = window.matchMedia( "(max-width: 1282px)" );

	if (mq.matches) {
		document.getElementById('control_container').classList.add('is-3-desktop');
		document.getElementById('control_container').classList.remove('is-2-desktop');
		document.getElementById('canvas_container').classList.add('is-6-desktop');
		document.getElementById('canvas_container').classList.remove('is-8-desktop');
		document.getElementById('info_container').classList.add('is-3-desktop');
		document.getElementById('info_container').classList.remove('is-2-desktop');
	} else {
		document.getElementById('control_container').classList.remove('is-3-desktop');
		document.getElementById('control_container').classList.add('is-2-desktop');
		document.getElementById('canvas_container').classList.remove('is-6-desktop');
		document.getElementById('canvas_container').classList.add('is-8-desktop');
		document.getElementById('info_container').classList.remove('is-3-desktop');
		document.getElementById('info_container').classList.add('is-2-desktop');
	}
}

setInterval(refresh, 30);
