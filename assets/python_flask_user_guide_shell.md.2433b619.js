import{_ as e,o as s,c as t,Q as a}from"./chunks/framework.01af844e.js";const y=JSON.parse('{"title":"Working with the Shell","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/shell.md","filePath":"python/flask/user_guide/shell.md","lastUpdated":1693328004000}'),o={name:"python/flask/user_guide/shell.md"},n=a(`<h1 id="working-with-the-shell" tabindex="-1">Working with the Shell <a class="header-anchor" href="#working-with-the-shell" aria-label="Permalink to &quot;Working with the Shell {#working-with-the-shell}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Changelog</p><p><em>New in version 0.3.</em></p></div><p>One of the reasons everybody loves Python is the interactive shell. It basically allows you to execute Python commands in real time and immediately get results back. Flask itself does not come with an interactive shell, because it does not require any specific setup upfront, just import your application and start playing around.</p><p>There are however some handy helpers to make playing around in the shell a more pleasant experience. The main issue with interactive console sessions is that you’re not triggering a request like a browser does which means that <code>g</code>, <code>request</code> and others are not available. But the code you want to test might depend on them, so what can you do?</p><p>This is where some helper functions come in handy. Keep in mind however that these functions are not only there for interactive shell usage, but also for unit testing and other situations that require a faked request context.</p><p>Generally it’s recommended that you read The <a href="/python/flask/user_guide/request_context#the-request-context">Request Context</a> first.</p><h2 id="command-line-interface" tabindex="-1">Command Line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command Line Interface {#command-line-interface}&quot;">​</a></h2><p>Starting with Flask 0.11 the recommended way to work with the shell is the <code>flask shell</code> command which does a lot of this automatically for you. For instance the shell is automatically initialized with a loaded application context.</p><p>For more information see <a href="/python/flask/user_guide/cmd_interface#command-line-interface">Command Line Interface</a>.</p><h2 id="creating-a-request-context" tabindex="-1">Creating a Request Context <a class="header-anchor" href="#creating-a-request-context" aria-label="Permalink to &quot;Creating a Request Context {#creating-a-request-context}&quot;">​</a></h2><p>The easiest way to create a proper request context from the shell is by using the <code>test_request_context</code> method which creates us a <code>RequestContext</code>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> ctx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.test_request_context()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> ctx </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.test_request_context()</span></span></code></pre></div><p>Normally you would use the <code>with</code> statement to make this request object active, but in the shell it’s easier to use the <code>push()</code> and <code>pop()</code> methods by hand:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> ctx.push()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> ctx.push()</span></span></code></pre></div><p>From that point onwards you can work with the request object until you call <code>pop</code>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> ctx.pop()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> ctx.pop()</span></span></code></pre></div><h2 id="firing-before-after-request" tabindex="-1">Firing Before/After Request <a class="header-anchor" href="#firing-before-after-request" aria-label="Permalink to &quot;Firing Before/After Request {#firing-before-after-request}&quot;">​</a></h2><p>By just creating a request context, you still don’t have run the code that is normally run before a request. This might result in your database being unavailable if you are connecting to the database in a before-request callback or the current user not being stored on the <code>g</code> object etc.</p><p>This however can easily be done yourself. Just call <code>preprocess_request()</code>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> ctx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.test_request_context()</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> ctx.push()</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> app.preprocess_request()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> ctx </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.test_request_context()</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> ctx.push()</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> app.preprocess_request()</span></span></code></pre></div><p>Keep in mind that the <code>preprocess_request()</code> function might return a response object, in that case just ignore it.</p><p>To shutdown a request, you need to trick a bit before the after request functions (triggered by <code>process_response()</code>) operate on a response object:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> app.process_response(app.response_class())</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Response </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> bytes [</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">OK</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> ctx.pop()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> app.process_response(app.response_class())</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Response </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> bytes [</span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OK</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> ctx.pop()</span></span></code></pre></div><p>The functions registered as <code>teardown_request()</code> are automatically called when the context is popped. So this is the perfect place to automatically tear down resources that were needed by the request context (such as database connections).</p><h2 id="further-improving-the-shell-experience" tabindex="-1">Further Improving the Shell Experience <a class="header-anchor" href="#further-improving-the-shell-experience" aria-label="Permalink to &quot;Further Improving the Shell Experience {#further-improving-the-shell-experience}&quot;">​</a></h2><p>If you like the idea of experimenting in a shell, create yourself a module with stuff you want to star import into your interactive session. There you could also define some more helper methods for common things such as initializing the database, dropping tables etc.</p><p>Just put them into a module (like <code>shelltools</code>) and import from there:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> shelltools </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> shelltools </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span></code></pre></div>`,28),p=[n];function l(r,c,i,h,d,u){return s(),t("div",null,p)}const m=e(o,[["render",l]]);export{y as __pageData,m as default};