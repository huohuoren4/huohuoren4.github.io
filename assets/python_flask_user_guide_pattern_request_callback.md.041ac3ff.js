import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.01af844e.js";const h=JSON.parse('{"title":"Deferred Request Callbacks","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/request_callback.md","filePath":"python/flask/user_guide/pattern/request_callback.md","lastUpdated":1693404008000}'),l={name:"python/flask/user_guide/pattern/request_callback.md"},o=n(`<h1 id="deferred-request-callbacks" tabindex="-1">Deferred Request Callbacks <a class="header-anchor" href="#deferred-request-callbacks" aria-label="Permalink to &quot;Deferred Request Callbacks {#deferred-request-callbacks}&quot;">​</a></h1><p>One of the design principles of Flask is that response objects are created and passed down a chain of potential callbacks that can modify them or replace them. When the request handling starts, there is no response object yet. It is created as necessary either by a view function or by some other component in the system.</p><p>What happens if you want to modify the response at a point where the response does not exist yet? A common example for that would be a <code>before_request()</code> callback that wants to set a cookie on the response object.</p><p>One way is to avoid the situation. Very often that is possible. For instance you can try to move that logic into a <code>after_request()</code> callback instead. However, sometimes moving code there makes it more complicated or awkward to reason about.</p><p>As an alternative, you can use <code>after_this_request()</code> to register callbacks that will execute after only the current request. This way you can defer code execution from anywhere in the application, based on the current request.</p><p>At any time during a request, we can register a function to be called at the end of the request. For example you can remember the current language of the user in a cookie in a <code>before_request()</code> callback:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> request, after_this_request</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.before_request</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">detect_user_language</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    language </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> request.cookies.get(</span><span style="color:#9ECBFF;">&#39;user_lang&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> language </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        language </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> guess_language_from_request()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># when the response exists, set a cookie with the language</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@after_this_request</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">remember_language</span><span style="color:#E1E4E8;">(response):</span></span>
<span class="line"><span style="color:#E1E4E8;">            response.set_cookie(</span><span style="color:#9ECBFF;">&#39;user_lang&#39;</span><span style="color:#E1E4E8;">, language)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    g.language </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> language</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> request, after_this_request</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.before_request</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">detect_user_language</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    language </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> request.cookies.get(</span><span style="color:#032F62;">&#39;user_lang&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> language </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        language </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> guess_language_from_request()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># when the response exists, set a cookie with the language</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@after_this_request</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">remember_language</span><span style="color:#24292E;">(response):</span></span>
<span class="line"><span style="color:#24292E;">            response.set_cookie(</span><span style="color:#032F62;">&#39;user_lang&#39;</span><span style="color:#24292E;">, language)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    g.language </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> language</span></span></code></pre></div>`,7),p=[o];function t(r,c,i,y,E,u){return e(),a("div",null,p)}const g=s(l,[["render",t]]);export{h as __pageData,g as default};