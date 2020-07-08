/**
 * Ping Pong via Runtime Messages
 * 
 * Plays ping pong with popup
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Ping Sent from popup
  if(request.action === `popup:ping`){
    console.log('pong')
    chrome.notifications.create('', {
      title: 'Pong!',
      message: 'The background script received the ping from the popup Script.',
      iconUrl: '../images/icon-128.png',
      type: 'basic'
    }, (notificationId) => {
      // notification sent
    });
    sendResponse('ping received')
  }

  // for unhandled responses, to avoid "The message port closed before a response was received."
  // https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-484772327
  return true;
});

/**
 * Notification Listeners
 */
chrome.notifications.onClicked.addListener((notificationId) => {
  // Check notifications we're listening to
  console.log('background:notifications:onClicked:', notificationId)

  // Clear notification from tray
  chrome.notifications.clear(notificationId, (wasCleared) => console.log(`background:notifications:wasCleared:${notificationId}`, wasCleared));
});
