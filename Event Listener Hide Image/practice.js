var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

function showImage () {
	var allImages = document.querySelectorAll("img");
	
	for (var i = 0; i < allImages.length; i++) {
		allImages[i].className = "hide";
	}
	
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	
	if(pic.className === "hide") {
			pic.className = "";
			} else {
				pic.className = "hide";
			}
}

simon.addEventListener("click", showImage);
bruce.addEventListener("click", showImage);
ben.addEventListener("click", showImage);