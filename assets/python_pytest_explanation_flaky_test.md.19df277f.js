import{_ as e,o as t,c as a,X as r}from"./chunks/framework.b5656a4e.js";const m=JSON.parse('{"title":"Flaky tests","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/explanation/flaky_test.md","filePath":"python/pytest/explanation/flaky_test.md","lastUpdated":1692620003000}'),s={name:"python/pytest/explanation/flaky_test.md"},o=r('<h1 id="flaky-tests" tabindex="-1">Flaky tests <a class="header-anchor" href="#flaky-tests" aria-label="Permalink to &quot;Flaky tests&quot;">​</a></h1><p>A “flaky” test is one that exhibits intermittent or sporadic failure, that seems to have non-deterministic behaviour. Sometimes it passes, sometimes it fails, and it’s not clear why. This page discusses pytest features that can help and other general strategies for identifying, fixing or mitigating them.</p><h2 id="why-flaky-tests-are-a-problem" tabindex="-1">Why flaky tests are a problem <a class="header-anchor" href="#why-flaky-tests-are-a-problem" aria-label="Permalink to &quot;Why flaky tests are a problem&quot;">​</a></h2><p>Flaky tests are particularly troublesome when a continuous integration (CI) server is being used, so that all tests must pass before a new code change can be merged. If the test result is not a reliable signal – that a test failure means the code change broke the test – developers can become mistrustful of the test results, which can lead to overlooking genuine failures. It is also a source of wasted time as developers must re-run test suites and investigate spurious failures.</p><h2 id="potential-root-causes" tabindex="-1">Potential root causes <a class="header-anchor" href="#potential-root-causes" aria-label="Permalink to &quot;Potential root causes&quot;">​</a></h2><h3 id="system-state" tabindex="-1">System state <a class="header-anchor" href="#system-state" aria-label="Permalink to &quot;System state&quot;">​</a></h3><p>Broadly speaking, a flaky test indicates that the test relies on some system state that is not being appropriately controlled - the test environment is not sufficiently isolated. Higher level tests are more likely to be flaky as they rely on more state.</p><p>Flaky tests sometimes appear when a test suite is run in parallel (such as use of pytest-xdist). This can indicate a test is reliant on test ordering.</p><ul><li><p>Perhaps a different test is failing to clean up after itself and leaving behind data which causes the flaky test to fail.</p></li><li><p>The flaky test is reliant on data from a previous test that doesn’t clean up after itself, and in parallel runs that previous test is not always present</p></li><li><p>Tests that modify global state typically cannot be run in parallel.</p></li></ul><h3 id="overly-strict-assertion" tabindex="-1">Overly strict assertion <a class="header-anchor" href="#overly-strict-assertion" aria-label="Permalink to &quot;Overly strict assertion&quot;">​</a></h3><p>Overly strict assertions can cause problems with floating point comparison as well as timing issues. <code>pytest.approx()</code> is useful here.</p><h2 id="pytest-features" tabindex="-1">Pytest features <a class="header-anchor" href="#pytest-features" aria-label="Permalink to &quot;Pytest features&quot;">​</a></h2><h3 id="xfail-strict" tabindex="-1">Xfail strict <a class="header-anchor" href="#xfail-strict" aria-label="Permalink to &quot;Xfail strict&quot;">​</a></h3><p><code>pytest.mark.xfail</code> with <code>strict=False</code> can be used to mark a test so that its failure does not cause the whole build to break. This could be considered like a manual quarantine, and is rather dangerous to use permanently.</p><h3 id="pytest-current-test" tabindex="-1">PYTEST_CURRENT_TEST <a class="header-anchor" href="#pytest-current-test" aria-label="Permalink to &quot;PYTEST_CURRENT_TEST&quot;">​</a></h3><p><code>PYTEST_CURRENT_TEST</code> may be useful for figuring out “which test got stuck”. See <a href="/python/pytest/further_topics/example_trick/basic_pattern#pytest-current-test-environment-variable">PYTEST_CURRENT_TEST environment variable</a> for more details.</p><h3 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;Plugins&quot;">​</a></h3><p>Rerunning any failed tests can mitigate the negative effects of flaky tests by giving them additional chances to pass, so that the overall build does not fail. Several pytest plugins support this:</p><ul><li><p><a href="https://github.com/box/flaky" target="_blank" rel="noreferrer">flaky</a></p></li><li><p><a href="https://github.com/dropbox/pytest-flakefinder" target="_blank" rel="noreferrer">pytest-flakefinder</a> - <a href="https://blogs.dropbox.com/tech/2016/03/open-sourcing-pytest-tools/" target="_blank" rel="noreferrer">blog post</a></p></li><li><p><a href="https://github.com/pytest-dev/pytest-rerunfailures" target="_blank" rel="noreferrer">pytest-rerunfailures</a></p></li><li><p><a href="https://github.com/ESSS/pytest-replay" target="_blank" rel="noreferrer">pytest-replay</a>: This plugin helps to reproduce locally crashes or flaky tests observed during CI runs.</p></li></ul><p>Plugins to deliberately randomize tests can help expose tests with state problems:</p><ul><li><p><a href="https://github.com/jbasko/pytest-random-order" target="_blank" rel="noreferrer">pytest-random-order</a></p></li><li><p><a href="https://github.com/pytest-dev/pytest-randomly" target="_blank" rel="noreferrer">pytest-randomly</a></p></li></ul><h2 id="other-general-strategies" tabindex="-1">Other general strategies <a class="header-anchor" href="#other-general-strategies" aria-label="Permalink to &quot;Other general strategies&quot;">​</a></h2><h3 id="split-up-test-suites" tabindex="-1">Split up test suites <a class="header-anchor" href="#split-up-test-suites" aria-label="Permalink to &quot;Split up test suites&quot;">​</a></h3><p>It can be common to split a single test suite into two, such as unit vs integration, and only use the unit test suite as a CI gate. This also helps keep build times manageable as high level tests tend to be slower. However, it means it does become possible for code that breaks the build to be merged, so extra vigilance is needed for monitoring the integration test results.</p><h3 id="video-screenshot-on-failure" tabindex="-1">Video/screenshot on failure <a class="header-anchor" href="#video-screenshot-on-failure" aria-label="Permalink to &quot;Video/screenshot on failure&quot;">​</a></h3><p>For UI tests these are important for understanding what the state of the UI was when the test failed. pytest-splinter can be used with plugins like pytest-bdd and can <a href="https://pytest-splinter.readthedocs.io/en/latest/#automatic-screenshots-on-test-failure" target="_blank" rel="noreferrer">save a screenshot on test failure</a>, which can help to isolate the cause.</p><h3 id="delete-or-rewrite-the-test" tabindex="-1">Delete or rewrite the test <a class="header-anchor" href="#delete-or-rewrite-the-test" aria-label="Permalink to &quot;Delete or rewrite the test&quot;">​</a></h3><p>If the functionality is covered by other tests, perhaps the test can be removed. If not, perhaps it can be rewritten at a lower level which will remove the flakiness or make its source more apparent.</p><h3 id="quarantine" tabindex="-1">Quarantine <a class="header-anchor" href="#quarantine" aria-label="Permalink to &quot;Quarantine&quot;">​</a></h3><p>Mark Lapierre discusses the <a href="https://dev.to/mlapierre/pros-and-cons-of-quarantined-tests-2emj" target="_blank" rel="noreferrer">Pros and Cons of Quarantined Tests</a> in a post from 2018.</p><h3 id="ci-tools-that-rerun-on-failure" tabindex="-1">CI tools that rerun on failure <a class="header-anchor" href="#ci-tools-that-rerun-on-failure" aria-label="Permalink to &quot;CI tools that rerun on failure&quot;">​</a></h3><p>Azure Pipelines (the Azure cloud CI/CD tool, formerly Visual Studio Team Services or VSTS) has a feature to <a href="https://docs.microsoft.com/en-us/previous-versions/azure/devops/2017/dec-11-vsts?view=tfs-2017#identify-flaky-tests" target="_blank" rel="noreferrer">identify flaky tests</a> and rerun failed tests.</p><h2 id="research" tabindex="-1">Research <a class="header-anchor" href="#research" aria-label="Permalink to &quot;Research&quot;">​</a></h2><p>This is a limited list, please submit an issue or pull request to expand it!</p><ul><li><p>Gao, Zebao, Yalan Liang, Myra B. Cohen, Atif M. Memon, and Zhen Wang. “Making system user interactive tests repeatable: When and what should we control?.” In <em>Software Engineering (ICSE), 2015 IEEE/ACM 37th IEEE International Conference on, vol. 1, pp. 55-65. IEEE, 2015</em>. <a href="http://www.cs.umd.edu/~atif/pubs/gao-icse15.pdf" target="_blank" rel="noreferrer">PDF</a></p></li><li><p>Palomba, Fabio, and Andy Zaidman. “Does refactoring of test smells induce fixing flaky tests?.” In <em>Software Maintenance and Evolution (ICSME), 2017 IEEE International Conference on, pp. 1-12. IEEE, 2017</em>. <a href="https://drive.google.com/file/d/10HdcCQiuQVgW3yYUJD-TSTq1NbYEprl0/view" target="_blank" rel="noreferrer">PDF in Google Drive</a></p></li><li><p>Bell, Jonathan, Owolabi Legunsen, Michael Hilton, Lamyaa Eloussi, Tifany Yung, and Darko Marinov. “DeFlaker: Automatically detecting flaky tests.” In <em>Proceedings of the 2018 International Conference on Software Engineering</em>. 2018. <a href="https://www.jonbell.net/icse18-deflaker.pdf" target="_blank" rel="noreferrer">PDF</a></p></li></ul><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><ul><li><p><a href="https://martinfowler.com/articles/nonDeterminism.html" target="_blank" rel="noreferrer">Eradicating Non-Determinism in Tests</a> by Martin Fowler, 2011</p></li><li><p><a href="https://www.thoughtworks.com/insights/blog/no-more-flaky-tests-go-team" target="_blank" rel="noreferrer">No more flaky tests on the Go team</a> by Pavan Sudarshan, 2012</p></li><li><p><a href="https://www.youtube.com/embed/VotJqV4n8ig" target="_blank" rel="noreferrer">The Build That Cried Broken: Building Trust in your Continuous Integration Tests</a> talk (video) by <a href="https://angiejones.tech/" target="_blank" rel="noreferrer">Angie Jones</a> at SeleniumConf Austin 2017</p></li><li><p><a href="https://testandcode.com/50" target="_blank" rel="noreferrer">Test and Code Podcast: Flaky Tests and How to Deal with Them</a> by Brian Okken and Anthony Shaw, 2018</p></li><li><p>Microsoft:</p><ul><li><p><a href="https://blogs.msdn.microsoft.com/bharry/2017/06/28/testing-in-a-cloud-delivery-cadence/" target="_blank" rel="noreferrer">How we approach testing VSTS to enable continuous delivery</a> by Brian Harry MS, 2017</p></li><li><p><a href="https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/eliminating-flaky-tests" target="_blank" rel="noreferrer">Eliminating Flaky Tests</a> blog and talk (video) by Munil Shah, 2017</p></li></ul></li><li><p>Google:</p><ul><li><p><a href="https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html" target="_blank" rel="noreferrer">Flaky Tests at Google and How We Mitigate Them</a> by John Micco, 2016</p></li><li><p><a href="https://testing.googleblog.com/2017/04/where-do-our-flaky-tests-come-from.html" target="_blank" rel="noreferrer">Where do Google’s flaky tests come from?</a> by Jeff Listfield, 2017</p></li></ul></li></ul>',37),i=[o];function n(l,h,p,u,d,c){return t(),a("div",null,i)}const g=e(s,[["render",n]]);export{m as __pageData,g as default};
