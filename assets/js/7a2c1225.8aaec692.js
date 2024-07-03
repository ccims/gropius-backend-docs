"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34400],{630404:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=a(487462),o=a(667294),i=a(603905);const r={id:"page-info",title:"PageInfo",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"graphql/api-internal/objects/page-info",id:"graphql/api-internal/objects/page-info",title:"PageInfo",description:"Information about the current page in a connection",source:"@site/docs/graphql/api-internal/objects/page-info.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/page-info",permalink:"/gropius-backend-docs/graphql/api-internal/objects/page-info",draft:!1,tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>endCursor</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobendcursorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>hasNextPage</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>hasPreviousPage</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobhaspreviouspagebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>startCursor</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobstartcursorbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[c,d]=(0,o.useState)(l);return(0,i.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&r)},k={Bullet:p,SpecifiedBy:s,Badge:g,toc:m,Details:b},y="wrapper";function x(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Information about the current page in a connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInfo {\n  endCursor: String\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pageinfobendcursorbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,i.kt)("b",null,"endCursor"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When paginating backwards, the cursor to continue")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,i.kt)("b",null,"hasNextPage"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When paginating forwards, are there more items?")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pageinfobhaspreviouspagebcodeboolean--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,i.kt)("b",null,"hasPreviousPage"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When paginating backwards, are there more items?")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pageinfobstartcursorbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,i.kt)("b",null,"startCursor"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When paginating forwards, the cursor to continue")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/affected-by-issue-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AffectedByIssueConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/aggregated-issue-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AggregatedIssueConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/aggregated-issue-relation-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AggregatedIssueRelationConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/artefact-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ArtefactConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/artefact-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ArtefactTemplateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/assignment-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AssignmentConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/assignment-type-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AssignmentTypeConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/audited-node-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AuditedNodeConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/base-permission-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"BasePermissionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-permission-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentPermissionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentTemplateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/component-version-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ComponentVersionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/global-permission-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"GlobalPermissionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/gropius-user-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"GropiusUserConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsconnection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsissue-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSIssueConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imspermission-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSPermissionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsproject-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSProjectConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imstemplate-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSTemplateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/imsuser-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IMSUserConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-definition-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceDefinitionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-part-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfacePartConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-derivation-condition-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationDerivationConditionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationTemplateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/interface-specification-version-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/intra-component-dependency-participant-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencyParticipantConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/intra-component-dependency-specification-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencySpecificationConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-comment-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueCommentConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-priority-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssuePriorityConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-relation-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueRelationConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-relation-type-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueRelationTypeConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-state-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueStateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueTemplateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-type-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"IssueTypeConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/label-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"LabelConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ProjectConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/project-permission-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ProjectPermissionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-condition-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationConditionConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-partner-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/relation-template-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationTemplateConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/sync-permission-target-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"SyncPermissionTargetConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/timeline-item-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"TimelineItemConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/trackable-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"TrackableConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/user-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"UserConnection")),"  ",(0,i.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}x.isMDXComponent=!0}}]);