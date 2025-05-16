const API_PROXY_URL = "https://dnd-function-app-brbjfrc4bphbgxd7.eastus2-01.azurewebsites.net/api/forward-to-ai";  // Your Azure Function URL

async function sendMessage() {
    const userMessage = document.getElementById("userInput").value;

    if (!userMessage.trim()) {
        alert("Please enter a message.");
        return;
    }

    // Show "Waiting for response..." message
    document.getElementById("response").innerText = "Waiting for response...";

    try {
        const response = await fetch(API_PROXY_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: userMessage })  // Sends user query to Azure Function
        });

        // Check if API response is successful
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Display AI response
        document.getElementById("response").innerText = data.reply || "No response received.";
    } catch (error) {
        console.error("Error connecting to AI service:", error);
        document.getElementById("response").innerText = "Error connecting to AI service.";
    }
}
