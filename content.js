document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', function(e) {
      var selectedText = window.getSelection().toString().trim();
      console.log(selectedText);
      if (selectedText !== "") {
        chrome.runtime.sendMessage({text: selectedText});
      }
    });
  });
  