import{_ as s,o as e,c as o,V as n}from"./chunks/framework.48c56699.js";const h=JSON.parse('{"title":"View Function Options","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/view_function.md","filePath":"python/flask/api_reference/view_function.md"}'),a={name:"python/flask/api_reference/view_function.md"},t=n(`<h1 id="view-function-options" tabindex="-1">View Function Options <a class="header-anchor" href="#view-function-options" aria-label="Permalink to &quot;View Function Options&quot;">​</a></h1><p>For internal usage the view functions can have some attributes attached to customize behavior the view function would normally not have control over. The following attributes can be provided optionally to either override some defaults to <code>add_url_rule()</code> or general behavior:</p><ul><li><p><code>__name__</code>: The name of a function is by default used as endpoint. If endpoint is provided explicitly this value is used. Additionally this will be prefixed with the name of the blueprint by default which cannot be customized from the function itself.</p></li><li><p><code>methods</code>: If methods are not provided when the URL rule is added, Flask will look on the view function object itself if a methods attribute exists. If it does, it will pull the information for the methods from there.</p></li><li><p><code>provide_automatic_options</code>: if this attribute is set Flask will either force enable or disable the automatic implementation of the HTTP <code>OPTIONS</code> response. This can be useful when working with decorators that want to customize the <code>OPTIONS</code> response on a per-view basis.</p></li><li><p><code>required_methods</code>: if this attribute is set, Flask will always add these methods when registering a URL rule even if the methods were explicitly overridden in the <code>route()</code> call.</p></li></ul><p>Full example:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">method</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># custom options handling here</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">provide_automatic_options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">methods</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_url_rule</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> index</span><span style="color:#89DDFF;">)</span></span></code></pre></div><details class="details custom-block"><summary>Changelog</summary><p><em>New in version 0.8</em>: The <code>provide_automatic_options</code> functionality was added.</p></details>`,6),l=[t];function p(i,c,r,d,D,y){return e(),o("div",null,l)}const u=s(a,[["render",p]]);export{h as __pageData,u as default};
