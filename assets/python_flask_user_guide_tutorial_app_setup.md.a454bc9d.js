import{_ as s,o as a,c as n,X as e}from"./chunks/framework.6e839c56.js";const h=JSON.parse('{"title":"Application Setup","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/tutorial/app_setup.md","filePath":"python/flask/user_guide/tutorial/app_setup.md","lastUpdated":1693328004000}'),o={name:"python/flask/user_guide/tutorial/app_setup.md"},l=e(`<h1 id="application-setup" tabindex="-1">Application Setup <a class="header-anchor" href="#application-setup" aria-label="Permalink to &quot;Application Setup {#application-setup}&quot;">​</a></h1><p>A Flask application is an instance of the <code>Flask</code> class. Everything about the application, such as configuration and URLs, will be registered with this class.</p><p>The most straightforward way to create a Flask application is to create a global <code>Flask</code> instance directly at the top of your code, like how the “Hello, World!” example did on the previous page. While this is simple and useful in some cases, it can cause some tricky issues as the project grows.</p><p>Instead of creating a <code>Flask</code> instance globally, you will create it inside a function. This function is known as the <code>application factory</code>. Any configuration, registration, and other setup the application needs will happen inside the function, then the application will be returned.</p><h2 id="the-application-factory" tabindex="-1">The Application Factory <a class="header-anchor" href="#the-application-factory" aria-label="Permalink to &quot;The Application Factory {#the-application-factory}&quot;">​</a></h2><p>It’s time to start coding! Create the <code>flaskr</code> directory and add the <code>__init__.py</code> file. The <code>__init__.py</code> serves double duty: it will contain the application factory, and it tells Python that the <code>flaskr</code> directory should be treated as a package.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flaskr</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># flaskr/__init__.py</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Flask</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">create_app</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">test_config</span><span style="color:#89DDFF;">=None):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># create and configure the app</span></span>
<span class="line"><span style="color:#A6ACCD;">    app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Flask</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__name__</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">instance_relative_config</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from_mapping</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">SECRET_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">        </span><span style="color:#A6ACCD;font-style:italic;">DATABASE</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">instance_path</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flaskr.sqlite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> test_config </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># load the instance config, if it exists, when not testing</span></span>
<span class="line"><span style="color:#A6ACCD;">        app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from_pyfile</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">config.py</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">silent</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># load the test config if passed in</span></span>
<span class="line"><span style="color:#A6ACCD;">        app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from_mapping</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">test_config</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># ensure the instance folder exists</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">makedirs</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">instance_path</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">except</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OSError</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># a simple page that says hello</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> app</span></span></code></pre></div><p><code>create_app</code> is the application factory function. You’ll add to it later in the tutorial, but it already does a lot.</p><ol><li><p><code>app = Flask(__name__, instance_relative_config=True)</code> creates the <code>Flask</code> instance.</p><ul><li><p><code>__name__</code> is the name of the current Python module. The app needs to know where it’s located to set up some paths, and <code>__name__</code> is a convenient way to tell it that.</p></li><li><p><code>instance_relative_config=True</code> tells the app that configuration files are relative to the instance folder. The instance folder is located outside the <code>flaskr</code> package and can hold local data that shouldn’t be committed to version control, such as configuration secrets and the database file.</p></li></ul></li><li><p><code>app.config.from_mapping()</code> sets some default configuration that the app will use:</p><ul><li><p><code>SECRET_KEY</code> is used by Flask and extensions to keep data safe. It’s set to <code>&#39;dev&#39;</code> to provide a convenient value during development, but it should be overridden with a random value when deploying.</p></li><li><p><code>DATABASE</code> is the path where the SQLite database file will be saved. It’s under <code>app.instance_path</code>, which is the path that Flask has chosen for the instance folder. You’ll learn more about the database in the next section.</p></li></ul></li><li><p><code>app.config.from_pyfile()</code> overrides the default configuration with values taken from the <code>config.py</code> file in the instance folder if it exists. For example, when deploying, this can be used to set a real <code>SECRET_KEY</code>.</p><ul><li><code>test_config</code> can also be passed to the factory, and will be used instead of the instance configuration. This is so the tests you’ll write later in the tutorial can be configured independently of any development values you have configured.</li></ul></li><li><p><code>os.makedirs()</code> ensures that <code>app.instance_path</code> exists. Flask doesn’t create the instance folder automatically, but it needs to be created because your project will create the SQLite database file there.</p></li><li><p><code>@app.route()</code> creates a simple route so you can see the application working before getting into the rest of the tutorial. It creates a connection between the URL <code>/hello</code> and a function that returns a response, the string <code>&#39;Hello, World!&#39;</code> in this case.</p></li></ol><h2 id="run-the-application" tabindex="-1">Run The Application <a class="header-anchor" href="#run-the-application" aria-label="Permalink to &quot;Run The Application {#run-the-application}&quot;">​</a></h2><p>Now you can run your application using the <code>flask</code> command. From the terminal, tell Flask where to find your application, then run it in debug mode. Remember, you should still be in the top-level <code>flask-tutorial</code> directory, not the <code>flaskr</code> package.</p><p>Debug mode shows an interactive debugger whenever a page raises an exception, and restarts the server whenever you make changes to the code. You can leave it running and just reload the browser page as you follow the tutorial.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flask</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flaskr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--debug</span></span></code></pre></div><p>You’ll see output similar to this:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Serving Flask app </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flaskr</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Debug mode: on</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Running on http://127.0.0.1:5000/ </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Press</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CTRL+C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quit</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Restarting with stat</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Debugger is active</span><span style="color:#89DDFF;">!</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Debugger PIN: nnn-nnn-nnn</span></span></code></pre></div><p>Visit <code>http://127.0.0.1:5000/hello</code> in a browser and you should see the “Hello, World!” message. Congratulations, you’re now running your Flask web application!</p><p>If another program is already using port 5000, you’ll see <code>OSError: [Errno 98]</code> or <code>OSError: [WinError 10013]</code> when the server tries to start. See <a href="/python/flask/user_guide/develop_server#address-already-in-use">Address already in use</a> for how to handle that.</p><p>Continue to <a href="/python/flask/user_guide/tutorial/database#define-and-access-the-database">Define and Access the Database</a>.</p>`,19),t=[l];function p(c,i,r,y,d,D){return a(),n("div",null,t)}const u=s(o,[["render",p]]);export{h as __pageData,u as default};