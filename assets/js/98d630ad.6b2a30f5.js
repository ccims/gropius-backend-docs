"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41605],{581441:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var s=e(487462),t=(e(667294),e(603905)),i=e(689417);const o='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.stereotype/Service///PointingToDeclaration/"><span class="token annotation builtin">Service</span></span></div></div><span class="token keyword">class </span><a href="index-">ArtefactTemplateService</a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.template/-artefact-template-repository/index-">ArtefactTemplateRepository</a></span></span><span class="token punctuation">)</span> : <a href="../-abstract-template-service/index-">AbstractTemplateService</a><span class="token operator">&lt;</span><a href="../../gropius.model.template/-artefact-template/index-">ArtefactTemplate</a><span class="token punctuation">, </span><a href="../../gropius.repository.template/-artefact-template-repository/index-">ArtefactTemplateRepository</a><span class="token operator">&gt; </span></div><p class="paragraph">Service for <a href="../../gropius.model.template/-artefact-template/index-">ArtefactTemplate</a>s. Provides functions to create, update and delete</p><h4 class="">Parameters</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><u><span><span>repository</span></span></u></div></span></div><div><div class="title"><p class="paragraph">the associated repository used for CRUD functionality</p></div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button><button class="section-tab" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION,EXTENSION_PROPERTY,EXTENSION_FUNCTION">Members &amp; Extensions</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="CONSTRUCTOR">\n        <h2 class="">Constructors</h2>\n        <div class="table"><a data-name="-447017306%2FConstructors%2F537371977" anchor-label="ArtefactTemplateService" id="-447017306%2FConstructors%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="CONSTRUCTOR" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="-artefact-template-service-"><span>Artefact</span><wbr><span>Template</span><wbr><span><span>Service</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-447017306%2FConstructors%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">repository<span class="token operator">: </span><a href="../../gropius.repository.template/-artefact-template-repository/index-">ArtefactTemplateRepository</a></span></span><span class="token punctuation">)</span></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="-1539425363%2FProperties%2F537371977" anchor-label="authorizationChecker" id="-1539425363%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/authorization-checker-"><span>authorization</span><wbr><span><span>Checker</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1539425363%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/authorization-checker-">authorizationChecker</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/AuthorizationChecker///PointingToDeclaration/">AuthorizationChecker</span></div><div class="brief "><p class="paragraph">Injected, used for the <a href="../../gropius.service.common/-node-service/check-permission-">checkPermission</a> function</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-614283711%2FProperties%2F537371977" anchor-label="gropiusUserRepository" id="-614283711%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/gropius-user-repository-"><span>gropius</span><wbr><span>User</span><wbr><span><span>Repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-614283711%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation builtin">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation builtin">Autowired</span></span></div></div><span class="token keyword">lateinit </span><span class="token keyword">var </span><a href="../../gropius.service.common/-node-service/gropius-user-repository-">gropiusUserRepository</a><span class="token operator">: </span><a href="../../gropius.repository.user/-gropius-user-repository/index-">GropiusUserRepository</a></div><div class="brief "><p class="paragraph">Injected, used to get a user based on a <a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-661731297%2FProperties%2F537371977" anchor-label="repository" id="-661731297%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/repository-"><span><span>repository</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-661731297%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">val </span><a href="../../gropius.service.common/-node-service/repository-">repository</a><span class="token operator">: </span><a href="../../gropius.repository.template/-artefact-template-repository/index-">ArtefactTemplateRepository</a></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="698419931%2FFunctions%2F537371977" anchor-label="checkCreateTemplatePermission" id="698419931%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../-base-template-service/check-create-template-permission-"><span>check</span><wbr><span>Create</span><wbr><span>Template</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="698419931%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../-base-template-service/check-create-template-permission-"><span class="token function">checkCreateTemplatePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks for CAN_CREATE_TEMPLATE permission on the user provided via <a href="../-base-template-service/check-create-template-permission-">authorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1208075282%2FFunctions%2F537371977" anchor-label="checkIsAdmin" id="1208075282%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-is-admin-"><span>check</span><wbr><span>Is</span><wbr><span><span>Admin</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1208075282%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-is-admin-"><span class="token function">checkIsAdmin</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the user defined by <a href="../../gropius.service.common/-node-service/check-is-admin-">authorizationContext</a> is a global admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-639991891%2FFunctions%2F537371977" anchor-label="checkPermission" id="-639991891%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/check-permission-"><span>check</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-639991891%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/check-permission-"><span class="token function">checkPermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span><span class="token punctuation">, </span></span><span class="parameter ">errorMessage<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Checks if the <a href="../../gropius.service.common/-node-service/check-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/check-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="969098780%2FFunctions%2F537371977" anchor-label="createArtefactTemplate" id="969098780%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="create-artefact-template-"><span>create</span><wbr><span>Artefact</span><wbr><span><span>Template</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="969098780%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="create-artefact-template-"><span class="token function">createArtefactTemplate</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.template/-create-artefact-template-input/index-">CreateArtefactTemplateInput</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.template/-artefact-template/index-">ArtefactTemplate</a></div><div class="brief "><p class="paragraph">Creates a new <a href="../../gropius.model.template/-artefact-template/index-">ArtefactTemplate</a> based on the provided <a href="create-artefact-template-">input</a> Checks the authorization status</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="254154827%2FFunctions%2F537371977" anchor-label="createdBaseTemplate" id="254154827%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#254154827%2FFunctions%2F537371977"><span>created</span><wbr><span>Base</span><wbr><span><span>Template</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="254154827%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="index-#254154827%2FFunctions%2F537371977"><span class="token function">createdBaseTemplate</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">template<span class="token operator">: </span><a href="../../gropius.model.template/-artefact-template/index-">ArtefactTemplate</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.template/-create-base-template-input/index-">CreateBaseTemplateInput</a><span class="token punctuation">, </span></span><span class="parameter ">extendedTemplates<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html">Collection</a><span class="token operator">&lt;</span><a href="../../gropius.model.template/-artefact-template/index-">ArtefactTemplate</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Updates <a href="index-#254154827%2FFunctions%2F537371977">template</a> based on <a href="index-#254154827%2FFunctions%2F537371977">input</a> Sets templateFieldSpecifications based on <a href="index-#254154827%2FFunctions%2F537371977">input</a>, and the templateFieldSpecification of <a href="index-#254154827%2FFunctions%2F537371977">extendedTemplates</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-1556973643%2FFunctions%2F537371977" anchor-label="createdTemplate" id="-1556973643%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="index-#-1556973643%2FFunctions%2F537371977"><span>created</span><wbr><span><span>Template</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1556973643%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="index-#-1556973643%2FFunctions%2F537371977"><span class="token function">createdTemplate</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">template<span class="token operator">: </span><a href="../../gropius.model.template/-artefact-template/index-">ArtefactTemplate</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.template/-create-template-input/index-">CreateTemplateInput</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Updates <a href="index-#-1556973643%2FFunctions%2F537371977">template</a> based on <a href="index-#-1556973643%2FFunctions%2F537371977">input</a> Sets extends and templateFieldSpecifications</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-688546239%2FFunctions%2F537371977" anchor-label="evaluatePermission" id="-688546239%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span>evaluate</span><wbr><span><span>Permission</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-688546239%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/evaluate-permission-"><span class="token function">evaluatePermission</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token punctuation">, </span></span><span class="parameter ">permission<span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.authorization/Permission///PointingToDeclaration/">Permission</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a></div><div class="brief "><p class="paragraph">Evaluates if the <a href="../../gropius.service.common/-node-service/evaluate-permission-">permission</a> is granted on <a href="../../gropius.service.common/-node-service/evaluate-permission-">node</a> If checkPermission on the <code class="lang-kotlin">permission.context</code> is <code class="lang-kotlin">false</code>, no permission is evaluated Does not handle the case that the user is an admin</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-342693843%2FFunctions%2F537371977" anchor-label="findAllByIdWithExtending" id="-342693843%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-togglable="EXTENSION_FUNCTION" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../find-all-by-id-with-extending-"><span>find</span><wbr><span>All</span><wbr><span>By</span><wbr><span>Id</span><wbr><span>With</span><wbr><span><span>Extending</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-342693843%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><span class="token operator">&lt;</span><a href="../find-all-by-id-with-extending-">T</a><span class="token operator"> : </span><a href="../../gropius.model.template/-template/index-">Template</a><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token punctuation">, </span><span class="token keyword">out </span><a href="../find-all-by-id-with-extending-">T</a><span class="token operator">&gt;</span><span class="token punctuation">, </span><a href="../find-all-by-id-with-extending-">R</a><span class="token operator"> : </span><a href="../../gropius.repository/-gropius-repository/index-">GropiusRepository</a><span class="token operator">&lt;</span><a href="../find-all-by-id-with-extending-">T</a><span class="token punctuation">, </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token operator">&gt; </span><a href="../-base-template-service/index-">BaseTemplateService</a><span class="token operator">&lt;</span><a href="../find-all-by-id-with-extending-">T</a><span class="token punctuation">, </span><a href="../find-all-by-id-with-extending-">R</a><span class="token operator">&gt;</span><span class="token punctuation">.</span><a href="../find-all-by-id-with-extending-"><span class="token function">findAllByIdWithExtending</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">ids<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html">Collection</a><span class="token operator">&lt;</span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html">Set</a><span class="token operator">&lt;</span><a href="../find-all-by-id-with-extending-">T</a><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">Returns all templates which extend the template with the provided <a href="../find-all-by-id-with-extending-">ids</a> Includes the template with the provided <a href="../find-all-by-id-with-extending-">ids</a>, and indirect extending templates.</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-462313879%2FFunctions%2F537371977" anchor-label="getUser" id="-462313879%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-node-service/get-user-"><span>get</span><wbr><span><span>User</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-462313879%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="../../gropius.service.common/-node-service/get-user-"><span class="token function">getUser</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">authorizationContext<span class="token operator">: </span><a href="../../gropius.authorization/-gropius-authorization-context/index-">GropiusAuthorizationContext</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a></div><div class="brief "><p class="paragraph">Gets a <a href="../../gropius.model.user/-gropius-user/index-">GropiusUser</a> based on the userId from the <a href="../../gropius.service.common/-node-service/get-user-">authorizationContext</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="325374150%2FFunctions%2F537371977" anchor-label="updateNamedNode" id="325374150%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="../../gropius.service.common/-named-node-service/update-named-node-"><span>update</span><wbr><span>Named</span><wbr><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="325374150%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">fun </span><a href="../../gropius.service.common/-named-node-service/update-named-node-"><span class="token function">updateNamedNode</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="../../gropius.model.common/-named-node/index-">NamedNode</a><span class="token punctuation">, </span></span><span class="parameter ">input<span class="token operator">: </span><a href="../../gropius.dto.input.common/-update-named-node-input/index-">UpdateNamedNodeInput</a></span></span><span class="token punctuation">)</span></div><div class="brief "><p class="paragraph">Updates <a href="../../gropius.service.common/-named-node-service/update-named-node-">node</a> based on <a href="../../gropius.service.common/-named-node-service/update-named-node-">input</a> Updates name and description</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',p={},r="ArtefactTemplateService",l={unversionedId:"api/core/gropius.service.template/-artefact-template-service/index-",id:"api/core/gropius.service.template/-artefact-template-service/index-",title:"ArtefactTemplateService",description:"",source:"@site/docs/api/core/gropius.service.template/-artefact-template-service/index-.mdx",sourceDirName:"api/core/gropius.service.template/-artefact-template-service",slug:"/api/core/gropius.service.template/-artefact-template-service/index-",permalink:"/gropius-backend-docs/api/core/gropius.service.template/-artefact-template-service/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"createdTemplate",permalink:"/gropius-backend-docs/api/core/gropius.service.template/-abstract-template-service/created-template-"},next:{title:"ArtefactTemplateService",permalink:"/gropius-backend-docs/api/core/gropius.service.template/-artefact-template-service/-artefact-template-service-"}},c={},d=[],m={toc:d},v="wrapper";function u(a){let{components:n,...e}=a;return(0,t.kt)(v,(0,s.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"artefacttemplateservice"},"ArtefactTemplateService"),(0,t.kt)(i.Z,{dokkaHTML:o,mdxType:"DokkaComponent"}))}u.isMDXComponent=!0}}]);