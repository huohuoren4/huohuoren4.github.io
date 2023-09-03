import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01af844e.js";const C=JSON.parse('{"title":"Command-line Flags","description":"","frontmatter":{},"headers":[],"relativePath":"python/pytest/reference_guides/api_reference/cmd_flags.md","filePath":"python/pytest/reference_guides/api_reference/cmd_flags.md","lastUpdated":1692807718000}'),p={name:"python/pytest/reference_guides/api_reference/cmd_flags.md"},o=l(`<h1 id="command-line-flags" tabindex="-1">Command-line Flags <a class="header-anchor" href="#command-line-flags" aria-label="Permalink to &quot;Command-line Flags {#command-line-flags}&quot;">​</a></h1><p>All the command-line flags can be obtained by running <code>pytest --help</code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark has-highlighted-lines has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span>
<span class="line"><span style="color:#B392F0;">usage:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> [options] [file_or_dir] [file_or_dir] [...]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">positional</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arguments:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">file_or_dir</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">general:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-k</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">EXPRESSION</span><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">Only</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">which</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">match</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">given</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">substring</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">expression.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">An</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">expression</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">evaluatable</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">expression</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">names</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">are</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">substring-matched</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">against</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">names</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">their</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">parent</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">classes.</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">Example:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-k</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;test_method or test_other&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">matches</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">functions</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">classes</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">whose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contains</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">&#39;test_method&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;test_other&#39;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">while</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-k</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;not</span></span>
<span class="line"><span style="color:#9ECBFF;">                        test_method&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">matches</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">those</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">that</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">don&#39;t contain</span></span>
<span class="line"><span style="color:#9ECBFF;">                        &#39;test_method&#39; in their names. -k &#39;not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_method</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test_other&#39; will eliminate the matches.</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Additionally keywords are matched to classes and</span></span>
<span class="line"><span style="color:#9ECBFF;">                        functions containing extra names in their</span></span>
<span class="line"><span style="color:#9ECBFF;">                        &#39;extra_keyword_matches&#39; set, as well as functions</span></span>
<span class="line"><span style="color:#9ECBFF;">                        which have names assigned directly to them. The</span></span>
<span class="line"><span style="color:#9ECBFF;">                        matching is case-insensitive.</span></span>
<span class="line"><span style="color:#9ECBFF;">  -m MARKEXPR           Only run tests matching given mark expression. For</span></span>
<span class="line"><span style="color:#9ECBFF;">                        example: -m &#39;mark1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mark2&#39;.</span></span>
<span class="line"><span style="color:#9ECBFF;">  --markers             show markers (builtin, plugin and per-project ones).</span></span>
<span class="line"><span style="color:#9ECBFF;">  -x, --exitfirst       Exit instantly on first error or failed test</span></span>
<span class="line"><span style="color:#9ECBFF;">  --fixtures, --funcargs</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Show available fixtures, sorted by plugin appearance</span></span>
<span class="line"><span style="color:#9ECBFF;">                        (fixtures with leading &#39;_&#39; are only shown with &#39;-v&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">  --fixtures-per-test   Show fixtures per test</span></span>
<span class="line"><span style="color:#9ECBFF;">  --pdb                 Start the interactive Python debugger on errors or</span></span>
<span class="line"><span style="color:#9ECBFF;">                        KeyboardInterrupt</span></span>
<span class="line"><span style="color:#9ECBFF;">  --pdbcls=modulename:classname</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Specify a custom interactive Python debugger for use</span></span>
<span class="line"><span style="color:#9ECBFF;">                        with --pdb.For example:</span></span>
<span class="line"><span style="color:#9ECBFF;">                        --pdbcls=IPython.terminal.debugger:TerminalPdb</span></span>
<span class="line"><span style="color:#9ECBFF;">  --trace               Immediately break when running each test</span></span>
<span class="line"><span style="color:#9ECBFF;">  --capture=method      Per-test capturing method: one of fd|sys|no|tee-sys</span></span>
<span class="line"><span style="color:#9ECBFF;">  -s                    Shortcut for --capture=no</span></span>
<span class="line"><span style="color:#9ECBFF;">  --runxfail            Report the results of xfail tests as if they were</span></span>
<span class="line"><span style="color:#9ECBFF;">                        not marked</span></span>
<span class="line"><span style="color:#9ECBFF;">  --lf, --last-failed   Rerun only the tests that failed at the last run (or</span></span>
<span class="line"><span style="color:#9ECBFF;">                        all if none failed)</span></span>
<span class="line"><span style="color:#9ECBFF;">  --ff, --failed-first  Run all tests, but run the last failures first. This</span></span>
<span class="line"><span style="color:#9ECBFF;">                        may re-order tests and thus lead to repeated fixture</span></span>
<span class="line"><span style="color:#9ECBFF;">                        setup/teardown.</span></span>
<span class="line"><span style="color:#9ECBFF;">  --nf, --new-first     Run tests from new files first, then the rest of the</span></span>
<span class="line"><span style="color:#9ECBFF;">                        tests sorted by file mtime</span></span>
<span class="line"><span style="color:#9ECBFF;">  --cache-show=[CACHESHOW]</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Show cache contents, don&#39;t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">perform</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">collection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">tests.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Optional</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">argument:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">glob</span><span style="color:#E1E4E8;"> (default: </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">).</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--cache-clear</span><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">Remove</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">contents</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">at</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span></span>
<span class="line"><span style="color:#E1E4E8;">  --lfnf</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">{all,none},</span><span style="color:#E1E4E8;"> --last-failed-no-failures</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">{all,none}</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">Which</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">no</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">previously</span><span style="color:#E1E4E8;"> (known)</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">failures</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--sw,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stepwise</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">Exit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">failure</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">continue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">last</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">failing</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">next</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">time</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--sw-skip,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stepwise-skip</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">Ignore</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">first</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">failing</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">but</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">next</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">failing</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Implicitly</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enables</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stepwise.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Reporting:</span></span>
<span class="line"><span style="color:#E1E4E8;">  --durations</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">N</span><span style="color:#E1E4E8;">         </span><span style="color:#B392F0;">Show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">N</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">slowest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">setup/test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">durations</span><span style="color:#E1E4E8;"> (N=0 </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  --durations-min</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">N</span><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">Minimal</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">duration</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">seconds</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inclusion</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">slowest</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">list.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Default:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.005</span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-v,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--verbose</span><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">Increase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verbosity</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--no-header</span><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">Disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">header</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--no-summary</span><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">Disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">summary</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-q,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--quiet</span><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">Decrease</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verbosity</span></span>
<span class="line"><span style="color:#E1E4E8;">  --verbosity</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">VERBOSE</span><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verbosity.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Default:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chars</span><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">Show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">extra</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">summary</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">specified</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">by</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chars:</span></span>
<span class="line"><span style="color:#E1E4E8;">                        (</span><span style="color:#B392F0;">f</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">ailed,</span><span style="color:#E1E4E8;"> (E)rror, (</span><span style="color:#B392F0;">s</span><span style="color:#E1E4E8;">)kipped, (</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">)failed, (</span><span style="color:#B392F0;">X</span><span style="color:#E1E4E8;">)passed,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        (</span><span style="color:#B392F0;">p</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">assed,</span><span style="color:#E1E4E8;"> (P)assed with output, (</span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;">)ll except passed</span></span>
<span class="line"><span style="color:#E1E4E8;">                        (</span><span style="color:#B392F0;">p/P</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> (A)ll. (</span><span style="color:#B392F0;">w</span><span style="color:#E1E4E8;">)arnings are enabled by default</span></span>
<span class="line"><span style="color:#E1E4E8;">                        (</span><span style="color:#B392F0;">see</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--disable-warnings</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;N&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">can</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">be</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">used</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list.</span><span style="color:#E1E4E8;"> (default: </span><span style="color:#9ECBFF;">&#39;fE&#39;</span><span style="color:#E1E4E8;">).</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--disable-warnings,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--disable-pytest-warnings</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">Disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">warnings</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">summary</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-l,</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--showlocals</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">Show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">locals</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tracebacks</span><span style="color:#E1E4E8;"> (disabled </span><span style="color:#9ECBFF;">by</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--no-showlocals</span><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">Hide</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">locals</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tracebacks</span><span style="color:#E1E4E8;"> (negate </span><span style="color:#79B8FF;">--showlocals</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">passed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">through</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">addopts</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  --tb</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">style</span><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">Traceback</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">print</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mode</span></span>
<span class="line"><span style="color:#E1E4E8;">                        (</span><span style="color:#B392F0;">auto/long/short/line/native/no</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  --show-capture</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">{no,stdout,stderr,log,all}</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">Controls</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">how</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">captured</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stdout/stderr/log</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shown</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">failed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Default:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--full-trace</span><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">Don&#39;t cut any tracebacks (default is to cut)</span></span>
<span class="line"><span style="color:#9ECBFF;">  --color=color         Color terminal output (yes/no/auto)</span></span>
<span class="line"><span style="color:#9ECBFF;">  --code-highlight={yes,no}</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Whether code should be highlighted (only if --color</span></span>
<span class="line"><span style="color:#9ECBFF;">                        is also enabled). Default: yes.</span></span>
<span class="line"><span style="color:#9ECBFF;">  --pastebin=mode       Send failed|all info to bpaste.net pastebin service</span></span>
<span class="line"><span style="color:#9ECBFF;">  --junit-xml=path      Create junit-xml style report file at given path</span></span>
<span class="line"><span style="color:#9ECBFF;">  --junit-prefix=str    Prepend prefix to classnames in junit-xml output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">pytest-warnings:</span></span>
<span class="line"><span style="color:#9ECBFF;">  -W PYTHONWARNINGS, --pythonwarnings=PYTHONWARNINGS</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Set which warnings to report, see -W option of</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Python itself</span></span>
<span class="line"><span style="color:#9ECBFF;">  --maxfail=num         Exit after first num failures or errors</span></span>
<span class="line"><span style="color:#9ECBFF;">  --strict-config       Any warnings encountered while parsing the \`pytest\`</span></span>
<span class="line"><span style="color:#9ECBFF;">                        section of the configuration file raise errors</span></span>
<span class="line"><span style="color:#9ECBFF;">  --strict-markers      Markers not registered in the \`markers\` section of</span></span>
<span class="line"><span style="color:#9ECBFF;">                        the configuration file raise errors</span></span>
<span class="line"><span style="color:#9ECBFF;">  --strict              (Deprecated) alias to --strict-markers</span></span>
<span class="line"><span style="color:#9ECBFF;">  -c FILE, --config-file=FILE</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Load configuration from \`FILE\` instead of trying to</span></span>
<span class="line"><span style="color:#9ECBFF;">                        locate one of the implicit configuration files.</span></span>
<span class="line"><span style="color:#9ECBFF;">  --continue-on-collection-errors</span></span>
<span class="line"><span style="color:#9ECBFF;">                        Force test execution even if collection errors occur</span></span>
<span class="line"><span style="color:#9ECBFF;">  --rootdir=ROOTDIR     Define root directory for tests. Can be relative</span></span>
<span class="line"><span style="color:#9ECBFF;">                        path: &#39;root_dir&#39;, &#39;./root_dir&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">                        &#39;root_dir/another_dir/&#39;; absolute path:</span></span>
<span class="line"><span style="color:#9ECBFF;">                        &#39;/home/user/root_dir&#39;; path with variables:</span></span>
<span class="line"><span style="color:#9ECBFF;">                        &#39;</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/root_dir&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">collection:</span></span>
<span class="line"><span style="color:#9ECBFF;">  --collect-only, --co  Only collect tests, don&#39;t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">them</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--pyargs</span><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">Try</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">interpret</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arguments</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">packages</span></span>
<span class="line"><span style="color:#E1E4E8;">  --ignore</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">path</span><span style="color:#E1E4E8;">         </span><span style="color:#B392F0;">Ignore</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">during</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">collection</span><span style="color:#E1E4E8;"> (multi-allowed)</span></span>
<span class="line"><span style="color:#E1E4E8;">  --ignore-glob</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">path</span><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Ignore</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pattern</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">during</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">collection</span><span style="color:#E1E4E8;"> (multi-</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">allowed</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  --deselect</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">nodeid_prefix</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">Deselect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">item</span><span style="color:#E1E4E8;"> (via </span><span style="color:#9ECBFF;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">id</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prefix</span><span style="color:#E1E4E8;">) during collection</span></span>
<span class="line"><span style="color:#E1E4E8;">                        (</span><span style="color:#B392F0;">multi-allowed</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  --confcutdir</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">dir</span><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">Only</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">load</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">conftest.py&#39;s relative to specified dir</span></span>
<span class="line"><span style="color:#9ECBFF;">  --noconftest          Don&#39;t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">load</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">conftest.py</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">files</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--keep-duplicates</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">Keep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">duplicate</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tests</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">--collect-in-virtualenv</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">Don</span><span style="color:#B392F0;">&#39;t ignore tests in a local virtualenv directory</span></span>
<span class="line"><span style="color:#B392F0;">  --import-mode={prepend,append,importlib}</span></span>
<span class="line"><span style="color:#B392F0;">                        Prepend/append to sys.path when importing test</span></span>
<span class="line"><span style="color:#B392F0;">                        modules and conftest files. Default: prepend.</span></span>
<span class="line"><span style="color:#B392F0;">  --doctest-modules     Run doctests in all .py modules</span></span>
<span class="line"><span style="color:#B392F0;">  --doctest-report={none,cdiff,ndiff,udiff,only_first_failure}</span></span>
<span class="line"><span style="color:#B392F0;">                        Choose another output format for diffs on doctest</span></span>
<span class="line"><span style="color:#B392F0;">                        failure</span></span>
<span class="line"><span style="color:#B392F0;">  --doctest-glob=pat    Doctests file matching pattern, default: test*.txt</span></span>
<span class="line"><span style="color:#B392F0;">  --doctest-ignore-import-errors</span></span>
<span class="line"><span style="color:#B392F0;">                        Ignore doctest ImportErrors</span></span>
<span class="line"><span style="color:#B392F0;">  --doctest-continue-on-failure</span></span>
<span class="line"><span style="color:#B392F0;">                        For a given doctest, continue to run after the first</span></span>
<span class="line"><span style="color:#B392F0;">                        failure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">test session debugging and configuration:</span></span>
<span class="line"><span style="color:#B392F0;">  --basetemp=dir        Base temporary directory for this test run.</span></span>
<span class="line"><span style="color:#B392F0;">                        (Warning: this directory is removed if it exists.)</span></span>
<span class="line"><span style="color:#B392F0;">  -V, --version         Display pytest version and information about</span></span>
<span class="line"><span style="color:#B392F0;">                        plugins. When given twice, also display information</span></span>
<span class="line"><span style="color:#B392F0;">                        about plugins.</span></span>
<span class="line"><span style="color:#B392F0;">  -h, --help            Show help message and configuration info</span></span>
<span class="line"><span style="color:#B392F0;">  -p name               Early-load given plugin module name or entry point</span></span>
<span class="line"><span style="color:#B392F0;">                        (multi-allowed). To avoid loading of plugins, use</span></span>
<span class="line"><span style="color:#B392F0;">                        the \`no:\` prefix, e.g. \`no:doctest\`.</span></span>
<span class="line"><span style="color:#B392F0;">  --trace-config        Trace considerations of conftest.py files</span></span>
<span class="line"><span style="color:#B392F0;">  --debug=[DEBUG_FILE_NAME]</span></span>
<span class="line"><span style="color:#B392F0;">                        Store internal tracing debug information in this log</span></span>
<span class="line"><span style="color:#B392F0;">                        file. This file is opened with &#39;</span><span style="color:#B392F0;">w</span><span style="color:#B392F0;">&#39; and truncated as</span></span>
<span class="line"><span style="color:#B392F0;">                        a result, care advised. Default: pytestdebug.log.</span></span>
<span class="line"><span style="color:#B392F0;">  -o OVERRIDE_INI, --override-ini=OVERRIDE_INI</span></span>
<span class="line"><span style="color:#B392F0;">                        Override ini option with &quot;option=value&quot; style, e.g.</span></span>
<span class="line"><span style="color:#B392F0;">                        \`-o xfail_strict=True -o cache_dir=cache\`.</span></span>
<span class="line"><span style="color:#B392F0;">  --assert=MODE         Control assertion debugging tools.</span></span>
<span class="line"><span style="color:#B392F0;">                        &#39;</span><span style="color:#B392F0;">plain</span><span style="color:#B392F0;">&#39; performs no assertion debugging.</span></span>
<span class="line"><span style="color:#B392F0;">                        &#39;</span><span style="color:#B392F0;">rewrite</span><span style="color:#B392F0;">&#39; (the default) rewrites assert statements</span></span>
<span class="line"><span style="color:#B392F0;">                        in test modules on import to provide assert</span></span>
<span class="line"><span style="color:#B392F0;">                        expression information.</span></span>
<span class="line"><span style="color:#B392F0;">  --setup-only          Only setup fixtures, do not execute tests</span></span>
<span class="line"><span style="color:#B392F0;">  --setup-show          Show setup of fixtures while executing tests</span></span>
<span class="line"><span style="color:#B392F0;">  --setup-plan          Show what fixtures and tests would be executed but</span></span>
<span class="line"><span style="color:#B392F0;">                        don&#39;</span><span style="color:#B392F0;">t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">execute</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anything</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">logging:</span></span>
<span class="line"><span style="color:#E1E4E8;">  --log-level</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">LEVEL</span><span style="color:#E1E4E8;">     </span><span style="color:#B392F0;">Level</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">messages</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">catch/display.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">by</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">default,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">so</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">depends</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">root/parent</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">handler</span><span style="color:#B392F0;">&#39;s effective level, where it is &quot;WARNING&quot; by</span></span>
<span class="line"><span style="color:#B392F0;">                        default.</span></span>
<span class="line"><span style="color:#B392F0;">  --log-format=LOG_FORMAT</span></span>
<span class="line"><span style="color:#B392F0;">                        Log format used by the logging module</span></span>
<span class="line"><span style="color:#B392F0;">  --log-date-format=LOG_DATE_FORMAT</span></span>
<span class="line"><span style="color:#B392F0;">                        Log date format used by the logging module</span></span>
<span class="line"><span style="color:#B392F0;">  --log-cli-level=LOG_CLI_LEVEL</span></span>
<span class="line"><span style="color:#B392F0;">                        CLI logging level</span></span>
<span class="line"><span style="color:#B392F0;">  --log-cli-format=LOG_CLI_FORMAT</span></span>
<span class="line"><span style="color:#B392F0;">                        Log format used by the logging module</span></span>
<span class="line"><span style="color:#B392F0;">  --log-cli-date-format=LOG_CLI_DATE_FORMAT</span></span>
<span class="line"><span style="color:#B392F0;">                        Log date format used by the logging module</span></span>
<span class="line"><span style="color:#B392F0;">  --log-file=LOG_FILE   Path to a file when logging will be written to</span></span>
<span class="line"><span style="color:#B392F0;">  --log-file-level=LOG_FILE_LEVEL</span></span>
<span class="line"><span style="color:#B392F0;">                        Log file logging level</span></span>
<span class="line"><span style="color:#B392F0;">  --log-file-format=LOG_FILE_FORMAT</span></span>
<span class="line"><span style="color:#B392F0;">                        Log format used by the logging module</span></span>
<span class="line"><span style="color:#B392F0;">  --log-file-date-format=LOG_FILE_DATE_FORMAT</span></span>
<span class="line"><span style="color:#B392F0;">                        Log date format used by the logging module</span></span>
<span class="line"><span style="color:#B392F0;">  --log-auto-indent=LOG_AUTO_INDENT</span></span>
<span class="line"><span style="color:#B392F0;">                        Auto-indent multiline messages passed to the logging</span></span>
<span class="line"><span style="color:#B392F0;">                        module. Accepts true|on, false|off or an integer.</span></span>
<span class="line"><span style="color:#B392F0;">  --log-disable=LOGGER_DISABLE</span></span>
<span class="line"><span style="color:#B392F0;">                        Disable a logger by name. Can be passed multiple</span></span>
<span class="line"><span style="color:#B392F0;">                        times.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[pytest] ini-options in the first pytest.ini|tox.ini|setup.cfg|pyproject.toml file found:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  markers (linelist):   Markers for test functions</span></span>
<span class="line"><span style="color:#B392F0;">  empty_parameter_set_mark (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default marker for empty parametersets</span></span>
<span class="line"><span style="color:#B392F0;">  norecursedirs (args): Directory patterns to avoid for recursion</span></span>
<span class="line"><span style="color:#B392F0;">  testpaths (args):     Directories to search for tests when no files or</span></span>
<span class="line"><span style="color:#B392F0;">                        directories are given on the command line</span></span>
<span class="line"><span style="color:#B392F0;">  filterwarnings (linelist):</span></span>
<span class="line"><span style="color:#B392F0;">                        Each line specifies a pattern for</span></span>
<span class="line"><span style="color:#B392F0;">                        warnings.filterwarnings. Processed after</span></span>
<span class="line"><span style="color:#B392F0;">                        -W/--pythonwarnings.</span></span>
<span class="line"><span style="color:#B392F0;">  usefixtures (args):   List of default fixtures to be used with this</span></span>
<span class="line"><span style="color:#B392F0;">                        project</span></span>
<span class="line"><span style="color:#B392F0;">  python_files (args):  Glob-style file patterns for Python test module</span></span>
<span class="line"><span style="color:#B392F0;">                        discovery</span></span>
<span class="line"><span style="color:#B392F0;">  python_classes (args):</span></span>
<span class="line"><span style="color:#B392F0;">                        Prefixes or glob names for Python test class</span></span>
<span class="line"><span style="color:#B392F0;">                        discovery</span></span>
<span class="line"><span style="color:#B392F0;">  python_functions (args):</span></span>
<span class="line"><span style="color:#B392F0;">                        Prefixes or glob names for Python test function and</span></span>
<span class="line"><span style="color:#B392F0;">                        method discovery</span></span>
<span class="line"><span style="color:#B392F0;">  disable_test_id_escaping_and_forfeit_all_rights_to_community_support (bool):</span></span>
<span class="line"><span style="color:#B392F0;">                        Disable string escape non-ASCII characters, might</span></span>
<span class="line"><span style="color:#B392F0;">                        cause unwanted side effects(use at your own risk)</span></span>
<span class="line"><span style="color:#B392F0;">  console_output_style (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Console output: &quot;classic&quot;, or with additional</span></span>
<span class="line"><span style="color:#B392F0;">                        progress information (&quot;progress&quot; (percentage) |</span></span>
<span class="line"><span style="color:#B392F0;">                        &quot;count&quot; | &quot;progress-even-when-capture-no&quot; (forces</span></span>
<span class="line"><span style="color:#B392F0;">                        progress even when capture=no)</span></span>
<span class="line"><span style="color:#B392F0;">  xfail_strict (bool):  Default for the strict parameter of xfail markers</span></span>
<span class="line"><span style="color:#B392F0;">                        when not given explicitly (default: False)</span></span>
<span class="line"><span style="color:#B392F0;">  tmp_path_retention_count (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        How many sessions should we keep the \`tmp_path\`</span></span>
<span class="line"><span style="color:#B392F0;">                        directories, according to</span></span>
<span class="line"><span style="color:#B392F0;">                        \`tmp_path_retention_policy\`.</span></span>
<span class="line"><span style="color:#B392F0;">  tmp_path_retention_policy (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Controls which directories created by the \`tmp_path\`</span></span>
<span class="line"><span style="color:#B392F0;">                        fixture are kept around, based on test outcome.</span></span>
<span class="line"><span style="color:#B392F0;">                        (all/failed/none)</span></span>
<span class="line"><span style="color:#B392F0;">  enable_assertion_pass_hook (bool):</span></span>
<span class="line"><span style="color:#B392F0;">                        Enables the pytest_assertion_pass hook. Make sure to</span></span>
<span class="line"><span style="color:#B392F0;">                        delete any previously generated pyc cache files.</span></span>
<span class="line"><span style="color:#B392F0;">  junit_suite_name (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Test suite name for JUnit report</span></span>
<span class="line"><span style="color:#B392F0;">  junit_logging (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Write captured log messages to JUnit report: one of</span></span>
<span class="line"><span style="color:#B392F0;">                        no|log|system-out|system-err|out-err|all</span></span>
<span class="line"><span style="color:#B392F0;">  junit_log_passing_tests (bool):</span></span>
<span class="line"><span style="color:#B392F0;">                        Capture log information for passing tests to JUnit</span></span>
<span class="line"><span style="color:#B392F0;">                        report:</span></span>
<span class="line"><span style="color:#B392F0;">  junit_duration_report (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Duration time to report: one of total|call</span></span>
<span class="line"><span style="color:#B392F0;">  junit_family (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Emit XML for schema: one of legacy|xunit1|xunit2</span></span>
<span class="line"><span style="color:#B392F0;">  doctest_optionflags (args):</span></span>
<span class="line"><span style="color:#B392F0;">                        Option flags for doctests</span></span>
<span class="line"><span style="color:#B392F0;">  doctest_encoding (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Encoding used for doctest files</span></span>
<span class="line"><span style="color:#B392F0;">  cache_dir (string):   Cache directory path</span></span>
<span class="line"><span style="color:#B392F0;">  log_level (string):   Default value for --log-level</span></span>
<span class="line"><span style="color:#B392F0;">  log_format (string):  Default value for --log-format</span></span>
<span class="line"><span style="color:#B392F0;">  log_date_format (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-date-format</span></span>
<span class="line"><span style="color:#B392F0;">  log_cli (bool):       Enable log display during test run (also known as</span></span>
<span class="line"><span style="color:#B392F0;">                        &quot;live logging&quot;)</span></span>
<span class="line"><span style="color:#B392F0;">  log_cli_level (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-cli-level</span></span>
<span class="line"><span style="color:#B392F0;">  log_cli_format (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-cli-format</span></span>
<span class="line"><span style="color:#B392F0;">  log_cli_date_format (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-cli-date-format</span></span>
<span class="line"><span style="color:#B392F0;">  log_file (string):    Default value for --log-file</span></span>
<span class="line"><span style="color:#B392F0;">  log_file_level (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-file-level</span></span>
<span class="line"><span style="color:#B392F0;">  log_file_format (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-file-format</span></span>
<span class="line"><span style="color:#B392F0;">  log_file_date_format (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-file-date-format</span></span>
<span class="line"><span style="color:#B392F0;">  log_auto_indent (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Default value for --log-auto-indent</span></span>
<span class="line"><span style="color:#B392F0;">  pythonpath (paths):   Add paths to sys.path</span></span>
<span class="line"><span style="color:#B392F0;">  faulthandler_timeout (string):</span></span>
<span class="line"><span style="color:#B392F0;">                        Dump the traceback of all threads if a test takes</span></span>
<span class="line"><span style="color:#B392F0;">                        more than TIMEOUT seconds to finish</span></span>
<span class="line"><span style="color:#B392F0;">  addopts (args):       Extra command line options</span></span>
<span class="line"><span style="color:#B392F0;">  minversion (string):  Minimally required pytest version</span></span>
<span class="line"><span style="color:#B392F0;">  required_plugins (args):</span></span>
<span class="line"><span style="color:#B392F0;">                        Plugins that must be present for pytest to run</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Environment variables:</span></span>
<span class="line"><span style="color:#B392F0;">  PYTEST_ADDOPTS           Extra command line options</span></span>
<span class="line"><span style="color:#B392F0;">  PYTEST_PLUGINS           Comma-separated plugins to load during startup</span></span>
<span class="line"><span style="color:#B392F0;">  PYTEST_DISABLE_PLUGIN_AUTOLOAD Set to disable plugin auto-loading</span></span>
<span class="line"><span style="color:#B392F0;">  PYTEST_DEBUG             Set to enable debug tracing of pytest&#39;</span><span style="color:#B392F0;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">internals</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">see</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markers</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--markers</span></span>
<span class="line"><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">see</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fixtures</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--fixtures</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">shown</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">according</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">specified</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file_or_dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">current</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">specified</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">fixtures</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">leading</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">are</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">only</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shown</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;-v&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">option</span></span></code></pre><pre class="shiki github-light has-highlighted-lines has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span>
<span class="line"><span style="color:#6F42C1;">usage:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> [options] [file_or_dir] [file_or_dir] [...]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">positional</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arguments:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">file_or_dir</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">general:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-k</span><span style="color:#24292E;"> </span><span style="color:#032F62;">EXPRESSION</span><span style="color:#24292E;">         </span><span style="color:#032F62;">Only</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests</span><span style="color:#24292E;"> </span><span style="color:#032F62;">which</span><span style="color:#24292E;"> </span><span style="color:#032F62;">match</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">given</span><span style="color:#24292E;"> </span><span style="color:#032F62;">substring</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">expression.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">An</span><span style="color:#24292E;"> </span><span style="color:#032F62;">expression</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">evaluatable</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">expression</span><span style="color:#24292E;"> </span><span style="color:#032F62;">where</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">names</span><span style="color:#24292E;"> </span><span style="color:#032F62;">are</span><span style="color:#24292E;"> </span><span style="color:#032F62;">substring-matched</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">against</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">names</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">their</span><span style="color:#24292E;"> </span><span style="color:#032F62;">parent</span><span style="color:#24292E;"> </span><span style="color:#032F62;">classes.</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">Example:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-k</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;test_method or test_other&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">matches</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">functions</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">classes</span><span style="color:#24292E;"> </span><span style="color:#032F62;">whose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contains</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">&#39;test_method&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;test_other&#39;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">while</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-k</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;not</span></span>
<span class="line"><span style="color:#032F62;">                        test_method&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">matches</span><span style="color:#24292E;"> </span><span style="color:#032F62;">those</span><span style="color:#24292E;"> </span><span style="color:#032F62;">that</span><span style="color:#24292E;"> </span><span style="color:#032F62;">don&#39;t contain</span></span>
<span class="line"><span style="color:#032F62;">                        &#39;test_method&#39; in their names. -k &#39;not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_method</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test_other&#39; will eliminate the matches.</span></span>
<span class="line"><span style="color:#032F62;">                        Additionally keywords are matched to classes and</span></span>
<span class="line"><span style="color:#032F62;">                        functions containing extra names in their</span></span>
<span class="line"><span style="color:#032F62;">                        &#39;extra_keyword_matches&#39; set, as well as functions</span></span>
<span class="line"><span style="color:#032F62;">                        which have names assigned directly to them. The</span></span>
<span class="line"><span style="color:#032F62;">                        matching is case-insensitive.</span></span>
<span class="line"><span style="color:#032F62;">  -m MARKEXPR           Only run tests matching given mark expression. For</span></span>
<span class="line"><span style="color:#032F62;">                        example: -m &#39;mark1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mark2&#39;.</span></span>
<span class="line"><span style="color:#032F62;">  --markers             show markers (builtin, plugin and per-project ones).</span></span>
<span class="line"><span style="color:#032F62;">  -x, --exitfirst       Exit instantly on first error or failed test</span></span>
<span class="line"><span style="color:#032F62;">  --fixtures, --funcargs</span></span>
<span class="line"><span style="color:#032F62;">                        Show available fixtures, sorted by plugin appearance</span></span>
<span class="line"><span style="color:#032F62;">                        (fixtures with leading &#39;_&#39; are only shown with &#39;-v&#39;)</span></span>
<span class="line"><span style="color:#032F62;">  --fixtures-per-test   Show fixtures per test</span></span>
<span class="line"><span style="color:#032F62;">  --pdb                 Start the interactive Python debugger on errors or</span></span>
<span class="line"><span style="color:#032F62;">                        KeyboardInterrupt</span></span>
<span class="line"><span style="color:#032F62;">  --pdbcls=modulename:classname</span></span>
<span class="line"><span style="color:#032F62;">                        Specify a custom interactive Python debugger for use</span></span>
<span class="line"><span style="color:#032F62;">                        with --pdb.For example:</span></span>
<span class="line"><span style="color:#032F62;">                        --pdbcls=IPython.terminal.debugger:TerminalPdb</span></span>
<span class="line"><span style="color:#032F62;">  --trace               Immediately break when running each test</span></span>
<span class="line"><span style="color:#032F62;">  --capture=method      Per-test capturing method: one of fd|sys|no|tee-sys</span></span>
<span class="line"><span style="color:#032F62;">  -s                    Shortcut for --capture=no</span></span>
<span class="line"><span style="color:#032F62;">  --runxfail            Report the results of xfail tests as if they were</span></span>
<span class="line"><span style="color:#032F62;">                        not marked</span></span>
<span class="line"><span style="color:#032F62;">  --lf, --last-failed   Rerun only the tests that failed at the last run (or</span></span>
<span class="line"><span style="color:#032F62;">                        all if none failed)</span></span>
<span class="line"><span style="color:#032F62;">  --ff, --failed-first  Run all tests, but run the last failures first. This</span></span>
<span class="line"><span style="color:#032F62;">                        may re-order tests and thus lead to repeated fixture</span></span>
<span class="line"><span style="color:#032F62;">                        setup/teardown.</span></span>
<span class="line"><span style="color:#032F62;">  --nf, --new-first     Run tests from new files first, then the rest of the</span></span>
<span class="line"><span style="color:#032F62;">                        tests sorted by file mtime</span></span>
<span class="line"><span style="color:#032F62;">  --cache-show=[CACHESHOW]</span></span>
<span class="line"><span style="color:#032F62;">                        Show cache contents, don&#39;t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">perform</span><span style="color:#24292E;"> </span><span style="color:#032F62;">collection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">tests.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Optional</span><span style="color:#24292E;"> </span><span style="color:#032F62;">argument:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">glob</span><span style="color:#24292E;"> (default: </span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">).</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--cache-clear</span><span style="color:#24292E;">         </span><span style="color:#032F62;">Remove</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">contents</span><span style="color:#24292E;"> </span><span style="color:#032F62;">at</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">of</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span></span>
<span class="line"><span style="color:#24292E;">  --lfnf</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">{all,none},</span><span style="color:#24292E;"> --last-failed-no-failures</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">{all,none}</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">Which</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">no</span><span style="color:#24292E;"> </span><span style="color:#032F62;">previously</span><span style="color:#24292E;"> (known)</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">failures</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--sw,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stepwise</span><span style="color:#24292E;">      </span><span style="color:#032F62;">Exit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">failure</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">continue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">last</span><span style="color:#24292E;"> </span><span style="color:#032F62;">failing</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">next</span><span style="color:#24292E;"> </span><span style="color:#032F62;">time</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--sw-skip,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stepwise-skip</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">Ignore</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">first</span><span style="color:#24292E;"> </span><span style="color:#032F62;">failing</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">but</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">next</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">failing</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Implicitly</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enables</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stepwise.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Reporting:</span></span>
<span class="line"><span style="color:#24292E;">  --durations</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">N</span><span style="color:#24292E;">         </span><span style="color:#6F42C1;">Show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">N</span><span style="color:#24292E;"> </span><span style="color:#032F62;">slowest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">setup/test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">durations</span><span style="color:#24292E;"> (N=0 </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  --durations-min</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">N</span><span style="color:#24292E;">     </span><span style="color:#6F42C1;">Minimal</span><span style="color:#24292E;"> </span><span style="color:#032F62;">duration</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">seconds</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inclusion</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">slowest</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">list.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Default:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.005</span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-v,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--verbose</span><span style="color:#24292E;">         </span><span style="color:#032F62;">Increase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verbosity</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--no-header</span><span style="color:#24292E;">           </span><span style="color:#032F62;">Disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">header</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--no-summary</span><span style="color:#24292E;">          </span><span style="color:#032F62;">Disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">summary</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-q,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--quiet</span><span style="color:#24292E;">           </span><span style="color:#032F62;">Decrease</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verbosity</span></span>
<span class="line"><span style="color:#24292E;">  --verbosity</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">VERBOSE</span><span style="color:#24292E;">   </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verbosity.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Default:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chars</span><span style="color:#24292E;">              </span><span style="color:#032F62;">Show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">extra</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">summary</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#032F62;">as</span><span style="color:#24292E;"> </span><span style="color:#032F62;">specified</span><span style="color:#24292E;"> </span><span style="color:#032F62;">by</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chars:</span></span>
<span class="line"><span style="color:#24292E;">                        (</span><span style="color:#6F42C1;">f</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">ailed,</span><span style="color:#24292E;"> (E)rror, (</span><span style="color:#6F42C1;">s</span><span style="color:#24292E;">)kipped, (</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">)failed, (</span><span style="color:#6F42C1;">X</span><span style="color:#24292E;">)passed,</span></span>
<span class="line"><span style="color:#24292E;">                        (</span><span style="color:#6F42C1;">p</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">assed,</span><span style="color:#24292E;"> (P)assed with output, (</span><span style="color:#6F42C1;">a</span><span style="color:#24292E;">)ll except passed</span></span>
<span class="line"><span style="color:#24292E;">                        (</span><span style="color:#6F42C1;">p/P</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> (A)ll. (</span><span style="color:#6F42C1;">w</span><span style="color:#24292E;">)arnings are enabled by default</span></span>
<span class="line"><span style="color:#24292E;">                        (</span><span style="color:#6F42C1;">see</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--disable-warnings</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;N&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">can</span><span style="color:#24292E;"> </span><span style="color:#032F62;">be</span><span style="color:#24292E;"> </span><span style="color:#032F62;">used</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list.</span><span style="color:#24292E;"> (default: </span><span style="color:#032F62;">&#39;fE&#39;</span><span style="color:#24292E;">).</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--disable-warnings,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--disable-pytest-warnings</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">Disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">warnings</span><span style="color:#24292E;"> </span><span style="color:#032F62;">summary</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-l,</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--showlocals</span><span style="color:#24292E;">      </span><span style="color:#032F62;">Show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">locals</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tracebacks</span><span style="color:#24292E;"> (disabled </span><span style="color:#032F62;">by</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--no-showlocals</span><span style="color:#24292E;">       </span><span style="color:#032F62;">Hide</span><span style="color:#24292E;"> </span><span style="color:#032F62;">locals</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tracebacks</span><span style="color:#24292E;"> (negate </span><span style="color:#005CC5;">--showlocals</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">passed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">through</span><span style="color:#24292E;"> </span><span style="color:#032F62;">addopts</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  --tb</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">style</span><span style="color:#24292E;">            </span><span style="color:#6F42C1;">Traceback</span><span style="color:#24292E;"> </span><span style="color:#032F62;">print</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mode</span></span>
<span class="line"><span style="color:#24292E;">                        (</span><span style="color:#6F42C1;">auto/long/short/line/native/no</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  --show-capture</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">{no,stdout,stderr,log,all}</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">Controls</span><span style="color:#24292E;"> </span><span style="color:#032F62;">how</span><span style="color:#24292E;"> </span><span style="color:#032F62;">captured</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stdout/stderr/log</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shown</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">failed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Default:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--full-trace</span><span style="color:#24292E;">          </span><span style="color:#032F62;">Don&#39;t cut any tracebacks (default is to cut)</span></span>
<span class="line"><span style="color:#032F62;">  --color=color         Color terminal output (yes/no/auto)</span></span>
<span class="line"><span style="color:#032F62;">  --code-highlight={yes,no}</span></span>
<span class="line"><span style="color:#032F62;">                        Whether code should be highlighted (only if --color</span></span>
<span class="line"><span style="color:#032F62;">                        is also enabled). Default: yes.</span></span>
<span class="line"><span style="color:#032F62;">  --pastebin=mode       Send failed|all info to bpaste.net pastebin service</span></span>
<span class="line"><span style="color:#032F62;">  --junit-xml=path      Create junit-xml style report file at given path</span></span>
<span class="line"><span style="color:#032F62;">  --junit-prefix=str    Prepend prefix to classnames in junit-xml output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">pytest-warnings:</span></span>
<span class="line"><span style="color:#032F62;">  -W PYTHONWARNINGS, --pythonwarnings=PYTHONWARNINGS</span></span>
<span class="line"><span style="color:#032F62;">                        Set which warnings to report, see -W option of</span></span>
<span class="line"><span style="color:#032F62;">                        Python itself</span></span>
<span class="line"><span style="color:#032F62;">  --maxfail=num         Exit after first num failures or errors</span></span>
<span class="line"><span style="color:#032F62;">  --strict-config       Any warnings encountered while parsing the \`pytest\`</span></span>
<span class="line"><span style="color:#032F62;">                        section of the configuration file raise errors</span></span>
<span class="line"><span style="color:#032F62;">  --strict-markers      Markers not registered in the \`markers\` section of</span></span>
<span class="line"><span style="color:#032F62;">                        the configuration file raise errors</span></span>
<span class="line"><span style="color:#032F62;">  --strict              (Deprecated) alias to --strict-markers</span></span>
<span class="line"><span style="color:#032F62;">  -c FILE, --config-file=FILE</span></span>
<span class="line"><span style="color:#032F62;">                        Load configuration from \`FILE\` instead of trying to</span></span>
<span class="line"><span style="color:#032F62;">                        locate one of the implicit configuration files.</span></span>
<span class="line"><span style="color:#032F62;">  --continue-on-collection-errors</span></span>
<span class="line"><span style="color:#032F62;">                        Force test execution even if collection errors occur</span></span>
<span class="line"><span style="color:#032F62;">  --rootdir=ROOTDIR     Define root directory for tests. Can be relative</span></span>
<span class="line"><span style="color:#032F62;">                        path: &#39;root_dir&#39;, &#39;./root_dir&#39;,</span></span>
<span class="line"><span style="color:#032F62;">                        &#39;root_dir/another_dir/&#39;; absolute path:</span></span>
<span class="line"><span style="color:#032F62;">                        &#39;/home/user/root_dir&#39;; path with variables:</span></span>
<span class="line"><span style="color:#032F62;">                        &#39;</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/root_dir&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">collection:</span></span>
<span class="line"><span style="color:#032F62;">  --collect-only, --co  Only collect tests, don&#39;t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">them</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--pyargs</span><span style="color:#24292E;">              </span><span style="color:#032F62;">Try</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">interpret</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arguments</span><span style="color:#24292E;"> </span><span style="color:#032F62;">as</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">packages</span></span>
<span class="line"><span style="color:#24292E;">  --ignore</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">path</span><span style="color:#24292E;">         </span><span style="color:#6F42C1;">Ignore</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path</span><span style="color:#24292E;"> </span><span style="color:#032F62;">during</span><span style="color:#24292E;"> </span><span style="color:#032F62;">collection</span><span style="color:#24292E;"> (multi-allowed)</span></span>
<span class="line"><span style="color:#24292E;">  --ignore-glob</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">path</span><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Ignore</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pattern</span><span style="color:#24292E;"> </span><span style="color:#032F62;">during</span><span style="color:#24292E;"> </span><span style="color:#032F62;">collection</span><span style="color:#24292E;"> (multi-</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">allowed</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  --deselect</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">nodeid_prefix</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">Deselect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">item</span><span style="color:#24292E;"> (via </span><span style="color:#032F62;">node</span><span style="color:#24292E;"> </span><span style="color:#032F62;">id</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prefix</span><span style="color:#24292E;">) during collection</span></span>
<span class="line"><span style="color:#24292E;">                        (</span><span style="color:#6F42C1;">multi-allowed</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  --confcutdir</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">dir</span><span style="color:#24292E;">      </span><span style="color:#6F42C1;">Only</span><span style="color:#24292E;"> </span><span style="color:#032F62;">load</span><span style="color:#24292E;"> </span><span style="color:#032F62;">conftest.py&#39;s relative to specified dir</span></span>
<span class="line"><span style="color:#032F62;">  --noconftest          Don&#39;t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">load</span><span style="color:#24292E;"> </span><span style="color:#032F62;">any</span><span style="color:#24292E;"> </span><span style="color:#032F62;">conftest.py</span><span style="color:#24292E;"> </span><span style="color:#032F62;">files</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--keep-duplicates</span><span style="color:#24292E;">     </span><span style="color:#032F62;">Keep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">duplicate</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tests</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">--collect-in-virtualenv</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">Don</span><span style="color:#6F42C1;">&#39;t ignore tests in a local virtualenv directory</span></span>
<span class="line"><span style="color:#6F42C1;">  --import-mode={prepend,append,importlib}</span></span>
<span class="line"><span style="color:#6F42C1;">                        Prepend/append to sys.path when importing test</span></span>
<span class="line"><span style="color:#6F42C1;">                        modules and conftest files. Default: prepend.</span></span>
<span class="line"><span style="color:#6F42C1;">  --doctest-modules     Run doctests in all .py modules</span></span>
<span class="line"><span style="color:#6F42C1;">  --doctest-report={none,cdiff,ndiff,udiff,only_first_failure}</span></span>
<span class="line"><span style="color:#6F42C1;">                        Choose another output format for diffs on doctest</span></span>
<span class="line"><span style="color:#6F42C1;">                        failure</span></span>
<span class="line"><span style="color:#6F42C1;">  --doctest-glob=pat    Doctests file matching pattern, default: test*.txt</span></span>
<span class="line"><span style="color:#6F42C1;">  --doctest-ignore-import-errors</span></span>
<span class="line"><span style="color:#6F42C1;">                        Ignore doctest ImportErrors</span></span>
<span class="line"><span style="color:#6F42C1;">  --doctest-continue-on-failure</span></span>
<span class="line"><span style="color:#6F42C1;">                        For a given doctest, continue to run after the first</span></span>
<span class="line"><span style="color:#6F42C1;">                        failure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">test session debugging and configuration:</span></span>
<span class="line"><span style="color:#6F42C1;">  --basetemp=dir        Base temporary directory for this test run.</span></span>
<span class="line"><span style="color:#6F42C1;">                        (Warning: this directory is removed if it exists.)</span></span>
<span class="line"><span style="color:#6F42C1;">  -V, --version         Display pytest version and information about</span></span>
<span class="line"><span style="color:#6F42C1;">                        plugins. When given twice, also display information</span></span>
<span class="line"><span style="color:#6F42C1;">                        about plugins.</span></span>
<span class="line"><span style="color:#6F42C1;">  -h, --help            Show help message and configuration info</span></span>
<span class="line"><span style="color:#6F42C1;">  -p name               Early-load given plugin module name or entry point</span></span>
<span class="line"><span style="color:#6F42C1;">                        (multi-allowed). To avoid loading of plugins, use</span></span>
<span class="line"><span style="color:#6F42C1;">                        the \`no:\` prefix, e.g. \`no:doctest\`.</span></span>
<span class="line"><span style="color:#6F42C1;">  --trace-config        Trace considerations of conftest.py files</span></span>
<span class="line"><span style="color:#6F42C1;">  --debug=[DEBUG_FILE_NAME]</span></span>
<span class="line"><span style="color:#6F42C1;">                        Store internal tracing debug information in this log</span></span>
<span class="line"><span style="color:#6F42C1;">                        file. This file is opened with &#39;</span><span style="color:#6F42C1;">w</span><span style="color:#6F42C1;">&#39; and truncated as</span></span>
<span class="line"><span style="color:#6F42C1;">                        a result, care advised. Default: pytestdebug.log.</span></span>
<span class="line"><span style="color:#6F42C1;">  -o OVERRIDE_INI, --override-ini=OVERRIDE_INI</span></span>
<span class="line"><span style="color:#6F42C1;">                        Override ini option with &quot;option=value&quot; style, e.g.</span></span>
<span class="line"><span style="color:#6F42C1;">                        \`-o xfail_strict=True -o cache_dir=cache\`.</span></span>
<span class="line"><span style="color:#6F42C1;">  --assert=MODE         Control assertion debugging tools.</span></span>
<span class="line"><span style="color:#6F42C1;">                        &#39;</span><span style="color:#6F42C1;">plain</span><span style="color:#6F42C1;">&#39; performs no assertion debugging.</span></span>
<span class="line"><span style="color:#6F42C1;">                        &#39;</span><span style="color:#6F42C1;">rewrite</span><span style="color:#6F42C1;">&#39; (the default) rewrites assert statements</span></span>
<span class="line"><span style="color:#6F42C1;">                        in test modules on import to provide assert</span></span>
<span class="line"><span style="color:#6F42C1;">                        expression information.</span></span>
<span class="line"><span style="color:#6F42C1;">  --setup-only          Only setup fixtures, do not execute tests</span></span>
<span class="line"><span style="color:#6F42C1;">  --setup-show          Show setup of fixtures while executing tests</span></span>
<span class="line"><span style="color:#6F42C1;">  --setup-plan          Show what fixtures and tests would be executed but</span></span>
<span class="line"><span style="color:#6F42C1;">                        don&#39;</span><span style="color:#6F42C1;">t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">execute</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anything</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">logging:</span></span>
<span class="line"><span style="color:#24292E;">  --log-level</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">LEVEL</span><span style="color:#24292E;">     </span><span style="color:#6F42C1;">Level</span><span style="color:#24292E;"> </span><span style="color:#032F62;">of</span><span style="color:#24292E;"> </span><span style="color:#032F62;">messages</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">catch/display.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">by</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">default,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">so</span><span style="color:#24292E;"> </span><span style="color:#032F62;">it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">depends</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root/parent</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">handler</span><span style="color:#6F42C1;">&#39;s effective level, where it is &quot;WARNING&quot; by</span></span>
<span class="line"><span style="color:#6F42C1;">                        default.</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-format=LOG_FORMAT</span></span>
<span class="line"><span style="color:#6F42C1;">                        Log format used by the logging module</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-date-format=LOG_DATE_FORMAT</span></span>
<span class="line"><span style="color:#6F42C1;">                        Log date format used by the logging module</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-cli-level=LOG_CLI_LEVEL</span></span>
<span class="line"><span style="color:#6F42C1;">                        CLI logging level</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-cli-format=LOG_CLI_FORMAT</span></span>
<span class="line"><span style="color:#6F42C1;">                        Log format used by the logging module</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-cli-date-format=LOG_CLI_DATE_FORMAT</span></span>
<span class="line"><span style="color:#6F42C1;">                        Log date format used by the logging module</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-file=LOG_FILE   Path to a file when logging will be written to</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-file-level=LOG_FILE_LEVEL</span></span>
<span class="line"><span style="color:#6F42C1;">                        Log file logging level</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-file-format=LOG_FILE_FORMAT</span></span>
<span class="line"><span style="color:#6F42C1;">                        Log format used by the logging module</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-file-date-format=LOG_FILE_DATE_FORMAT</span></span>
<span class="line"><span style="color:#6F42C1;">                        Log date format used by the logging module</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-auto-indent=LOG_AUTO_INDENT</span></span>
<span class="line"><span style="color:#6F42C1;">                        Auto-indent multiline messages passed to the logging</span></span>
<span class="line"><span style="color:#6F42C1;">                        module. Accepts true|on, false|off or an integer.</span></span>
<span class="line"><span style="color:#6F42C1;">  --log-disable=LOGGER_DISABLE</span></span>
<span class="line"><span style="color:#6F42C1;">                        Disable a logger by name. Can be passed multiple</span></span>
<span class="line"><span style="color:#6F42C1;">                        times.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[pytest] ini-options in the first pytest.ini|tox.ini|setup.cfg|pyproject.toml file found:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  markers (linelist):   Markers for test functions</span></span>
<span class="line"><span style="color:#6F42C1;">  empty_parameter_set_mark (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default marker for empty parametersets</span></span>
<span class="line"><span style="color:#6F42C1;">  norecursedirs (args): Directory patterns to avoid for recursion</span></span>
<span class="line"><span style="color:#6F42C1;">  testpaths (args):     Directories to search for tests when no files or</span></span>
<span class="line"><span style="color:#6F42C1;">                        directories are given on the command line</span></span>
<span class="line"><span style="color:#6F42C1;">  filterwarnings (linelist):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Each line specifies a pattern for</span></span>
<span class="line"><span style="color:#6F42C1;">                        warnings.filterwarnings. Processed after</span></span>
<span class="line"><span style="color:#6F42C1;">                        -W/--pythonwarnings.</span></span>
<span class="line"><span style="color:#6F42C1;">  usefixtures (args):   List of default fixtures to be used with this</span></span>
<span class="line"><span style="color:#6F42C1;">                        project</span></span>
<span class="line"><span style="color:#6F42C1;">  python_files (args):  Glob-style file patterns for Python test module</span></span>
<span class="line"><span style="color:#6F42C1;">                        discovery</span></span>
<span class="line"><span style="color:#6F42C1;">  python_classes (args):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Prefixes or glob names for Python test class</span></span>
<span class="line"><span style="color:#6F42C1;">                        discovery</span></span>
<span class="line"><span style="color:#6F42C1;">  python_functions (args):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Prefixes or glob names for Python test function and</span></span>
<span class="line"><span style="color:#6F42C1;">                        method discovery</span></span>
<span class="line"><span style="color:#6F42C1;">  disable_test_id_escaping_and_forfeit_all_rights_to_community_support (bool):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Disable string escape non-ASCII characters, might</span></span>
<span class="line"><span style="color:#6F42C1;">                        cause unwanted side effects(use at your own risk)</span></span>
<span class="line"><span style="color:#6F42C1;">  console_output_style (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Console output: &quot;classic&quot;, or with additional</span></span>
<span class="line"><span style="color:#6F42C1;">                        progress information (&quot;progress&quot; (percentage) |</span></span>
<span class="line"><span style="color:#6F42C1;">                        &quot;count&quot; | &quot;progress-even-when-capture-no&quot; (forces</span></span>
<span class="line"><span style="color:#6F42C1;">                        progress even when capture=no)</span></span>
<span class="line"><span style="color:#6F42C1;">  xfail_strict (bool):  Default for the strict parameter of xfail markers</span></span>
<span class="line"><span style="color:#6F42C1;">                        when not given explicitly (default: False)</span></span>
<span class="line"><span style="color:#6F42C1;">  tmp_path_retention_count (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        How many sessions should we keep the \`tmp_path\`</span></span>
<span class="line"><span style="color:#6F42C1;">                        directories, according to</span></span>
<span class="line"><span style="color:#6F42C1;">                        \`tmp_path_retention_policy\`.</span></span>
<span class="line"><span style="color:#6F42C1;">  tmp_path_retention_policy (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Controls which directories created by the \`tmp_path\`</span></span>
<span class="line"><span style="color:#6F42C1;">                        fixture are kept around, based on test outcome.</span></span>
<span class="line"><span style="color:#6F42C1;">                        (all/failed/none)</span></span>
<span class="line"><span style="color:#6F42C1;">  enable_assertion_pass_hook (bool):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Enables the pytest_assertion_pass hook. Make sure to</span></span>
<span class="line"><span style="color:#6F42C1;">                        delete any previously generated pyc cache files.</span></span>
<span class="line"><span style="color:#6F42C1;">  junit_suite_name (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Test suite name for JUnit report</span></span>
<span class="line"><span style="color:#6F42C1;">  junit_logging (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Write captured log messages to JUnit report: one of</span></span>
<span class="line"><span style="color:#6F42C1;">                        no|log|system-out|system-err|out-err|all</span></span>
<span class="line"><span style="color:#6F42C1;">  junit_log_passing_tests (bool):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Capture log information for passing tests to JUnit</span></span>
<span class="line"><span style="color:#6F42C1;">                        report:</span></span>
<span class="line"><span style="color:#6F42C1;">  junit_duration_report (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Duration time to report: one of total|call</span></span>
<span class="line"><span style="color:#6F42C1;">  junit_family (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Emit XML for schema: one of legacy|xunit1|xunit2</span></span>
<span class="line"><span style="color:#6F42C1;">  doctest_optionflags (args):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Option flags for doctests</span></span>
<span class="line"><span style="color:#6F42C1;">  doctest_encoding (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Encoding used for doctest files</span></span>
<span class="line"><span style="color:#6F42C1;">  cache_dir (string):   Cache directory path</span></span>
<span class="line"><span style="color:#6F42C1;">  log_level (string):   Default value for --log-level</span></span>
<span class="line"><span style="color:#6F42C1;">  log_format (string):  Default value for --log-format</span></span>
<span class="line"><span style="color:#6F42C1;">  log_date_format (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-date-format</span></span>
<span class="line"><span style="color:#6F42C1;">  log_cli (bool):       Enable log display during test run (also known as</span></span>
<span class="line"><span style="color:#6F42C1;">                        &quot;live logging&quot;)</span></span>
<span class="line"><span style="color:#6F42C1;">  log_cli_level (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-cli-level</span></span>
<span class="line"><span style="color:#6F42C1;">  log_cli_format (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-cli-format</span></span>
<span class="line"><span style="color:#6F42C1;">  log_cli_date_format (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-cli-date-format</span></span>
<span class="line"><span style="color:#6F42C1;">  log_file (string):    Default value for --log-file</span></span>
<span class="line"><span style="color:#6F42C1;">  log_file_level (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-file-level</span></span>
<span class="line"><span style="color:#6F42C1;">  log_file_format (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-file-format</span></span>
<span class="line"><span style="color:#6F42C1;">  log_file_date_format (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-file-date-format</span></span>
<span class="line"><span style="color:#6F42C1;">  log_auto_indent (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Default value for --log-auto-indent</span></span>
<span class="line"><span style="color:#6F42C1;">  pythonpath (paths):   Add paths to sys.path</span></span>
<span class="line"><span style="color:#6F42C1;">  faulthandler_timeout (string):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Dump the traceback of all threads if a test takes</span></span>
<span class="line"><span style="color:#6F42C1;">                        more than TIMEOUT seconds to finish</span></span>
<span class="line"><span style="color:#6F42C1;">  addopts (args):       Extra command line options</span></span>
<span class="line"><span style="color:#6F42C1;">  minversion (string):  Minimally required pytest version</span></span>
<span class="line"><span style="color:#6F42C1;">  required_plugins (args):</span></span>
<span class="line"><span style="color:#6F42C1;">                        Plugins that must be present for pytest to run</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Environment variables:</span></span>
<span class="line"><span style="color:#6F42C1;">  PYTEST_ADDOPTS           Extra command line options</span></span>
<span class="line"><span style="color:#6F42C1;">  PYTEST_PLUGINS           Comma-separated plugins to load during startup</span></span>
<span class="line"><span style="color:#6F42C1;">  PYTEST_DISABLE_PLUGIN_AUTOLOAD Set to disable plugin auto-loading</span></span>
<span class="line"><span style="color:#6F42C1;">  PYTEST_DEBUG             Set to enable debug tracing of pytest&#39;</span><span style="color:#6F42C1;">s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">internals</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">see</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markers</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--markers</span></span>
<span class="line"><span style="color:#6F42C1;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">see</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fixtures</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--fixtures</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">shown</span><span style="color:#24292E;"> </span><span style="color:#032F62;">according</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">specified</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file_or_dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span><span style="color:#24292E;"> </span><span style="color:#032F62;">current</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">if</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">specified</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">fixtures</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">leading</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">are</span><span style="color:#24292E;"> </span><span style="color:#032F62;">only</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shown</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;-v&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">option</span></span></code></pre></div>`,3),e=[o];function t(r,c,y,i,E,F){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{C as __pageData,u as default};
