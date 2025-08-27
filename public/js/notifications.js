// Placeholder for desktop & sound notifications
function showNotification(sender, message) {
  if (Notification.permission === 'granted') {
    new Notification(sender, { body: message });
  }
}
