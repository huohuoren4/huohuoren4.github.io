import{_ as i,o as l,c as e,V as a}from"./chunks/framework.d3b95951.js";const m=JSON.parse('{"title":"Patterns for Flask","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/index.md","filePath":"python/flask/user_guide/pattern/index.md"}'),t={name:"python/flask/user_guide/pattern/index.md"},n=a('<h1 id="patterns-for-flask" tabindex="-1">Patterns for Flask <a class="header-anchor" href="#patterns-for-flask" aria-label="Permalink to &quot;Patterns for Flask&quot;">​</a></h1><p>Certain features and interactions are common enough that you will find them in most web applications. For example, many applications use a relational database and user authentication. They will open a database connection at the beginning of the request and get the information for the logged in user. At the end of the request, the database connection is closed.</p><p>These types of patterns may be a bit outside the scope of Flask itself, but Flask makes it easy to implement them. Some common patterns are collected in the following pages.</p><ul><li><p>Large Applications as Packages</p><ul><li>Simple Packages</li><li>Working with Blueprints</li></ul></li><li><p>Application Factories</p><ul><li>Basic Factories</li><li>Factories &amp; Extensions</li><li>Using Applications</li><li>Factory Improvements</li></ul></li><li><p>Application Dispatching</p><ul><li>Working with this Document</li><li>Combining Applications</li><li>Dispatch by Subdomain</li><li>Dispatch by Path</li></ul></li><li><p>Using URL Processors</p><ul><li>Internationalized Application URLs</li><li>Internationalized Blueprint URLs</li></ul></li><li><p>Using SQLite 3 with Flask</p><ul><li>Connect on Demand</li><li>Easy Querying</li><li>Initial Schemas</li></ul></li><li><p>SQLAlchemy in Flask</p><ul><li>Flask-SQLAlchemy Extension</li><li>Declarative</li><li>Manual Object Relational Mapping</li><li>SQL Abstraction Layer</li></ul></li><li><p>Uploading Files</p><ul><li>A Gentle Introduction</li><li>Improving Uploads</li><li>Upload Progress Bars</li><li>An Easier Solution</li></ul></li><li><p>Caching</p></li><li><p>View Decorators</p><ul><li>Login Required Decorator</li><li>Caching Decorator</li><li>Templating Decorator</li><li>Endpoint Decorator</li></ul></li><li><p>Form Validation with WTForms</p><ul><li>The Forms</li><li>In the View</li><li>Forms in Templates</li></ul></li><li><p>Template Inheritance</p><ul><li>Base Template</li><li>Child Template</li></ul></li><li><p>Message Flashing</p><ul><li>Simple Flashing</li><li>Flashing With Categories</li><li>Filtering Flash Messages</li></ul></li><li><p>JavaScript, fetch, and JSON</p><ul><li>Rendering Templates</li><li>Generating URLs</li><li>Making a Request with fetch</li><li>Following Redirects</li><li>Replacing Content</li><li>Return JSON from Views</li><li>Receiving JSON in Views</li></ul></li><li><p>Lazily Loading Views</p><ul><li>Converting to Centralized URL Map</li><li>Loading Late</li></ul></li><li><p>MongoDB with MongoEngine</p><ul><li>Configuration</li><li>Mapping Documents</li><li>Creating Data</li><li>Queries</li><li>Documentation</li></ul></li><li><p>Adding a favicon</p><ul><li>See also</li></ul></li><li><p>Streaming Contents</p><ul><li>Basic Usage</li><li>Streaming from Templates</li><li>Streaming with Context</li></ul></li><li><p>Deferred Request Callbacks</p></li><li><p>Adding HTTP Method Overrides</p></li><li><p>Request Content Checksums</p></li><li><p>Background Tasks with Celery</p><ul><li>Install</li><li>Integrate Celery with Flask</li><li>Application Factory</li><li>Defining Tasks</li><li>Calling Tasks</li><li>Getting Results</li><li>Passing Data to Tasks</li></ul></li><li><p>Subclassing Flask</p></li><li><p>Single-Page Applications</p></li></ul>',4),s=[n];function o(p,r,c,u,g,h){return l(),e("div",null,s)}const f=i(t,[["render",o]]);export{m as __pageData,f as default};
