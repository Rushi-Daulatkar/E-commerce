document.getElementById("search-button").addEventListener("click", function() {
    // Get the value from the search input
    var searchQuery = document.getElementById("search-input").value;
      
    // Define the URL you want to open based on the search query
    var link = "https://www.google.com" + encodeURIComponent(searchQuery);
      
    // Open the link in a new tab/window
    window.open(link, "_blank");
  });