//
// Add download icon
//

// Creating and storing icon image
var imgURL = chrome.extension.getURL("images/icon.png");
var html = "<image src='" + imgURL + "'></image>"

//Create and find elements... ugly, I know
var dl = '<button id="download_music" class="audio_page_player_btn">' + html + '</button>';
var btns = document.getElementsByClassName("audio_page_player_btns")[0];

// Finally, append element
btns.insertAdjacentHTML('beforeend', dl);