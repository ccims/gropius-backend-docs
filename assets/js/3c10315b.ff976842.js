"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76840],{84222:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=a(87462),n=a(67294),l=a(3905);a(61839);const o={id:"issue-state",title:"IssueState",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,r={unversionedId:"graphql/api-internal/objects/issue-state",id:"graphql/api-internal/objects/issue-state",title:"IssueState",description:"State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.",source:"@site/docs/graphql/api-internal/objects/issue-state.mdx",sourceDirName:"graphql/api-internal/objects",slug:"/graphql/api-internal/objects/issue-state",permalink:"/gropius-backend-docs/graphql/api-internal/objects/issue-state",draft:!1,tags:[],version:"current",frontMatter:{id:"issue-state",title:"IssueState",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"graphqlSidebar"},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>description</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatebdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>extensionField</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatebextensionfieldbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>extensionFields</b></code><Bullet /><code>[JSONField!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-issuestatebextensionfieldsbcodejsonfield--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>isOpen</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatebisopenbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>issuesWithState</b></code><Bullet /><code>IssueConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-issuestatebissueswithstatebcodeissueconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.issuesWithState.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestateissueswithstatebbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.issuesWithState.<b>filter</b></code><Bullet /><code>IssueFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-issuestateissueswithstatebfilterbcodeissuefilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.issuesWithState.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestateissueswithstatebfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.issuesWithState.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestateissueswithstateblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.issuesWithState.<b>orderBy</b></code><Bullet /><code>IssueOrder</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-issuestateissueswithstateborderbybcodeissueorder-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatebnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.<b>partOf</b></code><Bullet /><code>IssueTemplateConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-issuestatebpartofbcodeissuetemplateconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.partOf.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatepartofbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.partOf.<b>filter</b></code><Bullet /><code>IssueTemplateFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-issuestatepartofbfilterbcodeissuetemplatefilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.partOf.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatepartofbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.partOf.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-issuestatepartofblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>IssueState.partOf.<b>orderBy</b></code><Bullet /><code>IssueTemplateOrder</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-issuestatepartofborderbybcodeissuetemplateorder-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>ExtensibleNode</code> <Badge class="secondary" text="interface"/>',id:"extensiblenode-",level:4},{value:'<code>Named</code> <Badge class="secondary" text="interface"/>',id:"named-",level:4},{value:'<code>NamedNode</code> <Badge class="secondary" text="interface"/>',id:"namednode-",level:4},{value:'<code>Node</code> <Badge class="secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:c,Bullet:u,SpecifiedBy:p,Badge:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"State of an Issue like BUG or FEATURE_REQUEST. Part of an IssueTemplate.\nREAD is always granted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type IssueState implements ExtensibleNode, Named, NamedNode, Node {\n  description: String!\n  extensionField(\n  name: String!\n): JSON\n  extensionFields(\n  namePrefix: String\n): [JSONField!]!\n  id: ID!\n  isOpen: Boolean!\n  issuesWithState(\n  after: String\n  before: String\n  filter: IssueFilterInput\n  first: Int\n  last: Int\n  orderBy: IssueOrder\n): IssueConnection!\n  name: String!\n  partOf(\n  after: String\n  before: String\n  filter: IssueTemplateFilterInput\n  first: Int\n  last: Int\n  orderBy: IssueTemplateOrder\n): IssueTemplateConnection!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebdescriptionbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"description"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The description of this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebextensionfieldbcodejson-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"extensionField"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/json"},(0,l.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Value of an extension field by name of the extension field. Null if the field does not exist."),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-issuestateextensionfieldbnamebcodestring--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.extensionField.",(0,l.kt)("b",null,"name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Name of the extension field")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebextensionfieldsbcodejsonfield--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"extensionFields"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/jsonfield"},(0,l.kt)("inlineCode",{parentName:"a"},"[JSONField!]!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"All extension fields, if a ",(0,l.kt)("inlineCode",{parentName:"p"},"namePrefix")," is provided, only those matching it"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-issuestateextensionfieldsbnameprefixbcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.extensionFields.",(0,l.kt)("b",null,"namePrefix"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Name of the extension field.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"id"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The unique id of this node")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebisopenbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"isOpen"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If true and the issue has this state, the issue is considered open, otherwise closed")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebissueswithstatebcodeissueconnection--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"issuesWithState"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueConnection!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Issues with this state."),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-issuestateissueswithstatebafterbcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.issuesWithState.",(0,l.kt)("b",null,"after"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestateissueswithstatebbeforebcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.issuesWithState.",(0,l.kt)("b",null,"before"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestateissueswithstatebfilterbcodeissuefilterinput-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.issuesWithState.",(0,l.kt)("b",null,"filter"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/issue-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueFilterInput"))," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestateissueswithstatebfirstbcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.issuesWithState.",(0,l.kt)("b",null,"first"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestateissueswithstateblastbcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.issuesWithState.",(0,l.kt)("b",null,"last"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestateissueswithstateborderbybcodeissueorder-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.issuesWithState.",(0,l.kt)("b",null,"orderBy"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/issue-order"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueOrder"))," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The name of this entity.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-issuestatebpartofbcodeissuetemplateconnection--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.",(0,l.kt)("b",null,"partOf"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/objects/issue-template-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueTemplateConnection!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"IssueTemplates this is a part of."),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-issuestatepartofbafterbcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.partOf.",(0,l.kt)("b",null,"after"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Get only items after the cursor")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestatepartofbbeforebcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.partOf.",(0,l.kt)("b",null,"before"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get only items before the cursor")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestatepartofbfilterbcodeissuetemplatefilterinput-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.partOf.",(0,l.kt)("b",null,"filter"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/issue-template-filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueTemplateFilterInput"))," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter for specific items in the connection")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestatepartofbfirstbcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.partOf.",(0,l.kt)("b",null,"first"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the first n items. Must not be used if before is specified")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestatepartofblastbcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.partOf.",(0,l.kt)("b",null,"last"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the last n items. Must not be used if after is specified")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-issuestatepartofborderbybcodeissuetemplateorder-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IssueState.partOf.",(0,l.kt)("b",null,"orderBy"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/graphql/api-internal/inputs/issue-template-order"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueTemplateOrder"))," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Order in which the items are sorted")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"extensiblenode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/extensible-node"},(0,l.kt)("inlineCode",{parentName:"a"},"ExtensibleNode"))," ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Entity which provides dynamic extension fields.")),(0,l.kt)("h4",{id:"named-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/named"},(0,l.kt)("inlineCode",{parentName:"a"},"Named"))," ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Entity with a name and a description.")),(0,l.kt)("h4",{id:"namednode-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/named-node"},(0,l.kt)("inlineCode",{parentName:"a"},"NamedNode"))," ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ExtensibleNode with a name and description")),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/api-internal/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Base class of all nodes")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue"},(0,l.kt)("inlineCode",{parentName:"a"},"Issue")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-state-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueStateConnection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/issue-state-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"IssueStateEdge")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/graphql/api-internal/objects/state-changed-event"},(0,l.kt)("inlineCode",{parentName:"a"},"StateChangedEvent")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);