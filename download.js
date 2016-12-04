// Where I'm going to execute the download function
document.getElementById("download_music").addEventListener("click", getObjects);

function getObjects() {
	var song = getAudioPlayer()._currentAudio[2];
	
	saveAs(song);
}

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