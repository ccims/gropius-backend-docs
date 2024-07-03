"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2945],{342500:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>r,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>g});var l=a(487462),n=a(667294),s=a(603905);const d={id:"change-issue-templated-field",title:"changeIssueTemplatedField",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,p={unversionedId:"graphql/api-public/mutations/change-issue-templated-field",id:"graphql/api-public/mutations/change-issue-templated-field",title:"changeIssueTemplatedField",description:"Changes the value of a templated field on an Issue, requires MANAGE_ISSUES on any of the Trackables",source:"@site/docs/graphql/api-public/mutations/change-issue-templated-field.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/change-issue-templated-field",permalink:"/gropius-backend-docs/graphql/api-public/mutations/change-issue-templated-field",draft:!1,tags:[],version:"current",frontMatter:{id:"change-issue-templated-field",title:"changeIssueTemplatedField",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},u={},o=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),r=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>changeIssueTemplatedField.<b>input</b></code><Bullet /><code>ChangeIssueTemplatedFieldInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-changeissuetemplatedfieldbinputbcodechangeissuetemplatedfieldinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ChangeIssueTemplatedFieldPayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"changeissuetemplatedfieldpayload-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:i=!1}=e;const[p,u]=(0,n.useState)(i);return(0,s.kt)("details",(0,l.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&d)},h={Bullet:o,SpecifiedBy:c,Badge:r,toc:g,Details:m},f="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Changes the value of a templated field on an Issue, requires MANAGE_ISSUES on any of the Trackables\nthe Issue is on.\nAdditionally, the field with the name must be defined by the template of the Issue, and the provided new value\nmust be compatible.\nIf the new value is equal to the current value of the templated field, no event is created."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"changeIssueTemplatedField(\n  input: ChangeIssueTemplatedFieldInput!\n): ChangeIssueTemplatedFieldPayload!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-changeissuetemplatedfieldbinputbcodechangeissuetemplatedfieldinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"changeIssueTemplatedField.",(0,s.kt)("b",null,"input"))),(0,s.kt)(o,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/change-issue-templated-field-input"},(0,s.kt)("inlineCode",{parentName:"a"},"ChangeIssueTemplatedFieldInput!"))," ",(0,s.kt)(r,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(r,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Defines the Issue, the templated field and its new value")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"changeissuetemplatedfieldpayload-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/change-issue-templated-field-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"ChangeIssueTemplatedFieldPayload"))," ",(0,s.kt)(r,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}b.isMDXComponent=!0}}]);