"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54808],{777590:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var l=a(487462),n=a(667294),o=a(603905);const i={id:"delete-project-permission",title:"deleteProjectPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,r={unversionedId:"graphql/api-public/mutations/delete-project-permission",id:"graphql/api-public/mutations/delete-project-permission",title:"deleteProjectPermission",description:"Deletes a ProjectPermission, requires ADMIN on all Projects the permission currently affects.",source:"@site/docs/graphql/api-public/mutations/delete-project-permission.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/delete-project-permission",permalink:"/gropius-backend-docs/graphql/api-public/mutations/delete-project-permission",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-project-permission",title:"deleteProjectPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteProjectPermission.<b>input</b></code><Bullet /><code>DeleteNodeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-deleteprojectpermissionbinputbcodedeletenodeinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteNodePayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"deletenodepayload-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:s=!1}=e;const[r,d]=(0,n.useState)(s);return(0,o.kt)("details",(0,l.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&i)},b={Bullet:p,SpecifiedBy:c,Badge:u,toc:m,Details:g},k="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deletes a ProjectPermission, requires ADMIN on all Projects the permission currently affects.\nEnsures that after the permission is deleted, all previously affected Projects still have a permission which\ngrants ADMIN to at least one user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteProjectPermission(\n  input: DeleteNodeInput!\n): DeleteNodePayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deleteprojectpermissionbinputbcodedeletenodeinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"deleteProjectPermission.",(0,o.kt)("b",null,"input"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/delete-node-input"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteNodeInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Defines which ProjectPermission to delete")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"deletenodepayload-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/delete-node-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteNodePayload"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payload type for delete node mutations")))}h.isMDXComponent=!0}}]);