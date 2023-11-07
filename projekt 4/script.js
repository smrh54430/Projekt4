console.log("testing123");
function openCommunity() {
    window.location.href = "community.html";
}
function becomeVolunteer() {
    window.location.href = "frivillig.html"; 
}
function makeContribution() {
    window.location.href = "bidrag.html";
}
function makeProfile() {
    window.location.href = "profil.html";
}
function joinCommunity() {
    window.location.href = "arrangementer.html";
}

function processPayment() {
    let confirmation = confirm("Er du sikker på, at du vil foretage betalingen?");
    
    if (confirmation) {
       // denne husker dig på at udfylde betalingsformularen korrekt
       alert("Betalingsprocessen er fuldført!");
       return true; // Fortsæt med formularen
    } else {
       alert("Betalingsprocessen blev annulleret.");
       return false; // Stop formularen
    }
 }

 function submitForm() {
    const form = document.getElementById("votingForm");
    const choice = form.querySelector('input[name="choice"]:checked');

    if (choice) {
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = `Du har stemt på: ${choice.value}`;
        
    } else {
        alert("Vælg venligst en valgmulighed, før du stemmer.");
    }
}

function goBack() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessagesArray = []; // Array til at gemme chatbeskeder

    function addMessage(sender, message) {
        const timestamp = new Date(); 
        const newMessage = {
            sender: sender,
            message: message,
            timestamp: timestamp
        };
        chatMessagesArray.push(newMessage);
    }

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            addMessage("Bruger", messageText);

            const messageElement = document.createElement("div");
            messageElement.className = "message";
            const lastMessage = chatMessagesArray[chatMessagesArray.length - 1];
            const formattedTimestamp = lastMessage.timestamp.toLocaleString(); // Formater tidsstempel
            messageElement.textContent = `${lastMessage.sender} skriver: ${lastMessage.message} (tid: ${formattedTimestamp})`;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
        }
    });
});


