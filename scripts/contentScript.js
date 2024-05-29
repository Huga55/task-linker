const {
  addCommentAction,
  jiraSubmitSelector,
  replaceMaskRegExp,
  jiraInputSelector,
  copyLinkAction,
} = jiraAddCommentConst;

const getSearchValue = (taskId) => `from+${taskId}+into`;

function copyToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

const getJiraTaskIdFromURL = () => {
  const url = window.location.href;
  const parts = url.split("/");
  return parts.at(-1);
};

const getTaskLink = (comment) => {
  if (!comment || !comment.match(replaceMaskRegExp)) {
    console.error("Comment is empty or it doesn't match replace mask");
    return null;
  }

  const jiraTaskId = getJiraTaskIdFromURL();
  if (!jiraTaskId) {
    console.error("Jira task id not found");
    return null;
  }

  const searchValue = getSearchValue(jiraTaskId);
  return comment.replace(replaceMaskRegExp, searchValue);
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const taskLink = getTaskLink(request.comment);
  console.log(request.action, taskLink);
  if (!taskLink) {
    return;
  }

  if (request.action === addCommentAction) {
    const commentBox = document.querySelector(jiraInputSelector);

    if (commentBox) {
      commentBox.value = taskLink;
      document.querySelector(jiraSubmitSelector).click();
    }
  }

  if (request.action === copyLinkAction) {
    console.log("copyLinkAction");
    copyToClipboard(taskLink);
    showMessage("Ссылка скопирована в буфер обмена");
  }
});
