window.addEventListener("load", START)

function START(){
	document.getElementById("sub").addEventListener("click", FORLOOP)
}

function FORLOOP(){
	var inp= document.getElementById("inp").value;
	document.getElementById("res").textContent= ""
	document.getElementById("res").textContent+=inp
	for (let i=1; i<5; i=i+1){
		inp= inp*2
		document.getElementById("res").textContent+= ", " + inp
	}
}