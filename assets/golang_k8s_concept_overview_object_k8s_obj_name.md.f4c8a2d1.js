import{_ as e,o as a,c as s,Q as n}from"./chunks/framework.01af844e.js";const b=JSON.parse('{"title":"Object Names and IDs","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/overview/object_k8s/obj_name.md","filePath":"golang/k8s/concept/overview/object_k8s/obj_name.md","lastUpdated":1694020305000}'),t={name:"golang/k8s/concept/overview/object_k8s/obj_name.md"},o=n(`<h1 id="object-names-and-ids" tabindex="-1">Object Names and IDs <a class="header-anchor" href="#object-names-and-ids" aria-label="Permalink to &quot;Object Names and IDs&quot;">​</a></h1><p>Each object in your cluster has a <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names" target="_blank" rel="noreferrer">Name</a> that is unique for that type of resource. Every Kubernetes object also has a <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids" target="_blank" rel="noreferrer">UID</a> that is unique across your whole cluster.</p><p>For example, you can only have one Pod named <code>myapp-1234</code> within the same <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/" target="_blank" rel="noreferrer">namespace</a>, but you can have one Pod and one Deployment that are each named <code>myapp-1234</code>.</p><p>For non-unique user-provided attributes, Kubernetes provides <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" target="_blank" rel="noreferrer">labels</a> and <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/" target="_blank" rel="noreferrer">annotations</a>.</p><h2 id="names" tabindex="-1">Names <a class="header-anchor" href="#names" aria-label="Permalink to &quot;Names&quot;">​</a></h2><p>A client-provided string that refers to an object in a resource URL, such as <code>/api/v1/pods/some-name</code>.</p><p>Only one object of a given kind can have a given name at a time. However, if you delete the object, you can make a new object with the same name.</p><p>Names must be unique across all <a href="https://kubernetes.io/docs/concepts/overview/kubernetes-api/#api-groups-and-versioning" target="_blank" rel="noreferrer">API versions</a> of the same resource. API resources are distinguished by their API group, resource type, namespace (for namespaced resources), and name. In other words, API version is irrelevant in this context.</p><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>In cases when objects represent a physical entity, like a Node representing a physical host, when the host is re-created under the same name without deleting and re-creating the Node, Kubernetes treats the new host as the old one, which may lead to inconsistencies.</p></div><p>Below are four types of commonly used name constraints for resources.</p><h3 id="dns-subdomain-names" tabindex="-1">DNS Subdomain Names <a class="header-anchor" href="#dns-subdomain-names" aria-label="Permalink to &quot;DNS Subdomain Names&quot;">​</a></h3><p>Most resource types require a name that can be used as a DNS subdomain name as defined in <a href="https://tools.ietf.org/html/rfc1123" target="_blank" rel="noreferrer">RFC 1123</a>. This means the name must:</p><ul><li>contain no more than 253 characters</li><li>contain only lowercase alphanumeric characters, &#39;-&#39; or &#39;.&#39;</li><li>start with an alphanumeric character</li><li>end with an alphanumeric character</li></ul><h3 id="rfc-1123-label-names" tabindex="-1">RFC 1123 Label Names <a class="header-anchor" href="#rfc-1123-label-names" aria-label="Permalink to &quot;RFC 1123 Label Names&quot;">​</a></h3><p>Some resource types require their names to follow the DNS label standard as defined in <a href="https://tools.ietf.org/html/rfc1123" target="_blank" rel="noreferrer">RFC 1123</a>. This means the name must:</p><ul><li>contain at most 63 characters</li><li>contain only lowercase alphanumeric characters or &#39;-&#39;</li><li>start with an alphanumeric character</li><li>end with an alphanumeric character</li></ul><h3 id="rfc-1035-label-names" tabindex="-1">RFC 1035 Label Names <a class="header-anchor" href="#rfc-1035-label-names" aria-label="Permalink to &quot;RFC 1035 Label Names&quot;">​</a></h3><p>Some resource types require their names to follow the DNS label standard as defined in <a href="https://tools.ietf.org/html/rfc1035" target="_blank" rel="noreferrer">RFC 1035</a>. This means the name must:</p><ul><li>contain at most 63 characters</li><li>contain only lowercase alphanumeric characters or &#39;-&#39;</li><li>start with an alphabetic character</li><li>end with an alphanumeric character</li></ul><h3 id="path-segment-names" tabindex="-1">Path Segment Names <a class="header-anchor" href="#path-segment-names" aria-label="Permalink to &quot;Path Segment Names&quot;">​</a></h3><p>Some resource types require their names to be able to be safely encoded as a path segment. In other words, the name may not be &quot;.&quot; or &quot;..&quot; and the name may not contain &quot;/&quot; or &quot;%&quot;.</p><p>Here&#39;s an example manifest for a Pod named <code>nginx-demo</code>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Pod</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx-demo</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">containers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx:1.14.2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">containerPort</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Pod</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx-demo</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">containers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx:1.14.2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">containerPort</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">80</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>Some resource types have additional restrictions on their names.</p></div><h2 id="uids" tabindex="-1">UIDs <a class="header-anchor" href="#uids" aria-label="Permalink to &quot;UIDs&quot;">​</a></h2><p>A Kubernetes systems-generated string to uniquely identify objects.</p><p>Every object created over the whole lifetime of a Kubernetes cluster has a distinct UID. It is intended to distinguish between historical occurrences of similar entities.</p><p>Kubernetes UIDs are universally unique identifiers (also known as UUIDs). UUIDs are standardized as ISO/IEC 9834-8 and as ITU-T X.667.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><ul><li>Read about <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/" target="_blank" rel="noreferrer">labels</a> and <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/" target="_blank" rel="noreferrer">annotations</a> in Kubernetes.</li><li>See the <a href="https://git.k8s.io/design-proposals-archive/architecture/identifiers.md" target="_blank" rel="noreferrer">Identifiers and Names in Kubernetes</a> design document.</li></ul>`,30),r=[o];function l(i,c,p,h,d,m){return a(),s("div",null,r)}const y=e(t,[["render",l]]);export{b as __pageData,y as default};
