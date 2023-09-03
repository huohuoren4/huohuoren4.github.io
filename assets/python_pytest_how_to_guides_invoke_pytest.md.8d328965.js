import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.01af844e.js";const u=JSON.parse('{"title":"How to invoke pytest","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/how_to_guides/invoke_pytest.md","filePath":"python/pytest/how_to_guides/invoke_pytest.md","lastUpdated":1692629285000}'),o={name:"python/pytest/how_to_guides/invoke_pytest.md"},t=n(`<h1 id="how-to-invoke-pytest" tabindex="-1">How to invoke pytest <a class="header-anchor" href="#how-to-invoke-pytest" aria-label="Permalink to &quot;How to invoke pytest {#how-to-invoke-pytest}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">See also</p><p><a href="/python/pytest/reference_guides/api_reference/cmd_flags#command-line-flags">Complete pytest command-line flag reference</a></p></div><p>In general, pytest is invoked with the command <code>pytest</code> (see below for <a href="/python/pytest/how_to_guides/invoke_pytest#other-ways-of-calling-pytest">other ways to invoke pytest</a>). This will execute all tests in all files whose names follow the form <code>test_*</code>.py or <code>\\*_test.py</code> in the current directory and its subdirectories. More generally, pytest follows <a href="/python/pytest/explanation/integration_practice#conventions-for-python-test-discovery">standard test discovery rules</a>.</p><h2 id="specifying-which-tests-to-run" tabindex="-1">Specifying which tests to run <a class="header-anchor" href="#specifying-which-tests-to-run" aria-label="Permalink to &quot;Specifying which tests to run {#specifying-which-tests-to-run}&quot;">​</a></h2><p>Pytest supports several ways to run and select tests from the command-line.</p><p><strong>Run tests in a module</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_mod.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_mod.py</span></span></code></pre></div><p><strong>Run tests in a directory</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">testing/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">testing/</span></span></code></pre></div><p><strong>Run tests by keyword expressions</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-k</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;MyClass and not method&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-k</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;MyClass and not method&#39;</span></span></code></pre></div><p>This will run tests which contain names that match the given string expression (case-insensitive), which can include Python operators that use filenames, class names and function names as variables. The example above will run T<code>estMyClass.test_something</code> but not <code>TestMyClass.test_method_simple</code>. Use <code>&quot;&quot;</code> instead of <code>&#39;&#39;</code> in expression when running this on Windows</p><p><strong>Run tests by node ids</strong></p><p>Each collected test is assigned a unique <code>nodeid</code> which consist of the module filename followed by specifiers like class names, function names and parameters from parametrization, separated by <code>::</code> characters.</p><p>To run a specific test within a module:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_mod.py::test_func</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_mod.py::test_func</span></span></code></pre></div><p>Another example specifying a test method in the command line:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_mod.py::TestClass::test_method</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_mod.py::TestClass::test_method</span></span></code></pre></div><p><strong>Run tests by marker expressions</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">slow</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">slow</span></span></code></pre></div><p>Will run all tests which are decorated with the <code>@pytest.mark.slow</code> decorator.</p><p>For more information see <a href="/python/pytest/how_to_guides/mark#how-to-mark-test-functions-with-attributes">marks</a>.</p><p><strong>Run tests from packages</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--pyargs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg.testing</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pyargs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg.testing</span></span></code></pre></div><p>This will import <code>pkg.testing</code> and use its filesystem location to find and run tests from.</p><h2 id="getting-help-on-version-option-names-environment-variables" tabindex="-1">Getting help on version, option names, environment variables <a class="header-anchor" href="#getting-help-on-version-option-names-environment-variables" aria-label="Permalink to &quot;Getting help on version, option names, environment variables {#getting-help-on-version-option-names-environment-variables}&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># shows where pytest was imported from</span></span>
<span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--fixtures</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># show available builtin function arguments</span></span>
<span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-h</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">--help</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># show help on command line and config file options</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># shows where pytest was imported from</span></span>
<span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--fixtures</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># show available builtin function arguments</span></span>
<span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-h</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">--help</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># show help on command line and config file options</span></span></code></pre></div><h2 id="profiling-test-execution-duration" tabindex="-1">Profiling test execution duration <a class="header-anchor" href="#profiling-test-execution-duration" aria-label="Permalink to &quot;Profiling test execution duration {#profiling-test-execution-duration}&quot;">​</a></h2><p><em>Changed in version 6.0.</em></p><p>To get a list of the slowest 10 test durations over 1.0s long:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--durations=10</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--durations-min=1.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--durations=10</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--durations-min=1.0</span></span></code></pre></div><p>By default, pytest will not show test durations that are too small (&lt;0.005s) unless <code>-vv</code> is passed on the command-line.</p><h2 id="managing-loading-of-plugins" tabindex="-1">Managing loading of plugins <a class="header-anchor" href="#managing-loading-of-plugins" aria-label="Permalink to &quot;Managing loading of plugins {#managing-loading-of-plugins}&quot;">​</a></h2><h3 id="early-loading-plugins" tabindex="-1">Early loading plugins <a class="header-anchor" href="#early-loading-plugins" aria-label="Permalink to &quot;Early loading plugins {#early-loading-plugins}&quot;">​</a></h3><p>You can early-load plugins (internal and external) explicitly in the command-line with the <code>-p</code> option:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mypluginmodule</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mypluginmodule</span></span></code></pre></div><p>The option receives a <code>name</code> parameter, which can be:</p><ul><li>A full module dotted name, for example <code>myproject.plugins</code>. This dotted name must be importable.</li><li>The entry-point name of a plugin. This is the name passed to <code>setuptools</code> when the plugin is registered. For example to early-load the <code>pytest-cov</code> plugin you can use:</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest_cov</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest_cov</span></span></code></pre></div><h3 id="disabling-plugins" tabindex="-1">Disabling plugins <a class="header-anchor" href="#disabling-plugins" aria-label="Permalink to &quot;Disabling plugins {#disabling-plugins}&quot;">​</a></h3><p>To disable loading specific plugins at invocation time, use the <code>-p</code> option together with the prefix <code>no</code>:.</p><p>Example: to disable loading the plugin <code>doctest</code>, which is responsible for executing doctest tests from text files, invoke pytest like this:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no:doctest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no:doctest</span></span></code></pre></div><h2 id="other-ways-of-calling-pytest" tabindex="-1">Other ways of calling pytest <a class="header-anchor" href="#other-ways-of-calling-pytest" aria-label="Permalink to &quot;Other ways of calling pytest {#other-ways-of-calling-pytest}&quot;">​</a></h2><h3 id="calling-pytest-through-python-m-pytest" tabindex="-1">Calling pytest through python -m pytest <a class="header-anchor" href="#calling-pytest-through-python-m-pytest" aria-label="Permalink to &quot;Calling pytest through python -m pytest {#calling-pytest-through-python-m-pytest}&quot;">​</a></h3><p>You can invoke testing through the Python interpreter from the command line:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> [...]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> [...]</span></span></code></pre></div><p>This is almost equivalent to invoking the command line script <code>pytest [...]</code> directly, except that calling via <code>python</code> will also add the current directory to <code>sys.path</code>.</p><h3 id="calling-pytest-from-python-code" tabindex="-1">Calling pytest from Python code <a class="header-anchor" href="#calling-pytest-from-python-code" aria-label="Permalink to &quot;Calling pytest from Python code {#calling-pytest-from-python-code}&quot;">​</a></h3><p>You can invoke <code>pytest</code> from Python code directly:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">retcode</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest.main</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">retcode</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest.main</span><span style="color:#24292E;">()</span></span></code></pre></div><p>this acts as if you would call “pytest” from the command line. It will not raise <code>SystemExit</code> but return the <code>exit code</code> instead. You can pass in options and arguments:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">retcode</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest.main</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&quot;-x&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;mytestdir&quot;</span><span style="color:#E1E4E8;">])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">retcode</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest.main</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&quot;-x&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;mytestdir&quot;</span><span style="color:#24292E;">])</span></span></code></pre></div><p>You can specify additional plugins to <code>pytest.main</code>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># content of myinvoke.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyPlugin</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pytest_sessionfinish</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;*** test run reporting finishing&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;__main__&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    sys.exit(pytest.main([</span><span style="color:#9ECBFF;">&quot;-qq&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#FFAB70;">plugins</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[MyPlugin()]))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># content of myinvoke.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyPlugin</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pytest_sessionfinish</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;*** test run reporting finishing&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;__main__&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    sys.exit(pytest.main([</span><span style="color:#032F62;">&quot;-qq&quot;</span><span style="color:#24292E;">], </span><span style="color:#E36209;">plugins</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[MyPlugin()]))</span></span></code></pre></div><p>Running it will show that <code>MyPlugin</code> was added and its hook was invoked:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myinvoke.py</span></span>
<span class="line"><span style="color:#F97583;">***</span><span style="color:#E1E4E8;"> test run reporting finishing</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myinvoke.py</span></span>
<span class="line"><span style="color:#D73A49;">***</span><span style="color:#24292E;"> test run reporting finishing</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Calling <code>pytest.main()</code> will result in importing your tests and any modules that they import. Due to the caching mechanism of python’s import system, making subsequent calls to <code>pytest.main()</code> from the same process will not reflect changes to those files between the calls. For this reason, making multiple calls to <code>pytest.main()</code> from the same process (in order to re-run tests, for example) is not recommended.</p></div>`,58),l=[t];function p(c,i,r,y,d,h){return a(),e("div",null,l)}const E=s(o,[["render",p]]);export{u as __pageData,E as default};