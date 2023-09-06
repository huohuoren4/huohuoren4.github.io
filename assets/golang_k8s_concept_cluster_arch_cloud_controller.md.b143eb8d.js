import{_ as s}from"./chunks/components-of-kubernetes.8d4567b1.js";import{_ as n,o as a,c as e,Q as o}from"./chunks/framework.01af844e.js";const g=JSON.parse('{"title":"Cloud Controller Manager","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/cluster_arch/cloud_controller.md","filePath":"golang/k8s/concept/cluster_arch/cloud_controller.md","lastUpdated":1694020305000}'),l={name:"golang/k8s/concept/cluster_arch/cloud_controller.md"},p=o('<h1 id="cloud-controller-manager" tabindex="-1">Cloud Controller Manager <a class="header-anchor" href="#cloud-controller-manager" aria-label="Permalink to &quot;Cloud Controller Manager&quot;">​</a></h1><p><em>FEATURE STATE</em>: <code>Kubernetes v1.11 [beta]</code></p><p>Cloud infrastructure technologies let you run Kubernetes on public, private, and hybrid clouds. Kubernetes believes in automated, API-driven infrastructure without tight coupling between components.</p><p>The cloud-controller-manager is a Kubernetes control plane component that embeds cloud-specific control logic. The cloud controller manager lets you link your cluster into your cloud provider&#39;s API, and separates out the components that interact with that cloud platform from components that only interact with your cluster.</p><p>By decoupling the interoperability logic between Kubernetes and the underlying cloud infrastructure, the cloud-controller-manager component enables cloud providers to release features at a different pace compared to the main Kubernetes project.</p><p>The cloud-controller-manager is structured using a plugin mechanism that allows different cloud providers to integrate their platforms with Kubernetes.</p><h2 id="design" tabindex="-1">Design <a class="header-anchor" href="#design" aria-label="Permalink to &quot;Design&quot;">​</a></h2><p><img src="'+s+`" alt="components-of-kubernetes"></p><p>The cloud controller manager runs in the control plane as a replicated set of processes (usually, these are containers in Pods). Each cloud-controller-manager implements multiple controllers in a single process.</p><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>You can also run the cloud controller manager as a Kubernetes addon rather than as part of the control plane.</p></div><h2 id="cloud-controller-manager-functions" tabindex="-1">Cloud controller manager functions <a class="header-anchor" href="#cloud-controller-manager-functions" aria-label="Permalink to &quot;Cloud controller manager functions&quot;">​</a></h2><p>The controllers inside the cloud controller manager include:</p><h3 id="node-controller" tabindex="-1">Node controller <a class="header-anchor" href="#node-controller" aria-label="Permalink to &quot;Node controller&quot;">​</a></h3><p>The node controller is responsible for updating Node objects when new servers are created in your cloud infrastructure. The node controller obtains information about the hosts running inside your tenancy with the cloud provider. The node controller performs the following functions:</p><ol><li>Update a Node object with the corresponding server&#39;s unique identifier obtained from the cloud provider API.</li><li>Annotating and labelling the Node object with cloud-specific information, such as the region the node is deployed into and the resources (CPU, memory, etc) that it has available.</li><li>btain the node&#39;s hostname and network addresses.</li><li>Verifying the node&#39;s health. In case a node becomes unresponsive, this controller checks with your cloud provider&#39;s API to see if the server has been deactivated / deleted / terminated. If the node has been deleted from the cloud, the controller deletes the Node object from your Kubernetes cluster.</li></ol><p>Some cloud provider implementations split this into a node controller and a separate node lifecycle controller.</p><h3 id="route-controller" tabindex="-1">Route controller <a class="header-anchor" href="#route-controller" aria-label="Permalink to &quot;Route controller&quot;">​</a></h3><p>The route controller is responsible for configuring routes in the cloud appropriately so that containers on different nodes in your Kubernetes cluster can communicate with each other.</p><p>Depending on the cloud provider, the route controller might also allocate blocks of IP addresses for the Pod network.</p><h3 id="service-controller" tabindex="-1">Service controller <a class="header-anchor" href="#service-controller" aria-label="Permalink to &quot;Service controller&quot;">​</a></h3><p>Services integrate with cloud infrastructure components such as managed load balancers, IP addresses, network packet filtering, and target health checking. The service controller interacts with your cloud provider&#39;s APIs to set up load balancers and other infrastructure components when you declare a Service resource that requires them.</p><h2 id="authorization" tabindex="-1">Authorization <a class="header-anchor" href="#authorization" aria-label="Permalink to &quot;Authorization&quot;">​</a></h2><p>This section breaks down the access that the cloud controller manager requires on various API objects, in order to perform its operations.</p><h3 id="node-controller-1" tabindex="-1">Node controller <a class="header-anchor" href="#node-controller-1" aria-label="Permalink to &quot;Node controller&quot;">​</a></h3><p>The Node controller only works with Node objects. It requires full access to read and modify Node objects.</p><p><code>v1/Node</code>:</p><ul><li>get</li><li>list</li><li>create</li><li>update</li><li>patch</li><li>watch</li><li>delete</li></ul><h3 id="route-controller-1" tabindex="-1">Route controller <a class="header-anchor" href="#route-controller-1" aria-label="Permalink to &quot;Route controller&quot;">​</a></h3><p>The route controller listens to Node object creation and configures routes appropriately. It requires Get access to Node objects.</p><p><code>v1/Node</code>:</p><ul><li>get</li></ul><h3 id="service-controller-1" tabindex="-1">Service controller <a class="header-anchor" href="#service-controller-1" aria-label="Permalink to &quot;Service controller&quot;">​</a></h3><p>The service controller watches for Service object <code>create</code>, <code>update</code> and <code>delete</code> events and then configures Endpoints for those Services appropriately (for EndpointSlices, the kube-controller-manager manages these on demand).</p><p>To access Services, it requires <code>list</code>, and <code>watch</code> access. To <code>update</code> Services, it requires <code>patch</code> and <code>update</code> access.</p><p>To set up Endpoints resources for the Services, it requires access to <code>create</code>, <code>list</code>, <code>get</code>, <code>watch</code>, and <code>update</code>.</p><p><code>v1/Service</code>:</p><ul><li>list</li><li>get</li><li>watch</li><li>patch</li><li>update</li></ul><h3 id="others" tabindex="-1">Others <a class="header-anchor" href="#others" aria-label="Permalink to &quot;Others&quot;">​</a></h3><p>The implementation of the core of the cloud controller manager requires access to create Event objects, and to ensure secure operation, it requires access to create ServiceAccounts.</p><p><code>v1/Event</code>:</p><ul><li>create</li><li>patch</li><li>update</li></ul><p><code>v1/ServiceAccount</code>:</p><ul><li>create</li></ul><p>The RBAC ClusterRole for the cloud controller manager looks like:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ClusterRole</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">cloud-controller-manager</span></span>
<span class="line"><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">events</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">create</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">patch</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">nodes</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&#39;*&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">nodes/status</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">patch</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">services</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">patch</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">watch</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">serviceaccounts</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">create</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">persistentvolumes</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">get</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">watch</span></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">apiGroups</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">endpoints</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">verbs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">create</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">get</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">watch</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ClusterRole</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">cloud-controller-manager</span></span>
<span class="line"><span style="color:#22863A;">rules</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">events</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">create</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">patch</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">nodes</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&#39;*&#39;</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">nodes/status</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">patch</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">services</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">patch</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">watch</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">serviceaccounts</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">create</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">persistentvolumes</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">get</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">watch</span></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">apiGroups</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">endpoints</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">verbs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">create</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">get</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">watch</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">update</span></span></code></pre></div><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><ul><li><p><a href="https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/#cloud-controller-manager" target="_blank" rel="noreferrer">Cloud Controller Manager Administration</a> has instructions on running and managing the cloud controller manager.</p></li><li><p>To upgrade a HA control plane to use the cloud controller manager, see <a href="https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/" target="_blank" rel="noreferrer">Migrate Replicated Control Plane To Use Cloud Controller Manager</a>.</p></li><li><p>Want to know how to implement your own cloud controller manager, or extend an existing project?</p><ul><li>The cloud controller manager uses Go interfaces, specifically, <code>CloudProvider</code> interface defined in <a href="https://github.com/kubernetes/cloud-provider/blob/release-1.21/cloud.go#L42-L69" target="_blank" rel="noreferrer">cloud.go</a> from <a href="https://github.com/kubernetes/cloud-provider" target="_blank" rel="noreferrer">kubernetes/cloud-provider</a> to allow implementations from any cloud to be plugged in.</li><li>The implementation of the shared controllers highlighted in this document (Node, Route, and Service), and some scaffolding along with the shared cloudprovider interface, is part of the Kubernetes core. Implementations specific to cloud providers are outside the core of Kubernetes and implement the <code>CloudProvider</code> interface.</li><li>For more information about developing plugins, see <a href="https://kubernetes.io/docs/tasks/administer-cluster/developing-cloud-controller-manager/" target="_blank" rel="noreferrer">Developing Cloud Controller Manager</a>.</li></ul></li></ul>`,47),r=[p];function t(c,i,E,d,u,y){return a(),e("div",null,r)}const b=n(l,[["render",t]]);export{g as __pageData,b as default};