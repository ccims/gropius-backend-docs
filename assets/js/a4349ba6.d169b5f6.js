"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59038],{73438:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>b,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=l(487462),i=l(667294),n=l(603905);const r={id:"label-filter-input",title:"LabelFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,o={unversionedId:"graphql/api-public/inputs/label-filter-input",id:"graphql/api-public/inputs/label-filter-input",title:"LabelFilterInput",description:"Filter used to filter Label",source:"@site/docs/graphql/api-public/inputs/label-filter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/label-filter-input",permalink:"/gropius-backend-docs/graphql/api-public/inputs/label-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"label-filter-input",title:"LabelFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},p={},u=()=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,n.kt)(i.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>and</b></code><Bullet /><code>[LabelFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbandbcodelabelfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>color</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbcolorbcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>createdAt</b></code><Bullet /><code>DateTimeFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbcreatedatbcodedatetimefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>createdBy</b></code><Bullet /><code>UserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbcreatedbybcodeuserfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>description</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbdescriptionbcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>id</b></code><Bullet /><code>IDFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbidbcodeidfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>issues</b></code><Bullet /><code>IssueListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbissuesbcodeissuelistfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>lastModifiedAt</b></code><Bullet /><code>DateTimeFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputblastmodifiedatbcodedatetimefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>lastModifiedBy</b></code><Bullet /><code>UserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputblastmodifiedbybcodeuserfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>name</b></code><Bullet /><code>StringFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbnamebcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>not</b></code><Bullet /><code>LabelFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbnotbcodelabelfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>or</b></code><Bullet /><code>[LabelFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputborbcodelabelfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LabelFilterInput.<b>trackables</b></code><Bullet /><code>TrackableListFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-labelfilterinputbtrackablesbcodetrackablelistfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:l,children:r,startOpen:d=!1}=e;const[o,p]=(0,i.useState)(d);return(0,n.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},o?t:l),o&&r)},k={Bullet:u,SpecifiedBy:s,Badge:b,toc:c,Details:g},f="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(f,(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Filter used to filter Label"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input LabelFilterInput {\n  and: [LabelFilterInput!]\n  color: StringFilterInput\n  createdAt: DateTimeFilterInput\n  createdBy: UserFilterInput\n  description: StringFilterInput\n  id: IDFilterInput\n  issues: IssueListFilterInput\n  lastModifiedAt: DateTimeFilterInput\n  lastModifiedBy: UserFilterInput\n  name: StringFilterInput\n  not: LabelFilterInput\n  or: [LabelFilterInput!]\n  trackables: TrackableListFilterInput\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbandbcodelabelfilterinput--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"and"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/label-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"[LabelFilterInput!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Connects all subformulas via and")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbcolorbcodestringfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"color"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by color")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbcreatedatbcodedatetimefilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/date-time-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTimeFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by createdAt")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbcreatedbybcodeuserfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"createdBy"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/user-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"UserFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filters for nodes where the related node match this filter")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbdescriptionbcodestringfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"description"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by description")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbidbcodeidfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"id"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/idfilter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IDFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by id")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbissuesbcodeissuelistfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"issues"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/issue-list-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueListFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by issues")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputblastmodifiedatbcodedatetimefilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"lastModifiedAt"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/date-time-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTimeFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by lastModifiedAt")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputblastmodifiedbybcodeuserfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"lastModifiedBy"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/user-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"UserFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filters for nodes where the related node match this filter")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbnamebcodestringfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"name"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/string-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by name")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbnotbcodelabelfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"not"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/label-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"LabelFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Negates the subformula")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputborbcodelabelfilterinput--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"or"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/label-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"[LabelFilterInput!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Connects all subformulas via or")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-labelfilterinputbtrackablesbcodetrackablelistfilterinput-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"LabelFilterInput.",(0,n.kt)("b",null,"trackables"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/inputs/trackable-list-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrackableListFilterInput"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by trackables")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/label-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"LabelFilterInput")),"  ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/label-list-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"LabelListFilterInput")),"  ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/queries/search-labels"},(0,n.kt)("inlineCode",{parentName:"a"},"searchLabels")),"  ",(0,n.kt)(b,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);