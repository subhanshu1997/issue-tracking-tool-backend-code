const express=require('express')
const userController=new require('../controllers/userController')
const appConfig=require('../config/config')
const auth=new require('../middlewares/auth')
const issueController=new require('../controllers/issueController')
const socketLib=require('../libs/socketLib')
// const auth=require('./../middlewares/auth')
let setRoutes=(app)=>{
    let baseUrl=appConfig.apiVersion+'/issue-tracking-tool'
	app.post(baseUrl+'/login',userController.loginFunction)
	/**
   * @apiGroup Issue-Tracker-Login
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/signup to login
   * 
   * @apiParam {string} UserName of user. (query params) (required)
   * @apiParam {string} Password of user. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Login Successful", status: 200,
	   data:{
				email: "xyz@gmail.com"
				firstName: "Anil"
				lastName: "Kumble"
				mobileNumber: "3595656542321"
				userId: "G_40dMQU0"
				userName: "xyz"
			}}
 */


	app.post(baseUrl+'/signup',userController.signUpFunction)

 /**
   * @apiGroup Issue-Tracker-SignUp
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/signup to login
   * 
   * @apiParam {string} FirstName of user. (query params) (required)
   * @apiParam {string} LastName of user. (query params) (required)
   * @apiParam {string} UserName of user. (query params) (required)
   * @apiParam {string} Email of user. (query params) (required)
   * @apiParam {string} Password of user. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "User created", status: 200,
	   data:{
				createdOn: "2019-10-26T22:34:45.000Z"
				email: "xyz@gmail.com"
				firstName: "Anil"
				lastName: "Kumble"
				mobileNumber: "3595985476325"
				userId: "XufvAhxMG"
				userName: "xyz"
				__v: 0
				_id: "5db4ca0501e1961c489f9c52"
				__proto__: Object
			}}
 */




	app.post(baseUrl+'/logout',auth.isAuthenticated,userController.logout)
	/**
   * @apiGroup Issue-Tracker-Logout
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/signup to login
   * 
   * @apiParam {string} AuthToken of user. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Logged out Successfully", status: 200,
	   data:{}
 */




	app.post(baseUrl+'/reportIssue',auth.isAuthenticated,issueController.reportIssue)
	/**
   * @apiGroup Issue-Tracker-Report-Issue
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/reportIssue to login
   * @apiParam {string} userId of Reporting User. (body params) (required)
   * @apiParam {string} Date of Issue. (body params) (required)
   * @apiParam {string} Description of Issue. ((body params (required)
   * @apiParam {string} Status of Issue. (body params (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Issue reported Successfully", status: 200,
	   data:{[
				assignToName: "abc"
				assignto: "guOJQ1fG2"
				date: "2019-10-27T00:00:00.000Z"
				description: "sdasdas"
				reporter: "xyz"
				status: "Resolved"
				title: "sadsad"
			]}}
 */



	app.post(baseUrl+'/fetchIssues',auth.isAuthenticated,issueController.fetchIssues)
/**
   * @apiGroup Issue-Tracker-Fetch-Issues
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/fetchIssues
   * @apiParam {string} userId of User. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Issue Fetched Successfully", status: 200,
	   data:{[
				assignToName: "abc"
				assignto: "guOJQ1fG2"
				date: "2019-10-27T00:00:00.000Z"
				description: "sdasdas"
				reporter: "xyz"
				status: "Resolved"
				title: "sadsad"
			]}}
 */



	app.post(baseUrl+'/fetchAllIssues',auth.isAuthenticated,issueController.fetchAllIssues)
/**
   * @apiGroup Issue-Tracker-Fetch-All_Issues
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/fetchAllIssue
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Issue Fetched Successfully", status: 200,
	   data:{[
				assignToName: "abc"
				assignto: "guOJQ1fG2"
				date: "2019-10-27T00:00:00.000Z"
				description: "sdasdas"
				reporter: "xyz"
				status: "Resolved"
				title: "sadsad"
			]}}
 */




	app.post(baseUrl+"/fetchIssuesInit",auth.isAuthenticated,issueController.fetchIssuesInit)
	/**
   * @apiGroup Issue-Tracker-Fetch-Issues-Init
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/fetchIssuesInit to login
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Information fetched", status: 404, 
	data:{[
	createdOn: "2019-10-13T19:16:59.000Z"
	email: "xyz@gmail.com"
	firstName: "sub"
	lastName: "singh"
	mobileNumber: "3595656542321"
	password: "$2a$10$psHB9WN.zlDmoQE/jTMJqufjiEOwPGKUC86TYHKvkZxU2z81UslhG"
	userId: "G_40dMQU0"
	userName: "sub"
	__v: 0
	_id: "5da3782b066aaa413c6ab542"
	__proto__: Object
	1:
	createdOn: "2019-10-26T22:34:45.000Z"
	email: "ytq@gmail.com"
	firstName: "xyz"
	lastName: "uya"
	mobileNumber: "3595985476325"
	password: "$2a$10$ETuFUpeh6w7irWPVd2/6x.1e7g5twIe.lv6hCgCNler1DC8VVD5Me"
	userId: "XufvAhxMG"
	userName: "asdas"]}}
 */
	





	app.post(baseUrl+"/editIssue",auth.isAuthenticated,issueController.editIssue)
			/**
   * @apiGroup Issue-Tracker-edit-Issue
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/editIssue
   * @apiParam {string} userId of Reporting User. (body params) (required)
   * @apiParam {string} Date of Issue. (body params) (required)
   * @apiParam {string} Description of Issue. ((body params (required)
   * @apiParam {string} Status of Issue. (body params (required)
   * 
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Issue Edited Successfully", status: 404,
		data:{
			assignToName: "xyz"
			assignto: "guOJQ1fG2"
			date: "2019-10-27T00:00:00.000Z"
			description: "sdasdas"
			reporter: "yaz"
			status: "Resolved"
			title: "sadsad"}}
 */	





	
	app.post(baseUrl+"/deleteIssue",auth.isAuthenticated,issueController.deleteIssue)
/**
   * @apiGroup Issue-Tracker-Delete-Issue
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/deleteIssue
   * @apiParam {string} Title of Issue. (body params) (required)
   * 
   * 
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Issue Deleted Successfully", status: 200,
		data:{}
 */	



	app.post(baseUrl+"/fetchIssueData",auth.isAuthenticated,issueController.fetchIssueData)
/**
   * @apiGroup Issue-Tracker-Fetch-Issue-Data
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/fetchIssueData
   * @apiParam {string} Title of Issue. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Issue Fetched Successfully", status: 200,
	data:{
		assignToName: "xyz"
		assignto: "guOJQ1fG2"
		date: "2019-10-27T00:00:00.000Z"
		description: "sadsad"
		reporter: "xya"
		status: "Resolved"
		title: "sadsad"}}
 */	



	app.post(baseUrl+"/searchIssue",auth.isAuthenticated,issueController.searchIssue)
		/**
   * @apiGroup Issue-Tracker-Search-Issue
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/searchIssue
   * @apiParam {string} Title or status or reported by or assignedto of Issue. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Search Complete", status: 200,
	data:{[
		assignToName: "xyz"
		assignto: "guOJQ1fG2"
		date: "2019-10-27T00:00:00.000Z"
		description: "sadsad"
		reporter: "xya"
		status: "Resolved"
		title: "sadsad"]}}
 */	



	app.post(baseUrl+"/addToWatchList",auth.isAuthenticated,issueController.addToWatchList)
			/**
   * @apiGroup Issue-Tracker-Add-To-Watch-List
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/addToWatchList
   * @apiParam {string} Title of Issue. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Added to watch List", status: 200,
	data:{
		userId{[
			"G_08asd35"
		]},
		title: "sadsad"]}
 */	



	app.post(baseUrl+"/getWatchList",auth.isAuthenticated,issueController.getWatchList)
			/**
   * @apiGroup Issue-Tracker-Get-Watch-List
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/getWatchList
   * @apiParam {string} Title of Issue. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "WatchList Fetched", status: 200,
	data:{
		userId{[
			"G_08asd35"
		]},
		title: "sadsad"]}
 */	





	app.post(baseUrl+"/isInWatchList",auth.isAuthenticated,issueController.isInWatchList)
/**
   * @apiGroup Issue-Tracker-Is-In-Watch-List
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/isInWatchList
   * @apiParam {string} UserId of User. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Checked", status: 200,
	data:"true"}
 */	





	app.post(baseUrl+"/fetchComments",auth.isAuthenticated,issueController.fetchComments)
	/**
   * @apiGroup Issue-Tracker-Fetch-Comments
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/fetchComments
   * @apiParam {string} Title of Issue. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Comments Fetched", status: 200,
	data: {[
	comment: "hello"
	title: "sadsad"
	userName: "xyz"
	__v: 0
	_id: "5db4cdf701e1961c489f9c55"
	__proto__: Object
	1:
	comment: "yo"
	title: "sadsad"
	userName: "xyz"
	__v: 0
	_id: "5db4ce0801e1961c489f9c56"]}}
 */
	
	

	app.post(baseUrl+"/postComment",auth.isAuthenticated,issueController.postComment)
	/**
   * @apiGroup Issue-Tracker-Post-Comment
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/fetchAllIssue
   * @apiParam {string} Title of Issue. (body params) (required)
   * @apiParam {string} UserId of User. (body params) (required)
   * @apiParam {string} Comment on Issue. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error:false,message""Your Comment has been posted",status:200,
	   data:{
				title:'xuwe'
				comment:'asbhifhds'
				userName:'xyz'
			}}
 */




	app.post(baseUrl+"/fetchNotifications",auth.isAuthenticated,issueController.fetchNotifications)
	/**
   * @apiGroup Issue-Tracker-Fetch-Notifications
   * @apiVersion  1.0.0
   * @api {post} /api/v1/issue-tracking-tool/fetchNotifications
   * @apiParam {string} USerId of User. (body params) (required)
   * 
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
	  {error: false, message: "Notifications Fetched", status: 200, 
	  data:{[
			action: "Delete"
			message: "Issue with title asdsadsa has been deleted"
			title: "asdsadsa"
			userId: "guOJQ1fG2"]}}
 */
}
module.exports = {
    setRoutes : setRoutes
}
