const { buttonId, inputId, addCommentAction, storageComment } =
  jiraAddCommentConst;

const onAddCommentHandler = () => {
  const comment = document.getElementById(inputId).value;
  console.log("onAddCommentHandler", comment);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: addCommentAction,
      comment,
    });
  });
};

const onInputChangeHandler = (e) => {
  const value = e.target.value;

  localStorage.setItem(storageComment, value);
};

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById(inputId);

  if (input) {
    input.value = localStorage.getItem(storageComment) ?? "";
  }

  document
    .getElementById(buttonId)
    .addEventListener("click", onAddCommentHandler);

  input.addEventListener("input", onInputChangeHandler);
});
