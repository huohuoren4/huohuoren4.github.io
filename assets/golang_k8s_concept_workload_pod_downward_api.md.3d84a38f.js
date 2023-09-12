import{_ as e,o as a,c as o,Q as t}from"./chunks/framework.01af844e.js";const p=JSON.parse('{"title":"Downward API","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/workload/pod/downward_api.md","filePath":"golang/k8s/concept/workload/pod/downward_api.md","lastUpdated":1694534070000}'),i={name:"golang/k8s/concept/workload/pod/downward_api.md"},r=t('<h1 id="downward-api" tabindex="-1">Downward API <a class="header-anchor" href="#downward-api" aria-label="Permalink to &quot;Downward API&quot;">​</a></h1><p>It is sometimes useful for a container to have information about itself, without being overly coupled to Kubernetes. The downward API allows containers to consume information about themselves or the cluster without using the Kubernetes client or API server.</p><p>An example is an existing application that assumes a particular well-known environment variable holds a unique identifier. One possibility is to wrap the application, but that is tedious and error-prone, and it violates the goal of low coupling. A better option would be to use the Pod&#39;s name as an identifier, and inject the Pod&#39;s name into the well-known environment variable.</p><p>In Kubernetes, there are two ways to expose Pod and container fields to a running container:</p><ul><li>as <a href="https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/" target="_blank" rel="noreferrer">environment variables</a></li><li>as <a href="https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/" target="_blank" rel="noreferrer">files in a downwardAPI volume</a></li></ul><p>Together, these two ways of exposing Pod and container fields are called the downward API.</p><h2 id="available-fields" tabindex="-1">Available fields <a class="header-anchor" href="#available-fields" aria-label="Permalink to &quot;Available fields&quot;">​</a></h2><p>Only some Kubernetes API fields are available through the downward API. This section lists which fields you can make available.</p><p>You can pass information from available Pod-level fields using <code>fieldRef</code>. At the API level, the <code>spec</code> for a Pod always defines at least one <a href="https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container" target="_blank" rel="noreferrer">Container</a>. You can pass information from available Container-level fields using <code>resourceFieldRef</code>.</p><h3 id="information-available-via-fieldref" tabindex="-1">Information available via <code>fieldRef</code> <a class="header-anchor" href="#information-available-via-fieldref" aria-label="Permalink to &quot;Information available via `fieldRef`&quot;">​</a></h3><p>For some Pod-level fields, you can provide them to a container either as an environment variable or using a <code>downwardAPI</code> volume. The fields available via either mechanism are:</p><ul><li><code>metadata.name</code>: the pod&#39;s name</li><li><code>metadata.namespace</code>: the pod&#39;s namespace</li><li><code>metadata.uid</code>: the pod&#39;s unique ID</li><li><code>metadata.annotations[&#39;&lt;KEY&gt;&#39;]</code>: the value of the pod&#39;s annotation named <code>&lt;KEY&gt;</code> (for example, <code>metadata.annotations[&#39;myannotation&#39;]</code>)</li><li><code>metadata.labels[&#39;&lt;KEY&gt;&#39;]</code>: the text value of the pod&#39;s label named <code>&lt;KEY&gt;</code> (for example, <code>metadata.labels[&#39;mylabel&#39;]</code>)</li></ul><p>The following information is available through environment variables but not as a downwardAPI volume fieldRef:</p><ul><li><code>spec.serviceAccountName</code>: the name of the pod&#39;s service account</li><li><code>spec.nodeName</code>: the name of the node where the Pod is executing</li><li><code>status.hostIP</code>: the primary IP address of the node to which the Pod is assigned</li><li><code>status.hostIPs</code>: the IP addresses is a dual-stack version of <code>status.hostIP</code>, the first is always the same as <code>status.hostIP</code>. The field is available if you enable the <code>PodHostIPs</code> <a href="https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/" target="_blank" rel="noreferrer">feature gate</a>.</li><li><code>status.podIP</code>: the pod&#39;s primary IP address (usually, its IPv4 address)</li><li><code>status.podIPs</code>: the IP addresses is a dual-stack version of <code>status.podIP</code>, the first is always the same as <code>status.podIP</code></li></ul><p>The following information is available through a <code>downwardAPI</code> volume <code>fieldRef</code>, but not as environment variables:</p><ul><li><code>metadata.labels</code>: all of the pod&#39;s labels, formatted as <code>label-key=&quot;escaped-label-value&quot;</code> with one label per line</li><li><code>metadata.annotations</code>: all of the pod&#39;s annotations, formatted as <code>annotation-key=&quot;escaped-annotation-value&quot;</code> with one annotation per line</li></ul><h3 id="information-available-via-resourcefieldref" tabindex="-1">Information available via <code>resourceFieldRef</code> <a class="header-anchor" href="#information-available-via-resourcefieldref" aria-label="Permalink to &quot;Information available via `resourceFieldRef`&quot;">​</a></h3><p>These container-level fields allow you to provide information about <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits" target="_blank" rel="noreferrer">requests and limits</a> for resources such as CPU and memory.</p><ul><li><code>resource: limits.cpu</code>: A container&#39;s CPU limit</li><li><code>resource: requests.cpu</code>: A container&#39;s CPU request</li><li><code>resource: limits.memory</code>: A container&#39;s memory limit</li><li><code>resource: requests.memory</code>: A container&#39;s memory request</li><li><code>resource: limits.hugepages-*</code>: A container&#39;s hugepages limit</li><li><code>resource: requests.hugepages-*</code>: A container&#39;s hugepages request</li><li><code>resource: limits.ephemeral-storage</code>: A container&#39;s ephemeral-storage limit</li><li><code>resource: requests.ephemeral-storage</code>: A container&#39;s ephemeral-storage request</li></ul><h3 id="fallback-information-for-resource-limits" tabindex="-1">Fallback information for resource limits <a class="header-anchor" href="#fallback-information-for-resource-limits" aria-label="Permalink to &quot;Fallback information for resource limits&quot;">​</a></h3><p>If CPU and memory limits are not specified for a container, and you use the downward API to try to expose that information, then the kubelet defaults to exposing the maximum allocatable value for CPU and memory based on the <a href="https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/#node-allocatable" target="_blank" rel="noreferrer">node allocatable</a> calculation.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><p>You can read about <a href="https://kubernetes.io/docs/concepts/storage/volumes/#downwardapi" target="_blank" rel="noreferrer">downwardAPI volumes</a>.</p><p>You can try using the downward API to expose container- or Pod-level information:</p><ul><li>as <a href="https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/" target="_blank" rel="noreferrer">environment variables</a></li><li>as <a href="https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/" target="_blank" rel="noreferrer">files in downwardAPI volume</a></li></ul>',25),n=[r];function l(s,d,c,u,h,m){return a(),o("div",null,n)}const b=e(i,[["render",l]]);export{p as __pageData,b as default};
