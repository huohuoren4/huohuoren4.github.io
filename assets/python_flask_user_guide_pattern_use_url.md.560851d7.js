import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d3b95951.js";const C=JSON.parse('{"title":"Using URL Processors","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/use_url.md","filePath":"python/flask/user_guide/pattern/use_url.md"}'),o={name:"python/flask/user_guide/pattern/use_url.md"},p=l(`<h1 id="using-url-processors" tabindex="-1">Using URL Processors <a class="header-anchor" href="#using-url-processors" aria-label="Permalink to &quot;Using URL Processors&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Changelog</p><p><em>New in version 0.7.</em></p></div><p>Flask 0.7 introduces the concept of URL processors. The idea is that you might have a bunch of resources with common parts in the URL that you don’t always explicitly want to provide. For instance you might have a bunch of URLs that have the language code in it but you don’t want to have to handle it in every single function yourself.</p><p>URL processors are especially helpful when combined with blueprints. We will handle both application specific URL processors here as well as blueprint specifics.</p><h2 id="internationalized-application-urls" tabindex="-1">Internationalized Application URLs <a class="header-anchor" href="#internationalized-application-urls" aria-label="Permalink to &quot;Internationalized Application URLs&quot;">​</a></h2><p>Consider an application like this:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Flask</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Flask</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__name__</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/&lt;lang_code&gt;/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">lang_code</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> lang_code</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/&lt;lang_code&gt;/about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">about</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">lang_code</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> lang_code</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span></code></pre></div><p>This is an awful lot of repetition as you have to handle the language code setting on the <code>g</code> object yourself in every single function. Sure, a decorator could be used to simplify this, but if you want to generate URLs from one function to another you would have to still provide the language code explicitly which can be annoying.</p><p>For the latter, this is where <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.url_defaults" target="_blank" rel="noreferrer">url_defaults()</a> functions come in. They can automatically inject values into a call to <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.url_for" target="_blank" rel="noreferrer">url_for()</a>. The code below checks if the language code is not yet in the dictionary of URL values and if the endpoint wants a value named <code>&#39;lang_code&#39;</code>:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url_defaults</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_language_code</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> values </span><span style="color:#89DDFF;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url_map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_endpoint_expecting</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        values</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span></span></code></pre></div><p>The method <a href="https://werkzeug.palletsprojects.com/en/2.3.x/routing/#werkzeug.routing.Map.is_endpoint_expecting" target="_blank" rel="noreferrer">is_endpoint_expecting()</a> of the URL map can be used to figure out if it would make sense to provide a language code for the given endpoint.</p><p>The reverse of that function are <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.url_value_preprocessor" target="_blank" rel="noreferrer">url_value_preprocessor()</a>s. They are executed right after the request was matched and can execute code based on the URL values. The idea is that they pull information out of the values dictionary and put it somewhere else:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url_value_preprocessor</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pull_lang_code</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> values</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">None)</span></span></code></pre></div><p>That way you no longer have to do the lang_code assignment to g in every function. You can further improve that by writing your own decorator that prefixes URLs with the language code, but the more beautiful solution is using a blueprint. Once the <code>&#39;lang_code&#39;</code> is popped from the values dictionary and it will no longer be forwarded to the view function reducing the code to this:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Flask</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Flask</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__name__</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url_defaults</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_language_code</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> values </span><span style="color:#89DDFF;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url_map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_endpoint_expecting</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        values</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url_value_preprocessor</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pull_lang_code</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> values</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">None)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/&lt;lang_code&gt;/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/&lt;lang_code&gt;/about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">about</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span></code></pre></div><h2 id="internationalized-blueprint-urls" tabindex="-1">Internationalized Blueprint URLs <a class="header-anchor" href="#internationalized-blueprint-urls" aria-label="Permalink to &quot;Internationalized Blueprint URLs&quot;">​</a></h2><p>Because blueprints can automatically prefix all URLs with a common string it’s easy to automatically do that for every function. Furthermore blueprints can have per-blueprint URL processors which removes a whole lot of logic from the <a href="https://flask.palletsprojects.com/en/2.3.x/api/#flask.Flask.url_defaults" target="_blank" rel="noreferrer">url_defaults()</a> function because it no longer has to check if the URL is really interested in a <code>&#39;lang_code&#39;</code> parameter:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Blueprint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">bp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Blueprint</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">frontend</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">__name__</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">url_prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/&lt;lang_code&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url_defaults</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_language_code</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    values</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setdefault</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">url_value_preprocessor</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pull_lang_code</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">values</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    g</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">lang_code</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> values</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang_code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/about</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">about</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span></code></pre></div>`,18),e=[p];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
