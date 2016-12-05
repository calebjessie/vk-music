//
// Add download icon
//

// Create the button
if(!document.getElementById('download_music')) {

	// Creating and storing icon image
	var imgURL = chrome.extension.getURL("images/icon.png");
	var html = "<image src='" + imgURL + "'></image>"

	//Create and find elements... ugly, I know
	var dl = '<button download id="download_music" class="audio_page_player_btn">' + html + '</button>';
	var btns = document.getElementsByClassName("audio_page_player_btns")[0];

	// Finally, append element
	btns.insertAdjacentHTML('beforeend', dl);

	// Create script for download.js and inject into page
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('download.js');
	s.onload = function() {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
}