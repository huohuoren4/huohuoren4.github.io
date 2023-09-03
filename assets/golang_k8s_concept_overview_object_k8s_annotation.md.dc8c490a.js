import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.01af844e.js";const h=JSON.parse('{"title":"Annotations","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/overview/object_k8s/annotation.md","filePath":"golang/k8s/concept/overview/object_k8s/annotation.md","lastUpdated":1693758126000}'),o={name:"golang/k8s/concept/overview/object_k8s/annotation.md"},t=e(`<h1 id="annotations" tabindex="-1">Annotations <a class="header-anchor" href="#annotations" aria-label="Permalink to &quot;Annotations&quot;">​</a></h1><p>You can use Kubernetes annotations to attach arbitrary non-identifying metadata to <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/#kubernetes-objects" target="_blank" rel="noreferrer">objects</a>. Clients such as tools and libraries can retrieve this metadata.</p><h2 id="attaching-metadata-to-objects" tabindex="-1">Attaching metadata to objects <a class="header-anchor" href="#attaching-metadata-to-objects" aria-label="Permalink to &quot;Attaching metadata to objects&quot;">​</a></h2><p>You can use either labels or annotations to attach metadata to Kubernetes objects. Labels can be used to select objects and to find collections of objects that satisfy certain conditions. In contrast, annotations are not used to identify and select objects. The metadata in an annotation can be small or large, structured or unstructured, and can include characters not permitted by labels.</p><p>Annotations, like labels, are key/value maps:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;metadata&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;annotations&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;key1&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;value1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;key2&quot;</span><span style="color:#E1E4E8;"> : </span><span style="color:#9ECBFF;">&quot;value2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;metadata&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;annotations&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;key1&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;value1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;key2&quot;</span><span style="color:#24292E;"> : </span><span style="color:#032F62;">&quot;value2&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>The keys and the values in the map must be strings. In other words, you cannot use numeric, boolean, list or other types for either the keys or the values.</p></div><p>Here are some examples of information that could be recorded in annotations:</p><ul><li><p>Fields managed by a declarative configuration layer. Attaching these fields as annotations distinguishes them from default values set by clients or servers, and from auto-generated fields and fields set by auto-sizing or auto-scaling systems.</p></li><li><p>Build, release, or image information like timestamps, release IDs, git branch, PR numbers, image hashes, and registry address.</p></li><li><p>Pointers to logging, monitoring, analytics, or audit repositories.</p></li><li><p>Client library or tool information that can be used for debugging purposes: for example, name, version, and build information.</p></li><li><p>User or tool/system provenance information, such as URLs of related objects from other ecosystem components.</p></li><li><p>Lightweight rollout tool metadata: for example, config or checkpoints.</p></li><li><p>Phone or pager numbers of persons responsible, or directory entries that specify where that information can be found, such as a team web site.</p></li><li><p>Directives from the end-user to the implementations to modify behavior or engage non-standard features.</p></li></ul><p>Instead of using annotations, you could store this type of information in an external database or directory, but that would make it much harder to produce shared client libraries and tools for deployment, management, introspection, and the like.</p><h2 id="syntax-and-character-set" tabindex="-1">Syntax and character set <a class="header-anchor" href="#syntax-and-character-set" aria-label="Permalink to &quot;Syntax and character set&quot;">​</a></h2><p>Annotations are key/value pairs. Valid annotation keys have two segments: an optional prefix and name, separated by a slash (<code>/</code>). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (<code>[a-z0-9A-Z]</code>) with dashes (<code>-</code>), underscores (<code>_</code>), dots (<code>.</code>), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (<code>.</code>), not longer than 253 characters in total, followed by a slash (<code>/</code>).</p><p>If the prefix is omitted, the annotation Key is presumed to be private to the user. Automated system components (e.g. <code>kube-scheduler</code>, <code>kube-controller-manager</code>, <code>kube-apiserver</code>, <code>kubectl</code>, or other third-party automation) which add annotations to end-user objects must specify a prefix.</p><p>The <code>kubernetes.io/</code> and <code>k8s.io/</code> prefixes are reserved for Kubernetes core components.</p><p>For example, here&#39;s a manifest for a Pod that has the annotation <code>imageregistry: https://hub.docker.com/</code> :</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Pod</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">annotations-demo</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">annotations</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">imageregistry</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://hub.docker.com/&quot;</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">containers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx:1.14.2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">containerPort</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Pod</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">annotations-demo</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">annotations</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">imageregistry</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://hub.docker.com/&quot;</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">containers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx:1.14.2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">containerPort</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">80</span></span></code></pre></div><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><p>Learn more about <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" target="_blank" rel="noreferrer">Labels and Selectors</a>.</p>`,18),l=[t];function p(r,c,i,d,y,E){return a(),n("div",null,l)}const m=s(o,[["render",p]]);export{h as __pageData,m as default};
