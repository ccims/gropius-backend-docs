"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39012],{216338:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=e(487462),i=(e(667294),e(603905)),t=e(689417);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.stereotype/Service///PointingToDeclaration/"><span class="token annotation builtin">Service</span></span></div></div><span class="token keyword">class </span><a href="index-">InterfaceDefinitionService</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-interface-definition-repository/index-">InterfaceDefinitionRepository</a><span class="token punctuation">, </span></span><span class="parameter ">templatedNodeService<span class="token operator">: </span><a href="../../gropius.service.template/-templated-node-service/index-">TemplatedNodeService</a></span></span><span class="token punctuation">)</span> : <a href="../../gropius.service.common/-node-service/index-">NodeService</a><span class="token operator">&lt;</span><a href="../../gropius.model.architecture/-interface-definition/index-">InterfaceDefinition</a><span class="token punctuation">, </span><a href="../../gropius.repository.architecture/-interface-definition-repository/index-">InterfaceDefinitionRepository</a><span class="token operator">&gt; </span></div><p class="paragraph">Service for <a href="../../gropius.model.architecture/-interface-definition/index-">InterfaceDefinition</a>s. Provides functions to create, update and delete</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the associated repository used for CRUD functionality</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-416587798%2FConstructors%2F537371977" anchor-label="InterfaceDefinitionService" id="-416587798%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-interface-definition-service-"><span>Interface</span><wbr><span>Definition</span><wbr><span><span>Service</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-416587798%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.architecture/-interface-definition-repository/index-">InterfaceDefinitionRepository</a><span class="token punctuation">, </span></span><span class="parameter ">templatedNodeService<span class="token operator">: </span><a href="../../gropius.service.template/-templated-node-service/index-">TemplatedNodeService</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1539425363%2FProperties%2F537371977" anchor-label="authorizationChecker" id="-1539425363%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/authorization-checker-"><span>authorization</span><wbr><span><span>Checker</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1539425363%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/authorization-checker-">authorizationChecker</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/AuthorizationChecker///PointingToDeclaration/">AuthorizationChecker</span></div><div class="brief "><p class="paragraph">Injected, used for the <a href="../../gropius.service.common/-node-service/check-permission-">checkPermission</a> function</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-614283711%2FProperties%2F537371977" anchor-label="gropiusUserRepository" id="-614283711%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/gropius-user-repository-"><span>gropius</span><wbr><span>User</span><wbr><span><span>Repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-614283711%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/gropius-user-repository-">gropiusUserRepository</a><span class="token operator">: </span><a href="../../gropius.repository.user/-gropius-user-repository/index-">GropiusUserRepository</a></div><div class="brief "><p class="paragraph">Injected, used to get a user based on a <a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-661731297%2FProperties%2F537371977" anchor-label="repository" id="-661731297%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/repository-"><span><span>repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-661731297%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.service.common/-node-service/repository-">repository</a><span class="token operator">: </span><a href="../../gropius.repository.architecture/-interface-definition-repository/index-">InterfaceDefinitionRepository</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="1208075282%2FFunctions%2F537371977" anchor-label="checkIsAdmin" id="1208075282%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-is-admin-"><span>check</span><wbr><span>Is</span><wbr><span><span>Admin</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1208075282%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-is-admin-"><span class="token function">checkIsAdmin</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the user defined by <a href="../../gropius.service.common/-node-service/check-is-admin-">authorizationContext</a> is a global admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-639991891%2FFunctions%2F537371977" anchor-label="checkPermission" id="-639991891%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-permission-"><span>check</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-639991891%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-permission-"><span class="token function">checkPermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the <a href="../../gropius.service.common/-node-service/check-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/check-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-688546239%2FFunctions%2F537371977" anchor-label="evaluatePermission" id="-688546239%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span>evaluate</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-688546239%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span class="token function">evaluatePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">Evaluates if the <a href="../../gropius.service.common/-node-service/evaluate-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/evaluate-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-462313879%2FFunctions%2F537371977" anchor-label="getUser" id="-462313879%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/get-user-"><span>get</span><wbr><span><span>User</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-462313879%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/get-user-"><span class="token function">getUser</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a></div><div class="brief "><p class="paragraph">Gets a <a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a> based on the userId from the <a href="../../gropius.service.common/-node-service/get-user-">authorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="122505328%2FFunctions%2F537371977" anchor-label="updateInterfaceDefinition" id="122505328%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="update-interface-definition-"><span>update</span><wbr><span>Interface</span><wbr><span><span>Definition</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="122505328%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="update-interface-definition-"><span class="token function">updateInterfaceDefinition</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.architecture/-update-interface-definition-input/index-">UpdateInterfaceDefinitionInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.architecture/-interface-definition/index-">InterfaceDefinition</a></div><div class="brief "><p class="paragraph">Updates a <a href="../../gropius.model.architecture/-interface-definition/index-">InterfaceDefinition</a> based on the provided <a href="update-interface-definition-">input</a> Checks the authorization status</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',r={},p="InterfaceDefinitionService",c={unversionedId:"api/core/gropius.service.architecture/-interface-definition-service/index-",id:"api/core/gropius.service.architecture/-interface-definition-service/index-",title:"InterfaceDefinitionService",description:"",source:"@site/docs/api/core/gropius.service.architecture/-interface-definition-service/index-.mdx",sourceDirName:"api/core/gropius.service.architecture/-interface-definition-service",slug:"/api/core/gropius.service.architecture/-interface-definition-service/index-",permalink:"/gropius-backend-docs/api/core/gropius.service.architecture/-interface-definition-service/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"updateIMS",permalink:"/gropius-backend-docs/api/core/gropius.service.architecture/-i-m-s-service/update-i-m-s-"},next:{title:"InterfaceDefinitionService",permalink:"/gropius-backend-docs/api/core/gropius.service.architecture/-interface-definition-service/-interface-definition-service-"}},d={},l=[],v={toc:l},u="wrapper";function m(a){let{components:n,...e}=a;return(0,i.kt)(u,(0,s.Z)({},v,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interfacedefinitionservice"},"InterfaceDefinitionService"),(0,i.kt)(t.Z,{dokkaHTML:o,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);