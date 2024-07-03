"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91742],{492786:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>r,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>g,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(487462),s=n(667294),i=n(603905);const l={id:"change-assignment-type",title:"changeAssignmentType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},p=void 0,o={unversionedId:"graphql/api-public/mutations/change-assignment-type",id:"graphql/api-public/mutations/change-assignment-type",title:"changeAssignmentType",description:"Changes the type of an Assignment, requires MANAGE_ISSUES on any of the Trackables the Issue the Assignment",source:"@site/docs/graphql/api-public/mutations/change-assignment-type.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/change-assignment-type",permalink:"/gropius-backend-docs/graphql/api-public/mutations/change-assignment-type",draft:!1,tags:[],version:"current",frontMatter:{id:"change-assignment-type",title:"changeAssignmentType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},g={},c=()=>(0,i.kt)(s.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(s.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),r=e=>(0,i.kt)(s.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>changeAssignmentType.<b>input</b></code><Bullet /><code>ChangeAssignmentTypeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-changeassignmenttypebinputbcodechangeassignmenttypeinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ChangeAssignmentTypePayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"changeassignmenttypepayload-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:p=!1}=e;const[o,g]=(0,s.useState)(p);return(0,i.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),g((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&l)},h={Bullet:c,SpecifiedBy:d,Badge:r,toc:u,Details:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Changes the type of an Assignment, requires MANAGE_ISSUES on any of the Trackables the Issue the Assignment\nis part of is on.\nAdditionally, if present, the new type must be compatible with the template of the Issue.\nIf the current type of the Assignment is equal to the new one, no event is created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"changeAssignmentType(\n  input: ChangeAssignmentTypeInput!\n): ChangeAssignmentTypePayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-changeassignmenttypebinputbcodechangeassignmenttypeinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"changeAssignmentType.",(0,i.kt)("b",null,"input"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/change-assignment-type-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ChangeAssignmentTypeInput!"))," ",(0,i.kt)(r,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(r,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Defines the Assignment to update and its new AssignmentType")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"changeassignmenttypepayload-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/change-assignment-type-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"ChangeAssignmentTypePayload"))," ",(0,i.kt)(r,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);