import{_ as s,o as e,c as a,V as t}from"./chunks/framework.d3b95951.js";const f=JSON.parse('{"title":"About fixtures","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/explanation/about_fixture.md","filePath":"python/pytest/explanation/about_fixture.md"}'),n={name:"python/pytest/explanation/about_fixture.md"},o=t(`<h1 id="about-fixtures" tabindex="-1">About fixtures <a class="header-anchor" href="#about-fixtures" aria-label="Permalink to &quot;About fixtures&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">See also</p><p><a href="https://docs.pytest.org/en/latest/how-to/fixtures.html#how-to-fixtures" target="_blank" rel="noreferrer">How to use fixtures</a></p></div><div class="tip custom-block"><p class="custom-block-title">See also</p><p><a href="https://docs.pytest.org/en/latest/reference/fixtures.html#reference-fixtures" target="_blank" rel="noreferrer">Fixtures reference</a></p></div><p>pytest fixtures are designed to be explicit, modular and scalable.</p><h2 id="what-fixtures-are" tabindex="-1">What fixtures are <a class="header-anchor" href="#what-fixtures-are" aria-label="Permalink to &quot;What fixtures are&quot;">​</a></h2><p>In testing, a fixture provides a defined, reliable and consistent context for the tests. This could include environment (for example a database configured with known parameters) or content (such as a dataset).</p><p>Fixtures define the steps and data that constitute the arrange phase of a test (see <a href="https://docs.pytest.org/en/latest/explanation/anatomy.html#test-anatomy" target="_blank" rel="noreferrer">Anatomy of a test</a>). In pytest, they are functions you define that serve this purpose. They can also be used to define a test’s act phase; this is a powerful technique for designing more complex tests.</p><p>The services, state, or other operating environments set up by fixtures are accessed by test functions through arguments. For each fixture used by a test function there is typically a parameter (named after the fixture) in the test function’s definition.</p><p>We can tell pytest that a particular function is a fixture by decorating it with <a href="https://docs.pytest.org/en/latest/reference/reference.html#pytest.fixture" target="_blank" rel="noreferrer">@pytest.fixture</a>. Here’s a simple example of what a fixture in pytest might look like:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fruit</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__eq__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">other</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> other</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">my_fruit</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Fruit</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">apple</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fruit_basket</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">my_fruit</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">Fruit</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">banana</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> my_fruit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_my_fruit_in_basket</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">my_fruit</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">fruit_basket</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">assert</span><span style="color:#A6ACCD;"> my_fruit </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> fruit_basket</span></span></code></pre></div><p>Tests don’t have to be limited to a single fixture, either. They can depend on as many fixtures as you want, and fixtures can use other fixtures, as well. This is where pytest’s fixture system really shines.</p><h2 id="improvements-over-xunit-style-setup-teardown-functions" tabindex="-1">Improvements over xUnit-style setup/teardown functions <a class="header-anchor" href="#improvements-over-xunit-style-setup-teardown-functions" aria-label="Permalink to &quot;Improvements over xUnit-style setup/teardown functions&quot;">​</a></h2><p>pytest fixtures offer dramatic improvements over the classic xUnit style of setup/teardown functions:</p><ul><li><p>fixtures have explicit names and are activated by declaring their use from test functions, modules, classes or whole projects.</p></li><li><p>fixtures are implemented in a modular manner, as each fixture name triggers a fixture function which can itself use other fixtures.</p></li><li><p>fixture management scales from simple unit to complex functional testing, allowing to parametrize fixtures and tests according to configuration and component options, or to re-use fixtures across function, class, module or whole test session scopes.</p></li><li><p>teardown logic can be easily, and safely managed, no matter how many fixtures are used, without the need to carefully handle errors by hand or micromanage the order that cleanup steps are added.</p></li></ul><p>In addition, pytest continues to support <a href="https://docs.pytest.org/en/latest/how-to/xunit_setup.html#xunitsetup" target="_blank" rel="noreferrer">How to implement xunit-style set-up</a>. You can mix both styles, moving incrementally from classic to new style, as you prefer. You can also start out from existing <a href="https://docs.pytest.org/en/latest/how-to/unittest.html#unittest-testcase" target="_blank" rel="noreferrer">unittest.TestCase style</a> or <a href="https://docs.pytest.org/en/latest/how-to/nose.html#nosestyle" target="_blank" rel="noreferrer">nose based</a> projects.</p><h2 id="fixture-errors" tabindex="-1">Fixture errors <a class="header-anchor" href="#fixture-errors" aria-label="Permalink to &quot;Fixture errors&quot;">​</a></h2><p>pytest does its best to put all the fixtures for a given test in a linear order so that it can see which fixture happens first, second, third, and so on. If an earlier fixture has a problem, though, and raises an exception, pytest will stop executing fixtures for that test and mark the test as having an error.</p><p>When a test is marked as having an error, it doesn’t mean the test failed, though. It just means the test couldn’t even be attempted because one of the things it depends on had a problem.</p><p>This is one reason why it’s a good idea to cut out as many unnecessary dependencies as possible for a given test. That way a problem in something unrelated isn’t causing us to have an incomplete picture of what may or may not have issues.</p><p>Here’s a quick example to help explain:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pytest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">order</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append_first</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">order</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append_second</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">order</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">append_first</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    order</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">pytest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fixture</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">autouse</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append_third</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">order</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">append_second</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    order </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_order</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">order</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">assert</span><span style="color:#A6ACCD;"> order </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>If, for whatever reason, <code>order.append(1)</code> had a bug and it raises an exception, we wouldn’t be able to know if <code>order.extend([2])</code> or <code>order += [3]</code> would also have problems. After <code>append_first</code> throws an exception, pytest won’t run any more fixtures for <code>test_order</code>, and it won’t even try to run <code>test_order</code> itself. The only things that would’ve run would be <code>order</code> and <code>append_first</code>.</p><h2 id="sharing-test-data" tabindex="-1">Sharing test data <a class="header-anchor" href="#sharing-test-data" aria-label="Permalink to &quot;Sharing test data&quot;">​</a></h2><p>If you want to make test data from files available to your tests, a good way to do this is by loading these data in a fixture for use by your tests. This makes use of the automatic caching mechanisms of pytest.</p><p>Another good approach is by adding the data files in the <code>tests</code> folder. There are also community plugins available to help to manage this aspect of testing, e.g. <a href="https://pypi.org/project/pytest-datadir/" target="_blank" rel="noreferrer">pytest-datadir</a> and <a href="https://pypi.org/project/pytest-datafiles/" target="_blank" rel="noreferrer">pytest-datafiles</a>.</p><h2 id="a-note-about-fixture-cleanup" tabindex="-1">A note about fixture cleanup <a class="header-anchor" href="#a-note-about-fixture-cleanup" aria-label="Permalink to &quot;A note about fixture cleanup&quot;">​</a></h2><p>pytest does not do any special processing for <a href="https://docs.python.org/3/library/signal.html#signal.SIGTERM" target="_blank" rel="noreferrer">SIGTERM</a> and SIGQUIT signals (<a href="https://docs.python.org/3/library/signal.html#signal.SIGINT" target="_blank" rel="noreferrer">SIGINT</a> is handled naturally by the Python runtime via <a href="https://docs.python.org/3/library/exceptions.html#KeyboardInterrupt" target="_blank" rel="noreferrer">KeyboardInterrupt</a>), so fixtures that manage external resources which are important to be cleared when the Python process is terminated (by those signals) might leak resources.</p><p>The reason pytest does not handle those signals to perform fixture cleanup is that signal handlers are global, and changing them might interfere with the code under execution.</p><p>If fixtures in your suite need special care regarding termination in those scenarios, see <a href="https://github.com/pytest-dev/pytest/issues/5243#issuecomment-491522595" target="_blank" rel="noreferrer">this comment</a> in the issue tracker for a possible workaround.</p>`,29),l=[o];function p(r,i,c,y,u,d){return e(),a("div",null,l)}const F=s(n,[["render",p]]);export{f as __pageData,F as default};
