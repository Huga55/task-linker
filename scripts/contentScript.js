const {
  addCommentAction,
  jiraSubmitSelector,
  replaceMaskRegExp,
  jiraInputSelector,
  jiraTaskIdSelector,
} = jiraAddCommentConst;

const getSearchValue = (taskId) => `from+${taskId}+into`;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === addCommentAction) {
    const comment = request.comment;

    if (!comment || !comment.match(replaceMaskRegExp)) {
      console.error("Comment is empty or it doesn't match replace mask");
      return;
    }

    const commentBox = document.querySelector(jiraInputSelector);
    const jiraTaskId = document.querySelector(jiraTaskIdSelector).innerHTML;

    if (!jiraTaskId) {
      console.error("Jira task id selector not found");
      return;
    }

    const searchValue = getSearchValue(jiraTaskId);
    const taskLink = request.comment.replace(replaceMaskRegExp, searchValue);

    if (commentBox) {
      commentBox.value = taskLink;
      document.querySelector(jiraSubmitSelector).click();
    }
  }
});
