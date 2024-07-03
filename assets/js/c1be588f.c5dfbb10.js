"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55996],{926071:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>p,Details:()=>u,SpecifiedBy:()=>c,assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var l=a(487462),n=a(667294),o=a(603905);const s={id:"update-global-permission-input",title:"UpdateGlobalPermissionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,i={unversionedId:"graphql/api-public/inputs/update-global-permission-input",id:"graphql/api-public/inputs/update-global-permission-input",title:"UpdateGlobalPermissionInput",description:"Input for the updateGlobalPermission mutation",source:"@site/docs/graphql/api-public/inputs/update-global-permission-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/update-global-permission-input",permalink:"/gropius-backend-docs/graphql/api-public/inputs/update-global-permission-input",draft:!1,tags:[],version:"current",frontMatter:{id:"update-global-permission-input",title:"UpdateGlobalPermissionInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>addedEntries</b></code><Bullet /><code>[PermissionEntry!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputbaddedentriesbcodepermissionentry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>addedUsers</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputbaddedusersbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>allUsers</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputballusersbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>removedEntries</b></code><Bullet /><code>[PermissionEntry!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputbremovedentriesbcodepermissionentry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGlobalPermissionInput.<b>removedUsers</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateglobalpermissioninputbremovedusersbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:d=!1}=e;const[i,r]=(0,n.useState)(d);return(0,o.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&s)},g={Bullet:p,SpecifiedBy:c,Badge:b,toc:m,Details:u},k="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input for the updateGlobalPermission mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateGlobalPermissionInput {\n  addedEntries: [PermissionEntry!]\n  addedUsers: [ID!]\n  allUsers: Boolean\n  description: String\n  id: ID!\n  name: String\n  removedEntries: [PermissionEntry!]\n  removedUsers: [ID!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputbaddedentriesbcodepermissionentry--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"addedEntries"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/enums/permission-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"[PermissionEntry!]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Permission entries to add, must be disjoint with removedEntries")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputbaddedusersbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"addedUsers"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ids of affected users to add")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputballusersbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"allUsers"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The new value for allUsers")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"description"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The description of the NamedNode")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"id"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The id of the node to update")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The new name of the NamedNode, must not be empty")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputbremovedentriesbcodepermissionentry--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"removedEntries"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/enums/permission-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"[PermissionEntry!]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Permission entries to remove, must be disjoint with addedEntries")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateglobalpermissioninputbremovedusersbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateGlobalPermissionInput.",(0,o.kt)("b",null,"removedUsers"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ids of affected users to remove")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/mutations/update-global-permission"},(0,o.kt)("inlineCode",{parentName:"a"},"updateGlobalPermission")),"  ",(0,o.kt)(b,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);