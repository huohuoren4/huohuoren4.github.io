import{_ as t,o as s,c as e,Q as n}from"./chunks/framework.01af844e.js";const g=JSON.parse('{"title":"How to use pytest with an existing test suite","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/how_to_guides/test_suite.md","filePath":"python/pytest/how_to_guides/test_suite.md","lastUpdated":1692751654000}'),o={name:"python/pytest/how_to_guides/test_suite.md"},a=n(`<h1 id="how-to-use-pytest-with-an-existing-test-suite" tabindex="-1">How to use pytest with an existing test suite <a class="header-anchor" href="#how-to-use-pytest-with-an-existing-test-suite" aria-label="Permalink to &quot;How to use pytest with an existing test suite {#how-to-use-pytest-with-an-existing-test-suite}&quot;">​</a></h1><p>Pytest can be used with most existing test suites, but its behavior differs from other test runners such as <a href="/python/pytest/how_to_guides/nose_test#how-to-run-tests-written-for-nose">nose</a> or Python’s default unittest framework.</p><p>Before using this section you will want to <a href="/python/pytest/get_started#install-pytest">install pytest</a>.</p><h2 id="running-an-existing-test-suite-with-pytest" tabindex="-1">Running an existing test suite with pytest <a class="header-anchor" href="#running-an-existing-test-suite-with-pytest" aria-label="Permalink to &quot;Running an existing test suite with pytest {#running-an-existing-test-suite-with-pytest}&quot;">​</a></h2><p>Say you want to contribute to an existing repository somewhere. After pulling the code into your development space using some flavor of version control and (optionally) setting up a virtualenv you will want to run:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">repositor</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Environment dependent alternatives include</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#6A737D;"># &#39;python setup.py develop&#39; and &#39;conda develop&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">repositor</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Environment dependent alternatives include</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6A737D;"># &#39;python setup.py develop&#39; and &#39;conda develop&#39;</span></span></code></pre></div><p>in your project root. This will set up a symlink to your code in site-packages, allowing you to edit your code while your tests run against it as if it were installed.</p><p>Setting up your project in development mode lets you avoid having to reinstall every time you want to run your tests, and is less brittle than mucking about with sys.path to point your tests at local code.</p><p>Also consider using <a href="https://docs.pytest.org/en/latest/explanation/goodpractices.html#use-tox" target="_blank" rel="noreferrer">tox</a>.</p>`,9),p=[a];function l(i,r,c,y,u,d){return s(),e("div",null,p)}const _=t(o,[["render",l]]);export{g as __pageData,_ as default};