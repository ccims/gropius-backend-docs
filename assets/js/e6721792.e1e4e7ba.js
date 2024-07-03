"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25339],{722198:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>s,assets:()=>o,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var n=a(487462),l=a(667294),i=a(603905);const r={id:"interface-part-input",title:"InterfacePartInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,p={unversionedId:"graphql/api-public/inputs/interface-part-input",id:"graphql/api-public/inputs/interface-part-input",title:"InterfacePartInput",description:"Input to create an InterfacePart",source:"@site/docs/graphql/api-public/inputs/interface-part-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/interface-part-input",permalink:"/gropius-backend-docs/graphql/api-public/inputs/interface-part-input",draft:!1,tags:[],version:"current",frontMatter:{id:"interface-part-input",title:"InterfacePartInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},o={},c=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InterfacePartInput.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-interfacepartinputbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InterfacePartInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-interfacepartinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InterfacePartInput.<b>templatedFields</b></code><Bullet /><code>[JSONFieldInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-interfacepartinputbtemplatedfieldsbcodejsonfieldinput--",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[p,o]=(0,l.useState)(d);return(0,i.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&r)},b={Bullet:c,SpecifiedBy:s,Badge:u,toc:g,Details:f},m="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input to create an InterfacePart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input InterfacePartInput {\n  description: String!\n  name: String!\n  templatedFields: [JSONFieldInput!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-interfacepartinputbdescriptionbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InterfacePartInput.",(0,i.kt)("b",null,"description"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The description of the NamedNode")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-interfacepartinputbnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InterfacePartInput.",(0,i.kt)("b",null,"name"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The name of the NamedNode, must not be blank")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-interfacepartinputbtemplatedfieldsbcodejsonfieldinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InterfacePartInput.",(0,i.kt)("b",null,"templatedFields"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/jsonfield-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[JSONFieldInput!]!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Initial values for all templatedFields")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/create-interface-specification-version-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateInterfaceSpecificationVersionInput")),"  ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-specification-version-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionInput")),"  ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);