"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29377],{798645:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>b});var a=n(487462),o=n(667294),l=n(603905);const s={id:"imsuser-connection",title:"IMSUserConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},c=void 0,d={unversionedId:"graphql/api-public/objects/imsuser-connection",id:"graphql/api-public/objects/imsuser-connection",title:"IMSUserConnection",description:"The connection type for IMSUser.",source:"@site/docs/graphql/api-public/objects/imsuser-connection.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/imsuser-connection",permalink:"/gropius-backend-docs/graphql/api-public/objects/imsuser-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"imsuser-connection",title:"IMSUserConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},i={},r=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IMSUserConnection.<b>edges</b></code><Bullet /><code>[IMSUserEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-imsuserconnectionbedgesbcodeimsuseredge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSUserConnection.<b>nodes</b></code><Bullet /><code>[IMSUser!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-imsuserconnectionbnodesbcodeimsuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSUserConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-imsuserconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSUserConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imsuserconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:c=!1}=e;const[d,i]=(0,o.useState)(c);return(0,l.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&s)},m={Bullet:r,SpecifiedBy:p,Badge:g,toc:b,Details:u},k="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The connection type for IMSUser."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type IMSUserConnection {\n  edges: [IMSUserEdge!]!\n  nodes: [IMSUser!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-imsuserconnectionbedgesbcodeimsuseredge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IMSUserConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/imsuser-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[IMSUserEdge!]!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-imsuserconnectionbnodesbcodeimsuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IMSUserConnection.",(0,l.kt)("b",null,"nodes"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/imsuser"},(0,l.kt)("inlineCode",{parentName:"a"},"[IMSUser!]!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-imsuserconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IMSUserConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-imsuserconnectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IMSUserConnection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/gropius-user"},(0,l.kt)("inlineCode",{parentName:"a"},"GropiusUser")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/ims"},(0,l.kt)("inlineCode",{parentName:"a"},"IMS")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(r,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/imsuser-template"},(0,l.kt)("inlineCode",{parentName:"a"},"IMSUserTemplate")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);