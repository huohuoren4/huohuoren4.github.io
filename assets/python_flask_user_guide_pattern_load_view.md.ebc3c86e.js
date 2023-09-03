import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.01af844e.js";const F=JSON.parse('{"title":"Lazily Loading Views","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/load_view.md","filePath":"python/flask/user_guide/pattern/load_view.md","lastUpdated":1693404008000}'),p={name:"python/flask/user_guide/pattern/load_view.md"},o=l(`<h1 id="lazily-loading-views" tabindex="-1">Lazily Loading Views <a class="header-anchor" href="#lazily-loading-views" aria-label="Permalink to &quot;Lazily Loading Views {#lazily-loading-views}&quot;">​</a></h1><p>Flask is usually used with the decorators. Decorators are simple and you have the URL right next to the function that is called for that specific URL. However there is a downside to this approach: it means all your code that uses decorators has to be imported upfront or Flask will never actually find your function.</p><p>This can be a problem if your application has to import quick. It might have to do that on systems like Google’s App Engine or other systems. So if you suddenly notice that your application outgrows this approach you can fall back to a centralized URL mapping.</p><p>The system that enables having a central URL map is the <code>add_url_rule()</code> function. Instead of using decorators, you have a file that sets up the application with all URLs.</p><h2 id="converting-to-centralized-url-map" tabindex="-1">Converting to Centralized URL Map <a class="header-anchor" href="#converting-to-centralized-url-map" aria-label="Permalink to &quot;Converting to Centralized URL Map {#converting-to-centralized-url-map}&quot;">​</a></h2><p>Imagine the current application looks somewhat like this:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Flask</span></span>
<span class="line"><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Flask(</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@app.route</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">(username):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Flask</span></span>
<span class="line"><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Flask(</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@app.route</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">(username):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p>Then, with the centralized approach you would have one file with the views (<code>views.py</code>) but without any decorator:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">(username):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">(username):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pass</span></span></code></pre></div><p>And then a file that sets up an application which maps the functions to URLs:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Flask</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> yourapplication </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> views</span></span>
<span class="line"><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Flask(</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.add_url_rule(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">view_func</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">views.index)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.add_url_rule(</span><span style="color:#9ECBFF;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">view_func</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">views.user)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Flask</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> yourapplication </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> views</span></span>
<span class="line"><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Flask(</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">app.add_url_rule(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">view_func</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">views.index)</span></span>
<span class="line"><span style="color:#24292E;">app.add_url_rule(</span><span style="color:#032F62;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">view_func</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">views.user)</span></span></code></pre></div><h2 id="loading-late" tabindex="-1">Loading Late <a class="header-anchor" href="#loading-late" aria-label="Permalink to &quot;Loading Late {#loading-late}&quot;">​</a></h2><p>So far we only split up the views and the routing, but the module is still loaded upfront. The trick is to actually load the view function as needed. This can be accomplished with a helper class that behaves just like a function but internally imports the real function on first use:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> werkzeug.utils </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> import_string, cached_property</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LazyView</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__init__</span><span style="color:#E1E4E8;">(self, import_name):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">__module__</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> import_name.rsplit(</span><span style="color:#9ECBFF;">&#39;.&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.import_name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> import_name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@cached_property</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">view</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> import_string(</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.import_name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__call__</span><span style="color:#E1E4E8;">(self, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">kwargs):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.view(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">kwargs)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> werkzeug.utils </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> import_string, cached_property</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LazyView</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">object</span><span style="color:#24292E;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self, import_name):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">__module__</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> import_name.rsplit(</span><span style="color:#032F62;">&#39;.&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.import_name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> import_name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@cached_property</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">view</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> import_string(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.import_name)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__call__</span><span style="color:#24292E;">(self, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">args, </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">kwargs):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.view(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">args, </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">kwargs)</span></span></code></pre></div><p>What’s important here is is that <code>__module__</code> and <code>__name__</code> are properly set. This is used by Flask internally to figure out how to name the URL rules in case you don’t provide a name for the rule yourself.</p><p>Then you can define your central place to combine the views like this:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> flask </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Flask</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> yourapplication.helpers </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> LazyView</span></span>
<span class="line"><span style="color:#E1E4E8;">app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Flask(</span><span style="color:#79B8FF;">__name__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.add_url_rule(</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                 </span><span style="color:#FFAB70;">view_func</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">LazyView(</span><span style="color:#9ECBFF;">&#39;yourapplication.views.index&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">app.add_url_rule(</span><span style="color:#9ECBFF;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                 </span><span style="color:#FFAB70;">view_func</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">LazyView(</span><span style="color:#9ECBFF;">&#39;yourapplication.views.user&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> flask </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Flask</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> yourapplication.helpers </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> LazyView</span></span>
<span class="line"><span style="color:#24292E;">app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Flask(</span><span style="color:#005CC5;">__name__</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">app.add_url_rule(</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                 </span><span style="color:#E36209;">view_func</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">LazyView(</span><span style="color:#032F62;">&#39;yourapplication.views.index&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">app.add_url_rule(</span><span style="color:#032F62;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                 </span><span style="color:#E36209;">view_func</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">LazyView(</span><span style="color:#032F62;">&#39;yourapplication.views.user&#39;</span><span style="color:#24292E;">))</span></span></code></pre></div><p>You can further optimize this in terms of amount of keystrokes needed to write this by having a function that calls into <code>add_url_rule()</code> by prefixing a string with the project name and a dot, and by wrapping <code>view_func</code> in a <code>LazyView</code> as needed.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">(import_name, url_rules</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[], </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">options):</span></span>
<span class="line"><span style="color:#E1E4E8;">    view </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LazyView(</span><span style="color:#F97583;">f</span><span style="color:#9ECBFF;">&quot;yourapplication.</span><span style="color:#79B8FF;">{</span><span style="color:#E1E4E8;">import_name</span><span style="color:#79B8FF;">}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> url_rule </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> url_rules:</span></span>
<span class="line"><span style="color:#E1E4E8;">        app.add_url_rule(url_rule, </span><span style="color:#FFAB70;">view_func</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">view, </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># add a single route to the index view</span></span>
<span class="line"><span style="color:#E1E4E8;">url(</span><span style="color:#9ECBFF;">&#39;views.index&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># add two routes to a single function endpoint</span></span>
<span class="line"><span style="color:#E1E4E8;">url_rules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;/user/&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">url(</span><span style="color:#9ECBFF;">&#39;views.user&#39;</span><span style="color:#E1E4E8;">, url_rules)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">(import_name, url_rules</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[], </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">options):</span></span>
<span class="line"><span style="color:#24292E;">    view </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> LazyView(</span><span style="color:#D73A49;">f</span><span style="color:#032F62;">&quot;yourapplication.</span><span style="color:#005CC5;">{</span><span style="color:#24292E;">import_name</span><span style="color:#005CC5;">}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> url_rule </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> url_rules:</span></span>
<span class="line"><span style="color:#24292E;">        app.add_url_rule(url_rule, </span><span style="color:#E36209;">view_func</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">view, </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># add a single route to the index view</span></span>
<span class="line"><span style="color:#24292E;">url(</span><span style="color:#032F62;">&#39;views.index&#39;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># add two routes to a single function endpoint</span></span>
<span class="line"><span style="color:#24292E;">url_rules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;/user/&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;/user/&lt;username&gt;&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">url(</span><span style="color:#032F62;">&#39;views.user&#39;</span><span style="color:#24292E;">, url_rules)</span></span></code></pre></div><p>One thing to keep in mind is that before and after request handlers have to be in a file that is imported upfront to work properly on the first request. The same goes for any kind of remaining decorator.</p>`,20),e=[o];function t(r,c,y,i,E,d){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};