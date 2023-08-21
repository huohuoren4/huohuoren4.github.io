import{_ as s,o as e,c as a,X as o}from"./chunks/framework.b5656a4e.js";const D=JSON.parse('{"title":"Class-Based Views","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/view.md","filePath":"python/flask/api_reference/view.md","lastUpdated":1692437254000}'),l={name:"python/flask/api_reference/view.md"},n=o('<h1 id="class-based-views" tabindex="-1">Class-Based Views <a class="header-anchor" href="#class-based-views" aria-label="Permalink to &quot;Class-Based Views&quot;">​</a></h1><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.7.</em></p></details><h2 id="class-flask-views-view" tabindex="-1"><code>class</code> flask.views.View <a class="header-anchor" href="#class-flask-views-view" aria-label="Permalink to &quot;`class` flask.views.View&quot;">​</a></h2><p>Subclass this class and override <code>dispatch_request()</code> to create a generic class-based view. Call <code>as_view()</code> to create a view function that creates an instance of the class with the given arguments and calls its · method with any URL variables.</p><p>See Class-based Views for a detailed guide.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hello</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">View</span><span style="color:#89DDFF;">):</span></span>\n<span class="line"><span style="color:#A6ACCD;">    init_every_request </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dispatch_request</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">):</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;Hello, </span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">name</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">!&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_url_rule</span><span style="color:#89DDFF;">(</span></span>\n<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/hello/&lt;name&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">view_func</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">Hello</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_view</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Set <code>methods</code> on the class to change what methods the view accepts.</p><p>Set <code>decorators</code> on the class to apply a list of decorators to the generated view function. Decorators applied to the class itself will not be applied to the generated view function!</p><p>Set <code>init_every_request</code> to <code>False</code> for efficiency, unless you need to store request-global data on <code>self</code>.</p><ul><li><h3 id="classmethod-as-view-name-class-args-class-kwargs" tabindex="-1"><code>classmethod</code> as_view(<code>name, *class_args, **class_kwargs</code>) <a class="header-anchor" href="#classmethod-as-view-name-class-args-class-kwargs" aria-label="Permalink to &quot;`classmethod` as_view(`name, *class_args, **class_kwargs`)&quot;">​</a></h3><p>Convert the class into a view function that can be registered for a route.</p><p>By default, the generated view will create a new instance of the view class for every request and call its <code>dispatch_request()</code> method. If the view class sets <code>init_every_request</code> to <code>False</code>, the same instance will be used for every request.</p><p>Except for <code>name</code>, all other arguments passed to this method are forwarded to the view class <code>__init__</code> method.</p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 2.2</em>: Added the <code>init_every_request</code> class attribute.</p></details><p><em>Parameters</em>:</p><ul><li><p><code>name (str)</code> –</p></li><li><p><code>class_args (t.Any)</code> –</p></li><li><p><code>class_kwargs (t.Any)</code> –</p></li></ul><p><em>Return type</em>: <code>ft.RouteCallable</code></p></li><li><h3 id="decorators-classvar-list-callable" tabindex="-1">decorators: <code>ClassVar[list[Callable]] = []</code> <a class="header-anchor" href="#decorators-classvar-list-callable" aria-label="Permalink to &quot;decorators: `ClassVar[list[Callable]] = []`&quot;">​</a></h3></li><li><p>A list of decorators to apply, in order, to the generated view function. Remember that <code>@decorator</code> syntax is applied bottom to top, so the first decorator in the list would be the bottom decorator.</p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.8.</em></p></details></li><li><h3 id="dispatch-request" tabindex="-1">dispatch_request() <a class="header-anchor" href="#dispatch-request" aria-label="Permalink to &quot;dispatch_request()&quot;">​</a></h3><p>The actual view function behavior. Subclasses must override this and return a valid response. Any variables from the URL rule are passed as keyword arguments.</p><p><em>Return type</em>: <code>ft.ResponseReturnValue</code></p></li><li><h3 id="init-every-request-classvar-bool-true" tabindex="-1">init_every_request: <code>ClassVar[bool] = True</code> <a class="header-anchor" href="#init-every-request-classvar-bool-true" aria-label="Permalink to &quot;init_every_request: `ClassVar[bool] = True`&quot;">​</a></h3><p>Create a new instance of this view class for every request by default. If a view subclass sets this to <code>False</code>, the same instance is used for every request.</p><p>A single instance is more efficient, especially if complex setup is done during init. However, storing data on <code>self</code> is no longer safe across requests, and <code>g</code> should be used instead.</p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 2.2.</em></p></details></li><li><h3 id="methods-classvar-collection-str-none-none" tabindex="-1">methods: <code>ClassVar[Collection[str] | None] = None</code> <a class="header-anchor" href="#methods-classvar-collection-str-none-none" aria-label="Permalink to &quot;methods: `ClassVar[Collection[str] | None] = None`&quot;">​</a></h3><p>The methods this view is registered for. Uses the same default (<code>[&quot;GET&quot;, &quot;HEAD&quot;, &quot;OPTIONS&quot;]</code>) as route and <code>add_url_rule</code> by default.</p></li><li><h3 id="provide-automatic-options-classvar-bool-none-none" tabindex="-1">provide_automatic_options: <code>ClassVar[bool | None] = None</code> <a class="header-anchor" href="#provide-automatic-options-classvar-bool-none-none" aria-label="Permalink to &quot;provide_automatic_options: `ClassVar[bool | None] = None`&quot;">​</a></h3><p>Control whether the <code>OPTIONS</code> method is handled automatically. Uses the same default (<code>True</code>) as <code>route</code> and <code>add_url_rule</code> by default.</p></li></ul><h2 id="class-flask-views-methodview" tabindex="-1"><code>class</code> flask.views.MethodView <a class="header-anchor" href="#class-flask-views-methodview" aria-label="Permalink to &quot;`class` flask.views.MethodView&quot;">​</a></h2><p>Dispatches request methods to the corresponding instance methods. For example, if you implement a <code>get</code> method, it will be used to handle <code>GET</code> requests.</p><p>This can be useful for defining a REST API.</p><p><code>methods</code> is automatically set based on the methods defined on the class.</p><p>See <a href="https://flask.palletsprojects.com/en/2.3.x/views/" target="_blank" rel="noreferrer">Class-based Views</a> for a detailed guide.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CounterAPI</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">MethodView</span><span style="color:#89DDFF;">):</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>\n<span class="line"><span style="color:#A6ACCD;">        session</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">redirect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">url_for</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_url_rule</span><span style="color:#89DDFF;">(</span></span>\n<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">view_func</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">CounterAPI</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">as_view</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">counter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><ul><li><h3 id="dispatch-request-kwargs" tabindex="-1">dispatch_request(<code>**kwargs</code>) <a class="header-anchor" href="#dispatch-request-kwargs" aria-label="Permalink to &quot;dispatch_request(`**kwargs`)&quot;">​</a></h3></li></ul><p>The actual view function behavior. Subclasses must override this and return a valid response. Any variables from the URL rule are passed as keyword arguments.</p><p><em>Parameters</em>:</p><ul><li><code>kwargs (t.Any)</code> –</li></ul><p><em>Return type</em>: <code>ft.ResponseReturnValue</code></p>',21),t=[n];function p(r,c,i,d,y,u){return e(),a("div",null,t)}const h=s(l,[["render",p]]);export{D as __pageData,h as default};