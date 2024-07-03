"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10969],{428539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>g,metadata:()=>v,toc:()=>k});var i=n(487462),r=(n(667294),n(603905)),a=n(258219),s=(n(162316),n(580667)),c=n.n(s),o=n(524228),l=n.n(o),d=n(909487),p=n(241429),u=n(905397),h=n(504667),m=n(809472),f=n(685162);const g={id:"auth-client-controller-create-client-secret-30",title:"Generate and return new client secret for auth client",description:"Generates a new client secret for the specified auth client.",sidebar_label:"Generate and return new client secret for auth client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_createClientSecret_30",description:"Generates a new client secret for the specified auth client.\n\n**NOTE**: The returned value includes the secret text that is the actual secret.\nIt can **NOT** be retrieved later on.\nThe censored version and fingerprint will be returned too for reference.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client to create the secret for",schema:{format:"uuid",type:"string"}}],responses:{201:{description:"If creation succeeded, the created client secret including the censored version and the fingerprint.",content:{"application/json":{schema:{type:"object",properties:{secretText:{type:"string",description:"The generated client secret text.\nThis is the data that must be given for request that require authentication",example:"a01b23c45d67e89f"},censored:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},fingerprint:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"}},required:["secretText","censored","fingerprint"],title:"CreateAuthClientSecretResponse"}}}},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"post",path:"/login/client/{id}/clientSecret",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Generate and return new client secret for auth client",description:{content:"Generates a new client secret for the specified auth client.\n\n**NOTE**: The returned value includes the secret text that is the actual secret.\nIt can **NOT** be retrieved later on.\nThe censored version and fingerprint will be returned too for reference.",type:"text/plain"},url:{path:["login","client",":id","clientSecret"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing auth client to create the secret for",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},y=void 0,v={unversionedId:"login-service/auth-client-controller-create-client-secret-30",id:"login-service/auth-client-controller-create-client-secret-30",title:"Generate and return new client secret for auth client",description:"Generates a new client secret for the specified auth client.",source:"@site/rest-docs/login-service/auth-client-controller-create-client-secret-30.api.mdx",sourceDirName:"login-service",slug:"/login-service/auth-client-controller-create-client-secret-30",permalink:"/gropius-backend-docs/rest/login-service/auth-client-controller-create-client-secret-30",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-client-controller-create-client-secret-30",title:"Generate and return new client secret for auth client",description:"Generates a new client secret for the specified auth client.",sidebar_label:"Generate and return new client secret for auth client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_createClientSecret_30",description:"Generates a new client secret for the specified auth client.\n\n**NOTE**: The returned value includes the secret text that is the actual secret.\nIt can **NOT** be retrieved later on.\nThe censored version and fingerprint will be returned too for reference.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client to create the secret for",schema:{format:"uuid",type:"string"}}],responses:{201:{description:"If creation succeeded, the created client secret including the censored version and the fingerprint.",content:{"application/json":{schema:{type:"object",properties:{secretText:{type:"string",description:"The generated client secret text.\nThis is the data that must be given for request that require authentication",example:"a01b23c45d67e89f"},censored:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},fingerprint:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"}},required:["secretText","censored","fingerprint"],title:"CreateAuthClientSecretResponse"}}}},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"post",path:"/login/client/{id}/clientSecret",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"Generate and return new client secret for auth client",description:{content:"Generates a new client secret for the specified auth client.\n\n**NOTE**: The returned value includes the secret text that is the actual secret.\nIt can **NOT** be retrieved later on.\nThe censored version and fingerprint will be returned too for reference.",type:"text/plain"},url:{path:["login","client",":id","clientSecret"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing auth client to create the secret for",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"List all client secrets (censored) of auth client",permalink:"/gropius-backend-docs/rest/login-service/auth-client-controller-get-client-secrets-29"},next:{title:"Delete a client secret of auch client",permalink:"/gropius-backend-docs/rest/login-service/auth-client-controller-delete-client-secret-31"}},b={},k=[{value:"Request",id:"request",level:2}],T={toc:k},x="wrapper";function w(e){let{components:t,...n}=e;return(0,r.kt)(x,(0,i.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"Generate and return new client secret for auth client"),(0,r.kt)(c(),{method:"post",path:"/login/client/{id}/clientSecret",mdxType:"MethodEndpoint"}),(0,r.kt)(l(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"Generates a new client secret for the specified auth client."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The returned value includes the secret text that is the actual secret.\nIt can ",(0,r.kt)("strong",{parentName:"p"},"NOT")," be retrieved later on.\nThe censored version and fingerprint will be returned too for reference."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client to create the secret for",schema:{format:"uuid",type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(f.default,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"If creation succeeded, the created client secret including the censored version and the fingerprint.")),(0,r.kt)("div",null,(0,r.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(f.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(f.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(h.Z,{collapsible:!1,name:"secretText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The generated client secret text.\nThis is the data that must be given for request that require authentication",example:"a01b23c45d67e89f"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"censored",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},mdxType:"SchemaItem"}),(0,r.kt)(h.Z,{collapsible:!1,name:"fingerprint",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"},mdxType:"SchemaItem"})))),(0,r.kt)(f.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(u.Z,{responseExample:'{\n  "secretText": "a01b23c45d67e89f",\n  "censored": "1a2b3**********",\n  "fingerprint": "0123456789abcdef"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(f.default,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"If no id was given or no auth client with the given id was found")),(0,r.kt)("div",null))))))}w.isMDXComponent=!0}}]);