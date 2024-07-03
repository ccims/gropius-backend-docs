"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92471],{561024:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>c,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=i(487462),l=i(667294),a=i(603905);const r={id:"imslist-filter-input",title:"IMSListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,o={unversionedId:"graphql/api-internal/inputs/imslist-filter-input",id:"graphql/api-internal/inputs/imslist-filter-input",title:"IMSListFilterInput",description:"Used to filter by a connection-based property. Fields are joined by AND",source:"@site/docs/graphql/api-internal/inputs/imslist-filter-input.mdx",sourceDirName:"graphql/api-internal/inputs",slug:"/graphql/api-internal/inputs/imslist-filter-input",permalink:"/gropius-backend-docs/graphql/api-internal/inputs/imslist-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"imslist-filter-input",title:"IMSListFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},d=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IMSListFilterInput.<b>all</b></code><Bullet /><code>IMSFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imslistfilterinputballbcodeimsfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSListFilterInput.<b>any</b></code><Bullet /><code>IMSFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imslistfilterinputbanybcodeimsfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSListFilterInput.<b>none</b></code><Bullet /><code>IMSFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imslistfilterinputbnonebcodeimsfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:i,children:r,startOpen:s=!1}=e;const[o,p]=(0,l.useState)(s);return(0,a.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},o?t:i),o&&r)},b={Bullet:d,SpecifiedBy:u,Badge:c,toc:m,Details:f},k="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(k,(0,n.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Used to filter by a connection-based property. Fields are joined by AND"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input IMSListFilterInput {\n  all: IMSFilterInput\n  any: IMSFilterInput\n  none: IMSFilterInput\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-imslistfilterinputballbcodeimsfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IMSListFilterInput.",(0,a.kt)("b",null,"all"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/imsfilter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IMSFilterInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filters for nodes where all of the related nodes match this filter")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-imslistfilterinputbanybcodeimsfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IMSListFilterInput.",(0,a.kt)("b",null,"any"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/imsfilter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IMSFilterInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filters for nodes where any of the related nodes match this filter")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-imslistfilterinputbnonebcodeimsfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"IMSListFilterInput.",(0,a.kt)("b",null,"none"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/api-internal/inputs/imsfilter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IMSFilterInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filters for nodes where none of the related nodes match this filter")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imspermission-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"IMSPermissionFilterInput")),"  ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);