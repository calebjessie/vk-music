// Execute scripts

// Error catching
chrome.tabs.onUpdated.addListener (
	function(tabID, changeInfo, tab) {
		if ( changeInfo.status === "complete" ) {
			chrome.tabs.executeScript(tab.id, { code: "console.log('test');"}, function(){
				 if (chrome.runtime.lastError) {
					 console.log("ERROR: " + chrome.runtime.lastError.message);
				}
			});
			chrome.tabs.executeScript(tab.id, { file:"script.js" });
			chrome.tabs.executeScript(tab.id, { file:"download.js" });
			chrome.tabs.insertCSS(tab.id, { file:"download.css" });
		}
	}
);