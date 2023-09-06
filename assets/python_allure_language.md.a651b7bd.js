import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.01af844e.js";const p="/allure/pytest_xpass_expected_failure.png",e="/allure/pytest_xpass_unexpected_pass.png",o="/allure/pytest_conditional_skip.png",t="/allure/pytest_skoped_finalizers.png",r="/allure/pytest_fixture_effect.png",c="/allure/pytest_parameterized_tests.png",i="/allure/pytest_parameterized_with_id.png",y="/allure/pytest_nested_steps_and_args.png",E="/allure/pytest_step_arguments.png",d="/allure/pytest_step_in_fixture.png",F="/allure/pytest_attachments.png",u="/allure/pytest_unicode_description_docstr.png",h="/allure/pytest_html_description.png",_="/allure/pytest_titles.png",m="/allure/pytest_test_with_link.png",f="/allure/pytest_test_case_with_issue_link.png",C="/allure/pytest_retry_tab.png",g="/allure/pytest_flaky_icon.png",S=JSON.parse('{"title":"Python","description":"","frontmatter":{},"headers":[],"relativePath":"python/allure/language.md","filePath":"python/allure/language.md","lastUpdated":1694020305000}'),B={name:"python/allure/language.md"},b=l(`<h1 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;Python {#python}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Only the python language for Allure is maintained. If you want to know about other programming languages for Allure, see <a href="https://docs.qameta.io/allure/#_java" target="_blank" rel="noreferrer">the document</a> for detail.</p></div><h2 id="pytest" tabindex="-1">Pytest <a class="header-anchor" href="#pytest" aria-label="Permalink to &quot;Pytest {#pytest}&quot;">​</a></h2><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation {#installation}&quot;">​</a></h3><p>Pytest is available for installation from the <a href="https://pypi.python.org/pypi/allure-pytest" target="_blank" rel="noreferrer">PyPI</a>, therefore installation with pip is recommended. To install the latest version, execute from the command line:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure-pytest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure-pytest</span></span></code></pre></div><p>That will install allure-pytest and allure-python-commons packages to produce report data compatible with Allure 2. If you are using a previous version of adapter for the <a href="https://pypi.python.org/pypi/pytest-allure-adaptor" target="_blank" rel="noreferrer">first generation</a> of Allure reports then you will need to uninstall it first.</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage {#usage}&quot;">​</a></h3><p>To enable Allure listener to collect results during the test execution simply add <code>--alluredir</code> option and provide path to the folder where results should be stored. E.g.:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--alluredir=/tmp/my_allure_results</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--alluredir=/tmp/my_allure_results</span></span></code></pre></div><p>To see the actual report after your tests have finished, you need to use Allure commandline utility to generate report from the results.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">serve</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/tmp/my_allure_results</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure</span><span style="color:#24292E;"> </span><span style="color:#032F62;">serve</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/tmp/my_allure_results</span></span></code></pre></div><p>This command will show you generated report in your default browser.</p><h3 id="basic-reporting" tabindex="-1">Basic Reporting <a class="header-anchor" href="#basic-reporting" aria-label="Permalink to &quot;Basic Reporting {#basic-reporting}&quot;">​</a></h3><p>Your can see all default pytest statuses in the Allure report: only tests that were not succeeded due to one of the assertion errors will be marked as failed, any other exception will cause a test to have a broken status.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_success</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;this test succeeds&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_failure</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;this test fails&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_skip</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;this test is skipped&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    pytest.skip(</span><span style="color:#9ECBFF;">&#39;for a reason!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_broken</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;oops&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_success</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;this test succeeds&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_failure</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;this test fails&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_skip</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;this test is skipped&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    pytest.skip(</span><span style="color:#032F62;">&#39;for a reason!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_broken</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;oops&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="supported-pytest-features" tabindex="-1">Supported Pytest features <a class="header-anchor" href="#supported-pytest-features" aria-label="Permalink to &quot;Supported Pytest features {#supported-pytest-features}&quot;">​</a></h3><p>Some of the common Pytest features that the Allure report supports include xfails, fixtures and finalizers, marks, conditional skips and parametrization.</p><h4 id="xfail" tabindex="-1">Xfail <a class="header-anchor" href="#xfail" aria-label="Permalink to &quot;Xfail {#xfail}&quot;">​</a></h4><p>This is pytest way of marking expected failures: (<a href="/python/pytest/how_to_guides/skip_xfail#how-to-use-skip-and-xfail-to-deal-with-tests-that-cannot-succeed">Pytest docs</a>)</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@pytest.mark.xfail</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">condition</span><span style="color:#F97583;">=lambda</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reason</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;this test is expecting failure&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_xfail_expected_failure</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;this test is an xfail that will be marked as expected failure&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.xfail</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">condition</span><span style="color:#F97583;">=lambda</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reason</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;this test is expecting failure&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_xfail_unexpected_pass</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;this test is an xfail that will be marked as unexpected success&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">True</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@pytest.mark.xfail</span><span style="color:#24292E;">(</span><span style="color:#E36209;">condition</span><span style="color:#D73A49;">=lambda</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">True</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reason</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;this test is expecting failure&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_xfail_expected_failure</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;this test is an xfail that will be marked as expected failure&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.xfail</span><span style="color:#24292E;">(</span><span style="color:#E36209;">condition</span><span style="color:#D73A49;">=lambda</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">True</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reason</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;this test is expecting failure&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_xfail_unexpected_pass</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;this test is an xfail that will be marked as unexpected success&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">True</span></span></code></pre></div><p>Which results in test being skipped and marked with a special tag when it is expected to fail.</p><p><img src="`+p+'" alt="pytest_xpass_expected_failure"></p><p>And special marking in description and a special tag when it unexpectedly passed.</p><p><img src="'+e+`" alt="pytest_xpass_unexpected_pass"></p><h4 id="conditional-mark" tabindex="-1">Conditional mark <a class="header-anchor" href="#conditional-mark" aria-label="Permalink to &quot;Conditional mark {#conditional-mark}&quot;">​</a></h4><p>In Pytest you can conditionally mark a test to not be executed under some specific conditions (<a href="/python/pytest/how_to_guides/skip_xfail#how-to-use-skip-and-xfail-to-deal-with-tests-that-cannot-succeed">Pytest docs</a>):</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@pytest.mark.skipif</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2 + 2 != 5&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reason</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;This test is skipped by a triggered condition in @pytest.mark.skipif&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_skip_by_triggered_condition</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@pytest.mark.skipif</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2 + 2 != 5&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reason</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;This test is skipped by a triggered condition in @pytest.mark.skipif&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_skip_by_triggered_condition</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p>When condition is evaluated to true, test receives a &#39;Skipped&#39; status in report, a tag and a description from the decorator.</p><p><img src="`+o+`" alt="pytest_conditional_skip"></p><h4 id="fixtures-and-finalizers" tabindex="-1">Fixtures and Finalizers <a class="header-anchor" href="#fixtures-and-finalizers" aria-label="Permalink to &quot;Fixtures and Finalizers {#fixtures-and-finalizers}&quot;">​</a></h4><p>Fixtures and finalizers are the utility functions that will be invoked by Pytest before your test starts and after your test ends respectively. Allure tracks invocations of every fixture and shows in full details what methods with what arguments were invoked, preserving the correct sequence of the calls that were made. (<a href="/python/pytest/reference_guides/api_reference/fixtures#pytest-fixture">Pytest docs</a>)</p><p>You don’t need to mark your fixtures to make them visible in the report, they will be detected automatically for different skopes.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">params</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">], </span><span style="color:#FFAB70;">ids</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;param_true&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;param_false&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">function_scope_fixture_with_finalizer</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> request.param:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;True&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;False&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">function_scope_finalizer</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        function_scope_step()</span></span>
<span class="line"><span style="color:#E1E4E8;">    request.addfinalizer(function_scope_finalizer)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;class&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class_scope_fixture_with_finalizer</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class_finalizer_fixture</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        class_scope_step()</span></span>
<span class="line"><span style="color:#E1E4E8;">    request.addfinalizer(class_finalizer_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">module_scope_fixture_with_finalizer</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">module_finalizer_fixture</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        module_scope_step()</span></span>
<span class="line"><span style="color:#E1E4E8;">    request.addfinalizer(module_finalizer_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;session&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">session_scope_fixture_with_finalizer</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">session_finalizer_fixture</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        session_scope_step()</span></span>
<span class="line"><span style="color:#E1E4E8;">    request.addfinalizer(session_finalizer_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClass</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_scoped_finalizers</span><span style="color:#E1E4E8;">(self,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    function_scope_fixture_with_finalizer,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    class_scope_fixture_with_finalizer,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    module_scope_fixture_with_finalizer,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    session_scope_fixture_with_finalizer):</span></span>
<span class="line"><span style="color:#E1E4E8;">        step_inside_test_body()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">params</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">False</span><span style="color:#24292E;">], </span><span style="color:#E36209;">ids</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;param_true&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;param_false&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">function_scope_fixture_with_finalizer</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> request.param:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;True&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;False&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">function_scope_finalizer</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        function_scope_step()</span></span>
<span class="line"><span style="color:#24292E;">    request.addfinalizer(function_scope_finalizer)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;class&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class_scope_fixture_with_finalizer</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class_finalizer_fixture</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        class_scope_step()</span></span>
<span class="line"><span style="color:#24292E;">    request.addfinalizer(class_finalizer_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">module_scope_fixture_with_finalizer</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">module_finalizer_fixture</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        module_scope_step()</span></span>
<span class="line"><span style="color:#24292E;">    request.addfinalizer(module_finalizer_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;session&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">session_scope_fixture_with_finalizer</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">session_finalizer_fixture</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        session_scope_step()</span></span>
<span class="line"><span style="color:#24292E;">    request.addfinalizer(session_finalizer_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClass</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_scoped_finalizers</span><span style="color:#24292E;">(self,</span></span>
<span class="line"><span style="color:#24292E;">                                    function_scope_fixture_with_finalizer,</span></span>
<span class="line"><span style="color:#24292E;">                                    class_scope_fixture_with_finalizer,</span></span>
<span class="line"><span style="color:#24292E;">                                    module_scope_fixture_with_finalizer,</span></span>
<span class="line"><span style="color:#24292E;">                                    session_scope_fixture_with_finalizer):</span></span>
<span class="line"><span style="color:#24292E;">        step_inside_test_body()</span></span></code></pre></div><p><img src="`+t+`" alt="pytest_skoped_finalizers"></p><p>Depending on an outcome of a fixture execution, test that is dependent on it may receive a different status. Exception in the fixture would make all dependent tests broken, <code>pytest.skip()</code> call would make all dependent test skipped.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">skip_fixture</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    pytest.skip()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail_fixture</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">broken_fixture</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Sorry, it&#39;s broken.&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_pytest_skip_in_the_fixture</span><span style="color:#E1E4E8;">(skip_fixture):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_failure_in_the_fixture</span><span style="color:#E1E4E8;">(fail_fixture):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_broken_fixture</span><span style="color:#E1E4E8;">(broken_fixture):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">skip_fixture</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    pytest.skip()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail_fixture</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">broken_fixture</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Sorry, it&#39;s broken.&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_pytest_skip_in_the_fixture</span><span style="color:#24292E;">(skip_fixture):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_failure_in_the_fixture</span><span style="color:#24292E;">(fail_fixture):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_broken_fixture</span><span style="color:#24292E;">(broken_fixture):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p><img src="`+r+`" alt="pytest_fixture_effect"></p><h4 id="parametrization" tabindex="-1">Parametrization <a class="header-anchor" href="#parametrization" aria-label="Permalink to &quot;Parametrization {#parametrization}&quot;">​</a></h4><p>You can generate many test cases from the sets of input parameters using <code>@pytest.mark.parametrize</code>. (<a href="/python/pytest/reference_guides/api_reference/marks#pytest-mark-parametrize">Pytest docs</a>)</p><p>All argument names and values will be captured in the report, optionally argument names will be replaced with provided string descriptions in the ids kwarg.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">simple_step</span><span style="color:#E1E4E8;">(step_param1, step_param2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.parametrize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;param1&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">], </span><span style="color:#FFAB70;">ids</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;id explaining value 1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;id explaining value 2&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_parameterize_with_id</span><span style="color:#E1E4E8;">(param1):</span></span>
<span class="line"><span style="color:#E1E4E8;">    simple_step(param1)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.parametrize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;param1&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.parametrize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;param2&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;value 1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;value 2&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_parametrize_with_two_parameters</span><span style="color:#E1E4E8;">(param1, param2):</span></span>
<span class="line"><span style="color:#E1E4E8;">    simple_step(param1, param2)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.parametrize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;param1&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">], </span><span style="color:#FFAB70;">ids</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;boolean parameter id&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.parametrize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;param2&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;value 1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;value 2&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.parametrize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;param3&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_parameterize_with_uneven_value_sets</span><span style="color:#E1E4E8;">(param1, param2, param3):</span></span>
<span class="line"><span style="color:#E1E4E8;">    simple_step(param1, param3)</span></span>
<span class="line"><span style="color:#E1E4E8;">    simple_step(param2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">simple_step</span><span style="color:#24292E;">(step_param1, step_param2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.parametrize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;param1&#39;</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">False</span><span style="color:#24292E;">], </span><span style="color:#E36209;">ids</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;id explaining value 1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;id explaining value 2&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_parameterize_with_id</span><span style="color:#24292E;">(param1):</span></span>
<span class="line"><span style="color:#24292E;">    simple_step(param1)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.parametrize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;param1&#39;</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">False</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.parametrize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;param2&#39;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&#39;value 1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;value 2&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_parametrize_with_two_parameters</span><span style="color:#24292E;">(param1, param2):</span></span>
<span class="line"><span style="color:#24292E;">    simple_step(param1, param2)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.parametrize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;param1&#39;</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">], </span><span style="color:#E36209;">ids</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;boolean parameter id&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.parametrize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;param2&#39;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&#39;value 1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;value 2&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.parametrize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;param3&#39;</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_parameterize_with_uneven_value_sets</span><span style="color:#24292E;">(param1, param2, param3):</span></span>
<span class="line"><span style="color:#24292E;">    simple_step(param1, param3)</span></span>
<span class="line"><span style="color:#24292E;">    simple_step(param2)</span></span></code></pre></div><p>Example of captured test invocations with different sets of named and unnamed parameters.</p><p><img src="`+c+'" alt="pytest_parameterized_tests"></p><p>Details of test execution for a parameterized test with a named parameter.</p><p><img src="'+i+`" alt="pytest_parameterized_with_id"></p><h3 id="allure-features" tabindex="-1">Allure Features <a class="header-anchor" href="#allure-features" aria-label="Permalink to &quot;Allure Features {#allure-features}&quot;">​</a></h3><p>Allure currently supports almost every available feature except for environment with Pytest.</p><h4 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps {#steps}&quot;">​</a></h4><p>The first and probably most important aspect of the Allure report is that it allows to get a very detailed step-by-step representation of every test invocation. This is made possible with <code>@allure.step</code> decorator that adds invocation of the annotated method or function with provided arguments to the report.</p><p>Methods annotated with <code>@step</code> can be stored aside from your tests and just imported when needed. Step methods can have an arbitrarily deep nested structure.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .steps </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> imported_step</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">passing_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">step_with_nested_steps</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    nested_step()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nested_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    nested_step_with_arguments(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;abc&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nested_step_with_arguments</span><span style="color:#E1E4E8;">(arg1, arg2):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_imported_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    passing_step()</span></span>
<span class="line"><span style="color:#E1E4E8;">    imported_step()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_nested_steps</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    passing_step()</span></span>
<span class="line"><span style="color:#E1E4E8;">    step_with_nested_steps()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .steps </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> imported_step</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">passing_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">step_with_nested_steps</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    nested_step()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nested_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    nested_step_with_arguments(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;abc&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nested_step_with_arguments</span><span style="color:#24292E;">(arg1, arg2):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_imported_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    passing_step()</span></span>
<span class="line"><span style="color:#24292E;">    imported_step()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_nested_steps</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    passing_step()</span></span>
<span class="line"><span style="color:#24292E;">    step_with_nested_steps()</span></span></code></pre></div><p>Status of every step is shown in a small icon on the right from the name. Nested steps are organized in a tree-like collapsible structure.</p><p><img src="`+y+`" alt="pytest_nested_steps_and_args"></p><p>Steps can have a description line that supports placeholders for passed positional and keyword arguments. Default parameters of the keyword arguments will be captured as well.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Step with placeholders in the title, positional: &quot;</span><span style="color:#79B8FF;">{0}</span><span style="color:#9ECBFF;">&quot;, keyword: &quot;</span><span style="color:#79B8FF;">{key}</span><span style="color:#9ECBFF;">&quot;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">step_with_title_placeholders</span><span style="color:#E1E4E8;">(arg1, key</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_steps_with_placeholders</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    step_with_title_placeholders(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;something&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    step_with_title_placeholders(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    step_with_title_placeholders(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;anything&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Step with placeholders in the title, positional: &quot;</span><span style="color:#005CC5;">{0}</span><span style="color:#032F62;">&quot;, keyword: &quot;</span><span style="color:#005CC5;">{key}</span><span style="color:#032F62;">&quot;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">step_with_title_placeholders</span><span style="color:#24292E;">(arg1, key</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">None</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_steps_with_placeholders</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    step_with_title_placeholders(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;something&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    step_with_title_placeholders(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    step_with_title_placeholders(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;anything&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p><img src="`+E+`" alt="pytest_step_arguments"></p><p>Steps are supported in fixtures as well. Here is an example of a test using a fixture defined in <code>conftest.py</code> module (such fixtures will be resolved by Pytest even when not directly imported):</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># conftest.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;step in conftest.py&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">conftest_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fixture_with_conftest_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    conftest_step()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># conftest.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;step in conftest.py&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">conftest_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fixture_with_conftest_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    conftest_step()</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .steps </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> imported_step</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">passing_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_step_in_fixture_from_conftest</span><span style="color:#E1E4E8;">(fixture_with_conftest_step):</span></span>
<span class="line"><span style="color:#E1E4E8;">    passing_step()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .steps </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> imported_step</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">passing_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_step_in_fixture_from_conftest</span><span style="color:#24292E;">(fixture_with_conftest_step):</span></span>
<span class="line"><span style="color:#24292E;">    passing_step()</span></span></code></pre></div><p>Steps in fixtures are shown in separate trees for setup and teardown.</p><p><img src="`+d+`" alt="pytest_step_in_fixture"></p><h4 id="attachments" tabindex="-1">Attachments <a class="header-anchor" href="#attachments" aria-label="Permalink to &quot;Attachments {#attachments}&quot;">​</a></h4><p>Reports can display many different types of provided attachments that can complement a test, step or fixture result. Attachments can be created either with invocation of <code>allure.attach(body, name, attachment_type, extension)</code>:</p><ol><li><p><code>body</code> - raw content to be written into the file.</p></li><li><p><code>name</code> - a string with name of the file</p></li><li><p><code>attachment_type</code> - one of the <code>allure.attachment_type</code> values</p></li><li><p><code>extension</code> - is provided will be used as an extension for the created file.</p></li></ol><p>or <code>allure.attach.file(source, name, attachment_type, extension)</code>:</p><ol><li><code>source</code> - a string containing path to the file.</li></ol><p>(other arguments are the same)</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">attach_file_in_module_scope_fixture_with_finalizer</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    allure.attach(</span><span style="color:#9ECBFF;">&#39;A text attacment in module scope fixture&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;blah blah blah&#39;</span><span style="color:#E1E4E8;">, allure.attachment_type.</span><span style="color:#79B8FF;">TEXT</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">finalizer_module_scope_fixture</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        allure.attach(</span><span style="color:#9ECBFF;">&#39;A text attacment in module scope finalizer&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;blah blah blah blah&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      allure.attachment_type.</span><span style="color:#79B8FF;">TEXT</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    request.addfinalizer(finalizer_module_scope_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_attacments_in_fixture_and_finalizer</span><span style="color:#E1E4E8;">(attach_file_in_module_scope_finalizer):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_multiple_attachments</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    allure.attach.file(</span><span style="color:#9ECBFF;">&#39;./data/totally_open_source_kitten.png&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">attachment_type</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">allure.attachment_type.</span><span style="color:#79B8FF;">PNG</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    allure.attach(</span><span style="color:#9ECBFF;">&#39;&lt;head&gt;&lt;/head&gt;&lt;body&gt; a page &lt;/body&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Attach with HTML type&#39;</span><span style="color:#E1E4E8;">, allure.attachment_type.</span><span style="color:#79B8FF;">HTML</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">attach_file_in_module_scope_fixture_with_finalizer</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    allure.attach(</span><span style="color:#032F62;">&#39;A text attacment in module scope fixture&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;blah blah blah&#39;</span><span style="color:#24292E;">, allure.attachment_type.</span><span style="color:#005CC5;">TEXT</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">finalizer_module_scope_fixture</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        allure.attach(</span><span style="color:#032F62;">&#39;A text attacment in module scope finalizer&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;blah blah blah blah&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                      allure.attachment_type.</span><span style="color:#005CC5;">TEXT</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    request.addfinalizer(finalizer_module_scope_fixture)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_attacments_in_fixture_and_finalizer</span><span style="color:#24292E;">(attach_file_in_module_scope_finalizer):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_multiple_attachments</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    allure.attach.file(</span><span style="color:#032F62;">&#39;./data/totally_open_source_kitten.png&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">attachment_type</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">allure.attachment_type.</span><span style="color:#005CC5;">PNG</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    allure.attach(</span><span style="color:#032F62;">&#39;&lt;head&gt;&lt;/head&gt;&lt;body&gt; a page &lt;/body&gt;&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Attach with HTML type&#39;</span><span style="color:#24292E;">, allure.attachment_type.</span><span style="color:#005CC5;">HTML</span><span style="color:#24292E;">)</span></span></code></pre></div><p>Attachments are shown in the context of a test entity they belong to. Attachments of HTML type are rendered and displayed on the report page. This is a convenient way to provide some customization for your own representation of a test result.</p><p><img src="`+F+`" alt="pytest_attachments"></p><h4 id="descriptions" tabindex="-1">Descriptions <a class="header-anchor" href="#descriptions" aria-label="Permalink to &quot;Descriptions {#descriptions}&quot;">​</a></h4><p>You can add a detailed description for tests to provide as much context to the report reader as you want. This can be done in several ways: you can add a <code>@allure.description</code> decorator providing a description string or you can use <code>@allure.description_html</code> to provide some HTML to be rendered in the &#39;Description&#39; section of a test case. Alternatively description will be simply picked up from the docstring of a test method.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.description_html</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;h1&gt;Test with some complicated html description&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;table style=&quot;width:100%&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;th&gt;Firstname&lt;/th&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;th&gt;Lastname&lt;/th&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;th&gt;Age&lt;/th&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;tr align=&quot;center&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;td&gt;William&lt;/td&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;td&gt;Smith&lt;/td&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;td&gt;50&lt;/td&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;tr align=&quot;center&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;td&gt;Vasya&lt;/td&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;td&gt;Jackson&lt;/td&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;td&gt;94&lt;/td&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;/table&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;&quot;&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_html_description</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">Multiline test description.</span></span>
<span class="line"><span style="color:#9ECBFF;">That comes from the allure.description decorator.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Nothing special about it.</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;&quot;&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_description_from_decorator</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_unicode_in_docstring_description</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Unicode in description.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    Этот тест проверяет юникод.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    你好伙计.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.description_html</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">&lt;h1&gt;Test with some complicated html description&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#032F62;">&lt;table style=&quot;width:100%&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;th&gt;Firstname&lt;/th&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;th&gt;Lastname&lt;/th&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;th&gt;Age&lt;/th&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;tr align=&quot;center&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;td&gt;William&lt;/td&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;td&gt;Smith&lt;/td&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;td&gt;50&lt;/td&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;tr align=&quot;center&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;td&gt;Vasya&lt;/td&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;td&gt;Jackson&lt;/td&gt;</span></span>
<span class="line"><span style="color:#032F62;">    &lt;td&gt;94&lt;/td&gt;</span></span>
<span class="line"><span style="color:#032F62;">  &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">&lt;/table&gt;</span></span>
<span class="line"><span style="color:#032F62;">&quot;&quot;&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_html_description</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.description</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">Multiline test description.</span></span>
<span class="line"><span style="color:#032F62;">That comes from the allure.description decorator.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Nothing special about it.</span></span>
<span class="line"><span style="color:#032F62;">&quot;&quot;&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_description_from_decorator</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_unicode_in_docstring_description</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Unicode in description.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    Этот тест проверяет юникод.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    你好伙计.</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span></code></pre></div><p>Description supports unicode strings:</p><p><img src="`+u+'" alt="pytest_unicode_description_docstr"></p><p>Rendered HTML from description_html:</p><p><img src="'+h+`" alt="pytest_html_description"></p><p>Also descriptions can be dynamically updated from within test body using allure.dynamic.description.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.description</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">This description will be replaced at the end of the test.</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;&quot;&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_dynamic_description</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    allure.dynamic.description(</span><span style="color:#9ECBFF;">&#39;A final description.&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.description</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">This description will be replaced at the end of the test.</span></span>
<span class="line"><span style="color:#032F62;">&quot;&quot;&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_dynamic_description</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    allure.dynamic.description(</span><span style="color:#032F62;">&#39;A final description.&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h4 id="titles" tabindex="-1">Titles <a class="header-anchor" href="#titles" aria-label="Permalink to &quot;Titles {#titles}&quot;">​</a></h4><p>Test titles can be made more readable with special <code>@allure.title</code> decorator. Titles support placeholders for arguments and support dynamic replacement.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.title</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This test has a custom title&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_a_title</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.title</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This test has a custom title with unicode: Привет!&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_unicode_title</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.title</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Parameterized test title: adding </span><span style="color:#79B8FF;">{param1}</span><span style="color:#9ECBFF;"> with </span><span style="color:#79B8FF;">{param2}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">@pytest.mark.parametrize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;param1,param2,expected&#39;</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_parameterized_title</span><span style="color:#E1E4E8;">(param1, param2, expected):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> param1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> param2 </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> expected</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.title</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This title will be replaced in a test body&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_dynamic_title</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">    allure.dynamic.title(</span><span style="color:#9ECBFF;">&#39;After a successful test finish, the title was replaced with this line.&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.title</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This test has a custom title&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_a_title</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.title</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This test has a custom title with unicode: Привет!&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_unicode_title</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.title</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Parameterized test title: adding </span><span style="color:#005CC5;">{param1}</span><span style="color:#032F62;"> with </span><span style="color:#005CC5;">{param2}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">@pytest.mark.parametrize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;param1,param2,expected&#39;</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_parameterized_title</span><span style="color:#24292E;">(param1, param2, expected):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> param1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> param2 </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> expected</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.title</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This title will be replaced in a test body&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_dynamic_title</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">    allure.dynamic.title(</span><span style="color:#032F62;">&#39;After a successful test finish, the title was replaced with this line.&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p><img src="`+_+`" alt="pytest_titles"></p><h4 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links {#links}&quot;">​</a></h4><p>To integrate report with a bugtracker or test management system Allure has <code>@allure.link</code>, <code>@allure.issue</code> and<code> @allure.testcase</code> descriptors.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">TEST_CASE_LINK</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://github.com/qameta/allure-integrations/issues/8#issuecomment-268313637&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.link</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.youtube.com/watch?v=4YYzUTYZRMU&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_link</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.link</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://www.youtube.com/watch?v=Su5p2TqZxKU&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;Click me&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_named_link</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.issue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;140&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Pytest-flaky test retries shows like test steps&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_issue_link</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.testcase</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">TEST_CASE_LINK</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Test case title&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_testcase_link</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">TEST_CASE_LINK</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://github.com/qameta/allure-integrations/issues/8#issuecomment-268313637&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.link</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://www.youtube.com/watch?v=4YYzUTYZRMU&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_link</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.link</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://www.youtube.com/watch?v=Su5p2TqZxKU&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;Click me&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_named_link</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.issue</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;140&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Pytest-flaky test retries shows like test steps&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_issue_link</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.testcase</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">TEST_CASE_LINK</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Test case title&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_testcase_link</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p><code>@allure.link</code> will provide a clickable link to provided url in &#39;Links&#39; section:</p><p><img src="`+m+`" alt="pytest_test_with_link"></p><p><code>@allure.issue</code> will provide a link with a small bug icon. This descriptor takes test case id as the input parameter to use it with provided link template for issue link type. Link templates are specified in <code>--allure-link-pattern</code> configuration option for Pytest. Link templates and types have to be specified using a colon:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">directory_with_tests/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--alluredir=/tmp/my_allure_report</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--allure-link-pattern=issue:http://www.mytesttracker.com/issue/</span><span style="color:#E1E4E8;">{}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">directory_with_tests/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--alluredir=/tmp/my_allure_report</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#005CC5;">--allure-link-pattern=issue:http://www.mytesttracker.com/issue/</span><span style="color:#24292E;">{}</span></span></code></pre></div><p>Template keywords are issue, link and test_case to provide a template for the corresponding type of link.</p><p><img src="`+f+`" alt="pytest_test_case_with_issue_link"></p><h3 id="retries" tabindex="-1">Retries <a class="header-anchor" href="#retries" aria-label="Permalink to &quot;Retries {#retries}&quot;">​</a></h3><p>Allure allows you to aggregate information about test being re-executed during a single test run as well as history of test execution over some period of time.</p><p>For retries you can use <a href="https://github.com/pytest-dev/pytest-rerunfailures" target="_blank" rel="noreferrer">Pytest rerun failures plugin</a>.</p><p>For example if we have a very unreliable step method that fails often, after specifying <code>--reruns=5</code> in the Pytest startup options we would see all unsuccessful attempts to run this test displayed on the <code>Retries</code> tab.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> random</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> time</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">passing_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flaky_broken_step</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> random.randint(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Broken!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_broken_with_randomized_time</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    passing_step()</span></span>
<span class="line"><span style="color:#E1E4E8;">    time.sleep(random.randint(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    flaky_broken_step()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> random</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> time</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">passing_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flaky_broken_step</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> random.randint(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Broken!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_broken_with_randomized_time</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    passing_step()</span></span>
<span class="line"><span style="color:#24292E;">    time.sleep(random.randint(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    flaky_broken_step()</span></span></code></pre></div><p><img src="`+C+'" alt="pytest_retry_tab"></p><p>Also such a test would receive &#39;flaky&#39; bomb icon in the list of executed tests.</p><p><img src="'+g+`" alt="pytest_flaky_icon"></p><h3 id="tags" tabindex="-1">Tags <a class="header-anchor" href="#tags" aria-label="Permalink to &quot;Tags {#tags}&quot;">​</a></h3><p>Sometimes you want to be flexible with tests that you want to be executed. Pytest allows that by using marker decorator <code>@pytest.mark</code> (<a href="/python/pytest/further_topics/example_trick/custom_mark#working-with-custom-markers">Pytest docs</a>).</p><p>Allure allows to mark your tests in a similar way with 3 types of marking decorators that allow to structure representation of your report:</p><ol><li><p>BDD-style markers denoting Epics, Features and Stories</p></li><li><p>Severity labels</p></li><li><p>Custom labels</p></li></ol><h4 id="bdd-markers" tabindex="-1">BDD markers <a class="header-anchor" href="#bdd-markers" aria-label="Permalink to &quot;BDD markers {#bdd-markers}&quot;">​</a></h4><p>There are two decorators: <code>@allure.feature</code> and <code>@allure.story</code> to mark your tests according to Feature/Story breakdown specific to your project (<a href="https://en.wikipedia.org/wiki/Behavior-driven_development" target="_blank" rel="noreferrer">for background see BDD article on Wikipedia</a>). To mark that some feature or story belong to an epic, use a name that starts with <code>epic_</code> prefix.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># tests.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_without_any_annotations_that_wont_be_executed</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.story</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;epic_1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_epic_1</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.story</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;story_1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_story_1</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.story</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;story_2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_story_2</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.feature</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;feature_2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">@allure.story</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;story_2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_story_2_and_feature_2</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># tests.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_without_any_annotations_that_wont_be_executed</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.story</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;epic_1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_epic_1</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.story</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;story_1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_story_1</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.story</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;story_2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_story_2</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.feature</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;feature_2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">@allure.story</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;story_2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_story_2_and_feature_2</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p>You can use following commandline options to specify different sets of tests to execute passing a list of comma-separated values:</p><ol><li><p><code>--allure-epics</code></p></li><li><p><code>--allure-features</code></p></li><li><p><code>--allure-stories</code></p></li></ol><p>for example:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests.py</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--allure-stories</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">story_1,story_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collected</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">tests.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">...</span><span style="color:#E1E4E8;">                                                                    [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">============================== </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">passed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.01</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">seconds</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==============================</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests.py</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--allure-stories</span><span style="color:#24292E;"> </span><span style="color:#032F62;">story_1,story_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collected</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#032F62;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">tests.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">...</span><span style="color:#24292E;">                                                                    [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">============================== </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">passed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.01</span><span style="color:#24292E;"> </span><span style="color:#032F62;">seconds</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==============================</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests.py</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--allure-features</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">feature2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--allure-stories</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">story2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collected</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">tests.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">...</span><span style="color:#E1E4E8;">                                                                     [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">=============================== </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">passed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.01</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">seconds</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==============================</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests.py</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--allure-features</span><span style="color:#24292E;"> </span><span style="color:#032F62;">feature2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--allure-stories</span><span style="color:#24292E;"> </span><span style="color:#032F62;">story2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collected</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#032F62;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">tests.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">...</span><span style="color:#24292E;">                                                                     [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">=============================== </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">passed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.01</span><span style="color:#24292E;"> </span><span style="color:#032F62;">seconds</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==============================</span></span></code></pre></div><h4 id="severity-markers" tabindex="-1">Severity markers <a class="header-anchor" href="#severity-markers" aria-label="Permalink to &quot;Severity markers {#severity-markers}&quot;">​</a></h4><p>To mark your tests by severity level you can use <code>@allure.severity</code> decorator. It takes a <code>allure.severity_level</code> enum value as an argument.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># tests.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> allure</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_no_severity_label</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.severity</span><span style="color:#E1E4E8;">(allure.severity_level.</span><span style="color:#79B8FF;">TRIVIAL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_trivial_severity</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.severity</span><span style="color:#E1E4E8;">(allure.severity_level.</span><span style="color:#79B8FF;">NORMAL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_with_normal_severity</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@allure.severity</span><span style="color:#E1E4E8;">(allure.severity_level.</span><span style="color:#79B8FF;">NORMAL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClassWithNormalSeverity</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_inside_the_normal_severity_test_class</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@allure.severity</span><span style="color:#E1E4E8;">(allure.severity_level.</span><span style="color:#79B8FF;">CRITICAL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_inside_the_normal_severity_test_class_with_overriding_critical_severity</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># tests.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> allure</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_no_severity_label</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.severity</span><span style="color:#24292E;">(allure.severity_level.</span><span style="color:#005CC5;">TRIVIAL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_trivial_severity</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.severity</span><span style="color:#24292E;">(allure.severity_level.</span><span style="color:#005CC5;">NORMAL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_with_normal_severity</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@allure.severity</span><span style="color:#24292E;">(allure.severity_level.</span><span style="color:#005CC5;">NORMAL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClassWithNormalSeverity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_inside_the_normal_severity_test_class</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@allure.severity</span><span style="color:#24292E;">(allure.severity_level.</span><span style="color:#005CC5;">CRITICAL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_inside_the_normal_severity_test_class_with_overriding_critical_severity</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p>Severity decorator can be applied to functions, methods or entire classes.</p><p>By using <code>--allure-severities</code> commandline option with a list of comma-separated severity levels only tests with corresponding severities will be run.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests.py</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--allure-severities</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">normal,critical</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collected</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">bdd_annotations_demo/test_severity_labels.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">...</span><span style="color:#E1E4E8;">                                [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">================================ </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">passed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.01</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">seconds</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">============================</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests.py</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--allure-severities</span><span style="color:#24292E;"> </span><span style="color:#032F62;">normal,critical</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collected</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#032F62;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">bdd_annotations_demo/test_severity_labels.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">...</span><span style="color:#24292E;">                                [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">================================ </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">passed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.01</span><span style="color:#24292E;"> </span><span style="color:#032F62;">seconds</span><span style="color:#24292E;"> </span><span style="color:#032F62;">============================</span></span></code></pre></div><h2 id="behave" tabindex="-1">Behave <a class="header-anchor" href="#behave" aria-label="Permalink to &quot;Behave {#behave}&quot;">​</a></h2><p>Allure integrates with behave as an external formatter.</p><h3 id="instalation" tabindex="-1">Instalation <a class="header-anchor" href="#instalation" aria-label="Permalink to &quot;Instalation {#instalation}&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure-behave</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure-behave</span></span></code></pre></div><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage {#usage-1}&quot;">​</a></h3><p>You can specify the formatter directly in the command line:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">behave</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure_behave.formatter:AllureFormatter</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">%allure_result_folder%</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./features</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">behave</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure_behave.formatter:AllureFormatter</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">%allure_result_folder%</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./features</span></span></code></pre></div><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features {#features}&quot;">​</a></h3><h4 id="severity" tabindex="-1">Severity <a class="header-anchor" href="#severity" aria-label="Permalink to &quot;Severity {#severity}&quot;">​</a></h4><p>Tags that are matched to severity names (like critical, trivial, etc.) will be interpreted as a feature or scenario severity. Scenario inherits feature severity if not provided, or overrides it in the other case. If there is more than one severity definition tag, only the last one is used.</p><h4 id="steps-and-scenarious-status" tabindex="-1">Steps and Scenarious status <a class="header-anchor" href="#steps-and-scenarious-status" aria-label="Permalink to &quot;Steps and Scenarious status {#steps-and-scenarious-status}&quot;">​</a></h4><p>Steps with assertion exceptions will be marked as failed. Other exceptions thrown during the test execution will cause it to have status broken. Scenario status will be determined by the first unsuccessful step status. When all steps are passed, then the whole scenario is considered passed.</p><h4 id="step-data" tabindex="-1">Step Data <a class="header-anchor" href="#step-data" aria-label="Permalink to &quot;Step Data {#step-data}&quot;">​</a></h4><p>Step data text or table data are represented as step attachments in report.</p><h2 id="nose" tabindex="-1">Nose <a class="header-anchor" href="#nose" aria-label="Permalink to &quot;Nose {#nose}&quot;">​</a></h2><p>It is a port of <a href="https://github.com/allure-framework/allure-python" target="_blank" rel="noreferrer">pytest-allure-adaptor</a> for <a href="https://github.com/nose-devs/nose" target="_blank" rel="noreferrer">nose framework</a>.</p><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage {#usage-2}&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nosetests</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-allure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--logdir=/path/to/put/results</span></span>
<span class="line"><span style="color:#B392F0;">nosetests</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-allure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--logdir=/path/to/put/results</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--not-clear-logdir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nosetests</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-allure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--logdir=/path/to/put/results</span></span>
<span class="line"><span style="color:#6F42C1;">nosetests</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-allure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--logdir=/path/to/put/results</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--not-clear-logdir</span></span></code></pre></div><p>Option &quot;--not-clear-logdir&quot; is useful with option &quot;--processes&quot; to prevent cleaning of logdr at the end of testing.</p><h3 id="supported-features" tabindex="-1">Supported features <a class="header-anchor" href="#supported-features" aria-label="Permalink to &quot;Supported features {#supported-features}&quot;">​</a></h3><h4 id="attachment" tabindex="-1">Attachment <a class="header-anchor" href="#attachment" aria-label="Permalink to &quot;Attachment {#attachment}&quot;">​</a></h4><p>To attach some content to test report:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_foo</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    nose.allure.attach(</span><span style="color:#9ECBFF;">&#39;my attach&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Hello, World&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_foo</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    nose.allure.attach(</span><span style="color:#032F62;">&#39;my attach&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Hello, World&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h4 id="step" tabindex="-1">Step <a class="header-anchor" href="#step" aria-label="Permalink to &quot;Step {#step}&quot;">​</a></h4><p>To divide a test into steps:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_foo</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> nose.allure.step(</span><span style="color:#9ECBFF;">&#39;step one&#39;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># do stuff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> nose.allure.step(</span><span style="color:#9ECBFF;">&#39;step two&#39;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># do more stuff</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_foo</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> nose.allure.step(</span><span style="color:#032F62;">&#39;step one&#39;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># do stuff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> nose.allure.step(</span><span style="color:#032F62;">&#39;step two&#39;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># do more stuff</span></span></code></pre></div><p>Can also be used as decorators. By default step name is generated from method name:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@nose.allure.step</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">make_test_data_foo</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># do stuff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_foo</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> make_some_data_foo() </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@nose.allure.step</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;make_some_data_foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">make_some_data_bar</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># do another stuff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_bar</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> make_some_data_bar() </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@nose.allure.step</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">make_test_data_foo</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># do stuff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_foo</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> make_some_data_foo() </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@nose.allure.step</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;make_some_data_foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">make_some_data_bar</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># do another stuff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_bar</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> make_some_data_bar() </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span></span></code></pre></div><h4 id="environment" tabindex="-1">Environment <a class="header-anchor" href="#environment" aria-label="Permalink to &quot;Environment {#environment}&quot;">​</a></h4><p>You can provide test <a href="https://github.com/allure-framework/allure-core/wiki/Environment" target="_blank" rel="noreferrer">environment parameters</a> such as report name, browser or test server address to allure test report.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_dummy</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    nose.allure.environment(</span><span style="color:#FFAB70;">report</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;Allure report&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">browser</span><span style="color:#F97583;">=</span><span style="color:#F97583;">u</span><span style="color:#9ECBFF;">&#39;Firefox&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_dummy</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    nose.allure.environment(</span><span style="color:#E36209;">report</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;Allure report&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">browser</span><span style="color:#D73A49;">=</span><span style="color:#D73A49;">u</span><span style="color:#032F62;">&#39;Firefox&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h4 id="severity-1" tabindex="-1">Severity <a class="header-anchor" href="#severity-1" aria-label="Permalink to &quot;Severity {#severity-1}&quot;">​</a></h4><p>Any test, class or module can be marked with different severity:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestBar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@nose.allure.severity</span><span style="color:#E1E4E8;">(nose.allure.severity_level.</span><span style="color:#79B8FF;">CRITICAL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_bar</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># custom severity</span></span>
<span class="line"><span style="color:#B392F0;">@nose.allure.severity</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hard&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_bar</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestBar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@nose.allure.severity</span><span style="color:#24292E;">(nose.allure.severity_level.</span><span style="color:#005CC5;">CRITICAL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_bar</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># custom severity</span></span>
<span class="line"><span style="color:#6F42C1;">@nose.allure.severity</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hard&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_bar</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p>To run tests with concrete priority:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nosetests</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my_tests/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-allure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--logdir=tmp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--severity=</span><span style="color:#9ECBFF;">&quot;critical, hard&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nosetests</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my_tests/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-allure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--logdir=tmp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--severity=</span><span style="color:#032F62;">&quot;critical, hard&quot;</span></span></code></pre></div><h4 id="issue" tabindex="-1">Issue <a class="header-anchor" href="#issue" aria-label="Permalink to &quot;Issue {#issue}&quot;">​</a></h4><p>Issues can be set for test.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@nose.allure.issue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;http://jira.lan/browse/ISSUE-1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_foo</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@nose.allure.issue</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http://jira.lan/browse/ISSUE-1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_foo</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span></code></pre></div><h4 id="features-stories" tabindex="-1">Features &amp; Stories <a class="header-anchor" href="#features-stories" aria-label="Permalink to &quot;Features &amp; Stories {#features-stories}&quot;">​</a></h4><p>Feature and Story can be set for test.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@nose.allure.feature</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Feature1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">@nose.allure.story</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Story1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_minor</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestBar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@nose.allure.feature</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Feature2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@nose.allure.story</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Story1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_bar</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> nose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@nose.allure.feature</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Feature1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">@nose.allure.story</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Story1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_minor</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestBar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@nose.allure.feature</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Feature2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@nose.allure.story</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Story1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_bar</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p>To run tests by Feature or Story:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nosetests</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my_tests/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-allure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--logdir=tmp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--feature=</span><span style="color:#9ECBFF;">&quot;Feature1, Feature2&quot;</span></span>
<span class="line"><span style="color:#B392F0;">nosetests</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my_tests/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--with-allure</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--logdir=tmp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--feature=</span><span style="color:#9ECBFF;">&quot;Feature1, Feature2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--story=</span><span style="color:#9ECBFF;">&quot;Story1, Story2&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nosetests</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my_tests/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-allure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--logdir=tmp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--feature=</span><span style="color:#032F62;">&quot;Feature1, Feature2&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">nosetests</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my_tests/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--with-allure</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--logdir=tmp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--feature=</span><span style="color:#032F62;">&quot;Feature1, Feature2&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--story=</span><span style="color:#032F62;">&quot;Story1, Story2&quot;</span></span></code></pre></div>`,163),v=[b];function k(A,w,q,D,x,T){return a(),n("div",null,v)}const P=s(B,[["render",k]]);export{S as __pageData,P as default};
