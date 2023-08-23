import{_ as e,o,c as s,X as t}from"./chunks/framework.b5656a4e.js";const u=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/reference_guides/configuration.md","filePath":"python/pytest/reference_guides/configuration.md","lastUpdated":1692807718000}'),n={name:"python/pytest/reference_guides/configuration.md"},a=t(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration {#configuration}&quot;">​</a></h1><h2 id="command-line-options-and-configuration-file-settings" tabindex="-1">Command line options and configuration file settings <a class="header-anchor" href="#command-line-options-and-configuration-file-settings" aria-label="Permalink to &quot;Command line options and configuration file settings {#command-line-options-and-configuration-file-settings}&quot;">​</a></h2><p>You can get help on command line options and values in INI-style configurations files by using the general help option:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># prints options _and_ config file settings</span></span></code></pre></div><p>This will display command line and configuration file settings which were registered by installed plugins.</p><h2 id="configuration-file-formats" tabindex="-1">Configuration file formats <a class="header-anchor" href="#configuration-file-formats" aria-label="Permalink to &quot;Configuration file formats {#configuration-file-formats}&quot;">​</a></h2><p>Many <a href="/python/pytest/reference_guides/api_reference/config_options#configuration-options">pytest settings</a> can be set in a configuration file, which by convention resides in the root directory of your repository.</p><p>A quick example of the configuration files supported by pytest:</p><h3 id="pytest-ini" tabindex="-1">pytest.ini <a class="header-anchor" href="#pytest-ini" aria-label="Permalink to &quot;pytest.ini {#pytest-ini}&quot;">​</a></h3><p><code>pytest.ini</code> files take precedence over other files, even when empty.</p><p>Alternatively, the hidden version <code>.pytest.ini</code> can be used.</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># pytest.ini or .pytest.ini</span></span>
<span class="line"><span style="color:#89DDFF;">[pytest]</span></span>
<span class="line"><span style="color:#F07178;">minversion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 6.0</span></span>
<span class="line"><span style="color:#F07178;">addopts</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> -ra -q</span></span>
<span class="line"><span style="color:#F07178;">testpaths</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">    tests</span></span>
<span class="line"><span style="color:#A6ACCD;">    integration</span></span></code></pre></div><h3 id="pyproject-toml" tabindex="-1">pyproject.toml <a class="header-anchor" href="#pyproject-toml" aria-label="Permalink to &quot;pyproject.toml {#pyproject-toml}&quot;">​</a></h3><p><em>New in version 6.0.</em></p><p><code>pyproject.toml</code> are considered for configuration when they contain a <code>tool.pytest.ini_options</code> table.</p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># pyproject.toml</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">tool</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">ini_options</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">minversion </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">addopts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-ra -q</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">testpaths </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tests</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">integration</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>One might wonder why <code>[tool.pytest.ini_options]</code> instead of <code>[tool.pytest]</code> as is the case with other tools.</p><p>The reason is that the pytest team intends to fully utilize the rich TOML data format for configuration in the future, reserving the <code>[tool.pytest]</code> table for that. The <code>ini_options</code> table is being used, for now, as a bridge between the existing <code>.ini</code> configuration system and the future configuration format.</p></div><h3 id="tox-ini" tabindex="-1">tox.ini <a class="header-anchor" href="#tox-ini" aria-label="Permalink to &quot;tox.ini {#tox-ini}&quot;">​</a></h3><p><code>tox.ini</code> files are the configuration files of the <a href="https://tox.readthedocs.io/" target="_blank" rel="noreferrer">tox</a> project, and can also be used to hold pytest configuration if they have a <code>[pytest]</code> section.</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># tox.ini</span></span>
<span class="line"><span style="color:#89DDFF;">[pytest]</span></span>
<span class="line"><span style="color:#F07178;">minversion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 6.0</span></span>
<span class="line"><span style="color:#F07178;">addopts</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> -ra -q</span></span>
<span class="line"><span style="color:#F07178;">testpaths</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">    tests</span></span>
<span class="line"><span style="color:#A6ACCD;">    integration</span></span></code></pre></div><h3 id="setup-cfg" tabindex="-1">setup.cfg <a class="header-anchor" href="#setup-cfg" aria-label="Permalink to &quot;setup.cfg {#setup-cfg}&quot;">​</a></h3><p><code>setup.cfg</code> files are general purpose configuration files, used originally by distutils, and can also be used to hold pytest configuration if they have a <code>[tool:pytest]</code> section.</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># setup.cfg</span></span>
<span class="line"><span style="color:#89DDFF;">[tool:pytest]</span></span>
<span class="line"><span style="color:#F07178;">minversion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 6.0</span></span>
<span class="line"><span style="color:#F07178;">addopts</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> -ra -q</span></span>
<span class="line"><span style="color:#F07178;">testpaths</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">    tests</span></span>
<span class="line"><span style="color:#A6ACCD;">    integration</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Usage of <code>setup.cfg</code> is not recommended unless for very simple use cases. <code>.cfg</code> files use a different parser than <code>pytest.ini</code> and <code>tox.ini</code> which might cause hard to track down problems. When possible, it is recommended to use the latter files, or <code>pyproject.toml</code>, to hold your pytest configuration.</p></div><h2 id="initialization-determining-rootdir-and-configfile" tabindex="-1">Initialization: determining rootdir and configfile <a class="header-anchor" href="#initialization-determining-rootdir-and-configfile" aria-label="Permalink to &quot;Initialization: determining rootdir and configfile {#initialization-determining-rootdir-and-configfile}&quot;">​</a></h2><p>pytest determines a <code>rootdir</code> for each test run which depends on the command line arguments (specified test files, paths) and on the existence of configuration files. The determined <code>rootdir</code> and <code>configfile</code> are printed as part of the pytest header during startup.</p><p>Here’s a summary what <code>pytest</code> uses <code>rootdir</code> for:</p><ul><li><p>Construct nodeids during collection; each test is assigned a unique nodeid which is rooted at the <code>rootdir</code> and takes into account the full path, class name, function name and parametrization (if any).</p></li><li><p>Is used by plugins as a stable location to store project/test run specific information; for example, the internal cache plugin creates a<code> .pytest_cache</code> subdirectory in <code>rootdir</code> to store its cross-test run state.</p></li></ul><p><code>rootdir</code> is NOT used to modify <code>sys.path/PYTHONPATH</code> or influence how modules are imported. See <a href="/python/pytest/explanation/import_mechanism#pytest-import-mechanisms-and-sys-path-pythonpath">pytest import mechanisms and sys.path/PYTHONPATH</a> for more details.</p><p>The <code>--rootdir=path</code> command-line option can be used to force a specific directory. Note that contrary to other command-line options, <code>--rootdir</code> cannot be used with <code>addopts</code> inside <code>pytest.ini</code> because the <code>rootdir</code> is used to find <code>pytest.ini</code> already.</p><h3 id="finding-the-rootdir" tabindex="-1">Finding the rootdir <a class="header-anchor" href="#finding-the-rootdir" aria-label="Permalink to &quot;Finding the rootdir {#finding-the-rootdir}&quot;">​</a></h3><p>Here is the algorithm which finds the rootdir from <code>args</code>:</p><ul><li><p>If <code>-c</code> is passed in the command-line, use that as configuration file, and its directory as <code>rootdir</code>.</p></li><li><p>Determine the common ancestor directory for the specified <code>args</code> that are recognised as paths that exist in the file system. If no such paths are found, the common ancestor directory is set to the current working directory.</p></li><li><p>Look for <code>pytest.ini</code>, <code>pyproject.toml</code>, <code>tox.ini</code>, and <code>setup.cfg</code> files in the ancestor directory and upwards. If one is matched, it becomes the <code>configfile</code> and its directory becomes the <code>rootdir</code>.</p></li><li><p>If no configuration file was found, look for <code>setup.py</code> upwards from the common ancestor directory to determine the <code>rootdir</code>.</p></li><li><p>If no <code>setup.py</code> was found, look for <code>pytest.ini</code>, <code>pyproject.toml</code>, <code>tox.ini</code>, and <code>setup.cfg</code> in each of the specified <code>args</code> and upwards. If one is matched, it becomes the <code>configfile</code> and its directory becomes the <code>rootdir</code>.</p></li><li><p>If no <code>configfile</code> was found and no configuration argument is passed, use the already determined common ancestor as root directory. This allows the use of pytest in structures that are not part of a package and don’t have any particular configuration file.</p></li></ul><p>If no <code>args</code> are given, pytest collects test below the current working directory and also starts determining the <code>rootdir</code> from there.</p><p>Files will only be matched for configuration if:</p><ul><li><p><code>pytest.ini</code>: will always match and take precedence, even if empty.</p></li><li><p><code>pyproject.toml</code>: contains a <code>[tool.pytest.ini_options]</code> table.</p></li><li><p><code>tox.ini</code>: contains a <code>[pytest]</code> section.</p></li><li><p><code>setup.cfg</code>: contains a <code>[tool:pytest]</code> section.</p></li></ul><p>The files are considered in the order above. Options from multiple <code>configfiles</code> candidates are never merged - the first match wins.</p><p>The <code>Config</code> object (accessible via hooks or through the <code>pytestconfig</code> fixture) will subsequently carry these attributes:</p><ul><li><p><code>config.rootpath</code>: the determined root directory, guaranteed to exist.</p></li><li><p><code>config.inipath</code>: the determined <code>configfile</code>, may be <code>None</code> (it is named <code>inipath</code> for historical reasons).</p></li></ul><p><em>New in version 6.1</em>: The <code>config.rootpath</code> and <code>config.inipath</code> properties. They are <code>pathlib.Path</code> versions of the older <code>config.rootdir</code> and <code>config.inifile</code>, which have type <code>py.path.local</code>, and still exist for backward compatibility.</p><p>The <code>rootdir</code> is used as a reference directory for constructing test addresses (“nodeids”) and can be used also by plugins for storing per-testrun information.</p><p>Example:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pytest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path/to/testdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path/other/</span></span></code></pre></div><p>will determine the common ancestor as <code>path</code> and then check for configuration files as follows:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># first look for pytest.ini files</span></span>
<span class="line"><span style="color:#FFCB6B;">path/pytest.ini</span></span>
<span class="line"><span style="color:#FFCB6B;">path/pyproject.toml</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># must contain a [tool.pytest.ini_options] table to match</span></span>
<span class="line"><span style="color:#FFCB6B;">path/tox.ini</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># must contain [pytest] section to match</span></span>
<span class="line"><span style="color:#FFCB6B;">path/setup.cfg</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># must contain [tool:pytest] section to match</span></span>
<span class="line"><span style="color:#FFCB6B;">pytest.ini</span></span>
<span class="line"><span style="color:#82AAFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># all the way up to the root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># now look for setup.py</span></span>
<span class="line"><span style="color:#FFCB6B;">path/setup.py</span></span>
<span class="line"><span style="color:#FFCB6B;">setup.py</span></span>
<span class="line"><span style="color:#82AAFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># all the way up to the root</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Custom pytest plugin commandline arguments may include a path, as in <code>pytest --log-output ../../test.log args</code>. Then <code>args</code> is mandatory, otherwise pytest uses the folder of test.log for rootdir determination (see also <a href="https://github.com/pytest-dev/pytest/issues/1435" target="_blank" rel="noreferrer">issue #1435</a>). A dot <code>.</code> for referencing to the current working directory is also possible.</p></div><h2 id="builtin-configuration-file-options" tabindex="-1">Builtin configuration file options <a class="header-anchor" href="#builtin-configuration-file-options" aria-label="Permalink to &quot;Builtin configuration file options {#builtin-configuration-file-options}&quot;">​</a></h2><p>For the full list of options consult the <a href="/python/pytest/reference_guides/api_reference/config_options#configuration-options">reference documentation</a>.</p><h2 id="syntax-highlighting-theme-customization" tabindex="-1">Syntax highlighting theme customization <a class="header-anchor" href="#syntax-highlighting-theme-customization" aria-label="Permalink to &quot;Syntax highlighting theme customization {#syntax-highlighting-theme-customization}&quot;">​</a></h2><p>The syntax highlighting themes used by pytest can be customized using two environment variables:</p><ul><li><p><code>PYTEST_THEME</code> sets a <a href="https://pygments.org/docs/styles/" target="_blank" rel="noreferrer">pygment style</a> to use.</p></li><li><p><code>PYTEST_THEME_MODE</code> sets this style to light or dark.</p></li></ul>`,51),i=[a];function l(p,c,r,d,h,y){return o(),s("div",null,i)}const g=e(n,[["render",l]]);export{u as __pageData,g as default};
