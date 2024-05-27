const jiraAddCommentConst = {
  inputId: "jira-comment",
  buttonId: "jira-addComment",

  addCommentAction: "addComment",

  storageComment: "savedComment",

  jiraInputSelector: "#comment",
  jiraSubmitSelector: "#issue-comment-add-submit",
  jiraTaskIdSelector: ".issue-link",

  replaceMaskRegExp: new RegExp(/\{taskId\}/),
};
