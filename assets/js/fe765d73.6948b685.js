"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8083],{146852:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=a(487462),o=a(667294),l=a(603905);const r={id:"relation-partner-template-connection",title:"RelationPartnerTemplateConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"graphql/api-public/objects/relation-partner-template-connection",id:"graphql/api-public/objects/relation-partner-template-connection",title:"RelationPartnerTemplateConnection",description:"The connection type for RelationPartnerTemplate.",source:"@site/docs/graphql/api-public/objects/relation-partner-template-connection.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/relation-partner-template-connection",permalink:"/gropius-backend-docs/graphql/api-public/objects/relation-partner-template-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"relation-partner-template-connection",title:"RelationPartnerTemplateConnection",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},p=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RelationPartnerTemplateConnection.<b>edges</b></code><Bullet /><code>[RelationPartnerTemplateEdge!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationpartnertemplateconnectionbedgesbcoderelationpartnertemplateedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationPartnerTemplateConnection.<b>nodes</b></code><Bullet /><code>[RelationPartnerTemplate!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-relationpartnertemplateconnectionbnodesbcoderelationpartnertemplate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationPartnerTemplateConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-relationpartnertemplateconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RelationPartnerTemplateConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-relationpartnertemplateconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:i=!1}=e;const[c,d]=(0,o.useState)(i);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&r)},u={Bullet:p,SpecifiedBy:s,Badge:g,toc:m,Details:b},k="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The connection type for RelationPartnerTemplate."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type RelationPartnerTemplateConnection {\n  edges: [RelationPartnerTemplateEdge!]!\n  nodes: [RelationPartnerTemplate!]!\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationpartnertemplateconnectionbedgesbcoderelationpartnertemplateedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationPartnerTemplateConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/relation-partner-template-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[RelationPartnerTemplateEdge!]!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all edges of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationpartnertemplateconnectionbnodesbcoderelationpartnertemplate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationPartnerTemplateConnection.",(0,l.kt)("b",null,"nodes"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/relation-partner-template"},(0,l.kt)("inlineCode",{parentName:"a"},"[RelationPartnerTemplate!]!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A list of all nodes of the current page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationpartnertemplateconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationPartnerTemplateConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-relationpartnertemplateconnectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RelationPartnerTemplateConnection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/relation-condition"},(0,l.kt)("inlineCode",{parentName:"a"},"RelationCondition")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);