"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87073],{671007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(487462),i=(n(667294),n(603905));const r={id:"api_login_check_access_token_guard.CheckAccessTokenGuard",title:"Class: CheckAccessTokenGuard",sidebar_label:"CheckAccessTokenGuard",custom_edit_url:null},c=void 0,s={unversionedId:"login-service-api/classes/api_login_check_access_token_guard.CheckAccessTokenGuard",id:"login-service-api/classes/api_login_check_access_token_guard.CheckAccessTokenGuard",title:"Class: CheckAccessTokenGuard",description:"api-login/check-access-token.guard.CheckAccessTokenGuard",source:"@site/docs/login-service-api/classes/api_login_check_access_token_guard.CheckAccessTokenGuard.md",sourceDirName:"login-service-api/classes",slug:"/login-service-api/classes/api_login_check_access_token_guard.CheckAccessTokenGuard",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_check_access_token_guard.CheckAccessTokenGuard",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_login_check_access_token_guard.CheckAccessTokenGuard",title:"Class: CheckAccessTokenGuard",sidebar_label:"CheckAccessTokenGuard",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"AuthClientController",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_auth_clients_controller.AuthClientController"},next:{title:"CheckRegistrationTokenService",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_check_registration_token_service.CheckRegistrationTokenService"}},l={},o=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"backendUserService",id:"backenduserservice",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"logger",id:"logger",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"reflector",id:"reflector",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"tokenService",id:"tokenservice",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"canActivate",id:"canactivate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-5",level:4}],k={toc:o},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/modules/api_login_check_access_token_guard"},"api-login/check-access-token.guard"),".CheckAccessTokenGuard"),(0,i.kt)("p",null,"Guard for checking the presence of an access token in the request.\nIf needed, checks for admin permissions of the user."),(0,i.kt)("p",null,"Used with ",(0,i.kt)("inlineCode",{parentName:"p"},"@UseGuards(CheckAccessTokenGuard)")),(0,i.kt)("p",null,'The access token is expected in the "Authorization" header, prefixed with "Bearer ".\nNot providing a token, a token without prefix or an invalid token will result in a 401 Unauthorized response.'),(0,i.kt)("p",null,"Once access token (and admin permission) were verified sucessfully,\nthe logged in user is written to the request state object"),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CanActivate"))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new CheckAccessTokenGuard"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"tokenService"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reflector"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"backendUserService"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tokenService")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/backend_services_token_service.TokenService"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenService")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"reflector")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Reflector"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"backendUserService")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/backend_services_backend_user_service.BackendUserService"},(0,i.kt)("inlineCode",{parentName:"a"},"BackendUserService")))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-access-token.guard.ts#L27"},"login-service/src/api-login/check-access-token.guard.ts:27")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"backenduserservice"},"backendUserService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"backendUserService"),": ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/backend_services_backend_user_service.BackendUserService"},(0,i.kt)("inlineCode",{parentName:"a"},"BackendUserService"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-access-token.guard.ts#L30"},"login-service/src/api-login/check-access-token.guard.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"logger"},"logger"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"logger"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-access-token.guard.ts#L26"},"login-service/src/api-login/check-access-token.guard.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reflector"},"reflector"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"reflector"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Reflector")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-access-token.guard.ts#L29"},"login-service/src/api-login/check-access-token.guard.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tokenservice"},"tokenService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"tokenService"),": ",(0,i.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/backend_services_token_service.TokenService"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenService"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-access-token.guard.ts#L28"},"login-service/src/api-login/check-access-token.guard.ts:28")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"canactivate"},"canActivate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"canActivate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"context")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ExecutionContext"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,"CanActivate.canActivate"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-access-token.guard.ts#L33"},"login-service/src/api-login/check-access-token.guard.ts:33")))}p.isMDXComponent=!0}}]);