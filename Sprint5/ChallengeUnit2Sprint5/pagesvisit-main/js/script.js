const spanContador = document.getElementById('contadorVisitas');
const btn = document.getElementById('btnReestablecer'); 

function increasePage(){
	let counter = localStorage.getItem("countVisit");

	//localStorage.setItem("countVisit", counter ? parseInt(counter) + 1 : 1);

		if (counter===null){
			counter = 0 ;
		} else {
			counter = parseInt (counter);
		}
		counter ++; 
		localStorage.setItem("countVisit", counter.toString());
		return counter;
		}

	window.addEventListener("load", function(){
	let visitCount = increasePage();
	spanContador.textContent = visitCount; 
});

function restoreCounter (){
	btn.addEventListener("click", (e)=>{
		localStorage.clear();
		spanContador.textContent = 0;
	})};

restoreCounter()