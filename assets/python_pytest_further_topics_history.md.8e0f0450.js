import{_ as e,o as t,c as a,X as r}from"./chunks/framework.6e839c56.js";const u=JSON.parse('{"title":"History","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/further_topics/history.md","filePath":"python/pytest/further_topics/history.md","lastUpdated":1692807718000}'),o={name:"python/pytest/further_topics/history.md"},s=r('<h1 id="history" tabindex="-1">History <a class="header-anchor" href="#history" aria-label="Permalink to &quot;History {#history}&quot;">​</a></h1><p>pytest has a long and interesting history. The <a href="https://github.com/pytest-dev/pytest/commit/5992a8ef21424d7571305a8d7e2a3431ee7e1e23" target="_blank" rel="noreferrer">first commit</a> in this repository is from January 2007, and even that commit alone already tells a lot: The repository originally was from the py library (later split off to pytest), and it originally was a SVN revision, migrated to Mercurial, and finally migrated to git.</p><p>However, the commit says “create the new development trunk” and is already quite big: <code>435 files changed, 58640 insertions(+)</code>. This is because pytest originally was born as part of <a href="https://www.pypy.org/" target="_blank" rel="noreferrer">PyPy</a>, to make it easier to write tests for it. Here’s how it evolved from there to its own project:</p><ul><li><p>Late 2002 / early 2003, <a href="https://morepypy.blogspot.com/2018/09/the-first-15-years-of-pypy.html" target="_blank" rel="noreferrer">PyPy was born</a>.</p></li><li><p>Like that blog post mentioned, from very early on, there was a big focus on testing. There were various <code>testsupport</code> files on top of unittest.py, and as early as June 2003, Holger Krekel (<a href="https://github.com/hpk42" target="_blank" rel="noreferrer">@hpk42</a>) <a href="https://mail.python.org/pipermail/pypy-dev/2003-June/000787.html" target="_blank" rel="noreferrer">refactored</a> its test framework to clean things up (<code>pypy.tool.test</code>, but still on top of <code>unittest.py</code>, with nothing pytest-like yet).</p></li><li><p>In December 2003, there was <a href="https://foss.heptapod.net/pypy/pypy/-/commit/02752373e1b29d89c6bb0a97e5f940caa22bdd63" target="_blank" rel="noreferrer">another iteration</a> at improving their testing situation, by Stefan Schwarzer, called <code>pypy.tool.newtest</code>.</p></li><li><p>However, it didn’t seem to be around for long, as around June/July 2004, efforts started on a thing called <code>utest</code>, offering plain assertions. This seems like the start of something pytest-like, but unfortunately, it’s unclear where the test runner’s code was at the time. The closest thing still around is <a href="https://foss.heptapod.net/pypy/pypy/-/commit/0735f9ed287ec20950a7dd0a16fc10810d4f6847" target="_blank" rel="noreferrer">this file</a>, but that doesn’t seem like a complete test runner at all. What can be seen is that there were <a href="https://foss.heptapod.net/pypy/pypy/-/commits/branch/default?utf8=%E2%9C%93&amp;search=utest" target="_blank" rel="noreferrer">various efforts</a> by Laura Creighton and Samuele Pedroni (<a href="https://github.com/pedronis" target="_blank" rel="noreferrer">@pedronis</a>) at automatically converting existing tests to the new <code>utest</code> framework.</p></li><li><p>Around the same time, for Europython 2004, @hpk42 <a href="http://web.archive.org/web/20041020215353/http://codespeak.net/svn/user/hpk/talks/std-talk.txt" target="_blank" rel="noreferrer">started a project</a> originally called “std”, intended to be a “complementary standard library” - already laying out the principles behind what later became pytest:</p><ul><li><p>current “batteries included” are very useful, but</p><ul><li><p>some of them are written in a pretty much java-like style, especially the unittest-framework</p></li><li><p>[…]</p></li><li><p>the best API is one that doesn’t exist</p></li></ul></li><li><p>[…]</p></li><li><p>a testing package should require as few boilerplate code as possible and offer much flexibility</p></li><li><p>it should provide premium quality tracebacks and debugging aid</p></li><li><p>[…]</p></li><li><p>first of all … forget about limited “assertXYZ APIs” and use the real thing, e.g.:</p></li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">assert</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> y</span></span></code></pre></div><ul><li><p>this works with plain python but you get unhelpful “assertion failed” errors with no information</p></li><li><p>std.utest (magic!) actually reinterprets the assertion expression and offers detailed information about underlying values</p></li></ul></li><li><p>In September 2004, the <code>py-dev</code> mailinglist gets born, which is now <code>pytest-dev</code>, but thankfully with all the original archives still intact.</p></li><li><p>Around September/October 2004, the <code>std</code> project <a href="https://mail.python.org/pipermail/pypy-dev/2004-September/001565.html" target="_blank" rel="noreferrer">was renamed</a> to <code>py</code> and <code>std.utest</code> became <code>py.test</code>. This is also the first time the <a href="https://foss.heptapod.net/pypy/pypy/-/commit/42cf50c412026028e20acd23d518bd92e623ac11" target="_blank" rel="noreferrer">entire source code</a>, seems to be available, with much of the API still being around today:</p><ul><li><p><code>py.path.local</code>, which is being phased out of pytest (in favour of pathlib) some 16-17 years later</p></li><li><p>The idea of the collection tree, including <code>Collector</code>, <code>FSCollector</code>, <code>Directory</code>, <code>PyCollector</code>, <code>Module</code>, <code>Class</code></p></li><li><p>Arguments like <code>-x</code> / <code>--exitfirst</code>, <code>-l</code> / <code>--showlocals</code>, <code>--fulltrace</code>, <code>--pdb</code>, <code>-S</code> / <code>--nocapture</code> (<code>-s</code> / <code>--capture=off</code> today), <code>--collectonly</code> (<code>--collect-only</code> today)</p></li></ul></li><li><p>In the same month, the py library <a href="https://foss.heptapod.net/pypy/pypy/-/commit/6bdafe9203ad92eb259270b267189141c53bce33" target="_blank" rel="noreferrer">gets split off</a> from <code>PyPy</code></p></li><li><p>It seemed to get rather quiet for a while, and little seemed to happen between October 2004 (removing py from PyPy) and January 2007 (first commit in the now-pytest repository). However, there were various discussions about features/ideas on the mailinglist, and <a href="https://pypi.org/project/py/0.8.0-alpha2/#history/" target="_blank" rel="noreferrer">a couple of releases</a> every couple of months:</p><ul><li><p>March 2006: py 0.8.0-alpha2</p></li><li><p>May 2007: py 0.9.0</p></li><li><p>March 2008: py 0.9.1 (first release to be found <a href="https://github.com/pytest-dev/pytest/blob/main/doc/en/changelog.rst#091" target="_blank" rel="noreferrer">in the pytest changelog</a>!)</p></li><li><p>August 2008: py 0.9.2</p></li></ul></li><li><p>In August 2009, py 1.0.0 was released, <a href="https://holgerkrekel.net/2009/08/04/pylib-1-0-0-released-the-testing-with-python-innovations-continue/" target="_blank" rel="noreferrer">introducing a lot of fundamental features</a>:</p><ul><li><p>funcargs/fixtures</p></li><li><p><a href="http://web.archive.org/web/20090629032718/https://codespeak.net/py/dist/test/extend.html" target="_blank" rel="noreferrer">A plugin architecture</a> which still looks very much the same today!</p></li><li><p>Various <a href="http://web.archive.org/web/20091005181132/https://codespeak.net/py/dist/test/plugin/index.html" target="_blank" rel="noreferrer">default plugins</a>, including <a href="http://web.archive.org/web/20091012022829/http://codespeak.net/py/dist/test/plugin/how-to/monkeypatch.html" target="_blank" rel="noreferrer">monkeypatch</a></p></li></ul></li><li><p>Even back there, the <a href="http://web.archive.org/web/20091005222413/http://codespeak.net/py/dist/faq.html" target="_blank" rel="noreferrer">FAQ</a> said:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">Clearly, [a second standard library] was ambitious and the naming has maybe haunted the project rather than helping it. There may be a project name change and possibly a split up into different projects sometime.</span></span></code></pre></div><p>and that finally happened in November 2010, when pytest 2.0.0 <a href="https://mail.python.org/pipermail/pytest-dev/2010-November/001687.html" target="_blank" rel="noreferrer">was released</a> as a package separate from <code>py</code> (but still called <code>py.test</code>).</p></li><li><p>In August 2016, pytest 3.0.0 <a href="https://docs.pytest.org/en/latest/changelog.html#release-3-0-0" target="_blank" rel="noreferrer">was released</a>, which adds <code>pytest</code> (rather than <code>py.test</code>) as the recommended command-line entry point</p></li></ul><p>Due to this history, it’s difficult to answer the question when pytest was started. It depends what point should really be seen as the start of it all. One possible interpretation is to pick Europython 2004, i.e. around June/July 2004.</p>',5),i=[s];function l(n,p,d,h,c,y){return t(),a("div",null,i)}const m=e(o,[["render",l]]);export{u as __pageData,m as default};