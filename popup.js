$(document).ready(function() {
    $("#btn_translate").click(function() {
        chrome.tabs.executeScript(null, {
            code: "localStorage.setItem('translate', '" + $("#slt_translate").val() + "');"
        }, function(results) { console.log(results); });
        chrome.tabs.executeScript(null, { file: "js/jquery.min.js" });
        chrome.tabs.executeScript(null, { file: "js/lynda.js" });
    });
});