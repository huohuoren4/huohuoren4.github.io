import{_ as e,o as a,c as o,X as t}from"./chunks/framework.b5656a4e.js";const f=JSON.parse('{"title":"Command Line Interface","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/api_reference/cmd_line.md","filePath":"python/flask/api_reference/cmd_line.md","lastUpdated":1692979908000}'),n={name:"python/flask/api_reference/cmd_line.md"},l=t('<h1 id="command-line-interface" tabindex="-1">Command Line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command Line Interface {#command-line-interface}&quot;">​</a></h1><h2 id="class-flask-cli-flaskgroup-add-default-commands-true-create-app-none-add-version-option-true-load-dotenv-true-set-debug-flag-true-extra" tabindex="-1"><code>class</code> flask.cli.FlaskGroup(<code>add_default_commands=True, create_app=None, add_version_option=True, load_dotenv=True, set_debug_flag=True, **extra</code>) <a class="header-anchor" href="#class-flask-cli-flaskgroup-add-default-commands-true-create-app-none-add-version-option-true-load-dotenv-true-set-debug-flag-true-extra" aria-label="Permalink to &quot;`class` flask.cli.FlaskGroup(`add_default_commands=True, create_app=None, add_version_option=True, load_dotenv=True, set_debug_flag=True, **extra`)&quot;">​</a></h2><p>Special subclass of the <code>AppGroup</code> group that supports loading more commands from the configured <code>Flask</code> app. Normally a developer does not have to interface with this class but there are some very advanced use cases for which it makes sense to create an instance of this. see <a href="https://flask.palletsprojects.com/en/2.3.x/cli/#custom-scripts" target="_blank" rel="noreferrer">Custom Scripts</a>.</p><ul><li><p><em>Parameters</em>:</p><ul><li><p><code>add_default_commands (bool)</code> – if this is <code>True</code> then the default run and shell commands will be added.</p></li><li><p><code>add_version_option (bool)</code> – adds the <code>--version</code> option.</p></li><li><p><code>create_app (t.Callable[..., Flask] | None)</code> – an optional callback that is passed the script info and returns the loaded app.</p></li><li><p><code>load_dotenv (bool)</code> – Load the nearest <code>.env</code> and <code>.flaskenv</code> files to set environment variables. Will also change the working directory to the directory containing the first file found.</p></li><li><p><code>set_debug_flag (bool)</code> – Set the app’s debug flag.</p></li><li><p><code>extra (t.Any)</code> –</p></li></ul></li></ul><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 2.2</em>: Added the <code>-A/--app</code>, <code>--debug/--no-debug</code>, <code>-e/--env-file</code> options.</p><p><em>Changed in version 2.2</em>: An app context is pushed when running <code>app.cli</code> commands, so <code>@with_appcontext</code> is no longer required for those commands.</p><p><em>Changed in version 1.0</em>: If installed, python-dotenv will be used to load environment variables from <code>.env</code> and <code>.flaskenv</code> files.</p></details><ul><li><h3 id="get-command-ctx-name" tabindex="-1">get_command(<code>ctx, name</code>) <a class="header-anchor" href="#get-command-ctx-name" aria-label="Permalink to &quot;get_command(`ctx, name`)&quot;">​</a></h3><p>Given a context and a command name, this returns a <code>Command</code> object if it exists or returns <code>None</code>.</p></li><li><h3 id="list-commands-ctx" tabindex="-1">list_commands(<code>ctx</code>) <a class="header-anchor" href="#list-commands-ctx" aria-label="Permalink to &quot;list_commands(`ctx`)&quot;">​</a></h3><p>Returns a list of subcommand names in the order they should appear.</p></li><li><h3 id="make-context-info-name-args-parent-none-extra" tabindex="-1">make_context(<code>info_name, args, parent=None, **extra</code>) <a class="header-anchor" href="#make-context-info-name-args-parent-none-extra" aria-label="Permalink to &quot;make_context(`info_name, args, parent=None, **extra`)&quot;">​</a></h3><p>This function when given an info name and arguments will kick off the parsing and create a new <code>Context</code>. It does not invoke the actual command callback though.</p><p>To quickly customize the context class used without overriding this method, set the <code>context_class</code> attribute.</p><p><em>Parameters</em>:</p><ul><li><p><code>info_name (str | None)</code> – the info name for this invocation. Generally this is the most descriptive name for the script or command. For the toplevel script it’s usually the name of the script, for commands below it’s the name of the command.</p></li><li><p><code>args (list[str])</code> – the arguments to parse as list of strings.</p></li><li><p><code>parent (Context | None)</code> – the parent context if available.</p></li><li><p><code>extra (Any)</code> – extra keyword arguments forwarded to the context constructor.</p></li></ul><p><em>Return type</em>: <code>Context</code></p><p><em>Changed in version 8.0</em>: Added the <code>context_class</code> attribute.</p></li><li><h3 id="parse-args-ctx-args" tabindex="-1">parse_args(<code>ctx, args</code>) <a class="header-anchor" href="#parse-args-ctx-args" aria-label="Permalink to &quot;parse_args(`ctx, args`)&quot;">​</a></h3><p>Given a context and a list of arguments this creates the parser and parses the arguments, then modifies the context as necessary. This is automatically invoked by <code>make_context()</code>.</p><p><em>Parameters</em>:</p><ul><li><p><code>ctx (Context)</code> –</p></li><li><p><code>args (list[str])</code> –</p></li></ul><p><em>Return type</em>: <code>list[str]</code></p></li></ul><h2 id="class-flask-cli-appgroup-name-none-commands-none-attrs" tabindex="-1"><code>class</code> flask.cli.AppGroup(<code>name=None, commands=None, **attrs</code>) <a class="header-anchor" href="#class-flask-cli-appgroup-name-none-commands-none-attrs" aria-label="Permalink to &quot;`class` flask.cli.AppGroup(`name=None, commands=None, **attrs`)&quot;">​</a></h2><p>This works similar to a regular click <code>Group</code> but it changes the behavior of the <code>command()</code> decorator so that it automatically wraps the functions in <code>with_appcontext()</code>.</p><p>Not to be confused with <code>FlaskGroup</code>.</p><ul><li><p><em>Parameters</em>:</p><ul><li><p><code>name (str | None)</code> –</p></li><li><p><code>commands (MutableMapping[str, Command] | Sequence[Command] | None)</code> –</p></li><li><p><code>attrs (Any)</code> –</p></li></ul></li><li><h3 id="command-args-kwargs" tabindex="-1">command(<code>*args, **kwargs</code>) <a class="header-anchor" href="#command-args-kwargs" aria-label="Permalink to &quot;command(`*args, **kwargs`)&quot;">​</a></h3><p>This works exactly like the method of the same name on a regular <code>click.Group</code> but it wraps callbacks in <code>with_appcontext()</code> unless it’s disabled by passing <code>with_appcontext=False</code>.</p></li><li><h3 id="group-args-kwargs" tabindex="-1">group(<code>*args, **kwargs</code>) <a class="header-anchor" href="#group-args-kwargs" aria-label="Permalink to &quot;group(`*args, **kwargs`)&quot;">​</a></h3><p>This works exactly like the method of the same name on a regular <code>click.Group</code> but it defaults the group class to <code>AppGroup</code>.</p></li></ul><h2 id="class-flask-cli-scriptinfo-app-import-path-none-create-app-none-set-debug-flag-true" tabindex="-1"><code>class</code> flask.cli.ScriptInfo(<code>app_import_path=None, create_app=None, set_debug_flag=True</code>) <a class="header-anchor" href="#class-flask-cli-scriptinfo-app-import-path-none-create-app-none-set-debug-flag-true" aria-label="Permalink to &quot;`class` flask.cli.ScriptInfo(`app_import_path=None, create_app=None, set_debug_flag=True`)&quot;">​</a></h2><p>Helper object to deal with Flask applications. This is usually not necessary to interface with as it’s used internally in the dispatching to click. In future versions of Flask this object will most likely play a bigger role. Typically it’s created automatically by the <code>FlaskGroup</code> but you can also manually create it and pass it onwards as click object.</p><ul><li><p><em>Parameters</em>:</p><ul><li><p><code>app_import_path (str | None)</code> –</p></li><li><p><code>create_app (t.Callable[..., Flask] | None)</code> –</p></li><li><p><code>set_debug_flag (bool)</code> –</p></li></ul></li><li><h3 id="app-import-path" tabindex="-1">app_import_path <a class="header-anchor" href="#app-import-path" aria-label="Permalink to &quot;app_import_path&quot;">​</a></h3><p>Optionally the import path for the <code>Flask</code> application.</p></li><li><h3 id="create-app" tabindex="-1">create_app <a class="header-anchor" href="#create-app" aria-label="Permalink to &quot;create_app&quot;">​</a></h3><p>Optionally a function that is passed the script info to create the instance of the application.</p></li><li><h3 id="data-dict-t-any-t-any" tabindex="-1">data: <code>dict[t.Any, t.Any]</code> <a class="header-anchor" href="#data-dict-t-any-t-any" aria-label="Permalink to &quot;data: `dict[t.Any, t.Any]`&quot;">​</a></h3><p>A dictionary with arbitrary data that can be associated with this script info.</p></li><li><h3 id="load-app" tabindex="-1">load_app() <a class="header-anchor" href="#load-app" aria-label="Permalink to &quot;load_app()&quot;">​</a></h3><p>Loads the <code>Flask</code> app (if not yet loaded) and returns it. Calling this multiple times will just result in the already loaded app to be returned.</p><p><em>Return type</em>: <code>Flask</code></p></li></ul><h2 id="flask-cli-load-dotenv-path-none" tabindex="-1">flask.cli.load_dotenv(<code>path=None</code>) <a class="header-anchor" href="#flask-cli-load-dotenv-path-none" aria-label="Permalink to &quot;flask.cli.load_dotenv(`path=None`)&quot;">​</a></h2><p>Load <code>“dotenv”</code> files in order of precedence to set environment variables.</p><p>If an env var is already set it is not overwritten, so earlier files in the list are preferred over later files.</p><p>This is a no-op if <code>python-dotenv</code> is not installed.</p><p><em>Parameters</em>:</p><ul><li><code>path (str | PathLike | None)</code> – Load the file at this location instead of searching.</li></ul><p><em>Returns</em>: <code>True</code> if a file was loaded.</p><p><em>Return type</em>: <code>bool</code></p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 2.0</em>: The current directory is not changed to the location of the loaded file.</p><p>Changed in version 2.0: When loading the env files, set the default encoding to <code>UTF-8</code>.</p><p>Changed in version 1.1.0: Returns <code>False</code> when <code>python-dotenv</code> is not installed, or when the given path isn’t a file.</p><p><em>New in version 1.0.</em></p></details><h2 id="flask-cli-with-appcontext-f" tabindex="-1">flask.cli.with_appcontext(<code>f</code>) <a class="header-anchor" href="#flask-cli-with-appcontext-f" aria-label="Permalink to &quot;flask.cli.with_appcontext(`f`)&quot;">​</a></h2><p>Wraps a callback so that it’s guaranteed to be executed with the script’s application context.</p><p>Custom commands (and their options) registered under <code>app.cli</code> or <code>blueprint.cli</code> will always have an app context available, this decorator is not required in that case.</p><details class="details custom-block"><summary>Changelog</summary><p><em>Changed in version 2.2</em>: The app context is active for subcommands as well as the decorated callback. The app context is always available to <code>app.cli</code> command and parameter callbacks.</p></details><h2 id="flask-cli-pass-script-info-f" tabindex="-1">flask.cli.pass_script_info(<code>f</code>) <a class="header-anchor" href="#flask-cli-pass-script-info-f" aria-label="Permalink to &quot;flask.cli.pass_script_info(`f`)&quot;">​</a></h2><p>Marks a function so that an instance of <code>ScriptInfo</code> is passed as first argument to the click callback.</p><p><em>Parameters</em>:</p><ul><li><code>f (t.Callable[te.Concatenate[T, P], R])</code> –</li></ul><p><em>Return type</em>: <code>t.Callable[P, R]</code></p><h2 id="flask-cli-run-command-command-run" tabindex="-1">flask.cli.run_command = <code>&lt;Command run&gt;</code> <a class="header-anchor" href="#flask-cli-run-command-command-run" aria-label="Permalink to &quot;flask.cli.run_command = `&lt;Command run&gt;`&quot;">​</a></h2><p>Run a local development server.</p><p>This server is for development purposes only. It does not provide the stability, security, or performance of production WSGI servers.</p><p>The reloader and debugger are enabled by default with the <code>‘–debug’</code> option.</p><p><em>Parameters</em>:</p><ul><li><p><code>args (Any)</code> –</p></li><li><p><code>kwargs (Any)</code> –</p></li></ul><p><em>Return type</em>: <code>Any</code></p><h2 id="flask-cli-shell-command-command-shell" tabindex="-1">flask.cli.shell_command = <code>&lt;Command shell&gt;</code> <a class="header-anchor" href="#flask-cli-shell-command-command-shell" aria-label="Permalink to &quot;flask.cli.shell_command = `&lt;Command shell&gt;`&quot;">​</a></h2><p>Run an interactive Python shell in the context of a given Flask application. The application will populate the default namespace of this shell according to its configuration.</p><p>This is useful for executing small snippets of management code without having to manually configure the application.</p><p><em>Parameters</em>:</p><ul><li><p><code>args (Any)</code> –</p></li><li><p><code>kwargs (Any)</code> –</p></li></ul><p><em>Return type</em>: <code>Any</code></p>',44),i=[l];function c(s,d,r,p,m,h){return a(),o("div",null,i)}const g=e(n,[["render",c]]);export{f as __pageData,g as default};
