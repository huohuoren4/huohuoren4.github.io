import{_ as s,o as e,c as a,Q as o}from"./chunks/framework.01af844e.js";const F=JSON.parse('{"title":"Installing Kubernetes with kOps","description":"","frontmatter":{},"headers":[],"relativePath":"container/k8s/get_started/prod_env/install/install_k8s_kops.md","filePath":"container/k8s/get_started/prod_env/install/install_k8s_kops.md","lastUpdated":1694607182000}'),l={name:"container/k8s/get_started/prod_env/install/install_k8s_kops.md"},t=o('<h1 id="installing-kubernetes-with-kops" tabindex="-1">Installing Kubernetes with kOps <a class="header-anchor" href="#installing-kubernetes-with-kops" aria-label="Permalink to &quot;Installing Kubernetes with kOps&quot;">​</a></h1><p>This quickstart shows you how to easily install a Kubernetes cluster on AWS. It uses a tool called <a href="https://github.com/kubernetes/kops" target="_blank" rel="noreferrer">kOps</a>.</p><p><code>kOps</code> is an automated provisioning system:</p><ul><li>Fully automated installation</li><li>Uses DNS to identify clusters</li><li>Self-healing: everything runs in Auto-Scaling Groups</li><li>Multiple OS support (Amazon Linux, Debian, Flatcar, RHEL, Rocky and Ubuntu) - see the <a href="https://github.com/kubernetes/kops/blob/master/docs/operations/images.md" target="_blank" rel="noreferrer">images.md</a></li><li>High-Availability support - see the <a href="https://github.com/kubernetes/kops/blob/master/docs/operations/high_availability.md" target="_blank" rel="noreferrer">high_availability.md</a></li><li>Can directly provision, or generate terraform manifests - see the <a href="https://github.com/kubernetes/kops/blob/master/docs/terraform.md" target="_blank" rel="noreferrer">terraform.md</a></li></ul><h2 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-label="Permalink to &quot;Before you begin&quot;">​</a></h2><ul><li><p>You must have <a href="https://kubernetes.io/docs/tasks/tools/" target="_blank" rel="noreferrer">kubectl</a> installed.</p></li><li><p>You must <a href="https://github.com/kubernetes/kops#installing" target="_blank" rel="noreferrer">install</a> <code>kops</code> on a 64-bit (AMD64 and Intel 64) device architecture.</p></li><li><p>You must have an <a href="https://docs.aws.amazon.com/polly/latest/dg/setting-up.html" target="_blank" rel="noreferrer">AWS account</a>, generate <a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys" target="_blank" rel="noreferrer">IAM keys</a> and <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration" target="_blank" rel="noreferrer">configure</a> them. The IAM user will need <a href="https://github.com/kubernetes/kops/blob/master/docs/getting_started/aws.md#setup-iam-user" target="_blank" rel="noreferrer">adequate permissions</a>.</p></li></ul><h2 id="creating-a-cluster" tabindex="-1">Creating a cluster <a class="header-anchor" href="#creating-a-cluster" aria-label="Permalink to &quot;Creating a cluster&quot;">​</a></h2><h3 id="_1-5-install-kops" tabindex="-1">(1/5) Install kops <a class="header-anchor" href="#_1-5-install-kops" aria-label="Permalink to &quot;(1/5) Install kops&quot;">​</a></h3><p><strong>Installation</strong></p><p>Download kops from the <a href="https://github.com/kubernetes/kops/releases" target="_blank" rel="noreferrer">releases page</a> (it is also convenient to build from source):</p><ul><li><p>macOS</p><p>Download the latest release with the command:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-LO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/kubernetes/kops/releases/download/$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#9ECBFF;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">grep</span><span style="color:#9ECBFF;"> tag_name </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">cut</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#9ECBFF;"> &#39;&quot;&#39; </span><span style="color:#79B8FF;">-f</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">4</span><span style="color:#9ECBFF;">)/kops-darwin-amd64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-LO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/kubernetes/kops/releases/download/$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-s</span><span style="color:#032F62;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#032F62;"> tag_name </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">cut</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-d</span><span style="color:#032F62;"> &#39;&quot;&#39; </span><span style="color:#005CC5;">-f</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">4</span><span style="color:#032F62;">)/kops-darwin-amd64</span></span></code></pre></div><p>To download a specific version, replace the following portion of the command with the specific kops version.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#9ECBFF;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">grep</span><span style="color:#9ECBFF;"> tag_name </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">cut</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#9ECBFF;"> &#39;&quot;&#39; </span><span style="color:#79B8FF;">-f</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">4</span><span style="color:#9ECBFF;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-s</span><span style="color:#032F62;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#032F62;"> tag_name </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">cut</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-d</span><span style="color:#032F62;"> &#39;&quot;&#39; </span><span style="color:#005CC5;">-f</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">4</span><span style="color:#032F62;">)</span></span></code></pre></div><p>For example, to download kops version v1.20.0 type:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-LO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/kubernetes/kops/releases/download/v1.20.0/kops-darwin-amd64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-LO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/kubernetes/kops/releases/download/v1.20.0/kops-darwin-amd64</span></span></code></pre></div><p>Make the kops binary executable.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kops-darwin-amd64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kops-darwin-amd64</span></span></code></pre></div><p>Move the kops binary in to your PATH.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kops-darwin-amd64</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/bin/kops</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kops-darwin-amd64</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/bin/kops</span></span></code></pre></div><p>You can also install kops using <a href="https://docs.brew.sh/Homebrew-on-Linux" target="_blank" rel="noreferrer">Homebrew</a>.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kops</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kops</span></span></code></pre></div></li><li><p>Linux</p><p>Download the latest release with the command:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-LO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/kubernetes/kops/releases/download/$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#9ECBFF;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">grep</span><span style="color:#9ECBFF;"> tag_name </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">cut</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#9ECBFF;"> &#39;&quot;&#39; </span><span style="color:#79B8FF;">-f</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">4</span><span style="color:#9ECBFF;">)/kops-linux-amd64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-LO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/kubernetes/kops/releases/download/$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-s</span><span style="color:#032F62;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#032F62;"> tag_name </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">cut</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-d</span><span style="color:#032F62;"> &#39;&quot;&#39; </span><span style="color:#005CC5;">-f</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">4</span><span style="color:#032F62;">)/kops-linux-amd64</span></span></code></pre></div><p>To download a specific version of kops, replace the following portion of the command with the specific kops version.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#9ECBFF;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">grep</span><span style="color:#9ECBFF;"> tag_name </span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;"> </span><span style="color:#B392F0;">cut</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#9ECBFF;"> &#39;&quot;&#39; </span><span style="color:#79B8FF;">-f</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">4</span><span style="color:#9ECBFF;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-s</span><span style="color:#032F62;"> https://api.github.com/repos/kubernetes/kops/releases/latest </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#032F62;"> tag_name </span><span style="color:#D73A49;">|</span><span style="color:#032F62;"> </span><span style="color:#6F42C1;">cut</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-d</span><span style="color:#032F62;"> &#39;&quot;&#39; </span><span style="color:#005CC5;">-f</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">4</span><span style="color:#032F62;">)</span></span></code></pre></div><p>For example, to download kops version v1.20.0 type:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-LO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/kubernetes/kops/releases/download/v1.20.0/kops-linux-amd64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-LO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/kubernetes/kops/releases/download/v1.20.0/kops-linux-amd64</span></span></code></pre></div><p>Make the kops binary executable</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kops-linux-amd64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kops-linux-amd64</span></span></code></pre></div><p>Move the kops binary in to your PATH.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kops-linux-amd64</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/bin/kops</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kops-linux-amd64</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/bin/kops</span></span></code></pre></div><p>You can also install kops using <a href="https://docs.brew.sh/Homebrew-on-Linux" target="_blank" rel="noreferrer">Homebrew</a>.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kops</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kops</span></span></code></pre></div></li></ul><h3 id="_2-5-create-a-route53-domain-for-your-cluster" tabindex="-1">(2/5) Create a route53 domain for your cluster <a class="header-anchor" href="#_2-5-create-a-route53-domain-for-your-cluster" aria-label="Permalink to &quot;(2/5) Create a route53 domain for your cluster&quot;">​</a></h3><p>kops uses DNS for discovery, both inside the cluster and outside, so that you can reach the kubernetes API server from clients.</p><p>kops has a strong opinion on the cluster name: it should be a valid DNS name. By doing so you will no longer get your clusters confused, you can share clusters with your colleagues unambiguously, and you can reach them without relying on remembering an IP address.</p><p>You can, and probably should, use subdomains to divide your clusters. As our example we will use <code>useast1.dev.example.com</code>. The API server endpoint will then be <code>api.useast1.dev.example.com</code>.</p><p>A Route53 hosted zone can serve subdomains. Your hosted zone could be <code>useast1.dev.example.com</code>, but also <code>dev.example.com</code> or even <code>example.com</code>. kops works with any of these, so typically you choose for organization reasons (e.g. you are allowed to create records under <code>dev.example.com</code>, but not under <code>example.com</code>).</p><p>Let&#39;s assume you&#39;re using <code>dev.example.com</code> as your hosted zone. You create that hosted zone using the <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingNewSubdomain.html" target="_blank" rel="noreferrer">normal process</a>, or with a command such as <code>aws route53 create-hosted-zone --name dev.example.com --caller-reference 1</code>.</p><p>You must then set up your NS records in the parent domain, so that records in the domain will resolve. Here, you would create NS records in <code>example.com</code> for <code>dev</code>. If it is a root domain name you would configure the NS records at your domain registrar (e.g. <code>example.com</code> would need to be configured where you bought <code>example.com</code>).</p><p>Verify your route53 domain setup (it is the #1 cause of problems!). You can double-check that your cluster is configured correctly if you have the dig tool by running:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dig</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev.example.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dig</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev.example.com</span></span></code></pre></div><p>You should see the 4 NS records that Route53 assigned your hosted zone.</p><h3 id="_3-5-create-an-s3-bucket-to-store-your-clusters-state" tabindex="-1">(3/5) Create an S3 bucket to store your clusters state <a class="header-anchor" href="#_3-5-create-an-s3-bucket-to-store-your-clusters-state" aria-label="Permalink to &quot;(3/5) Create an S3 bucket to store your clusters state&quot;">​</a></h3><p>kops lets you manage your clusters even after installation. To do this, it must keep track of the clusters that you have created, along with their configuration, the keys they are using etc. This information is stored in an S3 bucket. S3 permissions are used to control access to the bucket.</p><p>Multiple clusters can use the same S3 bucket, and you can share an S3 bucket between your colleagues that administer the same clusters - this is much easier than passing around kubecfg files. But anyone with access to the S3 bucket will have administrative access to all your clusters, so you don&#39;t want to share it beyond the operations team.</p><p>So typically you have one S3 bucket for each ops team (and often the name will correspond to the name of the hosted zone above!)</p><p>In our example, we chose <code>dev.example.com</code> as our hosted zone, so let&#39;s pick <code>clusters.dev.example.com</code> as the S3 bucket name.</p><ul><li><p>Export <code>AWS_PROFILE</code> (if you need to select a profile for the AWS CLI to work)</p></li><li><p>Create the S3 bucket using <code>aws s3 mb s3://clusters.dev.example.com</code></p></li><li><p>You can <code>export KOPS_STATE_STORE=s3://clusters.dev.example.com</code> and then kops will use this location by default. We suggest putting this in your bash profile or similar.</p></li></ul><h3 id="_4-5-build-your-cluster-configuration" tabindex="-1">(4/5) Build your cluster configuration <a class="header-anchor" href="#_4-5-build-your-cluster-configuration" aria-label="Permalink to &quot;(4/5) Build your cluster configuration&quot;">​</a></h3><p>Run <code>kops create cluster</code> to create your cluster configuration:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">kops</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cluster</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--zones=us-east-1c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">useast1.dev.example.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">kops</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cluster</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--zones=us-east-1c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">useast1.dev.example.com</span></span></code></pre></div><p>kops will create the configuration for your cluster. Note that it only creates the configuration, it does not actually create the cloud resources - you&#39;ll do that in the next step with a <code>kops update cluster</code>. This give you an opportunity to review the configuration or change it.</p><p>It prints commands you can use to explore further:</p><ul><li>List your clusters with: <code>kops get cluster</code></li><li>Edit this cluster with: <code>kops edit cluster useast1.dev.example.com</code></li><li>Edit your node instance group: <code>kops edit ig --name=useast1.dev.example.com nodes</code></li><li>Edit your master instance group: <code>kops edit ig --name=useast1.dev.example.com master-us-east-1c</code></li></ul><p>If this is your first time using kops, do spend a few minutes to try those out! An instance group is a set of instances, which will be registered as kubernetes nodes. On AWS this is implemented via auto-scaling-groups. You can have several instance groups, for example if you wanted nodes that are a mix of spot and on-demand instances, or GPU and non-GPU instances.</p><h3 id="_5-5-create-the-cluster-in-aws" tabindex="-1">(5/5) Create the cluster in AWS <a class="header-anchor" href="#_5-5-create-the-cluster-in-aws" aria-label="Permalink to &quot;(5/5) Create the cluster in AWS&quot;">​</a></h3><p>Run <code>kops update cluster</code> to create your cluster in AWS:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">kops</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cluster</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">useast1.dev.example.com</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--yes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">kops</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cluster</span><span style="color:#24292E;"> </span><span style="color:#032F62;">useast1.dev.example.com</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--yes</span></span></code></pre></div><p>That takes a few seconds to run, but then your cluster will likely take a few minutes to actually be ready. <code>kops update cluster</code> will be the tool you&#39;ll use whenever you change the configuration of your cluster; it applies the changes you have made to the configuration to your cluster - reconfiguring AWS or kubernetes as needed.</p><p>For example, after you <code>kops edit ig nodes</code>, then <code>kops update cluster --yes</code> to apply your configuration, and sometimes you will also have to <code>kops rolling-update cluster</code> to roll out the configuration immediately.</p><p>Without <code>--yes</code>, <code>kops update cluster</code> will show you a preview of what it is going to do. This is handy for production clusters!</p><h3 id="explore-other-add-ons" tabindex="-1">Explore other add-ons <a class="header-anchor" href="#explore-other-add-ons" aria-label="Permalink to &quot;Explore other add-ons&quot;">​</a></h3><p>See the <a href="https://kubernetes.io/docs/concepts/cluster-administration/addons/" target="_blank" rel="noreferrer">list of add-ons</a> to explore other add-ons, including tools for logging, monitoring, network policy, visualization, and control of your Kubernetes cluster.</p><h2 id="cleanup" tabindex="-1">Cleanup <a class="header-anchor" href="#cleanup" aria-label="Permalink to &quot;Cleanup&quot;">​</a></h2><ul><li>To delete your cluster: <code>kops delete cluster useast1.dev.example.com --yes</code></li></ul><h2 id="what-s-next" tabindex="-1">What&#39;s next <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;What&#39;s next&quot;">​</a></h2><ul><li>Learn more about Kubernetes <a href="https://kubernetes.io/docs/concepts/" target="_blank" rel="noreferrer">concepts</a> and <a href="https://kubernetes.io/docs/reference/kubectl/" target="_blank" rel="noreferrer">kubectl</a>.</li><li>Learn more about <code>kOps</code> <a href="https://kops.sigs.k8s.io/" target="_blank" rel="noreferrer">advanced usage</a> for tutorials, best practices and advanced configuration options.</li><li>Follow <code>kOps</code> community discussions on Slack: <a href="https://kops.sigs.k8s.io/contributing/#other-ways-to-communicate-with-the-contributors" target="_blank" rel="noreferrer">community discussions</a>. (visit <a href="https://slack.k8s.io/" target="_blank" rel="noreferrer">https://slack.k8s.io/</a> for an invitation to this Slack workspace).</li><li>Contribute to <code>kOps</code> by addressing or raising an <a href="https://github.com/kubernetes/kops/issues" target="_blank" rel="noreferrer">issue GitHub Issues</a>.</li></ul>',46),n=[t];function p(r,c,i,d,u,y){return e(),a("div",null,n)}const g=s(l,[["render",p]]);export{F as __pageData,g as default};
