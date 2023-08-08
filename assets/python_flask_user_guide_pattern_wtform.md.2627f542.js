import{_ as s,o as a,c as n,V as o}from"./chunks/framework.d3b95951.js";const d=JSON.parse('{"title":"Form Validation with WTForms","description":"","frontmatter":{},"headers":[],"relativePath":"python/flask/user_guide/pattern/wtform.md","filePath":"python/flask/user_guide/pattern/wtform.md"}'),l={name:"python/flask/user_guide/pattern/wtform.md"},e=o(`<h1 id="form-validation-with-wtforms" tabindex="-1">Form Validation with WTForms <a class="header-anchor" href="#form-validation-with-wtforms" aria-label="Permalink to &quot;Form Validation with WTForms&quot;">​</a></h1><p>When you have to work with form data submitted by a browser view, code quickly becomes very hard to read. There are libraries out there designed to make this process easier to manage. One of them is <a href="https://wtforms.readthedocs.io/" target="_blank" rel="noreferrer">WTForms</a> which we will handle here. If you find yourself in the situation of having many forms, you might want to give it a try.</p><p>When you are working with WTForms you have to define your forms as classes first. I recommend breaking up the application into multiple modules (<a href="https://flask.palletsprojects.com/en/2.3.x/patterns/packages/" target="_blank" rel="noreferrer">Large Applications as Packages</a>) for that and adding a separate module for the forms.</p><div class="tip custom-block"><p class="custom-block-title">Getting the most out of WTForms with an Extension</p><p>The <a href="https://flask-wtf.readthedocs.io/" target="_blank" rel="noreferrer">Flask-WTF</a> extension expands on this pattern and adds a few little helpers that make working with forms and Flask more fun. You can get it from <a href="https://pypi.org/project/Flask-WTF/" target="_blank" rel="noreferrer">PyPI</a>.</p></div><h2 id="the-forms" tabindex="-1">The Forms <a class="header-anchor" href="#the-forms" aria-label="Permalink to &quot;The Forms&quot;">​</a></h2><p>This is an example form for a typical registration page:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> wtforms </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Form</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> BooleanField</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StringField</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PasswordField</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> validators</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RegistrationForm</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    username </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StringField</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Username</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">validators</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Length</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">min</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">max</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">)])</span></span>
<span class="line"><span style="color:#A6ACCD;">    email </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StringField</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Email Address</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">validators</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Length</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">min</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">max</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">35</span><span style="color:#89DDFF;">)])</span></span>
<span class="line"><span style="color:#A6ACCD;">    password </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PasswordField</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">New Password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#82AAFF;">        validators</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DataRequired</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#82AAFF;">        validators</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">EqualTo</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">confirm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Passwords must match</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">    confirm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PasswordField</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Repeat Password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    accept_tos </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BooleanField</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">I accept the TOS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">validators</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DataRequired</span><span style="color:#89DDFF;">()])</span></span></code></pre></div><h2 id="in-the-view" tabindex="-1">In the View&#39; <a class="header-anchor" href="#in-the-view" aria-label="Permalink to &quot;In the View&#39;&quot;">​</a></h2><p>In the view function, the usage of this form looks like this:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/register</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">methods</span><span style="color:#89DDFF;">=[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    form </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RegistrationForm</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">method</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validate</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">User</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">form</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> form</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">email</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">                    form</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        db_session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">user</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">flash</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Thanks for registering</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">redirect</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">url_for</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render_template</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">register.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">form</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">form</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Notice we’re implying that the view is using SQLAlchemy here (<a href="https://flask.palletsprojects.com/en/2.3.x/patterns/sqlalchemy/" target="_blank" rel="noreferrer">SQLAlchemy in Flask</a>), but that’s not a requirement, of course. Adapt the code as necessary.</p><p>Things to remember:</p><ol><li><p>create the form from the request <code>form</code> value if the data is submitted via the HTTP <code>POST</code> method and <code>args</code> if the data is submitted as <code>GET</code>.</p></li><li><p>to validate the data, call the <code>validate()</code> method, which will return <code>True</code> if the data validates, <code>False</code> otherwise.</p></li><li><p>to access individual values from the form, access <code>form.&lt;NAME&gt;.data</code>.</p></li></ol><h2 id="forms-in-templates" tabindex="-1">Forms in Templates <a class="header-anchor" href="#forms-in-templates" aria-label="Permalink to &quot;Forms in Templates&quot;">​</a></h2><p>Now to the template side. When you pass the form to the templates, you can easily render them there. Look at the following example template to see how easy this is. WTForms does half the form generation for us already. To make it even nicer, we can write a macro that renders a field with label and a list of errors if there are any.</p><p>Here’s an example <code>_formhelpers.html</code> template with such a macro:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{% macro render_field(field) %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dt</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ field.label }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dd</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ field(**kwargs)|safe }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  {% if field.errors %}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">errors</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {% for error in field.errors %}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ error }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {% endfor %}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {% endif %}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dd</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{% endmacro %}</span></span></code></pre></div><p>This macro accepts a couple of keyword arguments that are forwarded to WTForm’s field function, which renders the field for us. The keyword arguments will be inserted as HTML attributes. So, for example, you can call <code>render_field(form.username, class=&#39;username&#39;)</code> to add a class to the input element. Note that WTForms returns standard Python strings, so we have to tell Jinja2 that this data is already HTML-escaped with the <code>|safe</code> filter.</p><p>Here is the <code>register.html</code> template for the function we used above, which takes advantage of the <code>_formhelpers.html</code> template:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{% from &quot;_formhelpers.html&quot; import render_field %}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">method</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dl</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ render_field(form.username) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ render_field(form.email) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ render_field(form.password) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ render_field(form.confirm) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ render_field(form.accept_tos) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dl</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">Register</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>For more information about WTForms, head over to the <a href="https://wtforms.readthedocs.io/" target="_blank" rel="noreferrer">WTForms website</a>.</p>`,21),p=[e];function t(r,c,F,D,y,i){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
