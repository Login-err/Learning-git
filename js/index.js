const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
let flag = true;
h2.onclick = function(e){
	if(flag){
		e.target.innerHTML = "I changed";
		flag = false;
	}else{
		e.target.innerHTML = "Git";
		flag = true;
	}
}
ul.onclick = function(e){
	alert("123");
	e.stopPropagation;
}