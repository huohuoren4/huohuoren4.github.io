import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.01af844e.js";const e="/pytest/test_fixtures_request_different_scope.png",o="/pytest/fixture_availability.png",l="/pytest/fixture_availability_plugins.png",t="/pytest/test_fixtures_order_scope.png",r="/pytest/test_fixtures_order_dependencies.png",c="/pytest/test_fixtures_order_dependencies_flat.png",y="/pytest/test_fixtures_order_dependencies_unclear.png",i="/pytest/test_fixtures_order_autouse.png",E="/pytest/test_fixtures_order_autouse_flat.png",d="/pytest/test_fixtures_order_autouse_multiple_scopes.png",u="/pytest/test_fixtures_order_autouse_temp_effects.png",A=JSON.parse('{"title":"Fixtures reference","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/reference_guides/fixture_reference.md","filePath":"python/pytest/reference_guides/fixture_reference.md","lastUpdated":1692807718000}'),F={name:"python/pytest/reference_guides/fixture_reference.md"},f=p(`<h1 id="fixtures-reference" tabindex="-1">Fixtures reference <a class="header-anchor" href="#fixtures-reference" aria-label="Permalink to &quot;Fixtures reference {#fixtures-reference}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">See also</p><p><a href="/python/pytest/explanation/about_fixture#about-fixtures">About fixtures</a></p></div><div class="tip custom-block"><p class="custom-block-title">See also</p><p><a href="/python/pytest/how_to_guides/fixture#how-to-use-fixtures">How to use fixtures</a></p></div><h2 id="built-in-fixtures" tabindex="-1">Built-in fixtures <a class="header-anchor" href="#built-in-fixtures" aria-label="Permalink to &quot;Built-in fixtures {#built-in-fixtures}&quot;">​</a></h2><p>Fixtures are defined using the <code>@pytest.fixture</code> decorator. Pytest has several useful built-in fixtures:</p><ul><li><p><strong>capfd</strong></p><p>Capture, as text, output to file descriptors <code>1</code> and <code>2</code>.</p></li><li><p><strong>capfdbinary</strong></p><p>Capture, as bytes, output to file descriptors <code>1</code> and <code>2</code>.</p></li><li><p><strong>caplog</strong></p><p>Control logging and access log entries.</p></li><li><p><strong>capsys</strong></p><p>Capture, as text, output to<code>sys.stdout</code> and<code>sys.stderr</code>.</p></li><li><p><strong>capsysbinary</strong></p><p>Capture, as bytes, output to<code>sys.stdout</code> and<code>sys.stderr</code>.</p></li><li><p><strong>cache</strong></p><p>Store and retrieve values across pytest runs.</p></li><li><p><strong>doctest_namespace</strong></p><p>Provide a dict injected into the docstests namespace.</p></li><li><p><strong>monkeypatch</strong></p><p>Temporarily modify classes, functions, dictionaries,<code>os.environ</code>, and other objects.</p></li><li><p><strong>pytestconfig</strong></p><p>Access to configuration values, pluginmanager and plugin hooks.</p></li><li><p><strong>record_property</strong></p><p>Add extra properties to the test.</p></li><li><p><strong>record_testsuite_property</strong></p><p>Add extra properties to the test suite.</p></li><li><p><strong>recwarn</strong></p><p>Record warnings emitted by test functions.</p></li><li><p><strong>request</strong></p><p>Provide information on the executing test function.</p></li><li><p><strong>testdir</strong></p><p>Provide a temporary test directory to aid in running, and testing, pytest plugins.</p></li><li><p><strong>tmp_path</strong></p><p>Provide a <code>pathlib.Path</code> object to a temporary directory which is unique to each test function.</p></li><li><p><strong>tmp_path_factory</strong></p><p>Make session-scoped temporary directories and return <code>pathlib.Path</code> objects.</p></li><li><p><strong>tmpdir</strong></p><p>Provide a <code>py.path.local</code> object to a temporary directory which is unique to each test function; replaced by <code>tmp_path</code>.</p></li><li><p><strong>tmpdir_factory</strong></p><p>Make session-scoped temporary directories and return <code>py.path.local</code> objects; replaced by <code>tmp_path_factory</code>.</p></li></ul><h2 id="fixture-availability" tabindex="-1">Fixture availability <a class="header-anchor" href="#fixture-availability" aria-label="Permalink to &quot;Fixture availability {#fixture-availability}&quot;">​</a></h2><p>Fixture availability is determined from the perspective of the test. A fixture is only available for tests to request if they are in the scope that fixture is defined in. If a fixture is defined inside a class, it can only be requested by tests inside that class. But if a fixture is defined inside the global scope of the module, than every test in that module, even if it’s defined inside a class, can request it.</p><p>Similarly, a test can also only be affected by an autouse fixture if that test is in the same scope that autouse fixture is defined in (see <a href="/python/pytest/reference_guides/fixture_reference#autouse-fixtures-are-executed-first-within-their-scope">Autouse fixtures are executed first within their scope</a>).</p><p>A fixture can also request any other fixture, no matter where it’s defined, so long as the test requesting them can see all fixtures involved.</p><p>For example, here’s a test file with a fixture (<code>outer</code>) that requests a fixture (<code>inner</code>) from a scope it wasn’t defined in:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">outer</span><span style="color:#E1E4E8;">(order, inner):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;outer&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestOne</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inner</span><span style="color:#E1E4E8;">(self, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">        order.append(</span><span style="color:#9ECBFF;">&quot;one&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_order</span><span style="color:#E1E4E8;">(self, order, outer):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;one&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;outer&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestTwo</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inner</span><span style="color:#E1E4E8;">(self, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">        order.append(</span><span style="color:#9ECBFF;">&quot;two&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_order</span><span style="color:#E1E4E8;">(self, order, outer):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;two&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;outer&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">outer</span><span style="color:#24292E;">(order, inner):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;outer&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestOne</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inner</span><span style="color:#24292E;">(self, order):</span></span>
<span class="line"><span style="color:#24292E;">        order.append(</span><span style="color:#032F62;">&quot;one&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_order</span><span style="color:#24292E;">(self, order, outer):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;one&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;outer&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestTwo</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inner</span><span style="color:#24292E;">(self, order):</span></span>
<span class="line"><span style="color:#24292E;">        order.append(</span><span style="color:#032F62;">&quot;two&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_order</span><span style="color:#24292E;">(self, order, outer):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;two&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;outer&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><p>From the tests’ perspectives, they have no problem seeing each of the fixtures they’re dependent on:</p><p><img src="`+e+`" alt="test_fixtures_request_different_scope"></p><p>So when they run, <code>outer</code> will have no problem finding <code>inner</code>, because pytest searched from the tests’ perspectives.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>The scope a fixture is defined in has no bearing on the order it will be instantiated in: the order is mandated by the logic described <a href="/python/pytest/reference_guides/fixture_reference#fixture-instantiation-order">here</a>.</p></div><h3 id="conftest-py-sharing-fixtures-across-multiple-files" tabindex="-1">conftest.py: sharing fixtures across multiple files <a class="header-anchor" href="#conftest-py-sharing-fixtures-across-multiple-files" aria-label="Permalink to &quot;conftest.py: sharing fixtures across multiple files {#conftest-py-sharing-fixtures-across-multiple-files}&quot;">​</a></h3><p>The <code>conftest.py</code> file serves as a means of providing fixtures for an entire directory. Fixtures defined in a <code>conftest.py</code> can be used by any test in that package without needing to import them (pytest will automatically discover them).</p><p>You can have multiple nested directories/packages containing your tests, and each directory can have its own <code>conftest.py</code> with its own fixtures, adding on to the ones provided by the <code>conftest.py</code> files in parent directories.</p><p>For example, given a test file structure like this:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tests/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># content of tests/conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">order</span><span style="color:#E1E4E8;">()</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">top</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">innermost</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">order.append(</span><span style="color:#B392F0;">&quot;top&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">test_top.py</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># content of tests/test_top.py</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">innermost</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">order.append(</span><span style="color:#B392F0;">&quot;innermost top&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_order</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">top</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">order</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;innermost top&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;top&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">subpackage/</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># content of tests/subpackage/conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mid</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">order.append(</span><span style="color:#B392F0;">&quot;mid subpackage&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">test_subpackage.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># content of tests/subpackage/test_subpackage.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">innermost</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mid</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">order.append(</span><span style="color:#B392F0;">&quot;innermost subpackage&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_order</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">top</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">order</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;mid subpackage&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;innermost subpackage&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;top&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tests/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">conftest.py</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># content of tests/conftest.py</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">order</span><span style="color:#24292E;">()</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">top</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">innermost</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">order.append(</span><span style="color:#6F42C1;">&quot;top&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">test_top.py</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># content of tests/test_top.py</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">innermost</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">order.append(</span><span style="color:#6F42C1;">&quot;innermost top&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_order</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">top</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">assert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">order</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;innermost top&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;top&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">subpackage/</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">conftest.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># content of tests/subpackage/conftest.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mid</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">order.append(</span><span style="color:#6F42C1;">&quot;mid subpackage&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">test_subpackage.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># content of tests/subpackage/test_subpackage.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">innermost</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mid</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">order.append(</span><span style="color:#6F42C1;">&quot;innermost subpackage&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_order</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">top</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">assert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">order</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;mid subpackage&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;innermost subpackage&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;top&quot;]</span></span></code></pre></div><p>The boundaries of the scopes can be visualized like this:</p><p><img src="`+o+`" alt="fixture_availability"></p><p>The directories become their own sort of scope where fixtures that are defined in a <code>conftest.py</code> file in that directory become available for that whole scope.</p><p>Tests are allowed to search upward (stepping outside a circle) for fixtures, but can never go down (stepping inside a circle) to continue their search. So <code>tests/subpackage/test_subpackage.py::test_order</code> would be able to find the innermost fixture defined in <code>tests/subpackage/test_subpackage.py</code>, but the one defined in <code>tests/test_top.py</code> would be unavailable to it because it would have to step down a level (step inside a circle) to find it.</p><p>The first fixture the test finds is the one that will be used, so <a href="/python/pytest/how_to_guides/fixture#overriding-fixtures-on-various-levels">fixtures can be overridden</a> if you need to change or extend what one does for a particular scope.</p><p>You can also use the <code>conftest.py</code> file to implement <a href="/python/pytest/how_to_guides/write_plugin#conftest-py-local-per-directory-plugins">local per-directory plugins</a>.</p><h3 id="fixtures-from-third-party-plugins" tabindex="-1">Fixtures from third-party plugins <a class="header-anchor" href="#fixtures-from-third-party-plugins" aria-label="Permalink to &quot;Fixtures from third-party plugins {#fixtures-from-third-party-plugins}&quot;">​</a></h3><p>Fixtures don’t have to be defined in this structure to be available for tests, though. They can also be provided by third-party plugins that are installed, and this is how many pytest plugins operate. As long as those plugins are installed, the fixtures they provide can be requested from anywhere in your test suite.</p><p>Because they’re provided from outside the structure of your test suite, third-party plugins don’t really provide a scope like <code>conftest.py</code> files and the directories in your test suite do. As a result, pytest will search for fixtures stepping out through scopes as explained previously, only reaching fixtures defined in plugins last.</p><p>For example, given the following file structure:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tests/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># content of tests/conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">order</span><span style="color:#E1E4E8;">()</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">subpackage/</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># content of tests/subpackage/conftest.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">@pytest.fixture(autouse</span><span style="color:#E1E4E8;">=True)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mid</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">b_fix</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">order.append(</span><span style="color:#B392F0;">&quot;mid subpackage&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">test_subpackage.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;"># content of tests/subpackage/test_subpackage.py</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inner</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mid,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a_fix</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">order.append(</span><span style="color:#B392F0;">&quot;inner subpackage&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_order</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">order,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inner</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">assert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">order</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;b_fix&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;mid subpackage&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;a_fix&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;inner subpackage&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tests/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">conftest.py</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># content of tests/conftest.py</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">order</span><span style="color:#24292E;">()</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">subpackage/</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">__init__.py</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">conftest.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># content of tests/subpackage/conftest.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">@pytest.fixture(autouse</span><span style="color:#24292E;">=True)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mid</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">b_fix</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">order.append(</span><span style="color:#6F42C1;">&quot;mid subpackage&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">test_subpackage.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;"># content of tests/subpackage/test_subpackage.py</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inner</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mid,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a_fix</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">order.append(</span><span style="color:#6F42C1;">&quot;inner subpackage&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">def</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_order</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">order,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inner</span><span style="color:#24292E;">)</span><span style="color:#032F62;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">assert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">order</span><span style="color:#24292E;"> </span><span style="color:#032F62;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;b_fix&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;mid subpackage&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;a_fix&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;inner subpackage&quot;]</span></span></code></pre></div><p>If <code>plugin_a</code> is installed and provides the fixture <code>a_fix</code>, and <code>plugin_b</code> is installed and provides the fixture <code>b_fix</code>, then this is what the test’s search for fixtures would look like:</p><p><img src="`+l+`" alt="fixture_availability_plugins"></p><p>pytest will only search for <code>a_fix</code> and <code>b_fix</code> in the plugins after searching for them first in the scopes inside <code>tests/</code>.</p><h2 id="fixture-instantiation-order" tabindex="-1">Fixture instantiation order <a class="header-anchor" href="#fixture-instantiation-order" aria-label="Permalink to &quot;Fixture instantiation order {#fixture-instantiation-order}&quot;">​</a></h2><p>When pytest wants to execute a test, once it knows what fixtures will be executed, it has to figure out the order they’ll be executed in. To do this, it considers 3 factors:</p><ol><li>scope</li><li>dependencies</li><li>autouse</li></ol><p>Names of fixtures or tests, where they’re defined, the order they’re defined in, and the order fixtures are requested in have no bearing on execution order beyond coincidence. While pytest will try to make sure coincidences like these stay consistent from run to run, it’s not something that should be depended on. If you want to control the order, it’s safest to rely on these 3 things and make sure dependencies are clearly established.</p><h3 id="higher-scoped-fixtures-are-executed-first" tabindex="-1">Higher-scoped fixtures are executed first <a class="header-anchor" href="#higher-scoped-fixtures-are-executed-first" aria-label="Permalink to &quot;Higher-scoped fixtures are executed first {#higher-scoped-fixtures-are-executed-first}&quot;">​</a></h3><p>Within a function request for fixtures, those of higher-scopes (such as <code>session</code>) are executed before lower-scoped fixtures (such as <code>function</code> or <code>class</code>).</p><p>Here’s an example:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;session&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;function&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cls</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mod</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;package&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pack</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;package&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;session&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sess</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;session&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClass</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_order</span><span style="color:#E1E4E8;">(self, func, cls, mod, pack, sess, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;session&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;package&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;function&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;session&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">func</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;function&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cls</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mod</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;package&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pack</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;package&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;session&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sess</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;session&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClass</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_order</span><span style="color:#24292E;">(self, func, cls, mod, pack, sess, order):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;session&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;package&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;function&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><p>The test will pass because the larger scoped fixtures are executing first.</p><p>The order breaks down to this:</p><p><img src="`+t+`" alt="test_fixtures_order_scope"></p><h3 id="fixtures-of-the-same-order-execute-based-on-dependencies" tabindex="-1">Fixtures of the same order execute based on dependencies <a class="header-anchor" href="#fixtures-of-the-same-order-execute-based-on-dependencies" aria-label="Permalink to &quot;Fixtures of the same order execute based on dependencies {#fixtures-of-the-same-order-execute-based-on-dependencies}&quot;">​</a></h3><p>When a fixture requests another fixture, the other fixture is executed first. So if fixture a requests fixture <code>b</code>, fixture <code>b</code> will execute first, because <code>a</code> depends on <code>b</code> and can’t operate without it. Even if <code>a</code> doesn’t need the result of <code>b</code>, it can still request <code>b</code> if it needs to make sure it is executed after <code>b</code>.</p><p>For example:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">b</span><span style="color:#E1E4E8;">(a, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c</span><span style="color:#E1E4E8;">(b, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;c&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">d</span><span style="color:#E1E4E8;">(c, b, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;d&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;">(d, b, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;e&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">f</span><span style="color:#E1E4E8;">(e, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;f&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">g</span><span style="color:#E1E4E8;">(f, c, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;g&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_order</span><span style="color:#E1E4E8;">(g, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;c&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;d&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;e&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;f&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;g&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">b</span><span style="color:#24292E;">(a, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c</span><span style="color:#24292E;">(b, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;c&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">d</span><span style="color:#24292E;">(c, b, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;d&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">e</span><span style="color:#24292E;">(d, b, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;e&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">f</span><span style="color:#24292E;">(e, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;f&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">g</span><span style="color:#24292E;">(f, c, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;g&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_order</span><span style="color:#24292E;">(g, order):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;c&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;d&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;e&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;f&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;g&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><p>If we map out what depends on what, we get something that looks like this:</p><p><img src="`+r+'" alt="test_fixtures_order_dependencies"></p><p>The rules provided by each fixture (as to what fixture(s) each one has to come after) are comprehensive enough that it can be flattened to this:</p><p><img src="'+c+'" alt="test_fixtures_order_dependencies_flat"></p><p>Enough information has to be provided through these requests in order for pytest to be able to figure out a clear, linear chain of dependencies, and as a result, an order of operations for a given test. If there’s any ambiguity, and the order of operations can be interpreted more than one way, you should assume pytest could go with any one of those interpretations at any point.</p><p>For example, if <code>d</code> didn’t request <code>c</code>, i.e.the graph would look like this:</p><p><img src="'+y+`" alt="test_fixtures_order_dependencies_unclear"></p><p>Because nothing requested <code>c</code> other than <code>g</code>, and <code>g</code> also requests <code>f</code>, it’s now unclear if <code>c</code> should go before/after <code>f</code>, <code>e</code>, or <code>d</code>. The only rules that were set for <code>c</code> is that it must execute after <code>b</code> and before <code>g</code>.</p><p>pytest doesn’t know where <code>c</code> should go in the case, so it should be assumed that it could go anywhere between <code>g</code> and <code>b</code>.</p><p>This isn’t necessarily bad, but it’s something to keep in mind. If the order they execute in could affect the behavior a test is targeting, or could otherwise influence the result of a test, then the order should be defined explicitly in a way that allows pytest to linearize/”flatten” that order.</p><h3 id="autouse-fixtures-are-executed-first-within-their-scope" tabindex="-1">Autouse fixtures are executed first within their scope <a class="header-anchor" href="#autouse-fixtures-are-executed-first-within-their-scope" aria-label="Permalink to &quot;Autouse fixtures are executed first within their scope {#autouse-fixtures-are-executed-first-within-their-scope}&quot;">​</a></h3><p>Autouse fixtures are assumed to apply to every test that could reference them, so they are executed before other fixtures in that scope. Fixtures that are requested by autouse fixtures effectively become autouse fixtures themselves for the tests that the real autouse fixture applies to.</p><p>So if fixture <code>a</code> is autouse and fixture <code>b</code> is not, but fixture a requests fixture <code>b</code>, then fixture <code>b</code> will effectively be an autouse fixture as well, but only for the tests that <code>a</code> applies to.</p><p>In the last example, the graph became unclear if <code>d</code> didn’t request <code>c</code>. But if <code>c</code> was autouse, then <code>b</code> and <code>a</code> would effectively also be autouse because <code>c</code> depends on them. As a result, they would all be shifted above non-autouse fixtures within that scope.</p><p>So if the test file looked like this:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">b</span><span style="color:#E1E4E8;">(a, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">autouse</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c</span><span style="color:#E1E4E8;">(b, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;c&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">d</span><span style="color:#E1E4E8;">(b, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;d&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;">(d, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;e&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">f</span><span style="color:#E1E4E8;">(e, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;f&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">g</span><span style="color:#E1E4E8;">(f, c, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;g&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_order_and_g</span><span style="color:#E1E4E8;">(g, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;b&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;c&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;d&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;e&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;f&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;g&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">b</span><span style="color:#24292E;">(a, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">autouse</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c</span><span style="color:#24292E;">(b, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;c&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">d</span><span style="color:#24292E;">(b, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;d&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">e</span><span style="color:#24292E;">(d, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;e&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">f</span><span style="color:#24292E;">(e, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;f&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">g</span><span style="color:#24292E;">(f, c, order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;g&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_order_and_g</span><span style="color:#24292E;">(g, order):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;b&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;c&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;d&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;e&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;f&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;g&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><p>the graph would look like this:</p><p><img src="`+i+'" alt="test_fixtures_order_autouse"></p><p>Because <code>c</code> can now be put above <code>d</code> in the graph, pytest can once again linearize the graph to this:</p><p><img src="'+E+`" alt="test_fixtures_order_autouse_flat"></p><p>In this example, <code>c</code> makes <code>b</code> and <code>a</code> effectively autouse fixtures as well.</p><p>Be careful with autouse, though, as an autouse fixture will automatically execute for every test that can reach it, even if they don’t request it. For example, consider this file:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">autouse</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c1</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;c1&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c2</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;c2&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c3</span><span style="color:#E1E4E8;">(order, c1):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;c3&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClassWithC1Request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_order</span><span style="color:#E1E4E8;">(self, order, c1, c3):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;c1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;c3&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClassWithoutC1Request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_order</span><span style="color:#E1E4E8;">(self, order, c2):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;c1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;c2&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">autouse</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c1</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;c1&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c2</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;c2&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c3</span><span style="color:#24292E;">(order, c1):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;c3&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClassWithC1Request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_order</span><span style="color:#24292E;">(self, order, c1, c3):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;c1&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;c3&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClassWithoutC1Request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_order</span><span style="color:#24292E;">(self, order, c2):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;c1&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;c2&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><p>Even though nothing in <code>TestClassWithoutC1Request</code> is requesting <code>c1</code>, it still is executed for the tests inside it anyway:</p><p><img src="`+d+`" alt="test_fixtures_order_autouse_multiple_scopes"></p><p>But just because one autouse fixture requested a non-autouse fixture, that doesn’t mean the non-autouse fixture becomes an autouse fixture for all contexts that it can apply to. It only effectively becomes an autouse fixture for the contexts the real autouse fixture (the one that requested the non-autouse fixture) can apply to.</p><p>For example, take a look at this test file:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">order</span><span style="color:#E1E4E8;">():</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c1</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;c1&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">@pytest.fixture</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c2</span><span style="color:#E1E4E8;">(order):</span></span>
<span class="line"><span style="color:#E1E4E8;">    order.append(</span><span style="color:#9ECBFF;">&quot;c2&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClassWithAutouse</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@pytest.fixture</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">autouse</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">c3</span><span style="color:#E1E4E8;">(self, order, c2):</span></span>
<span class="line"><span style="color:#E1E4E8;">        order.append(</span><span style="color:#9ECBFF;">&quot;c3&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_req</span><span style="color:#E1E4E8;">(self, order, c1):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;c2&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;c3&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;c1&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_no_req</span><span style="color:#E1E4E8;">(self, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;c2&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;c3&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestClassWithoutAutouse</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_req</span><span style="color:#E1E4E8;">(self, order, c1):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;c1&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test_no_req</span><span style="color:#E1E4E8;">(self, order):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">assert</span><span style="color:#E1E4E8;"> order </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> []</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">order</span><span style="color:#24292E;">():</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c1</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;c1&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">@pytest.fixture</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c2</span><span style="color:#24292E;">(order):</span></span>
<span class="line"><span style="color:#24292E;">    order.append(</span><span style="color:#032F62;">&quot;c2&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClassWithAutouse</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@pytest.fixture</span><span style="color:#24292E;">(</span><span style="color:#E36209;">autouse</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">c3</span><span style="color:#24292E;">(self, order, c2):</span></span>
<span class="line"><span style="color:#24292E;">        order.append(</span><span style="color:#032F62;">&quot;c3&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_req</span><span style="color:#24292E;">(self, order, c1):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;c2&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;c3&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;c1&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_no_req</span><span style="color:#24292E;">(self, order):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;c2&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;c3&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestClassWithoutAutouse</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_req</span><span style="color:#24292E;">(self, order, c1):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;c1&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test_no_req</span><span style="color:#24292E;">(self, order):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">assert</span><span style="color:#24292E;"> order </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> []</span></span></code></pre></div><p>It would break down to something like this:</p><p><img src="`+u+'" alt="test_fixtures_order_autouse_temp_effects"></p><p>For <code>test_req</code> and <code>test_no_req</code> inside <code>TestClassWithAutouse</code>, <code>c3</code> effectively makes <code>c2</code> an autouse fixture, which is why <code>c2</code> and <code>c3</code> are executed for both tests, despite not being requested, and why <code>c2</code> and <code>c3</code> are executed before <code>c1</code> for <code>test_req</code>.</p><p>If this made <code>c2</code> an actual autouse fixture, then <code>c2</code> would also execute for the tests inside <code>TestClassWithoutAutouse</code>, since they can reference <code>c2</code> if they wanted to. But it doesn’t, because from the perspective of the <code>TestClassWithoutAutouse</code> tests, <code>c2</code> isn’t an autouse fixture, since they can’t see <code>c3</code>.</p>',82),h=[f];function q(C,x,B,g,_,b){return n(),a("div",null,h)}const v=s(F,[["render",q]]);export{A as __pageData,v as default};
