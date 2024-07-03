"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48789],{663464:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>q,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var n=s(487462),i=(s(667294),s(603905)),r=s(258219),a=(s(162316),s(580667)),o=s.n(a),d=s(524228),l=s.n(d),u=s(909487),p=s(241429),c=s(905397),m=s(504667),h=s(809472),y=s(685162);const g={id:"users-controller-get-one-user-7",title:"Get any user object by id",description:"Get the user object of any user by its id.",sidebar_label:"Get any user object by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"UsersController_getOneUser_7",description:"Get the user object of any user by its id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of the user to get the details for",schema:{format:"uuid",type:"string"}}],responses:{200:{description:"If existing and permitted, the user details of the requested user",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this login user",example:"12345678-90ab-cdef-fedc-ab0987654321"},neo4jId:{type:"string",nullable:!0,description:"The id of this user in the neo4j database.\n\nIf null after initialization, there was an error.\nMust be unique as relation to GropiusUser is 1:1."},username:{type:"string",description:"The plain text username of the user.\nMust be kept in sync with username in backend.\n\nCurrently has no use outside the userpass strategy"},revokeTokensBefore:{format:"date-time",type:"string",description:"All tokens (INCLUDING access tokens) issued to this user **before** this date are no longer valid.\n\nUsed to 'emergency'-Revoke tokens"}},required:["id","neo4jId","username","revokeTokensBefore"],title:"LoginUser"}}}},401:{description:"If not logged in or requesting a non-self user and not admin"},404:{description:"If no user with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/login/user/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Get any user object by id",description:{content:"Get the user object of any user by its id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",type:"text/plain"},url:{path:["login","user",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of the user to get the details for",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},f=void 0,b={unversionedId:"login-service/users-controller-get-one-user-7",id:"login-service/users-controller-get-one-user-7",title:"Get any user object by id",description:"Get the user object of any user by its id.",source:"@site/rest-docs/login-service/users-controller-get-one-user-7.api.mdx",sourceDirName:"login-service",slug:"/login-service/users-controller-get-one-user-7",permalink:"/gropius-backend-docs/rest/login-service/users-controller-get-one-user-7",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"users-controller-get-one-user-7",title:"Get any user object by id",description:"Get the user object of any user by its id.",sidebar_label:"Get any user object by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"UsersController_getOneUser_7",description:"Get the user object of any user by its id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of the user to get the details for",schema:{format:"uuid",type:"string"}}],responses:{200:{description:"If existing and permitted, the user details of the requested user",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"The unique ID of this login user",example:"12345678-90ab-cdef-fedc-ab0987654321"},neo4jId:{type:"string",nullable:!0,description:"The id of this user in the neo4j database.\n\nIf null after initialization, there was an error.\nMust be unique as relation to GropiusUser is 1:1."},username:{type:"string",description:"The plain text username of the user.\nMust be kept in sync with username in backend.\n\nCurrently has no use outside the userpass strategy"},revokeTokensBefore:{format:"date-time",type:"string",description:"All tokens (INCLUDING access tokens) issued to this user **before** this date are no longer valid.\n\nUsed to 'emergency'-Revoke tokens"}},required:["id","neo4jId","username","revokeTokensBefore"],title:"LoginUser"}}}},401:{description:"If not logged in or requesting a non-self user and not admin"},404:{description:"If no user with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/login/user/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Get any user object by id",description:{content:"Get the user object of any user by its id.\n\nNeeds admin permission for any user other than the one sending the request\n(equivalen to self query).",type:"text/plain"},url:{path:["login","user",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of the user to get the details for",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Get logged in user details",permalink:"/gropius-backend-docs/rest/login-service/users-controller-get-own-user-6"},next:{title:"NOT IMPLEMENTED! Update an existing user object",permalink:"/gropius-backend-docs/rest/login-service/users-controller-edit-user-9"}},k={},v=[{value:"Request",id:"request",level:2}],T={toc:v},I="wrapper";function q(e){let{components:t,...s}=e;return(0,i.kt)(I,(0,n.Z)({},T,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get any user object by id"),(0,i.kt)(o(),{method:"get",path:"/login/user/{id}",mdxType:"MethodEndpoint"}),(0,i.kt)(l(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Get the user object of any user by its id."),(0,i.kt)("p",null,"Needs admin permission for any user other than the one sending the request\n(equivalen to self query)."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The uuid string of the user to get the details for",schema:{format:"uuid",type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"If existing and permitted, the user details of the requested user")),(0,i.kt)("div",null,(0,i.kt)(u.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(h.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique ID of this login user",example:"12345678-90ab-cdef-fedc-ab0987654321"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"neo4jId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The id of this user in the neo4j database.\n\nIf null after initialization, there was an error.\nMust be unique as relation to GropiusUser is 1:1."},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The plain text username of the user.\nMust be kept in sync with username in backend.\n\nCurrently has no use outside the userpass strategy"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"revokeTokensBefore",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",description:"All tokens (INCLUDING access tokens) issued to this user **before** this date are no longer valid.\n\nUsed to 'emergency'-Revoke tokens"},mdxType:"SchemaItem"})))),(0,i.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "id": "12345678-90ab-cdef-fedc-ab0987654321",\n  "neo4jId": "string",\n  "username": "string",\n  "revokeTokensBefore": "2024-07-03T21:52:34.357Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(y.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"If not logged in or requesting a non-self user and not admin")),(0,i.kt)("div",null)),(0,i.kt)(y.default,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"If no user with the given id was found")),(0,i.kt)("div",null))))))}q.isMDXComponent=!0}}]);