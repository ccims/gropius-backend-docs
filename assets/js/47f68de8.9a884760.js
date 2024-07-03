"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10151],{611788:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(487462),l=a(667294),d=a(603905);const i={id:"title-changed-event",title:"TitleChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,s={unversionedId:"graphql/api-internal/objects/title-changed-event",id:"graphql/api-internal/objects/title-changed-event",title:"TitleChangedEvent",description:"Event representing that the title of an Issue changed.",source:"@site/docs/graphql/api-internal/objects/title-changed-event.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/title-changed-event",permalink:"/gropius-backend-docs/graphql/api-internal/objects/title-changed-event",draft:!1,tags:[],version:"current",frontMatter:{id:"title-changed-event",title:"TitleChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},c=()=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,d.kt)(l.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(l.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-titlechangedeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-titlechangedeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-titlechangedeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-titlechangedeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-titlechangedeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-titlechangedeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-titlechangedeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>newTitle</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-titlechangedeventbnewtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>oldTitle</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-titlechangedeventboldtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TitleChangedEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-titlechangedeventbparentitembcodeparenttimelineitem-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[s,r]=(0,l.useState)(o);return(0,d.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&i)},p={Bullet:c,SpecifiedBy:g,Badge:m,toc:h,Details:b},k="wrapper";function u(e){let{components:t,...a}=e;return(0,d.kt)(k,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Event representing that the title of an Issue changed.\nREAD is granted if READ is granted on ",(0,d.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type TitleChangedEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  newTitle: String!\n  oldTitle: String!\n  parentItem: ParentTimelineItem\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventbcreatedbybcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"createdBy"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventbhaspermissionbcodeboolean--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"hasPermission"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-titlechangedeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.hasPermission.",(0,d.kt)("b",null,"permission"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,d.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventbidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"id"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventbissuebcodeissue-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"issue"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue"},(0,d.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventblastmodifiedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"lastModifiedAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventblastmodifiedbybcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"lastModifiedBy"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventbnewtitlebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"newTitle"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The new title.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventboldtitlebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"oldTitle"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The old title.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-titlechangedeventbparentitembcodeparenttimelineitem-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"TitleChangedEvent.",(0,d.kt)("b",null,"parentItem"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/parent-timeline-item"},(0,d.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"auditednode-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/audited-node"},(0,d.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,d.kt)("h4",{id:"basenode-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,d.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,d.kt)("h4",{id:"node-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,d.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,d.kt)("h4",{id:"timelineitem-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/timeline-item"},(0,d.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/unions/public-timeline-item"},(0,d.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,d.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);