import{_ as e,o as t,c as a,V as o}from"./chunks/framework.48c56699.js";const f=JSON.parse('{"title":"Useful Internals","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/useful_internal.md","filePath":"python/flask/api_reference/useful_internal.md"}'),s={name:"python/flask/api_reference/useful_internal.md"},i=o('<h1 id="useful-internals" tabindex="-1">Useful Internals <a class="header-anchor" href="#useful-internals" aria-label="Permalink to &quot;Useful Internals&quot;">​</a></h1><h2 id="class-flask-ctx-requestcontext-app-environ-request-none-session-none" tabindex="-1"><code>class</code> flask.ctx.RequestContext(<code>app, environ, request=None, session=None</code>) <a class="header-anchor" href="#class-flask-ctx-requestcontext-app-environ-request-none-session-none" aria-label="Permalink to &quot;`class` flask.ctx.RequestContext(`app, environ, request=None, session=None`)&quot;">​</a></h2><p>The request context contains per-request information. The Flask app creates and pushes it at the beginning of the request, then pops it at the end of the request. It will create the URL adapter and request object for the WSGI environment provided.</p><p>Do not attempt to use this class directly, instead use <code>test_request_context()</code> and <code>request_context()</code> to create this object.</p><p>When the request context is popped, it will evaluate all the functions registered on the application for teardown execution (<code>teardown_request()</code>).</p><p>The request context is automatically popped at the end of the request. When using the interactive debugger, the context will be restored so <code>request</code> is still accessible. Similarly, the test client can preserve the context after the request ends. However, teardown functions may already have closed some resources such as database connections.</p><ul><li><p><em>Parameters</em>:</p><ul><li><p><code>app (Flask)</code> –</p></li><li><p><code>environ (dict)</code> –</p></li><li><p><code>request (Request | None)</code> –</p></li><li><p><code>session (SessionMixin | None)</code> –</p></li></ul></li><li><h3 id="copy" tabindex="-1">copy() <a class="header-anchor" href="#copy" aria-label="Permalink to &quot;copy()&quot;">​</a></h3><p>Creates a copy of this request context with the same request object. This can be used to move a request context to a different greenlet. Because the actual request object is the same this cannot be used to move a request context to a different thread unless access to the request object is locked.</p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 1.1</em>: The current session object is used instead of reloading the original data. This prevents <code>flask.session</code> pointing to an out-of-date object.</p><p><em>New in version 0.10.</em></p></details><p><em>Return type</em>: <code>RequestContext</code></p></li><li><h3 id="match-request" tabindex="-1">match_request() <a class="header-anchor" href="#match-request" aria-label="Permalink to &quot;match_request()&quot;">​</a></h3><p>Can be overridden by a subclass to hook into the matching of the request.</p><p><em>Return type</em>: <code>None</code></p></li><li><h3 id="pop-exc-object-object" tabindex="-1">pop(<code>exc=&lt;object object&gt;</code>) <a class="header-anchor" href="#pop-exc-object-object" aria-label="Permalink to &quot;pop(`exc=&lt;object object&gt;`)&quot;">​</a></h3><p>Pops the request context and unbinds it by doing that. This will also trigger the execution of functions registered by the <code>teardown_request()</code> decorator.</p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 0.9</em>: Added the exc argument.</p></details><p><em>Parameters</em>:</p><ul><li><code>exc (BaseException | None)</code> –</li></ul><p><em>Return type</em>: <code>None</code></p></li></ul><h2 id="flask-globals-request-ctx" tabindex="-1">flask.globals.request_ctx <a class="header-anchor" href="#flask-globals-request-ctx" aria-label="Permalink to &quot;flask.globals.request_ctx&quot;">​</a></h2><p>The current <code>RequestContext</code>. If a request context is not active, accessing attributes on this proxy will raise a <code>RuntimeError</code>.</p><p>This is an internal object that is essential to how Flask handles requests. Accessing this should not be needed in most cases. Most likely you want request and session instead.</p><h2 id="class-flask-ctx-appcontext-app" tabindex="-1">class flask.ctx.AppContext(<code>app</code>) <a class="header-anchor" href="#class-flask-ctx-appcontext-app" aria-label="Permalink to &quot;class flask.ctx.AppContext(`app`)&quot;">​</a></h2><p>The app context contains application-specific information. An app context is created and pushed at the beginning of each request if one is not already active. An app context is also pushed when running CLI commands.</p><ul><li><p><em>Parameters</em>:</p><ul><li><code>app (Flask)</code> –</li></ul></li><li><h3 id="pop-exc-object-object-1" tabindex="-1">pop(<code>exc=&lt;object object&gt;</code>) <a class="header-anchor" href="#pop-exc-object-object-1" aria-label="Permalink to &quot;pop(`exc=&lt;object object&gt;`)&quot;">​</a></h3><p>Pops the app context.</p><p><em>Parameters</em>:</p><ul><li><code>exc (BaseException | None)</code> –</li></ul><p><em>Return type</em>: <code>None</code></p></li><li><h3 id="push" tabindex="-1">push() <a class="header-anchor" href="#push" aria-label="Permalink to &quot;push()&quot;">​</a></h3><p>Binds the app context to the current context.</p><p><em>Return type</em>: <code>None</code></p></li></ul><h2 id="flask-globals-app-ctx" tabindex="-1">flask.globals.app_ctx <a class="header-anchor" href="#flask-globals-app-ctx" aria-label="Permalink to &quot;flask.globals.app_ctx&quot;">​</a></h2><p>The current <code>AppContext</code>. If an app context is not active, accessing attributes on this proxy will raise a <code>RuntimeError</code>.</p><p>This is an internal object that is essential to how <code>Flask</code> handles requests. Accessing this should not be needed in most cases. Most likely you want <code>current_app</code> and <code>g</code> instead.</p><h2 id="class-flask-blueprints-blueprintsetupstate-blueprint-app-options-first-registration" tabindex="-1"><code>class</code> flask.blueprints.BlueprintSetupState(<code>blueprint, app, options, first_registration</code>) <a class="header-anchor" href="#class-flask-blueprints-blueprintsetupstate-blueprint-app-options-first-registration" aria-label="Permalink to &quot;`class` flask.blueprints.BlueprintSetupState(`blueprint, app, options, first_registration`)&quot;">​</a></h2><p>Temporary holder object for registering a blueprint with the application. An instance of this class is created by the <code>make_setup_state()</code> method and later passed to all register callback functions.</p><ul><li><p><em>Parameters</em>:</p><ul><li><p><code>blueprint (Blueprint)</code> –</p></li><li><p><code>app (Flask)</code> –</p></li><li><p><code>options (t.Any)</code> –</p></li><li><p><code>first_registration (bool)</code> –</p></li></ul></li><li><h3 id="add-url-rule-rule-endpoint-none-view-func-none-options" tabindex="-1">add_url_rule(<code>rule, endpoint=None, view_func=None, **options</code>) <a class="header-anchor" href="#add-url-rule-rule-endpoint-none-view-func-none-options" aria-label="Permalink to &quot;add_url_rule(`rule, endpoint=None, view_func=None, **options`)&quot;">​</a></h3><p>A helper method to register a rule (and optionally a view function) to the application. The endpoint is automatically prefixed with the blueprint’s name.</p><p><em>Parameters</em>:</p><ul><li><p><code>rule (str)</code> –</p></li><li><p><code>endpoint (str | None)</code> –</p></li><li><p><code>view_func (Callable | None)</code> –</p></li><li><p><code>options (Any)</code> –</p></li></ul><p><em>Return type</em>: <code>None</code></p></li><li><h3 id="app" tabindex="-1">app <a class="header-anchor" href="#app" aria-label="Permalink to &quot;app&quot;">​</a></h3><p>a reference to the current application</p></li><li><h3 id="blueprint" tabindex="-1">blueprint <a class="header-anchor" href="#blueprint" aria-label="Permalink to &quot;blueprint&quot;">​</a></h3><p>a reference to the blueprint that created this setup state.</p></li><li><h3 id="first-registration" tabindex="-1">first_registration <a class="header-anchor" href="#first-registration" aria-label="Permalink to &quot;first_registration&quot;">​</a></h3><p>as blueprints can be registered multiple times with the application and not everything wants to be registered multiple times on it, this attribute can be used to figure out if the blueprint was registered in the past already.</p></li><li><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><p>a dictionary with all options that were passed to the <code>register_blueprint()</code> method.</p></li><li><h3 id="subdomain" tabindex="-1">subdomain <a class="header-anchor" href="#subdomain" aria-label="Permalink to &quot;subdomain&quot;">​</a></h3><p>The subdomain that the blueprint should be active for, None otherwise.</p></li><li><h3 id="url-defaults" tabindex="-1">url_defaults <a class="header-anchor" href="#url-defaults" aria-label="Permalink to &quot;url_defaults&quot;">​</a></h3><p>A dictionary with URL defaults that is added to each and every URL that was defined with the blueprint.</p></li><li><h3 id="url-prefix" tabindex="-1">url_prefix <a class="header-anchor" href="#url-prefix" aria-label="Permalink to &quot;url_prefix&quot;">​</a></h3><p>The prefix that should be used for all URLs defined on the blueprint.</p></li></ul>',19),n=[i];function r(l,c,p,d,u,h){return t(),a("div",null,n)}const m=e(s,[["render",r]]);export{f as __pageData,m as default};