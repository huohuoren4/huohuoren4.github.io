import{_ as e,o as t,c as s,Q as o}from"./chunks/framework.01af844e.js";const f=JSON.parse('{"title":"User Namespaces","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/concept/workload/pod/user_namespace.md","filePath":"golang/k8s/concept/workload/pod/user_namespace.md","lastUpdated":1694534070000}'),a={name:"golang/k8s/concept/workload/pod/user_namespace.md"},n=o('<h1 id="user-namespaces" tabindex="-1">User Namespaces <a class="header-anchor" href="#user-namespaces" aria-label="Permalink to &quot;User Namespaces&quot;">​</a></h1><p><em>FEATURE STATE</em>: <code>Kubernetes v1.25 [alpha]</code></p><p>This page explains how user namespaces are used in Kubernetes pods. A user namespace isolates the user running inside the container from the one in the host.</p><p>A process running as root in a container can run as a different (non-root) user in the host; in other words, the process has full privileges for operations inside the user namespace, but is unprivileged for operations outside the namespace.</p><p>You can use this feature to reduce the damage a compromised container can do to the host or other pods in the same node. There are <a href="https://github.com/kubernetes/enhancements/tree/217d790720c5aef09b8bd4d6ca96284a0affe6c2/keps/sig-node/127-user-namespaces#motivation" target="_blank" rel="noreferrer">several security vulnerabilities</a> rated either HIGH or CRITICAL that were not exploitable when user namespaces is active. It is expected user namespace will mitigate some future vulnerabilities too.</p><h2 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-label="Permalink to &quot;Before you begin&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>This section links to third party projects that provide functionality required by Kubernetes. The Kubernetes project authors aren&#39;t responsible for these projects, which are listed alphabetically. To add a project to this list, read the <a href="https://kubernetes.io/docs/contribute/style/content-guide/#third-party-content" target="_blank" rel="noreferrer">content guide</a> before submitting a change. <a href="https://kubernetes.io/docs/concepts/workloads/pods/user-namespaces/#third-party-content-disclaimer" target="_blank" rel="noreferrer">More information</a>.</p></div><p>This is a Linux-only feature and support is needed in Linux for idmap mounts on the filesystems used. This means:</p><ul><li>On the node, the filesystem you use for <code>/var/lib/kubelet/pods/</code>, or the custom directory you configure for this, needs idmap mount support.</li><li>All the filesystems used in the pod&#39;s volumes must support idmap mounts.</li></ul><p>In practice this means you need at least Linux 6.3, as tmpfs started supporting idmap mounts in that version. This is usually needed as several Kubernetes features use tmpfs (the service account token that is mounted by default uses a tmpfs, Secrets use a tmpfs, etc.)</p><p>Some popular filesystems that support idmap mounts in Linux 6.3 are: btrfs, ext4, xfs, fat, tmpfs, overlayfs.</p><p>In addition, support is needed in the container runtime to use this feature with Kubernetes pods:</p><ul><li>CRI-O: version 1.25 (and later) supports user namespaces for containers.</li></ul><p>containerd v1.7 is not compatible with the userns support in Kubernetes v1.27 to v1.28. Kubernetes v1.25 and v1.26 used an earlier implementation that is compatible with containerd v1.7, in terms of userns support. If you are using a version of Kubernetes other than 1.28, check the documentation for that version of Kubernetes for the most relevant information. If there is a newer release of containerd than v1.7 available for use, also check the containerd documentation for compatibility information.</p><p>You can see the status of user namespaces support in cri-dockerd tracked in an <a href="https://github.com/Mirantis/cri-dockerd/issues/74" target="_blank" rel="noreferrer">issue</a> on GitHub.</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>User namespaces is a Linux feature that allows to map users in the container to different users in the host. Furthermore, the capabilities granted to a pod in a user namespace are valid only in the namespace and void outside of it.</p><p>A pod can opt-in to use user namespaces by setting the <code>pod.spec.hostUsers</code> field to <code>false</code>.</p><p>The kubelet will pick host UIDs/GIDs a pod is mapped to, and will do so in a way to guarantee that no two pods on the same node use the same mapping.</p><p>The <code>runAsUser</code>, <code>runAsGroup</code>, <code>fsGroup</code>, etc. fields in the <code>pod.spec</code> always refer to the user inside the container.</p><p>The valid UIDs/GIDs when this feature is enabled is the range 0-65535. This applies to files and processes (<code>runAsUser</code>, <code>runAsGroup</code>, etc.).</p><p>Files using a UID/GID outside this range will be seen as belonging to the overflow ID, usually 65534 (configured in <code>/proc/sys/kernel/overflowuid</code> and <code>/proc/sys/kernel/overflowgid</code>). However, it is not possible to modify those files, even by running as the 65534 user/group.</p><p>Most applications that need to run as root but don&#39;t access other host namespaces or resources, should continue to run fine without any changes needed if user namespaces is activated.</p><h2 id="understanding-user-namespaces-for-pods" tabindex="-1">Understanding user namespaces for pods <a class="header-anchor" href="#understanding-user-namespaces-for-pods" aria-label="Permalink to &quot;Understanding user namespaces for pods&quot;">​</a></h2><p>Several container runtimes with their default configuration (like Docker Engine, containerd, CRI-O) use Linux namespaces for isolation. Other technologies exist and can be used with those runtimes too (e.g. Kata Containers uses VMs instead of Linux namespaces). This page is applicable for container runtimes using Linux namespaces for isolation.</p><p>When creating a pod, by default, several new namespaces are used for isolation: a network namespace to isolate the network of the container, a PID namespace to isolate the view of processes, etc. If a user namespace is used, this will isolate the users in the container from the users in the node.</p><p>This means containers can run as root and be mapped to a non-root user on the host. Inside the container the process will think it is running as root (and therefore tools like <code>apt</code>, <code>yum</code>, etc. work fine), while in reality the process doesn&#39;t have privileges on the host. You can verify this, for example, if you check which user the container process is running by executing <code>ps aux</code> from the host. The user <code>ps</code> shows is not the same as the user you see if you execute inside the container the command <code>id</code>.</p><p>This abstraction limits what can happen, for example, if the container manages to escape to the host. Given that the container is running as a non-privileged user on the host, it is limited what it can do to the host.</p><p>Furthermore, as users on each pod will be mapped to different non-overlapping users in the host, it is limited what they can do to other pods too.</p><p>Capabilities granted to a pod are also limited to the pod user namespace and mostly invalid out of it, some are even completely void. Here are two examples:</p><ul><li><code>CAP_SYS_MODULE</code> does not have any effect if granted to a pod using user namespaces, the pod isn&#39;t able to load kernel modules.</li><li><code>CAP_SYS_ADMIN</code> is limited to the pod&#39;s user namespace and invalid outside of it.</li></ul><p>Without using a user namespace a container running as root, in the case of a container breakout, has root privileges on the node. And if some capability were granted to the container, the capabilities are valid on the host too. None of this is true when we use user namespaces.</p><p>If you want to know more details about what changes when user namespaces are in use, see <code>man 7 user_namespaces</code>.</p><h2 id="set-up-a-node-to-support-user-namespaces" tabindex="-1">Set up a node to support user namespaces <a class="header-anchor" href="#set-up-a-node-to-support-user-namespaces" aria-label="Permalink to &quot;Set up a node to support user namespaces&quot;">​</a></h2><p>It is recommended that the host&#39;s files and host&#39;s processes use UIDs/GIDs in the range of 0-65535.</p><p>The kubelet will assign UIDs/GIDs higher than that to pods. Therefore, to guarantee as much isolation as possible, the UIDs/GIDs used by the host&#39;s files and host&#39;s processes should be in the range 0-65535.</p><p>Note that this recommendation is important to mitigate the impact of CVEs like <a href="https://github.com/kubernetes/kubernetes/issues/104980" target="_blank" rel="noreferrer">CVE-2021-25741</a>, where a pod can potentially read arbitrary files in the hosts. If the UIDs/GIDs of the pod and the host don&#39;t overlap, it is limited what a pod would be able to do: the pod UID/GID won&#39;t match the host&#39;s file owner/group.</p><h2 id="limitations" tabindex="-1">Limitations <a class="header-anchor" href="#limitations" aria-label="Permalink to &quot;Limitations&quot;">​</a></h2><p>When using a user namespace for the pod, it is disallowed to use other host namespaces. In particular, if you set <code>hostUsers: false</code> then you are not allowed to set any of:</p><ul><li><code>hostNetwork: true</code></li><li><code>hostIPC: true</code></li><li><code>hostPID: true</code></li></ul><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><ul><li>Take a look at <a href="https://kubernetes.io/docs/tasks/configure-pod-container/user-namespaces/" target="_blank" rel="noreferrer">Use a User Namespace With a Pod</a></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Items on this page refer to third party products or projects that provide functionality required by Kubernetes. The Kubernetes project authors aren&#39;t responsible for those third-party products or projects. See the <a href="https://github.com/cncf/foundation/blob/master/website-guidelines.md" target="_blank" rel="noreferrer">CNCF website guidelines</a> for more details.</p><p>You should read the <a href="https://kubernetes.io/docs/contribute/style/content-guide/#third-party-content" target="_blank" rel="noreferrer">content guide</a> before proposing a change that adds an extra third-party link.</p></div>',43),r=[n];function i(p,d,c,u,h,l){return t(),s("div",null,r)}const b=e(a,[["render",i]]);export{f as __pageData,b as default};
