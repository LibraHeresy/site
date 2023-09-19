import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cdc64c38.js";const d=JSON.parse('{"title":"Vue 使用 TinyMCE 富文本编辑器","description":"","frontmatter":{},"headers":[],"relativePath":"blog/Vue_使用_TinyMCE_富文本编辑器.md","filePath":"blog/Vue_使用_TinyMCE_富文本编辑器.md","lastUpdated":1695091403000}'),p={name:"blog/Vue_使用_TinyMCE_富文本编辑器.md"},o=l(`<h1 id="vue-使用-tinymce-富文本编辑器" tabindex="-1">Vue 使用 TinyMCE 富文本编辑器 <a class="header-anchor" href="#vue-使用-tinymce-富文本编辑器" aria-label="Permalink to &quot;Vue 使用 TinyMCE 富文本编辑器&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>说到富文本编辑器，<code>Quill</code> 是 Vue 开发者绕不开的，但遗憾的是，<code>Quill</code> 的 <code>Vue</code> 扩展 <code>vue-quill-editor</code> 在 5 年前停止更新了。</p><p>斯人已逝，我们迎来了新的富文本编辑器，<code>TinyMCE</code>！</p><p><a href="https://www.tiny.cloud/docs/tinymce/6/" target="_blank" rel="noreferrer">TinyMCE 官方文档</a></p><p><a href="http://tinymce.ax-z.cn/" target="_blank" rel="noreferrer">TinyMCE 中文文档</a></p><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><blockquote><p>Vue: v2.6.10</p><p>tinymce: v5.4.2</p><p>@tinymce/tinymce-vue: v3.2.3</p><p>copy-webpack-plugin: v6.1.1</p></blockquote><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="安装-tinymce-和-tinymce-tinymce-vue" tabindex="-1">安装 <code>tinymce</code> 和 <code>@tinymce/tinymce-vue</code> <a class="header-anchor" href="#安装-tinymce-和-tinymce-tinymce-vue" aria-label="Permalink to &quot;安装 \`tinymce\` 和 \`@tinymce/tinymce-vue\`&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tinymce</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@tinymce/tinymce-vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tinymce</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@tinymce/tinymce-vue</span></span></code></pre></div><h3 id="创建通用富文本组件" tabindex="-1">创建通用富文本组件 <a class="header-anchor" href="#创建通用富文本组件" aria-label="Permalink to &quot;创建通用富文本组件&quot;">​</a></h3><p>这种复用度高的组件，自然是要抽象为公告组件的。</p><p>和很多组件包一样，<code>TinyMCE</code> 也是通过一个基础组件和配置参数对象来实现功能的。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 引入tinyMCE对象</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tinymce </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/tinymce&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入编辑器组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Editor </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@tinymce/tinymce-vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入主题文件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/themes/silver/theme&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入皮肤样式</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/skins/ui/oxide/skin.css&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 引入tinyMCE对象</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tinymce </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/tinymce&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入编辑器组件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Editor </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@tinymce/tinymce-vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入主题文件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/themes/silver/theme&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入皮肤样式</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/skins/ui/oxide/skin.css&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>在默认配置下的 <code>TinyMCE</code> 显得过于简陋了，所以我们要自己引入需要的功能插件包。</p><p>需要注意的是，引入和使用在 <code>TinyMCE</code> 中是不同的操作。引入后，不更改工具栏配置，也是使用不了对应功能插件的。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 编辑器插件plugins</span></span>
<span class="line"><span style="color:#6A737D;">// 更多插件参考：https://www.tiny.cloud/docs/plugins/</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/image&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 插入上传图片插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/table&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 插入表格插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/lists&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 列表插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/wordcount&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 字数统计插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tinymce/plugins/media&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 插入上传视频插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tinymce/plugins/autosave&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 自动保存插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tinymce/plugins/preview&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tinymce/plugins/hr&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tinymce/plugins/code&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 源码插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">..</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 需要配置 toolbar，使功能按钮显示出来，除了一些特殊插件，如字数统计插件等。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 当 toolbar 为 String 类型时，所有组件都会放置在同一行，直到溢出换行。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 当 toolbar 为 Array 类型时，每个下标为一行。</span></span>
<span class="line"><span style="color:#E1E4E8;">  toolbar: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;undo redo | cut copy paste pastetext | forecolor backcolor bold italic underline hr link anchor | alignleft aligncenter alignright alignjustify outdent indent&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;styleselect formatselect fontsizeselect&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;bullist numlist | blockquote subscript superscript removeformat | table image charmap emoticons pagebreak insertdatetime print preview | bdmap indent2em lineheight formatpainter axupimgs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 编辑器插件plugins</span></span>
<span class="line"><span style="color:#6A737D;">// 更多插件参考：https://www.tiny.cloud/docs/plugins/</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/image&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 插入上传图片插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/table&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 插入表格插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/lists&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 列表插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/wordcount&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 字数统计插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tinymce/plugins/media&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 插入上传视频插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tinymce/plugins/autosave&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 自动保存插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tinymce/plugins/preview&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tinymce/plugins/hr&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tinymce/plugins/code&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 源码插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">..</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 需要配置 toolbar，使功能按钮显示出来，除了一些特殊插件，如字数统计插件等。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 当 toolbar 为 String 类型时，所有组件都会放置在同一行，直到溢出换行。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 当 toolbar 为 Array 类型时，每个下标为一行。</span></span>
<span class="line"><span style="color:#24292E;">  toolbar: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;undo redo | cut copy paste pastetext | forecolor backcolor bold italic underline hr link anchor | alignleft aligncenter alignright alignjustify outdent indent&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;styleselect formatselect fontsizeselect&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;bullist numlist | blockquote subscript superscript removeformat | table image charmap emoticons pagebreak insertdatetime print preview | bdmap indent2em lineheight formatpainter axupimgs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后在 <code>template</code> 使用 <code>Editor</code> 组件，组件内的富文本值可以直接通过 <code>v-model</code> 获取，<code>init</code> 属性传初始配置对象，<code>onClick</code> 接收点击事件。</p><p>在 <code>mounted</code> 生命周期方法内调用 <code>tinymce</code> 对象的 <code>init</code> 方法，完成初始化。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tinymce-editor&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">editor</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;myValue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:init</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;init&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@onClick</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onClick&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">editor</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tinymce.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">({});</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tinymce-editor&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">editor</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;myValue&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:init</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;init&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@onClick</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onClick&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">editor</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    tinymce.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">({});</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>这样就可以了,在想要使用的地方直接引入。看起来简单，真的是踩了好多坑。</p><p>如果想了解最新的功能，建议直接看 <a href="https://www.tiny.cloud/docs/tinymce/6/" target="_blank" rel="noreferrer">TinyMCE 官方文档</a>。</p><p>如果想了解 <code>API</code> ，建议看 <a href="http://tinymce.ax-z.cn/" target="_blank" rel="noreferrer">TinyMCE 中文文档</a>，但是只能用来参考，因为 <a href="http://tinymce.ax-z.cn/" target="_blank" rel="noreferrer">TinyMCE 中文文档</a> 已经很久没更新了，而且他的用法主要围绕 <code>&lt;script /&gt;</code> 标签直接引入写的，并不怎么适合 <code>Vue</code>。</p><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><h3 id="编辑器样式消失" tabindex="-1">编辑器样式消失 <a class="header-anchor" href="#编辑器样式消失" aria-label="Permalink to &quot;编辑器样式消失&quot;">​</a></h3><p>因为我的编辑器获取样式是相对路径，所以需要使用 <code>copy-webpack-plugin</code> 插件包，将静态文件不打包直接放到指定目录，建议是配置一个绝对路径，我是因为木已成舟不想修改了。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CopyPlugin</span><span style="color:#E1E4E8;">({</span><span style="color:#6A737D;">//复制不需要参加打包的文件到指定目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      patterns: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { from: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./src/static&#39;</span><span style="color:#E1E4E8;">), to: </span><span style="color:#9ECBFF;">&#39;static&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">......</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CopyPlugin</span><span style="color:#24292E;">({</span><span style="color:#6A737D;">//复制不需要参加打包的文件到指定目录</span></span>
<span class="line"><span style="color:#24292E;">      patterns: [</span></span>
<span class="line"><span style="color:#24292E;">        { from: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./src/static&#39;</span><span style="color:#24292E;">), to: </span><span style="color:#032F62;">&#39;static&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tinymce-editor&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">editor</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;myValue&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:init</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;init&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@onClick</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onClick&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">editor</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> tinymce </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/tinymce&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Editor </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@tinymce/tinymce-vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/themes/silver/theme&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/skins/ui/oxide/skin.css&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 编辑器插件plugins</span></span>
<span class="line"><span style="color:#6A737D;">// 更多插件参考：https://www.tiny.cloud/docs/plugins/</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/image&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 插入上传图片插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/table&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 插入表格插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/lists&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 列表插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/wordcount&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 字数统计插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/media&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 插入上传视频插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/autosave&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 自动保存插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/preview&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/hr&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tinymce/plugins/code&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 源码插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Editor,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    disabled: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: [String, Array],</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&quot;lists image table wordcount autosave preview hr&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    toolbar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: [String, Array],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;undo redo | cut copy paste pastetext | forecolor backcolor bold italic underline hr link anchor | alignleft aligncenter alignright alignjustify outdent indent&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;styleselect formatselect fontsizeselect&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;bullist numlist | blockquote subscript superscript removeformat | table image charmap emoticons pagebreak insertdatetime print preview | bdmap indent2em lineheight formatpainter axupimgs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      init: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        selector: </span><span style="color:#9ECBFF;">&quot;textarea&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        language_url: </span><span style="color:#9ECBFF;">&quot;./static/tinymce/langs/zh_CN.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        language: </span><span style="color:#9ECBFF;">&quot;zh_CN&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        convert_urls: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        skin_url: </span><span style="color:#9ECBFF;">&quot;./static/tinymce/skins/ui/oxide&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content_css: </span><span style="color:#9ECBFF;">&quot;./static/tinymce/skins/content/default/content.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icons: </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icons_url: </span><span style="color:#9ECBFF;">&quot;./static/tinymce/icons/icons.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content_style: </span><span style="color:#9ECBFF;">&quot;img {max-width: 100%} &quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        height: </span><span style="color:#9ECBFF;">&quot;80vh&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        plugins: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.plugins,</span></span>
<span class="line"><span style="color:#E1E4E8;">        toolbar: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.toolbar,</span></span>
<span class="line"><span style="color:#E1E4E8;">        branding: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// menubar: &#39;file edit&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">images_upload_handler</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">blobInfo</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">success</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">failure</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> xhr, formData;</span></span>
<span class="line"><span style="color:#E1E4E8;">          xhr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XMLHttpRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          xhr.withCredentials </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          xhr.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;POST&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;./file/upload&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          xhr.</span><span style="color:#B392F0;">onload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> json;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (xhr.status </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">failure</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;HTTP Error: &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> xhr.status);</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            json </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(xhr.responseText);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// this.imgsUrl[this.imgsUrl.length - 1] = json[&quot;data&quot;];</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./files/&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> json[</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">          };</span></span>
<span class="line"><span style="color:#E1E4E8;">          formData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FormData</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          formData.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;file&quot;</span><span style="color:#E1E4E8;">, blobInfo.</span><span style="color:#B392F0;">blob</span><span style="color:#E1E4E8;">(), blobInfo.</span><span style="color:#B392F0;">filename</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">          formData.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;dir&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;jfzsy&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          xhr.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(formData);</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      myValue: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tinymce.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">({});</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加相关的事件，可用的事件参照文档=&gt; https://github.com/tinymce/tinymce-vue =&gt; All available events</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 需要什么事件可以自己增加</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;onClick&quot;</span><span style="color:#E1E4E8;">, e, tinymce);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以添加一些自己的自定义事件，如清空内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.myValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">myValue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;input&quot;</span><span style="color:#E1E4E8;">, newValue);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tinymce-editor&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">editor</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;myValue&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:init</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;init&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;disabled&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@onClick</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onClick&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">editor</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> tinymce </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/tinymce&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Editor </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@tinymce/tinymce-vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/themes/silver/theme&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/skins/ui/oxide/skin.css&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 编辑器插件plugins</span></span>
<span class="line"><span style="color:#6A737D;">// 更多插件参考：https://www.tiny.cloud/docs/plugins/</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/image&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 插入上传图片插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/table&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 插入表格插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/lists&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 列表插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/wordcount&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 字数统计插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/media&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 插入上传视频插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/autosave&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 自动保存插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/preview&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/hr&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 预览插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tinymce/plugins/code&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 源码插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    Editor,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    disabled: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: {</span></span>
<span class="line"><span style="color:#24292E;">      type: [String, Array],</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&quot;lists image table wordcount autosave preview hr&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    toolbar: {</span></span>
<span class="line"><span style="color:#24292E;">      type: [String, Array],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;undo redo | cut copy paste pastetext | forecolor backcolor bold italic underline hr link anchor | alignleft aligncenter alignright alignjustify outdent indent&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;styleselect formatselect fontsizeselect&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;bullist numlist | blockquote subscript superscript removeformat | table image charmap emoticons pagebreak insertdatetime print preview | bdmap indent2em lineheight formatpainter axupimgs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ];</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    value: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      init: {</span></span>
<span class="line"><span style="color:#24292E;">        selector: </span><span style="color:#032F62;">&quot;textarea&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        language_url: </span><span style="color:#032F62;">&quot;./static/tinymce/langs/zh_CN.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        language: </span><span style="color:#032F62;">&quot;zh_CN&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        convert_urls: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        skin_url: </span><span style="color:#032F62;">&quot;./static/tinymce/skins/ui/oxide&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        content_css: </span><span style="color:#032F62;">&quot;./static/tinymce/skins/content/default/content.css&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icons: </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icons_url: </span><span style="color:#032F62;">&quot;./static/tinymce/icons/icons.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        content_style: </span><span style="color:#032F62;">&quot;img {max-width: 100%} &quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        height: </span><span style="color:#032F62;">&quot;80vh&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        plugins: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.plugins,</span></span>
<span class="line"><span style="color:#24292E;">        toolbar: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.toolbar,</span></span>
<span class="line"><span style="color:#24292E;">        branding: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// menubar: &#39;file edit&#39;,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">images_upload_handler</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">blobInfo</span><span style="color:#24292E;">, </span><span style="color:#E36209;">success</span><span style="color:#24292E;">, </span><span style="color:#E36209;">failure</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> xhr, formData;</span></span>
<span class="line"><span style="color:#24292E;">          xhr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMLHttpRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          xhr.withCredentials </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">          xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;POST&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;./file/upload&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          xhr.</span><span style="color:#6F42C1;">onload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> json;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (xhr.status </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">failure</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;HTTP Error: &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> xhr.status);</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            json </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(xhr.responseText);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// this.imgsUrl[this.imgsUrl.length - 1] = json[&quot;data&quot;];</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./files/&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> json[</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">          };</span></span>
<span class="line"><span style="color:#24292E;">          formData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FormData</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          formData.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;file&quot;</span><span style="color:#24292E;">, blobInfo.</span><span style="color:#6F42C1;">blob</span><span style="color:#24292E;">(), blobInfo.</span><span style="color:#6F42C1;">filename</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">          formData.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;dir&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;jfzsy&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(formData);</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      myValue: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.value,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    tinymce.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">({});</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加相关的事件，可用的事件参照文档=&gt; https://github.com/tinymce/tinymce-vue =&gt; All available events</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 需要什么事件可以自己增加</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;onClick&quot;</span><span style="color:#24292E;">, e, tinymce);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 可以添加一些自己的自定义事件，如清空内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newValue;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">myValue</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;input&quot;</span><span style="color:#24292E;">, newValue);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,30),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};
