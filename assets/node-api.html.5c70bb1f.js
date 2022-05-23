const n={key:"v-4986678d",path:"/reference/node-api.html",title:"Node API",lang:"en-US",frontmatter:{},excerpt:`<h1 id="node-api" tabindex="-1"><a class="header-anchor" href="#node-api" aria-hidden="true">#</a> Node API</h1>
<NpmBadge package="@vuepress/core" />
<p>Node API is provided by <a href="https://www.npmjs.com/package/@vuepress/core" target="_blank" rel="noopener noreferrer">@vuepress/core<ExternalLinkIcon/></a> package. It is a dependency of the <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress<ExternalLinkIcon/></a> package, and you can also install it separately:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">npm i -D @vuepress/core@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> App</h2>
<p>The app instance is available in all hooks of <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink>.</p>
<p>The <code v-pre>BuildApp</code> and <code v-pre>DevApp</code> share almost the same properties and methods, except <a href="#build">build</a> and <a href="#dev">dev</a> method.</p>
<h3 id="createbuildapp" tabindex="-1"><a class="header-anchor" href="#createbuildapp" aria-hidden="true">#</a> createBuildApp</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createBuildApp</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">config</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">AppConfig</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">BuildApp</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>Parameters:</li>
</ul>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>config</td>
<td><code v-pre>AppConfig</code></td>
<td>Config to create a VuePress app.</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Details:</p>
<p>Create a build mode app instance, which is used for building static files.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">build</span><span style="color: #D4D4D4"> = </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">app</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">createBuildApp</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #6A9955">// ...options</span></span>
<span class="line"><span style="color: #D4D4D4">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// initialize and prepare</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">init</span><span style="color: #D4D4D4">()</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">prepare</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// build</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">build</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// process onGenerated hook</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">pluginApi</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">hooks</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">onGenerated</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">process</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul>
<li>Also see:
<ul>
<li><a href="#build">Node API &gt; App Methods &gt; build</a></li>
</ul>
</li>
</ul>
<h3 id="createdevapp" tabindex="-1"><a class="header-anchor" href="#createdevapp" aria-hidden="true">#</a> createDevApp</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createDevApp</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">config</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">AppConfig</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">DevApp</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>Parameters:</li>
</ul>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>config</td>
<td><code v-pre>AppConfig</code></td>
<td>Config to create a VuePress app.</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Details:</p>
<p>Create a dev mode app instance, which is used for starting a dev server.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4"> = </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">app</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">createDevApp</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #6A9955">// ...options</span></span>
<span class="line"><span style="color: #D4D4D4">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// initialize and prepare</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">init</span><span style="color: #D4D4D4">()</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">prepare</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// start dev server</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">closeDevServer</span><span style="color: #D4D4D4"> = </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// set up file watchers</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">watchers</span><span style="color: #D4D4D4"> = []</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// restart dev server</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">restart</span><span style="color: #D4D4D4"> = </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">all</span><span style="color: #D4D4D4">([</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #6A9955">// close all watchers</span></span>
<span class="line"><span style="color: #D4D4D4">      ...</span><span style="color: #9CDCFE">watchers</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">map</span><span style="color: #D4D4D4">((</span><span style="color: #9CDCFE">item</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">item</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">close</span><span style="color: #D4D4D4">()),</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #6A9955">// close current dev server</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #DCDCAA">closeDevServer</span><span style="color: #D4D4D4">(),</span></span>
<span class="line"><span style="color: #D4D4D4">    ])</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4">()</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// process onWatched hook</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">pluginApi</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">hooks</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">onWatched</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">process</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">watchers</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">restart</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul>
<li>Also see:
<ul>
<li><a href="#dev">Node API &gt; App Methods &gt; dev</a></li>
</ul>
</li>
</ul>
<h2 id="app-properties" tabindex="-1"><a class="header-anchor" href="#app-properties" aria-hidden="true">#</a> App Properties</h2>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3>
<ul>
<li>
<p>Type: <code v-pre>AppOptions</code></p>
</li>
<li>
<p>Details:</p>
<p>Options of VuePress app.</p>
<p>The options come from the <code v-pre>config</code> argument in <a href="#createbuildapp">createBuildApp</a> / <a href="#createdevapp">createDevApp</a>, while all optional fields will be filled with a default value.</p>
</li>
</ul>
<h3 id="sitedata" tabindex="-1"><a class="header-anchor" href="#sitedata" aria-hidden="true">#</a> siteData</h3>
<ul>
<li>
<p>Type: <code v-pre>SiteData</code></p>
</li>
<li>
<p>Details:</p>
<p>Site data that set by user, including all the <RouterLink to="/reference/config.html#site-config">site config</RouterLink>, which will be used in client side.</p>
</li>
</ul>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Version of VuePress app, i.e. version of <code v-pre>@vuepress/core</code> package.</p>
</li>
</ul>
<h3 id="env-isbuild" tabindex="-1"><a class="header-anchor" href="#env-isbuild" aria-hidden="true">#</a> env.isBuild</h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Environment flag used to identify whether the app is running in build mode, i.e. whether a <a href="#createbuildapp">BuildApp</a> instance.</p>
</li>
</ul>
<h3 id="env-isdev" tabindex="-1"><a class="header-anchor" href="#env-isdev" aria-hidden="true">#</a> env.isDev</h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Environment flag used to identify whether the app is running in dev mode, i.e. whether a <a href="#createdevapp">DevApp</a> instance.</p>
</li>
</ul>
<h3 id="env-isdebug" tabindex="-1"><a class="header-anchor" href="#env-isdebug" aria-hidden="true">#</a> env.isDebug</h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Environment flag used to identify whether the debug mode is enabled.</p>
</li>
</ul>
<h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h3>
<ul>
<li>
<p>Type: <code v-pre>MarkdownIt</code></p>
</li>
<li>
<p>Details:</p>
<p>The <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it<ExternalLinkIcon/></a> instance used for parsing markdown content.</p>
<p>It is only available in and after <RouterLink to="/reference/plugin-api.html#oninitialized">onInitialized</RouterLink> hook.</p>
</li>
</ul>
<h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h3>
<ul>
<li>
<p>Type: <code v-pre>Record&lt;string, string&gt;</code></p>
</li>
<li>
<p>Details:</p>
<p>The layout components map, of which the key is the layout name, the value is the absolute file path of the layout component.</p>
<p>It is only available in and after <RouterLink to="/reference/plugin-api.html#oninitialized">onInitialized</RouterLink> hook.</p>
</li>
</ul>
<h3 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> pages</h3>
<ul>
<li>
<p>Type: <code v-pre>Page[]</code></p>
</li>
<li>
<p>Details:</p>
<p>The <a href="#page">Page</a> object array.</p>
<p>It is only available in and after <RouterLink to="/reference/plugin-api.html#oninitialized">onInitialized</RouterLink> hook.</p>
</li>
</ul>
<h2 id="app-methods" tabindex="-1"><a class="header-anchor" href="#app-methods" aria-hidden="true">#</a> App Methods</h2>
<h3 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h3>
<ul>
<li>
<p>Utils:</p>
<ul>
<li><code v-pre>dir.cache()</code>: resolve to cache directory</li>
<li><code v-pre>dir.temp()</code>: resolve to temp directory</li>
<li><code v-pre>dir.source()</code>: resolve to source directory</li>
<li><code v-pre>dir.dest()</code>: resolve to dest directory</li>
<li><code v-pre>dir.client()</code>: resolve to <code v-pre>@vuepress/client</code> directory</li>
<li><code v-pre>dir.public()</code>: resolve to public directory</li>
</ul>
</li>
<li>
<p>Signature:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">type</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">AppDirFunction</span><span style="color: #D4D4D4"> = (...</span><span style="color: #9CDCFE">args</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">[]) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>Utils to resolve the absolute file path in corresponding directory.</p>
<p>If you don't provide any arguments, it will return the absolute path of the directory.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #6A9955">// resolve the absolute file path of the \`\${sourceDir}/README.md\`</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">homeSourceFile</span><span style="color: #D4D4D4"> = </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">dir</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">source</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;README.md&#39;</span><span style="color: #D4D4D4">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="writetemp" tabindex="-1"><a class="header-anchor" href="#writetemp" aria-hidden="true">#</a> writeTemp</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">writeTemp</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">file</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">content</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4">): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>Parameters:</li>
</ul>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td><code v-pre>string</code></td>
<td>Filepath of the temp file that going to be wrote. Relative to temp directory.</td>
</tr>
<tr>
<td>content</td>
<td><code v-pre>string</code></td>
<td>Content of the temp file that going to be wrote.</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Details:</p>
<p>A method to write temp file.</p>
<p>The written file could be imported via <code v-pre>@temp</code> alias in client files.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #4EC9B0">module</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">exports</span><span style="color: #D4D4D4"> = {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// write temp file in onPrepared hook</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">onPrepared</span><span style="color: #D4D4D4">() {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">writeTemp</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;foo.js&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #CE9178">&#39;export const foo = </span><span style="color: #D7BA7D">\\&#39;</span><span style="color: #CE9178">bar</span><span style="color: #D7BA7D">\\&#39;</span><span style="color: #CE9178">&#39;</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #6A9955">// import temp file in client code</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">foo</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;@temp/foo&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">init</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>Initialize VuePress app.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/advanced/architecture.html#core-process-and-hooks">Advanced &gt; Architecture &gt; Core Process and Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="prepare" tabindex="-1"><a class="header-anchor" href="#prepare" aria-hidden="true">#</a> prepare</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">prepare</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>Prepare client temp files.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/advanced/architecture.html#core-process-and-hooks">Advanced &gt; Architecture &gt; Core Process and Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">build</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>Generate static site files.</p>
<p>This method is only available in <code v-pre>BuildApp</code>.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="#createbuildapp">Node API &gt; App &gt; createBuildApp</a></li>
<li><RouterLink to="/advanced/architecture.html#core-process-and-hooks">Advanced &gt; Architecture &gt; Core Process and Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;() </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>Start dev server.</p>
<p>This method is only available in <code v-pre>DevApp</code>.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="#createdevapp">Node API &gt; App &gt; createDevApp</a></li>
<li><RouterLink to="/advanced/architecture.html#core-process-and-hooks">Advanced &gt; Architecture &gt; Core Process and Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h2>
<h3 id="createpage" tabindex="-1"><a class="header-anchor" href="#createpage" aria-hidden="true">#</a> createPage</h3>
<ul>
<li>Signature:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createPage</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">App</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">options</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">PageOptions</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">Page</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>Parameters:</li>
</ul>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>app</td>
<td><code v-pre>App</code></td>
<td>The VuePress app instance.</td>
</tr>
<tr>
<td>options</td>
<td><code v-pre>PageOptions</code></td>
<td>Options to create VuePress page.</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Details:</p>
<p>Create a VuePress page object.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> { </span><span style="color: #4FC1FF">createPage</span><span style="color: #D4D4D4"> } = </span><span style="color: #DCDCAA">require</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;@vuepress/core&#39;</span><span style="color: #D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #4EC9B0">module</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">exports</span><span style="color: #D4D4D4"> = {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// create an extra page in onInitialized hook</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">onInitialized</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">) {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">pages</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">push</span><span style="color: #D4D4D4">(</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createPage</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">, {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">path:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;/foo.html&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">frontmatter:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">          </span><span style="color: #9CDCFE">layout:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;Layout&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        },</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">content:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">\`</span><span style="color: #D7BA7D">\\</span></span>
<span class="line"><span style="color: #CE9178"># Foo Page</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CE9178">Hello, world.</span></span>
<span class="line"><span style="color: #CE9178">\`</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">      })</span></span>
<span class="line"><span style="color: #D4D4D4">    )</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li>Also see:
<ul>
<li><a href="#pages">Node API &gt; App Properties &gt; pages</a></li>
<li><RouterLink to="/advanced/cookbook/adding-extra-pages.html">Cookbook &gt; Adding Extra Pages</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="page-properties" tabindex="-1"><a class="header-anchor" href="#page-properties" aria-hidden="true">#</a> Page Properties</h2>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Identifier of the page.</p>
<p>The page key would be used as the <a href="https://router.vuejs.org/api/#name-2" target="_blank" rel="noopener noreferrer">name<ExternalLinkIcon/></a> of the page route.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/reference/components.html#content">Built-in Components &gt; Content</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Route path of the page.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/guide/page.html#routing">Guide &gt; Page &gt; Routing</RouterLink></li>
<li><a href="#pathinferred">Node API &gt; Page Properties &gt; pathInferred</a></li>
</ul>
</li>
</ul>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Title of the page.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/reference/frontmatter.html#title">Frontmatter &gt; title</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Language of the page.</p>
</li>
<li>
<p>Example:</p>
<ul>
<li><code v-pre>'en-US'</code></li>
<li><code v-pre>'zh-CN'</code></li>
</ul>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/reference/frontmatter.html#title">Frontmatter &gt; lang</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> frontmatter</h3>
<ul>
<li>
<p>Type: <code v-pre>PageFrontmatter</code></p>
</li>
<li>
<p>Details:</p>
<p>Frontmatter of the page.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/reference/frontmatter.html">Frontmatter</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Excerpt of the page.</p>
<p>If a Markdown file contains a \`</p>
</li>
</ul>
`,headers:[{level:2,title:"App",slug:"app",children:[{level:3,title:"createBuildApp",slug:"createbuildapp",children:[]},{level:3,title:"createDevApp",slug:"createdevapp",children:[]}]},{level:2,title:"App Properties",slug:"app-properties",children:[{level:3,title:"options",slug:"options",children:[]},{level:3,title:"siteData",slug:"sitedata",children:[]},{level:3,title:"version",slug:"version",children:[]},{level:3,title:"env.isBuild",slug:"env-isbuild",children:[]},{level:3,title:"env.isDev",slug:"env-isdev",children:[]},{level:3,title:"env.isDebug",slug:"env-isdebug",children:[]},{level:3,title:"markdown",slug:"markdown",children:[]},{level:3,title:"layouts",slug:"layouts",children:[]},{level:3,title:"pages",slug:"pages",children:[]}]},{level:2,title:"App Methods",slug:"app-methods",children:[{level:3,title:"dir",slug:"dir",children:[]},{level:3,title:"writeTemp",slug:"writetemp",children:[]},{level:3,title:"init",slug:"init",children:[]},{level:3,title:"prepare",slug:"prepare",children:[]},{level:3,title:"build",slug:"build",children:[]},{level:3,title:"dev",slug:"dev",children:[]}]},{level:2,title:"Page",slug:"page",children:[{level:3,title:"createPage",slug:"createpage",children:[]}]},{level:2,title:"Page Properties",slug:"page-properties",children:[{level:3,title:"key",slug:"key",children:[]},{level:3,title:"path",slug:"path",children:[]},{level:3,title:"title",slug:"title",children:[]},{level:3,title:"lang",slug:"lang",children:[]},{level:3,title:"frontmatter",slug:"frontmatter",children:[]},{level:3,title:"excerpt",slug:"excerpt",children:[]},{level:3,title:"headers",slug:"headers",children:[]},{level:3,title:"data",slug:"data",children:[]},{level:3,title:"content",slug:"content",children:[]},{level:3,title:"contentRendered",slug:"contentrendered",children:[]},{level:3,title:"date",slug:"date",children:[]},{level:3,title:"deps",slug:"deps",children:[]},{level:3,title:"hoistedTags",slug:"hoistedtags",children:[]},{level:3,title:"links",slug:"links",children:[]},{level:3,title:"pathInferred",slug:"pathinferred",children:[]},{level:3,title:"pathLocale",slug:"pathlocale",children:[]},{level:3,title:"permalink",slug:"permalink",children:[]},{level:3,title:"routeMeta",slug:"routemeta",children:[]},{level:3,title:"slug",slug:"slug",children:[]},{level:3,title:"filePath",slug:"filepath",children:[]},{level:3,title:"filePathRelative",slug:"filepathrelative",children:[]}]}],git:{updatedTime:1651375842e3,contributors:[{name:"meteorlxy",email:"meteor.lxy@foxmail.com",commits:9}]},filePathRelative:"reference/node-api.md"};export{n as data};
