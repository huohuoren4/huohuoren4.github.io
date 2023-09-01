import{_ as s,o as a,c as n,X as o}from"./chunks/framework.6e839c56.js";const C=JSON.parse('{"title":"JavaScript, fetch, and JSON","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/javascript.md","filePath":"python/flask/user_guide/pattern/javascript.md","lastUpdated":1693404008000}'),l={name:"python/flask/user_guide/pattern/javascript.md"},e=o(`<h1 id="javascript-fetch-and-json" tabindex="-1">JavaScript, fetch, and JSON <a class="header-anchor" href="#javascript-fetch-and-json" aria-label="Permalink to &quot;JavaScript, fetch, and JSON {#javascript-fetch-and-json}&quot;">​</a></h1><p>You may want to make your HTML page dynamic, by changing data without reloading the entire page. Instead of submitting an HTML <code>&lt;form&gt;</code> and performing a redirect to re-render the template, you can add <a href="https://developer.mozilla.org/Web/JavaScript" target="_blank" rel="noreferrer">JavaScript</a> that calls <code>fetch()</code> and replaces content on the page.</p><p><code>fetch()</code> is the modern, built-in JavaScript solution to making requests from a page. You may have heard of other “AJAX” methods and libraries, such as <code>XMLHttpRequest()</code> or <a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>. These are no longer needed in modern browsers, although you may choose to use them or another library depending on your application’s requirements. These docs will only focus on built-in JavaScript features.</p><h2 id="rendering-templates" tabindex="-1">Rendering Templates <a class="header-anchor" href="#rendering-templates" aria-label="Permalink to &quot;Rendering Templates {#rendering-templates}&quot;">​</a></h2><p>It is important to understand the difference between templates and JavaScript. Templates are rendered on the server, before the response is sent to the user’s browser. JavaScript runs in the user’s browser, after the template is rendered and sent. Therefore, it is impossible to use JavaScript to affect how the Jinja template is rendered, but it is possible to render data into the JavaScript that will run.</p><p>To provide data to JavaScript when rendering the template, use the <code>tojson()</code> filter in a <code>&lt;script&gt;</code> block. This will convert the data to a valid JavaScript object, and ensure that any unsafe HTML characters are rendered safely. If you do not use the <code>tojson</code> filter, you will get a <code>SyntaxError</code> in the browser console.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_report</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render_template</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">report.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">chart_data</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> chart_data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">chart_data</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">tojson</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    chartLib</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">makeChart</span><span style="color:#A6ACCD;">(chart_data)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>A less common pattern is to add the data to a <code>data-</code> attribute on an HTML tag. In this case, you must use single quotes around the value, not double quotes, otherwise you will produce invalid or unsafe HTML.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-chart</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{{ chart_data|tojson }}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="generating-urls" tabindex="-1">Generating URLs <a class="header-anchor" href="#generating-urls" aria-label="Permalink to &quot;Generating URLs {#generating-urls}&quot;">​</a></h2><p>The other way to get data from the server to JavaScript is to make a request for it. First, you need to know the URL to request.</p><p>The simplest way to generate URLs is to continue to use <code>url_for()</code> when rendering the template. For example:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user_url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">url_for</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">current_user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">tojson</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(user_url)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>However, you might need to generate a URL based on information you only know in JavaScript. As discussed above, JavaScript runs in the user’s browser, not as part of the template rendering, so you can’t use <code>url_for</code> at that point.</p><p>In this case, you need to know the “root URL” under which your application is served. In simple setups, this is <code>/</code>, but it might also be something else, like <code>https://example.com/myapp/</code>.</p><p>A simple way to tell your JavaScript code about this root is to set it as a global variable when rendering the template. Then you can use it when generating URLs from JavaScript.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> SCRIPT_ROOT </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">script_root</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">tojson</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// do something to get a user id from the page</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user_url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">SCRIPT_ROOT</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/user/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">user_id</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(user_url)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="making-a-request-with-fetch" tabindex="-1">Making a Request with fetch <a class="header-anchor" href="#making-a-request-with-fetch" aria-label="Permalink to &quot;Making a Request with fetch {#making-a-request-with-fetch}&quot;">​</a></h2><p><code>fetch()</code> takes two arguments, a URL and an object with other options, and returns a <code>Promise</code>. We won’t cover all the available options, and will only use <code>then()</code> on the promise, not other callbacks or <code>await</code> syntax. Read the linked MDN docs for more information about those features.</p><p>By default, the GET method is used. If the response contains JSON, it can be used with a <code>then()</code> callback chain.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> room_url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">url_for</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">room_detail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">room</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">tojson</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(room_url)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// data is a parsed JSON object</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>To send data, use a data method such as <code>POST</code>, and pass the <code>body</code> option. The most common types for data are form data or JSON data.</p><p>To send form data, pass a populated <code>FormData</code> object. This uses the same format as an HTML form, and would be accessed with <code>request.form</code> in a Flask view.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FormData</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Flask Room</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Talk about Flask here.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(room_url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>In general, prefer sending request data as form data, as would be used when submitting an HTML form. JSON can represent more complex data, but unless you need that it’s better to stick with the simpler format. When sending JSON data, the <code>Content-Type: application/json</code> header must be sent as well, otherwise Flask will return a 400 error.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Flask Room</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Talk about Flask here.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(room_url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">headers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(data)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="following-redirects" tabindex="-1">Following Redirects <a class="header-anchor" href="#following-redirects" aria-label="Permalink to &quot;Following Redirects {#following-redirects}&quot;">​</a></h2><p>A response might be a redirect, for example if you logged in with JavaScript instead of a traditional HTML form, and your view returned a redirect instead of JSON. JavaScript requests do follow redirects, but they don’t change the page. If you want to make the page change you can inspect the response and apply the redirect manually.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/login</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">redirected</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">showLoginError</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="replacing-content" tabindex="-1">Replacing Content <a class="header-anchor" href="#replacing-content" aria-label="Permalink to &quot;Replacing Content {#replacing-content}&quot;">​</a></h2><p>A response might be new HTML, either a new section of the page to add or replace, or an entirely new page. In general, if you’re returning the entire page, it would be better to handle that with a redirect as shown in the previous section. The following example shows how to replace a <code>&lt;div&gt;</code> with the HTML returned by a request.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geology-fact</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ include &quot;geology_fact.html&quot; }}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> geology_url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{{</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">url_for</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geology_fact</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">tojson</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> geology_div </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geology-fact</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(geology_url)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> geology_div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHtml </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> text)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="return-json-from-views" tabindex="-1">Return JSON from Views <a class="header-anchor" href="#return-json-from-views" aria-label="Permalink to &quot;Return JSON from Views {#return-json-from-views}&quot;">​</a></h2><p>To return a JSON object from your API view, you can directly return a dict from the view. It will be serialized to JSON automatically.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/user/&lt;int:id&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user_detail</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_or_404</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">email</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">picture</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url_for</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">static</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">filename</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;users/</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">id</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/profile.png&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>If you want to return another JSON type, use the <code>jsonify()</code> function, which creates a response object with the given data serialized to JSON.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> jsonify</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/users</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user_list</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    users </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">order_by</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">User</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">jsonify</span><span style="color:#89DDFF;">([</span><span style="color:#82AAFF;">u</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to_json</span><span style="color:#89DDFF;">()</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#82AAFF;"> u </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#82AAFF;"> users</span><span style="color:#89DDFF;">])</span></span></code></pre></div><p>It is usually not a good idea to return file data in a JSON response. JSON cannot represent binary data directly, so it must be base64 encoded, which can be slow, takes more bandwidth to send, and is not as easy to cache. Instead, serve files using one view, and generate a URL to the desired file to include in the JSON. Then the client can make a separate request to get the linked resource after getting the JSON.</p><h2 id="receiving-json-in-views" tabindex="-1">Receiving JSON in Views <a class="header-anchor" href="#receiving-json-in-views" aria-label="Permalink to &quot;Receiving JSON in Views {#receiving-json-in-views}&quot;">​</a></h2><p>Use the <code>json</code> property of the <code>request</code> object to decode the request’s body as JSON. If the body is not valid JSON, or the <code>Content-Type</code> header is not set to <code>application/json</code>, a <code>400</code> Bad Request error will be raised.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> request</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/user/&lt;int:id&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user_update</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_or_404</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update_from_json</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">json</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    db</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to_json</span><span style="color:#89DDFF;">()</span></span></code></pre></div>`,42),p=[e];function t(r,c,y,D,F,i){return a(),n("div",null,p)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};