document.addEventListener('DOMContentLoaded', function() {
    var translateBtn = document.getElementById('translateBtn');
    var inputTxt = document.getElementById('input-txtId');
    var outputTxt = document.getElementById('translate-panel');
  
    // Attach a click event listener to the translate button
    translateBtn.addEventListener('click', function() {
      // Get the text from the input textarea
      var textToTranslate = inputTxt.value.trim();
  
      // Check if the input text is empty
      if (textToTranslate === "") {
        // If input text is empty, hide the output textarea
        outputTxt.style.display = 'none';
      } else {
        // If input text is not empty, call the translateText function
        translateText(textToTranslate, function(translatedText) {
          // Set the translated text to the output textarea
          outputTxt.value = translatedText;
          // Show the output textarea
          outputTxt.style.display = 'block';
        });
      }
    });
  
    // Function to translate text (replace with your actual translation logic)
    function translateText(text, callback) {
      // Replace this with your translation logic or API call
      // For now, just echoing the input text
      callback(text);
    }
  
    // Initially hide the output textarea
    outputTxt.style.display = 'none';



 // Function to copy text to clipboard
 function copyToClipboard(elementId) {
    var textarea = document.getElementById(elementId);

    // Check if the textarea is not empty
    if (textarea.value.trim() !== "") {
      // Select the text in the textarea
      textarea.select();
      textarea.setSelectionRange(0, 99999); /* For mobile devices */

      // Copy the selected text to the clipboard
      document.execCommand('copy');

      // Deselect the text
      window.getSelection().removeAllRanges();

      // Display an alert message
      alert("Text copied to clipboard!");
    } else {
      // Display an alert if the textarea is empty
      alert("Nothing to copy. Please enter text to translate first.");
    }
  }



  });
  