"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93020],{357613:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>b});var a=l(487462),n=l(667294),o=l(603905);const d={id:"delete-label",title:"deleteLabel",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"graphql/api-public/mutations/delete-label",id:"graphql/api-public/mutations/delete-label",title:"deleteLabel",description:"Deletes the Label, requires MANAGE_LABELS on all Trackables it is on.",source:"@site/docs/graphql/api-public/mutations/delete-label.mdx",sourceDirName:"graphql/api-public/mutations",slug:"/graphql/api-public/mutations/delete-label",permalink:"/gropius-backend-docs/graphql/api-public/mutations/delete-label",draft:!1,tags:[],version:"current",frontMatter:{id:"delete-label",title:"deleteLabel",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteLabel.<b>input</b></code><Bullet /><code>DeleteNodeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-deletelabelbinputbcodedeletenodeinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteNodePayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"deletenodepayload-",level:4}],g=e=>{let{dataOpen:t,dataClose:l,children:d,startOpen:i=!1}=e;const[s,r]=(0,n.useState)(i);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},s?t:l),s&&d)},m={Bullet:p,SpecifiedBy:u,Badge:c,toc:b,Details:g},k="wrapper";function h(e){let{components:t,...l}=e;return(0,o.kt)(k,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deletes the Label, requires MANAGE_LABELS on all Trackables it is on.\nRemoves it from all Issues. Note that the Label will still be visible in the timeline of Issues."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteLabel(\n  input: DeleteNodeInput!\n): DeleteNodePayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deletelabelbinputbcodedeletenodeinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"deleteLabel.",(0,o.kt)("b",null,"input"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/delete-node-input"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteNodeInput!"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Defines which Label to delete")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"deletenodepayload-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/delete-node-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteNodePayload"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payload type for delete node mutations")))}h.isMDXComponent=!0}}]);