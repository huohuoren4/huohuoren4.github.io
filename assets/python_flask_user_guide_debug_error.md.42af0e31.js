import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.01af844e.js";const o="/assets/debugger_in_action.99250ab0.png",b=JSON.parse('{"title":"Debugging Application Errors","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/debug_error.md","filePath":"python/flask/user_guide/debug_error.md","lastUpdated":1693328004000}'),l={name:"python/flask/user_guide/debug_error.md"},r=n('<h1 id="debugging-application-errors" tabindex="-1">Debugging Application Errors <a class="header-anchor" href="#debugging-application-errors" aria-label="Permalink to &quot;Debugging Application Errors {#debugging-application-errors}&quot;">​</a></h1><h2 id="in-production" tabindex="-1">In Production <a class="header-anchor" href="#in-production" aria-label="Permalink to &quot;In Production {#in-production}&quot;">​</a></h2><p>Do not run the development server, or enable the built-in debugger, in a production environment. The debugger allows executing arbitrary Python code from the browser. It’s protected by a pin, but that should not be relied on for security.</p><p>Use an error logging tool, such as Sentry, as described in <a href="/python/flask/user_guide/handle_error#error-logging-tools">Error Logging Tools</a>, or enable logging and notifications as described in <a href="/python/flask/user_guide/logging#logging">Logging</a>.</p><p>If you have access to the server, you could add some code to start an external debugger if <code>request.remote_addr</code> matches your IP. Some IDE debuggers also have a remote mode so breakpoints on the server can be interacted with locally. Only enable a debugger temporarily.</p><h2 id="the-built-in-debugger" tabindex="-1">The Built-In Debugger <a class="header-anchor" href="#the-built-in-debugger" aria-label="Permalink to &quot;The Built-In Debugger {#the-built-in-debugger}&quot;">​</a></h2><p>The built-in Werkzeug development server provides a debugger which shows an interactive traceback in the browser when an unhandled error occurs during a request. This debugger should only be used during development.</p><p><img src="'+o+`" alt="debugger_in_action"></p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>The debugger allows executing arbitrary Python code from the browser. It is protected by a pin, but still represents a major security risk. Do not run the development server or debugger in a production environment.</p></div><p>The debugger is enabled by default when the development server is run in debug mode.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flask</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--debug</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flask</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--debug</span></span></code></pre></div><p>When running from Python code, passing <code>debug=True</code> enables debug mode, which is mostly equivalent.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">app.run(</span><span style="color:#FFAB70;">debug</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">app.run(</span><span style="color:#E36209;">debug</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">)</span></span></code></pre></div><p><a href="/python/flask/user_guide/develop_server#development-server">Development Server</a> and <a href="/python/flask/user_guide/cmd_interface#command-line-interface">Command Line Interface</a> have more information about running the debugger and debug mode. More information about the debugger can be found in the <a href="https://werkzeug.palletsprojects.com/debug/" target="_blank" rel="noreferrer">Werkzeug documentation</a>.</p><h2 id="external-debuggers" tabindex="-1">External Debuggers <a class="header-anchor" href="#external-debuggers" aria-label="Permalink to &quot;External Debuggers {#external-debuggers}&quot;">​</a></h2><p>External debuggers, such as those provided by IDEs, can offer a more powerful debugging experience than the built-in debugger. They can also be used to step through code during a request before an error is raised, or if no error is raised. Some even have a remote mode so you can debug code running on another machine.</p><p>When using an external debugger, the app should still be in debug mode, otherwise Flask turns unhandled errors into generic 500 error pages. However, the built-in debugger and reloader should be disabled so they don’t interfere with the external debugger.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flask</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hello</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--debug</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-debugger</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-reload</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flask</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hello</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--debug</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-debugger</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-reload</span></span></code></pre></div><p>When running from Python:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">app.run(</span><span style="color:#FFAB70;">debug</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">use_debugger</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">use_reloader</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">app.run(</span><span style="color:#E36209;">debug</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">, </span><span style="color:#E36209;">use_debugger</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span><span style="color:#24292E;">, </span><span style="color:#E36209;">use_reloader</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span><span style="color:#24292E;">)</span></span></code></pre></div><p>Disabling these isn’t required, an external debugger will continue to work with the following caveats.</p><ul><li><p>If the built-in debugger is not disabled, it will catch unhandled exceptions before the external debugger can.</p></li><li><p>If the reloader is not disabled, it could cause an unexpected reload if code changes during a breakpoint.</p></li><li><p>The development server will still catch unhandled exceptions if the built-in debugger is disabled, otherwise it would crash on any error. If you want that (and usually you don’t) pass <code>passthrough_errors=True</code> to <code>app.run</code>.</p></li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">app.run(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">debug</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">passthrough_errors</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">use_debugger</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">use_reloader</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">app.run(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">debug</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">, </span><span style="color:#E36209;">passthrough_errors</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">use_debugger</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span><span style="color:#24292E;">, </span><span style="color:#E36209;">use_reloader</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div>`,23),p=[r];function t(c,i,d,u,g,y){return s(),a("div",null,p)}const E=e(l,[["render",t]]);export{b as __pageData,E as default};
