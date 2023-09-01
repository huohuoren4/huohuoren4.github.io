import{_ as e,o as i,c as a,X as t}from"./chunks/framework.6e839c56.js";const c=JSON.parse('{"title":"Flask","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/home.md","filePath":"python/flask/home.md","lastUpdated":1692892610000}'),l={name:"python/flask/home.md"},s=t('<h1 id="flask" tabindex="-1">Flask <a class="header-anchor" href="#flask" aria-label="Permalink to &quot;Flask {#flask}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Tip</p><p><em>flask version</em>: <code>2.3.2</code>. Only the lastest version is maintained.</p><p><em>offical doc</em>: <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">Flask</a></p></div><p>Welcome to Flask’s documentation. Get started with Installation and then get an overview with the <a href="/python/flask/user_guide/quickstart#quickstart">Quickstart</a>. There is also a more detailed <a href="/python/flask/user_guide/tutorial/introduction#tutorial">Tutorial</a> that shows how to create a small but complete application with Flask. Common patterns are described in the <a href="/python/flask/user_guide/pattern/#patterns-for-flask">Patterns for Flask</a> section. The rest of the docs describe each component of Flask in detail, with a full reference in the <a href="/python/flask/api_reference/app_obj#api">API</a> section.</p><p>Flask depends on the <a href="https://werkzeug.palletsprojects.com/" target="_blank" rel="noreferrer">Werkzeug</a> WSGI toolkit, the <a href="https://jinja.palletsprojects.com/" target="_blank" rel="noreferrer">Jinja</a> template engine, and the <a href="https://click.palletsprojects.com/" target="_blank" rel="noreferrer">Click</a> CLI toolkit. Be sure to check their documentation as well as Flask’s when looking for information.</p><h2 id="user-s-guide" tabindex="-1">User&#39;s Guide <a class="header-anchor" href="#user-s-guide" aria-label="Permalink to &quot;User&#39;s Guide {#user-s-guide}&quot;">​</a></h2><p>Flask provides configuration and conventions, with sensible defaults, to get started. This section of the documentation explains the different parts of the Flask framework and how they can be used, customized, and extended. Beyond Flask itself, look for community-maintained extensions to add even more functionality.</p><ul><li><p><a href="/python/flask/user_guide/install#installation">Installation</a></p><ul><li><a href="/python/flask/user_guide/install#python-version">Python Version</a></li><li><a href="/python/flask/user_guide/install#dependencies">Dependencies</a></li><li><a href="/python/flask/user_guide/install#virtual-environments">Virtual environments</a></li><li><a href="/python/flask/user_guide/install#install-flask">Install Flask</a></li></ul></li><li><p><a href="/python/flask/user_guide/quickstart#quickstart">Quickstart</a></p><ul><li><a href="/python/flask/user_guide/quickstart#a-minimal-application">A Minimal Application</a></li><li><a href="/python/flask/user_guide/quickstart#debug-mode">Debug Mode</a></li><li><a href="/python/flask/user_guide/quickstart#html-escaping">HTML Escaping</a></li><li><a href="/python/flask/user_guide/quickstart#routing">Routing</a></li><li><a href="/python/flask/user_guide/quickstart#static-files">Static Files</a></li><li><a href="/python/flask/user_guide/quickstart#rendering-templates">Rendering Templates</a></li><li><a href="/python/flask/user_guide/quickstart#accessing-request-data">Accessing Request Data</a></li><li><a href="/python/flask/user_guide/quickstart#redirects-and-errors">Redirects and Errors</a></li><li><a href="/python/flask/user_guide/quickstart#about-responses">About Responses</a></li><li><a href="/python/flask/user_guide/quickstart#sessions">Sessions</a></li><li><a href="/python/flask/user_guide/quickstart#message-flashing">Message Flashing</a></li><li><a href="/python/flask/user_guide/quickstart#logging">Logging</a></li><li><a href="/python/flask/user_guide/quickstart#hooking-in-wsgi-middleware">Hooking in WSGI Middleware</a></li><li><a href="/python/flask/user_guide/quickstart#using-flask-extensions">Using Flask Extensions</a></li><li><a href="/python/flask/user_guide/quickstart#deploying-to-a-web-server">Deploying to a Web Server</a></li></ul></li><li><p><a href="/python/flask/user_guide/tutorial/introduction#tutorial">Tutorial</a></p><ul><li><a href="/python/flask/user_guide/tutorial/project_layout#project-layout">Project Layout</a></li><li><a href="/python/flask/user_guide/tutorial/app_setup#application-setup">Application Setup</a></li><li><a href="/python/flask/user_guide/tutorial/database#define-and-access-the-database">Define and Access the Database</a></li><li><a href="/python/flask/user_guide/tutorial/blueprint_view#blueprints-and-views">Blueprints and Views</a></li><li><a href="/python/flask/user_guide/tutorial/template#templates">Templates</a></li><li><a href="/python/flask/user_guide/tutorial/static_file#static-files">Static Files</a></li><li><a href="/python/flask/user_guide/tutorial/blog_blueprint#blog-blueprint">Blog Blueprint</a></li><li><a href="/python/flask/user_guide/tutorial/project_install#make-the-project-installable">Make the Project Installable</a></li><li><a href="/python/flask/user_guide/tutorial/test_coverage#test-coverage">Test Coverage</a></li><li><a href="/python/flask/user_guide/tutorial/deploy#deploy-to-production">Deploy to Production</a></li><li><a href="/python/flask/user_guide/tutorial/develop#keep-developing">Keep Developing!</a></li></ul></li><li><p><a href="/python/flask/user_guide/template#templates">Templates</a></p><ul><li><a href="/python/flask/user_guide/template#jinja-setup">Jinja Setup</a></li><li><a href="/python/flask/user_guide/template#standard-context">Standard Context</a></li><li><a href="/python/flask/user_guide/template#controlling-autoescaping">Controlling Autoescaping</a></li><li><a href="/python/flask/user_guide/template#registering-filters">Registering Filters</a></li><li><a href="/python/flask/user_guide/template#context-processors">Context Processors</a></li><li><a href="/python/flask/user_guide/template#streaming">Streaming</a></li></ul></li><li><p><a href="/python/flask/user_guide/application#testing-flask-applications">Testing Flask Applications</a></p><ul><li><a href="/python/flask/user_guide/application#identifying-tests">Identifying Tests</a></li><li><a href="/python/flask/user_guide/application#fixtures">Fixtures</a></li><li><a href="/python/flask/user_guide/application#sending-requests-with-the-test-client">Sending Requests with the Test Client</a></li><li><a href="/python/flask/user_guide/application#following-redirects">Following Redirects</a></li><li><a href="/python/flask/user_guide/application#accessing-and-modifying-the-session">Accessing and Modifying the Session</a></li><li><a href="/python/flask/user_guide/application#running-commands-with-the-cli-runner">Running Commands with the CLI Runner</a></li><li><a href="/python/flask/user_guide/application#tests-that-depend-on-an-active-context">Tests that depend on an Active Context</a></li></ul></li><li><p><a href="/python/flask/user_guide/handle_error#handling-application-errors">Handling Application Errors</a></p><ul><li><a href="/python/flask/user_guide/handle_error#error-logging-tools">Error Logging Tools</a></li><li><a href="/python/flask/user_guide/handle_error#error-handlers">Error Handlers</a></li><li><a href="/python/flask/user_guide/handle_error#custom-error-pages">Custom Error Pages</a></li><li><a href="/python/flask/user_guide/handle_error#blueprint-error-handlers">Blueprint Error Handlers</a></li><li><a href="/python/flask/user_guide/handle_error#returning-api-errors-as-json">Returning API Errors as JSON</a></li><li><a href="/python/flask/user_guide/handle_error#logging">Logging</a></li><li><a href="/python/flask/user_guide/handle_error#debugging">Debugging</a></li></ul></li><li><p><a href="/python/flask/user_guide/debug_error#debugging-application-errors">Debugging Application Errors</a></p><ul><li><a href="/python/flask/user_guide/debug_error#in-production">In Production</a></li><li><a href="/python/flask/user_guide/debug_error#the-built-in-debugger">The Built-In Debugger</a></li><li><a href="/python/flask/user_guide/debug_error#external-debuggers">External Debuggers</a></li></ul></li><li><p><a href="/python/flask/user_guide/logging#logging">Logging</a></p><ul><li><a href="/python/flask/user_guide/logging#basic-configuration">Basic Configuration</a></li><li><a href="/python/flask/user_guide/logging#email-errors-to-admins">Email Errors to Admins</a></li><li><a href="/python/flask/user_guide/logging#injecting-request-information">Injecting Request Information</a></li><li><a href="/python/flask/user_guide/logging#other-libraries">Other Libraries</a></li></ul></li><li><p><a href="/python/flask/user_guide/configuration#configuration-handling">Configuration Handling</a></p><ul><li><a href="/python/flask/user_guide/configuration#configuration-basics">Configuration Basics</a></li><li><a href="/python/flask/user_guide/configuration#debug-mode">Debug Mode</a></li><li><a href="/python/flask/user_guide/configuration#builtin-configuration-values">Builtin Configuration Values</a></li><li><a href="/python/flask/user_guide/configuration#configuring-from-python-files">Configuring from Python Files</a></li><li><a href="/python/flask/user_guide/configuration#configuring-from-data-files">Configuring from Data Files</a></li><li><a href="/python/flask/user_guide/configuration#configuring-from-environment-variables">Configuring from Environment Variables</a></li><li><a href="/python/flask/user_guide/configuration#configuration-best-practices">Configuration Best Practices</a></li><li><a href="/python/flask/user_guide/configuration#development-production">Development / Production</a></li><li><a href="/python/flask/user_guide/configuration#instance-folders">Instance Folders</a></li></ul></li><li><p><a href="/python/flask/user_guide/signal#signals">Signals</a></p><ul><li><a href="/python/flask/user_guide/signal#core-signals">Core Signals</a></li><li><a href="/python/flask/user_guide/signal#subscribing-to-signals">Subscribing to Signals</a></li><li><a href="/python/flask/user_guide/signal#creating-signals">Creating Signals</a></li><li><a href="/python/flask/user_guide/signal#sending-signals">Sending Signals</a></li><li><a href="/python/flask/user_guide/signal#signals-and-flask-s-request-context">Signals and Flask’s Request Context</a></li><li><a href="/python/flask/user_guide/signal#decorator-based-signal-subscriptions">Decorator Based Signal Subscriptions</a></li></ul></li><li><p><a href="/python/flask/user_guide/view#class-based-views">Class-based Views</a></p><ul><li><a href="/python/flask/user_guide/view#basic-reusable-view">Basic Reusable View</a></li><li><a href="/python/flask/user_guide/view#url-variables">URL Variables</a></li><li><a href="/python/flask/user_guide/view#view-lifetime-and-self">View Lifetime and self</a></li><li><a href="/python/flask/user_guide/view#view-decorators">View Decorators</a></li><li><a href="/python/flask/user_guide/view#method-hints">Method Hints</a></li><li><a href="/python/flask/user_guide/view#method-dispatching-and-apis">Method Dispatching and APIs</a></li></ul></li><li><p><a href="/python/flask/user_guide/app_structure#application-structure-and-lifecycle">Application Structure and Lifecycle</a></p><ul><li><a href="/python/flask/user_guide/app_structure#application-setup">Application Setup</a></li><li><a href="/python/flask/user_guide/app_structure#serving-the-application">Serving the Application</a></li><li><a href="/python/flask/user_guide/app_structure#how-a-request-is-handled">How a Request is Handled</a></li></ul></li><li><p><a href="/python/flask/user_guide/app_context#the-application-context">The Application Context</a></p><ul><li><a href="/python/flask/user_guide/app_context#purpose-of-the-context">Purpose of the Context</a></li><li><a href="/python/flask/user_guide/app_context#lifetime-of-the-context">Lifetime of the Context</a></li><li><a href="/python/flask/user_guide/app_context#manually-push-a-context">Manually Push a Context</a></li><li><a href="/python/flask/user_guide/app_context#storing-data">Storing Data</a></li><li><a href="/python/flask/user_guide/app_context#events-and-signals">Events and Signals</a></li></ul></li><li><p><a href="/python/flask/user_guide/request_context#the-request-context">The Request Context</a></p><ul><li><a href="/python/flask/user_guide/request_context#purpose-of-the-context">Purpose of the Context</a></li><li><a href="/python/flask/user_guide/request_context#lifetime-of-the-context">Lifetime of the Context</a></li><li><a href="/python/flask/user_guide/request_context#manually-push-a-context">Manually Push a Context</a></li><li><a href="/python/flask/user_guide/request_context#how-the-context-works">How the Context Works</a></li><li><a href="/python/flask/user_guide/request_context#callbacks-and-errors">Callbacks and Errors</a></li><li><a href="/python/flask/user_guide/request_context#notes-on-proxies">Notes On Proxies</a></li></ul></li><li><p><a href="/python/flask/user_guide/blueprint#modular-applications-with-blueprints">Modular Applications with Blueprints</a></p><ul><li><a href="/python/flask/user_guide/blueprint#why-blueprints">Why Blueprints?</a></li><li><a href="/python/flask/user_guide/blueprint#the-concept-of-blueprints">The Concept of Blueprints</a></li><li><a href="/python/flask/user_guide/blueprint#my-first-blueprint">My First Blueprint</a></li><li><a href="/python/flask/user_guide/blueprint#registering-blueprints">Registering Blueprints</a></li><li><a href="/python/flask/user_guide/blueprint#nesting-blueprints">Nesting Blueprints</a></li><li><a href="/python/flask/user_guide/blueprint#blueprint-resources">Blueprint Resources</a></li><li><a href="/python/flask/user_guide/blueprint#building-urls">Building URLs</a></li><li><a href="/python/flask/user_guide/blueprint#blueprint-error-handlers">Blueprint Error Handlers</a></li></ul></li><li><p><a href="/python/flask/user_guide/extension#extensions">Extensions</a></p><ul><li><a href="/python/flask/user_guide/extension#finding-extensions">Finding Extensions</a></li><li><a href="/python/flask/user_guide/extension#using-extensions">Using Extensions</a></li><li><a href="/python/flask/user_guide/extension#building-extensions">Building Extensions</a></li></ul></li><li><p><a href="/python/flask/user_guide/cmd_interface#command-line-interface">Command Line Interface</a></p><ul><li><a href="/python/flask/user_guide/cmd_interface#application-discovery">Application Discovery</a></li><li><a href="/python/flask/user_guide/cmd_interface#run-the-development-server">Run the Development Server</a></li><li><a href="/python/flask/user_guide/cmd_interface#open-a-shell">Open a Shell</a></li><li><a href="/python/flask/user_guide/cmd_interface#environment-variables-from-dotenv">Environment Variables From dotenv</a></li><li><a href="/python/flask/user_guide/cmd_interface#environment-variables-from-virtualenv">Environment Variables From virtualenv</a></li><li><a href="/python/flask/user_guide/cmd_interface#custom-commands">Custom Commands</a></li><li><a href="/python/flask/user_guide/cmd_interface#plugins">Plugins</a></li><li><a href="/python/flask/user_guide/cmd_interface#custom-scripts">Custom Scripts</a></li><li><a href="/python/flask/user_guide/cmd_interface#pycharm-integration">PyCharm Integration</a></li></ul></li><li><p><a href="/python/flask/user_guide/develop_server#development-server">Development Server</a></p><ul><li><a href="/python/flask/user_guide/develop_server#command-line">Command Line</a></li><li><a href="/python/flask/user_guide/develop_server#in-code">In Code</a></li></ul></li><li><p><a href="/python/flask/user_guide/shell#working-with-the-shell">Working with the Shell</a></p><ul><li><a href="/python/flask/user_guide/shell#command-line-interface">Command Line Interface</a></li><li><a href="/python/flask/user_guide/shell#creating-a-request-context">Creating a Request Context</a></li><li><a href="/python/flask/user_guide/shell#firing-before-after-request">Firing Before/After Request</a></li><li><a href="/python/flask/user_guide/shell#further-improving-the-shell-experience">Further Improving the Shell Experience</a></li></ul></li><li><p><a href="/python/flask/user_guide/pattern/#patterns-for-flask">Patterns for Flask</a></p><ul><li><a href="/python/flask/user_guide/pattern/large_app#large-applications-as-packages">Large Applications as Packages</a></li><li><a href="/python/flask/user_guide/pattern/app_factories#application-factories">Application Factories</a></li><li><a href="/python/flask/user_guide/pattern/app_dispatch#application-dispatching">Application Dispatching</a></li><li><a href="/python/flask/user_guide/pattern/use_url#using-url-processors">Using URL Processors</a></li><li><a href="/python/flask/user_guide/pattern/sqlite3#using-sqlite-3-with-flask">Using SQLite 3 with Flask</a></li><li><a href="/python/flask/user_guide/pattern/sqlalchemy#sqlalchemy-in-flask">SQLAlchemy in Flask</a></li><li><a href="/python/flask/user_guide/pattern/upload_file#uploading-files">Uploading Files</a></li><li><a href="/python/flask/user_guide/pattern/caching#caching">Caching</a></li><li><a href="/python/flask/user_guide/pattern/view_decorator#view-decorators">View Decorators</a></li><li><a href="/python/flask/user_guide/pattern/wtform#form-validation-with-wtforms">Form Validation with WTForms</a></li><li><a href="/python/flask/user_guide/pattern/template_inheritance#template-inheritance">Template Inheritance</a></li><li><a href="/python/flask/user_guide/pattern/flash#message-flashing">Message Flashing</a></li><li><a href="/python/flask/user_guide/pattern/javascript#javascript-fetch-and-json">JavaScript, fetch, and JSON</a></li><li><a href="/python/flask/user_guide/pattern/load_view#lazily-loading-views">Lazily Loading Views</a></li><li><a href="/python/flask/user_guide/pattern/mongdb#mongodb-with-mongoengine">MongoDB with MongoEngine</a></li><li><a href="/python/flask/user_guide/pattern/favicon#adding-a-favicon">Adding a favicon</a></li><li><a href="/python/flask/user_guide/pattern/stream_content#streaming-contents">Streaming Contents</a></li><li><a href="/python/flask/user_guide/pattern/request_callback#deferred-request-callbacks">Deferred Request Callbacks</a></li><li><a href="/python/flask/user_guide/pattern/add_http#adding-http-method-overrides">Adding HTTP Method Overrides</a></li><li><a href="/python/flask/user_guide/pattern/checksum#request-content-checksums">Request Content Checksums</a></li><li><a href="/python/flask/user_guide/pattern/celery#background-tasks-with-celery">Background Tasks with Celery</a></li><li><a href="/python/flask/user_guide/pattern/subclass_flask#subclassing-flask">Subclassing Flask</a></li><li><a href="/python/flask/user_guide/pattern/single_page#single-page-applications">Single-Page Applications</a></li></ul></li><li><p><a href="/python/flask/user_guide/security#security-considerations">Security Considerations</a></p><ul><li><a href="/python/flask/user_guide/security#cross-site-scripting-xss">Cross-Site Scripting (XSS)</a></li><li><a href="/python/flask/user_guide/security#cross-site-request-forgery-csrf">Cross-Site Request Forgery (CSRF)</a></li><li><a href="/python/flask/user_guide/security#json-security">JSON Security</a></li><li><a href="/python/flask/user_guide/security#security-headers">Security Headers</a></li><li><a href="/python/flask/user_guide/security#copy-paste-to-terminal">Copy/Paste to Terminal</a></li></ul></li><li><p><a href="/python/flask/user_guide/deploy#deploying-to-production">Deploying to Production</a></p><ul><li><a href="/python/flask/user_guide/deploy#self-hosted-options">Self-Hosted Options</a></li><li><a href="/python/flask/user_guide/deploy#hosting-platforms">Hosting Platforms</a></li></ul></li><li><p><a href="/python/flask/user_guide/async#using-async-and-await">Using async and await</a></p><ul><li><a href="/python/flask/user_guide/async#performance">Performance</a></li><li><a href="/python/flask/user_guide/async#background-tasks">Background tasks</a></li><li><a href="/python/flask/user_guide/async#when-to-use-quart-instead">When to use Quart instead</a></li><li><a href="/python/flask/user_guide/async#extensions">Extensions</a></li><li><a href="/python/flask/user_guide/async#other-event-loops">Other event loops</a></li></ul></li></ul><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference {#api-reference}&quot;">​</a></h2><p>If you are looking for information on a specific function, class or method, this part of the documentation is for you.</p><ul><li><p><a href="/python/flask/api_reference/app_obj#api">API</a></p><ul><li><a href="/python/flask/api_reference/app_obj#application-object">Application Object</a></li><li><a href="/python/flask/api_reference/blueprint_obj#blueprint-objects">Blueprint Objects</a></li><li><a href="/python/flask/api_reference/request_data#incoming-request-data">Incoming Request Data</a></li><li><a href="/python/flask/api_reference/response_obj#response-objects">Response Objects</a></li><li><a href="/python/flask/api_reference/session#session‘？">Sessions</a></li><li><a href="/python/flask/api_reference/session_interface#session-interface">Session Interface</a></li><li><a href="/python/flask/api_reference/test_client#test-client">Test Client</a></li><li><a href="/python/flask/api_reference/test_cli#test-cli-runner">Test CLI Runner</a></li><li><a href="/python/flask/api_reference/app_global#application-globals">Application Globals</a></li><li><a href="/python/flask/api_reference/function_class#useful-functions-and-classes">Useful Functions and Classes</a></li><li><a href="/python/flask/api_reference/message_flash#message-flashing">Message Flashing</a></li><li><a href="/python/flask/api_reference/json_support#json-support">JSON Support</a></li><li><a href="/python/flask/api_reference/template_render#template-rendering">Template Rendering</a></li><li><a href="/python/flask/api_reference/config#configuration">Configuration</a></li><li><a href="/python/flask/api_reference/stream_help#stream-helpers">Stream Helpers</a></li><li><a href="/python/flask/api_reference/useful_internal#useful-internals">Useful Internals</a></li><li><a href="/python/flask/api_reference/signal#signals">Signals</a></li><li><a href="/python/flask/api_reference/view#class-based-views">Class-Based Views</a></li><li><a href="/python/flask/api_reference/url_route#url-route-registrations">URL Route Registrations</a></li><li><a href="/python/flask/api_reference/view_function#view-function-options">View Function Options</a></li><li><a href="/python/flask/api_reference/cmd_line#command-line-interface">Command Line Interface</a></li></ul></li></ul><h2 id="additional-notes" tabindex="-1">Additional Notes <a class="header-anchor" href="#additional-notes" aria-label="Permalink to &quot;Additional Notes {#additional-notes}&quot;">​</a></h2><ul><li><p><a href="/python/flask/additional_note/design_decision#design-decisions-in-flask">Design Decisions in Flask</a></p><ul><li><a href="/python/flask/additional_note/design_decision#the-explicit-application-object">The Explicit Application Object</a></li><li><a href="/python/flask/additional_note/design_decision#the-routing-system">The Routing System</a></li><li><a href="/python/flask/additional_note/design_decision#one-template-engine">One Template Engine</a></li><li><a href="/python/flask/additional_note/design_decision#what-does-micro-mean">What does “micro” mean?</a></li><li><a href="/python/flask/additional_note/design_decision#thread-locals">Thread Locals</a></li><li><a href="/python/flask/additional_note/design_decision#async-await-and-asgi-support">Async/await and ASGI support</a></li><li><a href="/python/flask/additional_note/design_decision#what-flask-is-what-flask-is-not">What Flask is, What Flask is Not</a></li></ul></li><li><p><a href="/python/flask/additional_note/flask_extension#flask-extension-development">Flask Extension Development</a></p><ul><li><a href="/python/flask/additional_note/flask_extension#naming">Naming</a></li><li><a href="/python/flask/additional_note/flask_extension#the-extension-class-and-initialization">The Extension Class and Initialization</a></li><li><a href="/python/flask/additional_note/flask_extension#adding-behavior">Adding Behavior</a></li><li><a href="/python/flask/additional_note/flask_extension#configuration-techniques">Configuration Techniques</a></li><li><a href="/python/flask/additional_note/flask_extension#data-during-a-request">Data During a Request</a></li><li><a href="/python/flask/additional_note/flask_extension#views-and-models">Views and Models</a></li><li><a href="/python/flask/additional_note/flask_extension#recommended-extension-guidelines">Recommended Extension Guidelines</a></li></ul></li><li><p><a href="/python/flask/additional_note/contribute#how-to-contribute-to-flask">How to contribute to Flask</a></p><ul><li><a href="/python/flask/additional_note/contribute#support-questions">Support questions</a></li><li><a href="/python/flask/additional_note/contribute#reporting-issues">Reporting issues</a></li><li><a href="/python/flask/additional_note/contribute#submitting-patches">Submitting patches</a></li></ul></li><li><p><a href="/python/flask/additional_note/license#bsd-3-clause-license">BSD-3-Clause License</a></p></li><li><p><a href="/python/flask/additional_note/change#changes">Changes</a></p></li></ul>',12),n=[s];function r(o,u,p,f,h,d){return i(),a("div",null,n)}const k=e(l,[["render",r]]);export{c as __pageData,k as default};