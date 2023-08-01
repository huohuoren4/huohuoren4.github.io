import{_ as s,o as n,c as e,V as a}from"./chunks/framework.d3b95951.js";const h=JSON.parse('{"title":"How to run doctests","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/how_to_guides/doctest.md","filePath":"python/pytest/how_to_guides/doctest.md"}'),t={name:"python/pytest/how_to_guides/doctest.md"},o=a(`<h1 id="how-to-run-doctests" tabindex="-1">How to run doctests <a class="header-anchor" href="#how-to-run-doctests" aria-label="Permalink to &quot;How to run doctests&quot;">​</a></h1><p>By default, all files matching the <code>test*.txt</code> pattern will be run through the python standard <code>doctest</code> module. You can change the pattern by issuing:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-glob=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.rst</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>on the command line. <code>--doctest-glob</code> can be given multiple times in the command-line.</p><p>If you then have a text file like this:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># content of test_example.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doctest</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#FFCB6B;">x</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span></span></code></pre></div><p>then you can just invoke <code>pytest</code> directly:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pytest</span></span>
<span class="line"><span style="color:#A6ACCD;">=========================== </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">session</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starts</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">============================</span></span>
<span class="line"><span style="color:#FFCB6B;">platform</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Python</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#C3E88D;">.x.y,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pytest-7.x.y,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pluggy-1.x.y</span></span>
<span class="line"><span style="color:#FFCB6B;">rootdir:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/sweet/project</span></span>
<span class="line"><span style="color:#FFCB6B;">collected</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">test_example.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">                                                   [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">============================ </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#C3E88D;">s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=============================</span></span></code></pre></div><p>By default, pytest will collect <code>test*.txt</code> files looking for doctest directives, but you can pass additional globs using the <code>--doctest-glob</code> option (multi-allowed).</p><p>In addition to text files, you can also execute doctests directly from docstrings of your classes and functions, including from test modules:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># content of mymodule.py</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">something</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">a doctest in a docstring</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&gt;&gt;&gt; </span><span style="color:#676E95;font-style:italic;">something()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    42</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-modules</span></span>
<span class="line"><span style="color:#A6ACCD;">=========================== </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">session</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starts</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">============================</span></span>
<span class="line"><span style="color:#FFCB6B;">platform</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Python</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#C3E88D;">.x.y,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pytest-7.x.y,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pluggy-1.x.y</span></span>
<span class="line"><span style="color:#FFCB6B;">rootdir:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/sweet/project</span></span>
<span class="line"><span style="color:#FFCB6B;">collected</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mymodule.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">                                                        [ </span><span style="color:#F78C6C;">50</span><span style="color:#C3E88D;">%]</span></span>
<span class="line"><span style="color:#FFCB6B;">test_example.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">                                                   [100%]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">============================ </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#C3E88D;">s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=============================</span></span></code></pre></div><p>You can make these changes permanent in your project by putting them into a pytest.ini file like this:</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># content of pytest.ini</span></span>
<span class="line"><span style="color:#89DDFF;">[pytest]</span></span>
<span class="line"><span style="color:#F07178;">addopts</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> --doctest-modules</span></span></code></pre></div><h2 id="encoding" tabindex="-1">Encoding <a class="header-anchor" href="#encoding" aria-label="Permalink to &quot;Encoding&quot;">​</a></h2><p>The default encoding is <code>UTF-8</code>, but you can specify the encoding that will be used for those doctest files using the <code>doctest_encoding</code> ini option:</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># content of pytest.ini</span></span>
<span class="line"><span style="color:#89DDFF;">[pytest]</span></span>
<span class="line"><span style="color:#F07178;">doctest_encoding</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> latin1</span></span></code></pre></div><h2 id="using-doctest-options" tabindex="-1">Using &#39;doctest&#39; options <a class="header-anchor" href="#using-doctest-options" aria-label="Permalink to &quot;Using &#39;doctest&#39; options&quot;">​</a></h2><p>Python’s standard <code>doctest</code> module provides some options to configure the strictness of doctest tests. In pytest, you can enable those flags using the configuration file.</p><p>For example, to make pytest ignore trailing whitespaces and ignore lengthy exception stack traces you can just write:</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[pytest]</span></span>
<span class="line"><span style="color:#F07178;">doctest_optionflags</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> NORMALIZE_WHITESPACE IGNORE_EXCEPTION_DETAIL</span></span></code></pre></div><p>Alternatively, options can be enabled by an inline comment in the doc test itself:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#82AAFF;">something_that_raises</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  # doctest: +IGNORE_EXCEPTION_DETAIL</span></span>
<span class="line"><span style="color:#A6ACCD;">Traceback </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">most</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">recent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">call</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">last</span><span style="color:#89DDFF;">)</span><span style="color:#82AAFF;">:</span></span>
<span class="line"><span style="color:#FFCB6B;">ValueError:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span></code></pre></div><p>pytest also introduces new options:</p><ul><li><p><code>ALLOW_UNICODE</code>: when enabled, the u prefix is stripped from unicode strings in expected doctest output. This allows doctests to run in Python 2 and Python 3 unchanged.</p></li><li><p><code>ALLOW_BYTES</code>: similarly, the b prefix is stripped from byte strings in expected doctest output.</p></li><li><p><code>NUMBER</code>: when enabled, floating-point numbers only need to match as far as the precision you have written in the expected doctest output. The numbers are compared using <a href="/python/pytest/reference_guides/api_reference#pytest-approx">pytest.approx()</a> with relative tolerance equal to the precision. For example, the following output would only need to match to 2 decimal places when comparing <code>3.14</code> to <code>pytest.approx(math.pi, rel=10**-2)</code>:</p></li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">math.pi</span></span>
<span class="line"><span style="color:#FFCB6B;">3.14</span></span></code></pre></div><p>If you wrote <code>3.1416</code> then the actual output would need to match to approximately 4 decimal places; and so on.</p><p>This avoids false positives caused by limited floating-point precision, like this:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Expected:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">0.233</span></span>
<span class="line"><span style="color:#FFCB6B;">Got:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">0.23300000000000001</span></span></code></pre></div><p><code>NUMBER</code> also supports lists of floating-point numbers – in fact, it matches floating-point numbers appearing anywhere in the output, even inside a string! This means that it may not be appropriate to enable globally in <code>doctest_optionflags</code> in your configuration file.</p><p><em>New in version 5.1.</em></p><h2 id="continue-on-failure" tabindex="-1">Continue on failure <a class="header-anchor" href="#continue-on-failure" aria-label="Permalink to &quot;Continue on failure&quot;">​</a></h2><p>By default, pytest would report only the first failure for a given doctest. If you want to continue the test even when you have failures, do:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-continue-on-failure</span></span></code></pre></div><h2 id="output-format" tabindex="-1">Output format <a class="header-anchor" href="#output-format" aria-label="Permalink to &quot;Output format&quot;">​</a></h2><p>You can change the diff output format on failure for your doctests by using one of standard doctest modules format in options (see <code>doctest.REPORT_UDIFF</code>, <code>doctest.REPORT_CDIFF</code>, <code>doctest.REPORT_NDIFF</code>, <code>doctest.REPORT_ONLY_FIRST_FAILURE</code>):</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-report</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-report</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">udiff</span></span>
<span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-report</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cdiff</span></span>
<span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-report</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ndiff</span></span>
<span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-modules</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--doctest-report</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">only_first_failure</span></span></code></pre></div><h2 id="pytest-specific-features" tabindex="-1">pytest-specific features <a class="header-anchor" href="#pytest-specific-features" aria-label="Permalink to &quot;pytest-specific features&quot;">​</a></h2><p>Some features are provided to make writing doctests easier or with better integration with your existing test suite. Keep in mind however that by using those features you will make your doctests incompatible with the standard <code>doctests</code> module.</p><h3 id="using-fixtures" tabindex="-1">Using fixtures <a class="header-anchor" href="#using-fixtures" aria-label="Permalink to &quot;Using fixtures&quot;">​</a></h3><p>It is possible to use fixtures using the <code>getfixture</code> helper:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># content of example.rst</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#FFCB6B;">tmp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">getfixture</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">&#39;tmp_path&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt;</span></span></code></pre></div><p>Note that the fixture needs to be defined in a place visible by pytest, for example, a <code>conftest.py</code> file or plugin; normal python files containing docstrings are not normally scanned for fixtures unless explicitly configured by <code>python_files</code>.</p><p>Also, the <a href="/python/pytest/how_to_guides/fixture#use-fixtures-in-classes-and-modules-with-usefixtures">usefixtures</a> mark and fixtures marked as <a href="/python/pytest/how_to_guides/fixture#autouse-fixtures-fixtures-you-don-t-have-to-request">autouse</a> are supported when executing text doctest files.</p><h3 id="doctest-namespace-fixture" tabindex="-1">&#39;doctest_namespace&#39; fixture <a class="header-anchor" href="#doctest-namespace-fixture" aria-label="Permalink to &quot;&#39;doctest_namespace&#39; fixture&quot;">​</a></h3><p>The <code>doctest_namespace</code> fixture can be used to inject items into the namespace in which your doctests run. It is intended to be used within your own fixtures to provide the tests that use them with context.</p><p><code>doctest_namespace</code> is a standard <code>dict</code> object into which you place the objects you want to appear in the doctest namespace:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># content of conftest.py</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> numpy</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">autouse</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_np</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">doctest_namespace</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    doctest_namespace</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">np</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> numpy</span></span>
<span class="line"><span style="color:#A6ACCD;">which can then be used </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> your doctests directly</span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># content of numpy.py</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">arange</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&gt;&gt;&gt; </span><span style="color:#676E95;font-style:italic;">a = np.arange(10)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&gt;&gt;&gt; </span><span style="color:#676E95;font-style:italic;">len(a)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span></code></pre></div><p>Note that like the normal <code>conftest.py</code>, the fixtures are discovered in the directory tree conftest is in. Meaning that if you put your doctest with your source code, the relevant conftest.py needs to be in the same directory tree. Fixtures will not be discovered in a sibling directory tree!</p><h3 id="skipping-tests" tabindex="-1">Skipping tests <a class="header-anchor" href="#skipping-tests" aria-label="Permalink to &quot;Skipping tests&quot;">​</a></h3><p>For the same reasons one might want to skip normal tests, it is also possible to skip tests inside doctests.</p><p>To skip a single check inside a doctest you can use the standard <code>doctest.SKIP</code> directive:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_random</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&gt;&gt;&gt; </span><span style="color:#676E95;font-style:italic;">random.random()  # doctest: +SKIP</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    0.156231223</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&gt;&gt;&gt; </span><span style="color:#676E95;font-style:italic;">1 + 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span></code></pre></div><p>This will skip the first check, but not the second.</p><p>pytest also allows using the standard pytest functions <a href="/python/pytest/reference_guides/api_reference#pytest-skip">pytest.skip()</a> and <a href="/python/pytest/reference_guides/api_reference#pytest-xfail">pytest.xfail()</a> inside doctests, which might be useful because you can then skip/xfail tests based on external conditions:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#FFCB6B;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sys,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pytest</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; i</span><span style="color:#FFCB6B;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sys.platform.startswith</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">&#39;win&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">:</span></span>
<span class="line"><span style="color:#82AAFF;">...</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">pytest.skip</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">&#39;this doctest does not work on Windows&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#FFCB6B;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fcntl</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; </span><span style="color:#82AAFF;">...</span></span></code></pre></div><p>However using those functions is discouraged because it reduces the readability of the docstring.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p><a href="/python/pytest/reference_guides/api_reference#pytest-skip">pytest.skip()</a> and <a href="/python/pytest/reference_guides/api_reference#pytest-xfail">pytest.xfail()</a> behave differently depending if the doctests are in a Python file (in docstrings) or a text file containing doctests intermingled with text:</p><ul><li><p>Python modules (docstrings): the functions only act in that specific docstring, letting the other docstrings in the same module execute as normal.</p></li><li><p>Text files: the functions will skip/xfail the checks for the rest of the entire file.</p></li></ul></div><h2 id="alternatives" tabindex="-1">Alternatives <a class="header-anchor" href="#alternatives" aria-label="Permalink to &quot;Alternatives&quot;">​</a></h2><p>While the built-in pytest support provides a good set of functionalities for using doctests, if you use them extensively you might be interested in those external packages which add many more features, and include pytest integration:</p><ul><li><p><code>pytest-doctestplus</code>: provides advanced doctest support and enables the testing of reStructuredText (“.rst”) files.</p></li><li><p><code>Sybil</code>: provides a way to test examples in your documentation by parsing them from the documentation source and evaluating the parsed examples as part of your normal test run.</p></li></ul>`,61),l=[o];function p(c,i,r,y,d,C){return n(),e("div",null,l)}const D=s(t,[["render",p]]);export{h as __pageData,D as default};
