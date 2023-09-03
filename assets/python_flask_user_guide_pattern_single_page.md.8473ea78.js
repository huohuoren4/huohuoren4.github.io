import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.01af844e.js";const d=JSON.parse('{"title":"Single-Page Applications","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/single_page.md","filePath":"python/flask/user_guide/pattern/single_page.md","lastUpdated":1692979908000}'),l={name:"python/flask/user_guide/pattern/single_page.md"},o=p(`<h1 id="single-page-applications" tabindex="-1">Single-Page Applications <a class="header-anchor" href="#single-page-applications" aria-label="Permalink to &quot;Single-Page Applications {#single-page-applications}&quot;">​</a></h1><p>Flask can be used to serve Single-Page Applications (SPA) by placing static files produced by your frontend framework in a subfolder inside of your project. You will also need to create a catch-all endpoint that routes all requests to your SPA.</p><p>The following example demonstrates how to serve an SPA along with an API:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Flask, jsonify</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Flask(</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">static_folder</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;app&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">static_url_path</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/app&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/heartbeat&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">heartbeat</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> jsonify({</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;healthy&quot;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">defaults</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&lt;path:path&gt;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">catch_all</span><span style="color:#E1E4E8;">(path):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> app.send_static_file(</span><span style="color:#9ECBFF;">&quot;index.html&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Flask, jsonify</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Flask(</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;">, </span><span style="color:#E36209;">static_folder</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;app&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">static_url_path</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/app&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/heartbeat&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">heartbeat</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> jsonify({</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;healthy&quot;</span><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">defaults</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/&lt;path:path&gt;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">catch_all</span><span style="color:#24292E;">(path):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> app.send_static_file(</span><span style="color:#032F62;">&quot;index.html&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div>`,4),e=[o];function t(c,r,y,E,i,u){return a(),n("div",null,e)}const _=s(l,[["render",t]]);export{d as __pageData,_ as default};
