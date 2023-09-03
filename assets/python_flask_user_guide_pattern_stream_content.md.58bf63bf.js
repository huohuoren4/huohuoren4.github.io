import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.01af844e.js";const m=JSON.parse('{"title":"Streaming Contents","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/stream_content.md","filePath":"python/flask/user_guide/pattern/stream_content.md","lastUpdated":1693404008000}'),o={name:"python/flask/user_guide/pattern/stream_content.md"},p=e(`<h1 id="streaming-contents" tabindex="-1">Streaming Contents <a class="header-anchor" href="#streaming-contents" aria-label="Permalink to &quot;Streaming Contents {#streaming-contents}&quot;">​</a></h1><p>Sometimes you want to send an enormous amount of data to the client, much more than you want to keep in memory. When you are generating the data on the fly though, how do you send that back to the client without the roundtrip to the filesystem?</p><p>The answer is by using generators and direct responses.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage {#basic-usage}&quot;">​</a></h2><p>This is a basic view function that generates a lot of CSV data on the fly. The trick is to have an inner function that uses a generator to generate data and to then invoke that function and pass it to a response object:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/large.csv&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generate_large_csv</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generate</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> row </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> iter_all_rows():</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">f</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">{</span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;">.join(row)</span><span style="color:#79B8FF;">}\\n</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> generate(), {</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;text/csv&quot;</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/large.csv&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generate_large_csv</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generate</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> row </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> iter_all_rows():</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">f</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">{</span><span style="color:#032F62;">&#39;,&#39;</span><span style="color:#24292E;">.join(row)</span><span style="color:#005CC5;">}\\n</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> generate(), {</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;text/csv&quot;</span><span style="color:#24292E;">}</span></span></code></pre></div><p>Each <code>yield</code> expression is directly sent to the browser. Note though that some WSGI middlewares might break streaming, so be careful there in debug environments with profilers and other things you might have enabled.</p><h2 id="streaming-from-templates" tabindex="-1">Streaming from Templates <a class="header-anchor" href="#streaming-from-templates" aria-label="Permalink to &quot;Streaming from Templates {#streaming-from-templates}&quot;">​</a></h2><p>The <code>Jinja2</code> template engine supports rendering a template piece by piece, returning an iterator of strings. Flask provides the <code>stream_template()</code> and <code>stream_template_string()</code> functions to make this easier to use.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> stream_template</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/timeline&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">timeline</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> stream_template(</span><span style="color:#9ECBFF;">&quot;timeline.html&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> stream_template</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/timeline&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">timeline</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> stream_template(</span><span style="color:#032F62;">&quot;timeline.html&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>The parts yielded by the render stream tend to match statement blocks in the template.</p><h2 id="streaming-with-context" tabindex="-1">Streaming with Context <a class="header-anchor" href="#streaming-with-context" aria-label="Permalink to &quot;Streaming with Context {#streaming-with-context}&quot;">​</a></h2><p>The <code>request</code> will not be active while the generator is running, because the view has already returned at that point. If you try to access <code>request</code>, you’ll get a <code>RuntimeError</code>.</p><p>If your generator function relies on data in <code>request</code>, use the <code>stream_with_context()</code> wrapper. This will keep the request context active during the generator.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> stream_with_context, request</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> markupsafe </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> escape</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/stream&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">streamed_response</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generate</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&lt;p&gt;Hello &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> escape(request.args[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;!&lt;/p&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> stream_with_context(generate())</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> stream_with_context, request</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> markupsafe </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> escape</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/stream&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">streamed_response</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generate</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&lt;p&gt;Hello &#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> escape(request.args[</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;!&lt;/p&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> stream_with_context(generate())</span></span></code></pre></div><p>It can also be used as a decorator.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@stream_with_context</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generate</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> generate()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@stream_with_context</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generate</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> generate()</span></span></code></pre></div><p>The <code>stream_template()</code> and <code>stream_template_string()</code> functions automatically use <code>stream_with_context()</code> if a request is active.</p>`,18),t=[p];function l(r,c,i,y,E,d){return a(),n("div",null,t)}const u=s(o,[["render",l]]);export{m as __pageData,u as default};
