const jiraAddCommentConst = {
  inputCommentId: "jira-comment",
  inputTemplateId: "jira-template",
  addCommentButtonId: "jira-addComment",
  copyLinkButtonId: "jira-copyLink",

  addCommentAction: "addComment",
  copyLinkAction: "copyLink",

  storageComment: "savedComment",
  storageTemplate: "savedTemplate",

  jiraInputSelector: "#comment",
  jiraSubmitSelector: "#issue-comment-add-submit",

  replaceMaskRegExp: new RegExp(/\{taskId\}/),
};
