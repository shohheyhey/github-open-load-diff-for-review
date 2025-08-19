chrome.action.onClicked.addListener((tab) => {
  // アクティブなタブに content.js を挿入
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
