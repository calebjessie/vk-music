// Execute scripts

chrome.tabs.onUpdated.addListener (
	function(tabID, changeInfo, tab) {
		if ( changeInfo.status === "complete" ) {
			chrome.tabs.executeScript(tab.id, { file:"script.js" });
			chrome.tabs.insertCSS(tab.id, { file:"download.css" });
		}
	}
);