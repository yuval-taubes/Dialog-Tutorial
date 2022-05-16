let button = document.getElementById("button");
let button2 = document.getElementById('button2')

	button.addEventListener("click", function () {
		document.querySelector("#modal-dialog").showModal();
	});
    
	button2.addEventListener("click", function () {
		document.querySelector("#modal-dialog").close();
	});
    
    

