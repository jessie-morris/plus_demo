function openTab(evnt, tabName) {
	var tablinks = document.getElementsByClassName("tab-link");
	const tags = document.getElementsByClassName("active")
	const contents = document.getElementsByClassName("tab-content")

	for(let i = 0; i < contents.length; i++){
		contents[i].style = { display: "none" };
	}

	for(let activeTag of tags) {
		activeTag.className = activeTag.className.replace(' active', '')
	}

	document.getElementById(tabName).style.display = 'block';
	evnt.currentTarget.className += " active";
}
