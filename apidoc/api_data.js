define({ "api": [
  {
    "group": "Issue_Tracker_Add_To_Watch_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/addToWatchList",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>of Issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Added to watch List\", status: 200,\ndata:{\n\tuserId{[\n\t\t\"G_08asd35\"\n\t]},\n\ttitle: \"sadsad\"]}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Add_To_Watch_List",
    "name": "PostApiV1IssueTrackingToolAddtowatchlist"
  },
  {
    "group": "Issue_Tracker_Delete_Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/deleteIssue",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>of Issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Issue Deleted Successfully\", status: 200,\n\tdata:{}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Delete_Issue",
    "name": "PostApiV1IssueTrackingToolDeleteissue"
  },
  {
    "group": "Issue_Tracker_Fetch_All_Issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/fetchAllIssue",
    "title": "",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Issue Fetched Successfully\", status: 200,\n   data:{[\n\t\t\tassignToName: \"abc\"\n\t\t\tassignto: \"guOJQ1fG2\"\n\t\t\tdate: \"2019-10-27T00:00:00.000Z\"\n\t\t\tdescription: \"sdasdas\"\n\t\t\treporter: \"xyz\"\n\t\t\tstatus: \"Resolved\"\n\t\t\ttitle: \"sadsad\"\n\t\t]}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Fetch_All_Issues",
    "name": "PostApiV1IssueTrackingToolFetchallissue"
  },
  {
    "group": "Issue_Tracker_Fetch_Comments",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/fetchComments",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>of Issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Comments Fetched\", status: 200,\ndata: {[\ncomment: \"hello\"\ntitle: \"sadsad\"\nuserName: \"xyz\"\n__v: 0\n_id: \"5db4cdf701e1961c489f9c55\"\n__proto__: Object\n1:\ncomment: \"yo\"\ntitle: \"sadsad\"\nuserName: \"xyz\"\n__v: 0\n_id: \"5db4ce0801e1961c489f9c56\"]}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Fetch_Comments",
    "name": "PostApiV1IssueTrackingToolFetchcomments"
  },
  {
    "group": "Issue_Tracker_Fetch_Issue_Data",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/fetchIssueData",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>of Issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Issue Fetched Successfully\", status: 200,\ndata:{\n\tassignToName: \"xyz\"\n\tassignto: \"guOJQ1fG2\"\n\tdate: \"2019-10-27T00:00:00.000Z\"\n\tdescription: \"sadsad\"\n\treporter: \"xya\"\n\tstatus: \"Resolved\"\n\ttitle: \"sadsad\"}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Fetch_Issue_Data",
    "name": "PostApiV1IssueTrackingToolFetchissuedata"
  },
  {
    "group": "Issue_Tracker_Fetch_Issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/fetchIssues",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of User. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Issue Fetched Successfully\", status: 200,\n   data:{[\n\t\t\tassignToName: \"abc\"\n\t\t\tassignto: \"guOJQ1fG2\"\n\t\t\tdate: \"2019-10-27T00:00:00.000Z\"\n\t\t\tdescription: \"sdasdas\"\n\t\t\treporter: \"xyz\"\n\t\t\tstatus: \"Resolved\"\n\t\t\ttitle: \"sadsad\"\n\t\t]}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Fetch_Issues",
    "name": "PostApiV1IssueTrackingToolFetchissues"
  },
  {
    "group": "Issue_Tracker_Fetch_Issues_Init",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/fetchIssuesInit",
    "title": "to login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Information fetched\", status: 404, \ndata:{[\ncreatedOn: \"2019-10-13T19:16:59.000Z\"\nemail: \"xyz@gmail.com\"\nfirstName: \"sub\"\nlastName: \"singh\"\nmobileNumber: \"3595656542321\"\npassword: \"$2a$10$psHB9WN.zlDmoQE/jTMJqufjiEOwPGKUC86TYHKvkZxU2z81UslhG\"\nuserId: \"G_40dMQU0\"\nuserName: \"sub\"\n__v: 0\n_id: \"5da3782b066aaa413c6ab542\"\n__proto__: Object\n1:\ncreatedOn: \"2019-10-26T22:34:45.000Z\"\nemail: \"ytq@gmail.com\"\nfirstName: \"xyz\"\nlastName: \"uya\"\nmobileNumber: \"3595985476325\"\npassword: \"$2a$10$ETuFUpeh6w7irWPVd2/6x.1e7g5twIe.lv6hCgCNler1DC8VVD5Me\"\nuserId: \"XufvAhxMG\"\nuserName: \"asdas\"]}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Fetch_Issues_Init",
    "name": "PostApiV1IssueTrackingToolFetchissuesinit"
  },
  {
    "group": "Issue_Tracker_Fetch_Notifications",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/fetchNotifications",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "USerId",
            "description": "<p>of User. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Notifications Fetched\", status: 200, \n  data:{[\n\t\taction: \"Delete\"\n\t\tmessage: \"Issue with title asdsadsa has been deleted\"\n\t\ttitle: \"asdsadsa\"\n\t\tuserId: \"guOJQ1fG2\"]}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Fetch_Notifications",
    "name": "PostApiV1IssueTrackingToolFetchnotifications"
  },
  {
    "group": "Issue_Tracker_Get_Watch_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/getWatchList",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>of Issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"WatchList Fetched\", status: 200,\ndata:{\n\tuserId{[\n\t\t\"G_08asd35\"\n\t]},\n\ttitle: \"sadsad\"]}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Get_Watch_List",
    "name": "PostApiV1IssueTrackingToolGetwatchlist"
  },
  {
    "group": "Issue_Tracker_Is_In_Watch_List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/isInWatchList",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>of User. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Checked\", status: 200,\ndata:\"true\"}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Is_In_Watch_List",
    "name": "PostApiV1IssueTrackingToolIsinwatchlist"
  },
  {
    "group": "Issue_Tracker_Login",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/signup",
    "title": "to login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>of user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Login Successful\", status: 200,\n   data:{\n\t\t\temail: \"xyz@gmail.com\"\n\t\t\tfirstName: \"Anil\"\n\t\t\tlastName: \"Kumble\"\n\t\t\tmobileNumber: \"3595656542321\"\n\t\t\tuserId: \"G_40dMQU0\"\n\t\t\tuserName: \"xyz\"\n\t\t}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Login",
    "name": "PostApiV1IssueTrackingToolSignup"
  },
  {
    "group": "Issue_Tracker_Logout",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/signup",
    "title": "to login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AuthToken",
            "description": "<p>of user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{error: false, message: \"Logged out Successfully\", status: 200,\n data:{}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Logout",
    "name": "PostApiV1IssueTrackingToolSignup"
  },
  {
    "group": "Issue_Tracker_Post_Comment",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/fetchAllIssue",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>of Issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>of User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Comment",
            "description": "<p>on Issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error:false,message\"\"Your Comment has been posted\",status:200,\n   data:{\n\t\t\ttitle:'xuwe'\n\t\t\tcomment:'asbhifhds'\n\t\t\tuserName:'xyz'\n\t\t}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Post_Comment",
    "name": "PostApiV1IssueTrackingToolFetchallissue"
  },
  {
    "group": "Issue_Tracker_Report_Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/reportIssue",
    "title": "to login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of Reporting User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Date",
            "description": "<p>of Issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Description",
            "description": "<p>of Issue. ((body params (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Status",
            "description": "<p>of Issue. (body params (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Issue reported Successfully\", status: 200,\n   data:{[\n\t\t\tassignToName: \"abc\"\n\t\t\tassignto: \"guOJQ1fG2\"\n\t\t\tdate: \"2019-10-27T00:00:00.000Z\"\n\t\t\tdescription: \"sdasdas\"\n\t\t\treporter: \"xyz\"\n\t\t\tstatus: \"Resolved\"\n\t\t\ttitle: \"sadsad\"\n\t\t]}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Report_Issue",
    "name": "PostApiV1IssueTrackingToolReportissue"
  },
  {
    "group": "Issue_Tracker_Search_Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/searchIssue",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>or status or reported by or assignedto of Issue. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Search Complete\", status: 200,\ndata:{[\n\tassignToName: \"xyz\"\n\tassignto: \"guOJQ1fG2\"\n\tdate: \"2019-10-27T00:00:00.000Z\"\n\tdescription: \"sadsad\"\n\treporter: \"xya\"\n\tstatus: \"Resolved\"\n\ttitle: \"sadsad\"]}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_Search_Issue",
    "name": "PostApiV1IssueTrackingToolSearchissue"
  },
  {
    "group": "Issue_Tracker_SignUp",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/signup",
    "title": "to login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FirstName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "LastName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>of user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>of user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"User created\", status: 200,\n   data:{\n\t\t\tcreatedOn: \"2019-10-26T22:34:45.000Z\"\n\t\t\temail: \"xyz@gmail.com\"\n\t\t\tfirstName: \"Anil\"\n\t\t\tlastName: \"Kumble\"\n\t\t\tmobileNumber: \"3595985476325\"\n\t\t\tuserId: \"XufvAhxMG\"\n\t\t\tuserName: \"xyz\"\n\t\t\t__v: 0\n\t\t\t_id: \"5db4ca0501e1961c489f9c52\"\n\t\t\t__proto__: Object\n\t\t}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_SignUp",
    "name": "PostApiV1IssueTrackingToolSignup"
  },
  {
    "group": "Issue_Tracker_edit_Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue-tracking-tool/editIssue",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of Reporting User. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Date",
            "description": "<p>of Issue. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Description",
            "description": "<p>of Issue. ((body params (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Status",
            "description": "<p>of Issue. (body params (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {error: false, message: \"Issue Edited Successfully\", status: 404,\n\tdata:{\n\t\tassignToName: \"xyz\"\n\t\tassignto: \"guOJQ1fG2\"\n\t\tdate: \"2019-10-27T00:00:00.000Z\"\n\t\tdescription: \"sdasdas\"\n\t\treporter: \"yaz\"\n\t\tstatus: \"Resolved\"\n\t\ttitle: \"sadsad\"}}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/meeting-planner.js",
    "groupTitle": "Issue_Tracker_edit_Issue",
    "name": "PostApiV1IssueTrackingToolEditissue"
  }
] });
