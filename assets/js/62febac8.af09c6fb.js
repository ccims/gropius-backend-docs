"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65329],{493377:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var d=a(487462),n=a(667294),l=a(603905);const o={id:"templated-field-changed-event",title:"TemplatedFieldChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"graphql/api-internal/objects/templated-field-changed-event",id:"graphql/api-internal/objects/templated-field-changed-event",title:"TemplatedFieldChangedEvent",description:"Event representing that the value of a templated field changed.",source:"@site/docs/graphql/api-internal/objects/templated-field-changed-event.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/templated-field-changed-event",permalink:"/gropius-backend-docs/graphql/api-internal/objects/templated-field-changed-event",draft:!1,tags:[],version:"current",frontMatter:{id:"templated-field-changed-event",title:"TemplatedFieldChangedEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>fieldName</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbfieldnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>newValue</b></code><Bullet /><code>JSON</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbnewvaluebcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>oldValue</b></code><Bullet /><code>JSON</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventboldvaluebcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TemplatedFieldChangedEvent.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-templatedfieldchangedeventbparentitembcodeparenttimelineitem-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],h=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[s,r]=(0,n.useState)(i);return(0,l.kt)("details",(0,d.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},b={Bullet:c,SpecifiedBy:m,Badge:g,toc:p,Details:h},k="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,d.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Event representing that the value of a templated field changed.\nREAD is granted if READ is granted on ",(0,l.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type TemplatedFieldChangedEvent implements AuditedNode, BaseNode, Node, TimelineItem {\n  createdAt: DateTime!\n  createdBy: User!\n  fieldName: String!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  newValue: JSON\n  oldValue: JSON\n  parentItem: ParentTimelineItem\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbcreatedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"createdBy"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbfieldnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"fieldName"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The name of the templated field.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbhaspermissionbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"hasPermission"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-templatedfieldchangedeventhaspermissionbpermissionbcodeallpermissionentry-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.hasPermission.",(0,l.kt)("b",null,"permission"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"id"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbissuebcodeissue-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"issue"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue"},(0,l.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventblastmodifiedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"lastModifiedAt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventblastmodifiedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"lastModifiedBy"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbnewvaluebcodejson-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"newValue"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/json"},(0,l.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The new value of the templated field.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventboldvaluebcodejson-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"oldValue"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/json"},(0,l.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The old value of the templated field.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-templatedfieldchangedeventbparentitembcodeparenttimelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TemplatedFieldChangedEvent.",(0,l.kt)("b",null,"parentItem"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/parent-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"auditednode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/audited-node"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,l.kt)("h4",{id:"basenode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,l.kt)("h4",{id:"timelineitem-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/unions/public-timeline-item"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,l.kt)(g,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);