import{_ as s,o as n,c as o,V as a}from"./chunks/framework.d3b95951.js";const u=JSON.parse('{"title":"Writing hook functions","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/how_to_guides/hook_func.md","filePath":"python/pytest/how_to_guides/hook_func.md"}'),e={name:"python/pytest/how_to_guides/hook_func.md"},l=a(`<h1 id="writing-hook-functions" tabindex="-1">Writing hook functions <a class="header-anchor" href="#writing-hook-functions" aria-label="Permalink to &quot;Writing hook functions&quot;">​</a></h1><h2 id="hook-function-validation-and-execution" tabindex="-1">hook function validation and execution <a class="header-anchor" href="#hook-function-validation-and-execution" aria-label="Permalink to &quot;hook function validation and execution&quot;">​</a></h2><p>pytest calls hook functions from registered plugins for any given hook specification. Let’s look at a typical hook function for the <code>pytest_collection_modifyitems(session, config, items)</code> hook which pytest calls after collection of all test items is completed.</p><p>When we implement a <code>pytest_collection_modifyitems</code> function in our plugin pytest will during registration verify that you use argument names which match the specification and bail out if not.</p><p>Let’s look at a possible implementation:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pytest_collection_modifyitems</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">config,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">items</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># called after collection is completed</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># you can modify the \`\`items\`\` list</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">...</span></span></code></pre></div><p>Here, <code>pytest</code> will pass in <code>config</code> (the pytest config object) and <code>items</code> (the list of collected test items) but will not pass in the <code>session</code> argument because we didn’t list it in the function signature. This dynamic “pruning” of arguments allows <code>pytest</code> to be “future-compatible”: we can introduce new hook named parameters without breaking the signatures of existing hook implementations. It is one of the reasons for the general long-lived compatibility of pytest plugins.</p><p>Note that hook functions other than <code>pytest_runtest_*</code> are not allowed to raise exceptions. Doing so will break the pytest run.</p><h2 id="firstresult-stop-at-first-non-none-result" tabindex="-1">firstresult: stop at first non-None result <a class="header-anchor" href="#firstresult-stop-at-first-non-none-result" aria-label="Permalink to &quot;firstresult: stop at first non-None result&quot;">​</a></h2><p>Most calls to <code>pytest</code> hooks result in a list of results which contains all non-None results of the called hook functions.</p><p>Some hook specifications use the <code>firstresult=True</code> option so that the hook call only executes until the first of N registered functions returns a non-None result which is then taken as result of the overall hook call. The remaining hook functions will not be called in this case.</p><h2 id="hook-wrappers-executing-around-other-hooks" tabindex="-1">hook wrappers: executing around other hooks <a class="header-anchor" href="#hook-wrappers-executing-around-other-hooks" aria-label="Permalink to &quot;hook wrappers: executing around other hooks&quot;">​</a></h2><p>pytest plugins can implement hook wrappers which wrap the execution of other hook implementations. A hook wrapper is a generator function which yields exactly once. When pytest invokes hooks it first executes hook wrappers and passes the same arguments as to the regular hooks.</p><p>At the yield point of the hook wrapper pytest will execute the next hook implementations and return their result to the yield point, or will propagate an exception if they raised.</p><p>Here is an example definition of a hook wrapper:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hookimpl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">wrapper</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_pyfunc_call</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pyfuncitem</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">do_something_before_next_hook_executes</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># If the outcome is an exception, will raise the exception.</span></span>
<span class="line"><span style="color:#A6ACCD;">    res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    new_res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">post_process_result</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">res</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Override the return value to the plugin system.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> new_res</span></span></code></pre></div><p>The hook wrapper needs to return a result for the hook, or raise an exception.</p><p>In many cases, the wrapper only needs to perform tracing or other side effects around the actual hook implementations, in which case it can return the result value of the <code>yield</code>. The simplest (though useless) hook wrapper is <code>return (yield)</code>.</p><p>In other cases, the wrapper wants the adjust or adapt the result, in which case it can return a new value. If the result of the underlying hook is a mutable object, the wrapper may modify that result, but it’s probably better to avoid it.</p><p>If the hook implementation failed with an exception, the wrapper can handle that exception using a <code>try-catch-finally</code> around the <code>yield</code>, by propagating it, supressing it, or raising a different exception entirely.</p><p>For more information, consult the pluggy documentation about hook wrappers.</p><h2 id="hook-function-ordering-call-example" tabindex="-1">Hook function ordering / call example <a class="header-anchor" href="#hook-function-ordering-call-example" aria-label="Permalink to &quot;Hook function ordering / call example&quot;">​</a></h2><p>For any given hook specification there may be more than one implementation and we thus generally view <code>hook</code> execution as a <code>1:N</code> function call where N is the number of registered functions. There are ways to influence if a hook implementation comes before or after others, i.e. the position in the N-sized list of functions:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Plugin 1</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hookimpl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">tryfirst</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_collection_modifyitems</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">items</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># will execute as early as possible</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Plugin 2</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hookimpl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">trylast</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_collection_modifyitems</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">items</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># will execute as late as possible</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Plugin 3</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hookimpl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">wrapper</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_collection_modifyitems</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">items</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># will execute even before the tryfirst one above!</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># will execute after all non-wrappers executed</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span></code></pre></div><p>Here is the order of execution:</p><ol><li><p>Plugin3’s pytest_collection_modifyitems called until the yield point because it is a hook wrapper.</p></li><li><p>Plugin1’s pytest_collection_modifyitems is called because it is marked with <code>tryfirst=True</code>.</p></li><li><p>Plugin2’s pytest_collection_modifyitems is called because it is marked with <code>trylast=True</code> (but even without this mark it would come after Plugin1).</p></li><li><p>Plugin3’s pytest_collection_modifyitems then executing the code after the yield point. The yield receives the result from calling the non-wrappers, or raises an exception if the non-wrappers raised.</p></li></ol><p>It’s possible to use <code>tryfirst</code> and <code>trylast</code> also on hook wrappers in which case it will influence the ordering of hook wrappers among each other.</p><h2 id="declaring-new-hooks" tabindex="-1">Declaring new hooks <a class="header-anchor" href="#declaring-new-hooks" aria-label="Permalink to &quot;Declaring new hooks&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Note</p><p>This is a quick overview on how to add new hooks and how they work in general, but a more complete overview can be found in the pluggy documentation.</p></div><p>Plugins and <code>conftest.py</code> files may declare new hooks that can then be implemented by other plugins in order to alter behaviour or interact with the new plugin:</p><ul><li><p><strong>pytest_addhooks</strong>(<em>pluginmanager</em>)</p><p>Called at plugin registration time to allow adding new hooks via a call to <code>pluginmanager.add_hookspecs(module_or_class, prefix)</code>.</p><p><em>Parameters</em>:</p><ul><li><code>pluginmanager (pytest.PytestPluginManager)</code> – The pytest plugin manager.</li></ul><div class="tip custom-block"><p class="custom-block-title">Note</p><p>This hook is incompatible with hook wrappers.</p></div></li></ul><p>Hooks are usually declared as do-nothing functions that contain only documentation describing when the hook will be called and what return values are expected. The names of the functions must start with <code>pytest_</code> otherwise pytest won’t recognize them.</p><p>Here’s an example. Let’s assume this code is in the <code>sample_hook.py</code> module.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_my_hook</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Receives the pytest config and does things with it</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span></code></pre></div><p>To register the hooks with pytest they need to be structured in their own module or class. This class or module can then be passed to the <code>pluginmanager</code> using the <code>pytest_addhooks</code> function (which itself is a hook exposed by pytest).</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_addhooks</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pluginmanager</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">This example assumes the hooks are grouped in the &#39;sample_hook&#39; module.</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> my_app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tests </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> sample_hook</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    pluginmanager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_hookspecs</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sample_hook</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>For a real world example, see newhooks.py from xdist.</p><p>Hooks may be called both from fixtures or from other hooks. In both cases, hooks are called through the <code>hook</code> object, available in the <code>config</code> object. Most hooks receive a <code>config</code> object directly, while fixtures may use the <code>pytestconfig</code> fixture which provides the same object.</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">my_fixture</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pytestconfig</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># call the hook called &quot;pytest_my_hook&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># &#39;result&#39; will be a list of return values from all registered functions.</span></span>
<span class="line"><span style="color:#A6ACCD;">    result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pytestconfig</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">hook</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pytest_my_hook</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">pytestconfig</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Hooks receive parameters using only keyword arguments.</p></div><p>Now your hook is ready to be used. To register a function at the hook, other plugins or users must now simply define the function <code>pytest_my_hook</code> with the correct signature in their <code>conftest.py</code>.</p><p>Example:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_my_hook</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Print all active hooks to the screen.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">config</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">hook</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="using-hooks-in-pytest-addoption" tabindex="-1">Using hooks in pytest_addoption <a class="header-anchor" href="#using-hooks-in-pytest-addoption" aria-label="Permalink to &quot;Using hooks in pytest_addoption&quot;">​</a></h2><p>Occasionally, it is necessary to change the way in which command line options are defined by one plugin based on hooks in another plugin. For example, a plugin may expose a command line option for which another plugin needs to define the default value. The pluginmanager can be used to install and use hooks to accomplish this. The plugin would define and add the hooks and use pytest_addoption as follows:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># contents of hooks.py</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Use firstresult=True because we only want one plugin to define this</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># default value</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">hookspec</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">firstresult</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_config_file_default_value</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">Return the default value for the config file command line option.</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># contents of myplugin.py</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_addhooks</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pluginmanager</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">This example assumes the hooks are grouped in the &#39;hooks&#39; module.</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> hooks</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    pluginmanager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_hookspecs</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">hooks</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_addoption</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">parser</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">pluginmanager</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pluginmanager</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">hook</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pytest_config_file_default_value</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addoption</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--config-file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">help</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Config file to use, defaults to </span><span style="color:#F78C6C;">%(default)s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">default</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">default_value</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>The conftest.py that is using myplugin would simply define the hook as follows:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_config_file_default_value</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">config.yaml</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="optionally-using-hooks-from-3rd-party-plugins" tabindex="-1">Optionally using hooks from 3rd party plugins <a class="header-anchor" href="#optionally-using-hooks-from-3rd-party-plugins" aria-label="Permalink to &quot;Optionally using hooks from 3rd party plugins&quot;">​</a></h2><p>Using new hooks from plugins as explained above might be a little tricky because of the standard validation mechanism: if you depend on a plugin that is not installed, validation will fail and the error message will not make much sense to your users.</p><p>One approach is to defer the hook implementation to a new plugin instead of declaring the hook functions directly in your plugin module, for example:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># contents of myplugin.py</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DeferPlugin</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">Simple plugin to defer pytest-xdist hook functions.</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_testnodedown</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">node</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">error</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span><span style="color:#676E95;font-style:italic;">standard xdist hook function.</span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_configure</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">pluginmanager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hasplugin</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xdist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        config</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">pluginmanager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">DeferPlugin</span><span style="color:#89DDFF;">())</span></span></code></pre></div><p>This has the added benefit of allowing you to conditionally install hooks depending on which plugins are installed.</p><h2 id="storing-data-on-items-across-hook-functions" tabindex="-1">Storing data on items across hook functions <a class="header-anchor" href="#storing-data-on-items-across-hook-functions" aria-label="Permalink to &quot;Storing data on items across hook functions&quot;">​</a></h2><p>Plugins often need to store data on Items in one hook implementation, and access it in another. One common solution is to just assign some private attribute directly on the item, but type-checkers like mypy frown upon this, and it may also cause conflicts with other plugins. So pytest offers a better way to do this, item.stash.</p><p>To use the “stash” in your plugins, first create “stash keys” somewhere at the top level of your plugin:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">been_there_key </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pytest</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">StashKey</span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">bool</span><span style="color:#89DDFF;">]()</span></span>
<span class="line"><span style="color:#A6ACCD;">done_that_key </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pytest</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">StashKey</span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">]()</span></span></code></pre></div><p>then use the keys to stash your data at some point:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_runtest_setup</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pytest</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">Item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None:</span></span>
<span class="line"><span style="color:#A6ACCD;">    item</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">stash</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">been_there_key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">    item</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">stash</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">done_that_key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>and retrieve them at another point:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pytest_runtest_teardown</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pytest</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">Item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">stash</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">been_there_key</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Oh?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    item</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">stash</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">done_that_key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yes!</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Stashes are available on all node types (like Class, Session) and also on Config, if needed.</p>`,62),t=[l];function p(c,i,r,y,h,D){return n(),o("div",null,t)}const d=s(e,[["render",p]]);export{u as __pageData,d as default};
