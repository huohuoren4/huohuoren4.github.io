import{_ as e,o,c as t,Q as a}from"./chunks/framework.01af844e.js";const g=JSON.parse('{"title":"Running in multiple zones","description":"","frontmatter":{},"headers":[],"relativePath":"golang/k8s/get_started/best_practice/run_zone.md","filePath":"golang/k8s/get_started/best_practice/run_zone.md","lastUpdated":1693758126000}'),r={name:"golang/k8s/get_started/best_practice/run_zone.md"},n=a('<h1 id="running-in-multiple-zones" tabindex="-1">Running in multiple zones <a class="header-anchor" href="#running-in-multiple-zones" aria-label="Permalink to &quot;Running in multiple zones&quot;">​</a></h1><p>This page describes running Kubernetes across multiple zones.</p><h2 id="background" tabindex="-1">Background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;Background&quot;">​</a></h2><p>Kubernetes is designed so that a single Kubernetes cluster can run across multiple failure zones, typically where these zones fit within a logical grouping called a region. Major cloud providers define a region as a set of failure zones (also called availability zones) that provide a consistent set of features: within a region, each zone offers the same APIs and services.</p><p>Typical cloud architectures aim to minimize the chance that a failure in one zone also impairs services in another zone.</p><h2 id="control-plane-behavior" tabindex="-1">Control plane behavior <a class="header-anchor" href="#control-plane-behavior" aria-label="Permalink to &quot;Control plane behavior&quot;">​</a></h2><p>All <a href="https://kubernetes.io/docs/concepts/overview/components/#control-plane-components" target="_blank" rel="noreferrer">control plane components</a> support running as a pool of interchangeable resources, replicated per component.</p><p>When you deploy a cluster control plane, place replicas of control plane components across multiple failure zones. If availability is an important concern, select at least three failure zones and replicate each individual control plane component (API server, scheduler, etcd, cluster controller manager) across at least three failure zones. If you are running a cloud controller manager then you should also replicate this across all the failure zones you selected.</p><div class="tip custom-block"><p class="custom-block-title">Note:</p><p>Kubernetes does not provide cross-zone resilience for the API server endpoints. You can use various techniques to improve availability for the cluster API server, including DNS round-robin, SRV records, or a third-party load balancing solution with health checking.</p></div><h2 id="node-behavior" tabindex="-1">Node behavior <a class="header-anchor" href="#node-behavior" aria-label="Permalink to &quot;Node behavior&quot;">​</a></h2><p>Kubernetes automatically spreads the Pods for workload resources (such as <a href="https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" target="_blank" rel="noreferrer">Deployment</a> or <a href="https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/" target="_blank" rel="noreferrer">StatefulSet</a>) across different nodes in a cluster. This spreading helps reduce the impact of failures.</p><p>When nodes start up, the kubelet on each node automatically adds <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/labels" target="_blank" rel="noreferrer">labels</a> to the Node object that represents that specific kubelet in the Kubernetes API. These labels can include <a href="https://kubernetes.io/docs/reference/labels-annotations-taints/#topologykubernetesiozone" target="_blank" rel="noreferrer">zone information</a>.</p><p>If your cluster spans multiple zones or regions, you can use node labels in conjunction with <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/" target="_blank" rel="noreferrer">Pod topology spread constraints</a> to control how Pods are spread across your cluster among fault domains: regions, zones, and even specific nodes. These hints enable the <a href="https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/" target="_blank" rel="noreferrer">scheduler</a> to place Pods for better expected availability, reducing the risk that a correlated failure affects your whole workload.</p><p>For example, you can set a constraint to make sure that the 3 replicas of a StatefulSet are all running in different zones to each other, whenever that is feasible. You can define this declaratively without explicitly defining which availability zones are in use for each workload.</p><h3 id="distributing-nodes-across-zones" tabindex="-1">Distributing nodes across zones <a class="header-anchor" href="#distributing-nodes-across-zones" aria-label="Permalink to &quot;Distributing nodes across zones&quot;">​</a></h3><p>Kubernetes&#39; core does not create nodes for you; you need to do that yourself, or use a tool such as the <a href="https://cluster-api.sigs.k8s.io/" target="_blank" rel="noreferrer">Cluster API</a> to manage nodes on your behalf.</p><p>Using tools such as the Cluster API you can define sets of machines to run as worker nodes for your cluster across multiple failure domains, and rules to automatically heal the cluster in case of whole-zone service disruption.</p><h2 id="manual-zone-assignment-for-pods" tabindex="-1">Manual zone assignment for Pods <a class="header-anchor" href="#manual-zone-assignment-for-pods" aria-label="Permalink to &quot;Manual zone assignment for Pods&quot;">​</a></h2><p>You can apply <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector" target="_blank" rel="noreferrer">node selector constraints</a> to Pods that you create, as well as to Pod templates in workload resources such as Deployment, StatefulSet, or Job.</p><h2 id="storage-access-for-zones" tabindex="-1">Storage access for zones <a class="header-anchor" href="#storage-access-for-zones" aria-label="Permalink to &quot;Storage access for zones&quot;">​</a></h2><p>When persistent volumes are created, the <code>PersistentVolumeLabel</code> <a href="https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/" target="_blank" rel="noreferrer">admission controller</a> automatically adds zone labels to any PersistentVolumes that are linked to a specific zone. The <a href="https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/" target="_blank" rel="noreferrer">scheduler</a> then ensures, through its <code>NoVolumeZoneConflict</code> predicate, that pods which claim a given PersistentVolume are only placed into the same zone as that volume.</p><p>You can specify a <a href="https://kubernetes.io/docs/concepts/storage/storage-classes" target="_blank" rel="noreferrer">StorageClass</a> for PersistentVolumeClaims that specifies the failure domains (zones) that the storage in that class may use. To learn about configuring a StorageClass that is aware of failure domains or zones, see <a href="https://kubernetes.io/docs/concepts/storage/storage-classes/#allowed-topologies" target="_blank" rel="noreferrer">Allowed topologies</a>.</p><h2 id="networking" tabindex="-1">Networking <a class="header-anchor" href="#networking" aria-label="Permalink to &quot;Networking&quot;">​</a></h2><p>By itself, Kubernetes does not include zone-aware networking. You can use a <a href="https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/" target="_blank" rel="noreferrer">network plugin</a> to configure cluster networking, and that network solution might have zone-specific elements. For example, if your cloud provider supports Services with <code>type=LoadBalancer</code>, the load balancer might only send traffic to Pods running in the same zone as the load balancer element processing a given connection. Check your cloud provider&#39;s documentation for details.</p><p>For custom or on-premises deployments, similar considerations apply. <a href="https://kubernetes.io/docs/concepts/services-networking/service/" target="_blank" rel="noreferrer">Service</a> and <a href="https://kubernetes.io/docs/concepts/services-networking/ingress/" target="_blank" rel="noreferrer">Ingress</a> behavior, including handling of different failure zones, does vary depending on exactly how your cluster is set up.</p><h2 id="fault-recovery" tabindex="-1">Fault recovery <a class="header-anchor" href="#fault-recovery" aria-label="Permalink to &quot;Fault recovery&quot;">​</a></h2><p>When you set up your cluster, you might also need to consider whether and how your setup can restore service if all the failure zones in a region go off-line at the same time. For example, do you rely on there being at least one node able to run Pods in a zone? Make sure that any cluster-critical repair work does not rely on there being at least one healthy node in your cluster. For example: if all nodes are unhealthy, you might need to run a repair Job with a special <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/" target="_blank" rel="noreferrer">toleration</a> so that the repair can complete enough to bring at least one node into service.</p><p>Kubernetes doesn&#39;t come with an answer for this challenge; however, it&#39;s something to consider.</p><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><p>To learn how the scheduler places Pods in a cluster, honoring the configured constraints, visit <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/" target="_blank" rel="noreferrer">Scheduling and Eviction</a>.</p>',30),s=[n];function i(l,c,u,h,d,p){return o(),t("div",null,s)}const b=e(r,[["render",i]]);export{g as __pageData,b as default};
