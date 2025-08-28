const profileToggle = document.getElementById("profile-toggle");
    const profileSidebar = document.getElementById("profile-sidebar");
    const overlay = document.getElementById("overlay");

    function toggleProfile() {
      profileSidebar.classList.toggle("show");
      overlay.classList.toggle("active");
    }

    profileToggle.addEventListener("click", toggleProfile);
    overlay.addEventListener("click", toggleProfile);


// chat.js: handles messages demo & send functionality
document.addEventListener('DOMContentLoaded', function() {
  const messagesContainer = document.getElementById('messages-container');
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');

  // Sample messages for demonstration
  const sampleMessages = [
    { sender: 'John Doe', content: 'Hey there! How are you doing?', time: '10:00 AM', own: false },
    { sender: 'You', content: 'I\'m good, thanks! How about you?', time: '10:02 AM', own: true },
    { sender: 'John Doe', content: 'I\'m doing great! Just finished the project we were working on.', time: '10:05 AM', own: false },
    { sender: 'You', content: 'That\'s awesome! Can you share the details?', time: '10:07 AM', own: true },
    { sender: 'John Doe', content: 'Sure! I\'ve implemented all the features we discussed. The UI looks really professional now.', time: '10:10 AM', own: false },
    { sender: 'You', content: 'Great! I\'m looking forward to seeing it. When can we schedule a demo?', time: '10:12 AM', own: true }
  ];

  // Load sample messages on page load
  function loadSampleMessages() {
    messagesContainer.innerHTML = '<div class="day-divider"><span>TODAY</span></div>';
    sampleMessages.forEach(message => addMessageToChat(message));
    scrollToBottom();
  }

  // Add message to chat UI
  function addMessageToChat(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', message.own ? 'own' : 'other');

    messageElement.innerHTML = `
      <div class="message-content">
        ${!message.own ? `<div class="message-sender">${message.sender}</div>` : ''}
        <div class="message-text">${escapeHtml(message.content)}</div>
      </div>
      <div class="message-info">
        <span>${message.time}</span>
        ${message.own ? '<i class="fas fa-check-double" style="color: var(--wa-blue); margin-left: 5px;"></i>' : ''}
      </div>
    `;
    messagesContainer.appendChild(messageElement);
  }

  // Basic helper to avoid injecting HTML accidentally
  function escapeHtml(unsafe) {
    return String(unsafe)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Scroll to bottom
  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Send message
  function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    const newMessage = {
      sender: 'You',
      content: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      own: true
    };

    addMessageToChat(newMessage);
    messageInput.value = '';
    scrollToBottom();

    // Simulate reply
    setTimeout(() => {
      const replies = [
        "That's interesting!",
        "I see what you mean.",
        "Thanks for sharing!",
        "Let me think about that...",
        "I agree with you.",
        "Could you tell me more?",
        "That sounds great!",
        "I'll get back to you on that."
      ];
      const reply = {
        sender: 'John Doe',
        content: replies[Math.floor(Math.random() * replies.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        own: false
      };
      addMessageToChat(reply);
      scrollToBottom();
    }, 1000);
  }

  // events
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (messageInput) messageInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

  // initialize
  loadSampleMessages();
});

const attachBtn = document.getElementById("attach-btn");
const attachMenu = document.getElementById("attach-menu");

attachBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  attachMenu.style.display = attachMenu.style.display === "flex" ? "none" : "flex";
});

// Close if clicked outside
document.addEventListener("click", () => {
  attachMenu.style.display = "none";
});
