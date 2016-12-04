// Where I'm going to execute the download function
document.getElementById("download_music").addEventListener("click", getObjects);

function getObjects() {
	var audioObjects = getAudioPlayer()._currentAudio[2];
}