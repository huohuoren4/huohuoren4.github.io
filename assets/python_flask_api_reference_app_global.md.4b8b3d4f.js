import{_ as e,o as a,c as t,X as o}from"./chunks/framework.b5656a4e.js";const f=JSON.parse('{"title":"Application Globals","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/app_global.md","filePath":"python/flask/api_reference/app_global.md","lastUpdated":1692979908000}'),l={name:"python/flask/api_reference/app_global.md"},s=o('<h1 id="application-globals" tabindex="-1">Application Globals <a class="header-anchor" href="#application-globals" aria-label="Permalink to &quot;Application Globals {#application-globals}&quot;">​</a></h1><p>To share data that is valid for one request only from one function to another, a global variable is not good enough because it would break in threaded environments. Flask provides you with a special object that ensures it is only valid for the active request and that will return different values for each request. In a nutshell: it does the right thing, like it does for <code>request</code> and <code>session</code>.</p><h2 id="flask-g" tabindex="-1">flask.g <a class="header-anchor" href="#flask-g" aria-label="Permalink to &quot;flask.g&quot;">​</a></h2><p>A namespace object that can store data during an <a href="https://flask.palletsprojects.com/en/2.3.x/appcontext/" target="_blank" rel="noreferrer">application context</a>. This is an instance of <code>Flask.app_ctx_globals_class</code>, which defaults to <code>ctx._AppCtxGlobals</code>.</p><p>This is a good place to store resources during a request. For example, a <code>before_request</code> function could load a user object from a session id, then set <code>g.user</code> to be used in the view function.</p><p>This is a proxy. See <a href="https://flask.palletsprojects.com/en/2.3.x/reqcontext/#notes-on-proxies" target="_blank" rel="noreferrer">Notes On Proxies</a> for more information.</p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 0.10</em>: Bound to the application context instead of the request context.</p></details><h2 id="class-flask-ctx-appctxglobals" tabindex="-1"><code>class</code> flask.ctx._AppCtxGlobals <a class="header-anchor" href="#class-flask-ctx-appctxglobals" aria-label="Permalink to &quot;`class` flask.ctx._AppCtxGlobals&quot;">​</a></h2><p>A plain object. Used as a namespace for storing data during an application context.</p><p>Creating an app context automatically creates this object, which is made available as the <code>g</code> proxy.</p><ul><li><h3 id="key-in-g" tabindex="-1"><code>&#39;key&#39; in g</code> <a class="header-anchor" href="#key-in-g" aria-label="Permalink to &quot;`&#39;key&#39; in g`&quot;">​</a></h3><p>Check whether an attribute is present.</p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.10.</em></p></details></li><li><h3 id="iter-g" tabindex="-1">iter(g) <a class="header-anchor" href="#iter-g" aria-label="Permalink to &quot;iter(g)&quot;">​</a></h3><p>Return an iterator over the attribute names.</p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.10.</em></p></details></li><li><h3 id="get-name-default-none" tabindex="-1">get(<code>name, default=None</code>) <a class="header-anchor" href="#get-name-default-none" aria-label="Permalink to &quot;get(`name, default=None`)&quot;">​</a></h3><p>Get an attribute by name, or a default value. Like <code>dict.get()</code>.</p><p><em>Parameters</em>:</p><ul><li><p><code>name (str)</code> – Name of attribute to get.</p></li><li><p><code>default (Any | None)</code> – Value to return if the attribute is not present.</p></li></ul><p><em>Return type</em>: <code>Any</code></p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.10.</em></p></details></li><li><h3 id="pop-name-default-object-object" tabindex="-1">pop(<code>name, default=&lt;object object&gt;</code>) <a class="header-anchor" href="#pop-name-default-object-object" aria-label="Permalink to &quot;pop(`name, default=&lt;object object&gt;`)&quot;">​</a></h3><p>Get and remove an attribute by name. Like <code>dict.pop()</code>.</p><p><em>Parameters</em>:</p><ul><li><p><code>name (str)</code> – Name of attribute to pop.</p></li><li><p><code>default (Any)</code> – Value to return if the attribute is not present, instead of raising a <code>KeyError</code>.</p></li></ul><p><em>Return type</em>: <code>Any</code></p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.11.</em></p></details></li><li><h3 id="setdefault-name-default-none" tabindex="-1">setdefault(<code>name, default=None</code>) <a class="header-anchor" href="#setdefault-name-default-none" aria-label="Permalink to &quot;setdefault(`name, default=None`)&quot;">​</a></h3><p>Get the value of an attribute if it is present, otherwise set and return a default value. Like <code>dict.setdefault()</code>.</p><p><em>Parameters</em>:</p><p><code>name (str)</code> – Name of attribute to get.</p><p><code>default (Any | None)</code> – Value to set and return if the attribute is not present.</p><p><em>Return type</em>: <code>Any</code></p><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.11.</em></p></details></li></ul>',11),n=[s];function i(r,c,d,p,u,m){return a(),t("div",null,n)}const b=e(l,[["render",i]]);export{f as __pageData,b as default};
