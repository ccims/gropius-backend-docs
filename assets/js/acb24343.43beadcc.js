"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49897],{202110:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>y,toc:()=>b});var n=i(487462),s=(i(667294),i(603905)),a=i(258219),r=(i(162316),i(580667)),o=i.n(r),l=i(524228),d=i.n(l),p=i(909487),c=(i(241429),i(905397)),u=i(504667),m=i(809472),h=i(685162);const g={id:"register-controller-admin-link-4",title:"Links new authentication with any user by id",description:"Links a new authentication with any user specified by id",sidebar_label:"Links new authentication with any user by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"RegisterController_adminLink_4",description:"Links a new authentication with any user specified by id\n\nNeeds admin permissions\n\nA (still) valid registration token is needed.\nAfter a successful linking, the expiration of the activeLogin and loginData will be updated accoringly",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{register_token:{type:"string",description:'The register token issued during as result of the oauth registration flow.\nScope of the token must contain "login-register".\n\nMust be given.',example:"registration.token.jwt"},userIdToLink:{type:"string",description:"The uuid string of ae existing `LoginUser` with which to link the authentication behind the registration token",example:"12345678-90ab-cdef-fedc-ab0987654321"}},required:["register_token","userIdToLink"],title:"AdminLinkUserInput"}}}},responses:{200:{description:"If successful, the default response with operation 'admin-link'",content:{"application/json":{schema:{type:"object",properties:{operation:{type:"string",description:"A string representation of the operation performed",example:"self-register"},result:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},time:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2024-07-03T21:50:49.978Z"}},required:["operation","result","time"],title:"DefaultReturn"}}}},201:{description:"",content:{"application/json":{schema:{type:"object",properties:{operation:{type:"string",description:"A string representation of the operation performed",example:"self-register"},result:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},time:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2024-07-03T21:50:49.978Z"}},required:["operation","result","time"],title:"DefaultReturn"}}}},401:{description:"If not an admin is logged in, the given registration token is not/no longer valid or the registration time frame has expired"},404:{description:"If the specified user id did not match any existing user"}},tags:["login-api"],security:[{bearer:[]}],method:"post",path:"/login/registration/admin-link",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{register_token:"registration.token.jwt",userIdToLink:"12345678-90ab-cdef-fedc-ab0987654321"},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Links new authentication with any user by id",description:{content:"Links a new authentication with any user specified by id\n\nNeeds admin permissions\n\nA (still) valid registration token is needed.\nAfter a successful linking, the expiration of the activeLogin and loginData will be updated accoringly",type:"text/plain"},url:{path:["login","registration","admin-link"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},f=void 0,y={unversionedId:"login-service/register-controller-admin-link-4",id:"login-service/register-controller-admin-link-4",title:"Links new authentication with any user by id",description:"Links a new authentication with any user specified by id",source:"@site/rest-docs/login-service/register-controller-admin-link-4.api.mdx",sourceDirName:"login-service",slug:"/login-service/register-controller-admin-link-4",permalink:"/gropius-backend-docs/rest/login-service/register-controller-admin-link-4",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"register-controller-admin-link-4",title:"Links new authentication with any user by id",description:"Links a new authentication with any user specified by id",sidebar_label:"Links new authentication with any user by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"RegisterController_adminLink_4",description:"Links a new authentication with any user specified by id\n\nNeeds admin permissions\n\nA (still) valid registration token is needed.\nAfter a successful linking, the expiration of the activeLogin and loginData will be updated accoringly",parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{register_token:{type:"string",description:'The register token issued during as result of the oauth registration flow.\nScope of the token must contain "login-register".\n\nMust be given.',example:"registration.token.jwt"},userIdToLink:{type:"string",description:"The uuid string of ae existing `LoginUser` with which to link the authentication behind the registration token",example:"12345678-90ab-cdef-fedc-ab0987654321"}},required:["register_token","userIdToLink"],title:"AdminLinkUserInput"}}}},responses:{200:{description:"If successful, the default response with operation 'admin-link'",content:{"application/json":{schema:{type:"object",properties:{operation:{type:"string",description:"A string representation of the operation performed",example:"self-register"},result:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},time:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2024-07-03T21:50:49.978Z"}},required:["operation","result","time"],title:"DefaultReturn"}}}},201:{description:"",content:{"application/json":{schema:{type:"object",properties:{operation:{type:"string",description:"A string representation of the operation performed",example:"self-register"},result:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},time:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2024-07-03T21:50:49.978Z"}},required:["operation","result","time"],title:"DefaultReturn"}}}},401:{description:"If not an admin is logged in, the given registration token is not/no longer valid or the registration time frame has expired"},404:{description:"If the specified user id did not match any existing user"}},tags:["login-api"],security:[{bearer:[]}],method:"post",path:"/login/registration/admin-link",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},jsonRequestBodyExample:{register_token:"registration.token.jwt",userIdToLink:"12345678-90ab-cdef-fedc-ab0987654321"},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Links new authentication with any user by id",description:{content:"Links a new authentication with any user specified by id\n\nNeeds admin permissions\n\nA (still) valid registration token is needed.\nAfter a successful linking, the expiration of the activeLogin and loginData will be updated accoringly",type:"text/plain"},url:{path:["login","registration","admin-link"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Link new authentication with current user",permalink:"/gropius-backend-docs/rest/login-service/register-controller-self-link-3"},next:{title:"List all users in the system",permalink:"/gropius-backend-docs/rest/login-service/users-controller-list-all-users-5"}},k={},b=[{value:"Request",id:"request",level:2}],v={toc:b},T="wrapper";function w(e){let{components:t,...i}=e;return(0,s.kt)(T,(0,n.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Links new authentication with any user by id"),(0,s.kt)(o(),{method:"post",path:"/login/registration/admin-link",mdxType:"MethodEndpoint"}),(0,s.kt)(d(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Links a new authentication with any user specified by id"),(0,s.kt)("p",null,"Needs admin permissions"),(0,s.kt)("p",null,"A (still) valid registration token is needed.\nAfter a successful linking, the expiration of the activeLogin and loginData will be updated accoringly"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(h.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(u.Z,{collapsible:!1,name:"register_token",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The register token issued during as result of the oauth registration flow.\nScope of the token must contain "login-register".\n\nMust be given.',example:"registration.token.jwt"},mdxType:"SchemaItem"}),(0,s.kt)(u.Z,{collapsible:!1,name:"userIdToLink",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The uuid string of ae existing `LoginUser` with which to link the authentication behind the registration token",example:"12345678-90ab-cdef-fedc-ab0987654321"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"If successful, the default response with operation 'admin-link'")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(u.Z,{collapsible:!1,name:"operation",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A string representation of the operation performed",example:"self-register"},mdxType:"SchemaItem"}),(0,s.kt)(u.Z,{collapsible:!1,name:"result",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`success`, `failed`]",schema:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(u.Z,{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2024-07-03T21:50:49.978Z"},mdxType:"SchemaItem"})))),(0,s.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "operation": "self-register",\n  "result": "success",\n  "time": "2024-07-03T21:52:34.354Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.default,{label:"201",value:"201",mdxType:"TabItem"},(0,s.kt)("div",null),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(u.Z,{collapsible:!1,name:"operation",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A string representation of the operation performed",example:"self-register"},mdxType:"SchemaItem"}),(0,s.kt)(u.Z,{collapsible:!1,name:"result",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`success`, `failed`]",schema:{description:'The result of the operation.\nDefaults to "success"',example:"success",default:"success",enum:["success","failed"],type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(u.Z,{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",description:"The time the operation was performed.\nDefaults to the current date+time",default:"2024-07-03T21:50:49.978Z"},mdxType:"SchemaItem"})))),(0,s.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "operation": "self-register",\n  "result": "success",\n  "time": "2024-07-03T21:52:34.354Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"If not an admin is logged in, the given registration token is not/no longer valid or the registration time frame has expired")),(0,s.kt)("div",null)),(0,s.kt)(h.default,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"If the specified user id did not match any existing user")),(0,s.kt)("div",null))))))}w.isMDXComponent=!0}}]);