import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.01af844e.js";const h=JSON.parse('{"title":"How to monkeypatch/mock modules and environments","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/how_to_guides/mock.md","filePath":"python/pytest/how_to_guides/mock.md","lastUpdated":1692720083000}'),p={name:"python/pytest/how_to_guides/mock.md"},e=o(`<h1 id="how-to-monkeypatch-mock-modules-and-environments" tabindex="-1">How to monkeypatch/mock modules and environments <a class="header-anchor" href="#how-to-monkeypatch-mock-modules-and-environments" aria-label="Permalink to &quot;How to monkeypatch/mock modules and environments {#how-to-monkeypatch-mock-modules-and-environments}&quot;">​</a></h1><p>Sometimes tests need to invoke functionality which depends on global settings or which invokes code which cannot be easily tested such as network access. The <code>monkeypatch</code> fixture helps you to safely set/delete an attribute, dictionary item or environment variable, or to modify <code>sys.path</code> for importing.</p><p>The <code>monkeypatch</code> fixture provides these helper methods for safely patching and mocking functionality in tests:</p><ul><li><p><code>monkeypatch.setattr(obj, name, value, raising=True)</code></p></li><li><p><code>monkeypatch.delattr(obj, name, raising=True)</code></p></li><li><p><code>monkeypatch.setitem(mapping, name, value)</code></p></li><li><p><code>monkeypatch.delitem(obj, name, raising=True)</code></p></li><li><p><code>monkeypatch.setenv(name, value, prepend=None)</code></p></li><li><p><code>monkeypatch.delenv(name, raising=True)</code></p></li><li><p><code>monkeypatch.syspath_prepend(path)</code></p></li><li><p><code>monkeypatch.chdir(path)</code></p></li></ul><p>All modifications will be undone after the requesting test function or fixture has finished. The <code>raising</code> parameter determines if a <code>KeyError</code> or <code>AttributeError</code> will be raised if the target of the set/deletion operation does not exist.</p><p>Consider the following scenarios:</p><ol><li><p>Modifying the behavior of a function or the property of a class for a test e.g. there is an API call or database connection you will not make for a test but you know what the expected output should be. Use <code>monkeypatch.setattr</code> to patch the function or property with your desired testing behavior. This can include your own functions. Use <code>monkeypatch.delattr</code> to remove the function or property for the test.</p></li><li><p>Modifying the values of dictionaries e.g. you have a global configuration that you want to modify for certain test cases. Use <code>monkeypatch.setitem</code> to patch the dictionary for the test. <code>monkeypatch.delitem</code> can be used to remove items.</p></li><li><p>Modifying environment variables for a test e.g. to test program behavior if an environment variable is missing, or to set multiple values to a known variable. <code>monkeypatch.setenv</code> and <code>monkeypatch.delenv</code> can be used for these patches.</p></li><li><p>Use <code>monkeypatch.setenv(&quot;PATH&quot;, value, prepend=os.pathsep)</code> to modify <code>$PATH</code>, and <code>monkeypatch.chdir</code> to change the context of the current working directory during a test.</p></li><li><p>Use <code>monkeypatch.syspath_prepend</code> to modify <code>sys.path</code> which will also call <code>pkg_resources.fixup_namespace_packages</code> and <code>importlib.invalidate_caches()</code>.</p></li><li><p>Use <code>monkeypatch.context</code> to apply patches only in a specific scope, which can help control teardown of complex fixtures or patches to the stdlib.</p></li></ol><p>See the <a href="https://tetamap.wordpress.com//2009/03/03/monkeypatching-in-unit-tests-done-right/" target="_blank" rel="noreferrer">monkeypatch blog post</a> for some introduction material and a discussion of its motivation.</p><h2 id="monkeypatching-functions" tabindex="-1">Monkeypatching functions <a class="header-anchor" href="#monkeypatching-functions" aria-label="Permalink to &quot;Monkeypatching functions {#monkeypatching-functions}&quot;">​</a></h2><p>Consider a scenario where you are working with user directories. In the context of testing, you do not want your test to depend on the running user. <code>monkeypatch</code> can be used to patch functions dependent on the user to always return a specific value.</p><p>In this example, <code>monkeypatch.setattr</code> is used to patch <code>Path.home</code> so that the known testing path <code>Path(&quot;/abc&quot;)</code> is always used when the test is run. This removes any dependency on the running user for testing purposes. <code>monkeypatch.setattr</code> must be called before the function which will use the patched function is called. After the test function finishes the <code>Path.home</code> modification will be undone.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of test_module.py with source code and the test</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> pathlib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Path</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getssh</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Simple function to return expanded homedir ssh path.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Path.home() </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;.ssh&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_getssh</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># mocked return function to replace Path.home</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># always return &#39;/abc&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mockreturn</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Path(</span><span style="color:#9ECBFF;">&quot;/abc&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Application of the monkeypatch to replace Path.home</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># with the behavior of mockreturn defined above.</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setattr(Path, </span><span style="color:#9ECBFF;">&quot;home&quot;</span><span style="color:#E1E4E8;">, mockreturn)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Calling getssh() will use mockreturn in place of Path.home</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># for this test with the monkeypatch.</span></span>
<span class="line"><span style="color:#E1E4E8;">    x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> getssh()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> Path(</span><span style="color:#9ECBFF;">&quot;/abc/.ssh&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of test_module.py with source code and the test</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> pathlib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Path</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getssh</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Simple function to return expanded homedir ssh path.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Path.home() </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;.ssh&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_getssh</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># mocked return function to replace Path.home</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># always return &#39;/abc&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mockreturn</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Path(</span><span style="color:#032F62;">&quot;/abc&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Application of the monkeypatch to replace Path.home</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># with the behavior of mockreturn defined above.</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setattr(Path, </span><span style="color:#032F62;">&quot;home&quot;</span><span style="color:#24292E;">, mockreturn)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Calling getssh() will use mockreturn in place of Path.home</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># for this test with the monkeypatch.</span></span>
<span class="line"><span style="color:#24292E;">    x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> getssh()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> Path(</span><span style="color:#032F62;">&quot;/abc/.ssh&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="monkeypatching-returned-objects-building-mock-classes" tabindex="-1">Monkeypatching returned objects: building mock classes <a class="header-anchor" href="#monkeypatching-returned-objects-building-mock-classes" aria-label="Permalink to &quot;Monkeypatching returned objects: building mock classes {#monkeypatching-returned-objects-building-mock-classes}&quot;">​</a></h2><p><code>monkeypatch.setattr</code> can be used in conjunction with classes to mock returned objects from functions instead of values. Imagine a simple function to take an API url and return the json response.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of app.py, a simple API retrieval example</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> requests</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get_json</span><span style="color:#E1E4E8;">(url):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Takes a URL, and returns the JSON.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> requests.get(url)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> r.json()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of app.py, a simple API retrieval example</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> requests</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get_json</span><span style="color:#24292E;">(url):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Takes a URL, and returns the JSON.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> requests.get(url)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> r.json()</span></span></code></pre></div><p>We need to mock <code>r</code>, the returned response object for testing purposes. The mock of <code>r</code> needs a <code>.json()</code> method which returns a dictionary. This can be done in our test file by defining a class to represent <code>r</code>.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py, a simple test for our API retrieval</span></span>
<span class="line"><span style="color:#6A737D;"># import requests for the purposes of monkeypatching</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># our app.py that includes the get_json() function</span></span>
<span class="line"><span style="color:#6A737D;"># this is the previous code block example</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># custom class to be the mock return value</span></span>
<span class="line"><span style="color:#6A737D;"># will override the requests.Response returned from requests.get</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MockResponse</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># mock json() method always returns a specific testing dictionary</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">staticmethod</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;mock_key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;mock_response&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_get_json</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Any arguments may be passed and mock_get() will always return our</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># mocked object, which only has the .json() method.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_get</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">kwargs):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> MockResponse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># apply the monkeypatch for requests.get to mock_get</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setattr(requests, </span><span style="color:#9ECBFF;">&quot;get&quot;</span><span style="color:#E1E4E8;">, mock_get)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># app.get_json, which contains requests.get, uses the monkeypatch</span></span>
<span class="line"><span style="color:#E1E4E8;">    result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.get_json(</span><span style="color:#9ECBFF;">&quot;https://fakeurl&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> result[</span><span style="color:#9ECBFF;">&quot;mock_key&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;mock_response&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py, a simple test for our API retrieval</span></span>
<span class="line"><span style="color:#6A737D;"># import requests for the purposes of monkeypatching</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># our app.py that includes the get_json() function</span></span>
<span class="line"><span style="color:#6A737D;"># this is the previous code block example</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># custom class to be the mock return value</span></span>
<span class="line"><span style="color:#6A737D;"># will override the requests.Response returned from requests.get</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MockResponse</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># mock json() method always returns a specific testing dictionary</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">staticmethod</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;mock_key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;mock_response&quot;</span><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_get_json</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Any arguments may be passed and mock_get() will always return our</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># mocked object, which only has the .json() method.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_get</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">args, </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">kwargs):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> MockResponse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># apply the monkeypatch for requests.get to mock_get</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setattr(requests, </span><span style="color:#032F62;">&quot;get&quot;</span><span style="color:#24292E;">, mock_get)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># app.get_json, which contains requests.get, uses the monkeypatch</span></span>
<span class="line"><span style="color:#24292E;">    result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.get_json(</span><span style="color:#032F62;">&quot;https://fakeurl&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> result[</span><span style="color:#032F62;">&quot;mock_key&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;mock_response&quot;</span></span></code></pre></div><p><code>monkeypatch</code> applies the mock for <code>requests.get</code> with our <code>mock_get</code> function. The <code>mock_get</code> function returns an instance of the <code>MockResponse</code> class, which has a <code>json()</code> method defined to return a known testing dictionary and does not require any outside API connection.</p><p>You can build the <code>MockResponse</code> class with the appropriate degree of complexity for the scenario you are testing. For instance, it could include an <code>ok</code> property that always returns <code>True</code>, or return different values from the <code>json()</code> mocked method based on input strings.</p><p>This mock can be shared across tests using a <code>fixture</code>:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py, a simple test for our API retrieval</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># app.py that includes the get_json() function</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># custom class to be the mock return value of requests.get()</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MockResponse</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@</span><span style="color:#79B8FF;">staticmethod</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;mock_key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;mock_response&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># monkeypatched requests.get moved to a fixture</span></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_response</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Requests.get() mocked to return {&#39;mock_key&#39;:&#39;mock_response&#39;}.&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_get</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">args, </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;">kwargs):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> MockResponse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setattr(requests, </span><span style="color:#9ECBFF;">&quot;get&quot;</span><span style="color:#E1E4E8;">, mock_get)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># notice our test uses the custom fixture instead of monkeypatch directly</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_get_json</span><span style="color:#E1E4E8;">(mock_response):</span></span>
<span class="line"><span style="color:#E1E4E8;">    result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.get_json(</span><span style="color:#9ECBFF;">&quot;https://fakeurl&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> result[</span><span style="color:#9ECBFF;">&quot;mock_key&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;mock_response&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py, a simple test for our API retrieval</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># app.py that includes the get_json() function</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># custom class to be the mock return value of requests.get()</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MockResponse</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@</span><span style="color:#005CC5;">staticmethod</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;mock_key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;mock_response&quot;</span><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># monkeypatched requests.get moved to a fixture</span></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_response</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Requests.get() mocked to return {&#39;mock_key&#39;:&#39;mock_response&#39;}.&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_get</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">args, </span><span style="color:#D73A49;">**</span><span style="color:#24292E;">kwargs):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> MockResponse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setattr(requests, </span><span style="color:#032F62;">&quot;get&quot;</span><span style="color:#24292E;">, mock_get)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># notice our test uses the custom fixture instead of monkeypatch directly</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_get_json</span><span style="color:#24292E;">(mock_response):</span></span>
<span class="line"><span style="color:#24292E;">    result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.get_json(</span><span style="color:#032F62;">&quot;https://fakeurl&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> result[</span><span style="color:#032F62;">&quot;mock_key&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;mock_response&quot;</span></span></code></pre></div><p>Furthermore, if the mock was designed to be applied to all tests, the <code>fixture</code> could be moved to a <code>conftest.py</code> file and use the with <code>autouse=True</code> option.</p><h2 id="global-patch-example-preventing-requests-from-remote-operations" tabindex="-1">Global patch example: preventing “requests” from remote operations <a class="header-anchor" href="#global-patch-example-preventing-requests-from-remote-operations" aria-label="Permalink to &quot;Global patch example: preventing “requests” from remote operations {#global-patch-example-preventing-requests-from-remote-operations}&quot;">​</a></h2><p>If you want to prevent the “requests” library from performing http requests in all your tests, you can do:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of conftest.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">autouse</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">no_requests</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Remove requests.sessions.Session.request for all tests.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.delattr(</span><span style="color:#9ECBFF;">&quot;requests.sessions.Session.request&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of conftest.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">autouse</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">no_requests</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Remove requests.sessions.Session.request for all tests.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.delattr(</span><span style="color:#032F62;">&quot;requests.sessions.Session.request&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>This autouse fixture will be executed for each test function and it will delete the method <code>request.session.Session.request</code> so that any attempts within tests to create http requests will fail.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Be advised that it is not recommended to patch builtin functions such as <code>open</code>, <code>compile</code>, etc., because it might break pytest’s internals. If that’s unavoidable, passing <code>--tb=native</code>, <code>--assert=plain</code> and <code>--capture=no</code> might help although there’s no guarantee.</p></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Mind that patching <code>stdlib</code> functions and some third-party libraries used by pytest might break pytest itself, therefore in those cases it is recommended to use <code>MonkeyPatch.context()</code> to limit the patching to the block you want tested:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> functools</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_partial</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> monkeypatch.context() </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> m:</span></span>
<span class="line"><span style="color:#E1E4E8;">        m.setattr(functools, </span><span style="color:#9ECBFF;">&quot;partial&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> functools.partial </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> functools</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_partial</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> monkeypatch.context() </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> m:</span></span>
<span class="line"><span style="color:#24292E;">        m.setattr(functools, </span><span style="color:#032F62;">&quot;partial&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> functools.partial </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span></code></pre></div><p>See <a href="https://github.com/pytest-dev/pytest/issues/3290" target="_blank" rel="noreferrer">issue #3290</a> for details.</p></div><h2 id="monkeypatching-environment-variables" tabindex="-1">Monkeypatching environment variables <a class="header-anchor" href="#monkeypatching-environment-variables" aria-label="Permalink to &quot;Monkeypatching environment variables {#monkeypatching-environment-variables}&quot;">​</a></h2><p>If you are working with environment variables you often need to safely change the values or delete them from the system for testing purposes. <code>monkeypatch</code> provides a mechanism to do this using the <code>setenv</code> and <code>delenv</code> method. Our example code to test:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of our original code file e.g. code.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> os</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get_os_user_lower</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Simple retrieval function.</span></span>
<span class="line"><span style="color:#9ECBFF;">    Returns lowercase USER or raises OSError.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    username </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.getenv(</span><span style="color:#9ECBFF;">&quot;USER&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> username </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">raise</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">OSError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;USER environment is not set.&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> username.lower()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of our original code file e.g. code.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> os</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get_os_user_lower</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Simple retrieval function.</span></span>
<span class="line"><span style="color:#032F62;">    Returns lowercase USER or raises OSError.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    username </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> os.getenv(</span><span style="color:#032F62;">&quot;USER&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> username </span><span style="color:#D73A49;">is</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">None</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">raise</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OSError</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;USER environment is not set.&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> username.lower()</span></span></code></pre></div><p>There are two potential paths. First, the <code>USER</code> environment variable is set to a value. Second, the <code>USER</code> environment variable does not exist. Using <code>monkeypatch</code> both paths can be safely tested without impacting the running environment:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of our test file e.g. test_code.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_upper_to_lower</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Set the USER env var to assert the behavior.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setenv(</span><span style="color:#9ECBFF;">&quot;USER&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;TestingUser&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> get_os_user_lower() </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;testinguser&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_raise_exception</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Remove the USER env var and assert OSError is raised.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.delenv(</span><span style="color:#9ECBFF;">&quot;USER&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">raising</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> pytest.raises(</span><span style="color:#79B8FF;">OSError</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        _ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_os_user_lower()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of our test file e.g. test_code.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_upper_to_lower</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Set the USER env var to assert the behavior.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setenv(</span><span style="color:#032F62;">&quot;USER&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;TestingUser&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> get_os_user_lower() </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;testinguser&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_raise_exception</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Remove the USER env var and assert OSError is raised.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.delenv(</span><span style="color:#032F62;">&quot;USER&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">raising</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> pytest.raises(</span><span style="color:#005CC5;">OSError</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        _ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_os_user_lower()</span></span></code></pre></div><p>This behavior can be moved into <code>fixture</code> structures and shared across tests:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of our test file e.g. test_code.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_env_user</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setenv(</span><span style="color:#9ECBFF;">&quot;USER&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;TestingUser&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_env_missing</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.delenv(</span><span style="color:#9ECBFF;">&quot;USER&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">raising</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># notice the tests reference the fixtures for mocks</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_upper_to_lower</span><span style="color:#E1E4E8;">(mock_env_user):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> get_os_user_lower() </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;testinguser&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_raise_exception</span><span style="color:#E1E4E8;">(mock_env_missing):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> pytest.raises(</span><span style="color:#79B8FF;">OSError</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        _ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_os_user_lower()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of our test file e.g. test_code.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_env_user</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setenv(</span><span style="color:#032F62;">&quot;USER&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;TestingUser&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_env_missing</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.delenv(</span><span style="color:#032F62;">&quot;USER&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">raising</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># notice the tests reference the fixtures for mocks</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_upper_to_lower</span><span style="color:#24292E;">(mock_env_user):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> get_os_user_lower() </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;testinguser&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_raise_exception</span><span style="color:#24292E;">(mock_env_missing):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> pytest.raises(</span><span style="color:#005CC5;">OSError</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        _ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_os_user_lower()</span></span></code></pre></div><h2 id="monkeypatching-dictionaries" tabindex="-1">Monkeypatching dictionaries <a class="header-anchor" href="#monkeypatching-dictionaries" aria-label="Permalink to &quot;Monkeypatching dictionaries {#monkeypatching-dictionaries}&quot;">​</a></h2><p><code>monkeypatch.setitem</code> can be used to safely set the values of dictionaries to specific values during tests. Take this simplified connection string example:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of app.py to generate a simple connection string</span></span>
<span class="line"><span style="color:#79B8FF;">DEFAULT_CONFIG</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;user1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;database&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;db1&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create_connection_string</span><span style="color:#E1E4E8;">(config</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">None</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Creates a connection string from input or defaults.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">DEFAULT_CONFIG</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">f</span><span style="color:#9ECBFF;">&quot;User Id=</span><span style="color:#79B8FF;">{</span><span style="color:#E1E4E8;">config[</span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#79B8FF;">}</span><span style="color:#9ECBFF;">; Location=</span><span style="color:#79B8FF;">{</span><span style="color:#E1E4E8;">config[</span><span style="color:#9ECBFF;">&#39;database&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#79B8FF;">}</span><span style="color:#9ECBFF;">;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of app.py to generate a simple connection string</span></span>
<span class="line"><span style="color:#005CC5;">DEFAULT_CONFIG</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;user1&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;database&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;db1&quot;</span><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create_connection_string</span><span style="color:#24292E;">(config</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">None</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Creates a connection string from input or defaults.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    config </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> config </span><span style="color:#D73A49;">or</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">DEFAULT_CONFIG</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">f</span><span style="color:#032F62;">&quot;User Id=</span><span style="color:#005CC5;">{</span><span style="color:#24292E;">config[</span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">]</span><span style="color:#005CC5;">}</span><span style="color:#032F62;">; Location=</span><span style="color:#005CC5;">{</span><span style="color:#24292E;">config[</span><span style="color:#032F62;">&#39;database&#39;</span><span style="color:#24292E;">]</span><span style="color:#005CC5;">}</span><span style="color:#032F62;">;&quot;</span></span></code></pre></div><p>For testing purposes we can patch the <code>DEFAULT_CONFIG</code> dictionary to specific values.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py</span></span>
<span class="line"><span style="color:#6A737D;"># app.py with the connection string function (prior code block)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_connection</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Patch the values of DEFAULT_CONFIG to specific</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># testing values only for this test.</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setitem(app.</span><span style="color:#79B8FF;">DEFAULT_CONFIG</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;test_user&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setitem(app.</span><span style="color:#79B8FF;">DEFAULT_CONFIG</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;database&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;test_db&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># expected result based on the mocks</span></span>
<span class="line"><span style="color:#E1E4E8;">    expected </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;User Id=test_user; Location=test_db;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># the test uses the monkeypatched dictionary settings</span></span>
<span class="line"><span style="color:#E1E4E8;">    result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.create_connection_string()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> expected</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py</span></span>
<span class="line"><span style="color:#6A737D;"># app.py with the connection string function (prior code block)</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_connection</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Patch the values of DEFAULT_CONFIG to specific</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># testing values only for this test.</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setitem(app.</span><span style="color:#005CC5;">DEFAULT_CONFIG</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;test_user&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setitem(app.</span><span style="color:#005CC5;">DEFAULT_CONFIG</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;database&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;test_db&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># expected result based on the mocks</span></span>
<span class="line"><span style="color:#24292E;">    expected </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;User Id=test_user; Location=test_db;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># the test uses the monkeypatched dictionary settings</span></span>
<span class="line"><span style="color:#24292E;">    result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.create_connection_string()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> expected</span></span></code></pre></div><p>You can use the <code>monkeypatch.delitem</code> to remove values.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># app.py with the connection string function</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_missing_user</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># patch the DEFAULT_CONFIG t be missing the &#39;user&#39; key</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.delitem(app.</span><span style="color:#79B8FF;">DEFAULT_CONFIG</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">raising</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Key error expected because a config is not passed, and the</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># default is now missing the &#39;user&#39; entry.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> pytest.raises(</span><span style="color:#79B8FF;">KeyError</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        _ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.create_connection_string()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># app.py with the connection string function</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_missing_user</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># patch the DEFAULT_CONFIG t be missing the &#39;user&#39; key</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.delitem(app.</span><span style="color:#005CC5;">DEFAULT_CONFIG</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">raising</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Key error expected because a config is not passed, and the</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># default is now missing the &#39;user&#39; entry.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> pytest.raises(</span><span style="color:#005CC5;">KeyError</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        _ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.create_connection_string()</span></span></code></pre></div><p>The modularity of fixtures gives you the flexibility to define separate fixtures for each potential mock and reference them in the needed tests.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># app.py with the connection string function</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># all of the mocks are moved into separated fixtures</span></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_test_user</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Set the DEFAULT_CONFIG user to test_user.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setitem(app.</span><span style="color:#79B8FF;">DEFAULT_CONFIG</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;test_user&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_test_database</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Set the DEFAULT_CONFIG database to test_db.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.setitem(app.</span><span style="color:#79B8FF;">DEFAULT_CONFIG</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;database&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;test_db&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mock_missing_default_user</span><span style="color:#E1E4E8;">(monkeypatch):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Remove the user key from DEFAULT_CONFIG&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    monkeypatch.delitem(app.</span><span style="color:#79B8FF;">DEFAULT_CONFIG</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">raising</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">False</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># tests reference only the fixture mocks that are needed</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_connection</span><span style="color:#E1E4E8;">(mock_test_user, mock_test_database):</span></span>
<span class="line"><span style="color:#E1E4E8;">    expected </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;User Id=test_user; Location=test_db;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.create_connection_string()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> expected</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_missing_user</span><span style="color:#E1E4E8;">(mock_missing_default_user):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> pytest.raises(</span><span style="color:#79B8FF;">KeyError</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        _ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app.create_connection_string()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># contents of test_app.py</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># app.py with the connection string function</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> app</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># all of the mocks are moved into separated fixtures</span></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_test_user</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Set the DEFAULT_CONFIG user to test_user.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setitem(app.</span><span style="color:#005CC5;">DEFAULT_CONFIG</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;test_user&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_test_database</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Set the DEFAULT_CONFIG database to test_db.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.setitem(app.</span><span style="color:#005CC5;">DEFAULT_CONFIG</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;database&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;test_db&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mock_missing_default_user</span><span style="color:#24292E;">(monkeypatch):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Remove the user key from DEFAULT_CONFIG&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    monkeypatch.delitem(app.</span><span style="color:#005CC5;">DEFAULT_CONFIG</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;user&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">raising</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">False</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># tests reference only the fixture mocks that are needed</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_connection</span><span style="color:#24292E;">(mock_test_user, mock_test_database):</span></span>
<span class="line"><span style="color:#24292E;">    expected </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;User Id=test_user; Location=test_db;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.create_connection_string()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> expected</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_missing_user</span><span style="color:#24292E;">(mock_missing_default_user):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> pytest.raises(</span><span style="color:#005CC5;">KeyError</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        _ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app.create_connection_string()</span></span></code></pre></div><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference {#api-reference}&quot;">​</a></h2><p>Consult the docs for the <code>MonkeyPatch</code> class.</p>`,46),l=[e];function t(c,r,y,i,E,u){return n(),a("div",null,l)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
