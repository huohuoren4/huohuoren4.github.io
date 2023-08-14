import{_ as e,o as s,c as o,V as a}from"./chunks/framework.48c56699.js";const m=JSON.parse('{"title":"Sessions","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/session.md","filePath":"python/flask/api_reference/session.md"}'),t={name:"python/flask/api_reference/session.md"},n=a(`<h1 id="sessions" tabindex="-1">Sessions <a class="header-anchor" href="#sessions" aria-label="Permalink to &quot;Sessions&quot;">​</a></h1><p>If you have set <code>Flask.secret_key</code> (or configured it from <code>SECRET_KEY</code>) you can use sessions in Flask applications. A session makes it possible to remember information from one request to another. The way Flask does this is by using a signed cookie. The user can look at the session contents, but can’t modify it unless they know the secret key, so make sure to set that to something complex and unguessable.</p><p>To access the current session you can use the <code>session</code> object:</p><h2 id="class-flask-session" tabindex="-1"><code>class</code> flask.session <a class="header-anchor" href="#class-flask-session" aria-label="Permalink to &quot;\`class\` flask.session&quot;">​</a></h2><p>The session object works pretty much like an ordinary dict, with the difference that it keeps track of modifications.</p><p>This is a proxy. See <a href="https://flask.palletsprojects.com/en/2.3.x/reqcontext/#notes-on-proxies" target="_blank" rel="noreferrer">Notes On Proxies</a> for more information.</p><p>The following attributes are interesting:</p><ul><li><h3 id="new" tabindex="-1">new <a class="header-anchor" href="#new" aria-label="Permalink to &quot;new&quot;">​</a></h3><p><code>True</code> if the session is new, <code>False</code> otherwise.</p></li><li><h3 id="modified" tabindex="-1">modified <a class="header-anchor" href="#modified" aria-label="Permalink to &quot;modified&quot;">​</a></h3><p><code>True</code> if the session object detected a modification. Be advised that modifications on mutable structures are not picked up automatically, in that situation you have to explicitly set the attribute to <code>True</code> yourself. Here an example:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># this change is not picked up because a mutable object (here</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># a list) is changed.</span></span>
<span class="line"><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">objects</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">].</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">42</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># so mark it as modified yourself</span></span>
<span class="line"><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">modified</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span></code></pre></div></li><li><h3 id="permanent" tabindex="-1">permanent <a class="header-anchor" href="#permanent" aria-label="Permalink to &quot;permanent&quot;">​</a></h3><p>If set to <code>True</code> the session lives for <code>permanent_session_lifetime</code> seconds. The default is <code>31</code> days. If set to <code>False</code> (which is the default) the session will be deleted when the user closes the browser.</p></li></ul>`,8),i=[n];function l(c,r,p,d,h,f){return s(),o("div",null,i)}const y=e(t,[["render",l]]);export{m as __pageData,y as default};
