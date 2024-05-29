const {
  buttonId,
  inputCommentId,
  addCommentAction,
  storageComment,
  addCommentButtonId,
  copyLinkButtonId,
  copyLinkAction,
  inputTemplateId,
  storageTemplate,
} = jiraAddCommentConst;

const sendComment = (data) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
};

const onAddCommentHandler = () => {
  const comment = document.getElementById(inputCommentId).value;
  const template = document.getElementById(inputTemplateId).value;

  sendComment({
    action: addCommentAction,
    comment,
    template,
  });
};

const onCopyLinkHandler = () => {
  const comment = document.getElementById(inputCommentId).value;
  const template = document.getElementById(inputTemplateId).value;

  sendComment({
    action: copyLinkAction,
    comment,
    template,
  });
};

const onInputCommentChangeHandler = (e) => {
  const value = e.target.value;

  localStorage.setItem(storageComment, value);
};

const onInputTemplateChangeHandler = (e) => {
  const value = e.target.value;

  localStorage.setItem(storageTemplate, value);
};

document.addEventListener("DOMContentLoaded", () => {
  const inputComment = document.getElementById(inputCommentId);
  const inputTemplate = document.getElementById(inputTemplateId);
  const addCommentButton = document.getElementById(addCommentButtonId);
  const copyLinkButton = document.getElementById(copyLinkButtonId);

  if (
    !inputComment ||
    !addCommentButton ||
    !addCommentButton ||
    !copyLinkButton
  ) {
    console.error("Input or some of buttons is not found");
    return;
  }

  inputComment.value = localStorage.getItem(storageComment) ?? "";
  inputTemplate.value = localStorage.getItem(storageTemplate) ?? "";

  addCommentButton.addEventListener("click", onAddCommentHandler);
  copyLinkButton.addEventListener("click", onCopyLinkHandler);
  inputComment.addEventListener("input", onInputCommentChangeHandler);
  inputTemplate.addEventListener("input", onInputTemplateChangeHandler);
});
