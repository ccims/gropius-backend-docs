"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5481],{2909:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=e(487462),i=(e(667294),e(603905)),t=e(689417);const l='\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">interface </span><a href="index-">IssueDereplicator</a></div><p class="paragraph">Dereplicator for issues</p><h4 class="">Inheritors</h4><div class="table"><div class="table-row" data-filterable-current=":sync:dokkaHtmlPartial/main" data-filterable-set=":sync:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-heuristic-dereplicator/index-">HeuristicDereplicator</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":sync:dokkaHtmlPartial/main" data-filterable-set=":sync:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-invasive-dereplicator/index-">InvasiveDereplicator</a></div></span></div><div></div></div></div><div class="table-row" data-filterable-current=":sync:dokkaHtmlPartial/main" data-filterable-set=":sync:dokkaHtmlPartial/main"><div class="main-subrow keyValue "><div class=""><span class="inline-flex"><div><a href="../-null-dereplicator/index-">NullDereplicator</a></div></span></div><div></div></div></div></div></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="CONSTRUCTOR,TYPE,PROPERTY,FUNCTION">Members</button></div>\n    <div class="tabs-section-body">\n      <div data-togglable="FUNCTION">\n        <h2 class="">Functions</h2>\n        <div class="table"><a data-name="-1447794552%2FFunctions%2F-861339187" anchor-label="validateIssue" id="-1447794552%2FFunctions%2F-861339187" data-filterable-set=":sync:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync:dokkaHtmlPartial/main" data-filterable-set=":sync:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="validate-issue-"><span>validate</span><wbr><span><span>Issue</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1447794552%2FFunctions%2F-861339187"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="validate-issue-"><span class="token function">validateIssue</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">imsProject<span class="token operator">: </span><a href="../../../core/gropius.model.architecture/-i-m-s-project/index-">IMSProject</a><span class="token punctuation">, </span></span><span class="parameter ">issue<span class="token operator">: </span><a href="../../../core/gropius.model.issue/-issue/index-">Issue</a><span class="token punctuation">, </span></span><span class="parameter ">request<span class="token operator">: </span><a href="../-issue-dereplicator-request/index-">IssueDereplicatorRequest</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../-issue-dereplicator-issue-result/index-">IssueDereplicatorIssueResult</a></div><div class="brief "><p class="paragraph">Validates an issue</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n<a data-name="-358034958%2FFunctions%2F-861339187" anchor-label="validateTimelineItem" id="-358034958%2FFunctions%2F-861339187" data-filterable-set=":sync:dokkaHtmlPartial/main"></a>\n          <div class="table-row" data-filterable-current=":sync:dokkaHtmlPartial/main" data-filterable-set=":sync:dokkaHtmlPartial/main">\n            <div class="main-subrow keyValue ">\n              <div class=""><span class="inline-flex">\n                  <div><a href="validate-timeline-item-"><span>validate</span><wbr><span>Timeline</span><wbr><span><span>Item</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-358034958%2FFunctions%2F-861339187"></span>\n                    <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                  </span></span></div>\n              <div>\n                <div class="title">\n                  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-dependent-content" data-active="" data-togglable=":sync:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="validate-timeline-item-"><span class="token function">validateTimelineItem</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">issue<span class="token operator">: </span><a href="../../../core/gropius.model.issue/-issue/index-">Issue</a><span class="token punctuation">, </span></span><span class="parameter ">timelineItem<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><a href="../../../core/gropius.model.issue.timeline/-timeline-item/index-">TimelineItem</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter ">request<span class="token operator">: </span><a href="../-issue-dereplicator-request/index-">IssueDereplicatorRequest</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../-issue-dereplicator-timeline-item-result/index-">IssueDereplicatorTimelineItemResult</a></div><div class="brief "><p class="paragraph">Validates a timeline item</p></div></div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',r={},o="IssueDereplicator",p={unversionedId:"api/sync/gropius.sync/-issue-dereplicator/index-",id:"api/sync/gropius.sync/-issue-dereplicator/index-",title:"IssueDereplicator",description:"",source:"@site/docs/api/sync/gropius.sync/-issue-dereplicator/index-.mdx",sourceDirName:"api/sync/gropius.sync/-issue-dereplicator",slug:"/api/sync/gropius.sync/-issue-dereplicator/index-",permalink:"/gropius-backend-docs/api/sync/gropius.sync/-issue-dereplicator/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"issueConversionInformationRepository",permalink:"/gropius-backend-docs/api/sync/gropius.sync/-issue-conversion-information-service/issue-conversion-information-repository-"},next:{title:"validateIssue",permalink:"/gropius-backend-docs/api/sync/gropius.sync/-issue-dereplicator/validate-issue-"}},c={},d=[],u={toc:d},v="wrapper";function m(a){let{components:s,...e}=a;return(0,i.kt)(v,(0,n.Z)({},u,e,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"issuedereplicator"},"IssueDereplicator"),(0,i.kt)(t.Z,{dokkaHTML:l,mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);