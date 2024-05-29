const jiraAddCommentConst = {
  inputId: "jira-comment",
  addCommentButtonId: "jira-addComment",
  copyLinkButtonId: "jira-copyLink",

  addCommentAction: "addComment",
  copyLinkAction: "copyLink",

  storageComment: "savedComment",

  jiraInputSelector: "#comment",
  jiraSubmitSelector: "#issue-comment-add-submit",

  replaceMaskRegExp: new RegExp(/\{taskId\}/),
};
