"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27709],{972455:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var s=a(487462),n=a(667294),l=a(603905);const r={id:"search-issue-states",title:"searchIssueStates",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"graphql/api-internal/queries/search-issue-states",id:"graphql/api-internal/queries/search-issue-states",title:"searchIssueStates",description:"Search for nodes of type IssueState",source:"@site/docs/graphql/api-internal/queries/search-issue-states.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-issue-states",permalink:"/gropius-backend-docs/graphql/api-internal/queries/search-issue-states",draft:!1,tags:[],version:"current",frontMatter:{id:"search-issue-states",title:"searchIssueStates",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueStates.<b>filter</b></code><Bullet /><code>IssueStateFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchissuestatesbfilterbcodeissuestatefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueStates.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissuestatesbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueStates.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissuestatesbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchIssueStates.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchissuestatesbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>IssueState</code> <Badge class="badge badge--secondary" text="object"/>',id:"issuestate-",level:4}],h=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:i=!1}=e;const[o,d]=(0,n.useState)(i);return(0,l.kt)("details",(0,s.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&r)},k={Bullet:c,SpecifiedBy:u,Badge:p,toc:g,Details:h},b="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Search for nodes of type IssueState"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"searchIssueStates(\n  filter: IssueStateFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [IssueState!]!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchissuestatesbfilterbcodeissuestatefilterinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchIssueStates.",(0,l.kt)("b",null,"filter"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/issue-state-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueStateFilterInput"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchissuestatesbfirstbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchIssueStates.",(0,l.kt)("b",null,"first"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchissuestatesbquerybcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchIssueStates.",(0,l.kt)("b",null,"query"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-searchissuestatesbskipbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"searchIssueStates.",(0,l.kt)("b",null,"skip"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"issuestate-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-state"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueState"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.\nREAD is always granted.")))}m.isMDXComponent=!0}}]);