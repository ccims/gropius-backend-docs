"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8337],{361494:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(487462),a=(i(667294),i(603905));const r={id:"api_login_check_registration_token_service.CheckRegistrationTokenService",title:"Class: CheckRegistrationTokenService",sidebar_label:"CheckRegistrationTokenService",custom_edit_url:null},o=void 0,s={unversionedId:"login-service-api/classes/api_login_check_registration_token_service.CheckRegistrationTokenService",id:"login-service-api/classes/api_login_check_registration_token_service.CheckRegistrationTokenService",title:"Class: CheckRegistrationTokenService",description:"api-login/check-registration-token.service.CheckRegistrationTokenService",source:"@site/docs/login-service-api/classes/api_login_check_registration_token_service.CheckRegistrationTokenService.md",sourceDirName:"login-service-api/classes",slug:"/login-service-api/classes/api_login_check_registration_token_service.CheckRegistrationTokenService",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_check_registration_token_service.CheckRegistrationTokenService",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_login_check_registration_token_service.CheckRegistrationTokenService",title:"Class: CheckRegistrationTokenService",sidebar_label:"CheckRegistrationTokenService",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"CheckAccessTokenGuard",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_check_access_token_guard.CheckAccessTokenGuard"},next:{title:"CreateAuthClientSecretResponse",permalink:"/gropius-backend-docs/login-service-api/classes/api_login_dto_create_auth_client_secret_dto.CreateAuthClientSecretResponse"}},l={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"activeLoginService",id:"activeloginservice",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"logger",id:"logger",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"loginDataService",id:"logindataservice",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"tokenService",id:"tokenservice",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"checkActiveLoginValid",id:"checkactiveloginvalid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getActiveLoginAndLoginDataForToken",id:"getactiveloginandlogindatafortoken",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"verifyUserMatches",id:"verifyusermatches",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4}],d={toc:c},p="wrapper";function k(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/modules/api_login_check_registration_token_service"},"api-login/check-registration-token.service"),".CheckRegistrationTokenService"),(0,a.kt)("p",null,"Service to validate a registration token and retrieve the referenced nodes"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new CheckRegistrationTokenService"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"tokenService"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"loginDataService"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"activeLoginService"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tokenService")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/backend_services_token_service.TokenService"},(0,a.kt)("inlineCode",{parentName:"a"},"TokenService")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"loginDataService")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_services_user_login_data_service.UserLoginDataService"},(0,a.kt)("inlineCode",{parentName:"a"},"UserLoginDataService")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"activeLoginService")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_services_active_login_service.ActiveLoginService"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveLoginService")))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L19"},"login-service/src/api-login/check-registration-token.service.ts:19")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"activeloginservice"},"activeLoginService"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"activeLoginService"),": ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_services_active_login_service.ActiveLoginService"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveLoginService"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L22"},"login-service/src/api-login/check-registration-token.service.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"logger"},"logger"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"logger"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L18"},"login-service/src/api-login/check-registration-token.service.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"logindataservice"},"loginDataService"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"loginDataService"),": ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_services_user_login_data_service.UserLoginDataService"},(0,a.kt)("inlineCode",{parentName:"a"},"UserLoginDataService"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L21"},"login-service/src/api-login/check-registration-token.service.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tokenservice"},"tokenService"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"tokenService"),": ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/backend_services_token_service.TokenService"},(0,a.kt)("inlineCode",{parentName:"a"},"TokenService"))),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L20"},"login-service/src/api-login/check-registration-token.service.ts:20")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"checkactiveloginvalid"},"checkActiveLoginValid"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"checkActiveLoginValid"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"activeLogin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"loginData"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"activeLoginId"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Checks wether both active login and login data are given and valid."),(0,a.kt)("p",null,"Valid means not set invalid and not expired.\nFor the loginData it is checked, that it is still in the ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/enums/model_postgres_UserLoginData_entity.LoginState#waiting_for_register"},"LoginState.WAITING_FOR_REGISTER")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"activeLogin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_ActiveLogin_entity.ActiveLogin"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveLogin"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The activeLog innstance to check. Optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"loginData")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_UserLoginData_entity.UserLoginData"},(0,a.kt)("inlineCode",{parentName:"a"},"UserLoginData"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The loginData instance to check. Optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"activeLoginId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The id of the activeLogin instance. Just used for error messages. Required")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"UnauthorizedException If either activeLogin or loginData are not given or invalid in any way."),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L36"},"login-service/src/api-login/check-registration-token.service.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getactiveloginandlogindatafortoken"},"getActiveLoginAndLoginDataForToken"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getActiveLoginAndLoginDataForToken"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"token"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userMustBe?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"activeLogin"),": ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_ActiveLogin_entity.ActiveLogin"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveLogin"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"loginData"),": ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_UserLoginData_entity.UserLoginData"},(0,a.kt)("inlineCode",{parentName:"a"},"UserLoginData")),"  }",">"),(0,a.kt)("p",null,"Validates a registration token and returns the loginData as well as activeLogin that created it."),(0,a.kt)("p",null,"Additionally checks that the user linked to the loginData is the same as a given user.\nThis can be used to check that new registrations are only linked with oneself and not other user accounts"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The token string to be validated")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"userMustBe?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_LoginUser_entity.LoginUser"},(0,a.kt)("inlineCode",{parentName:"a"},"LoginUser"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"activeLogin"),": ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_ActiveLogin_entity.ActiveLogin"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveLogin"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"loginData"),": ",(0,a.kt)("a",{parentName:"p",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_UserLoginData_entity.UserLoginData"},(0,a.kt)("inlineCode",{parentName:"a"},"UserLoginData")),"  }",">"),(0,a.kt)("p",null,"The loginData and activeLogin objects that created the given registration token"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"UnauthorizedException If no token is given, the token is invalid,\nthe referenced activeLogin or loginData don't exist or are invalid or the user does not match"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L111"},"login-service/src/api-login/check-registration-token.service.ts:111")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verifyusermatches"},"verifyUserMatches"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"verifyUserMatches"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"loginData"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userMustBe?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Verifies that the loginData is for the exact user specified."),(0,a.kt)("p",null,"Cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the loginData has no user, the check passes."),(0,a.kt)("li",{parentName:"ul"},"If user is not given/undefined, the login data must be unassigned and have no user."),(0,a.kt)("li",{parentName:"ul"},"If a user is given, the user of the loginData must be the same as the one given.")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"loginData")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_UserLoginData_entity.UserLoginData"},(0,a.kt)("inlineCode",{parentName:"a"},"UserLoginData"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The loginData for which to verify the user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"userMustBe?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/gropius-backend-docs/login-service-api/classes/model_postgres_LoginUser_entity.LoginUser"},(0,a.kt)("inlineCode",{parentName:"a"},"LoginUser"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The user to verify or undefined")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"UnauthorizedException If the user did not match as specified above."),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ccims/gropius-backend/blob/573f496/login-service/src/api-login/check-registration-token.service.ts#L76"},"login-service/src/api-login/check-registration-token.service.ts:76")))}k.isMDXComponent=!0}}]);