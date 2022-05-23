const n={key:"v-e19cff04",path:"/zh/reference/node-api.html",title:"Node API",lang:"zh-CN",frontmatter:{},excerpt:`<h1 id="node-api" tabindex="-1"><a class="header-anchor" href="#node-api" aria-hidden="true">#</a> Node API</h1>
<NpmBadge package="@vuepress/core" />
<p>Node API \u662F\u7531 <a href="https://www.npmjs.com/package/@vuepress/core" target="_blank" rel="noopener noreferrer">@vuepress/core<ExternalLinkIcon/></a> \u5305\u63D0\u4F9B\u7684\u3002\u5B83\u662F <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress<ExternalLinkIcon/></a> \u5305\u7684\u4F9D\u8D56\u4E4B\u4E00\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5355\u72EC\u5B89\u88C5\u5B83\uFF1A</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #D4D4D4">npm i -D @vuepress/core@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> App</h2>
<p><RouterLink to="/zh/reference/plugin-api.html">\u63D2\u4EF6 API</RouterLink> \u7684\u6240\u6709 Hooks \u4E2D\u90FD\u53EF\u4EE5\u83B7\u53D6\u5230 App \u5B9E\u4F8B\u3002</p>
<p><code v-pre>BuildApp</code> \u548C <code v-pre>DevApp</code> \u9664\u4E86 <a href="#build">build</a> \u548C <a href="#dev">dev</a> \u65B9\u6CD5\u5916\uFF0C\u62E5\u6709\u4E00\u6837\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p>
<h3 id="createbuildapp" tabindex="-1"><a class="header-anchor" href="#createbuildapp" aria-hidden="true">#</a> createBuildApp</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createBuildApp</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">config</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">AppConfig</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">BuildApp</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>\u53C2\u6570\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>config</td>
<td><code v-pre>AppConfig</code></td>
<td>\u521B\u5EFA VuePress App \u7684\u9009\u9879\u3002</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u521B\u5EFA\u4E00\u4E2A Build \u6A21\u5F0F\u7684 App \u5B9E\u4F8B\uFF0C\u7528\u4E8E\u6784\u5EFA\u9759\u6001\u6587\u4EF6\u3002</p>
</li>
<li>
<p>\u793A\u4F8B\uFF1A</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">build</span><span style="color: #D4D4D4"> = </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">app</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">createBuildApp</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #6A9955">// ...\u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color: #D4D4D4">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u521D\u59CB\u5316\u548C\u51C6\u5907</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">init</span><span style="color: #D4D4D4">()</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">prepare</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u6784\u5EFA</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">build</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u5904\u7406 onGenerated hook</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">pluginApi</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">hooks</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">onGenerated</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">process</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul>
<li>\u53C2\u8003\uFF1A
<ul>
<li><a href="#build">Node API &gt; App \u65B9\u6CD5 &gt; build</a></li>
</ul>
</li>
</ul>
<h3 id="createdevapp" tabindex="-1"><a class="header-anchor" href="#createdevapp" aria-hidden="true">#</a> createDevApp</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createDevApp</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">config</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">AppConfig</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">DevApp</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>\u53C2\u6570\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>config</td>
<td><code v-pre>AppConfig</code></td>
<td>\u521B\u5EFA VuePress App \u7684\u9009\u9879\u3002</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u521B\u5EFA\u4E00\u4E2A Dev \u6A21\u5F0F\u7684 App \u5B9E\u4F8B\uFF0C\u7528\u4E8E\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u3002</p>
</li>
<li>
<p>\u793A\u4F8B\uFF1A</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4"> = </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">app</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">createDevApp</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #6A9955">// ...\u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color: #D4D4D4">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u521D\u59CB\u5316\u548C\u51C6\u5907</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">init</span><span style="color: #D4D4D4">()</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">prepare</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">closeDevServer</span><span style="color: #D4D4D4"> = </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u51C6\u5907\u6587\u4EF6\u76D1\u542C\u5668</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">watchers</span><span style="color: #D4D4D4"> = []</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u91CD\u542F\u5F00\u53D1\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">restart</span><span style="color: #D4D4D4"> = </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">all</span><span style="color: #D4D4D4">([</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #6A9955">// \u5173\u95ED\u6240\u6709\u76D1\u542C\u5668</span></span>
<span class="line"><span style="color: #D4D4D4">      ...</span><span style="color: #9CDCFE">watchers</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">map</span><span style="color: #D4D4D4">((</span><span style="color: #9CDCFE">item</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">item</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">close</span><span style="color: #D4D4D4">()),</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #6A9955">// \u5173\u95ED\u5F53\u524D\u7684\u5F00\u53D1\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #DCDCAA">closeDevServer</span><span style="color: #D4D4D4">(),</span></span>
<span class="line"><span style="color: #D4D4D4">    ])</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4">()</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u5904\u7406 onWatched hook</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">pluginApi</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">hooks</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">onWatched</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">process</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">watchers</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">restart</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul>
<li>\u53C2\u8003\uFF1A
<ul>
<li><a href="#dev">Node API &gt; App \u65B9\u6CD5 &gt; dev</a></li>
</ul>
</li>
</ul>
<h2 id="app-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#app-\u5C5E\u6027" aria-hidden="true">#</a> App \u5C5E\u6027</h2>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>AppOptions</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>VuePress App \u7684\u914D\u7F6E\u9879\u3002</p>
<p>\u8FD9\u4E9B\u914D\u7F6E\u9879\u6765\u81EA\u4E8E <a href="#createbuildapp">createBuildApp</a> / <a href="#createdevapp">createDevApp</a> \u7684 <code v-pre>config</code> \u53C2\u6570\uFF0C\u4F46\u6240\u6709\u53EF\u9009\u7684\u5B57\u6BB5\u90FD\u586B\u5145\u4E0A\u4E86\u9ED8\u8BA4\u503C\u3002</p>
</li>
</ul>
<h3 id="sitedata" tabindex="-1"><a class="header-anchor" href="#sitedata" aria-hidden="true">#</a> siteData</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>SiteData</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u7531\u7528\u6237\u8BBE\u7F6E\u7684\u7AD9\u70B9\u6570\u636E\uFF0C\u5305\u542B\u6240\u6709\u7684 <RouterLink to="/zh/reference/config.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE">\u7AD9\u70B9\u914D\u7F6E</RouterLink> \uFF0C\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4EE3\u7801\u4E2D\u4F7F\u7528\u3002</p>
</li>
</ul>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>string</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>VuePress App \u7684\u7248\u672C\uFF0C\u5373 <code v-pre>@vuepress/core</code> \u5305\u7684\u7248\u672C\u3002</p>
</li>
</ul>
<h3 id="env-isbuild" tabindex="-1"><a class="header-anchor" href="#env-isbuild" aria-hidden="true">#</a> env.isBuild</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>boolean</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u7528\u4E8E\u5224\u65AD App \u662F\u5426\u8FD0\u884C\u5728 Build \u6A21\u5F0F\u7684\u73AF\u5883\u6807\u8BB0\uFF0C\u5373\u5F53\u524D App \u662F\u5426\u662F <a href="#createbuildapp">BuildApp</a> \u5B9E\u4F8B\u3002</p>
</li>
</ul>
<h3 id="env-isdev" tabindex="-1"><a class="header-anchor" href="#env-isdev" aria-hidden="true">#</a> env.isDev</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>boolean</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u7528\u4E8E\u5224\u65AD App \u662F\u5426\u8FD0\u884C\u5728 Dev \u6A21\u5F0F\u7684\u73AF\u5883\u6807\u8BB0\uFF0C\u5373\u5F53\u524D App \u662F\u5426\u662F <a href="#createdevapp">DevApp</a> \u5B9E\u4F8B\u3002</p>
</li>
</ul>
<h3 id="env-isdebug" tabindex="-1"><a class="header-anchor" href="#env-isdebug" aria-hidden="true">#</a> env.isDebug</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>boolean</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u7528\u4E8E\u5224\u65AD App \u662F\u5426\u5F00\u542F Debug \u6A21\u5F0F\u7684\u73AF\u5883\u6807\u8BB0\u3002</p>
</li>
</ul>
<h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>MarkdownIt</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u7528\u4E8E\u89E3\u6790 Markdown \u5185\u5BB9\u7684 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it<ExternalLinkIcon/></a> \u5B9E\u4F8B\u3002</p>
<p>\u5B83\u4EC5\u5728 <RouterLink to="/zh/reference/plugin-api.html#oninitialized">onInitialized</RouterLink> \u4EE5\u53CA\u4E4B\u540E\u7684 Hooks \u4E2D\u624D\u53EF\u7528\u3002</p>
</li>
</ul>
<h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>Record&lt;string, string&gt;</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u5E03\u5C40\u7EC4\u4EF6 Map \uFF0C\u5176\u952E\u4E3A\u5E03\u5C40\u540D\u79F0\uFF0C\u5BF9\u5E94\u503C\u4E3A\u5E03\u5C40\u7EC4\u4EF6\u7684\u7EDD\u5BF9\u6587\u4EF6\u8DEF\u5F84\u3002</p>
<p>\u5B83\u4EC5\u5728 <RouterLink to="/zh/reference/plugin-api.html#oninitialized">onInitialized</RouterLink> \u4EE5\u53CA\u4E4B\u540E\u7684 Hooks \u4E2D\u624D\u53EF\u7528\u3002</p>
</li>
</ul>
<h3 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> pages</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>Page[]</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p><a href="#page">Page</a> \u5BF9\u8C61\u6570\u7EC4\u3002</p>
<p>\u5B83\u4EC5\u5728 <RouterLink to="/zh/reference/plugin-api.html#oninitialized">onInitialized</RouterLink> \u4EE5\u53CA\u4E4B\u540E\u7684 Hooks \u4E2D\u624D\u53EF\u7528\u3002</p>
</li>
</ul>
<h2 id="app-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#app-\u65B9\u6CD5" aria-hidden="true">#</a> App \u65B9\u6CD5</h2>
<h3 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h3>
<ul>
<li>
<p>\u5DE5\u5177\u51FD\u6570\uFF1A</p>
<ul>
<li><code v-pre>dir.cache()</code>\uFF1A \u89E3\u6790\u81F3\u7F13\u5B58\u76EE\u5F55</li>
<li><code v-pre>dir.temp()</code>\uFF1A \u89E3\u6790\u81F3\u4E34\u65F6\u6587\u4EF6\u76EE\u5F55</li>
<li><code v-pre>dir.source()</code>\uFF1A \u89E3\u6790\u81F3\u6E90\u6587\u4EF6\u76EE\u5F55</li>
<li><code v-pre>dir.dest()</code>\uFF1A \u89E3\u6790\u81F3\u8F93\u51FA\u76EE\u5F55</li>
<li><code v-pre>dir.client()</code>\uFF1A \u89E3\u6790\u81F3 <code v-pre>@vuepress/client</code> \u76EE\u5F55</li>
<li><code v-pre>dir.public()</code>\uFF1A \u89E3\u6790\u81F3 Public \u6587\u4EF6\u76EE\u5F55</li>
</ul>
</li>
<li>
<p>\u51FD\u6570\u7B7E\u540D\uFF1A</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">type</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">AppDirFunction</span><span style="color: #D4D4D4"> = (...</span><span style="color: #9CDCFE">args</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">[]) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u7528\u4E8E\u89E3\u6790\u5BF9\u5E94\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84\u7684\u4E00\u4E9B\u5DE5\u5177\u51FD\u6570\u3002</p>
<p>\u5982\u679C\u4F60\u4E0D\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u5C31\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</p>
</li>
<li>
<p>\u793A\u4F8B\uFF1A</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #6A9955">// \u89E3\u6790 \`\${sourceDir}/README.md\` \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">homeSourceFile</span><span style="color: #D4D4D4"> = </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">dir</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">source</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;README.md&#39;</span><span style="color: #D4D4D4">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="writetemp" tabindex="-1"><a class="header-anchor" href="#writetemp" aria-hidden="true">#</a> writeTemp</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">writeTemp</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">file</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">content</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4">): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>\u53C2\u6570\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td><code v-pre>string</code></td>
<td>\u8981\u5199\u5165\u7684\u4E34\u65F6\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E\u4E34\u65F6\u6587\u4EF6\u76EE\u5F55\u3002</td>
</tr>
<tr>
<td>content</td>
<td><code v-pre>string</code></td>
<td>\u8981\u5199\u5165\u7684\u4E34\u65F6\u6587\u4EF6\u8DEF\u5F84\u7684\u5185\u5BB9\u3002</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u7528\u4E8E\u5199\u5165\u4E34\u65F6\u6587\u4EF6\u7684\u65B9\u6CD5\u3002</p>
<p>\u5199\u5165\u7684\u6587\u4EF6\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u6587\u4EF6\u4E2D\u901A\u8FC7 <code v-pre>@temp</code> \u522B\u540D\u6765\u5F15\u5165\u3002</p>
</li>
<li>
<p>\u793A\u4F8B\uFF1A</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #4EC9B0">module</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">exports</span><span style="color: #D4D4D4"> = {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u5728 onPrepared hook \u4E2D\u5199\u5165\u4E34\u65F6\u6587\u4EF6</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">onPrepared</span><span style="color: #D4D4D4">() {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">writeTemp</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;foo.js&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #CE9178">&#39;export const foo = </span><span style="color: #D7BA7D">\\&#39;</span><span style="color: #CE9178">bar</span><span style="color: #D7BA7D">\\&#39;</span><span style="color: #CE9178">&#39;</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #6A9955">// \u5728\u5BA2\u6237\u7AEF\u6587\u4EF6\u4E2D\u5F15\u5165\u4E34\u65F6\u6587\u4EF6</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">foo</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;@temp/foo&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">init</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u521D\u59CB\u5316 VuePress App \u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks">\u6DF1\u5165 &gt; \u67B6\u6784 &gt; \u6838\u5FC3\u6D41\u7A0B\u4E0E Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="prepare" tabindex="-1"><a class="header-anchor" href="#prepare" aria-hidden="true">#</a> prepare</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">prepare</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u51C6\u5907\u5BA2\u6237\u7AEF\u4E34\u65F6\u6587\u4EF6\u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks">\u6DF1\u5165 &gt; \u67B6\u6784 &gt; \u6838\u5FC3\u6D41\u7A0B\u4E0E Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">build</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u751F\u6210\u9759\u6001\u7AD9\u70B9\u6587\u4EF6\u3002</p>
<p>\u8BE5\u65B9\u6CD5\u4EC5\u5728 <a href="#createbuildapp">BuildApp</a> \u4E2D\u53EF\u7528\u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks">\u6DF1\u5165 &gt; \u67B6\u6784 &gt; \u6838\u5FC3\u6D41\u7A0B\u4E0E Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #DCDCAA">dev</span><span style="color: #D4D4D4">(): </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;() </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #569CD6">void</span><span style="color: #D4D4D4">&gt;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u3002</p>
<p>\u8BE5\u65B9\u6CD5\u4EC5\u5728 <a href="#createdevapp">DevApp</a> \u4E2D\u53EF\u7528\u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks">\u6DF1\u5165 &gt; \u67B6\u6784 &gt; \u6838\u5FC3\u6D41\u7A0B\u4E0E Hooks</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h2>
<h3 id="createpage" tabindex="-1"><a class="header-anchor" href="#createpage" aria-hidden="true">#</a> createPage</h3>
<ul>
<li>\u51FD\u6570\u7B7E\u540D\uFF1A</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createPage</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">App</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">options</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">PageOptions</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Promise</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">Page</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>\u53C2\u6570\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>app</td>
<td><code v-pre>App</code></td>
<td>VuePress App \u5B9E\u4F8B\u3002</td>
</tr>
<tr>
<td>options</td>
<td><code v-pre>PageOptions</code></td>
<td>\u521B\u5EFA VuePress Page \u7684\u9009\u9879\u3002</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u521B\u5EFA\u4E00\u4E2A VuePress Page \u5BF9\u8C61\u3002</p>
</li>
<li>
<p>\u793A\u4F8B\uFF1A</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> { </span><span style="color: #4FC1FF">createPage</span><span style="color: #D4D4D4"> } = </span><span style="color: #DCDCAA">require</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;@vuepress/core&#39;</span><span style="color: #D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #4EC9B0">module</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">exports</span><span style="color: #D4D4D4"> = {</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">// \u5728 onInitialized hook \u4E2D\u521B\u5EFA\u4E00\u4E2A\u989D\u5916\u9875\u9762</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #569CD6">async</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">onInitialized</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">) {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">pages</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">push</span><span style="color: #D4D4D4">(</span></span>
<span class="line"><span style="color: #D4D4D4">      </span><span style="color: #C586C0">await</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">createPage</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">, {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">path:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;/foo.html&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">frontmatter:</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">          </span><span style="color: #9CDCFE">layout:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;Layout&#39;</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">        },</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">content:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">\`</span><span style="color: #D7BA7D">\\</span></span>
<span class="line"><span style="color: #CE9178"># \u67D0\u4E2A Page</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CE9178">\u4F60\u597D\uFF0C\u4E16\u754C\u3002</span></span>
<span class="line"><span style="color: #CE9178">\`</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">      })</span></span>
<span class="line"><span style="color: #D4D4D4">    )</span></span>
<span class="line"><span style="color: #D4D4D4">  }</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li>\u53C2\u8003\uFF1A
<ul>
<li><a href="#pages">Node API &gt; App \u5C5E\u6027 &gt; pages</a></li>
<li><RouterLink to="/zh/advanced/cookbook/adding-extra-pages.html">Cookbook &gt; \u6DFB\u52A0\u989D\u5916\u9875\u9762</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="page-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#page-\u5C5E\u6027" aria-hidden="true">#</a> Page \u5C5E\u6027</h2>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>string</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u8BE5 Page \u7684\u6807\u8BC6\u3002</p>
<p>Page Key \u4F1A\u88AB\u7528\u4F5C\u9875\u9762\u8DEF\u7531\u7684 <a href="https://router.vuejs.org/api/#name-2" target="_blank" rel="noopener noreferrer">name<ExternalLinkIcon/></a>\u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/reference/components.html#content">Built-in Components &gt; Content</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>string</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u8BE5 Page \u7684\u8DEF\u7531\u8DEF\u5F84\u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/guide/page.html#%E8%B7%AF%E7%94%B1">\u6307\u5357 &gt; \u9875\u9762 &gt; \u8DEF\u7531</RouterLink></li>
<li><a href="#pathinferred">Node API &gt; Page \u5C5E\u6027 &gt; pathInferred</a></li>
</ul>
</li>
</ul>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>string</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u8BE5 Page \u7684\u6807\u9898\u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/reference/frontmatter.html#title">Frontmatter &gt; title</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>string</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u8BE5 Page \u7684\u8BED\u8A00\u3002</p>
</li>
<li>
<p>\u793A\u4F8B\uFF1A</p>
<ul>
<li><code v-pre>'en-US'</code></li>
<li><code v-pre>'zh-CN'</code></li>
</ul>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/reference/frontmatter.html#title">Frontmatter &gt; lang</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> frontmatter</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>PageFrontmatter</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u8BE5 Page \u7684 Frontmatter \u3002</p>
</li>
<li>
<p>\u53C2\u8003\uFF1A</p>
<ul>
<li><RouterLink to="/zh/reference/frontmatter.html">Frontmatter</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt" aria-hidden="true">#</a> excerpt</h3>
<ul>
<li>
<p>\u7C7B\u578B\uFF1A <code v-pre>string</code></p>
</li>
<li>
<p>\u8BE6\u60C5\uFF1A</p>
<p>\u8BE5 Page \u7684\u6458\u8981\u3002</p>
<p>\u5982\u679C\u4E00\u4E2A Markdown \u6587\u4EF6\u4E2D\u5305\u542B\u4E00\u4E2A \`</p>
</li>
</ul>
`,headers:[{level:2,title:"App",slug:"app",children:[{level:3,title:"createBuildApp",slug:"createbuildapp",children:[]},{level:3,title:"createDevApp",slug:"createdevapp",children:[]}]},{level:2,title:"App \u5C5E\u6027",slug:"app-\u5C5E\u6027",children:[{level:3,title:"options",slug:"options",children:[]},{level:3,title:"siteData",slug:"sitedata",children:[]},{level:3,title:"version",slug:"version",children:[]},{level:3,title:"env.isBuild",slug:"env-isbuild",children:[]},{level:3,title:"env.isDev",slug:"env-isdev",children:[]},{level:3,title:"env.isDebug",slug:"env-isdebug",children:[]},{level:3,title:"markdown",slug:"markdown",children:[]},{level:3,title:"layouts",slug:"layouts",children:[]},{level:3,title:"pages",slug:"pages",children:[]}]},{level:2,title:"App \u65B9\u6CD5",slug:"app-\u65B9\u6CD5",children:[{level:3,title:"dir",slug:"dir",children:[]},{level:3,title:"writeTemp",slug:"writetemp",children:[]},{level:3,title:"init",slug:"init",children:[]},{level:3,title:"prepare",slug:"prepare",children:[]},{level:3,title:"build",slug:"build",children:[]},{level:3,title:"dev",slug:"dev",children:[]}]},{level:2,title:"Page",slug:"page",children:[{level:3,title:"createPage",slug:"createpage",children:[]}]},{level:2,title:"Page \u5C5E\u6027",slug:"page-\u5C5E\u6027",children:[{level:3,title:"key",slug:"key",children:[]},{level:3,title:"path",slug:"path",children:[]},{level:3,title:"title",slug:"title",children:[]},{level:3,title:"lang",slug:"lang",children:[]},{level:3,title:"frontmatter",slug:"frontmatter",children:[]},{level:3,title:"excerpt",slug:"excerpt",children:[]},{level:3,title:"headers",slug:"headers",children:[]},{level:3,title:"data",slug:"data",children:[]},{level:3,title:"content",slug:"content",children:[]},{level:3,title:"contentRendered",slug:"contentrendered",children:[]},{level:3,title:"date",slug:"date",children:[]},{level:3,title:"deps",slug:"deps",children:[]},{level:3,title:"hoistedTags",slug:"hoistedtags",children:[]},{level:3,title:"links",slug:"links",children:[]},{level:3,title:"pathInferred",slug:"pathinferred",children:[]},{level:3,title:"pathLocale",slug:"pathlocale",children:[]},{level:3,title:"permalink",slug:"permalink",children:[]},{level:3,title:"routeMeta",slug:"routemeta",children:[]},{level:3,title:"slug",slug:"slug",children:[]},{level:3,title:"filePath",slug:"filepath",children:[]},{level:3,title:"filePathRelative",slug:"filepathrelative",children:[]}]}],git:{updatedTime:1651375842e3,contributors:[{name:"meteorlxy",email:"meteor.lxy@foxmail.com",commits:9},{name:"Ostwind",email:"9837438@qq.com",commits:1}]},filePathRelative:"zh/reference/node-api.md"};export{n as data};
