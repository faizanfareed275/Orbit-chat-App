// emojiPicker.js
document.addEventListener('DOMContentLoaded', () => {
  const emojiBtn = document.getElementById('emoji-btn');
  const emojiPicker = document.getElementById('emoji-picker');
  const messageInput = document.getElementById('message-input');

  if (!emojiBtn || !emojiPicker || !messageInput) return;

  emojiBtn.addEventListener('click', () => {
    emojiPicker.classList.toggle('show');
  });

  emojiPicker.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', () => {
      messageInput.value += emoji.textContent;
      messageInput.focus();
      emojiPicker.classList.remove('show');
    });
  });

  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!emojiBtn.contains(e.target) && !emojiPicker.contains(e.target)) {
      emojiPicker.classList.remove('show');
    }
  });
});
