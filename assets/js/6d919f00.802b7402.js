"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86341],{70254:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var a=n(487462),o=n(667294),l=n(603905);const c={id:"interface-connection",title:"InterfaceConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,r={unversionedId:"graphql/api-internal/objects/interface-connection",id:"graphql/api-internal/objects/interface-connection",title:"InterfaceConnection",description:"The connection type for Interface.",source:"@site/docs/graphql/api-internal/objects/interface-connection.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/interface-connection",permalink:"/gropius-backend-docs/graphql/api-internal/objects/interface-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"interface-connection",title:"InterfaceConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},i={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InterfaceConnection.<b>edges</b></code><Bullet /><code>[InterfaceEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-interfaceconnectionbedgesbcodeinterfaceedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InterfaceConnection.<b>nodes</b></code><Bullet /><code>[Interface!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-interfaceconnectionbnodesbcodeinterface--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InterfaceConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-interfaceconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InterfaceConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-interfaceconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:d=!1}=e;const[r,i]=(0,o.useState)(d);return(0,l.kt)("details",(0,a.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&c)},k={Bullet:s,SpecifiedBy:g,Badge:f,toc:p,Details:b},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The connection type for Interface."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type InterfaceConnection {\n  edges: [InterfaceEdge!]!\n  nodes: [Interface!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-interfaceconnectionbedgesbcodeinterfaceedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InterfaceConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/interface-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[InterfaceEdge!]!"))," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-interfaceconnectionbnodesbcodeinterface--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InterfaceConnection.",(0,l.kt)("b",null,"nodes"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/interface"},(0,l.kt)("inlineCode",{parentName:"a"},"[Interface!]!"))," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-interfaceconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InterfaceConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-interfaceconnectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InterfaceConnection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-template"},(0,l.kt)("inlineCode",{parentName:"a"},"InterfaceTemplate")),"  ",(0,l.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);