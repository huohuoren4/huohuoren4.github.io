import{_ as s,o as a,c as n,X as e}from"./chunks/framework.6e839c56.js";const C=JSON.parse('{"title":"Signals","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/signal.md","filePath":"python/flask/api_reference/signal.md","lastUpdated":1693404008000}'),l={name:"python/flask/api_reference/signal.md"},o=e(`<h1 id="signals" tabindex="-1">Signals <a class="header-anchor" href="#signals" aria-label="Permalink to &quot;Signals {#signals}&quot;">​</a></h1><p>Signals are provided by the Blinker library. See <a href="/python/flask/user_guide/signal#signals">Signals</a> for an introduction.</p><h2 id="flask-template-rendered" tabindex="-1">flask.template_rendered <a class="header-anchor" href="#flask-template-rendered" aria-label="Permalink to &quot;flask.template_rendered&quot;">​</a></h2><p>This signal is sent when a template was successfully rendered. The signal is invoked with the instance of the template as <code>template</code> and the context as dictionary (named <code>context</code>).</p><p>Example subscriber:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log_template_renders</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">template</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    sender</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">debug</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Rendering template &quot;</span><span style="color:#F78C6C;">%s</span><span style="color:#C3E88D;">&quot; with context </span><span style="color:#F78C6C;">%s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                        template</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">or</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string template</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                        context</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> template_rendered</span></span>
<span class="line"><span style="color:#A6ACCD;">template_rendered</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">log_template_renders</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="flask-before-render-template" tabindex="-1">flask.before_render_template <a class="header-anchor" href="#flask-before-render-template" aria-label="Permalink to &quot;flask.before_render_template&quot;">​</a></h2><p>This signal is sent before template rendering process. The signal is invoked with the instance of the template as <code>template</code> and the context as dictionary (named <code>context</code>).</p><p>Example subscriber:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log_template_renders</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">template</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    sender</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">debug</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Rendering template &quot;</span><span style="color:#F78C6C;">%s</span><span style="color:#C3E88D;">&quot; with context </span><span style="color:#F78C6C;">%s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                        template</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;font-style:italic;">or</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string template</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                        context</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> before_render_template</span></span>
<span class="line"><span style="color:#A6ACCD;">before_render_template</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">log_template_renders</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="flask-request-started" tabindex="-1">flask.request_started <a class="header-anchor" href="#flask-request-started" aria-label="Permalink to &quot;flask.request_started&quot;">​</a></h2><p>This signal is sent when the request context is set up, before any request processing happens. Because the request context is already bound, the subscriber can access the request with the standard global proxies such as <code>request</code>.</p><p>Example subscriber:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log_request</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    sender</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">debug</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Request context is set up</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> request_started</span></span>
<span class="line"><span style="color:#A6ACCD;">request_started</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">log_request</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="flask-request-finished" tabindex="-1">flask.request_finished <a class="header-anchor" href="#flask-request-finished" aria-label="Permalink to &quot;flask.request_finished&quot;">​</a></h2><p>This signal is sent right before the response is sent to the client. It is passed the response to be sent named <code>response</code>.</p><p>Example subscriber:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log_response</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    sender</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">debug</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Request context is about to close down. </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">                        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Response: </span><span style="color:#F78C6C;">%s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> request_finished</span></span>
<span class="line"><span style="color:#A6ACCD;">request_finished</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">log_response</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="flask-got-request-exception" tabindex="-1">flask.got_request_exception <a class="header-anchor" href="#flask-got-request-exception" aria-label="Permalink to &quot;flask.got_request_exception&quot;">​</a></h2><p>This signal is sent when an unhandled exception happens during request processing, including when debugging. The exception is passed to the subscriber as <code>exception</code>.</p><p>This signal is not sent for <code>HTTPException</code>, or other exceptions that have error handlers registered, unless the exception was raised from an error handler.</p><p>This example shows how to do some extra logging if a theoretical <code>SecurityException</code> was raised:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> got_request_exception</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log_security_exception</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">exception</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">exception</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> SecurityException</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    security_logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exception</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;SecurityException at </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url</span><span style="color:#C792EA;">!r</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">exc_info</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">exception</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">got_request_exception</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">log_security_exception</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="flask-request-tearing-down" tabindex="-1">flask.request_tearing_down <a class="header-anchor" href="#flask-request-tearing-down" aria-label="Permalink to &quot;flask.request_tearing_down&quot;">​</a></h2><p>This signal is sent when the request is tearing down. This is always called, even if an exception is caused. Currently functions listening to this signal are called after the regular teardown handlers, but this is not something you can rely on.</p><p>Example subscriber:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">close_db_connection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> request_tearing_down</span></span>
<span class="line"><span style="color:#A6ACCD;">request_tearing_down</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">close_db_connection</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>As of Flask 0.9, this will also be passed an exc keyword argument that has a reference to the exception that caused the teardown if there was one.</p><h2 id="flask-appcontext-tearing-down" tabindex="-1">flask.appcontext_tearing_down <a class="header-anchor" href="#flask-appcontext-tearing-down" aria-label="Permalink to &quot;flask.appcontext_tearing_down&quot;">​</a></h2><p>This signal is sent when the app context is tearing down. This is always called, even if an exception is caused. Currently functions listening to this signal are called after the regular teardown handlers, but this is not something you can rely on.</p><p>Example subscriber:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">close_db_connection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> appcontext_tearing_down</span></span>
<span class="line"><span style="color:#A6ACCD;">appcontext_tearing_down</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">close_db_connection</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>This will also be passed an exc keyword argument that has a reference to the exception that caused the teardown if there was one.</p><h2 id="flask-appcontext-pushed" tabindex="-1">flask.appcontext_pushed <a class="header-anchor" href="#flask-appcontext-pushed" aria-label="Permalink to &quot;flask.appcontext_pushed&quot;">​</a></h2><p>This signal is sent when an application context is pushed. The sender is the application. This is usually useful for unittests in order to temporarily hook in information. For instance it can be used to set a resource early onto the g object.</p><p>Example usage:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> contextlib </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> contextmanager</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> appcontext_pushed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">contextmanager</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user_set</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">app</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">user</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handler</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">kwargs</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">user</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> appcontext_pushed</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connected_to</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">handler</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">yield</span></span>
<span class="line"><span style="color:#A6ACCD;">And </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> the testcode</span><span style="color:#89DDFF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_user_me</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user_set</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">john</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test_client</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        resp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/users/me</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">assert</span><span style="color:#A6ACCD;"> resp</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username=john</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.10.</em></p></details><h2 id="flask-appcontext-popped" tabindex="-1">flask.appcontext_popped <a class="header-anchor" href="#flask-appcontext-popped" aria-label="Permalink to &quot;flask.appcontext_popped&quot;">​</a></h2><p>This signal is sent when an application context is popped. The sender is the application. This usually falls in line with the <code>appcontext_tearing_down</code> signal.</p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.10.</em></p></details><h2 id="flask-message-flashed" tabindex="-1">flask.message_flashed <a class="header-anchor" href="#flask-message-flashed" aria-label="Permalink to &quot;flask.message_flashed&quot;">​</a></h2><p>This signal is sent when the application is flashing a message. The messages is sent as message keyword argument and the category as category.</p><p>Example subscriber:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">recorded </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">record</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">category</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;font-style:italic;">extra</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    recorded</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">((</span><span style="color:#82AAFF;">message</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> category</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> message_flashed</span></span>
<span class="line"><span style="color:#A6ACCD;">message_flashed</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">record</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> app</span><span style="color:#89DDFF;">)</span></span></code></pre></div><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.10.</em></p></details><h2 id="signals-signals-available" tabindex="-1">signals.signals_available <a class="header-anchor" href="#signals-signals-available" aria-label="Permalink to &quot;signals.signals_available&quot;">​</a></h2><p><em>Deprecated since version 2.3</em>: Will be removed in <code>Flask 2.4</code>. Signals are always available</p>`,48),p=[o];function t(c,r,i,y,F,D){return a(),n("div",null,p)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};