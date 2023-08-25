import{_ as e,o as t,c as s,X as a}from"./chunks/framework.b5656a4e.js";const g=JSON.parse('{"title":"Working with the Shell","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/shell.md","filePath":"python/flask/user_guide/shell.md","lastUpdated":1692979908000}'),o={name:"python/flask/user_guide/shell.md"},n=a(`<h1 id="working-with-the-shell" tabindex="-1">Working with the Shell <a class="header-anchor" href="#working-with-the-shell" aria-label="Permalink to &quot;Working with the Shell {#working-with-the-shell}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Changelog</p><p><em>New in version 0.3.</em></p></div><p>One of the reasons everybody loves Python is the interactive shell. It basically allows you to execute Python commands in real time and immediately get results back. Flask itself does not come with an interactive shell, because it does not require any specific setup upfront, just import your application and start playing around.</p><p>There are however some handy helpers to make playing around in the shell a more pleasant experience. The main issue with interactive console sessions is that you’re not triggering a request like a browser does which means that <code>g</code>, <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.request" target="_blank" rel="noreferrer">request</a> and others are not available. But the code you want to test might depend on them, so what can you do?</p><p>This is where some helper functions come in handy. Keep in mind however that these functions are not only there for interactive shell usage, but also for unit testing and other situations that require a faked request context.</p><p>Generally it’s recommended that you read The <a href="https://flask.palletsprojects.com/en/2.3.x/reqcontext/" target="_blank" rel="noreferrer">Request Context</a> first.</p><h2 id="command-line-interface" tabindex="-1">Command Line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command Line Interface {#command-line-interface}&quot;">​</a></h2><p>Starting with Flask 0.11 the recommended way to work with the shell is the <code>flask shell</code> command which does a lot of this automatically for you. For instance the shell is automatically initialized with a loaded application context.</p><p>For more information see <a href="https://flask.palletsprojects.com/en/2.3.x/cli/" target="_blank" rel="noreferrer">Command Line Interface</a>.</p><h2 id="creating-a-request-context" tabindex="-1">Creating a Request Context <a class="header-anchor" href="#creating-a-request-context" aria-label="Permalink to &quot;Creating a Request Context {#creating-a-request-context}&quot;">​</a></h2><p>The easiest way to create a proper request context from the shell is by using the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.test_request_context" target="_blank" rel="noreferrer">test_request_context</a> method which creates us a <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.ctx.RequestContext" target="_blank" rel="noreferrer">RequestContext</a>:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test_request_context</span><span style="color:#89DDFF;">()</span></span></code></pre></div><p>Normally you would use the <code>with</code> statement to make this request object active, but in the shell it’s easier to use the <code>push()</code> and <code>pop()</code> methods by hand:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">()</span></span></code></pre></div><p>From that point onwards you can work with the request object until you call <code>pop</code>:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">()</span></span></code></pre></div><h2 id="firing-before-after-request" tabindex="-1">Firing Before/After Request <a class="header-anchor" href="#firing-before-after-request" aria-label="Permalink to &quot;Firing Before/After Request {#firing-before-after-request}&quot;">​</a></h2><p>By just creating a request context, you still don’t have run the code that is normally run before a request. This might result in your database being unavailable if you are connecting to the database in a before-request callback or the current user not being stored on the <code>g</code> object etc.</p><p>This however can easily be done yourself. Just call <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.preprocess_request" target="_blank" rel="noreferrer">preprocess_request()</a>:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test_request_context</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preprocess_request</span><span style="color:#89DDFF;">()</span></span></code></pre></div><p>Keep in mind that the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.preprocess_request" target="_blank" rel="noreferrer">preprocess_request()</a> function might return a response object, in that case just ignore it.</p><p>To shutdown a request, you need to trick a bit before the after request functions (triggered by <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.process_response" target="_blank" rel="noreferrer">process_response()</a>) operate on a response object:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">process_response</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">response_class</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Response </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> bytes </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> OK</span><span style="color:#89DDFF;">]&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">()</span></span></code></pre></div><p>The functions registered as <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.teardown_request" target="_blank" rel="noreferrer">teardown_request()</a> are automatically called when the context is popped. So this is the perfect place to automatically tear down resources that were needed by the request context (such as database connections).</p><h2 id="further-improving-the-shell-experience" tabindex="-1">Further Improving the Shell Experience <a class="header-anchor" href="#further-improving-the-shell-experience" aria-label="Permalink to &quot;Further Improving the Shell Experience {#further-improving-the-shell-experience}&quot;">​</a></h2><p>If you like the idea of experimenting in a shell, create yourself a module with stuff you want to star import into your interactive session. There you could also define some more helper methods for common things such as initializing the database, dropping tables etc.</p><p>Just put them into a module (like <code>shelltools</code>) and import from there:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> shelltools </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span></code></pre></div>`,28),l=[n];function r(p,c,i,h,u,d){return t(),s("div",null,l)}const m=e(o,[["render",r]]);export{g as __pageData,m as default};