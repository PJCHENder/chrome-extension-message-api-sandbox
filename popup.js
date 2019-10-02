'use strict';
console.log('Here is popup');

function sendMessage() {
  chrome.runtime.sendMessage({ from: 'popup.js' });
}

function sendTabsMessage() {
  chrome.tabs.query({ active: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { from: 'popup' });
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Get response in popup, the request is from: ', request.from);
});

document.getElementById('send-message').addEventListener('click', sendMessage);
document
  .getElementById('send-tabs-message')
  .addEventListener('click', sendTabsMessage);
