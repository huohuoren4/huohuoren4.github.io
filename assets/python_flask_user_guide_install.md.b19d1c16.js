import{_ as e,o as a,c as t,V as n}from"./chunks/framework.48c56699.js";const v=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/install.md","filePath":"python/flask/user_guide/install.md","lastUpdated":1691303202000}'),s={name:"python/flask/user_guide/install.md"},o=n(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="python-version" tabindex="-1">Python Version <a class="header-anchor" href="#python-version" aria-label="Permalink to &quot;Python Version&quot;">​</a></h2><p>We recommend using the latest version of Python. Flask supports Python 3.8 and newer.</p><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><p>These distributions will be installed automatically when installing Flask.</p><ul><li><p><a href="https://palletsprojects.com/p/werkzeug/" target="_blank" rel="noreferrer">Werkzeug</a> implements WSGI, the standard Python interface between applications and servers.</p></li><li><p><a href="https://palletsprojects.com/p/jinja/" target="_blank" rel="noreferrer">Jinja</a> is a template language that renders the pages your application serves.</p></li><li><p><a href="https://palletsprojects.com/p/markupsafe/" target="_blank" rel="noreferrer">MarkupSafe</a> comes with Jinja. It escapes untrusted input when rendering templates to avoid injection attacks.</p></li><li><p><a href="https://palletsprojects.com/p/itsdangerous/" target="_blank" rel="noreferrer">ItsDangerous</a> securely signs data to ensure its integrity. This is used to protect Flask’s session cookie.</p></li><li><p><a href="https://palletsprojects.com/p/click/" target="_blank" rel="noreferrer">Click</a> is a framework for writing command line applications. It provides the <code>flask</code> command and allows adding custom management commands.</p></li><li><p><a href="https://blinker.readthedocs.io/" target="_blank" rel="noreferrer">Blinker</a> provides support for <a href="https://flask.palletsprojects.com/en/2.3.x/signals/" target="_blank" rel="noreferrer">Signals</a>.</p></li></ul><h3 id="optional-dependencies" tabindex="-1">Optional dependencies <a class="header-anchor" href="#optional-dependencies" aria-label="Permalink to &quot;Optional dependencies&quot;">​</a></h3><p>These distributions will not be installed automatically. Flask will detect and use them if you install them.</p><ul><li><p><a href="https://github.com/theskumar/python-dotenv#readme" target="_blank" rel="noreferrer">python-dotenv</a> enables support for <a href="https://flask.palletsprojects.com/en/2.3.x/cli/#dotenv" target="_blank" rel="noreferrer">Environment Variables From dotenv</a> when running <code>flask</code> commands.</p></li><li><p><a href="https://pythonhosted.org/watchdog/" target="_blank" rel="noreferrer">Watchdog</a> provides a faster, more efficient reloader for the development server.</p></li></ul><h3 id="greenlet" tabindex="-1">greenlet <a class="header-anchor" href="#greenlet" aria-label="Permalink to &quot;greenlet&quot;">​</a></h3><p>You may choose to use gevent or eventlet with your application. In this case, greenlet&gt;=1.0 is required. When using PyPy, PyPy&gt;=7.3.7 is required.</p><p>These are not minimum supported versions, they only indicate the first versions that added necessary features. You should use the latest versions of each.</p><h2 id="virtual-environments" tabindex="-1">Virtual environments <a class="header-anchor" href="#virtual-environments" aria-label="Permalink to &quot;Virtual environments&quot;">​</a></h2><p>Use a virtual environment to manage the dependencies for your project, both in development and in production.</p><p>What problem does a virtual environment solve? The more Python projects you have, the more likely it is that you need to work with different versions of Python libraries, or even Python itself. Newer versions of libraries for one project can break compatibility in another project.</p><p>Virtual environments are independent groups of Python libraries, one for each project. Packages installed for one project will not affect other projects or the operating system’s packages.</p><p>Python comes bundled with the <a href="https://docs.python.org/3/library/venv.html#module-venv" target="_blank" rel="noreferrer">venv</a> module to create virtual environments.</p><h3 id="create-an-environment" tabindex="-1">Create an environment <a class="header-anchor" href="#create-an-environment" aria-label="Permalink to &quot;Create an environment&quot;">​</a></h3><p>Create a project folder and a <code>.venv</code> folder within:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-9Zvpe" id="tab-PsNyYOH" checked="checked"><label for="tab-PsNyYOH">linux</label><input type="radio" name="group-9Zvpe" id="tab-08WtFIi"><label for="tab-08WtFIi">windows</label></div><div class="blocks"><div class="language-shell active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myproject</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myproject</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">venv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.venv</span></span></code></pre></div><div class="language-bat"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">mkdir</span><span style="color:#A6ACCD;"> myproject</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">cd</span><span style="color:#A6ACCD;"> myproject</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> py </span><span style="color:#F78C6C;">-3</span><span style="color:#A6ACCD;"> -m venv .venv</span></span></code></pre></div></div></div><h3 id="activate-the-environment" tabindex="-1">Activate the environment <a class="header-anchor" href="#activate-the-environment" aria-label="Permalink to &quot;Activate the environment&quot;">​</a></h3><p>Before you work on your project, activate the corresponding environment:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-ivEM8" id="tab-Zofa2Vb" checked="checked"><label for="tab-Zofa2Vb">macOS/LinuxWindows</label><input type="radio" name="group-ivEM8" id="tab-acWjnjB"><label for="tab-acWjnjB">Windows</label></div><div class="blocks"><div class="language-shell active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.venv/bin/activate</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> .venv\\Scripts\\activate</span></span></code></pre></div></div></div><p>Your shell prompt will change to show the name of the activated environment.</p><h2 id="install-flask" tabindex="-1">Install Flask <a class="header-anchor" href="#install-flask" aria-label="Permalink to &quot;Install Flask&quot;">​</a></h2><p>Within the activated environment, use the following command to install Flask:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Flask</span></span></code></pre></div><p>Flask is now installed. Check out the <a href="https://flask.palletsprojects.com/en/2.3.x/quickstart/" target="_blank" rel="noreferrer">Quickstart</a> or go to the <a href="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noreferrer">Documentation Overview</a>.</p>`,28),l=[o];function r(i,p,c,d,h,u){return a(),t("div",null,l)}const y=e(s,[["render",r]]);export{v as __pageData,y as default};
