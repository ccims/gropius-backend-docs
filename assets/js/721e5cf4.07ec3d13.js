"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88332],{295851:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>_,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var n=i(487462),r=(i(667294),i(603905)),s=i(258219),a=(i(162316),i(580667)),l=i.n(a),c=i(524228),o=i.n(c),d=i(909487),p=i(241429),h=i(905397),u=i(504667),f=i(809472),g=i(685162);const m={id:"auth-client-controller-get-client-secrets-29",title:"List all client secrets (censored) of auth client",description:"Retrieves all existing client secrets of the specified auth client.",sidebar_label:"List all client secrets (censored) of auth client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_getClientSecrets_29",description:"Retrieves all existing client secrets of the specified auth client.\n\nThe returned secrets only contain the 5 letter prefix (censored client secret text)\nand the fingerprint for identification (for deleting secrets).\nThe original secret text is **NOT** returned.\nIt can only be retrieved once while creating the secret.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client",schema:{format:"uuid",type:"string"}}],responses:{200:{description:"All client secrets of the auth client (censored)",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{censored:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},fingerprint:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"}},required:["censored","fingerprint"],title:"CensoredClientSecret"}}}}},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/login/client/{id}/clientSecret",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"List all client secrets (censored) of auth client",description:{content:"Retrieves all existing client secrets of the specified auth client.\n\nThe returned secrets only contain the 5 letter prefix (censored client secret text)\nand the fingerprint for identification (for deleting secrets).\nThe original secret text is **NOT** returned.\nIt can only be retrieved once while creating the secret.",type:"text/plain"},url:{path:["login","client",":id","clientSecret"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing auth client",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},y=void 0,v={unversionedId:"login-service/auth-client-controller-get-client-secrets-29",id:"login-service/auth-client-controller-get-client-secrets-29",title:"List all client secrets (censored) of auth client",description:"Retrieves all existing client secrets of the specified auth client.",source:"@site/rest-docs/login-service/auth-client-controller-get-client-secrets-29.api.mdx",sourceDirName:"login-service",slug:"/login-service/auth-client-controller-get-client-secrets-29",permalink:"/gropius-backend-docs/rest/login-service/auth-client-controller-get-client-secrets-29",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-client-controller-get-client-secrets-29",title:"List all client secrets (censored) of auth client",description:"Retrieves all existing client secrets of the specified auth client.",sidebar_label:"List all client secrets (censored) of auth client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"AuthClientController_getClientSecrets_29",description:"Retrieves all existing client secrets of the specified auth client.\n\nThe returned secrets only contain the 5 letter prefix (censored client secret text)\nand the fingerprint for identification (for deleting secrets).\nThe original secret text is **NOT** returned.\nIt can only be retrieved once while creating the secret.",parameters:[{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client",schema:{format:"uuid",type:"string"}}],responses:{200:{description:"All client secrets of the auth client (censored)",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{censored:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},fingerprint:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"}},required:["censored","fingerprint"],title:"CensoredClientSecret"}}}}},404:{description:"If no id was given or no auth client with the given id was found"}},tags:["login-api"],security:[{bearer:[]}],method:"get",path:"/login/client/{id}/clientSecret",servers:[],securitySchemes:{oauth2:{type:"oauth2",flows:{},description:"Access token provided by running the oauth flow (and if needed) registering/linking",bearerFormat:"JWT"},bearer:{scheme:"bearer",bearerFormat:"JWT",type:"apiKey",description:"Access token provided after running the oauth flow (and if needed registering/linking)"},api_key:{type:"apiKey",in:"header",name:"sync-api",description:"Secret Text shared between sync services and login service"}},info:{title:"Gropius Login Service",description:"API for login, registration and linking Gropius accounts to accounts on IMSs",version:"1.0.0",contact:{}},postman:{name:"List all client secrets (censored) of auth client",description:{content:"Retrieves all existing client secrets of the specified auth client.\n\nThe returned secrets only contain the 5 letter prefix (censored client secret text)\nand the fingerprint for identification (for deleting secrets).\nThe original secret text is **NOT** returned.\nIt can only be retrieved once while creating the secret.",type:"text/plain"},url:{path:["login","client",":id","clientSecret"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The uuid string of an existing auth client",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"<API Key Name>",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"login-service/gropius-login-service",custom_edit_url:null},sidebar:"restSidebar",previous:{title:"Permanently delete existing auth client",permalink:"/gropius-backend-docs/rest/login-service/auth-client-controller-delete-auth-client-28"},next:{title:"Generate and return new client secret for auth client",permalink:"/gropius-backend-docs/rest/login-service/auth-client-controller-create-client-secret-30"}},k={},b=[{value:"Request",id:"request",level:2}],x={toc:b},T="wrapper";function _(e){let{components:t,...i}=e;return(0,r.kt)(T,(0,n.Z)({},x,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"openapi__heading"},"List all client secrets (censored) of auth client"),(0,r.kt)(l(),{method:"get",path:"/login/client/{id}/clientSecret",mdxType:"MethodEndpoint"}),(0,r.kt)(o(),{infoPath:"login-service/gropius-login-service",mdxType:"SecuritySchemes"}),(0,r.kt)("p",null,"Retrieves all existing client secrets of the specified auth client."),(0,r.kt)("p",null,"The returned secrets only contain the 5 letter prefix (censored client secret text)\nand the fingerprint for identification (for deleting secrets).\nThe original secret text is ",(0,r.kt)("strong",{parentName:"p"},"NOT")," returned.\nIt can only be retrieved once while creating the secret."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"The uuid string of an existing auth client",schema:{format:"uuid",type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"All client secrets of the auth client (censored)")),(0,r.kt)("div",null,(0,r.kt)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(f.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,r.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(u.Z,{collapsible:!1,name:"censored",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The 5 letter prefix of the original client secret text plus stars for identification of the secret by the user",example:"1a2b3**********"},mdxType:"SchemaItem"}),(0,r.kt)(u.Z,{collapsible:!1,name:"fingerprint",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The fingerprint of the hash of the client secret.\nUsed as identifier to delete the secret.",example:"0123456789abcdef"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(h.Z,{responseExample:'[\n  {\n    "censored": "1a2b3**********",\n    "fingerprint": "0123456789abcdef"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(g.default,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"If no id was given or no auth client with the given id was found")),(0,r.kt)("div",null))))))}_.isMDXComponent=!0}}]);