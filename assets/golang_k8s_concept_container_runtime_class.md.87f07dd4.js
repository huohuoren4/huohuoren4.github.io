import{_ as e,o as s,c as n,Q as a}from"./chunks/framework.01af844e.js";const g=JSON.parse('{"title":"Runtime Class","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/container/runtime_class.md","filePath":"golang/k8s/concept/container/runtime_class.md","lastUpdated":1694534070000}'),o={name:"golang/k8s/concept/container/runtime_class.md"},t=a(`<h1 id="runtime-class" tabindex="-1">Runtime Class <a class="header-anchor" href="#runtime-class" aria-label="Permalink to &quot;Runtime Class&quot;">​</a></h1><p><em>FEATURE STATE</em>: <code>Kubernetes v1.20 [stable]</code> This page describes the RuntimeClass resource and runtime selection mechanism.</p><p>RuntimeClass is a feature for selecting the container runtime configuration. The container runtime configuration is used to run a Pod&#39;s containers.</p><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-label="Permalink to &quot;Motivation&quot;">​</a></h2><p>You can set a different RuntimeClass between different Pods to provide a balance of performance versus security. For example, if part of your workload deserves a high level of information security assurance, you might choose to schedule those Pods so that they run in a container runtime that uses hardware virtualization. You&#39;d then benefit from the extra isolation of the alternative runtime, at the expense of some additional overhead.</p><p>You can also use RuntimeClass to run different Pods with the same container runtime but with different settings.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><ol><li>Configure the CRI implementation on nodes (runtime dependent)</li><li>Create the corresponding RuntimeClass resources</li></ol><h3 id="_1-configure-the-cri-implementation-on-nodes" tabindex="-1">1. Configure the CRI implementation on nodes <a class="header-anchor" href="#_1-configure-the-cri-implementation-on-nodes" aria-label="Permalink to &quot;1. Configure the CRI implementation on nodes&quot;">​</a></h3><p>The configurations available through RuntimeClass are Container Runtime Interface (CRI) implementation dependent. See the corresponding documentation (<a href="https://kubernetes.io/docs/concepts/containers/runtime-class/#cri-configuration" target="_blank" rel="noreferrer">below</a>) for your CRI implementation for how to configure.</p><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>RuntimeClass assumes a homogeneous node configuration across the cluster by default (which means that all nodes are configured the same way with respect to container runtimes). To support heterogeneous node configurations, see <a href="https://kubernetes.io/docs/concepts/containers/runtime-class/#scheduling" target="_blank" rel="noreferrer">Scheduling</a> below.</p></div><p>The configurations have a corresponding <code>handler</code> name, referenced by the RuntimeClass. The handler must be a valid <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names" target="_blank" rel="noreferrer">DNS label name</a>.</p><h3 id="_2-create-the-corresponding-runtimeclass-resources" tabindex="-1">2. Create the corresponding RuntimeClass resources <a class="header-anchor" href="#_2-create-the-corresponding-runtimeclass-resources" aria-label="Permalink to &quot;2. Create the corresponding RuntimeClass resources&quot;">​</a></h3><p>The configurations setup in step 1 should each have an associated <code>handler</code> name, which identifies the configuration. For each handler, create a corresponding RuntimeClass object.</p><p>The RuntimeClass resource currently only has 2 significant fields: the RuntimeClass name (<code>metadata.name</code>) and the handler (<code>handler</code>). The object definition looks like this:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># RuntimeClass is defined in the node.k8s.io API group</span></span>
<span class="line"><span style="color:#B392F0;">apiVersion:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node.k8s.io/v1</span></span>
<span class="line"><span style="color:#B392F0;">kind:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">RuntimeClass</span></span>
<span class="line"><span style="color:#B392F0;">metadata:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># The name the RuntimeClass will be referenced by.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># RuntimeClass is a non-namespaced resource.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">name:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myclass</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;"># The name of the corresponding CRI configuration</span></span>
<span class="line"><span style="color:#B392F0;">handler:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myconfiguration</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># RuntimeClass is defined in the node.k8s.io API group</span></span>
<span class="line"><span style="color:#6F42C1;">apiVersion:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node.k8s.io/v1</span></span>
<span class="line"><span style="color:#6F42C1;">kind:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">RuntimeClass</span></span>
<span class="line"><span style="color:#6F42C1;">metadata:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># The name the RuntimeClass will be referenced by.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># RuntimeClass is a non-namespaced resource.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">name:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myclass</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;"># The name of the corresponding CRI configuration</span></span>
<span class="line"><span style="color:#6F42C1;">handler:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myconfiguration</span></span></code></pre></div><p>The name of a RuntimeClass object must be a valid <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/names#dns-subdomain-names" target="_blank" rel="noreferrer">DNS subdomain name</a>.</p><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>It is recommended that RuntimeClass write operations (create/update/patch/delete) be restricted to the cluster administrator. This is typically the default. See <a href="https://kubernetes.io/docs/reference/access-authn-authz/authorization/" target="_blank" rel="noreferrer">Authorization Overview</a> for more details.</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Once RuntimeClasses are configured for the cluster, you can specify a <code>runtimeClassName</code> in the Pod spec to use it. For example:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apiVersion:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v1</span></span>
<span class="line"><span style="color:#B392F0;">kind:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Pod</span></span>
<span class="line"><span style="color:#B392F0;">metadata:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">name:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mypod</span></span>
<span class="line"><span style="color:#B392F0;">spec:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">runtimeClassName:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">myclass</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apiVersion:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v1</span></span>
<span class="line"><span style="color:#6F42C1;">kind:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Pod</span></span>
<span class="line"><span style="color:#6F42C1;">metadata:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">name:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mypod</span></span>
<span class="line"><span style="color:#6F42C1;">spec:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">runtimeClassName:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">myclass</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># ...</span></span></code></pre></div><p>This will instruct the kubelet to use the named RuntimeClass to run this pod. If the named RuntimeClass does not exist, or the CRI cannot run the corresponding handler, the pod will enter the <code>Failed</code> terminal <a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase" target="_blank" rel="noreferrer">phase</a>. Look for a corresponding <a href="https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/" target="_blank" rel="noreferrer">event</a> for an error message.</p><p>If no <code>runtimeClassName</code> is specified, the default RuntimeHandler will be used, which is equivalent to the behavior when the RuntimeClass feature is disabled.</p><h3 id="cri-configuration" tabindex="-1">CRI Configuration <a class="header-anchor" href="#cri-configuration" aria-label="Permalink to &quot;CRI Configuration&quot;">​</a></h3><p>For more details on setting up CRI runtimes, see <a href="https://kubernetes.io/docs/setup/production-environment/container-runtimes/" target="_blank" rel="noreferrer">CRI installation</a>.</p><h4 id="containerd" tabindex="-1">containerd <a class="header-anchor" href="#containerd" aria-label="Permalink to &quot;containerd&quot;">​</a></h4><p>Runtime handlers are configured through containerd&#39;s configuration at <code>/etc/containerd/config.toml</code>. Valid handlers are configured under the runtimes section:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[plugins.</span><span style="color:#9ECBFF;">&quot;io.containerd.grpc.v1.cri&quot;</span><span style="color:#E1E4E8;">.containerd.runtimes.\${HANDLER_NAME}]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[plugins.</span><span style="color:#032F62;">&quot;io.containerd.grpc.v1.cri&quot;</span><span style="color:#24292E;">.containerd.runtimes.\${HANDLER_NAME}]</span></span></code></pre></div><p>See containerd&#39;s <a href="https://github.com/containerd/containerd/blob/main/docs/cri/config.md" target="_blank" rel="noreferrer">config documentation</a> for more details:</p><h4 id="cri-o" tabindex="-1">CRI-O <a class="header-anchor" href="#cri-o" aria-label="Permalink to &quot;CRI-O&quot;">​</a></h4><p>Runtime handlers are configured through CRI-O&#39;s configuration at <code>/etc/crio/crio.conf</code>. Valid handlers are configured under the <a href="https://github.com/cri-o/cri-o/blob/master/docs/crio.conf.5.md#crioruntime-table" target="_blank" rel="noreferrer">crio.runtime table</a>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[crio.runtime.runtimes.\${HANDLER_NAME}]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">runtime_path</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">PATH_TO_BINARY</span><span style="color:#9ECBFF;">}&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[crio.runtime.runtimes.\${HANDLER_NAME}]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">runtime_path</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">PATH_TO_BINARY</span><span style="color:#032F62;">}&quot;</span></span></code></pre></div><p>See CRI-O&#39;s <a href="https://github.com/cri-o/cri-o/blob/master/docs/crio.conf.5.md" target="_blank" rel="noreferrer">config documentation</a> for more details.</p><h2 id="scheduling" tabindex="-1">Scheduling <a class="header-anchor" href="#scheduling" aria-label="Permalink to &quot;Scheduling&quot;">​</a></h2><p><em>FEATURE STATE</em>: <code>Kubernetes v1.16 [beta]</code></p><p>By specifying the <code>scheduling</code> field for a RuntimeClass, you can set constraints to ensure that Pods running with this RuntimeClass are scheduled to nodes that support it. If <code>scheduling</code> is not set, this RuntimeClass is assumed to be supported by all nodes.</p><p>To ensure pods land on nodes supporting a specific RuntimeClass, that set of nodes should have a common label which is then selected by the <code>runtimeclass.scheduling.nodeSelector</code> field. The RuntimeClass&#39;s nodeSelector is merged with the pod&#39;s nodeSelector in admission, effectively taking the intersection of the set of nodes selected by each. If there is a conflict, the pod will be rejected.</p><p>If the supported nodes are tainted to prevent other RuntimeClass pods from running on the node, you can add <code>tolerations</code> to the <code>RuntimeClass</code>. As with the <code>nodeSelector</code>, the tolerations are merged with the pod&#39;s tolerations in admission, effectively taking the union of the set of nodes tolerated by each.</p><p>To learn more about configuring the node selector and tolerations, see <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/" target="_blank" rel="noreferrer">Assigning Pods to Nodes</a>.</p><h3 id="pod-overhead" tabindex="-1">Pod Overhead <a class="header-anchor" href="#pod-overhead" aria-label="Permalink to &quot;Pod Overhead&quot;">​</a></h3><p><em>FEATURE STATE</em>: <code>Kubernetes v1.24 [stable]</code></p><p>You can specify overhead resources that are associated with running a Pod. Declaring overhead allows the cluster (including the scheduler) to account for it when making decisions about Pods and resources.</p><p>Pod overhead is defined in RuntimeClass through the <code>overhead</code> field. Through the use of this field, you can specify the overhead of running pods utilizing this RuntimeClass and ensure these overheads are accounted for in Kubernetes.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><ul><li><a href="https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/585-runtime-class/README.md" target="_blank" rel="noreferrer">RuntimeClass Design</a></li><li><a href="https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/585-runtime-class/README.md#runtimeclass-scheduling" target="_blank" rel="noreferrer">RuntimeClass Scheduling Design</a></li><li>Read about the <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/pod-overhead/" target="_blank" rel="noreferrer">Pod Overhead</a> concept</li><li><a href="https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/688-pod-overhead" target="_blank" rel="noreferrer">PodOverhead Feature Design</a></li></ul>`,45),r=[t];function l(i,c,p,d,h,u){return s(),n("div",null,r)}const f=e(o,[["render",l]]);export{g as __pageData,f as default};
