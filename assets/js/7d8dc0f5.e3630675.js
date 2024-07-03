"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1025],{681080:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>m,Details:()=>p,SpecifiedBy:()=>c,assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var n=a(487462),d=a(667294),s=a(603905);const o={id:"removed-assignment-event",title:"RemovedAssignmentEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"graphql/api-internal/objects/removed-assignment-event",id:"graphql/api-internal/objects/removed-assignment-event",title:"RemovedAssignmentEvent",description:"Event representing that a User was unassigned from an Issue,",source:"@site/docs/graphql/api-internal/objects/removed-assignment-event.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/removed-assignment-event",permalink:"/gropius-backend-docs/graphql/api-internal/objects/removed-assignment-event",draft:!1,tags:[],version:"current",frontMatter:{id:"removed-assignment-event",title:"RemovedAssignmentEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},m=()=>(0,s.kt)(d.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,s.kt)(d.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,s.kt)(d.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedassignmenteventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-removedassignmenteventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedassignmenteventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedassignmenteventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-removedassignmenteventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-removedassignmenteventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-removedassignmenteventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-removedassignmenteventbparentitembcodeparenttimelineitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RemovedAssignmentEvent.<b>removedAssignment</b></code><Bullet /><code>Assignment!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-removedassignmenteventbremovedassignmentbcodeassignment--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[i,r]=(0,d.useState)(l);return(0,s.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},k={Bullet:m,SpecifiedBy:c,Badge:g,toc:b,Details:p},h="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Event representing that a User was unassigned from an Issue,\nmeaning an Assignment was removed from an Issue.\nREAD is granted if READ is granted on ",(0,s.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type RemovedAssignmentEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  parentItem: ParentTimelineItem\n  removedAssignment: Assignment!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventbcreatedatbcodedatetime--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"createdAt"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventbcreatedbybcodeuser--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"createdBy"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventbhaspermissionbcodeboolean--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"hasPermission"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,s.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-removedassignmenteventhaspermissionbpermissionbcodeallpermissionentry-"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.hasPermission.",(0,s.kt)("b",null,"permission"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,s.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventbidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"id"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventbissuebcodeissue-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"issue"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue"},(0,s.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventblastmodifiedatbcodedatetime--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"lastModifiedAt"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventblastmodifiedbybcodeuser--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"lastModifiedBy"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventbparentitembcodeparenttimelineitem-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"parentItem"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/parent-timeline-item"},(0,s.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-removedassignmenteventbremovedassignmentbcodeassignment--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"RemovedAssignmentEvent.",(0,s.kt)("b",null,"removedAssignment"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/assignment"},(0,s.kt)("inlineCode",{parentName:"a"},"Assignment!"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The removed Assignment.")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"auditednode-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/audited-node"},(0,s.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,s.kt)("h4",{id:"basenode-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,s.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,s.kt)("h4",{id:"node-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,s.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,s.kt)("h4",{id:"timelineitem-"},(0,s.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/timeline-item"},(0,s.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/graphql/api-internal/unions/public-timeline-item"},(0,s.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,s.kt)(g,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);