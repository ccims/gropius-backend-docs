"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89543],{848582:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(487462),i=(s(667294),s(603905)),d=s(689417);const n='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="add-affected-entity-to-issue-"><span class="token function">addAffectedEntityToIssue</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.issue/-add-affected-entity-to-issue-input/index-">AddAffectedEntityToIssueInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-added-affected-entity-event/index-">AddedAffectedEntityEvent</a><span class="token operator">?</span></div><p class="paragraph">Adds an <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> to an <a href="../../gropius.model.issue/-issue/index-">Issue</a>, returns the created <a href="../../gropius.model.issue.timeline/-added-affected-entity-event/index-">AddedAffectedEntityEvent</a>, or <code class="lang-kotlin">null</code> if the <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> was already on the <a href="../../gropius.model.issue/-issue/index-">Issue</a>. Checks the authorization status.</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the saved created <a href="../../gropius.model.issue.timeline/-added-affected-entity-event/index-">AddedAffectedEntityEvent</a> or <code class="lang-kotlin">null</code> if no event was created</p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for the required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines which <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> to add to which <a href="../../gropius.model.issue/-issue/index-">Issue</a></p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="add-affected-entity-to-issue-"><span class="token function">addAffectedEntityToIssue</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">issue<span class="token operator">: </span><a href="../../gropius.model.issue/-issue/index-">Issue</a><span class="token punctuation">, </span></span><span class="parameter ">affectedEntity<span class="token operator">: </span><a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a><span class="token punctuation">, </span></span><span class="parameter ">atTime<span class="token operator">: </span><a href="https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html">OffsetDateTime</a><span class="token punctuation">, </span></span><span class="parameter ">byUser<span class="token operator">: </span><a href="../../gropius.model.user/-user/index-">User</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.issue.timeline/-added-affected-entity-event/index-">AddedAffectedEntityEvent</a></div><p class="paragraph">Adds an <a href="add-affected-entity-to-issue-">affectedEntity</a> to an <a href="add-affected-entity-to-issue-">issue</a> at <a href="add-affected-entity-to-issue-">atTime</a> as <a href="add-affected-entity-to-issue-">byUser</a> and adds a <a href="../../gropius.model.issue.timeline/-added-affected-entity-event/index-">AddedAffectedEntityEvent</a> to the timeline. Creates the event even if the <a href="add-affected-entity-to-issue-">affectedEntity</a> was already affected by the <a href="add-affected-entity-to-issue-">issue</a>. Only adds the <a href="add-affected-entity-to-issue-">affectedEntity</a> to the <code class="lang-kotlin">affects</code> on the <a href="add-affected-entity-to-issue-">issue</a> if no newer timeline item exists which removes it again. Does not check the authorization status. Does neither save the created <a href="../../gropius.model.issue.timeline/-added-to-pinned-issues-event/index-">AddedToPinnedIssuesEvent</a> nor the <a href="add-affected-entity-to-issue-">issue</a>. It is necessary to save the <a href="add-affected-entity-to-issue-">issue</a> or returned <a href="../../gropius.model.issue.timeline/-added-affected-entity-event/index-">AddedAffectedEntityEvent</a> afterwards.</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>issue</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.issue/-issue/index-">Issue</a> which should affect <a href="add-affected-entity-to-issue-">affectedEntity</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>affected</span><wbr><span><span>Entity</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.architecture/-affected-by-issue/index-">AffectedByIssue</a> which should be affected by the <a href="add-affected-entity-to-issue-">issue</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>at</span><wbr><span><span>Time</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the point in time when the modification happened, updates <a href="../../gropius.model.issue/-issue/last-updated-at-">Issue.lastUpdatedAt</a> if necessary</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>by</span><wbr><span><span>User</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.user/-user/index-">User</a> who caused the update, updates <a href="../../gropius.model.issue/-issue/participants-">Issue.participants</a> if necessary</p></div></div></div></div></div><h4 class="">Throws</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-argument-exception/index.html"><span>Illegal</span><wbr><span>Argument</span><wbr><span><span>Exception</span></span></a></div></span></div><div><div class="title"><p class="paragraph">if <a href="add-affected-entity-to-issue-">issue</a> cannot affect the <a href="add-affected-entity-to-issue-">affectedEntity</a></p></div></div></div></div></div></div></div>\n',r={},o="addAffectedEntityToIssue",c={unversionedId:"api/core/gropius.service.issue/-issue-service/add-affected-entity-to-issue-",id:"api/core/gropius.service.issue/-issue-service/add-affected-entity-to-issue-",title:"addAffectedEntityToIssue",description:"",source:"@site/docs/api/core/gropius.service.issue/-issue-service/add-affected-entity-to-issue-.mdx",sourceDirName:"api/core/gropius.service.issue/-issue-service",slug:"/api/core/gropius.service.issue/-issue-service/add-affected-entity-to-issue-",permalink:"/gropius-backend-docs/api/core/gropius.service.issue/-issue-service/add-affected-entity-to-issue-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IssueService",permalink:"/gropius-backend-docs/api/core/gropius.service.issue/-issue-service/-issue-service-"},next:{title:"addArtefactToIssue",permalink:"/gropius-backend-docs/api/core/gropius.service.issue/-issue-service/add-artefact-to-issue-"}},p={},l=[],u={toc:l},f="wrapper";function v(e){let{components:a,...s}=e;return(0,i.kt)(f,(0,t.Z)({},u,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"addaffectedentitytoissue"},"addAffectedEntityToIssue"),(0,i.kt)(d.Z,{dokkaHTML:n,mdxType:"DokkaComponent"}))}v.isMDXComponent=!0}}]);