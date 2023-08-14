import{_ as i,o as l,c as e,V as t}from"./chunks/framework.48c56699.js";const m=JSON.parse('{"title":"Flask","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/home.md","filePath":"python/flask/home.md"}'),n={name:"python/flask/home.md"},s=t('<h1 id="flask" tabindex="-1">Flask <a class="header-anchor" href="#flask" aria-label="Permalink to &quot;Flask&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>flask document version: <code>2.3.2</code>. the lastest version is only maintained.</p><p>lastest updated: <em>2023/07/31</em></p></div><p>Welcome to Flask’s documentation. Get started with Installation and then get an overview with the Quickstart. There is also a more detailed Tutorial that shows how to create a small but complete application with Flask. Common patterns are described in the Patterns for Flask section. The rest of the docs describe each component of Flask in detail, with a full reference in the API section.</p><p>Flask depends on the Werkzeug WSGI toolkit, the Jinja template engine, and the Click CLI toolkit. Be sure to check their documentation as well as Flask’s when looking for information.</p><h2 id="user-s-guide" tabindex="-1">User&#39;s Guide <a class="header-anchor" href="#user-s-guide" aria-label="Permalink to &quot;User&#39;s Guide&quot;">​</a></h2><p>Flask provides configuration and conventions, with sensible defaults, to get started. This section of the documentation explains the different parts of the Flask framework and how they can be used, customized, and extended. Beyond Flask itself, look for community-maintained extensions to add even more functionality.</p><ul><li><p>Installation</p><ul><li>Python Version</li><li>Dependencies</li><li>Virtual environments</li><li>Install Flask</li></ul></li><li><p>Quickstart</p><ul><li>A Minimal Application</li><li>Debug Mode</li><li>HTML Escaping</li><li>Routing</li><li>Static Files</li><li>Rendering Templates</li><li>Accessing Request Data</li><li>Redirects and Errors</li><li>About Responses</li><li>Sessions</li><li>Message Flashing</li><li>Logging</li><li>Hooking in WSGI Middleware</li><li>Using Flask Extensions</li><li>Deploying to a Web Server</li></ul></li><li><p>Tutorial</p><ul><li>Project Layout</li><li>Application Setup</li><li>Define and Access the Database</li><li>Blueprints and Views</li><li>Templates</li><li>Static Files</li><li>Blog Blueprint</li><li>Make the Project Installable</li><li>Test Coverage</li><li>Deploy to Production</li><li>Keep Developing!</li></ul></li><li><p>Templates</p><ul><li>Jinja Setup</li><li>Standard Context</li><li>Controlling Autoescaping</li><li>Registering Filters</li><li>Context Processors</li><li>Streaming</li></ul></li><li><p>Testing Flask Applications</p><ul><li>Identifying Tests</li><li>Fixtures</li><li>Sending Requests with the Test Client</li><li>Following Redirects</li><li>Accessing and Modifying the Session</li><li>Running Commands with the CLI Runner</li><li>Tests that depend on an Active Context</li></ul></li><li><p>Handling Application Errors</p><ul><li>Error Logging Tools</li><li>Error Handlers</li><li>Custom Error Pages</li><li>Blueprint Error Handlers</li><li>Returning API Errors as JSON</li><li>Logging</li><li>Debugging</li></ul></li><li><p>Debugging Application Errors</p><ul><li>In Production</li><li>The Built-In Debugger</li><li>External Debuggers</li></ul></li><li><p>Logging</p><ul><li>Basic Configuration</li><li>Email Errors to Admins</li><li>Injecting Request Information</li><li>Other Libraries</li></ul></li><li><p>Configuration Handling</p><ul><li>Configuration Basics</li><li>Debug Mode</li><li>Builtin Configuration Values</li><li>Configuring from Python Files</li><li>Configuring from Data Files</li><li>Configuring from Environment Variables</li><li>Configuration Best Practices</li><li>Development / Production</li><li>Instance Folders</li></ul></li><li><p>Signals</p><ul><li>Core Signals</li><li>Subscribing to Signals</li><li>Creating Signals</li><li>Sending Signals</li><li>Signals and Flask’s Request Context</li><li>Decorator Based Signal Subscriptions</li></ul></li><li><p>Class-based Views</p><ul><li>Basic Reusable View</li><li>URL Variables</li><li>View Lifetime and self</li><li>View Decorators</li><li>Method Hints</li><li>Method Dispatching and APIs</li></ul></li><li><p>Application Structure and Lifecycle</p><ul><li>Application Setup</li><li>Serving the Application</li><li>How a Request is Handled</li></ul></li><li><p>The Application Context</p><ul><li>Purpose of the Context</li><li>Lifetime of the Context</li><li>Manually Push a Context</li><li>Storing Data</li><li>Events and Signals</li></ul></li><li><p>The Request Context</p><ul><li>Purpose of the Context</li><li>Lifetime of the Context</li><li>Manually Push a Context</li><li>How the Context Works</li><li>Callbacks and Errors</li><li>Notes On Proxies</li></ul></li><li><p>Modular Applications with Blueprints</p><ul><li>Why Blueprints?</li><li>The Concept of Blueprints</li><li>My First Blueprint</li><li>Registering Blueprints</li><li>Nesting Blueprints</li><li>Blueprint Resources</li><li>Building URLs</li><li>Blueprint Error Handlers</li></ul></li><li><p>Extensions</p><ul><li>Finding Extensions</li><li>Using Extensions</li><li>Building Extensions</li></ul></li><li><p>Command Line Interface</p><ul><li>Application Discovery</li><li>Run the Development Server</li><li>Open a Shell</li><li>Environment Variables From dotenv</li><li>Environment Variables From virtualenv</li><li>Custom Commands</li><li>Plugins</li><li>Custom Scripts</li><li>PyCharm Integration</li></ul></li><li><p>Development Server</p><ul><li>Command Line</li><li>In Code</li></ul></li><li><p>Working with the Shell</p><ul><li>Command Line Interface</li><li>Creating a Request Context</li><li>Firing Before/After Request</li><li>Further Improving the Shell Experience</li><li>Patterns for Flask</li><li>Large Applications as Packages</li><li>Application Factories</li><li>Application Dispatching</li><li>Using URL Processors</li><li>Using SQLite 3 with Flask</li><li>SQLAlchemy in Flask</li><li>Uploading Files</li><li>Caching</li><li>View Decorators</li><li>Form Validation with WTForms</li><li>Template Inheritance</li><li>Message Flashing</li><li>JavaScript, fetch, and JSON</li><li>Lazily Loading Views</li><li>MongoDB with MongoEngine</li><li>Adding a favicon</li><li>Streaming Contents</li><li>Deferred Request Callbacks</li><li>Adding HTTP Method Overrides</li><li>Request Content Checksums</li><li>Background Tasks with Celery</li><li>Subclassing Flask</li><li>Single-Page Applications</li></ul></li><li><p>Security Considerations</p><ul><li>Cross-Site Scripting (XSS)</li><li>Cross-Site Request Forgery (CSRF)</li><li>JSON Security</li><li>Security Headers</li><li>Copy/Paste to Terminal</li></ul></li><li><p>Deploying to Production</p><ul><li>Self-Hosted Options</li><li>Hosting Platforms</li></ul></li><li><p>Using async and await</p><ul><li>Performance</li><li>Background tasks</li><li>When to use Quart instead</li><li>Extensions</li><li>Other event loops</li></ul></li></ul><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><p>If you are looking for information on a specific function, class or method, this part of the documentation is for you.</p><ul><li><p>API</p><ul><li>Application Object</li><li>Blueprint Objects</li><li>Incoming Request Data</li><li>Response Objects</li><li>Sessions</li><li>Session Interface</li><li>Test Client</li><li>Test CLI Runner</li><li>Application Globals</li><li>Useful Functions and Classes</li><li>Message Flashing</li><li>JSON Support</li><li>Template Rendering</li><li>Configuration</li><li>Stream Helpers</li><li>Useful Internals</li><li>Signals</li><li>Class-Based Views</li><li>URL Route Registrations</li><li>View Function Options</li><li>Command Line Interface</li></ul></li></ul><h2 id="additional-notes" tabindex="-1">Additional Notes <a class="header-anchor" href="#additional-notes" aria-label="Permalink to &quot;Additional Notes&quot;">​</a></h2><ul><li><p>Design Decisions in Flask</p><ul><li>The Explicit Application Object</li><li>The Routing System</li><li>One Template Engine</li><li>What does “micro” mean?</li><li>Thread Locals</li><li>Async/await and ASGI support</li><li>What Flask is, What Flask is Not</li></ul></li><li><p>Flask Extension Development</p><ul><li>Naming</li><li>The Extension Class and Initialization</li><li>Adding Behavior</li><li>Configuration Techniques</li><li>Data During a Request</li><li>Views and Models</li><li>Recommended Extension Guidelines</li></ul></li><li><p>How to contribute to Flask</p><ul><li>Support questions</li><li>Reporting issues</li><li>Submitting patches</li><li>BSD-3-Clause License</li></ul></li><li><p>Changes</p></li></ul>',12),a=[s];function o(r,u,p,c,d,g){return l(),e("div",null,a)}const f=i(n,[["render",o]]);export{m as __pageData,f as default};