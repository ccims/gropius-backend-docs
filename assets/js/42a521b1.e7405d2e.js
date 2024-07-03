"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30356],{251751:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>T,frontMatter:()=>h,metadata:()=>k,toc:()=>v});var s=i(487462),n=(i(667294),i(603905)),a=i(258219),r=(i(162316),i(580667)),o=i.n(r),c=i(524228),l=i.n(c),p=i(909487),d=i(241429),g=i(905397),y=i(504667),m=i(809472),u=i(685162);const h={id:"strategy-instances-controller-get-strategy-instance-17",title:"Get one strategy instance",description:"Gets one strategy instance by the specified id.",sidebar_label:"Get one strategy instance",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StrategyInstancesController_getStrategyInstance_17",description:"Gets one strategy instance by the specified id.\nIf the type is specified, only instances of that type will be looked at",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing strategy instance to get",schema:{format:"uuid",type:"string"}},{name:"type",required:!0,in:"path",description:"The strategy type name of which to search for the instance. Defaults to all types",schema:{type:"string"}}],responses:{200:{description:"The requested strategy instance wiht additional data for its use",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"{@link StrategyInstance.id}"},name:{type:"string",nullable:!0,description:"{@link StrategyInstance.name}"},type:{type:"string",description:"{@link StrategyInstance.type}"},isLoginActive:{type:"boolean",description:"{@link StrategyInstance.isLoginActive}"},isSelfRegisterActive:{type:"boolean",description:"{@link StrategyInstance.isSelfRegisterActive}"},isSyncActive:{type:"boolean",description:"{@link StrategyInstance.isSyncActive}"},doesImplicitRegister:{type:"boolean",description:"{@link StrategyInstance.doesImplicitRegister}"},urls:{description:"All URLs that are relevant for the client whenusing this strategy instance to authenticte",allOf:[{type:"object",properties:{postLogin:{type:"string",description:'The url to post credentials to, to log in using this strategy instance.\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},postRegister:{type:"string",description:'The url to post credentials to, to register or link **without** sync using this strategy instance.\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},postRegisterSync:{type:"string",description:'The url to post credentials to, to register or link **with** avtivated sync functionality\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},redirectLogin:{type:"string",description:"The url to redirect the user to, to log in using this strategy\n\nOn the request, the query parameter `client_id` must be set"},redirectRegister:{type:"string",description:"The url to redirect the user to, to register or link **without** sync using this strategy instance.\n\nOn the request, the query parameter `client_id` must be set"},redirectRegisterSync:{type:"string",description:"The url to redirect the user to, to register or link **with** avtivated sync functionality\n\nOn the request, the query parameter `client_id` must be set"}},required:["redirectLogin","redirectRegister","redirectRegisterSync"],title:"StrategyInstanceUrlsResponse"}]}},required:["id","name","type","isLoginActive","isSelfRegisterActive","isSyncActive","doesImplicitRegister","urls"],title:"StrategyInstanceDetailResponse"}}}},404:{description:"If no strategy with the given id (and type) are found"}},tags:["login-api"],method:"get",path:"/login/strategy/{type}/instance/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Get one strategy instance",description:{content:"Gets one strategy instance by the specified id.\nIf the type is specified, only instances of that type will be looked at",type:"text/plain"},url:{path:["login","strategy",":type","instance",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing strategy instance to get",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The strategy type name of which to search for the instance. Defaults to all types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},f=void 0,k={unversionedId:"login-service/strategy-instances-controller-get-strategy-instance-17",id:"login-service/strategy-instances-controller-get-strategy-instance-17",title:"Get one strategy instance",description:"Gets one strategy instance by the specified id.",source:"@site/rest-docs/login-service/strategy-instances-controller-get-strategy-instance-17.api.mdx",sourceDirName:"login-service",slug:"/login-service/strategy-instances-controller-get-strategy-instance-17",permalink:"/gropius-backend-docs/rest/login-service/strategy-instances-controller-get-strategy-instance-17",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"strategy-instances-controller-get-strategy-instance-17",title:"Get one strategy instance",description:"Gets one strategy instance by the specified id.",sidebar_label:"Get one strategy instance",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StrategyInstancesController_getStrategyInstance_17",description:"Gets one strategy instance by the specified id.\nIf the type is specified, only instances of that type will be looked at",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing strategy instance to get",schema:{format:"uuid",type:"string"}},{name:"type",required:!0,in:"path",description:"The strategy type name of which to search for the instance. Defaults to all types",schema:{type:"string"}}],responses:{200:{description:"The requested strategy instance wiht additional data for its use",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",description:"{@link StrategyInstance.id}"},name:{type:"string",nullable:!0,description:"{@link StrategyInstance.name}"},type:{type:"string",description:"{@link StrategyInstance.type}"},isLoginActive:{type:"boolean",description:"{@link StrategyInstance.isLoginActive}"},isSelfRegisterActive:{type:"boolean",description:"{@link StrategyInstance.isSelfRegisterActive}"},isSyncActive:{type:"boolean",description:"{@link StrategyInstance.isSyncActive}"},doesImplicitRegister:{type:"boolean",description:"{@link StrategyInstance.doesImplicitRegister}"},urls:{description:"All URLs that are relevant for the client whenusing this strategy instance to authenticte",allOf:[{type:"object",properties:{postLogin:{type:"string",description:'The url to post credentials to, to log in using this strategy instance.\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},postRegister:{type:"string",description:'The url to post credentials to, to register or link **without** sync using this strategy instance.\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},postRegisterSync:{type:"string",description:'The url to post credentials to, to register or link **with** avtivated sync functionality\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},redirectLogin:{type:"string",description:"The url to redirect the user to, to log in using this strategy\n\nOn the request, the query parameter `client_id` must be set"},redirectRegister:{type:"string",description:"The url to redirect the user to, to register or link **without** sync using this strategy instance.\n\nOn the request, the query parameter `client_id` must be set"},redirectRegisterSync:{type:"string",description:"The url to redirect the user to, to register or link **with** avtivated sync functionality\n\nOn the request, the query parameter `client_id` must be set"}},required:["redirectLogin","redirectRegister","redirectRegisterSync"],title:"StrategyInstanceUrlsResponse"}]}},required:["id","name","type","isLoginActive","isSelfRegisterActive","isSyncActive","doesImplicitRegister","urls"],title:"StrategyInstanceDetailResponse"}}}},404:{description:"If no strategy with the given id (and type) are found"}},tags:["login-api"],method:"get",path:"/login/strategy/{type}/instance/{id}",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Get one strategy instance",description:{content:"Gets one strategy instance by the specified id.\nIf the type is specified, only instances of that type will be looked at",type:"text/plain"},url:{path:["login","strategy",":type","instance",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing strategy instance to get",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The strategy type name of which to search for the instance. Defaults to all types",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Delete a strategy instance",permalink:"/gropius-backend-docs/rest/login-service/strategy-instances-controller-delete-strategy-instance-22"},next:{title:"Edit an existing strategy instance",permalink:"/gropius-backend-docs/rest/login-service/strategy-instances-controller-update-strategy-instance-21"}},b={},v=[{value:"Request",id:"request",level:2}],S={toc:v},I="wrapper";function T(e){let{components:t,...i}=e;return(0,n.kt)(I,(0,s.Z)({},S,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Get one strategy instance"),(0,n.kt)(o(),{method:"get",path:"/login/strategy/{type}/instance/{id}",mdxType:"MethodEndpoint"}),(0,n.kt)(l(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Gets one strategy instance by the specified id.\nIf the type is specified, only instances of that type will be looked at"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The uuid string of an existing strategy instance to get",schema:{format:"uuid",type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"type",required:!0,in:"path",description:"The strategy type name of which to search for the instance. Defaults to all types",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"The requested strategy instance wiht additional data for its use")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(y.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"{@link StrategyInstance.id}"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"{@link StrategyInstance.name}"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"{@link StrategyInstance.type}"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"isLoginActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"{@link StrategyInstance.isLoginActive}"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"isSelfRegisterActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"{@link StrategyInstance.isSelfRegisterActive}"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"isSyncActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"{@link StrategyInstance.isSyncActive}"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"doesImplicitRegister",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"{@link StrategyInstance.doesImplicitRegister}"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"urls"),(0,n.kt)("span",{className:"openapi-schema__name"}," object"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(y.Z,{collapsible:!1,name:"postLogin",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The url to post credentials to, to log in using this strategy instance.\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"postRegister",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The url to post credentials to, to register or link **without** sync using this strategy instance.\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"postRegisterSync",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The url to post credentials to, to register or link **with** avtivated sync functionality\n\nAdditionally `grant_type? must be set to "password" and the client must authenticate'},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"redirectLogin",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The url to redirect the user to, to log in using this strategy\n\nOn the request, the query parameter `client_id` must be set"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"redirectRegister",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The url to redirect the user to, to register or link **without** sync using this strategy instance.\n\nOn the request, the query parameter `client_id` must be set"},mdxType:"SchemaItem"}),(0,n.kt)(y.Z,{collapsible:!1,name:"redirectRegisterSync",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The url to redirect the user to, to register or link **with** avtivated sync functionality\n\nOn the request, the query parameter `client_id` must be set"},mdxType:"SchemaItem"}))))))),(0,n.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(g.Z,{responseExample:'{\n  "id": "string",\n  "name": "string",\n  "type": "string",\n  "isLoginActive": true,\n  "isSelfRegisterActive": true,\n  "isSyncActive": true,\n  "doesImplicitRegister": true,\n  "urls": {\n    "postLogin": "string",\n    "postRegister": "string",\n    "postRegisterSync": "string",\n    "redirectLogin": "string",\n    "redirectRegister": "string",\n    "redirectRegisterSync": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(u.default,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"If no strategy with the given id (and type) are found")),(0,n.kt)("div",null))))))}T.isMDXComponent=!0}}]);