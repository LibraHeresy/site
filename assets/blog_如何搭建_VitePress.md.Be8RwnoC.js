import{P as i}from"./chunks/PreviewImage.DLxvjLKY.js";import{c as h,J as a,a5 as n,m as s,a as t,o as l}from"./chunks/framework.CGDvBAlC.js";const k=n(`<h1 id="如何搭建-vitepress" tabindex="-1">如何搭建 VitePress <a class="header-anchor" href="#如何搭建-vitepress" aria-label="Permalink to &quot;如何搭建 VitePress&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>有一个前同事在群里发了他搭建的基于 <code>VuePress</code> 和 <code>VitePress</code> 的博客。</p><p>看了以后被这种简约的风格打动了，于是开始了自己的 <code>VitePress</code> 搭建之旅。</p><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><blockquote><p>node: v16.15.1</p></blockquote><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="搭建项目" tabindex="-1">搭建项目 <a class="header-anchor" href="#搭建项目" aria-label="Permalink to &quot;搭建项目&quot;">​</a></h3><p>推荐是看中文文档搭建起来，再看英文文档查配置参数，并和项目文件相互佐证。</p><p><a href="https://process1024.github.io/vitepress/" target="_blank" rel="noreferrer">VitePress 中文文档</a> <code>文档不全，因为是爱发电，所以更新不及时，不包含配置参数文档</code></p><p><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress 英文文档</a> <code>文档全且新，但是全英文，包含配置参数文档</code></p><p><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">VitePress 项目地址</a> <code>Github地址</code></p><h3 id="构建基础功能" tabindex="-1">构建基础功能 <a class="header-anchor" href="#构建基础功能" aria-label="Permalink to &quot;构建基础功能&quot;">​</a></h3><p>构建博客的基础功能，能够开门见客。</p><h4 id="_1-在-docs-文件夹下新建-index-md" tabindex="-1">1. 在 <code>docs</code> 文件夹下新建 <code>index.md</code> <a class="header-anchor" href="#_1-在-docs-文件夹下新建-index-md" aria-label="Permalink to &quot;1. 在 \`docs\` 文件夹下新建 \`index.md\`&quot;">​</a></h4><blockquote><p>docs/index.md</p></blockquote><h4 id="_2-使用-yml-语法书写首页配置" tabindex="-1">2. 使用 <code>yml</code> 语法书写首页配置 <a class="header-anchor" href="#_2-使用-yml-语法书写首页配置" aria-label="Permalink to &quot;2. 使用 \`yml\` 语法书写首页配置&quot;">​</a></h4><p>这是我的首页的配置，对于普通的需求来说够用了。</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">home</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LibraHeresy&#39;s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 首页左侧主标题</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Blog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 首页左侧次标题</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tagline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">记录技术经验</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 首页左侧补充信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 首页右侧图</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;https://avatars.githubusercontent.com/u/43395850?s=400&amp;u=75df1aaf5efcbbcdded576bf50905a15e228742d&amp;v=4&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">网站的 logo 图片</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 首页左侧标题下按钮</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">brand</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">去看看</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/blog/home</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">alt</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">我的 github</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;https://github.com/LibraHeresy&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">alt</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">我的 gitee</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;https://gitee.com/LibraHeresy&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">features</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 首页下方推荐盒子</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">🛠️</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Taro CI持续集成框架的配置与使用</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Taro CI持续集成框架的配置与使用</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/blog/TaroCI持续集成框架的配置与使用/page</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    linkText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">了解更多</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">⚡️</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">如何搭建VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">如何搭建VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/blog/如何搭建VitePress/page</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    linkText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">了解更多</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">🖖</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">使用Github Pages部署静态页面</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">使用Github Pages部署静态页面</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/blog/使用GithubPages部署静态页面/pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    linkText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">了解更多</span></span></code></pre></div>`,19),p=n(`<h4 id="_3-配置-config-js-全局配置文件" tabindex="-1">3. 配置 <code>config.js</code>（全局配置文件） <a class="header-anchor" href="#_3-配置-config-js-全局配置文件" aria-label="Permalink to &quot;3. 配置 \`config.js\`（全局配置文件）&quot;">​</a></h4><blockquote><p>docs/.vitepress/config.js</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LibraHeresy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 网页左上角标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  titleTemplate: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;天秤的异端&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 页签右标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/vite-press/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Blog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastUpdated: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 最后更新时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 导航栏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;首页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;博客&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/blog/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;短文&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/essay/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;闲谈&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/chat/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 侧边栏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sidebar: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/blog/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;简述&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/blog/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Taro CI持续集成框架的配置与使用&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/blog/TaroCI持续集成框架的配置与使用/page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;如何搭建VitePress&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/blog/如何搭建VitePress/page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;使用Github Pages部署静态页面&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/blog/使用GithubPages部署静态页面/page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/essay/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;简述&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/essay/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;如何快速完成Microsoft Rewards积分任务&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/essay/如何快速完成MicrosoftRewards积分任务/page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/chat/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;简述&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/chat/home&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;书架&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/chat/书架/page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 页脚</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Released under the MIT License.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copyright: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Copyright © 2023-present LibraHeresy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 搜索框</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      provider: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;local&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 自定义更新时间头</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lastUpdatedText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;最后更新时间&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 右上角社交链接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    socialLinks: [{ icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/LibraHeresy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,3),e=s("h2",{id:"总结",tabindex:"-1"},[t("总结 "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1),E=s("p",null,"至此，一个基本功能满足的博客就算搭建好了，因为这个模板还面向一部分的文字工作者，所以难点在于各种配置参数的填写。",-1),r=s("p",null,"总体来说，体验良好，比较推荐。",-1),u=JSON.parse('{"title":"如何搭建 VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"blog/如何搭建_VitePress.md","filePath":"blog/如何搭建_VitePress.md","lastUpdated":1710755259000}'),d={name:"blog/如何搭建_VitePress.md"},q=Object.assign(d,{setup(g){return(y,o)=>(l(),h("div",null,[k,a(i,{imageUrl:"https://gcore.jsdelivr.net/gh/LibraHeresy/BaiduNetDisk/images/blog/202305291519630.png"}),p,a(i,{imageUrl:"https://gcore.jsdelivr.net/gh/LibraHeresy/BaiduNetDisk/images/blog/202305291520454.png"}),a(i,{imageUrl:"https://gcore.jsdelivr.net/gh/LibraHeresy/BaiduNetDisk/images/blog/202305291520660.png"}),e,E,r]))}});export{u as __pageData,q as default};
