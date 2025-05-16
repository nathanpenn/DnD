async function sendMessage() {
    const userMessage = document.getElementById("userInput").value;

    // Ensure the user has entered a message
    if (!userMessage.trim()) {
        alert("Please enter a message.");
        return;
    }

    try {
        // Send request to DeepSeek-R1 API
        const response = await fetch("https://DeepSeek-R1-DnD.eastus.models.ai.azure.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "BerzBfE8Tw3OOqUMXMXBPlK3DqqfMYK8"
            },
            body: JSON.stringify({ query: userMessage })
        });

        // Parse JSON response
        const data = await response.json();

        // Display AI response
        document.getElementById("response").innerText = data.reply || "No response received.";
    } catch (error) {
        console.error("Error calling DeepSeek-R1 API:", error);
        document.getElementById("response").innerText = "Error connecting to AI service.";
    }
}
