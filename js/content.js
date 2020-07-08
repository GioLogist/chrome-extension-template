/*
  Ping Pong via content script
  Plays ping pon with popup

  Note: content scripts only listen to messages sent directly to a tab
*/
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Receive ping from popup
  if(request.action === 'popup:ping'){
    sendResponse('ping received')
    console.log('pong') 
  }
});
