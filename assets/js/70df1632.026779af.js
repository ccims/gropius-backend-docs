"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35448],{174833:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>b});var o=a(487462),n=a(667294),s=a(603905);const r={id:"project-permission",title:"ProjectPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"graphql/api-internal/objects/project-permission",id:"graphql/api-internal/objects/project-permission",title:"ProjectPermission",description:"NodePermission to grant specific permissions to a set of Projects.",source:"@site/docs/graphql/api-internal/objects/project-permission.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/project-permission",permalink:"/gropius-backend-docs/graphql/api-internal/objects/project-permission",draft:!1,tags:[],version:"current",frontMatter:{id:"project-permission",title:"ProjectPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>allUsers</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionballusersbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>entries</b></code><Bullet /><code>[ProjectPermissionEntry!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-projectpermissionbentriesbcodeprojectpermissionentry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>nodesWithPermission</b></code><Bullet /><code>ProjectConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-projectpermissionbnodeswithpermissionbcodeprojectconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.nodesWithPermission.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.nodesWithPermission.<b>filter</b></code><Bullet /><code>ProjectFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbfilterbcodeprojectfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.nodesWithPermission.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.nodesWithPermission.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.nodesWithPermission.<b>orderBy</b></code><Bullet /><code>[ProjectOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionborderbybcodeprojectorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.nodesWithPermission.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.<b>users</b></code><Bullet /><code>GropiusUserConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-projectpermissionbusersbcodegropiususerconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.users.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionusersbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.users.<b>filter</b></code><Bullet /><code>GropiusUserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-projectpermissionusersbfilterbcodegropiususerfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.users.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionusersbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.users.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionusersblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.users.<b>orderBy</b></code><Bullet /><code>[GropiusUserOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-projectpermissionusersborderbybcodegropiususerorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectPermission.users.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectpermissionusersbskipbcodeint-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>BasePermission</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basepermission-",level:4},{value:'<code>Named</code> <Badge class="badge badge--secondary" text="interface"/>',id:"named-",level:4},{value:'<code>NamedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"namednode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:i=!1}=e;const[l,d]=(0,n.useState)(i);return(0,s.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},k={Bullet:c,SpecifiedBy:p,Badge:m,toc:b,Details:g},h="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,o.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"NodePermission to grant specific permissions to a set of Projects."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProjectPermission implements BaseNode, BasePermission, Named, NamedNode, Node {\n  allUsers: Boolean!\n  description: String!\n  entries: [ProjectPermissionEntry!]!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  name: String!\n  nodesWithPermission(\n    after: String\n    before: String\n    filter: ProjectFilterInput\n    first: Int\n    last: Int\n    orderBy: [ProjectOrder!]\n    skip: Int\n  ): ProjectConnection!\n  users(\n    after: String\n    before: String\n    filter: GropiusUserFilterInput\n    first: Int\n    last: Int\n    orderBy: [GropiusUserOrder!]\n    skip: Int\n  ): GropiusUserConnection!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionballusersbcodeboolean--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"allUsers"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If, the permission is granted to all users. Use with caution.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionbdescriptionbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"description"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The description of this entity.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionbentriesbcodeprojectpermissionentry--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"entries"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/enums/project-permission-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"[ProjectPermissionEntry!]!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"All permissions this Permission grants")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionbhaspermissionbcodeboolean--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"hasPermission"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,s.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-projectpermissionhaspermissionbpermissionbcodeallpermissionentry-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.hasPermission.",(0,s.kt)("b",null,"permission"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionbidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"id"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionbnamebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"name"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The name of this entity.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionbnodeswithpermissionbcodeprojectconnection--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"nodesWithPermission"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/project-connection"},(0,s.kt)("inlineCode",{parentName:"a"},"ProjectConnection!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Nodes on which the Permission is granted."),(0,s.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbafterbcodestring-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.nodesWithPermission.",(0,s.kt)("b",null,"after"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbbeforebcodestring-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.nodesWithPermission.",(0,s.kt)("b",null,"before"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbfilterbcodeprojectfilterinput-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.nodesWithPermission.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/project-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"ProjectFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbfirstbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.nodesWithPermission.",(0,s.kt)("b",null,"first"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionblastbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.nodesWithPermission.",(0,s.kt)("b",null,"last"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionborderbybcodeprojectorder--"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.nodesWithPermission.",(0,s.kt)("b",null,"orderBy"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/project-order"},(0,s.kt)("inlineCode",{parentName:"a"},"[ProjectOrder!]"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionnodeswithpermissionbskipbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.nodesWithPermission.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-projectpermissionbusersbcodegropiususerconnection--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.",(0,s.kt)("b",null,"users"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/gropius-user-connection"},(0,s.kt)("inlineCode",{parentName:"a"},"GropiusUserConnection!"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"GropiusUsers granted this Permission"),(0,s.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-projectpermissionusersbafterbcodestring-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.users.",(0,s.kt)("b",null,"after"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionusersbbeforebcodestring-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.users.",(0,s.kt)("b",null,"before"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionusersbfilterbcodegropiususerfilterinput-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.users.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/gropius-user-filter-input"},(0,s.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionusersbfirstbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.users.",(0,s.kt)("b",null,"first"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionusersblastbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.users.",(0,s.kt)("b",null,"last"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionusersborderbybcodegropiususerorder--"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.users.",(0,s.kt)("b",null,"orderBy"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/gropius-user-order"},(0,s.kt)("inlineCode",{parentName:"a"},"[GropiusUserOrder!]"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,s.kt)("h5",{id:"code-style-fontweight-normal-projectpermissionusersbskipbcodeint-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ProjectPermission.users.",(0,s.kt)("b",null,"skip"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"basenode-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,s.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,s.kt)("h4",{id:"basepermission-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"BasePermission"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"named-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/named"},(0,s.kt)("inlineCode",{parentName:"a"},"Named"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Entity with a name and a description.")),(0,s.kt)("h4",{id:"namednode-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/named-node"},(0,s.kt)("inlineCode",{parentName:"a"},"NamedNode"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Node with a name and description")),(0,s.kt)("h4",{id:"node-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,s.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,s.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,s.kt)("h3",{id:"returned-by"},"Returned by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-internal/queries/search-project-permissions"},(0,s.kt)("inlineCode",{parentName:"a"},"searchProjectPermissions")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project-permission-connection"},(0,s.kt)("inlineCode",{parentName:"a"},"ProjectPermissionConnection")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project-permission-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"ProjectPermissionEdge")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-internal/unions/trackable-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"TrackablePermission")),"  ",(0,s.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);