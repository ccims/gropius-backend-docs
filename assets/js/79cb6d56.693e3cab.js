"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8338],{915149:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>o,Bullet:()=>u,Details:()=>k,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>g});var n=a(487462),i=a(667294),p=a(603905);const r={id:"idfilter-input",title:"IDFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,d={unversionedId:"graphql/api-internal/inputs/idfilter-input",id:"graphql/api-internal/inputs/idfilter-input",title:"IDFilterInput",description:"Filter which can be used to filter for Nodes with a specific ID field",source:"@site/docs/graphql/api-internal/inputs/idfilter-input.mdx",sourceDirName:"graphql/api-internal/inputs",slug:"/graphql/api-internal/inputs/idfilter-input",permalink:"/gropius-backend-docs/graphql/api-internal/inputs/idfilter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"idfilter-input",title:"IDFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},s={},u=()=>(0,p.kt)(i.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(i.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),o=e=>(0,p.kt)(i.Fragment,null,(0,p.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IDFilterInput.<b>eq</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-idfilterinputbeqbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IDFilterInput.<b>in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-idfilterinputbinbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[d,s]=(0,i.useState)(l);return(0,p.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,p.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&r)},c={Bullet:u,SpecifiedBy:m,Badge:o,toc:g,Details:k},y="wrapper";function f(e){let{components:t,...a}=e;return(0,p.kt)(y,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Filter which can be used to filter for Nodes with a specific ID field"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input IDFilterInput {\n  eq: ID\n  in: [ID!]\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-idfilterinputbeqbcodeid-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"IDFilterInput.",(0,p.kt)("b",null,"eq"))),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,p.kt)(o,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Matches values which are equal to the provided value")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-idfilterinputbinbcodeid--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"IDFilterInput.",(0,p.kt)("b",null,"in"))),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,p.kt)(o,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,p.kt)(o,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Matches values which are equal to any of the provided values")),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/affected-by-issue-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AffectedByIssueFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/aggregated-issue-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AggregatedIssueFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/aggregated-issue-relation-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AggregatedIssueRelationFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/artefact-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ArtefactFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/artefact-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ArtefactTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/assignment-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AssignmentFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/assignment-type-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AssignmentTypeFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/audited-node-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AuditedNodeFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/base-permission-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"BasePermissionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/body-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"BodyFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/comment-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"CommentFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/component-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ComponentFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/component-permission-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ComponentPermissionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/component-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ComponentTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/component-version-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ComponentVersionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/component-version-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ComponentVersionTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/global-permission-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"GlobalPermissionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/gropius-user-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsfilter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsissue-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSIssueFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsissue-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSIssueTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imspermission-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSPermissionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsproject-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSProjectFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsproject-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSProjectTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imstemplate-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsuser-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSUserFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/imsuser-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IMSUserTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-definition-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceDefinitionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-definition-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceDefinitionTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-part-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfacePartFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-part-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfacePartTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-specification-derivation-condition-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationDerivationConditionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-specification-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-specification-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-specification-version-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-specification-version-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/interface-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InterfaceTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/intra-component-dependency-participant-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencyParticipantFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/intra-component-dependency-specification-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencySpecificationFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-comment-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssueFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-priority-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssuePriorityFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-relation-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssueRelationFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-relation-type-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssueRelationTypeFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-state-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssueStateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssueTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/issue-type-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"IssueTypeFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/label-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"LabelFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/parent-timeline-item-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ParentTimelineItemFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/project-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ProjectFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/project-permission-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ProjectPermissionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/relation-condition-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"RelationConditionFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/relation-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"RelationFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/relation-partner-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"RelationPartnerFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/relation-partner-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/relation-template-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"RelationTemplateFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/sync-permission-target-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SyncPermissionTargetFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/timeline-item-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TimelineItemFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/trackable-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TrackableFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/graphql/api-internal/inputs/user-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UserFilterInput")),"  ",(0,p.kt)(o,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);