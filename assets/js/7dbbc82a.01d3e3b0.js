"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26315],{580448:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>m,Details:()=>p,SpecifiedBy:()=>c,assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var n=a(487462),o=a(667294),d=a(603905);const l={id:"comment",title:"Comment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,r={unversionedId:"graphql/api-internal/interfaces/comment",id:"graphql/api-internal/interfaces/comment",title:"Comment",description:"Supertype for IssueComment and Body.",source:"@site/docs/graphql/api-internal/interfaces/comment.mdx",sourceDirName:"graphql/api-internal/interfaces",slug:"/graphql/api-internal/interfaces/comment",permalink:"/gropius-backend-docs/graphql/api-internal/interfaces/comment",draft:!1,tags:[],version:"current",frontMatter:{id:"comment",title:"Comment",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},i={},m=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>answeredBy</b></code><Bullet /><code>IssueCommentConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-commentbansweredbybcodeissuecommentconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.answeredBy.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentansweredbybbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.answeredBy.<b>filter</b></code><Bullet /><code>IssueCommentFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-commentansweredbybfilterbcodeissuecommentfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.answeredBy.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentansweredbybfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.answeredBy.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentansweredbyblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.answeredBy.<b>orderBy</b></code><Bullet /><code>[IssueCommentOrder!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-commentansweredbyborderbybcodeissuecommentorder--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.answeredBy.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentansweredbybskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>body</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentbbodybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>bodyLastEditedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentbbodylasteditedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>bodyLastEditedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-commentbbodylasteditedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>createdBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-commentbcreatedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>hasPermission</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentbhaspermissionbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>issue</b></code><Bullet /><code>Issue</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-commentbissuebcodeissue-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>lastModifiedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentblastmodifiedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>lastModifiedBy</b></code><Bullet /><code>User!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-commentblastmodifiedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Comment.<b>parentItem</b></code><Bullet /><code>ParentTimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-commentbparentitembcodeparenttimelineitem-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AuditedNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"auditednode-",level:4},{value:'<code>BaseNode</code> <Badge class="badge badge--secondary" text="interface"/>',id:"basenode-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:'<code>TimelineItem</code> <Badge class="badge badge--secondary" text="interface"/>',id:"timelineitem-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:s=!1}=e;const[r,i]=(0,o.useState)(s);return(0,d.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&l)},k={Bullet:m,SpecifiedBy:c,Badge:b,toc:g,Details:p},y="wrapper";function h(e){let{components:t,...a}=e;return(0,d.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Supertype for IssueComment and Body.\nRepresents a text block in the Timeline.\nKeeps track when it was last edited and by who, but does not keep track of the change history.\nREAD is granted if READ is granted on ",(0,d.kt)("inlineCode",{parentName:"p"},"issue"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Comment implements AuditedNode, BaseNode, Node, TimelineItem {\n  answeredBy(\n    after: String\n    before: String\n    filter: IssueCommentFilterInput\n    first: Int\n    last: Int\n    orderBy: [IssueCommentOrder!]\n    skip: Int\n  ): IssueCommentConnection!\n  body: String!\n  bodyLastEditedAt: DateTime!\n  bodyLastEditedBy: User!\n  createdAt: DateTime!\n  createdBy: User!\n  hasPermission(\n    permission: AllPermissionEntry\n  ): Boolean!\n  id: ID!\n  issue: Issue\n  lastModifiedAt: DateTime!\n  lastModifiedBy: User!\n  parentItem: ParentTimelineItem\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbansweredbybcodeissuecommentconnection--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"answeredBy"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-comment-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"IssueCommentConnection!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"IssueComments which answer this Comment."),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-commentansweredbybafterbcodestring-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.answeredBy.",(0,d.kt)("b",null,"after"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-commentansweredbybbeforebcodestring-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.answeredBy.",(0,d.kt)("b",null,"before"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-commentansweredbybfilterbcodeissuecommentfilterinput-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.answeredBy.",(0,d.kt)("b",null,"filter"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/issue-comment-filter-input"},(0,d.kt)("inlineCode",{parentName:"a"},"IssueCommentFilterInput"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-commentansweredbybfirstbcodeint-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.answeredBy.",(0,d.kt)("b",null,"first"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-commentansweredbyblastbcodeint-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.answeredBy.",(0,d.kt)("b",null,"last"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-commentansweredbyborderbybcodeissuecommentorder--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.answeredBy.",(0,d.kt)("b",null,"orderBy"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/issue-comment-order"},(0,d.kt)("inlineCode",{parentName:"a"},"[IssueCommentOrder!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-commentansweredbybskipbcodeint-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.answeredBy.",(0,d.kt)("b",null,"skip"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Skips n items. First or last MUST be specified, is otherwise ignored")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbbodybcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"body"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The text of the Comment.\nSupports GFM (GitHub Flavored Markdown).\nUpdates cause lastEditedAt and lastEditedBy to change.\nEmpty String if IssueComment is deleted.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbbodylasteditedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"bodyLastEditedAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Keep track when the body of the Comment was last updated.\nIf not updated yet, the DateTime of creation.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbbodylasteditedbybcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"bodyLastEditedBy"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The User who last edited the body of this Comment.\nIf not edited yet, the creator of the Comment.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The DateTime this entity was created at.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbcreatedbybcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"createdBy"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The User who created this entity.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbhaspermissionbcodeboolean--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"hasPermission"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Checks if the current user has a specific permission on this Node"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-commenthaspermissionbpermissionbcodeallpermissionentry-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.hasPermission.",(0,d.kt)("b",null,"permission"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/graphql/api-internal/enums/all-permission-entry"},(0,d.kt)("inlineCode",{parentName:"a"},"AllPermissionEntry"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"The permission to check for")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"id"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbissuebcodeissue-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"issue"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue"},(0,d.kt)("inlineCode",{parentName:"a"},"Issue"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The Issue this TimelineItem is part of.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentblastmodifiedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"lastModifiedAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The DateTime this entity was last modified at.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentblastmodifiedbybcodeuser--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"lastModifiedBy"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/user"},(0,d.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The User who last modified this entity.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-commentbparentitembcodeparenttimelineitem-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Comment.",(0,d.kt)("b",null,"parentItem"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/parent-timeline-item"},(0,d.kt)("inlineCode",{parentName:"a"},"ParentTimelineItem"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"If existing, the parent TimelineItem")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"auditednode-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/audited-node"},(0,d.kt)("inlineCode",{parentName:"a"},"AuditedNode"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Node which provides auditing information, which can e.g. be used for the sync.\nWhen it was created and last modified, if the it is already deleted, and by who it was created and last modified.\nA modification is any change of a field on the node itself and a change of a relation (add or removed).\nA change on a related related node is not a modification.")),(0,d.kt)("h4",{id:"basenode-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/base-node"},(0,d.kt)("inlineCode",{parentName:"a"},"BaseNode"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Shared extensions to the node type.")),(0,d.kt)("h4",{id:"node-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,d.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,d.kt)("h4",{id:"timelineitem-"},(0,d.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/timeline-item"},(0,d.kt)("inlineCode",{parentName:"a"},"TimelineItem"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Supertype of all timeline items. Always part of an Issue.")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"IssueComment")),"  ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/body"},(0,d.kt)("inlineCode",{parentName:"a"},"Body")),"  ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-comment"},(0,d.kt)("inlineCode",{parentName:"a"},"IssueComment")),"  ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);