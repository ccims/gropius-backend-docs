"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85639],{806561:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>y});var a=s(487462),l=s(667294),n=s(603905);const r={id:"search-issue-types",title:"searchIssueTypes",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"graphql/api-public/queries/search-issue-types",id:"graphql/api-public/queries/search-issue-types",title:"searchIssueTypes",description:"Search for nodes of type IssueType",source:"@site/docs/graphql/api-public/queries/search-issue-types.mdx",sourceDirName:"graphql/api-public/queries",slug:"/graphql/api-public/queries/search-issue-types",permalink:"/gropius-backend-docs/graphql/api-public/queries/search-issue-types",draft:!1,tags:[],version:"current",frontMatter:{id:"search-issue-types",title:"searchIssueTypes",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},p=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueTypes.<b>filter</b></code><Bullet /><code>IssueTypeFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchissuetypesbfilterbcodeissuetypefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueTypes.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissuetypesbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueTypes.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissuetypesbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueTypes.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissuetypesbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>IssueType</code> <Badge class="badge badge--secondary" text="object"/>',id:"issuetype-",level:4}],g=e=>{let{dataOpen:t,dataClose:s,children:r,startOpen:i=!1}=e;const[o,c]=(0,l.useState)(i);return(0,n.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},o?t:s),o&&r)},b={Bullet:p,SpecifiedBy:d,Badge:u,toc:y,Details:g},h="wrapper";function k(e){let{components:t,...s}=e;return(0,n.kt)(h,(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Search for nodes of type IssueType"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"searchIssueTypes(\n  filter: IssueTypeFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [IssueType!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchissuetypesbfilterbcodeissuetypefilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIssueTypes.",(0,n.kt)("b",null,"filter"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/issue-type-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueTypeFilterInput"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchissuetypesbfirstbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIssueTypes.",(0,n.kt)("b",null,"first"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchissuetypesbquerybcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIssueTypes.",(0,n.kt)("b",null,"query"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchissuetypesbskipbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"searchIssueTypes.",(0,n.kt)("b",null,"skip"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"issuetype-"},(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-type"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueType"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Type of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.\nREAD is always granted.")))}k.isMDXComponent=!0}}]);