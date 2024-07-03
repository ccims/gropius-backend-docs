"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20632],{159068:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=e(487462),i=(e(667294),e(603905)),n=e(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-issue-"><span class="token function">createIssue</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.issue/-create-issue-input/index-">CreateIssueInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue/-issue/index-">Issue</a></div><p class="paragraph">Creates an <a href="../../gropius.model.issue/-issue/index-">Issue</a>. Checks the authorization status, checks that the <code class="lang-kotlin">type</code>, <code class="lang-kotlin">state</code> and <code class="lang-kotlin">templatedFields</code> are compatible with the <code class="lang-kotlin">template</code></p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the saved crated <a href="../../gropius.model.issue/-issue/index-">Issue</a></p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for the required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines the created <a href="../../gropius.model.issue/-issue/index-">Issue</a></p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-issue-"><span class="token function">createIssue</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">trackables<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../gropius.model.architecture/-trackable/index-">Trackable</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">template<span class="token operator">: </span><a href="../../gropius.model.template/-issue-template/index-">IssueTemplate</a><span class="token punctuation">, </span></span><span class="parameter ">title<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">body<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">type<span class="token operator">: </span><a href="../../gropius.model.template/-issue-type/index-">IssueType</a><span class="token punctuation">, </span></span><span class="parameter ">state<span class="token operator">: </span><a href="../../gropius.model.template/-issue-state/index-">IssueState</a><span class="token punctuation">, </span></span><span class="parameter ">templatedFields<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../gropius.dto.input.common/-j-s-o-n-field-input/index-">JSONFieldInput</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">atTime<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">byUser<span class="token operator">: </span><a href="../../gropius.model.user/-user/index-">User</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue/-issue/index-">Issue</a></div><p class="paragraph">Creates an <a href="../../gropius.model.issue/-issue/index-">Issue</a> at <a href="create-issue-">atTime</a> as <a href="create-issue-">byUser</a> on <a href="create-issue-">trackables</a>. Also creates the <a href="../../gropius.model.issue.timeline/-body/index-">Body</a> of the <a href="../../gropius.model.issue/-issue/index-">Issue</a>. Does not check the authorization status. Checks that <a href="create-issue-">trackables</a> is not empty, checks that the <a href="create-issue-">type</a>, <a href="create-issue-">state</a> and <a href="create-issue-">templatedFields</a> are compatible with <a href="create-issue-">template</a>. Does not save the created <a href="../../gropius.model.issue/-issue/index-">Issue</a>, it is required to save the returned <a href="../../gropius.model.issue/-issue/index-">Issue</a> afterwards.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>trackables</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.architecture/-trackable/index-">Trackable</a>s on which the <a href="../../gropius.model.issue/-issue/index-">Issue</a> is created</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>template</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the initial <a href="create-issue-">template</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>title</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the initial title</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>body</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the initial body, used to create the <a href="../../gropius.model.issue.timeline/-body/index-">Body</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>type</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the initial type, must be compatible with <a href="create-issue-">template</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>state</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the initial state, must be compatible with <a href="create-issue-">template</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>templated</span><wbr><span><span>Fields</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the initial templated fields, must be compatible with <a href="create-issue-">template</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>at</span><wbr><span><span>Time</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the point in time when the <a href="../../gropius.model.issue/-issue/index-">Issue</a> is created</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>by</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.user/-user/index-">User</a> who creates the <a href="../../gropius.model.issue/-issue/index-">Issue</a></p></div></div></div></div></div></div></div>\n',l={},p="createIssue",o={unversionedId:"api/core/gropius.service.issue/-issue-service/create-issue-",id:"api/core/gropius.service.issue/-issue-service/create-issue-",title:"createIssue",description:"",source:"@site/docs/api/core/gropius.service.issue/-issue-service/create-issue-.mdx",sourceDirName:"api/core/gropius.service.issue/-issue-service",slug:"/api/core/gropius.service.issue/-issue-service/create-issue-",permalink:"/gropius-backend-docs/api/core/gropius.service.issue/-issue-service/create-issue-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"createIssueRelation",permalink:"/gropius-backend-docs/api/core/gropius.service.issue/-issue-service/create-issue-relation-"},next:{title:"deleteIssueComment",permalink:"/gropius-backend-docs/api/core/gropius.service.issue/-issue-service/delete-issue-comment-"}},d={},c=[],u={toc:c},v="wrapper";function m(a){let{components:s,...e}=a;return(0,i.kt)(v,(0,t.Z)({},u,e,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"createissue"},"createIssue"),(0,i.kt)(n.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);