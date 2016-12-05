// Listen for user click on download button
document.getElementById("download_music").addEventListener("click", getObjects);

// Stores song file url and downloads file
function getObjects() {
	var song = getAudioPlayer()._currentAudio[2];
	
	saveAs(song);
}

// Creates and simulates link click
function saveAs(uri) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.setAttribute('download', true);

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}