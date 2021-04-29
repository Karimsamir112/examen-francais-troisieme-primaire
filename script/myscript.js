function playagain() {
	
	window.location.href="examen.html";
	}
	
		
		
		
	
	
	
	
	function quest(id10 , id20 ) {
		
		document.getElementById(id10).style.display="block";
		document.getElementById(id20).style.display="none";
	
	}
	
	
	
	
	
	
	
	//document.getElementById("submit").addEventListener("click" , score);
		
		
		
		
		
		
		// r4 && r20 && r100 && r3000 && r10000 are the right answers
		

			
	function score() {
			
        var win1 = document.getElementById("a4");
		var win2 = document.getElementById("a20");
		var win3 = document.getElementById("a100");
		var win4 = document.getElementById("a3000");
		var win5 = document.getElementById("a10000");
		
		var win6 = document.getElementById("b3");
		var win7 = document.getElementById("b20");
		var win8 = document.getElementById("b200");
		var win9 = document.getElementById("b1000");
		var win10 = document.getElementById("b40000");

        var win11 = document.getElementById("c1");
		var win12 = document.getElementById("c30");
		var win13 = document.getElementById("c200");
		var win14 = document.getElementById("c4000");
		var win15 = document.getElementById("c10000");

        var win16 = document.getElementById("d44");
		var win17 = document.getElementById("d30");
		var win18 = document.getElementById("d100");
		var win19 = document.getElementById("d4000");
		var win20 = document.getElementById("d20000");
	
		// label 
		var winn1 = document.querySelector(".a4");
		var winn2 = document.querySelector(".a20");
		var winn3 = document.querySelector(".a100");
		var winn4 = document.querySelector(".a3000");
		var winn5 = document.querySelector(".a10000");
		
		var winn6 = document.querySelector(".b3");
		var winn7 = document.querySelector(".b20");
		var winn8 = document.querySelector(".b200");
		var winn9 = document.querySelector(".b1000");
		var winn10 = document.querySelector(".b40000");

        var winn11 = document.querySelector(".c1");
		var winn12 = document.querySelector(".c30");
		var winn13 = document.querySelector(".c200");
		var winn14 = document.querySelector(".c4000");
		var winn15 = document.querySelector(".c10000");

        var winn16 = document.querySelector(".d44");
		var winn17 = document.querySelector(".d30");
		var winn18 = document.querySelector(".d100");
		var winn19 = document.querySelector(".d4000");
		var winn20 = document.querySelector(".d20000"); 

		
		
		
			
			
			//window.again.style.display="block";
			//window.back2.style.display="none";
			var but = document.querySelector(".sco");
		window.submit.style.display="none";
					
			var scoo = [0];
		
			
			if(win1.checked){
				
				but.innerHTML="score:" + scoo[0]++ + "/20";
				winn1.style.backgroundColor="green";
			}
			
			 if(win2.checked){  
			
				 
				but.innerHTML="score:" + scoo[0]++ + "/20";
				winn2.style.backgroundColor="green";
			}
			
			 if(win3.checked){
				
				
				but.innerHTML="score:" + scoo[0]++ + "/20";
				winn3.style.backgroundColor="green";
			}
			
			 if(win4.checked){
				 
				 
				
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
				 winn4.style.backgroundColor="green";
			}
			
			 if(win5.checked){
				 
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
			 winn5.style.backgroundColor="green";
			} 
		
		
		
	
		
		 if(win6.checked){
				
			
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn6.style.backgroundColor="green";
			}
			
			 if(win7.checked){  
			
				 
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn7.style.backgroundColor="green";
			}
			
			 if(win8.checked){
				
				
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn8.style.backgroundColor="green";
			}
			
			 if(win9.checked){
				 
				
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
				winn9.style.backgroundColor="green";
			}
			
			 if(win10.checked){
				 
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
			    winn10.style.backgroundColor="green";
			} 
		
		

		
		 if(win11.checked){
				
			
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn11.style.backgroundColor="green";
			}
			
			 if(win12.checked){  
			
				 
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn12.style.backgroundColor="green";
			}
			
			 if(win13.checked){
				
				
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn13.style.backgroundColor="green";
			}
			
			if(win14.checked){
				 
				 
				
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
				winn14.style.backgroundColor="green";
			}
			
			 if(win15.checked){
				 
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
				winn15.style.backgroundColor="green";
			} 
		
		
		
		
		
		 if(win16.checked){
				
			
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn16.style.backgroundColor="green";
			}
			
			 if(win17.checked){  
			
				 
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn17.style.backgroundColor="green";
			}
			
		  if(win18.checked){
				
				
				but.innerHTML="score:" + scoo[0]++ + "/20" ;
				winn18.style.backgroundColor="green";
			}
			
			 if(win19.checked){
				 
				 
				
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
				winn19.style.backgroundColor="green";
			}
			
		  if(win20.checked){
				 
				but.innerHTML="score:" + scoo[0]++  + "/20" ;
				winn20.style.backgroundColor="green";
			} 
		 
		
		but.innerHTML="score:" + scoo[0] + "/20";
			
		}
		
	