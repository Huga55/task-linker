const {
  buttonId,
  inputId,
  addCommentAction,
  storageComment,
  addCommentButtonId,
  copyLinkButtonId,
  copyLinkAction,
} = jiraAddCommentConst;

const sendComment = (data) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
};

const onAddCommentHandler = () => {
  const comment = document.getElementById(inputId).value;

  sendComment({
    action: addCommentAction,
    comment,
  });
};

const onCopyLinkHandler = () => {
  const comment = document.getElementById(inputId).value;
  console.log("comment");
  sendComment({
    action: copyLinkAction,
    comment,
  });
};

const onInputChangeHandler = (e) => {
  const value = e.target.value;

  localStorage.setItem(storageComment, value);
};

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById(inputId);
  const addCommentButton = document.getElementById(addCommentButtonId);
  const copyLinkButton = document.getElementById(copyLinkButtonId);

  if (!input || !addCommentButton || !copyLinkButton) {
    console.error("Input or some of buttons is not found");
    return;
  }

  input.value = localStorage.getItem(storageComment) ?? "";

  addCommentButton.addEventListener("click", onAddCommentHandler);
  copyLinkButton.addEventListener("click", onCopyLinkHandler);
  input.addEventListener("input", onInputChangeHandler);
});
