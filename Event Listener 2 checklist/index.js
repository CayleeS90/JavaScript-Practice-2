// we want to access the ul with the id od "checklist"
var checklist = document.getElementById("checklist");
// this gives us access to the child elements within the ul "checklist"
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
/* this for loop will allow us to interact with all the list items and the elements within */
for (var i = 0; i < items.length; i++ ) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
	
}
// this will change the class which will then be in edit mode and add a focus box with highlighted value 
function editItem () {
	this.className = "edit"
	var input = this.querySelector("input")
	input.focus();
	input.setSelectionRange(0, input.value.length);
}
//this will take the value from input and put it into span on blur
function updateItem () {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}
// this will do the same as updateItem except on the "enter" keypress
function itemKeypress (event) {
	if (event.which === 13) {
		updateItem.call(this);
	}
}