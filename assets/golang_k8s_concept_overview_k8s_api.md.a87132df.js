import{_ as e,o as s,c as t,Q as a}from"./chunks/framework.01af844e.js";const g=JSON.parse('{"title":"The Kubernetes API","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/overview/k8s_api.md","filePath":"golang/k8s/concept/overview/k8s_api.md","lastUpdated":1694020305000}'),o={name:"golang/k8s/concept/overview/k8s_api.md"},n=a(`<h1 id="the-kubernetes-api" tabindex="-1">The Kubernetes API <a class="header-anchor" href="#the-kubernetes-api" aria-label="Permalink to &quot;The Kubernetes API&quot;">​</a></h1><p>The core of Kubernetes control plane is the API server. The API server exposes an HTTP API that lets end users, different parts of your cluster, and external components communicate with one another.</p><p>The Kubernetes API lets you query and manipulate the state of API objects in Kubernetes (for example: Pods, Namespaces, ConfigMaps, and Events).</p><p>Most operations can be performed through the <a href="https://kubernetes.io/docs/reference/kubectl/" target="_blank" rel="noreferrer">kubectl</a> command-line interface or other command-line tools, such as <a href="https://kubernetes.io/docs/reference/setup-tools/kubeadm/" target="_blank" rel="noreferrer">kubeadm</a>, which in turn use the API. However, you can also access the API directly using REST calls.</p><p>Consider using one of the <a href="https://kubernetes.io/docs/reference/using-api/client-libraries/" target="_blank" rel="noreferrer">client libraries</a> if you are writing an application using the Kubernetes API.</p><h2 id="openapi-specification" tabindex="-1">OpenAPI specification <a class="header-anchor" href="#openapi-specification" aria-label="Permalink to &quot;OpenAPI specification&quot;">​</a></h2><p>Complete API details are documented using <a href="https://www.openapis.org/" target="_blank" rel="noreferrer">OpenAPI</a>.</p><h3 id="openapi-v2" tabindex="-1">OpenAPI V2 <a class="header-anchor" href="#openapi-v2" aria-label="Permalink to &quot;OpenAPI V2&quot;">​</a></h3><p>The Kubernetes API server serves an aggregated OpenAPI v2 spec via the <code>/openapi/v2</code> endpoint. You can request the response format using request headers as follows:</p><table><thead><tr><th>Header</th><th>Possible values</th><th>Notes</th></tr></thead><tbody><tr><td>Accept-Encoding</td><td>gzip</td><td>not supplying this header is also acceptable</td></tr><tr><td>Accept</td><td><code>application/com.github.proto-openapi.spec.v2@v1.0+protobuf</code></td><td>mainly for intra-cluster use</td></tr><tr><td></td><td><code>application/json</code></td><td>default</td></tr><tr><td></td><td><code>*</code></td><td>serves <code>application/json </code></td></tr></tbody></table><p>Kubernetes implements an alternative Protobuf based serialization format that is primarily intended for intra-cluster communication. For more information about this format, see the <a href="https://git.k8s.io/design-proposals-archive/api-machinery/protobuf.md" target="_blank" rel="noreferrer">Kubernetes Protobuf serialization</a> design proposal and the Interface Definition Language (IDL) files for each schema located in the Go packages that define the API objects.</p><h3 id="openapi-v3" tabindex="-1">OpenAPI V3 <a class="header-anchor" href="#openapi-v3" aria-label="Permalink to &quot;OpenAPI V3&quot;">​</a></h3><p><em>FEATURE STATE</em>: <code>Kubernetes v1.27 [stable]</code></p><p>Kubernetes supports publishing a description of its APIs as OpenAPI v3.</p><p>A discovery endpoint <code>/openapi/v3</code> is provided to see a list of all group/versions available. This endpoint only returns JSON. These group/versions are provided in the following format:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;api/v1&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;serverRelativeURL&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/openapi/v3/api/v1?hash=CC0E9BFD992D8C59AEC98A1E2336F899E8318D3CF4C68944C3DEC640AF5AB52D864AC50DAA8D145B3494F75FA3CFF939FCBDDA431DAD3CA79738B297795818CF&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;apis/admissionregistration.k8s.io/v1&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;serverRelativeURL&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/openapi/v3/apis/admissionregistration.k8s.io/v1?hash=E19CC93A116982CE5422FC42B590A8AFAD92CDE9AE4D59B5CAAD568F083AD07946E6CB5817531680BCE6E215C16973CD39003B0425F3477CFD854E89A9DB6597&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">....</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;api/v1&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;serverRelativeURL&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/openapi/v3/api/v1?hash=CC0E9BFD992D8C59AEC98A1E2336F899E8318D3CF4C68944C3DEC640AF5AB52D864AC50DAA8D145B3494F75FA3CFF939FCBDDA431DAD3CA79738B297795818CF&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;apis/admissionregistration.k8s.io/v1&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;serverRelativeURL&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/openapi/v3/apis/admissionregistration.k8s.io/v1?hash=E19CC93A116982CE5422FC42B590A8AFAD92CDE9AE4D59B5CAAD568F083AD07946E6CB5817531680BCE6E215C16973CD39003B0425F3477CFD854E89A9DB6597&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">....</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The relative URLs are pointing to immutable OpenAPI descriptions, in order to improve client-side caching. The proper HTTP caching headers are also set by the API server for that purpose (<code>Expires</code> to 1 year in the future, and <code>Cache-Control</code> to <code>immutable</code>). When an obsolete URL is used, the API server returns a redirect to the newest URL.</p><p>The Kubernetes API server publishes an OpenAPI v3 spec per Kubernetes group version at the <code>/openapi/v3/apis/&lt;group&gt;/&lt;version&gt;?hash=&lt;hash&gt;</code> endpoint.</p><p>Refer to the table below for accepted request headers.</p><table><thead><tr><th>Header</th><th>Possible values</th><th>Notes</th></tr></thead><tbody><tr><td>Accept-Encoding</td><td>gzip</td><td>not supplying this header is also acceptable</td></tr><tr><td>Accept</td><td><code>application/com.github.proto-openapi.spec.v3@v1.0+protobuf</code></td><td>mainly for intra-cluster use</td></tr><tr><td></td><td><code>application/json</code></td><td>default</td></tr><tr><td></td><td><code>*</code></td><td>serves <code>application/json</code></td></tr></tbody></table><p>A Golang implementation to fetch the OpenAPI V3 is provided in the package <code>k8s.io/client-go/openapi3</code>.</p><h2 id="persistence" tabindex="-1">Persistence <a class="header-anchor" href="#persistence" aria-label="Permalink to &quot;Persistence&quot;">​</a></h2><p>Kubernetes stores the serialized state of objects by writing them into etcd.</p><h2 id="api-discovery" tabindex="-1">API Discovery <a class="header-anchor" href="#api-discovery" aria-label="Permalink to &quot;API Discovery&quot;">​</a></h2><p>A list of all group versions supported by a cluster is published at the <code>/api</code> and <code>/apis</code> endpoints. Each group version also advertises the list of resources supported via <code>/apis/&lt;group&gt;/&lt;version&gt;</code> (for example: <code>/apis/rbac.authorization.k8s.io/v1alpha1</code>). These endpoints are used by kubectl to fetch the list of resources supported by a cluster.</p><h3 id="aggregated-discovery" tabindex="-1">Aggregated Discovery <a class="header-anchor" href="#aggregated-discovery" aria-label="Permalink to &quot;Aggregated Discovery&quot;">​</a></h3><p><em>FEATURE STATE</em>: <code>Kubernetes v1.27 [beta]</code></p><p>Kubernetes offers beta support for aggregated discovery, publishing all resources supported by a cluster through two endpoints (<code>/api</code> and <code>/apis</code>) compared to one for every group version. Requesting this endpoint drastically reduces the number of requests sent to fetch the discovery for the average Kubernetes cluster. This may be accessed by requesting the respective endpoints with an Accept header indicating the aggregated discovery resource: <code>Accept: application/json;v=v2beta1;g=apidiscovery.k8s.io;as=APIGroupDiscoveryList</code>.</p><p>The endpoint also supports ETag and protobuf encoding.</p><h2 id="api-groups-and-versioning" tabindex="-1">API groups and versioning <a class="header-anchor" href="#api-groups-and-versioning" aria-label="Permalink to &quot;API groups and versioning&quot;">​</a></h2><p>To make it easier to eliminate fields or restructure resource representations, Kubernetes supports multiple API versions, each at a different API path, such as <code>/api/v1</code> or <code>/apis/rbac.authorization.k8s.io/v1alpha1</code>.</p><p>Versioning is done at the API level rather than at the resource or field level to ensure that the API presents a clear, consistent view of system resources and behavior, and to enable controlling access to end-of-life and/or experimental APIs.</p><p>To make it easier to evolve and to extend its API, Kubernetes implements <a href="https://kubernetes.io/docs/reference/using-api/#api-groups" target="_blank" rel="noreferrer">API groups</a> that can be <a href="https://kubernetes.io/docs/reference/using-api/#enabling-or-disabling" target="_blank" rel="noreferrer">enabled or disabled</a>.</p><p>API resources are distinguished by their API group, resource type, namespace (for namespaced resources), and name. The API server handles the conversion between API versions transparently: all the different versions are actually representations of the same persisted data. The API server may serve the same underlying data through multiple API versions.</p><p>For example, suppose there are two API versions, <code>v1</code> and <code>v1beta1</code>, for the same resource. If you originally created an object using the <code>v1beta1</code> version of its API, you can later read, update, or delete that object using either the <code>v1beta1</code> or the <code>v1</code> API version, until the <code>v1beta1</code> version is deprecated and removed. At that point you can continue accessing and modifying the object using the <code>v1</code> API.</p><h3 id="api-changes" tabindex="-1">API changes <a class="header-anchor" href="#api-changes" aria-label="Permalink to &quot;API changes&quot;">​</a></h3><p>Any system that is successful needs to grow and change as new use cases emerge or existing ones change. Therefore, Kubernetes has designed the Kubernetes API to continuously change and grow. The Kubernetes project aims to not break compatibility with existing clients, and to maintain that compatibility for a length of time so that other projects have an opportunity to adapt.</p><p>In general, new API resources and new resource fields can be added often and frequently. Elimination of resources or fields requires following the <a href="https://kubernetes.io/docs/reference/using-api/deprecation-policy/" target="_blank" rel="noreferrer">API deprecation policy</a>.</p><p>Kubernetes makes a strong commitment to maintain compatibility for official Kubernetes APIs once they reach general availability (GA), typically at API version <code>v1</code>. Additionally, Kubernetes maintains compatibility with data persisted via beta API versions of official Kubernetes APIs, and ensures that data can be converted and accessed via GA API versions when the feature goes stable.</p><p>If you adopt a beta API version, you will need to transition to a subsequent beta or stable API version once the API graduates. The best time to do this is while the beta API is in its deprecation period, since objects are simultaneously accessible via both API versions. Once the beta API completes its deprecation period and is no longer served, the replacement API version must be used.</p><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>Although Kubernetes also aims to maintain compatibility for alpha APIs versions, in some circumstances this is not possible. If you use any alpha API versions, check the release notes for Kubernetes when upgrading your cluster, in case the API did change in incompatible ways that require deleting all existing alpha objects prior to upgrade.</p></div><p>Refer to <a href="https://kubernetes.io/docs/reference/using-api/#api-versioning" target="_blank" rel="noreferrer">API versions reference</a> for more details on the API version level definitions.</p><h2 id="api-extension" tabindex="-1">API Extension <a class="header-anchor" href="#api-extension" aria-label="Permalink to &quot;API Extension&quot;">​</a></h2><p>The Kubernetes API can be extended in one of two ways:</p><ol><li><a href="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/" target="_blank" rel="noreferrer">Custom resources</a> let you declaratively define how the API server should provide your chosen resource API.</li><li>You can also extend the Kubernetes API by implementing an <a href="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/" target="_blank" rel="noreferrer">aggregation layer</a>.</li></ol><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><ul><li>Learn how to extend the Kubernetes API by adding your own <a href="https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/" target="_blank" rel="noreferrer">CustomResourceDefinition</a>.</li><li><a href="https://kubernetes.io/docs/concepts/security/controlling-access/" target="_blank" rel="noreferrer">Controlling Access To The Kubernetes API</a> describes how the cluster manages authentication and authorization for API access.</li><li>Learn about API endpoints, resource types and samples by reading <a href="https://kubernetes.io/docs/reference/kubernetes-api/" target="_blank" rel="noreferrer">API Reference</a>.</li><li>Learn about what constitutes a compatible change, and how to change the API, from <a href="https://git.k8s.io/community/contributors/devel/sig-architecture/api_changes.md#readme" target="_blank" rel="noreferrer">API changes</a>.</li></ul>`,47),r=[n];function i(p,l,c,d,h,u){return s(),t("div",null,r)}const f=e(o,[["render",i]]);export{g as __pageData,f as default};
