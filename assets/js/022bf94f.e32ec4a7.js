"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59895],{891551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>h,metadata:()=>b,toc:()=>k});var a=n(487462),i=(n(667294),n(603905)),s=n(258219),r=(n(162316),n(580667)),o=n.n(r),l=n(524228),c=n.n(l),p=n(909487),d=n(241429),y=n(905397),g=n(504667),m=n(809472),u=n(685162);const h={id:"strategy-instances-controller-get-all-strategy-instances-15",title:"List all strategy instances (of type)",description:"Gets the list of all Strategy instances.",sidebar_label:"List all strategy instances (of type)",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StrategyInstancesController_getAllStrategyInstances_15",description:"Gets the list of all Strategy instances.\nIf a type is specified, only the instances of that type will be retrieved.\n\nIf a non existant strategy type name ist specified, no instances will be returned.",parameters:[{name:"type",required:!1,in:"path",description:"The strategy type name. If not given gets all instances",schema:{type:"string"}}],responses:{200:{description:"The list of all strategy instances",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The unique ID of this strategy instance",example:"12345678-90ab-cdef-fedc-ab0987654321"},name:{type:"string",nullable:!0,description:"An optional human readable name for the strategy.\n\nCan be displayes in a UI etc.\nbut is not necesarrily unique.\n\nCan only contain [A-Za-z0-9_-/+= ]*",example:"Github-Enterprise-Example"},type:{type:"string",description:"The unique string name of the strategy this is an instance of\n\nThe strategy of an instance is set on initialization and **cannot** be changed",example:"userpass"},isLoginActive:{type:"boolean",description:"If `true`, this strategy instance allows login of registered users to retrieve an access token.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false`, users are not allowed to login using this instance.",example:!0},isSelfRegisterActive:{type:"boolean",description:"If `true` users can create an account themselves with the registration token they obtained from this instance.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false` accounts cannot be created without being admin.",example:!0},isSyncActive:{type:"boolean",description:"If `true`, and {@link Strategy.canSync} is `true`,\nthe sync service can retrieve access tokens for ims users from this strategy instnce.\n\nIf `false`, no tokens will be handed out for the instance",example:!1},doesImplicitRegister:{type:"boolean",description:"If `true`, a user automatically gets a registration token,\nif they tried to login and an account was not found but the user provided credentials\n(i.e. sucessfully authenticated with the 3rd party).\nNeeds {@link Strategy.allowsImplicitSignup} to be `true`.\n\nIf `false`, login fails if no known user was found.",example:!1}},required:["id","name","type","isLoginActive","isSelfRegisterActive","isSyncActive","doesImplicitRegister"],title:"StrategyInstance"}}}}}},tags:["login-api"],method:"get",path:"/login/strategy/{type}/instance",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"List all strategy instances (of type)",description:{content:"Gets the list of all Strategy instances.\nIf a type is specified, only the instances of that type will be retrieved.\n\nIf a non existant strategy type name ist specified, no instances will be returned.",type:"text/plain"},url:{path:["login","strategy",":type","instance"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"The strategy type name. If not given gets all instances",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},f=void 0,b={unversionedId:"login-service/strategy-instances-controller-get-all-strategy-instances-15",id:"login-service/strategy-instances-controller-get-all-strategy-instances-15",title:"List all strategy instances (of type)",description:"Gets the list of all Strategy instances.",source:"@site/rest-docs/login-service/strategy-instances-controller-get-all-strategy-instances-15.api.mdx",sourceDirName:"login-service",slug:"/login-service/strategy-instances-controller-get-all-strategy-instances-15",permalink:"/gropius-backend-docs/rest/login-service/strategy-instances-controller-get-all-strategy-instances-15",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"strategy-instances-controller-get-all-strategy-instances-15",title:"List all strategy instances (of type)",description:"Gets the list of all Strategy instances.",sidebar_label:"List all strategy instances (of type)",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StrategyInstancesController_getAllStrategyInstances_15",description:"Gets the list of all Strategy instances.\nIf a type is specified, only the instances of that type will be retrieved.\n\nIf a non existant strategy type name ist specified, no instances will be returned.",parameters:[{name:"type",required:!1,in:"path",description:"The strategy type name. If not given gets all instances",schema:{type:"string"}}],responses:{200:{description:"The list of all strategy instances",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string",description:"The unique ID of this strategy instance",example:"12345678-90ab-cdef-fedc-ab0987654321"},name:{type:"string",nullable:!0,description:"An optional human readable name for the strategy.\n\nCan be displayes in a UI etc.\nbut is not necesarrily unique.\n\nCan only contain [A-Za-z0-9_\\-/+= ]*",example:"Github-Enterprise-Example"},type:{type:"string",description:"The unique string name of the strategy this is an instance of\n\nThe strategy of an instance is set on initialization and **cannot** be changed",example:"userpass"},isLoginActive:{type:"boolean",description:"If `true`, this strategy instance allows login of registered users to retrieve an access token.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false`, users are not allowed to login using this instance.",example:!0},isSelfRegisterActive:{type:"boolean",description:"If `true` users can create an account themselves with the registration token they obtained from this instance.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false` accounts cannot be created without being admin.",example:!0},isSyncActive:{type:"boolean",description:"If `true`, and {@link Strategy.canSync} is `true`,\nthe sync service can retrieve access tokens for ims users from this strategy instnce.\n\nIf `false`, no tokens will be handed out for the instance",example:!1},doesImplicitRegister:{type:"boolean",description:"If `true`, a user automatically gets a registration token,\nif they tried to login and an account was not found but the user provided credentials\n(i.e. sucessfully authenticated with the 3rd party).\nNeeds {@link Strategy.allowsImplicitSignup} to be `true`.\n\nIf `false`, login fails if no known user was found.",example:!1}},required:["id","name","type","isLoginActive","isSelfRegisterActive","isSyncActive","doesImplicitRegister"],title:"StrategyInstance"}}}}}},tags:["login-api"],method:"get",path:"/login/strategy/{type}/instance",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"List all strategy instances (of type)",description:{content:"Gets the list of all Strategy instances.\nIf a type is specified, only the instances of that type will be retrieved.\n\nIf a non existant strategy type name ist specified, no instances will be returned.",type:"text/plain"},url:{path:["login","strategy",":type","instance"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"The strategy type name. If not given gets all instances",type:"text/plain"},type:"any",value:"",key:"type"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Create new strategy instance",permalink:"/gropius-backend-docs/rest/login-service/strategy-instances-controller-create-new-instance-18"},next:{title:"Create new strategy instance",permalink:"/gropius-backend-docs/rest/login-service/strategy-instances-controller-create-new-instance-19"}},v={},k=[{value:"Request",id:"request",level:2}],I={toc:k},S="wrapper";function w(e){let{components:t,...n}=e;return(0,i.kt)(S,(0,a.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"List all strategy instances (of type)"),(0,i.kt)(o(),{method:"get",path:"/login/strategy/{type}/instance",mdxType:"MethodEndpoint"}),(0,i.kt)(c(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Gets the list of all Strategy instances.\nIf a type is specified, only the instances of that type will be retrieved."),(0,i.kt)("p",null,"If a non existant strategy type name ist specified, no instances will be returned."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"type",required:!1,in:"path",description:"The strategy type name. If not given gets all instances",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The list of all strategy instances")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(g.Z,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique ID of this strategy instance",example:"12345678-90ab-cdef-fedc-ab0987654321"},mdxType:"SchemaItem"}),(0,i.kt)(g.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"An optional human readable name for the strategy.\n\nCan be displayes in a UI etc.\nbut is not necesarrily unique.\n\nCan only contain [A-Za-z0-9_\\-/+= ]*",example:"Github-Enterprise-Example"},mdxType:"SchemaItem"}),(0,i.kt)(g.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique string name of the strategy this is an instance of\n\nThe strategy of an instance is set on initialization and **cannot** be changed",example:"userpass"},mdxType:"SchemaItem"}),(0,i.kt)(g.Z,{collapsible:!1,name:"isLoginActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true`, this strategy instance allows login of registered users to retrieve an access token.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false`, users are not allowed to login using this instance.",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(g.Z,{collapsible:!1,name:"isSelfRegisterActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true` users can create an account themselves with the registration token they obtained from this instance.\nAdditionally the strategy must have {@link Strategy.canLoginRegister} set to `true`\n\nIf `false` accounts cannot be created without being admin.",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(g.Z,{collapsible:!1,name:"isSyncActive",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true`, and {@link Strategy.canSync} is `true`,\nthe sync service can retrieve access tokens for ims users from this strategy instnce.\n\nIf `false`, no tokens will be handed out for the instance",example:!1},mdxType:"SchemaItem"}),(0,i.kt)(g.Z,{collapsible:!1,name:"doesImplicitRegister",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If `true`, a user automatically gets a registration token,\nif they tried to login and an account was not found but the user provided credentials\n(i.e. sucessfully authenticated with the 3rd party).\nNeeds {@link Strategy.allowsImplicitSignup} to be `true`.\n\nIf `false`, login fails if no known user was found.",example:!1},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(y.Z,{responseExample:'[\n  {\n    "id": "12345678-90ab-cdef-fedc-ab0987654321",\n    "name": "Github-Enterprise-Example",\n    "type": "userpass",\n    "isLoginActive": true,\n    "isSelfRegisterActive": true,\n    "isSyncActive": false,\n    "doesImplicitRegister": false\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}w.isMDXComponent=!0}}]);