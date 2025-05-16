async function sendMessage() {
    const userMessage = document.getElementById("userInput").value;

    // Call DeepSeek-R1 API
    const response = await fetch("https://DeepSeek-R1-DnD.eastus.models.ai.azure.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userMessage })
    });

    const data = await response.json();

    // Display AI response
    document.getElementById("response").innerText = data.reply || "No response received.";
}
