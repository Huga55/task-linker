function showMessage(text) {
  // Создаем элемент для сообщения
  var messageElement = document.createElement("div");
  messageElement.textContent = text;
  messageElement.style.position = "fixed";
  messageElement.style.top = "50%";
  messageElement.style.left = "50%";
  messageElement.style.transform = "translate(-50%, -50%)";
  messageElement.style.padding = "10px";
  messageElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  messageElement.style.color = "#fff";
  messageElement.style.borderRadius = "5px";
  messageElement.style.zIndex = "9999";

  document.body.appendChild(messageElement);

  setTimeout(function () {
    document.body.removeChild(messageElement);
  }, 2000);
}
