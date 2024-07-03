"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18113],{135630:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var p=a(487462),i=a(667294),n=a(603905);const l={id:"idfilter-input",title:"IDFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,d={unversionedId:"graphql/api-public/inputs/idfilter-input",id:"graphql/api-public/inputs/idfilter-input",title:"IDFilterInput",description:"Filter which can be used to filter for Nodes with a specific ID field",source:"@site/docs/graphql/api-public/inputs/idfilter-input.mdx",sourceDirName:"graphql/api-public/inputs",slug:"/graphql/api-public/inputs/idfilter-input",permalink:"/gropius-backend-docs/graphql/api-public/inputs/idfilter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"idfilter-input",title:"IDFilterInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},u={},s=()=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(i.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),o=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IDFilterInput.<b>eq</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-idfilterinputbeqbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IDFilterInput.<b>in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-idfilterinputbinbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[d,u]=(0,i.useState)(r);return(0,n.kt)("details",(0,p.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},k={Bullet:s,SpecifiedBy:m,Badge:c,toc:o,Details:g},b="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,p.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Filter which can be used to filter for Nodes with a specific ID field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input IDFilterInput {\n  eq: ID\n  in: [ID!]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-idfilterinputbeqbcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"IDFilterInput.",(0,n.kt)("b",null,"eq"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Matches values which are equal to the provided value")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-idfilterinputbinbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"IDFilterInput.",(0,n.kt)("b",null,"in"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/graphql/api-public/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,n.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Matches values which are equal to any of the provided values")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/affected-by-issue-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"AffectedByIssueFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/aggregated-issue-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"AggregatedIssueFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/aggregated-issue-relation-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"AggregatedIssueRelationFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/artefact-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ArtefactFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/artefact-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ArtefactTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/assignment-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"AssignmentFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/assignment-type-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"AssignmentTypeFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/audited-node-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"AuditedNodeFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/base-permission-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"BasePermissionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/body-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"BodyFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/comment-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"CommentFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/component-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/component-permission-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentPermissionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/component-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/component-version-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentVersionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/component-version-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentVersionTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/global-permission-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"GlobalPermissionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/gropius-user-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"GropiusUserFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imsfilter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imsissue-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSIssueFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imsissue-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSIssueTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imspermission-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSPermissionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imsproject-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSProjectFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imsproject-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSProjectTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imstemplate-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imsuser-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSUserFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/imsuser-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IMSUserTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-definition-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceDefinitionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-definition-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceDefinitionTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-part-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfacePartFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-part-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfacePartTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-specification-derivation-condition-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationDerivationConditionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-specification-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-specification-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-specification-version-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-specification-version-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceSpecificationVersionTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/interface-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InterfaceTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/intra-component-dependency-participant-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencyParticipantFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/intra-component-dependency-specification-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IntraComponentDependencySpecificationFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-comment-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-priority-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssuePriorityFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-relation-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueRelationFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-relation-type-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueRelationTypeFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-state-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueStateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/issue-type-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"IssueTypeFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/label-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"LabelFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/parent-timeline-item-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ParentTimelineItemFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/project-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ProjectFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/project-permission-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ProjectPermissionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-condition-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationConditionFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-partner-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationPartnerFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-partner-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationPartnerTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/relation-template-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"RelationTemplateFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/sync-permission-target-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SyncPermissionTargetFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/timeline-item-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TimelineItemFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/trackable-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrackableFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/graphql/api-public/inputs/user-filter-input"},(0,n.kt)("inlineCode",{parentName:"a"},"UserFilterInput")),"  ",(0,n.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);