var menuItem = {
    "id": "wiki",
    "title": "wiki stuff",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "wiki" && clickData.selectionText){
        let wikiUrl = `https://en.wikipedia.org/wiki/${fixedEncodeURI(clickData.selectionText)}`
        let createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        }
        chrome.windows.create(createData, function(){})
    }
})