{
  let run = (a, b) => {
    let url = (b || a).url;
    chrome.windows.create({
      url: b || url[0] != "c" ? url : "chrome://newtab",
      incognito: !0
    }).catch(() => 0);
  }
  chrome.action.onClicked.addListener(run);
  chrome.contextMenus.onClicked.addListener(run);
}
chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: "Open incognito window",
    documentUrlPatterns: ["https://*/*", "http://*/*", "file://*"]
  })
);