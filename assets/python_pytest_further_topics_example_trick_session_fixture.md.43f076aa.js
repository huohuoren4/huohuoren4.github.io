import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01af844e.js";const u=JSON.parse('{"title":"A session-fixture which can look at all collected tests","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/further_topics/example_trick/session_fixture.md","filePath":"python/pytest/further_topics/example_trick/session_fixture.md","lastUpdated":1692807718000}'),p={name:"python/pytest/further_topics/example_trick/session_fixture.md"},o=l(`<h1 id="a-session-fixture-which-can-look-at-all-collected-tests" tabindex="-1">A session-fixture which can look at all collected tests <a class="header-anchor" href="#a-session-fixture-which-can-look-at-all-collected-tests" aria-label="Permalink to &quot;A session-fixture which can look at all collected tests {#a-session-fixture-which-can-look-at-all-collected-tests}&quot;">​</a></h1><p>A session-scoped fixture effectively has access to all collected test items. Here is an example of a fixture function which walks all collected tests and looks if their test class defines a <code>callme</code> method and calls it:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># content of conftest.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;session&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">autouse</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">callattr_ahead_of_alltests</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;callattr_ahead_of_alltests called&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    seen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    session </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> request.node</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> session.items:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">cls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> item.getparent(pytest.Class)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> seen:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hasattr</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">cls</span><span style="color:#E1E4E8;">.obj, </span><span style="color:#9ECBFF;">&quot;callme&quot;</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">cls</span><span style="color:#E1E4E8;">.obj.callme()</span></span>
<span class="line"><span style="color:#E1E4E8;">            seen.add(</span><span style="color:#79B8FF;">cls</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># content of conftest.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;session&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">autouse</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">callattr_ahead_of_alltests</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;callattr_ahead_of_alltests called&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    seen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">None</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">    session </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> request.node</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> session.items:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">cls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> item.getparent(pytest.Class)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> seen:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hasattr</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">cls</span><span style="color:#24292E;">.obj, </span><span style="color:#032F62;">&quot;callme&quot;</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">cls</span><span style="color:#24292E;">.obj.callme()</span></span>
<span class="line"><span style="color:#24292E;">            seen.add(</span><span style="color:#005CC5;">cls</span><span style="color:#24292E;">)</span></span></code></pre></div><p>test classes may now define a <code>callme</code> method which will be called ahead of running any tests:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># content of test_module.py</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestHello</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">classmethod</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">callme</span><span style="color:#E1E4E8;">(cls):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;callme called!&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_method1</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;test_method1 called&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_method2</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;test_method2 called&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestOther</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">classmethod</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">callme</span><span style="color:#E1E4E8;">(cls):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;callme other called&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_other</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;test other&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># works with unittest as well ...</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> unittest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SomeTest</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">unittest</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">TestCase</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">classmethod</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">callme</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;SomeTest callme called&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_unit1</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;test_unit1 method called&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># content of test_module.py</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestHello</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">classmethod</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">callme</span><span style="color:#24292E;">(cls):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;callme called!&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_method1</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;test_method1 called&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_method2</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;test_method2 called&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestOther</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">classmethod</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">callme</span><span style="color:#24292E;">(cls):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;callme other called&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_other</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;test other&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># works with unittest as well ...</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> unittest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SomeTest</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">unittest</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">TestCase</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">classmethod</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">callme</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;SomeTest callme called&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_unit1</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;test_unit1 method called&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>If you run this without output capturing:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-q</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_module.py</span></span>
<span class="line"><span style="color:#B392F0;">callattr_ahead_of_alltests</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">called</span></span>
<span class="line"><span style="color:#B392F0;">callme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">called!</span></span>
<span class="line"><span style="color:#B392F0;">callme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">other</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">called</span></span>
<span class="line"><span style="color:#B392F0;">SomeTest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">callme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">called</span></span>
<span class="line"><span style="color:#B392F0;">test_method1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">called</span></span>
<span class="line"><span style="color:#B392F0;">.test_method2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">called</span></span>
<span class="line"><span style="color:#B392F0;">.test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">other</span></span>
<span class="line"><span style="color:#B392F0;">.test_unit1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">method</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">called</span></span>
<span class="line"><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#B392F0;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">passed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.12</span><span style="color:#9ECBFF;">s</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-q</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_module.py</span></span>
<span class="line"><span style="color:#6F42C1;">callattr_ahead_of_alltests</span><span style="color:#24292E;"> </span><span style="color:#032F62;">called</span></span>
<span class="line"><span style="color:#6F42C1;">callme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">called!</span></span>
<span class="line"><span style="color:#6F42C1;">callme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">other</span><span style="color:#24292E;"> </span><span style="color:#032F62;">called</span></span>
<span class="line"><span style="color:#6F42C1;">SomeTest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">callme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">called</span></span>
<span class="line"><span style="color:#6F42C1;">test_method1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">called</span></span>
<span class="line"><span style="color:#6F42C1;">.test_method2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">called</span></span>
<span class="line"><span style="color:#6F42C1;">.test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">other</span></span>
<span class="line"><span style="color:#6F42C1;">.test_unit1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">method</span><span style="color:#24292E;"> </span><span style="color:#032F62;">called</span></span>
<span class="line"><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#6F42C1;">4</span><span style="color:#24292E;"> </span><span style="color:#032F62;">passed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.12</span><span style="color:#032F62;">s</span></span></code></pre></div>`,7),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
