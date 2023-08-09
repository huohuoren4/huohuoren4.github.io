import{_ as e,o as a,c as s,V as t}from"./chunks/framework.d3b95951.js";const y=JSON.parse('{"title":"The Request Context","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/request_context.md","filePath":"python/flask/user_guide/request_context.md"}'),n={name:"python/flask/user_guide/request_context.md"},o=t(`<h1 id="the-request-context" tabindex="-1">The Request Context <a class="header-anchor" href="#the-request-context" aria-label="Permalink to &quot;The Request Context&quot;">​</a></h1><p>The request context keeps track of the request-level data during a request. Rather than passing the request object to each function that runs during a request, the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request" target="_blank" rel="noreferrer">request</a> and <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.session" target="_blank" rel="noreferrer">session</a> proxies are accessed instead.</p><p>This is similar to <a href="https://flask.palletsprojects.com/en/2.3.x/appcontext/" target="_blank" rel="noreferrer">The Application Context</a>, which keeps track of the application-level data independent of a request. A corresponding application context is pushed when a request context is pushed.</p><h2 id="purpose-of-the-context" tabindex="-1">Purpose of the Context <a class="header-anchor" href="#purpose-of-the-context" aria-label="Permalink to &quot;Purpose of the Context&quot;">​</a></h2><p>When the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask" target="_blank" rel="noreferrer">Flask</a> application handles a request, it creates a <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Request" target="_blank" rel="noreferrer">Request</a> object based on the environment it received from the WSGI server. Because a worker (thread, process, or coroutine depending on the server) handles only one request at a time, the request data can be considered global to that worker during that request. Flask uses the term <code>context local</code> for this.</p><p>Flask automatically pushes a request context when handling a request. View functions, error handlers, and other functions that run during a request will have access to the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request" target="_blank" rel="noreferrer">request</a> proxy, which points to the request object for the current request.</p><h2 id="lifetime-of-the-context" tabindex="-1">Lifetime of the Context <a class="header-anchor" href="#lifetime-of-the-context" aria-label="Permalink to &quot;Lifetime of the Context&quot;">​</a></h2><p>When a Flask application begins handling a request, it pushes a request context, which also pushes an <a href="https://flask.palletsprojects.com/en/2.3.x/appcontext/" target="_blank" rel="noreferrer">app context</a>. When the request ends it pops the request context then the application context.</p><p>The context is unique to each thread (or other worker type). <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request" target="_blank" rel="noreferrer">request</a> cannot be passed to another thread, the other thread has a different context space and will not know about the request the parent thread was pointing to.</p><p>Context locals are implemented using Python’s <a href="https://docs.python.org/3/library/contextvars.html#module-contextvars" target="_blank" rel="noreferrer">contextvars</a> and Werkzeug’s <a href="https://werkzeug.palletsprojects.com/en/2.3.x/local/#werkzeug.local.LocalProxy" target="_blank" rel="noreferrer">LocalProxy</a>. Python manages the lifetime of context vars automatically, and local proxy wraps that low-level interface to make the data easier to work with.</p><h2 id="manually-push-a-context" tabindex="-1">Manually Push a Context <a class="header-anchor" href="#manually-push-a-context" aria-label="Permalink to &quot;Manually Push a Context&quot;">​</a></h2><p>If you try to access <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request" target="_blank" rel="noreferrer">request</a>, or anything that uses it, outside a request context, you’ll get this error message:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">RuntimeError: Working outside of request context.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This typically means that you attempted to use functionality that</span></span>
<span class="line"><span style="color:#A6ACCD;">needed an active HTTP request. Consult the documentation on testing</span></span>
<span class="line"><span style="color:#A6ACCD;">for information about how to avoid this problem.</span></span></code></pre></div><p>This should typically only happen when testing code that expects an active request. One option is to use the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.test_client" target="_blank" rel="noreferrer">test client</a> to simulate a full request. Or you can use <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.test_request_context" target="_blank" rel="noreferrer">test_request_context()</a> in a <code>with</code> block, and everything that runs in the block will have access to <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request" target="_blank" rel="noreferrer">request</a>, populated with your test data.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_report</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">year</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">format</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test_request_context</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/make_report/2017</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">query_string</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">format</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">short</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">generate_report</span><span style="color:#89DDFF;">()</span></span></code></pre></div><p>If you see that error somewhere else in your code not related to testing, it most likely indicates that you should move that code into a view function.</p><p>For information on how to use the request context from the interactive Python shell, see <a href="https://flask.palletsprojects.com/en/2.3.x/shell/" target="_blank" rel="noreferrer">Working with the Shell</a>.</p><h2 id="how-the-context-works" tabindex="-1">How the Context Works <a class="header-anchor" href="#how-the-context-works" aria-label="Permalink to &quot;How the Context Works&quot;">​</a></h2><p>The <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.wsgi_app" target="_blank" rel="noreferrer">Flask.wsgi_app()</a> method is called to handle each request. It manages the contexts during the request. Internally, the request and application contexts work like stacks. When contexts are pushed, the proxies that depend on them are available and point at information from the top item.</p><p>When the request starts, a <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.ctx.RequestContext" target="_blank" rel="noreferrer">RequestContext</a> is created and pushed, which creates and pushes an <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.ctx.AppContext" target="_blank" rel="noreferrer">AppContext</a> first if a context for that application is not already the top context. While these contexts are pushed, the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.current_app" target="_blank" rel="noreferrer">current_app</a>, <code>g</code>, <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request" target="_blank" rel="noreferrer">request</a>, and <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.session" target="_blank" rel="noreferrer">session</a> proxies are available to the original thread handling the request.</p><p>Other contexts may be pushed to change the proxies during a request. While this is not a common pattern, it can be used in advanced applications to, for example, do internal redirects or chain different applications together.</p><p>After the request is dispatched and a response is generated and sent, the request context is popped, which then pops the application context. Immediately before they are popped, the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.teardown_request" target="_blank" rel="noreferrer">teardown_request()</a> and <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.teardown_appcontext" target="_blank" rel="noreferrer">teardown_appcontext()</a> functions are executed. These execute even if an unhandled exception occurred during dispatch.</p><h2 id="callbacks-and-errors" tabindex="-1">Callbacks and Errors <a class="header-anchor" href="#callbacks-and-errors" aria-label="Permalink to &quot;Callbacks and Errors&quot;">​</a></h2><p>Flask dispatches a request in multiple stages which can affect the request, response, and how errors are handled. The contexts are active during all of these stages.</p><p>A <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Blueprint" target="_blank" rel="noreferrer">Blueprint</a> can add handlers for these events that are specific to the blueprint. The handlers for a blueprint will run if the blueprint owns the route that matches the request.</p><ol><li><p>Before each request, <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.before_request" target="_blank" rel="noreferrer">before_request()</a> functions are called. If one of these functions return a value, the other functions are skipped. The return value is treated as the response and the view function is not called.</p></li><li><p>If the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.before_request" target="_blank" rel="noreferrer">before_request()</a> functions did not return a response, the view function for the matched route is called and returns a response.</p></li><li><p>The return value of the view is converted into an actual response object and passed to the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.after_request" target="_blank" rel="noreferrer">after_request()</a> functions. Each function returns a modified or new response object.</p></li><li><p>After the response is returned, the contexts are popped, which calls the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.teardown_request" target="_blank" rel="noreferrer">teardown_request()</a> and <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.teardown_appcontext" target="_blank" rel="noreferrer">teardown_appcontext()</a> functions. These functions are called even if an unhandled exception was raised at any point above.</p></li></ol><p>If an exception is raised before the teardown functions, Flask tries to match it with an <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.errorhandler" target="_blank" rel="noreferrer">errorhandler()</a> function to handle the exception and return a response. If no error handler is found, or the handler itself raises an exception, Flask returns a generic <code>500 Internal Server Error</code> response. The teardown functions are still called, and are passed the exception object.</p><p>If debug mode is enabled, unhandled exceptions are not converted to a <code>500</code> response and instead are propagated to the WSGI server. This allows the development server to present the interactive debugger with the traceback.</p><h3 id="teardown-callbacks" tabindex="-1">Teardown Callbacks <a class="header-anchor" href="#teardown-callbacks" aria-label="Permalink to &quot;Teardown Callbacks&quot;">​</a></h3><p>The teardown callbacks are independent of the request dispatch, and are instead called by the contexts when they are popped. The functions are called even if there is an unhandled exception during dispatch, and for manually pushed contexts. This means there is no guarantee that any other parts of the request dispatch have run first. Be sure to write these functions in a way that does not depend on other callbacks and will not fail.</p><p>During testing, it can be useful to defer popping the contexts after the request ends, so that their data can be accessed in the test function. Use the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.test_client" target="_blank" rel="noreferrer">test_client()</a> as a <code>with</code> block to preserve the contexts until the <code>with</code> block exits.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Flask</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> request</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Flask</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__name__</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">during view</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">teardown_request</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">show_teardown</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">exception</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">after with block</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test_request_context</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">during with block</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># teardown functions are called after the context with block exits</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test_client</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># the contexts are not popped even though the request ended</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># the contexts are popped and teardown functions are called after</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># the client with block exits</span></span></code></pre></div><h3 id="signals" tabindex="-1">Signals <a class="header-anchor" href="#signals" aria-label="Permalink to &quot;Signals&quot;">​</a></h3><p>The following signals are sent:</p><ol><li><p><a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request_started" target="_blank" rel="noreferrer">request_started</a> is sent before the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.before_request" target="_blank" rel="noreferrer">before_request()</a> functions are called.</p></li><li><p><a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request_finished" target="_blank" rel="noreferrer">request_finished</a> is sent after the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.after_request" target="_blank" rel="noreferrer">after_request()</a> functions are called.</p></li><li><p><a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.got_request_exception" target="_blank" rel="noreferrer">got_request_exception</a> is sent when an exception begins to be handled, but before an <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.errorhandler" target="_blank" rel="noreferrer">errorhandler()</a> is looked up or called.</p></li><li><p><a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request_tearing_down" target="_blank" rel="noreferrer">request_tearing_down</a> is sent after the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.teardown_request" target="_blank" rel="noreferrer">teardown_request()</a> functions are called.</p></li></ol><h2 id="notes-on-proxies" tabindex="-1">Notes On Proxies <a class="header-anchor" href="#notes-on-proxies" aria-label="Permalink to &quot;Notes On Proxies&quot;">​</a></h2><p>Some of the objects provided by Flask are proxies to other objects. The proxies are accessed in the same way for each worker thread, but point to the unique object bound to each worker behind the scenes as described on this page.</p><p>Most of the time you don’t have to care about that, but there are some exceptions where it is good to know that this object is actually a proxy:</p><ul><li><p>The proxy objects cannot fake their type as the actual object types. If you want to perform instance checks, you have to do that on the object being proxied.</p></li><li><p>The reference to the proxied object is needed in some situations, such as sending <a href="https://flask.palletsprojects.com/en/2.3.x/signals/" target="_blank" rel="noreferrer">Signals</a> or passing data to a background thread.</p></li></ul><p>If you need to access the underlying object that is proxied, use the · method:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> current_app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_get_current_object</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">my_signal</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,41),r=[o];function l(p,c,i,h,d,f){return a(),s("div",null,r)}const F=e(n,[["render",l]]);export{y as __pageData,F as default};