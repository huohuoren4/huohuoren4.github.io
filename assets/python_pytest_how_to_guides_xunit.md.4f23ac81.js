import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.01af844e.js";const f=JSON.parse('{"title":"How to implement xunit-style set-up","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/how_to_guides/xunit.md","filePath":"python/pytest/how_to_guides/xunit.md","lastUpdated":1692807718000}'),t={name:"python/pytest/how_to_guides/xunit.md"},o=e(`<h1 id="how-to-implement-xunit-style-set-up" tabindex="-1">How to implement xunit-style set-up <a class="header-anchor" href="#how-to-implement-xunit-style-set-up" aria-label="Permalink to &quot;How to implement xunit-style set-up {#how-to-implement-xunit-style-set-up}&quot;">​</a></h1><p>This section describes a classic and popular way how you can implement fixtures (setup and teardown test state) on a per-module/class/function basis.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>While these setup/teardown methods are simple and familiar to those coming from a <code>unittest</code> or <code>nose</code> background, you may also consider using pytest’s more powerful fixture mechanism which leverages the concept of dependency injection, allowing for a more modular and more scalable approach for managing test state, especially for larger projects and for functional testing. You can mix both fixture mechanisms in the same file but test methods of <code>unittest.TestCase</code> subclasses cannot receive fixture arguments.</p></div><h2 id="module-level-setup-teardown" tabindex="-1">Module level setup/teardown <a class="header-anchor" href="#module-level-setup-teardown" aria-label="Permalink to &quot;Module level setup/teardown {#module-level-setup-teardown}&quot;">​</a></h2><p>If you have multiple test functions and test classes in a single module you can optionally implement the following fixture methods which will usually be called once for all the functions:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup_module</span><span style="color:#E1E4E8;">(module):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;setup any state specific to the execution of the given module.&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">teardown_module</span><span style="color:#E1E4E8;">(module):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;teardown any state that was previously setup with a setup_module</span></span>
<span class="line"><span style="color:#9ECBFF;">    method.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup_module</span><span style="color:#24292E;">(module):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;setup any state specific to the execution of the given module.&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">teardown_module</span><span style="color:#24292E;">(module):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;teardown any state that was previously setup with a setup_module</span></span>
<span class="line"><span style="color:#032F62;">    method.</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span></code></pre></div><p>As of pytest-3.0, the <code>module</code> parameter is optional.</p><h2 id="class-level-setup-teardown" tabindex="-1">Class level setup/teardown <a class="header-anchor" href="#class-level-setup-teardown" aria-label="Permalink to &quot;Class level setup/teardown {#class-level-setup-teardown}&quot;">​</a></h2><p>Similarly, the following methods are called at class level before and after all test methods of the class are called:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">classmethod</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup_class</span><span style="color:#E1E4E8;">(cls):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;setup any state specific to the execution of the given class (which</span></span>
<span class="line"><span style="color:#9ECBFF;">    usually contains tests).</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">classmethod</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">teardown_class</span><span style="color:#E1E4E8;">(cls):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;teardown any state that was previously setup with a call to</span></span>
<span class="line"><span style="color:#9ECBFF;">    setup_class.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">classmethod</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup_class</span><span style="color:#24292E;">(cls):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;setup any state specific to the execution of the given class (which</span></span>
<span class="line"><span style="color:#032F62;">    usually contains tests).</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">classmethod</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">teardown_class</span><span style="color:#24292E;">(cls):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;teardown any state that was previously setup with a call to</span></span>
<span class="line"><span style="color:#032F62;">    setup_class.</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span></code></pre></div><h2 id="method-and-function-level-setup-teardown" tabindex="-1">Method and function level setup/teardown <a class="header-anchor" href="#method-and-function-level-setup-teardown" aria-label="Permalink to &quot;Method and function level setup/teardown {#method-and-function-level-setup-teardown}&quot;">​</a></h2><p>Similarly, the following methods are called around each method invocation:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup_method</span><span style="color:#E1E4E8;">(self, method):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;setup any state tied to the execution of the given method in a</span></span>
<span class="line"><span style="color:#9ECBFF;">    class.  setup_method is invoked for every test method of a class.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">teardown_method</span><span style="color:#E1E4E8;">(self, method):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;teardown any state that was previously setup with a setup_method</span></span>
<span class="line"><span style="color:#9ECBFF;">    call.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup_method</span><span style="color:#24292E;">(self, method):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;setup any state tied to the execution of the given method in a</span></span>
<span class="line"><span style="color:#032F62;">    class.  setup_method is invoked for every test method of a class.</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">teardown_method</span><span style="color:#24292E;">(self, method):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;teardown any state that was previously setup with a setup_method</span></span>
<span class="line"><span style="color:#032F62;">    call.</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span></code></pre></div><p>As of pytest-3.0, the <code>method</code> parameter is optional.</p><p>If you would rather define test functions directly at module level you can also use the following functions to implement fixtures:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup_function</span><span style="color:#E1E4E8;">(function):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;setup any state tied to the execution of the given function.</span></span>
<span class="line"><span style="color:#9ECBFF;">    Invoked for every test function in the module.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">teardown_function</span><span style="color:#E1E4E8;">(function):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;teardown any state that was previously setup with a setup_function</span></span>
<span class="line"><span style="color:#9ECBFF;">    call.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup_function</span><span style="color:#24292E;">(function):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;setup any state tied to the execution of the given function.</span></span>
<span class="line"><span style="color:#032F62;">    Invoked for every test function in the module.</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">teardown_function</span><span style="color:#24292E;">(function):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;teardown any state that was previously setup with a setup_function</span></span>
<span class="line"><span style="color:#032F62;">    call.</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span></code></pre></div><p>As of pytest-3.0, the <code>function</code> parameter is optional.</p><p>Remarks:</p><ul><li><p>It is possible for setup/teardown pairs to be invoked multiple times per testing process.</p></li><li><p>teardown functions are not called if the corresponding setup function existed and failed/was skipped.</p></li><li><p>Prior to pytest-4.2, xunit-style functions did not obey the scope rules of fixtures, so it was possible, for example, for a <code>setup_method</code> to be called before a session-scoped autouse fixture.</p><p>Now the xunit-style functions are integrated with the fixture mechanism and obey the proper scope rules of fixtures involved in the call.</p></li></ul>`,19),l=[o];function p(c,i,u,r,d,y){return n(),a("div",null,l)}const m=s(t,[["render",p]]);export{f as __pageData,m as default};
