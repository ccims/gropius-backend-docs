"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66278],{807965:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>b});var s=t(487462),n=t(667294),o=t(603905);const r={id:"base-permission",title:"BasePermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"graphql/api-internal/interfaces/base-permission",id:"graphql/api-internal/interfaces/base-permission",title:"BasePermission",description:"No description",source:"@site/docs/graphql/api-internal/interfaces/base-permission.mdx",sourceDirName:"graphql/api-internal/interfaces",slug:"/graphql/api-internal/interfaces/base-permission",permalink:"/gropius-backend-docs/graphql/api-internal/interfaces/base-permission",draft:!1,tags:[],version:"current",frontMatter:{id:"base-permission",title:"BasePermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.<b>allUsers</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionballusersbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.<b>users</b></code><Bullet /><code>GropiusUserConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-basepermissionbusersbcodegropiususerconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.users.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionusersbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.users.<b>filter</b></code><Bullet /><code>GropiusUserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-basepermissionusersbfilterbcodegropiususerfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.users.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionusersbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.users.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionusersblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.users.<b>orderBy</b></code><Bullet /><code>[GropiusUserOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-basepermissionusersborderbybcodegropiususerorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>BasePermission.users.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-basepermissionusersbskipbcodeint-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Named</code> <Badge class="badge badge--secondary" text="interface"/>',id:"named-",level:4},{value:'<code>NamedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"namednode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],g=e=>{let{dataOpen:a,dataClose:t,children:r,startOpen:l=!1}=e;const[i,d]=(0,n.useState)(l);return(0,o.kt)("details",(0,s.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?a:t),i&&r)},k={Bullet:c,SpecifiedBy:p,Badge:m,toc:b,Details:g},u="wrapper";function h(e){let{components:a,...t}=e;return(0,o.kt)(u,(0,s.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface BasePermission implements BaseNode, Named, NamedNode, Node {\n  allUsers: Boolean!\n  description: String!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  name: String!\n  users(\n    after: String\n    before: String\n    filter: GropiusUserFilterInput\n    first: Int\n    last: Int\n    orderBy: [GropiusUserOrder!]\n    skip: Int\n  ): GropiusUserConnection!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-basepermissionballusersbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.",(0,o.kt)("b",null,"allUsers"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If, the permission is granted to all users. Use with caution.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-basepermissionbdescriptionbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.",(0,o.kt)("b",null,"description"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The description of this entity.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-basepermissionbhaspermissionbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.",(0,o.kt)("b",null,"hasPermission"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-basepermissionhaspermissionbpermissionbcodeallpermissionentry-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.hasPermission.",(0,o.kt)("b",null,"permission"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-basepermissionbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.",(0,o.kt)("b",null,"id"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-basepermissionbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.",(0,o.kt)("b",null,"name"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The name of this entity.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-basepermissionbusersbcodegropiususerconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.",(0,o.kt)("b",null,"users"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/gropius-user-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"GropiusUserConnection!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"GropiusUsers granted this Permission"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-basepermissionusersbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.users.",(0,o.kt)("b",null,"after"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-basepermissionusersbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.users.",(0,o.kt)("b",null,"before"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-basepermissionusersbfilterbcodegropiususerfilterinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.users.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/gropius-user-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-basepermissionusersbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.users.",(0,o.kt)("b",null,"first"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-basepermissionusersblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.users.",(0,o.kt)("b",null,"last"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-basepermissionusersborderbybcodegropiususerorder--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.users.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/gropius-user-order"},(0,o.kt)("inlineCode",{parentName:"a"},"[GropiusUserOrder!]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-basepermissionusersbskipbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BasePermission.users.",(0,o.kt)("b",null,"skip"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"basenode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,o.kt)("h4",{id:"named-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/named"},(0,o.kt)("inlineCode",{parentName:"a"},"Named"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Entity with a name and a description.")),(0,o.kt)("h4",{id:"namednode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/named-node"},(0,o.kt)("inlineCode",{parentName:"a"},"NamedNode"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Node with a name and description")),(0,o.kt)("h4",{id:"node-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/base-permission-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"BasePermissionConnection")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/base-permission-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"BasePermissionEdge")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-permission"},(0,o.kt)("inlineCode",{parentName:"a"},"ComponentPermission")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/global-permission"},(0,o.kt)("inlineCode",{parentName:"a"},"GlobalPermission")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imspermission"},(0,o.kt)("inlineCode",{parentName:"a"},"IMSPermission")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-internal/interfaces/node-permission"},(0,o.kt)("inlineCode",{parentName:"a"},"NodePermission")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project-permission"},(0,o.kt)("inlineCode",{parentName:"a"},"ProjectPermission")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);