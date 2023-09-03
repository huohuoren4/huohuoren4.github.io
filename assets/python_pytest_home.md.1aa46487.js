import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.01af844e.js";const u=JSON.parse('{"title":"pytest: helps you write better programs","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/home.md","filePath":"python/pytest/home.md","lastUpdated":1692720083000}'),p={name:"python/pytest/home.md"},o=e(`<h1 id="pytest-helps-you-write-better-programs" tabindex="-1">pytest: helps you write better programs <a class="header-anchor" href="#pytest-helps-you-write-better-programs" aria-label="Permalink to &quot;pytest: helps you write better programs {#pytest-helps-you-write-better-programs}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Tip</p><p><em>pytest version</em>: <code>7.4.0</code>. Only the lastest version is maintained.</p><p><em>offical doc</em>: <a href="https://docs.pytest.org/" target="_blank" rel="noreferrer">Pytest</a></p></div><p>The <code>pytest</code> framework makes it easy to write small, readable tests, and can scale to support complex functional testing for applications and libraries.</p><p><code>pytest</code> requires: <code>Python 3.8+</code> or <code>PyPy3</code>.</p><p><em>PyPI package name</em>: <a href="https://pypi.org/project/pytest/" target="_blank" rel="noreferrer">pytest</a></p><h2 id="a-quick-example" tabindex="-1">A quick example <a class="header-anchor" href="#a-quick-example" aria-label="Permalink to &quot;A quick example {#a-quick-example}&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># content of test_sample.py</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inc</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_answer</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> inc(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># content of test_sample.py</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inc</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_answer</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> inc(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span></code></pre></div><p>To execute it:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"><span style="color:#E1E4E8;">=========================== </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">session</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">starts</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">============================</span></span>
<span class="line"><span style="color:#B392F0;">platform</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">linux</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Python</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#9ECBFF;">.x.y,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest-7.x.y,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pluggy-1.x.y</span></span>
<span class="line"><span style="color:#B392F0;">rootdir:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/sweet/project</span></span>
<span class="line"><span style="color:#B392F0;">collected</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test_sample.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">F</span><span style="color:#E1E4E8;">                                                     [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">================================= </span><span style="color:#9ECBFF;">FAILURES</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=================================</span></span>
<span class="line"><span style="color:#B392F0;">_______________________________</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_answer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_answer</span><span style="color:#E1E4E8;">()</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">       assert inc(</span><span style="color:#B392F0;">3</span><span style="color:#E1E4E8;">) == 5</span></span>
<span class="line"><span style="color:#B392F0;">E</span><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#B392F0;">E</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">+</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inc</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test_sample.py:6:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">AssertionError</span></span>
<span class="line"><span style="color:#E1E4E8;">========================= </span><span style="color:#9ECBFF;">short</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">summary</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==========================</span></span>
<span class="line"><span style="color:#B392F0;">FAILED</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_sample.py::test_answer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">============================ </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">failed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.12</span><span style="color:#9ECBFF;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=============================</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"><span style="color:#24292E;">=========================== </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">session</span><span style="color:#24292E;"> </span><span style="color:#032F62;">starts</span><span style="color:#24292E;"> </span><span style="color:#032F62;">============================</span></span>
<span class="line"><span style="color:#6F42C1;">platform</span><span style="color:#24292E;"> </span><span style="color:#032F62;">linux</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Python</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#032F62;">.x.y,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest-7.x.y,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pluggy-1.x.y</span></span>
<span class="line"><span style="color:#6F42C1;">rootdir:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/sweet/project</span></span>
<span class="line"><span style="color:#6F42C1;">collected</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test_sample.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">F</span><span style="color:#24292E;">                                                     [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">================================= </span><span style="color:#032F62;">FAILURES</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=================================</span></span>
<span class="line"><span style="color:#6F42C1;">_______________________________</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_answer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">________________________________</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_answer</span><span style="color:#24292E;">()</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">       assert inc(</span><span style="color:#6F42C1;">3</span><span style="color:#24292E;">) == 5</span></span>
<span class="line"><span style="color:#6F42C1;">E</span><span style="color:#24292E;">       </span><span style="color:#032F62;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#6F42C1;">E</span><span style="color:#24292E;">        </span><span style="color:#032F62;">+</span><span style="color:#24292E;">  </span><span style="color:#032F62;">where</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inc</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test_sample.py:6:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">AssertionError</span></span>
<span class="line"><span style="color:#24292E;">========================= </span><span style="color:#032F62;">short</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">summary</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==========================</span></span>
<span class="line"><span style="color:#6F42C1;">FAILED</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_sample.py::test_answer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">============================ </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">failed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.12</span><span style="color:#032F62;">s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=============================</span></span></code></pre></div><p>Due to <code>pytest</code>’s detailed assertion introspection, only plain <code>assert</code> statements are used. See <a href="/python/pytest/get_started">Get started</a> for a basic introduction to using pytest.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features {#features}&quot;">​</a></h2><ul><li><p>Detailed info on failing <a href="/python/pytest/how_to_guides/assert#how-to-write-and-report-assertions-in-tests">assert statements</a> (no need to remember <code>self.assert*</code> names)</p></li><li><p><a href="/python/pytest/explanation/integration_practice#conventions-for-python-test-discovery">Auto-discovery</a> of test modules and functions</p></li><li><p><a href="/python/pytest/reference_guides/fixture_reference#fixtures-reference">Modular fixtures</a> for managing small or parametrized long-lived test resources</p></li><li><p>Can run <a href="/python/pytest/how_to_guides/unittest#how-to-use-unittest-based-tests-with-pytest">unittest</a> (including trial) and <a href="/python/pytest/how_to_guides/nose_test#how-to-run-tests-written-for-nose">nose</a> test suites out of the box</p></li><li><p>Python 3.8+ or PyPy 3</p></li><li><p>Rich plugin architecture, with over 800+ <a href="/python/pytest/reference_guides/plugin_list#plugin-list">external plugins</a> and thriving community</p></li></ul><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation {#documentation}&quot;">​</a></h2><ul><li><p><a href="/python/pytest/get_started">Get started</a> - install pytest and grasp its basics just twenty minutes</p></li><li><p><a href="/python/pytest/how_to_guides/invoke_pytest#how-to-invoke-pytest">How-to guides</a> - step-by-step guides, covering a vast range of use-cases and needs</p></li><li><p><a href="/python/pytest/reference_guides/fixture_reference#fixtures-reference">Reference guides</a> - includes the complete pytest API reference, lists of - plugins and more</p></li><li><p><a href="/python/pytest/explanation/anatomy#anatomy-of-a-test">Explanation</a> - background, discussion of key topics, answers to higher-level questions</p></li></ul><h2 id="bugs-requests" tabindex="-1">Bugs/Requests <a class="header-anchor" href="#bugs-requests" aria-label="Permalink to &quot;Bugs/Requests {#bugs-requests}&quot;">​</a></h2><p>Please use the <a href="https://github.com/pytest-dev/pytest/issues" target="_blank" rel="noreferrer">GitHub issue tracker</a> to submit bugs or request features.</p><h2 id="support-pytest" tabindex="-1">Support pytest <a class="header-anchor" href="#support-pytest" aria-label="Permalink to &quot;Support pytest {#support-pytest}&quot;">​</a></h2><p><a href="https://opencollective.com/" target="_blank" rel="noreferrer">Open Collective</a> is an online funding platform for open and transparent communities. It provides tools to raise money and share your finances in full transparency.</p><p>It is the platform of choice for individuals and companies that want to make one-time or monthly donations directly to the project.</p><p>See more details in the <a href="https://opencollective.com/pytest" target="_blank" rel="noreferrer">pytest collective</a>.</p><h2 id="pytest-for-enterprise" tabindex="-1">pytest for enterprise <a class="header-anchor" href="#pytest-for-enterprise" aria-label="Permalink to &quot;pytest for enterprise {#pytest-for-enterprise}&quot;">​</a></h2><p>Available as part of the Tidelift Subscription.</p><p>The maintainers of pytest and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use.</p><p><a href="https://tidelift.com/subscription/pkg/pypi-pytest?utm_source=pypi-pytest&amp;utm_medium=referral&amp;utm_campaign=enterprise&amp;utm_term=repo" target="_blank" rel="noreferrer">Learn more</a>.</p><h2 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security {#security}&quot;">​</a></h2><p>pytest has never been associated with a security vulnerability, but in any case, to report a security vulnerability please use the <a href="https://tidelift.com/security" target="_blank" rel="noreferrer">Tidelift security contact</a>. Tidelift will coordinate the fix and disclosure.</p>`,26),l=[o];function t(r,c,y,i,E,_){return a(),n("div",null,l)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};