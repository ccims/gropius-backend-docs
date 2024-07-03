"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20693],{420429:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>g});var n=a(487462),l=a(667294),s=a(603905);const i={id:"imss",title:"imss",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,r={unversionedId:"graphql/api-internal/queries/imss",id:"graphql/api-internal/queries/imss",title:"imss",description:"Query for nodes of type IMS",source:"@site/docs/graphql/api-internal/queries/imss.mdx",sourceDirName:"graphql/api-internal/queries",slug:"/graphql/api-internal/queries/imss",permalink:"/gropius-backend-docs/graphql/api-internal/queries/imss",draft:!1,tags:[],version:"current",frontMatter:{id:"imss",title:"imss",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(l.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>imss.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imssbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>imss.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imssbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>imss.<b>filter</b></code><Bullet /><code>IMSFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imssbfilterbcodeimsfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>imss.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imssbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>imss.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imssblastbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>imss.<b>orderBy</b></code><Bullet /><code>[IMSOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imssborderbybcodeimsorder--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>imss.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imssbskipbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>IMSConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"imsconnection-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[r,d]=(0,l.useState)(o);return(0,s.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&i)},k={Bullet:c,SpecifiedBy:m,Badge:p,toc:g,Details:b},u="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Query for nodes of type IMS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"imss(\n  after: String\n  before: String\n  filter: IMSFilterInput\n  first: Int\n  last: Int\n  orderBy: [IMSOrder!]\n  skip: Int\n): IMSConnection!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imssbafterbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"imss.",(0,s.kt)("b",null,"after"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imssbbeforebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"imss.",(0,s.kt)("b",null,"before"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imssbfilterbcodeimsfilterinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"imss.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/imsfilter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"IMSFilterInput"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imssbfirstbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"imss.",(0,s.kt)("b",null,"first"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imssblastbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"imss.",(0,s.kt)("b",null,"last"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imssborderbybcodeimsorder--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"imss.",(0,s.kt)("b",null,"orderBy"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/imsorder"},(0,s.kt)("inlineCode",{parentName:"a"},"[IMSOrder!]"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-imssbskipbcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"imss.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"imsconnection-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/imsconnection"},(0,s.kt)("inlineCode",{parentName:"a"},"IMSConnection"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The connection type for IMS.")))}f.isMDXComponent=!0}}]);