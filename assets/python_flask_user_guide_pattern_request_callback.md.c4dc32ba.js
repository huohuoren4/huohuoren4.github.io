import{_ as s,o as e,c as a,V as n}from"./chunks/framework.d3b95951.js";const f=JSON.parse('{"title":"Deferred Request Callbacks","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/request_callback.md","filePath":"python/flask/user_guide/pattern/request_callback.md"}'),t={name:"python/flask/user_guide/pattern/request_callback.md"},l=n(`<h1 id="deferred-request-callbacks" tabindex="-1">Deferred Request Callbacks <a class="header-anchor" href="#deferred-request-callbacks" aria-label="Permalink to &quot;Deferred Request Callbacks&quot;">​</a></h1><p>One of the design principles of Flask is that response objects are created and passed down a chain of potential callbacks that can modify them or replace them. When the request handling starts, there is no response object yet. It is created as necessary either by a view function or by some other component in the system.</p><p>What happens if you want to modify the response at a point where the response does not exist yet? A common example for that would be a <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.before_request" target="_blank" rel="noreferrer">before_request()</a> callback that wants to set a cookie on the response object.</p><p>One way is to avoid the situation. Very often that is possible. For instance you can try to move that logic into a <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.after_request" target="_blank" rel="noreferrer">after_request()</a> callback instead. However, sometimes moving code there makes it more complicated or awkward to reason about.</p><p>As an alternative, you can use <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.after_this_request" target="_blank" rel="noreferrer">after_this_request()</a> to register callbacks that will execute after only the current request. This way you can defer code execution from anywhere in the application, based on the current request.</p><p>At any time during a request, we can register a function to be called at the end of the request. For example you can remember the current language of the user in a cookie in a <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.before_request" target="_blank" rel="noreferrer">before_request()</a> callback:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> after_this_request</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">before_request</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">detect_user_language</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    language </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">cookies</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_lang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> language </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        language </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">guess_language_from_request</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># when the response exists, set a cookie with the language</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">after_this_request</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">remember_language</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set_cookie</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_lang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> language</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> response</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">language</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> language</span></span></code></pre></div>`,7),o=[l];function p(r,c,i,y,D,F){return e(),a("div",null,o)}const h=s(t,[["render",p]]);export{f as __pageData,h as default};
