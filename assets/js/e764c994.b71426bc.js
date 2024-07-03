"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54428],{188031:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(487462),t=(s(667294),s(603905)),o=s(689417);const d='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">interface </span><a href="index-">NodeBatchUpdater</a></div><p class="paragraph">Used when updating / deleting multiple nodes in a graph. Provides a <a href="cache-">cache</a> to ensure that each node is only loaded once. Keeps track of <a href="deleted-nodes-">deletedNodes</a> and <a href="updated-nodes-">updatedNodes</a> which can be saved to the database.</p><h4 class="">Inheritors</h4><div class="table"><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-node-batch-update-context/index-">NodeBatchUpdateContext</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../../gropius.service.architecture/-graph-updater/index-">GraphUpdater</a></div></span></div><div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="PROPERTY">\n        <h2 class="">Properties</h2>\n        <div class="table"><a data-name="1626618316%2FProperties%2F537371977" anchor-label="cache" id="1626618316%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="cache-"><span><span>cache</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1626618316%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">val </span><a href="cache-">cache</a><span class="token operator">: </span><span data-unresolved-link="io.github.graphglue.model.property/NodeCache///PointingToDeclaration/">NodeCache</span></div><div class="brief "><p class="paragraph">Cache used to ensure that only one instance of each Node is loaded by the algorithm</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="599439412%2FProperties%2F537371977" anchor-label="deletedNodes" id="599439412%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="deleted-nodes-"><span>deleted</span><wbr><span><span>Nodes</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="599439412%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">val </span><a href="deleted-nodes-">deletedNodes</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html">MutableSet</a><span class="token operator">&lt;</span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">Nodes which should be deleted</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="809520537%2FProperties%2F537371977" anchor-label="internalUpdatedNodes" id="809520537%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="internal-updated-nodes-"><span>internal</span><wbr><span>Updated</span><wbr><span><span>Nodes</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="809520537%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">val </span><a href="internal-updated-nodes-">internalUpdatedNodes</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html">MutableSet</a><span class="token operator">&lt;</span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">Nodes which are updated and need to be saved This may contain nodes also present in <a href="deleted-nodes-">deletedNodes</a></p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="1163010390%2FProperties%2F537371977" anchor-label="updatedNodes" id="1163010390%2FProperties%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="updated-nodes-"><span>updated</span><wbr><span><span>Nodes</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1163010390%2FProperties%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">val </span><a href="updated-nodes-">updatedNodes</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html">Set</a><span class="token operator">&lt;</span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token operator">&gt;</span></div><div class="brief "><p class="paragraph">Nodes which are updated and need to be saved Does not include any deleted nodes</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="254188192%2FFunctions%2F537371977" anchor-label="save" id="254188192%2FFunctions%2F537371977" data-filterable-set=":core:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":core:dokkaHtmlPartial/main" data-filterable-set=":core:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="save-"><span><span>save</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="254188192%2FFunctions%2F537371977"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="save-"><span class="token function">save</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">nodeRepository<span class="token operator">: </span><a href="../../gropius.repository.common/-node-repository/index-">NodeRepository</a></span></span><span class="token punctuation">)</span></div><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">suspend </span><span class="token keyword">fun </span><span class="token operator">&lt;</span><a href="save-">T</a><span class="token operator"> : </span><span data-unresolved-link="io.github.graphglue.model/Node///PointingToDeclaration/">Node</span><span class="token operator">&gt; </span><a href="save-"><span class="token function">save</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="save-">T</a><span class="token punctuation">, </span></span><span class="parameter ">nodeRepository<span class="token operator">: </span><a href="../../gropius.repository.common/-node-repository/index-">NodeRepository</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="save-">T</a></div><div class="brief "><p class="paragraph">Deletes all <a href="deleted-nodes-">deletedNodes</a> and saves all <a href="updated-nodes-">updatedNodes</a> to the database</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',i={},p="NodeBatchUpdater",l={unversionedId:"api/core/gropius.service/-node-batch-updater/index-",id:"api/core/gropius.service/-node-batch-updater/index-",title:"NodeBatchUpdater",description:"",source:"@site/docs/api/core/gropius.service/-node-batch-updater/index-.mdx",sourceDirName:"api/core/gropius.service/-node-batch-updater",slug:"/api/core/gropius.service/-node-batch-updater/index-",permalink:"/gropius-backend-docs/api/core/gropius.service/-node-batch-updater/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"internalUpdatedNodes",permalink:"/gropius-backend-docs/api/core/gropius.service/-node-batch-update-context/internal-updated-nodes-"},next:{title:"cache",permalink:"/gropius-backend-docs/api/core/gropius.service/-node-batch-updater/cache-"}},r={},c=[],v={toc:c},k="wrapper";function h(a){let{components:e,...s}=a;return(0,t.kt)(k,(0,n.Z)({},v,s,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"nodebatchupdater"},"NodeBatchUpdater"),(0,t.kt)(o.Z,{dokkaHTML:d,mdxType:"DokkaComponent"}))}h.isMDXComponent=!0}}]);