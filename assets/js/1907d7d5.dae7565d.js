"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80162],{47516:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=n(487462),o=n(667294),s=n(603905);const r={id:"search-component-versions",title:"searchComponentVersions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"graphql/api-internal/queries/search-component-versions",id:"graphql/api-internal/queries/search-component-versions",title:"searchComponentVersions",description:"Search for nodes of type ComponentVersion",source:"@site/docs/graphql/api-internal/queries/search-component-versions.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/search-component-versions",permalink:"/gropius-backend-docs/graphql/api-internal/queries/search-component-versions",draft:!1,tags:[],version:"current",frontMatter:{id:"search-component-versions",title:"searchComponentVersions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},c={},d=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentVersions.<b>filter</b></code><Bullet /><code>ComponentVersionFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchcomponentversionsbfilterbcodecomponentversionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentVersions.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcomponentversionsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentVersions.<b>query</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcomponentversionsbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>searchComponentVersions.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcomponentversionsbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ComponentVersion</code> <Badge class="badge badge--secondary" text="object"/>',id:"componentversion-",level:4}],u=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[i,c]=(0,o.useState)(l);return(0,s.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},h={Bullet:d,SpecifiedBy:p,Badge:m,toc:g,Details:u},k="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(k,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Search for nodes of type ComponentVersion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"searchComponentVersions(\n  filter: ComponentVersionFilterInput\n  first: Int!\n  query: String!\n  skip: Int\n): [ComponentVersion!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentversionsbfilterbcodecomponentversionfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchComponentVersions.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/component-version-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"ComponentVersionFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentversionsbfirstbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchComponentVersions.",(0,s.kt)("b",null,"first"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentversionsbquerybcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchComponentVersions.",(0,s.kt)("b",null,"query"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Search query nodes must match")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-searchcomponentversionsbskipbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"searchComponentVersions.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items.")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"componentversion-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/component-version"},(0,s.kt)("inlineCode",{parentName:"a"},"ComponentVersion"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Version of a component.\nCan specifies visible/invisible InterfaceSpecifications.\nCan be used in Relations, affected by issues and included by Projects.\nREAD is granted if READ is granted on ",(0,s.kt)("inlineCode",{parentName:"p"},"component"),".")))}b.isMDXComponent=!0}}]);