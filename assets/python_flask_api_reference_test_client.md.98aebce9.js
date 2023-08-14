import{_ as e,o as s,c as t,V as a}from"./chunks/framework.48c56699.js";const g=JSON.parse('{"title":"Test Client","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/test_client.md","filePath":"python/flask/api_reference/test_client.md"}'),o={name:"python/flask/api_reference/test_client.md"},n=a('<h1 id="test-client" tabindex="-1">Test Client <a class="header-anchor" href="#test-client" aria-label="Permalink to &quot;Test Client&quot;">​</a></h1><h2 id="class-flask-testing-flaskclient-args-kwargs" tabindex="-1"><code>class</code> flask.testing.FlaskClient(<code>*args, **kwargs</code>) <a class="header-anchor" href="#class-flask-testing-flaskclient-args-kwargs" aria-label="Permalink to &quot;`class` flask.testing.FlaskClient(`*args, **kwargs`)&quot;">​</a></h2><p>Works like a regular Werkzeug test client but has knowledge about Flask’s contexts to defer the cleanup of the request context until the end of a <code>with</code> block. For general information about how to use this class refer to <code>werkzeug.test.Client</code>.</p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 0.12</em>: <code>app.test_client()</code> includes preset default environment, which can be set after instantiation of the app.<code>test_client()</code> object in <code>client.environ_base</code>.</p></details><p>Basic usage is outlined in the <a href="https://flask.palletsprojects.com/en/2.3.x/testing/" target="_blank" rel="noreferrer">Testing Flask Applications</a> chapter.</p><ul><li><p><em>Parameters</em>:</p><ul><li><p><code>args (t.Any)</code> –</p></li><li><p><code>kwargs (t.Any)</code> –</p></li></ul></li><li><h3 id="open-args-buffered-false-follow-redirects-false-kwargs" tabindex="-1">open(<code>*args, buffered=False, follow_redirects=False, **kwargs</code>) <a class="header-anchor" href="#open-args-buffered-false-follow-redirects-false-kwargs" aria-label="Permalink to &quot;open(`*args, buffered=False, follow_redirects=False, **kwargs`)&quot;">​</a></h3><p>Generate an environ dict from the given arguments, make a request to the application using it, and return the response.</p><p><em>Parameters</em>:</p><ul><li><p><code>args (t.Any)</code> – Passed to <code>EnvironBuilder</code> to create the environ for the request. If a single arg is passed, it can be an existing <code>EnvironBuilder</code> or an environ dict.</p></li><li><p><code>buffered (bool)</code> – Convert the iterator returned by the app into a list. If the iterator has a <code>close()</code> method, it is called automatically.</p></li><li><p><code>follow_redirects (bool)</code> – Make additional requests to follow <code>HTTP</code> redirects until a non-redirect status is returned. <code>TestResponse.history</code> lists the intermediate responses.</p></li><li><p><code>kwargs (t.Any)</code> –</p></li></ul><p><em>Return type</em>: <code>TestResponse</code></p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 2.1</em>: Removed the <code>as_tuple</code> parameter.</p><p><em>Changed in version 2.0</em>: The request input stream is closed when calling <code>response.close()</code>. Input streams for redirects are automatically closed.</p><p><em>Changed in version 0.5</em>: If a dict is provided as file in the dict for the data parameter the content type has to be called <code>content_type</code> instead of <code>mimetype</code>. This change was made for consistency with <code>werkzeug.FileWrapper</code>.</p><p><em>Changed in version 0.5</em>: Added the <code>follow_redirects</code> parameter.</p></details></li><li><h3 id="session-transaction-args-kwargs" tabindex="-1">session_transaction(<code>*args, **kwargs</code>) <a class="header-anchor" href="#session-transaction-args-kwargs" aria-label="Permalink to &quot;session_transaction(`*args, **kwargs`)&quot;">​</a></h3><p>When used in combination with a <code>with</code> statement this opens a session transaction. This can be used to modify the session that the test client uses. Once the <code>with</code> block is left the session is stored back.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> client</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">session_transaction</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> session</span><span style="color:#89DDFF;">:</span></span>\n<span class="line"><span style="color:#A6ACCD;">    session</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42</span></span></code></pre></div><p>Internally this is implemented by going through a temporary test request context and since session handling could depend on request variables this function accepts the same arguments as <code>test_request_context()</code> which are directly passed through.</p><p><em>Parameters</em>:</p><ul><li><p><code>args (Any)</code> –</p></li><li><p><code>kwargs (Any)</code> –</p></li></ul><p><em>Return type</em>: <code>Generator[SessionMixin, None, None]</code></p></li></ul>',6),l=[n];function r(i,c,d,p,h,u){return s(),t("div",null,l)}const f=e(o,[["render",r]]);export{g as __pageData,f as default};
