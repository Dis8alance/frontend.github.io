// script.js
document.addEventListener('DOMContentLoaded', () => {
  const demoChatBtn = document.getElementById('demoChatBtn');
  const demoChatWindow = document.getElementById('demoChatWindow');

  // Переключение видимости чата
  demoChatBtn.addEventListener('click', () => {
    const isHidden = demoChatWindow.style.display === 'none';
    demoChatWindow.style.display = isHidden ? 'block' : 'none';
    demoChatBtn.textContent = isHidden ? 'Скрыть чат' : 'Пример диалога';
  });

  // Отправка сообщений в демо-чате
  const chatInput = document.querySelector('.chat-input input');
  const chatSendBtn = document.querySelector('.chat-input button');
  const chatMessages = document.querySelector('.chat-messages');

  chatSendBtn.addEventListener('click', () => {
    if (chatInput.value.trim() === '') return;
    
    // Сообщение пользователя
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `<p>${chatInput.value}</p>`;
    chatMessages.appendChild(userMessage);
    
    // Имитация ответа ИИ
    setTimeout(() => {
      const aiMessage = document.createElement('div');
      aiMessage.className = 'message ai';
      aiMessage.innerHTML = '<p>Спасибо за вопрос! Вот что я могу предложить...</p>';
      chatMessages.appendChild(aiMessage);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз
    }, 1000);
    
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
});

document.querySelector('.chat-input button').addEventListener('click', function() {
  const input = document.querySelector('.chat-input input');
  const messagesContainer = document.querySelector('.chat-messages');
  
  if (input.value.trim() !== '') {
    // Добавляем сообщение пользователя
    messagesContainer.innerHTML += `
      <div class="message user">${input.value}</div>
    `;
    
    // Имитация ответа ИИ
    setTimeout(() => {
      messagesContainer.innerHTML += `
        <div class="message ai">Спасибо за вопрос! Я проверю информацию и отвечу вам.</div>
      `;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Установка начальной темы
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Обработчик клика
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

// Проверка системных предпочтений
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
  document.documentElement.setAttribute('data-theme', 'dark');
}