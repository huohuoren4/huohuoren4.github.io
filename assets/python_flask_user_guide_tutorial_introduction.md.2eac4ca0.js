import{_ as t,o as e,c as a,X as o}from"./chunks/framework.b5656a4e.js";const i="/flask/ndex_page.png",r="/flask/login_page.png",l="/flask/edit_page.png",k=JSON.parse('{"title":"Tutorial","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/tutorial/introduction.md","filePath":"python/flask/user_guide/tutorial/introduction.md","lastUpdated":1692979908000}'),s={name:"python/flask/user_guide/tutorial/introduction.md"},n=o('<h1 id="tutorial" tabindex="-1">Tutorial <a class="header-anchor" href="#tutorial" aria-label="Permalink to &quot;Tutorial {#tutorial}&quot;">​</a></h1><p>Contents:</p><ul><li><a href="/python/flask/user_guide/tutorial/project_layout#project-layout">Project Layout</a></li><li><a href="/python/flask/user_guide/tutorial/app_setup#application-setup">Application Setup</a></li><li><a href="/python/flask/user_guide/tutorial/database#define-and-access-the-database">Define and Access the Database</a></li><li><a href="/python/flask/user_guide/tutorial/blueprint_view#blueprints-and-views">Blueprints and Views</a></li><li><a href="/python/flask/user_guide/tutorial/template#templates">Templates</a></li><li><a href="/python/flask/user_guide/tutorial/static_file#static-files">Static Files</a></li><li><a href="/python/flask/user_guide/tutorial/blog_blueprint#blog-blueprint">Blog Blueprint</a></li><li><a href="/python/flask/user_guide/tutorial/project_install#make-the-project-installable">Make the Project Installable</a></li><li><a href="/python/flask/user_guide/tutorial/test_coverage#test-coverage">Test Coverage</a></li><li><a href="/python/flask/user_guide/tutorial/deploy#deploy-to-production">Deploy to Production</a></li><li><a href="/python/flask/user_guide/tutorial/develop#keep-developing">Keep Developing!</a></li></ul><p>This tutorial will walk you through creating a basic blog application called Flaskr. Users will be able to register, log in, create posts, and edit or delete their own posts. You will be able to package and install the application on other computers.</p><p><img src="'+i+'" alt="index_page"></p><p>It’s assumed that you’re already familiar with Python. The <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noreferrer">official tutorial</a> in the Python docs is a great way to learn or review first.</p><p>While it’s designed to give a good starting point, the tutorial doesn’t cover all of Flask’s features. Check out the <a href="/python/flask/user_guide/quickstart#quickstart">Quickstart</a> for an overview of what Flask can do, then dive into the docs to find out more. The tutorial only uses what’s provided by Flask and Python. In another project, you might decide to use <a href="/python/flask/user_guide/extension#extensions">Extensions</a> or other libraries to make some tasks simpler.</p><p><img src="'+r+'" alt="login_page"></p><p>Flask is flexible. It doesn’t require you to use any particular project or code layout. However, when first starting, it’s helpful to use a more structured approach. This means that the tutorial will require a bit of boilerplate up front, but it’s done to avoid many common pitfalls that new developers encounter, and it creates a project that’s easy to expand on. Once you become more comfortable with Flask, you can step out of this structure and take full advantage of Flask’s flexibility.</p><p><img src="'+l+'" alt="edit_page"></p><p><a href="https://github.com/pallets/flask/tree/main/examples/tutorial" target="_blank" rel="noreferrer">The tutorial project is available as an example in the Flask repository</a>, if you want to compare your project with the final product as you follow the tutorial.</p><p>Continue to <a href="/python/flask/user_guide/tutorial/project_layout#project-layout">Project Layout</a>.</p>',12),u=[n];function p(c,h,d,f,_,g){return e(),a("div",null,u)}const m=t(s,[["render",p]]);export{k as __pageData,m as default};