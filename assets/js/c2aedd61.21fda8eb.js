"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57870],{772077:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>i,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var n=a(487462),o=a(667294),l=a(603905);const d={id:"outgoing-relation-type-changed-event",title:"OutgoingRelationTypeChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"graphql/api-public/objects/outgoing-relation-type-changed-event",id:"graphql/api-public/objects/outgoing-relation-type-changed-event",title:"OutgoingRelationTypeChangedEvent",description:"Event representing that the type of an incoming IssueRelation changed.",source:"@site/docs/graphql/api-public/objects/outgoing-relation-type-changed-event.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/outgoing-relation-type-changed-event",permalink:"/gropius-backend-docs/graphql/api-public/objects/outgoing-relation-type-changed-event",draft:!1,tags:[],version:"current",frontMatter:{id:"outgoing-relation-type-changed-event",title:"OutgoingRelationTypeChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},c=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>issueRelation</b></code><Bullet /><code>IssueRelation!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbissuerelationbcodeissuerelation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>newType</b></code><Bullet /><code>IssueRelationType</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbnewtypebcodeissuerelationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>oldType</b></code><Bullet /><code>IssueRelationType</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventboldtypebcodeissuerelationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OutgoingRelationTypeChangedEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbparentitembcodeparenttimelineitem-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>RelationTypeChangedEvent</code> <Badge class="badge badge--secondary" text="interface"/>',id:"relationtypechangedevent-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:i=!1}=e;const[s,r]=(0,o.useState)(i);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&d)},h={Bullet:c,SpecifiedBy:g,Badge:p,toc:u,Details:b},m="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Event representing that the type of an incoming IssueRelation changed.\nREAD is granted if READ is granted on ",(0,l.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type OutgoingRelationTypeChangedEvent implements AuditedNode, BaseNode, Node, RelationTypeChangedEvent, TimelineItem {\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  issueRelation: IssueRelation!\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  newType: IssueRelationType\n  oldType: IssueRelationType\n  parentItem: ParentTimelineItem\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbcreatedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"createdBy"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbhaspermissionbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"hasPermission"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-outgoingrelationtypechangedeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.hasPermission.",(0,l.kt)("b",null,"permission"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"id"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbissuebcodeissue-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"issue"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue"},(0,l.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbissuerelationbcodeissuerelation--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"issueRelation"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueRelation!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The IssueRelation of which the type was changed")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventblastmodifiedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"lastModifiedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventblastmodifiedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"lastModifiedBy"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbnewtypebcodeissuerelationtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"newType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation-type"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueRelationType"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The new type.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventboldtypebcodeissuerelationtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"oldType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation-type"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueRelationType"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The old type.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-outgoingrelationtypechangedeventbparentitembcodeparenttimelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OutgoingRelationTypeChangedEvent.",(0,l.kt)("b",null,"parentItem"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"auditednode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,l.kt)("h4",{id:"basenode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,l.kt)("h4",{id:"relationtypechangedevent-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/relation-type-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"RelationTypeChangedEvent"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Event representing that the type of an IssueRelation changed.")),(0,l.kt)("h4",{id:"timelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/change-issue-relation-type-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"ChangeIssueRelationTypePayload")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-public/unions/public-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);