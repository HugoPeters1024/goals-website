//Get all the bars on the page
let bars = document.getElementsByClassName("bar-object")
for (let i=0; i<bars.length; i++) {
	let content = bars[i].getElementsByClassName("bar-content")[0];
	let text_element = bars[i].getElementsByClassName("bar-text")[0]
	if (content)
		text_element.classList.add("bar-shadow")
	
	bars[i].getElementsByClassName("bar-text")[0].addEventListener("click", () => { 
		//Get the content element from the children
		if (content) { //without content no expand at all
			if (!bars[i].activated) {
				bars[i].style="padding-bottom:20px";
				content.style="opacity:1;display:inherit"
				bars[i].activated = true;
			}
			else {
				bars[i].style="";
				content.style="";
				bars[i].activated = false;
			}
		}
	});
}
