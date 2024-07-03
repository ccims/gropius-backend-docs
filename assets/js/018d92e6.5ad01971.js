"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83898],{638199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=a(487462),i=(a(667294),a(603905));const r={id:"oauth_server_oauth_token_middleware.OauthTokenMiddleware",title:"Class: OauthTokenMiddleware",sidebar_label:"OauthTokenMiddleware",custom_edit_url:null},l=void 0,d={unversionedId:"login-service-api/classes/oauth_server_oauth_token_middleware.OauthTokenMiddleware",id:"login-service-api/classes/oauth_server_oauth_token_middleware.OauthTokenMiddleware",title:"Class: OauthTokenMiddleware",description:"oauth-server/oauth-token.middleware.OauthTokenMiddleware",source:"@site/docs/login-service-api/classes/oauth_server_oauth_token_middleware.OauthTokenMiddleware.md",sourceDirName:"login-service-api/classes",slug:"/login-service-api/classes/oauth_server_oauth_token_middleware.OauthTokenMiddleware",permalink:"/gropius-backend-docs/login-service-api/classes/oauth_server_oauth_token_middleware.OauthTokenMiddleware",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"oauth_server_oauth_token_middleware.OauthTokenMiddleware",title:"Class: OauthTokenMiddleware",sidebar_label:"OauthTokenMiddleware",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"OauthTokenController",permalink:"/gropius-backend-docs/login-service-api/classes/oauth_server_oauth_token_controller.OauthTokenController"},next:{title:"PostCredentialsMiddleware",permalink:"/gropius-backend-docs/login-service-api/classes/oauth_server_post_credentials_middleware.PostCredentialsMiddleware"}},o={},s=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"authClientService",id:"authclientservice",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"logger",id:"logger",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"postCredentialsMiddleware",id:"postcredentialsmiddleware",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"strategiesMiddleware",id:"strategiesmiddleware",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"tokenResponseCodeMiddleware",id:"tokenresponsecodemiddleware",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"tokenService",id:"tokenservice",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods",level:2},{value:"checkGivenClientSecretValidOrNotRequired",id:"checkgivenclientsecretvalidornotrequired",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getCallingClient",id:"getcallingclient",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"use",id:"use",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-9",level:4}],p={toc:s},k="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/modules/oauth_server_oauth_token_middleware"},"oauth-server/oauth-token.middleware"),".OauthTokenMiddleware"),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NestMiddleware"))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new OauthTokenMiddleware"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"tokenService"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"authClientService"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenResponseCodeMiddleware"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"strategiesMiddleware"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"postCredentialsMiddleware"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenService")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/backend_services_token_service.TokenService"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenService")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"authClientService")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_services_auth_client_service.AuthClientService"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthClientService")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenResponseCodeMiddleware")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/oauth_server_token_authorization_code_middleware.TokenAuthorizationCodeMiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenAuthorizationCodeMiddleware")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"strategiesMiddleware")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/strategies_strategies_middleware.StrategiesMiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"StrategiesMiddleware")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"postCredentialsMiddleware")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/oauth_server_post_credentials_middleware.PostCredentialsMiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"PostCredentialsMiddleware")))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L19"},"login-service/src/oauth-server/oauth-token.middleware.ts:19")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"authclientservice"},"authClientService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"authClientService"),": ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_services_auth_client_service.AuthClientService"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthClientService"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L21"},"login-service/src/oauth-server/oauth-token.middleware.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"logger"},"logger"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"logger"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L17"},"login-service/src/oauth-server/oauth-token.middleware.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"postcredentialsmiddleware"},"postCredentialsMiddleware"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"postCredentialsMiddleware"),": ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/oauth_server_post_credentials_middleware.PostCredentialsMiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"PostCredentialsMiddleware"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L24"},"login-service/src/oauth-server/oauth-token.middleware.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"strategiesmiddleware"},"strategiesMiddleware"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"strategiesMiddleware"),": ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/strategies_strategies_middleware.StrategiesMiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"StrategiesMiddleware"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L23"},"login-service/src/oauth-server/oauth-token.middleware.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tokenresponsecodemiddleware"},"tokenResponseCodeMiddleware"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"tokenResponseCodeMiddleware"),": ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/oauth_server_token_authorization_code_middleware.TokenAuthorizationCodeMiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenAuthorizationCodeMiddleware"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L22"},"login-service/src/oauth-server/oauth-token.middleware.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tokenservice"},"tokenService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"tokenService"),": ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/backend_services_token_service.TokenService"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenService"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L20"},"login-service/src/oauth-server/oauth-token.middleware.ts:20")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"checkgivenclientsecretvalidornotrequired"},"checkGivenClientSecretValidOrNotRequired"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"checkGivenClientSecretValidOrNotRequired"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"givenSecret?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"client")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_AuthClient_entity.AuthClient"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthClient")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"givenSecret?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L27"},"login-service/src/oauth-server/oauth-token.middleware.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcallingclient"},"getCallingClient"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"getCallingClient"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"req"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"findAnyWithoutSecret?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_AuthClient_entity.AuthClient"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthClient")),">"),(0,i.kt)("p",null,"Performs the OAuth client authentication by checking the given client_id and client_secret\nin the Authorization header and in the body (both allowed according to OAuth spec)."),(0,i.kt)("p",null,"Flag can be set to return any client without secrets if desired to allow logins without client"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"req")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The request object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"findAnyWithoutSecret")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," to find any client that has no secret => allowing for login without a known client")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_AuthClient_entity.AuthClient"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthClient")),">"),(0,i.kt)("p",null,"The auth client that requested (or any without secret if flag ist set)\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if credentials invalid or none given"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L55"},"login-service/src/oauth-server/oauth-token.middleware.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"use"},"use"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"use"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"req"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"res"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"req")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Request"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ParamsDictionary"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"ParsedQs"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"res")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Response"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,"NestMiddleware.use"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/oauth-server/oauth-token.middleware.ts#L105"},"login-service/src/oauth-server/oauth-token.middleware.ts:105")))}m.isMDXComponent=!0}}]);