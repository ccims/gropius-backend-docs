"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25889],{777673:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(487462),t=(n(667294),n(603905)),o=n(689417);const r='\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-component-version-"><span class="token function">createComponentVersion</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.architecture/-create-component-version-input/index-">CreateComponentVersionInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a></div><p class="paragraph">Creates a new <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a> based on the provided <a href="create-component-version-">input</a> Checks the authorization status</p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the saved created <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a></p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>authorization</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">used to check for the required permission</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines the <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a></p></div></div></div></div></div><hr><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-component-version-"><span class="token function">createComponentVersion</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">component<span class="token operator">: </span><a href="../../gropius.model.architecture/-component/index-">Component</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.architecture/-component-version-input/index-">ComponentVersionInput</a><span class="token punctuation">, </span></span><span class="parameter ">updateContext<span class="token operator">: </span><a href="../../gropius.service/-node-batch-update-context/index-">NodeBatchUpdateContext</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a></div><p class="paragraph">Creates a new <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a> based on the provided <a href="create-component-version-">input</a> on <a href="create-component-version-">component</a> Does not check the authorization status, does not save the created nodes Validates the <a href="create-component-version-">input</a></p><span class="kdoc-tag"><h4 class="">Return</h4><p class="paragraph">the created <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a></p></span><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>component</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the <a href="../../gropius.model.architecture/-component/index-">Component</a> the created <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a> is part of</p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>input</span></span></u></div></span></div><div><div class="title"><p class="paragraph">defines the <a href="../../gropius.model.architecture/-component-version/index-">ComponentVersion</a></p></div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span>update</span><wbr><span><span>Context</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the context used to update the nodes</p></div></div></div></div></div></div></div>\n',i={},p="createComponentVersion",c={unversionedId:"api/core/gropius.service.architecture/-component-version-service/create-component-version-",id:"api/core/gropius.service.architecture/-component-version-service/create-component-version-",title:"createComponentVersion",description:"",source:"@site/docs/api/core/gropius.service.architecture/-component-version-service/create-component-version-.mdx",sourceDirName:"api/core/gropius.service.architecture/-component-version-service",slug:"/api/core/gropius.service.architecture/-component-version-service/create-component-version-",permalink:"/gropius-backend-docs/api/core/gropius.service.architecture/-component-version-service/create-component-version-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"addInterfaceSpecificationToComponentVersion",permalink:"/gropius-backend-docs/api/core/gropius.service.architecture/-component-version-service/add-interface-specification-to-component-version-"},next:{title:"deleteComponentVersion",permalink:"/gropius-backend-docs/api/core/gropius.service.architecture/-component-version-service/delete-component-version-"}},d={},l=[],u={toc:l},v="wrapper";function m(e){let{components:a,...n}=e;return(0,t.kt)(v,(0,s.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"createcomponentversion"},"createComponentVersion"),(0,t.kt)(o.Z,{dokkaHTML:r,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);