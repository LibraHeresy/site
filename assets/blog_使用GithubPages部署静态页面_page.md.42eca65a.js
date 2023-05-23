import{_ as e,c as a,o as s,V as t}from"./chunks/framework.0cefc241.js";const _=JSON.parse('{"title":"使用 Github Pages 部署 VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"blog/使用GithubPages部署静态页面/page.md","lastUpdated":1684850615000}'),o={name:"blog/使用GithubPages部署静态页面/page.md"},n=t('<h1 id="使用-github-pages-部署-vitepress" tabindex="-1">使用 Github Pages 部署 VitePress <a class="header-anchor" href="#使用-github-pages-部署-vitepress" aria-label="Permalink to &quot;使用 Github Pages 部署 VitePress&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>自从用 VitePress 快速搭建博客系统以后，一直想部署在互联网上，然后去考察了阿里云和腾讯云，发现有点小贵。因为按照我的使用习惯，只是部署博客的话，有点小亏。</p><p>这几天在掘金闲逛的时候，看到这篇文章<a href="https://juejin.cn/post/7000572105154625567#heading-1" target="_blank" rel="noreferrer">《Vuepress + GitHub Actions 实现博客自动部署！》</a>，突然就想尝试一下，因为白嫖总是令人愉悦的。</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><p>因为这篇<a href="https://juejin.cn/post/7000572105154625567#heading-1" target="_blank" rel="noreferrer">博客</a>已经写的很详细了，我就解释一下他每个步骤的作用。</p><h3 id="_1-生成-token" tabindex="-1">1. 生成 Token <a class="header-anchor" href="#_1-生成-token" aria-label="Permalink to &quot;1. 生成 Token&quot;">​</a></h3><p>获取一些权限，包括对仓库的提交，删除，监听等</p><h3 id="_2-设置-secrets" tabindex="-1">2. 设置 Secrets <a class="header-anchor" href="#_2-设置-secrets" aria-label="Permalink to &quot;2. 设置 Secrets&quot;">​</a></h3><p>用来给 Action 授权，来对项目做一些敏感操作。</p><h3 id="_3-编写-action" tabindex="-1">3. 编写 Action <a class="header-anchor" href="#_3-编写-action" aria-label="Permalink to &quot;3. 编写 Action&quot;">​</a></h3><p>编写 yml 文件，来触发 Action。</p><p><a href="https://github.com/actions/checkout" target="_blank" rel="noreferrer">actions/checkout</a> <code>拉取代码</code></p><p><a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noreferrer">JamesIves/github-pages-deploy-action</a> <code>将打包文件部署到指定分支上</code></p><p>需要注意的是这篇文章是针对 VuePress 来写的，所以我们需要将打包文件路径修改一下</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">FOLDER</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vuepress/dist</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># vuepress 生成的静态文件存放的地方</span></span></code></pre></div><p>改为</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">FOLDER</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># vitepress 生成的静态文件存放的地方</span></span></code></pre></div><p>到这一步基本上就没啥问题了，可以在 Settings 里面找到自己的 Pages 地址</p><div class="tip custom-block"><p class="custom-block-title">路径</p><p>项目地址 -&gt; Settings -&gt; Pages -&gt; Visit site</p></div>',20),r=[n];function l(p,i,c,h,d,u){return s(),a("div",null,r)}const b=e(o,[["render",l]]);export{_ as __pageData,b as default};
