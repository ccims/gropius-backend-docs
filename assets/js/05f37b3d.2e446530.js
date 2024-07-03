"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6114],{399526:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>b});var n=a(487462),l=a(667294),o=a(603905);const i={id:"issue-relation",title:"IssueRelation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,d={unversionedId:"graphql/api-public/objects/issue-relation",id:"graphql/api-public/objects/issue-relation",title:"IssueRelation",description:"Event representing that a relation between two Issues has been created.",source:"@site/docs/graphql/api-public/objects/issue-relation.mdx",sourceDirName:"graphql/api-public/objects",slug:"/graphql/api-public/objects/issue-relation",permalink:"/gropius-backend-docs/graphql/api-public/objects/issue-relation",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-relation",title:"IssueRelation",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},r={},c=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>aggregatedBy</b></code><Bullet /><code>AggregatedIssueRelationConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationbaggregatedbybcodeaggregatedissuerelationconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.aggregatedBy.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationaggregatedbybbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.aggregatedBy.<b>filter</b></code><Bullet /><code>AggregatedIssueRelationFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuerelationaggregatedbybfilterbcodeaggregatedissuerelationfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.aggregatedBy.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationaggregatedbybfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.aggregatedBy.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationaggregatedbyblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.aggregatedBy.<b>orderBy</b></code><Bullet /><code>[AggregatedIssueRelationOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-issuerelationaggregatedbyborderbybcodeaggregatedissuerelationorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.aggregatedBy.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationaggregatedbybskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-issuerelationbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>initialType</b></code><Bullet /><code>IssueRelationType</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationbinitialtypebcodeissuerelationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuerelationblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-issuerelationblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-issuerelationbparentitembcodeparenttimelineitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>relatedIssue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationbrelatedissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueRelation.<b>type</b></code><Bullet /><code>IssueRelationType</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-issuerelationbtypebcodeissuerelationtype-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:s=!1}=e;const[d,r]=(0,l.useState)(s);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&i)},m={Bullet:c,SpecifiedBy:g,Badge:p,toc:b,Details:u},k="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Event representing that a relation between two Issues has been created.\nAn IssueRelation is only active if it is still in ",(0,o.kt)("inlineCode",{parentName:"p"},"outgoingRelations")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"issue"),",\nrespectively in incomingRelations on the ",(0,o.kt)("inlineCode",{parentName:"p"},"relatedIssue"),".\nCaution: This is ",(0,o.kt)("strong",{parentName:"p"},"not")," a subtype of Relation.\nREAD is granted if READ is granted on ",(0,o.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type IssueRelation implements AuditedNode, BaseNode, Node, TimelineItem {\n  aggregatedBy(\n    after: String\n    before: String\n    filter: AggregatedIssueRelationFilterInput\n    first: Int\n    last: Int\n    orderBy: [AggregatedIssueRelationOrder!]\n    skip: Int\n  ): AggregatedIssueRelationConnection!\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  initialType: IssueRelationType\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  parentItem: ParentTimelineItem\n  relatedIssue: Issue\n  type: IssueRelationType\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbaggregatedbybcodeaggregatedissuerelationconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"aggregatedBy"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/aggregated-issue-relation-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"AggregatedIssueRelationConnection!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The AggregatedIssueRelations this IssueRelation is aggregated by."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-issuerelationaggregatedbybafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.aggregatedBy.",(0,o.kt)("b",null,"after"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-issuerelationaggregatedbybbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.aggregatedBy.",(0,o.kt)("b",null,"before"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-issuerelationaggregatedbybfilterbcodeaggregatedissuerelationfilterinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.aggregatedBy.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/aggregated-issue-relation-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AggregatedIssueRelationFilterInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-issuerelationaggregatedbybfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.aggregatedBy.",(0,o.kt)("b",null,"first"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-issuerelationaggregatedbyblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.aggregatedBy.",(0,o.kt)("b",null,"last"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-issuerelationaggregatedbyborderbybcodeaggregatedissuerelationorder--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.aggregatedBy.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/inputs/aggregated-issue-relation-order"},(0,o.kt)("inlineCode",{parentName:"a"},"[AggregatedIssueRelationOrder!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-issuerelationaggregatedbybskipbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.aggregatedBy.",(0,o.kt)("b",null,"skip"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbcreatedbybcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"createdBy"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbhaspermissionbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"hasPermission"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-issuerelationhaspermissionbpermissionbcodeallpermissionentry-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.hasPermission.",(0,o.kt)("b",null,"permission"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/graphql/api-public/enums/all-permission-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"id"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbinitialtypebcodeissuerelationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"initialType"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation-type"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueRelationType"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The initial type of the relation, e.g. DUPLICATES. Allowed types are defined by the IssueTemplate.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbissuebcodeissue-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"issue"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue"},(0,o.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationblastmodifiedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"lastModifiedAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationblastmodifiedbybcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"lastModifiedBy"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbparentitembcodeparenttimelineitem-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"parentItem"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/parent-timeline-item"},(0,o.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbrelatedissuebcodeissue-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"relatedIssue"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue"},(0,o.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The end of the relation, null if deleted.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-issuerelationbtypebcodeissuerelationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IssueRelation.",(0,o.kt)("b",null,"type"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/objects/issue-relation-type"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueRelationType"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of the relation, e.g. DUPLICATES. Allowed types are defined by the IssueTemplate.")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"auditednode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/audited-node"},(0,o.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,o.kt)("h4",{id:"basenode-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/base-node"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,o.kt)("h4",{id:"node-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,o.kt)("h4",{id:"timelineitem-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/api-public/interfaces/timeline-item"},(0,o.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/create-issue-relation-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateIssueRelationPayload")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/incoming-relation-type-changed-event"},(0,o.kt)("inlineCode",{parentName:"a"},"IncomingRelationTypeChangedEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/issue-relation-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueRelationConnection")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/issue-relation-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"IssueRelationEdge")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/outgoing-relation-type-changed-event"},(0,o.kt)("inlineCode",{parentName:"a"},"OutgoingRelationTypeChangedEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/related-by-issue-event"},(0,o.kt)("inlineCode",{parentName:"a"},"RelatedByIssueEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/relation-type-changed-event"},(0,o.kt)("inlineCode",{parentName:"a"},"RelationTypeChangedEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-incoming-relation-event"},(0,o.kt)("inlineCode",{parentName:"a"},"RemovedIncomingRelationEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/objects/removed-outgoing-relation-event"},(0,o.kt)("inlineCode",{parentName:"a"},"RemovedOutgoingRelationEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/interfaces/removed-relation-event"},(0,o.kt)("inlineCode",{parentName:"a"},"RemovedRelationEvent")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/api-public/unions/public-timeline-item"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicTimelineItem")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);