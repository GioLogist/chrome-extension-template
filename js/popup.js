/**
 * Plays ping pong with current active tab
 */
function pingPongWithCurrentTab(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "popup:ping"}, function(response) {
      console.log(response);
    });
  })
}

/**
 * Plays ping pong with runtime
 */
function pingPongGeneral(){
  chrome.runtime.sendMessage({action: `popup:ping`}, function(response) {
    console.log(response);
  });
}

document.getElementById('ping-content-script').addEventListener('click', () => {
  pingPongWithCurrentTab()
})

document.getElementById('ping-background-script').addEventListener('click', () => {
  pingPongGeneral()
})