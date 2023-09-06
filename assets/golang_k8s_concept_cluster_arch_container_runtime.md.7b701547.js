import{_ as e,o as t,c as n,Q as a}from"./chunks/framework.01af844e.js";const b=JSON.parse('{"title":"Container Runtime Interface (CRI)","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/cluster_arch/container_runtime.md","filePath":"golang/k8s/concept/cluster_arch/container_runtime.md","lastUpdated":1694020305000}'),r={name:"golang/k8s/concept/cluster_arch/container_runtime.md"},o=a('<h1 id="container-runtime-interface-cri" tabindex="-1">Container Runtime Interface (CRI) <a class="header-anchor" href="#container-runtime-interface-cri" aria-label="Permalink to &quot;Container Runtime Interface (CRI)&quot;">​</a></h1><p>The CRI is a plugin interface which enables the kubelet to use a wide variety of container runtimes, without having a need to recompile the cluster components.</p><p>You need a working container runtime on each Node in your cluster, so that the kubelet can launch Pods and their containers.</p><p>The Container Runtime Interface (CRI) is the main protocol for the communication between the kubelet and Container Runtime.</p><p>The Kubernetes Container Runtime Interface (CRI) defines the main <a href="https://grpc.io/" target="_blank" rel="noreferrer">gRPC</a> protocol for the communication between the <a href="https://kubernetes.io/docs/concepts/overview/components/#node-components" target="_blank" rel="noreferrer">cluster components</a> kubelet and container runtime.</p><h2 id="the-api" tabindex="-1">The API <a class="header-anchor" href="#the-api" aria-label="Permalink to &quot;The API&quot;">​</a></h2><p><em>FEATURE STATE</em>: <code>Kubernetes v1.23 [stable]</code></p><p>The kubelet acts as a client when connecting to the container runtime via gRPC. The runtime and image service endpoints have to be available in the container runtime, which can be configured separately within the kubelet by using the <code>--image-service-endpoint</code> <a href="https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet" target="_blank" rel="noreferrer">command line flags</a>.</p><p>For Kubernetes v1.28, the kubelet prefers to use CRI <code>v1</code>. If a container runtime does not support <code>v1</code> of the CRI, then the kubelet tries to negotiate any older supported version. The v1.28 kubelet can also negotiate CRI <code>v1alpha2</code>, but this version is considered as deprecated. If the kubelet cannot negotiate a supported CRI version, the kubelet gives up and doesn&#39;t register as a node.</p><h2 id="upgrading" tabindex="-1">Upgrading <a class="header-anchor" href="#upgrading" aria-label="Permalink to &quot;Upgrading&quot;">​</a></h2><p>When upgrading Kubernetes, the kubelet tries to automatically select the latest CRI version on restart of the component. If that fails, then the fallback will take place as mentioned above. If a gRPC re-dial was required because the container runtime has been upgraded, then the container runtime must also support the initially selected version or the redial is expected to fail. This requires a restart of the kubelet.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><ul><li>Learn more about the CRI <a href="https://github.com/kubernetes/cri-api/blob/c75ef5b/pkg/apis/runtime/v1/api.proto" target="_blank" rel="noreferrer">protocol definition</a></li></ul>',13),i=[o];function c(s,h,l,u,d,p){return t(),n("div",null,i)}const f=e(r,[["render",c]]);export{b as __pageData,f as default};