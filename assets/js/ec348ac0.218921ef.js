"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30121],{120089:(a,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var i=t(487462),e=(t(667294),t(603905)),n=t(689417);const l='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":github:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">imsProject<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">githubId<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">initialTitle<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">initialDescription<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter ">lastUpdate<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">createdAt<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">timelineItems<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html">MutableList</a><span class="token operator">&lt;</span><a href="../-github-timeline-item/index-">GithubTimelineItem</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">createdBy<span class="token operator">: </span><span data-unresolved-link="gropius.sync.github.generated.fragment/UserData///PointingToDeclaration/">UserData</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter ">number<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html">Int</a><span class="token operator"> = </span><span class="token constant">0</span><span class="token punctuation">, </span></span><span class="parameter ">url<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator"> = </span><span class="token string">""</span><span class="token punctuation">, </span></span><span class="parameter ">needsTimelineRequest<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token operator"> = </span><span class="token boolean">true</span><span class="token punctuation">, </span></span><span class="parameter ">needsCommentRequest<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token operator"> = </span><span class="token boolean">true</span><span class="token punctuation">, </span></span><span class="parameter ">hasUnsyncedData<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="token operator"> = </span><span class="token boolean">true</span></span></span><span class="token punctuation">)</span></div><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>ims</span><wbr><span><span>Project</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The IMS project ID</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>github</span><wbr><span><span>Id</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The GitHub ID of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>initial</span><wbr><span><span>Title</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The initial title of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>initial</span><wbr><span><span>Description</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The initial description of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>last</span><wbr><span><span>Update</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The last update date of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>created</span><wbr><span><span>At</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The creation date of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>timeline</span><wbr><span><span>Items</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The timeline items of the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>created</span><wbr><span><span>By</span></span></u></div></span></div><div><div class="title"><p class="paragraph">The GitHub user that created the issue</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>needs</span><wbr><span>Timeline</span><wbr><span><span>Request</span></span></u></div></span></div><div><div class="title"><p class="paragraph">Whether the timeline of the issue needs to be requested</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>needs</span><wbr><span>Comment</span><wbr><span><span>Request</span></span></u></div></span></div><div><div class="title"><p class="paragraph">Whether the comments of the issue need to be requested</p></div></div></div></div><div class="table-row" data-filterable-current=":github:dokkaHtmlPartial/main" data-filterable-set=":github:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>has</span><wbr><span>Unsynced</span><wbr><span><span>Data</span></span></u></div></span></div><div><div class="title"><p class="paragraph">Whether the issue has unsynced data</p></div></div></div></div></div></div></div>\n',p={},r="IssuePileData",d={unversionedId:"api/github/gropius.sync.github/-issue-pile-data/-issue-pile-data-",id:"api/github/gropius.sync.github/-issue-pile-data/-issue-pile-data-",title:"IssuePileData",description:"",source:"@site/docs/api/github/gropius.sync.github/-issue-pile-data/-issue-pile-data-.mdx",sourceDirName:"api/github/gropius.sync.github/-issue-pile-data",slug:"/api/github/gropius.sync.github/-issue-pile-data/-issue-pile-data-",permalink:"/gropius-backend-docs/api/github/gropius.sync.github/-issue-pile-data/-issue-pile-data-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IssuePileData",permalink:"/gropius-backend-docs/api/github/gropius.sync.github/-issue-pile-data/index-"},next:{title:"createIssue",permalink:"/gropius-backend-docs/api/github/gropius.sync.github/-issue-pile-data/create-issue-"}},o={},c=[],u={toc:c},v="wrapper";function m(a){let{components:s,...t}=a;return(0,e.kt)(v,(0,i.Z)({},u,t,{components:s,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"issuepiledata"},"IssuePileData"),(0,e.kt)(n.Z,{dokkaHTML:l,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);