"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99023],{923449:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var t=a(487462),n=(a(667294),a(603905)),o=a(689417);const i='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":api-public:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><a href="../../../api-common/gropius.graphql/-auto-payload-type/index-"><span class="token annotation builtin">AutoPayloadType</span></a><span class="token punctuation">(</span><span>description<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"The updated IssueComment"</span></span></span><wbr><span class="token punctuation">)</span></div></div><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="delete-issue-comment-"><span class="token function">deleteIssueComment</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">input<span class="token operator">: </span><a href="../../../core/gropius.dto.input.common/-delete-node-input/index-">DeleteNodeInput</a><span class="token punctuation">, </span></span><span class="parameter ">dfe<span class="token operator">: </span><span data-unresolved-link="graphql.schema/DataFetchingEnvironment///PointingToDeclaration/">DataFetchingEnvironment</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../../core/gropius.model.issue.timeline/-issue-comment/index-">IssueComment</a></div><p class="paragraph">Deletes an IssueComment. If the user created the IssueComment, requires READ on any of the Trackables the Issue is on. Otherwise, requires MODERATOR on any of the Trackables the Issue is on. The IssueComment then is marked as deleted, its body set to "", and the referenced Artefacts are cleared. It is no longer possible to update the IssueComment.</p></div></div>\n',p={},u="deleteIssueComment",c={unversionedId:"api/api-public/gropius.schema.mutation/-issue-mutations/delete-issue-comment-",id:"api/api-public/gropius.schema.mutation/-issue-mutations/delete-issue-comment-",title:"deleteIssueComment",description:"",source:"@site/docs/api/api-public/gropius.schema.mutation/-issue-mutations/delete-issue-comment-.mdx",sourceDirName:"api/api-public/gropius.schema.mutation/-issue-mutations",slug:"/api/api-public/gropius.schema.mutation/-issue-mutations/delete-issue-comment-",permalink:"/gropius-backend-docs/api/api-public/gropius.schema.mutation/-issue-mutations/delete-issue-comment-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"deleteArtefact",permalink:"/gropius-backend-docs/api/api-public/gropius.schema.mutation/-issue-mutations/delete-artefact-"},next:{title:"deleteIssue",permalink:"/gropius-backend-docs/api/api-public/gropius.schema.mutation/-issue-mutations/delete-issue-"}},r={},l=[],m={toc:l},d="wrapper";function k(e){let{components:s,...a}=e;return(0,n.kt)(d,(0,t.Z)({},m,a,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deleteissuecomment"},"deleteIssueComment"),(0,n.kt)(o.Z,{dokkaHTML:i,mdxType:"DokkaComponent"}))}k.isMDXComponent=!0}}]);