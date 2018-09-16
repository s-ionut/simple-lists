var title = prompt("Insert your list title: ");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

addTitle();

function addTitle(){
	document.querySelector("h1").textContent = title;
}


function inputLength(){
	return input.value.length;
}

function checkUncheck(){
	li = document.querySelectorAll("li");
	for(var i=0; i < li.length; i++)
		li[i].addEventListener("click", toggleDoneClass);
}

function toggleDoneClass(){
	this.classList.toggle("done");

}

function addToList(){
	if(inputLength() > 0){
		var list = document.createElement("li");
		list.appendChild(document.createTextNode(input.value));
		ul.appendChild(list);
		input.value = "";
		checkUncheck();

		var button = document.createElement("button");
		button.appendChild(document.createTextNode("Delete"));
		list.appendChild(button);
		button.onclick = removeParent;
	}
}

function removeParent(event) {
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}

button.addEventListener("click", addToList);
input.addEventListener("keypress", function(event){
	if(inputLength() > 0 && event.keyCode===13){
		addToList();
	}
});
