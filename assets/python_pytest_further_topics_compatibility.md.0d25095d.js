import{_ as e,o as t,c as a,V as r}from"./chunks/framework.d3b95951.js";const y=JSON.parse('{"title":"Backwards Compatibility Policy","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/further_topics/compatibility.md","filePath":"python/pytest/further_topics/compatibility.md"}'),o={name:"python/pytest/further_topics/compatibility.md"},i=r('<h1 id="backwards-compatibility-policy" tabindex="-1">Backwards Compatibility Policy <a class="header-anchor" href="#backwards-compatibility-policy" aria-label="Permalink to &quot;Backwards Compatibility Policy&quot;">​</a></h1><p>pytest is actively evolving and is a project that has been decades in the making, we keep learning about new and better structures to express different details about testing.</p><p>While we implement those modifications we try to ensure an easy transition and don’t want to impose unnecessary churn on our users and community/plugin authors.</p><p>As of now, pytest considers multiple types of backward compatibility transitions:</p><ol><li><p><strong>trivial</strong>: APIs which trivially translate to the new mechanism, and do not cause problematic changes.</p><p>We try to support those indefinitely while encouraging users to switch to newer/better mechanisms through documentation.</p></li><li><p><strong>transitional</strong>: the old and new API don’t conflict and we can help users transition by using warnings, while supporting both for a prolonged time.</p><p>We will only start the removal of deprecated functionality in major releases (e.g. if we deprecate something in 3.0 we will start to remove it in 4.0), and keep it around for at least two minor releases (e.g. if we deprecate something in 3.9 and 4.0 is the next release, we start to remove it in 5.0, not in 4.0).</p><p>A deprecated feature scheduled to be removed in major version X will use the warning class <code>PytestRemovedInXWarning</code> (a subclass of <code>PytestDeprecationwarning</code>).</p><p>When the deprecation expires (e.g. 4.0 is released), we won’t remove the deprecated functionality immediately, but will use the standard warning filters to turn <code>PytestRemovedInXWarning</code> (e.g. <code>PytestRemovedIn4Warning</code>) into errors by default. This approach makes it explicit that removal is imminent, and still gives you time to turn the deprecated feature into a warning instead of an error so it can be dealt with in your own time. In the next minor release (e.g. 4.1), the feature will be effectively removed.</p></li><li><p><strong>true breakage</strong>: should only be considered when normal transition is unreasonably unsustainable and would offset important development/features by years. In addition, they should be limited to APIs where the number of actual users is very small (for example only impacting some plugins), and can be coordinated with the community in advance.</p><p>Examples for such upcoming changes:</p><ul><li><p>removal of <code>pytest_runtest_protocol/nextitem</code> - <a href="https://github.com/pytest-dev/pytest/issues/895" target="_blank" rel="noreferrer">issue #895</a></p></li><li><p>rearranging of the node tree to include <code>FunctionDefinition</code></p></li><li><p>rearranging of <code>SetupState</code> <a href="https://github.com/pytest-dev/pytest/issues/895" target="_blank" rel="noreferrer">issue #895</a></p></li></ul><p>True breakages must be announced first in an issue containing:</p><ul><li><p>Detailed description of the change</p></li><li><p>Rationale</p></li><li><p>Expected impact on users and plugin authors (example in <a href="https://github.com/pytest-dev/pytest/issues/895" target="_blank" rel="noreferrer">issue #895</a>)</p></li></ul><p>After there’s no hard -1 on the issue it should be followed up by an initial proof-of-concept Pull Request.</p><p>This POC serves as both a coordination point to assess impact and potential inspiration to come up with a transitional solution after all.</p><p>After a reasonable amount of time the PR can be merged to base a new major release.</p><p>For the PR to mature from POC to acceptance, it must contain: * Setup of deprecation errors/warnings that help users fix and port their code. If it is possible to introduce a deprecation period under the current series, before the true breakage, it should be introduced in a separate PR and be part of the current release stream. * Detailed description of the rationale and examples on how to port code in <code>doc/en/deprecations.rst</code>.</p></li></ol><h2 id="history" tabindex="-1">History <a class="header-anchor" href="#history" aria-label="Permalink to &quot;History&quot;">​</a></h2><h3 id="focus-primary-on-smooth-transition-stance-pre-6-0" tabindex="-1">Focus primary on smooth transition - stance (pre 6.0) <a class="header-anchor" href="#focus-primary-on-smooth-transition-stance-pre-6-0" aria-label="Permalink to &quot;Focus primary on smooth transition - stance (pre 6.0)&quot;">​</a></h3><p>Keeping backwards compatibility has a very high priority in the pytest project. Although we have deprecated functionality over the years, most of it is still supported. All deprecations in pytest were done because simpler or more efficient ways of accomplishing the same tasks have emerged, making the old way of doing things unnecessary.</p><p>With the pytest 3.0 release we introduced a clear communication scheme for when we will actually remove the old busted joint and politely ask you to use the new hotness instead, while giving you enough time to adjust your tests or raise concerns if there are valid reasons to keep deprecated functionality around.</p><p>To communicate changes we issue deprecation warnings using a custom warning hierarchy (see <a href="https://docs.pytest.org/en/latest/how-to/capture-warnings.html#internal-warnings" target="_blank" rel="noreferrer">Internal pytest warnings</a>). These warnings may be suppressed using the standard means: <code>-W</code> command-line flag or <code>filterwarnings</code> ini options (see <a href="https://docs.pytest.org/en/latest/how-to/capture-warnings.html#warnings" target="_blank" rel="noreferrer">How to capture warnings</a>), but we suggest to use these sparingly and temporarily, and heed the warnings when possible.</p><p>We will only start the removal of deprecated functionality in major releases (e.g. if we deprecate something in 3.0 we will start to remove it in 4.0), and keep it around for at least two minor releases (e.g. if we deprecate something in 3.9 and 4.0 is the next release, we start to remove it in 5.0, not in 4.0).</p><p>When the deprecation expires (e.g. 4.0 is released), we won’t remove the deprecated functionality immediately, but will use the standard warning filters to turn them into errors by default. This approach makes it explicit that removal is imminent, and still gives you time to turn the deprecated feature into a warning instead of an error so it can be dealt with in your own time. In the next minor release (e.g. 4.1), the feature will be effectively removed.</p><h3 id="deprecation-roadmap" tabindex="-1">Deprecation Roadmap <a class="header-anchor" href="#deprecation-roadmap" aria-label="Permalink to &quot;Deprecation Roadmap&quot;">​</a></h3><p>Features currently deprecated and removed in previous releases can be found in <a href="https://docs.pytest.org/en/latest/deprecations.html#deprecations" target="_blank" rel="noreferrer">Deprecations and Removals</a>.</p><p>We track future deprecation and removal of features using milestones and the <a href="https://github.com/pytest-dev/pytest/issues?q=label%3A%22type%3A+deprecation%22" target="_blank" rel="noreferrer">deprecation</a> and <a href="https://github.com/pytest-dev/pytest/labels/type%3A%20removal" target="_blank" rel="noreferrer">removal</a> labels on GitHub.</p><h2 id="python-version-support" tabindex="-1">Python version support <a class="header-anchor" href="#python-version-support" aria-label="Permalink to &quot;Python version support&quot;">​</a></h2><p>Released pytest versions support all Python versions that are actively maintained at the time of the release:</p><table><thead><tr><th>pytest version</th><th>min. Python version</th></tr></thead><tbody><tr><td>8.0+</td><td>3.8+</td></tr><tr><td>7.1+</td><td>3.7+</td></tr><tr><td>6.2 - 7.0</td><td>3.6+</td></tr><tr><td>5.0 - 6.1</td><td>3.5+</td></tr><tr><td>3.3 - 4.6</td><td>2.7, 3.4+</td></tr></tbody></table><p><a href="https://devguide.python.org/versions/" target="_blank" rel="noreferrer">Status of Python Versions</a>.</p>',19),n=[i];function s(l,p,d,c,h,u){return t(),a("div",null,n)}const f=e(o,[["render",s]]);export{y as __pageData,f as default};
