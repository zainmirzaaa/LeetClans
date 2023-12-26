chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.startsWith("https://leetcode.com/problems/")) {
      chrome.tabs.create({
        url: chrome.runtime.getURL("panel.html"),
        active: false
      });
    }
  });