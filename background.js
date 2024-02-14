chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    translateText(request.text, function(translation) {
      chrome.runtime.sendMessage({translation: translation});
    });
  });
  
  
  function translateText(text, callback) {
    // Replace "YOUR_API_KEY" with your actual Google Cloud API key
    const apiKey = "AIzaSyC3kz-KR7Tgz-3do9kktyioMQn88aZHM00";
    
    // Define the Google Translate API endpoint
    const apiUrl = "https://translation.googleapis.com/language/translate/v2";
  
    // Set up the request parameters
    const params = new URLSearchParams({
      q: text,
      target: "si", // Language code for Sinhala
      key: apiKey,
    });
  
    // Make the API request
    fetch(`${apiUrl}?${params}`)
      .then(response => response.json())
      .then(data => {
        // Check if the translation was successful
        if (data.data && data.data.translations && data.data.translations.length > 0) {
          const translatedText = data.data.translations[0].translatedText;
          callback(translatedText);
        } else {
          // Handle translation error
          console.error("Translation error:", data.error.message);
          callback("Translation error");
        }
      })
      .catch(error => {
        // Handle fetch error
        console.error("Fetch error:", error);
        callback("Translation error");
      });
  }
  