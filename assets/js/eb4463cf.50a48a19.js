"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61698],{641644:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>b});var s=a(487462),n=a(667294),i=a(603905);const o={id:"imspermission",title:"IMSPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,l={unversionedId:"graphql/api-public/objects/imspermission",id:"graphql/api-public/objects/imspermission",title:"IMSPermission",description:"NodePermission to grant specific permissions to a set of IMSs.",source:"@site/docs/graphql/api-public/objects/imspermission.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/imspermission",permalink:"/gropius-backend-docs/graphql/api-public/objects/imspermission",draft:!1,tags:[],version:"current",frontMatter:{id:"imspermission",title:"IMSPermission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>allUsers</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionballusersbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>description</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>entries</b></code><Bullet /><code>[IMSPermissionEntry!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-imspermissionbentriesbcodeimspermissionentry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>nodesWithPermission</b></code><Bullet /><code>IMSConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-imspermissionbnodeswithpermissionbcodeimsconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.nodesWithPermission.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.nodesWithPermission.<b>filter</b></code><Bullet /><code>IMSFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbfilterbcodeimsfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.nodesWithPermission.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.nodesWithPermission.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionnodeswithpermissionblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.nodesWithPermission.<b>orderBy</b></code><Bullet /><code>[IMSOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionnodeswithpermissionborderbybcodeimsorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.nodesWithPermission.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.<b>users</b></code><Bullet /><code>GropiusUserConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-imspermissionbusersbcodegropiususerconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.users.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionusersbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.users.<b>filter</b></code><Bullet /><code>GropiusUserFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionusersbfilterbcodegropiususerfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.users.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionusersbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.users.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionusersblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.users.<b>orderBy</b></code><Bullet /><code>[GropiusUserOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-imspermissionusersborderbybcodegropiususerorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IMSPermission.users.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-imspermissionusersbskipbcodeint-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>BasePermission</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basepermission-",level:4},{value:'<code>Named</code> <Badge class="badge badge--secondary" text="interface"/>',id:"named-",level:4},{value:'<code>NamedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"namednode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:r=!1}=e;const[l,d]=(0,n.useState)(r);return(0,i.kt)("details",(0,s.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&o)},u={Bullet:c,SpecifiedBy:m,Badge:p,toc:b,Details:g},k="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"NodePermission to grant specific permissions to a set of IMSs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type IMSPermission implements BaseNode, BasePermission, Named, NamedNode, Node {\n  allUsers: Boolean!\n  description: String!\n  entries: [IMSPermissionEntry!]!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  name: String!\n  nodesWithPermission(\n    after: String\n    before: String\n    filter: IMSFilterInput\n    first: Int\n    last: Int\n    orderBy: [IMSOrder!]\n    skip: Int\n  ): IMSConnection!\n  users(\n    after: String\n    before: String\n    filter: GropiusUserFilterInput\n    first: Int\n    last: Int\n    orderBy: [GropiusUserOrder!]\n    skip: Int\n  ): GropiusUserConnection!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionballusersbcodeboolean--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"allUsers"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If, the permission is granted to all users. Use with caution.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionbdescriptionbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"description"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The description of this entity.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionbentriesbcodeimspermissionentry--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"entries"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/enums/imspermission-entry"},(0,i.kt)("inlineCode",{parentName:"a"},"[IMSPermissionEntry!]!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"All permissions this Permission grants")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionbhaspermissionbcodeboolean--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"hasPermission"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-imspermissionhaspermissionbpermissionbcodeallpermissionentry-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.hasPermission.",(0,i.kt)("b",null,"permission"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,i.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionbidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"id"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionbnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"name"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The name of this entity.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionbnodeswithpermissionbcodeimsconnection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"nodesWithPermission"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/imsconnection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSConnection!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Nodes on which the Permission is granted."),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbafterbcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.nodesWithPermission.",(0,i.kt)("b",null,"after"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbbeforebcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.nodesWithPermission.",(0,i.kt)("b",null,"before"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbfilterbcodeimsfilterinput-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.nodesWithPermission.",(0,i.kt)("b",null,"filter"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/imsfilter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSFilterInput"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbfirstbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.nodesWithPermission.",(0,i.kt)("b",null,"first"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionnodeswithpermissionblastbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.nodesWithPermission.",(0,i.kt)("b",null,"last"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionnodeswithpermissionborderbybcodeimsorder--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.nodesWithPermission.",(0,i.kt)("b",null,"orderBy"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/imsorder"},(0,i.kt)("inlineCode",{parentName:"a"},"[IMSOrder!]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionnodeswithpermissionbskipbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.nodesWithPermission.",(0,i.kt)("b",null,"skip"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-imspermissionbusersbcodegropiususerconnection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.",(0,i.kt)("b",null,"users"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/gropius-user-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"GropiusUserConnection!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"GropiusUsers granted this Permission"),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-imspermissionusersbafterbcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.users.",(0,i.kt)("b",null,"after"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionusersbbeforebcodestring-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.users.",(0,i.kt)("b",null,"before"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionusersbfilterbcodegropiususerfilterinput-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.users.",(0,i.kt)("b",null,"filter"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/gropius-user-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionusersbfirstbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.users.",(0,i.kt)("b",null,"first"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionusersblastbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.users.",(0,i.kt)("b",null,"last"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionusersborderbybcodegropiususerorder--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.users.",(0,i.kt)("b",null,"orderBy"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/gropius-user-order"},(0,i.kt)("inlineCode",{parentName:"a"},"[GropiusUserOrder!]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,i.kt)("h5",{id:"code-style-fontweight-normal-imspermissionusersbskipbcodeint-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IMSPermission.users.",(0,i.kt)("b",null,"skip"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"basenode-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,i.kt)("h4",{id:"basepermission-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-permission"},(0,i.kt)("inlineCode",{parentName:"a"},"BasePermission"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"named-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/named"},(0,i.kt)("inlineCode",{parentName:"a"},"Named"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Entity with a name and a description.")),(0,i.kt)("h4",{id:"namednode-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/named-node"},(0,i.kt)("inlineCode",{parentName:"a"},"NamedNode"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Node with a name and description")),(0,i.kt)("h4",{id:"node-"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/queries/search-imspermissions"},(0,i.kt)("inlineCode",{parentName:"a"},"searchIMSPermissions")),"  ",(0,i.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/create-imspermission-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateIMSPermissionPayload")),"  ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/imspermission-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSPermissionConnection")),"  ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/imspermission-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSPermissionEdge")),"  ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/update-imspermission-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateIMSPermissionPayload")),"  ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);