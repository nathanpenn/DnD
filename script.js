async function sendMessage() {
    const userMessage = document.getElementById("userInput").value;

    // Call DeepSeek-R1 API
    const response = await fetch("https://DeepSeek-R1-DnD.eastus.models.ai.azure.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "BerzBfE8Tw3OOqUMXMXBPlK3DqqfMYK8" // Add your API key here
        },
        body: JSON.stringify({ query: userMessage })
    });

    const data = await response.json();

    // Display AI response
    document.getElementById("response").innerText = data.reply || "No response received.";
}
