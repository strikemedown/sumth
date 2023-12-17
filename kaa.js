window.addEventListener("load", START);

function START(){
	document.getElementById("btnsub").disabled=true;
	document.getElementById("txtnum").addEventListener("keypress", ENABLE);
	document.getElementById("btnsub").addEventListener("click", FORLOOP);
}

function ENABLE(){
	document.getElementById("btnsub").disabled=false;
}

function FORLOOP(){
	var dis=document.getElementById("txtnum").value
	if (dis==""){
		document.getElementById("btnsub").disabled=true;
	}
	else{
		var inp=document.getElementById("txtnum").value;
		document.getElementById("lblres").textContent="";
//switch(true) checks for conditions (case conditions: inp<6, inp>20 and so on) that are true.
//if found will do the alert in them. if not found will go to default 
//basically meaning that the user inputted the number correctly (6-20)
//how found: alerted the condition in the part 2 assignment and got back true or false. 
//made more sense to use true:
//	switch(true){							
//		case inp<6:			
//			alert("number is less than 6"); 
//			break;
//		case inp>20:
//			alert("number is greater than 20");
//			break;
//		case inp%1!=0:
//			alert("number is a decimal")
//			break;
//		default:
//			document.getElementById("lblres").textContent= inp
//				if (inp%2==0){
//						document.getElementById("lblres").textContent+= " even";
//					}
//					else{
//						document.getElementById("lblres").textContent+= " odd";
//						}
//			for(let i=1; i<5; i=i+1){
//				inp=inp*2;
//				switch(true){
//					case inp%2==0:
//						document.getElementById("lblres").textContent+= ", "+ inp + " even";
//						break;
//					case inp%2==1:
//						document.getElementById("lblres").textContent+= ", " + inp + " odd";
//						break;
//					}
//			}
//			break;
//		} 
// how you desire us to do it:
		switch(inp){		
			case "6":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "7":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "8":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "9":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "10":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "11":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "12":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "13":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "14":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "15":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "16":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "17":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "18":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "19":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			case "20":
				document.getElementById("lblres").textContent= inp
				if (inp%2==0){
						document.getElementById("lblres").textContent+= " even";
					}
					else{
						document.getElementById("lblres").textContent+= " odd";
						}
				for(let i=1; i<5; i=i+1){
					inp=inp*2;
					if (inp%2==0){
						document.getElementById("lblres").textContent+= ", " + inp + " even";
					}
					else{
						document.getElementById("lblres").textContent+= ", " + inp + " odd";
						}
				}
				break;
			default:
				alert("number is a isn't an integer, less than 6, or greater than 20");			
				break;
		} //ends switch(inp)
	} //ends else from if(dis=="")
}
