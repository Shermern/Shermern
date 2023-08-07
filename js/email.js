document.getElementById("copyEmailButton").addEventListener("click", function() {
    // Create a temporary input element to copy the email address
    const tempInput = document.createElement("input");
    
    // Set the email address as the input value
    const email = "shermern@cmu.edu"; // Replace this with your actual email address
    tempInput.value = email;
    
    // Append the input element to the DOM
    document.body.appendChild(tempInput);
    
    // Select the input's text
    tempInput.select();
    
    // Copy the text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element from the DOM
    document.body.removeChild(tempInput);
    
    // Optionally, you can provide some visual feedback to the user after copying the email
    alert("Copied to clipboard! \n" + "Address: " + email);

    event.preventDefault();
  });
