document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        displayMessage(userInput, 'user');
        // Simulate a bot response
        setTimeout(() => {
            displayMessage('Imagine I gave a witty response!', 'bot');
        }, 500); // Simulate a slight delay in response
        document.getElementById('user-input').value = ''; // Clear input after sending
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', `${sender}-message`);
    msgDiv.innerText = message; // Use `innerText` for better security
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}
