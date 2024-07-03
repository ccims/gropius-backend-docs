"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24549],{605695:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=a(487462),r=a(667294),o=a(603905);const l={id:"create-project-input",title:"CreateProjectInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"graphql/api-public/inputs/create-project-input",id:"graphql/api-public/inputs/create-project-input",title:"CreateProjectInput",description:"Input for the createProject mutation",source:"@site/docs/graphql/api-public/inputs/create-project-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/create-project-input",permalink:"/gropius-backend-docs/graphql/api-public/inputs/create-project-input",draft:!1,tags:[],version:"current",frontMatter:{id:"create-project-input",title:"CreateProjectInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateProjectInput.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createprojectinputbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateProjectInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createprojectinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateProjectInput.<b>repositoryURL</b></code><Bullet /><code>URL</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createprojectinputbrepositoryurlbcodeurl-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[c,p]=(0,r.useState)(i);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},m={Bullet:d,SpecifiedBy:s,Badge:u,toc:g,Details:b},k="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input for the createProject mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateProjectInput {\n  description: String!\n  name: String!\n  repositoryURL: URL\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createprojectinputbdescriptionbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateProjectInput.",(0,o.kt)("b",null,"description"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The description of the NamedNode")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createprojectinputbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateProjectInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The name of the NamedNode, must not be blank")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createprojectinputbrepositoryurlbcodeurl-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateProjectInput.",(0,o.kt)("b",null,"repositoryURL"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/url"},(0,o.kt)("inlineCode",{parentName:"a"},"URL"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The repositoryURL of the named node")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/create-project"},(0,o.kt)("inlineCode",{parentName:"a"},"createProject")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);