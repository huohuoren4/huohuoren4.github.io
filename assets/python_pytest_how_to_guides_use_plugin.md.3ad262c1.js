import{_ as e,o as t,c as s,Q as a}from"./chunks/framework.01af844e.js";const y=JSON.parse('{"title":"How to install and use plugins","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/how_to_guides/use_plugin.md","filePath":"python/pytest/how_to_guides/use_plugin.md","lastUpdated":1692720083000}'),n={name:"python/pytest/how_to_guides/use_plugin.md"},p=a(`<h1 id="how-to-install-and-use-plugins" tabindex="-1">How to install and use plugins <a class="header-anchor" href="#how-to-install-and-use-plugins" aria-label="Permalink to &quot;How to install and use plugins {#how-to-install-and-use-plugins}&quot;">​</a></h1><p>This section talks about installing and using third party plugins. For writing your own plugins, please refer to <a href="/python/pytest/how_to_guides/write_plugin#writing-plugins">Writing plugins</a>.</p><p>Installing a third party plugin can be easily done with <code>pip</code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest-NAME</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest-NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest-NAME</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest-NAME</span></span></code></pre></div><p>If a plugin is installed, <code>pytest</code> automatically finds and integrates it, there is no need to activate it.</p><p>Here is a little annotated list for some popular plugins:</p><ul><li><p><a href="https://pypi.org/project/pytest-django/" target="_blank" rel="noreferrer">pytest-django</a>: write tests for <a href="https://docs.djangoproject.com/" target="_blank" rel="noreferrer">django</a> apps, using pytest integration.</p></li><li><p><a href="https://pypi.org/project/pytest-twisted/" target="_blank" rel="noreferrer">pytest-twisted</a>: write tests for <a href="https://twistedmatrix.com/" target="_blank" rel="noreferrer">twisted</a> apps, starting a reactor and processing deferreds from test functions.</p></li><li><p><a href="https://pypi.org/project/pytest-cov/" target="_blank" rel="noreferrer">pytest-cov</a>: coverage reporting, compatible with distributed testing</p></li><li><p><a href="https://pypi.org/project/pytest-xdist/" target="_blank" rel="noreferrer">pytest-xdist</a>: to distribute tests to CPUs and remote hosts, to run in boxed mode which allows to survive segmentation faults, to run in looponfailing mode, automatically re-running failing tests on file changes.</p></li><li><p><a href="https://pypi.org/project/pytest-instafail/" target="_blank" rel="noreferrer">pytest-instafail</a>: to report failures while the test run is happening.</p></li><li><p><a href="https://pypi.org/project/pytest-bdd/" target="_blank" rel="noreferrer">pytest-bdd</a>: to write tests using behaviour-driven testing.</p></li><li><p><a href="https://pypi.org/project/pytest-timeout/" target="_blank" rel="noreferrer">pytest-timeout</a>: to timeout tests based on function marks or global definitions.</p></li><li><p><a href="https://pypi.org/project/pytest-pep8/" target="_blank" rel="noreferrer">pytest-pep8</a>: a <code>--pep8</code> option to enable PEP8 compliance checking.</p></li><li><p><a href="https://pypi.org/project/pytest-flakes/" target="_blank" rel="noreferrer">pytest-flakes</a>: check source code with pyflakes.</p></li><li><p><a href="https://pypi.org/project/allure-pytest/" target="_blank" rel="noreferrer">allure-pytest</a>: report test results via <a href="https://github.com/allure-framework/" target="_blank" rel="noreferrer">allure-framework</a>.</p></li></ul><p>To see a complete list of all plugins with their latest testing status against different pytest and Python versions, please visit <a href="/python/pytest/reference_guides/plugin_list#plugin-list">Plugin List</a>.</p><p>You may also discover more plugins through a <a href="https://pypi.org/search/?q=pytest-" target="_blank" rel="noreferrer">pytest- pypi.org search</a>.</p><h2 id="requiring-loading-plugins-in-a-test-module-or-conftest-file" tabindex="-1">Requiring/Loading plugins in a test module or conftest file <a class="header-anchor" href="#requiring-loading-plugins-in-a-test-module-or-conftest-file" aria-label="Permalink to &quot;Requiring/Loading plugins in a test module or conftest file {#requiring-loading-plugins-in-a-test-module-or-conftest-file}&quot;">​</a></h2><p>You can require plugins in a test module or a conftest file using <code>pytest_plugins</code>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pytest_plugins </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&quot;myapp.testsupport.myplugin&quot;</span><span style="color:#E1E4E8;">,)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pytest_plugins </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&quot;myapp.testsupport.myplugin&quot;</span><span style="color:#24292E;">,)</span></span></code></pre></div><p>When the test module or conftest plugin is loaded the specified plugins will be loaded as well.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Requiring plugins using a <code>pytest_plugins</code> variable in non-root <code>conftest.py</code> files is deprecated. See <a href="/python/pytest/how_to_guides/write_plugin#requiring-loading-plugins-in-a-test-module-or-conftest-file">full explanation</a> in the Writing plugins section.</p></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>The name <code>pytest_plugins</code> is reserved and should not be used as a name for a custom plugin module.</p></div><h2 id="finding-out-which-plugins-are-active" tabindex="-1">Finding out which plugins are active <a class="header-anchor" href="#finding-out-which-plugins-are-active" aria-label="Permalink to &quot;Finding out which plugins are active {#finding-out-which-plugins-are-active}&quot;">​</a></h2><p>If you want to find out which plugins are active in your environment you can type:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--trace-config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--trace-config</span></span></code></pre></div><p>and will get an extended test header which shows activated plugins and their names. It will also print local plugins aka <code>conftest.py</code> files when they are loaded.</p><h2 id="deactivating-unregistering-a-plugin-by-name" tabindex="-1">Deactivating / unregistering a plugin by name <a class="header-anchor" href="#deactivating-unregistering-a-plugin-by-name" aria-label="Permalink to &quot;Deactivating / unregistering a plugin by name {#deactivating-unregistering-a-plugin-by-name}&quot;">​</a></h2><p>You can prevent plugins from loading or unregister them:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no:NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no:NAME</span></span></code></pre></div><p>This means that any subsequent try to activate/load the named plugin will not work.</p><p>If you want to unconditionally disable a plugin for a project, you can add this option to your <code>pytest.ini</code> file:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[pytest]</span></span>
<span class="line"><span style="color:#F97583;">addopts</span><span style="color:#E1E4E8;"> = -p no:NAME</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[pytest]</span></span>
<span class="line"><span style="color:#D73A49;">addopts</span><span style="color:#24292E;"> = -p no:NAME</span></span></code></pre></div><p>Alternatively to disable it only in certain environments (for example in a CI server), you can set <code>PYTEST_ADDOPTS</code> environment variable to <code>-p no:name</code>.</p><p>See <a href="/python/pytest/how_to_guides/use_plugin#finding-out-which-plugins-are-active">Finding out which plugins are active</a> for how to obtain the name of a plugin.</p>`,27),o=[p];function i(l,r,c,d,u,g){return t(),s("div",null,o)}const f=e(n,[["render",i]]);export{y as __pageData,f as default};
