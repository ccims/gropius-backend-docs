"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88734],{482130:(a,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var t=i(487462),n=(i(667294),i(603905)),e=i(689417);const l='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":jira:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">imsProject<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">expand<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">jiraId<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">self<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">key<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">editmeta<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span><span class="token punctuation">, </span></span><span class="parameter ">changelog<span class="token operator">: </span><a href="../-change-log-container/index-">ChangeLogContainer</a><span class="token punctuation">, </span></span><span class="parameter ">fields<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html">MutableMap</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span data-unresolved-link="kotlinx.serialization.json/JsonElement///PointingToDeclaration/">JsonElement</span><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">names<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span><span class="token punctuation">, </span></span><span class="parameter ">schema<span class="token operator">: </span><span data-unresolved-link="kotlinx.serialization.json/JsonObject///PointingToDeclaration/">JsonObject</span><span class="token punctuation">, </span></span><span class="parameter ">comments<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html">MutableMap</a><span class="token operator">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><a href="../-jira-comment/index-">JiraComment</a><span class="token operator">&gt;</span><span class="token operator"> = </span>mutableMapOf()</span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Project</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the ims project the issue belongs to</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>expand</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the expand string</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>jira</span><wbr><span><span>Id</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the id of the issue in Jira</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>self</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the self link</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>key</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the key of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>editmeta</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the edit meta data</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>changelog</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the changelog</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>fields</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the fields</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>names</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the names</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>schema</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the schema</p></div></div></div></div><div class="table-row" data-filterable-current=":jira:dokkaHtmlPartial/main" data-filterable-set=":jira:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>comments</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the comments</p></div></div></div></div></div></div></div>\n',p={},r="IssueData",d={unversionedId:"api/jira/gropius.sync.jira.model/-issue-data/-issue-data-",id:"api/jira/gropius.sync.jira.model/-issue-data/-issue-data-",title:"IssueData",description:"",source:"@site/docs/api/jira/gropius.sync.jira.model/-issue-data/-issue-data-.mdx",sourceDirName:"api/jira/gropius.sync.jira.model/-issue-data",slug:"/api/jira/gropius.sync.jira.model/-issue-data/-issue-data-",permalink:"/gropius-backend-docs/api/jira/gropius.sync.jira.model/-issue-data/-issue-data-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"formatter",permalink:"/gropius-backend-docs/api/jira/gropius.sync.jira.model/-issue-data/-companion/formatter-"},next:{title:"bean",permalink:"/gropius-backend-docs/api/jira/gropius.sync.jira.model/-issue-data/bean-"}},o={},c=[],v={toc:c},m="wrapper";function u(a){let{components:s,...i}=a;return(0,n.kt)(m,(0,t.Z)({},v,i,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"issuedata"},"IssueData"),(0,n.kt)(e.Z,{dokkaHTML:l,mdxType:"DokkaComponent"}))}u.isMDXComponent=!0}}]);