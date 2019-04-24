function gMail() {
  console.log("injecting");
   browser.tabs.create({
     "url": "https://mail.google.com/"
   });
}
browser.browserAction.onClicked.addListener(gMail);
