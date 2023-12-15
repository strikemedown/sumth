window.addEventListener("load", START)

function START(){
	document.getElementById("btnsub").disabled=true
	document.getElementById("txtinp").addEventListener("keypress", ENABLE);
	document.getElementById("btnsub").addEventListener("click", FORLOOP);
}

function ENABLE(){
	document.getElementById("btnsub").disabled=false
}

function FORLOOP(){
	var inp= document.getElementById("txtinp").value;
	document.getElementById("lblres").textContent= ""
	document.getElementById("lblres").textContent+=inp
	switch(true){
		case inp<6:
			alert("number is less than 6");
			break;
		case inp>20:
			alert("number is greater than 20");
			break;
		case inp%1!=0:
			alert("number is a decimal")
			break;
		default:
			for(let i=1; i<5; i=i+1){
				inp= inp*2
				document.getElementById("lblres").textContent+= ", " + inp + " even"
				
			}
			break;
	}
}