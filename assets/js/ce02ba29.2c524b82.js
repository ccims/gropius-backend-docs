"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96077],{521540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(487462),i=(n(667294),n(603905));const l={id:"api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput",title:"Class: CreateOrUpdateAuthClientInput",sidebar_label:"CreateOrUpdateAuthClientInput",custom_edit_url:null},r=void 0,p={unversionedId:"login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput",id:"login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput",title:"Class: CreateOrUpdateAuthClientInput",description:"api-login/dto/create-update-auth-client.dto.CreateOrUpdateAuthClientInput",source:"@site/docs/login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput.md",sourceDirName:"login-service-api/classes",slug:"/login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput",title:"Class: CreateOrUpdateAuthClientInput",sidebar_label:"CreateOrUpdateAuthClientInput",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"CreateAuthClientSecretResponse",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_dto_create_auth_client_secret_dto.CreateAuthClientSecretResponse"},next:{title:"CensoredClientSecret",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_dto_get_auth_client_dto.CensoredClientSecret"}},o={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"redirectUrls",id:"redirecturls",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"requiresSecret",id:"requiressecret",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"check",id:"check",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/modules/api_login_dto_create_update_auth_client_dto"},"api-login/dto/create-update-auth-client.dto"),".CreateOrUpdateAuthClientInput"),(0,i.kt)("p",null,"Input to ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /login/client")," and PUT /login/client/:id`\nContains data to create or modify a auth client"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new CreateOrUpdateAuthClientInput"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"isvalid"},"isValid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"isValid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If given, sets the validity flag of the auth client."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on create"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"true\n")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/dto/create-update-auth-client.dto.ts#L31"},"login-service/src/api-login/dto/create-update-auth-client.dto.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The name to set for the auth client."),(0,i.kt)("p",null,"If given, must be non empty and match /^","[a-zA-Z0-9+/","-","_= ]","+$/g"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/dto/create-update-auth-client.dto.ts#L14"},"login-service/src/api-login/dto/create-update-auth-client.dto.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"redirecturls"},"redirectUrls"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"redirectUrls"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"A list of url strings containing at least one url.\nThese are the URLs the oauth autorize endpoint will redirect back to"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," on create"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'["https://example.com/oauth/callback?query=value"]\n')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/dto/create-update-auth-client.dto.ts#L23"},"login-service/src/api-login/dto/create-update-auth-client.dto.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requiressecret"},"requiresSecret"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"requiresSecret"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If given, setns the need for the client to authenticate using a secret"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on create"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"false\n")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/dto/create-update-auth-client.dto.ts#L39"},"login-service/src/api-login/dto/create-update-auth-client.dto.ts:39")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"check"},"check"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"check"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateOrUpdateAuthClientInput"))),(0,i.kt)("p",null,"Checks a given ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateOrUpdateAuthClientInput")," for validity."),(0,i.kt)("p",null,"Valid, if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," is not given or a non empty string matching /^","[a-zA-Z0-9+/","-","_= ]","+$/g"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redirectUrls")," is not given or an array of at least one url"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isValid")," is not given or a boolean"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requiresSecret")," is not given or a boolean")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateOrUpdateAuthClientInput"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The input instance to check")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/api_login_dto_create_update_auth_client_dto.CreateOrUpdateAuthClientInput"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateOrUpdateAuthClientInput"))),(0,i.kt)("p",null,"The given instance unchanged"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/dto/create-update-auth-client.dto.ts#L52"},"login-service/src/api-login/dto/create-update-auth-client.dto.ts:52")))}c.isMDXComponent=!0}}]);