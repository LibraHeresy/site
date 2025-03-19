import{_ as s,c as e,o as a,ah as t}from"./chunks/framework.CokR5C85.js";const c=JSON.parse('{"title":"Prettier","description":"","frontmatter":{},"headers":[],"relativePath":"course/Vue2/prettier.md","filePath":"course/Vue2/prettier.md","lastUpdated":1742375609000}'),n={name:"course/Vue2/prettier.md"};function l(r,i,p,h,d,o){return a(),e("div",null,i[0]||(i[0]=[t(`<h1 id="prettier" tabindex="-1">Prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;Prettier&quot;">​</a></h1><h2 id="安装-prettier" tabindex="-1">安装 Prettier <a class="header-anchor" href="#安装-prettier" aria-label="Permalink to &quot;安装 Prettier&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 prettier</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 eslint-plugin-prettier</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Prettier 官方提供的 ESLint 插件，将 Prettier 作为 ESLint 的规则来使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 代码不符合 Prettier 的标准时，会报一个 ESLint 错误</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-plugin-prettier</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 eslint-config-prettier</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭所有与 Prettier 有冲突的规则</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-config-prettier</span></span></code></pre></div><h2 id="配置-prettier" tabindex="-1">配置 Prettier <a class="header-anchor" href="#配置-prettier" aria-label="Permalink to &quot;配置 Prettier&quot;">​</a></h2><p>修改 <code>.eslintrc.js</code> 文件，，添加以下内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;plugin:prettier/recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>安装 <code>eslint-config-prettier</code> 后，上方代码等价于：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;prettier/prettier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="自动保存修改" tabindex="-1">自动保存修改 <a class="header-anchor" href="#自动保存修改" aria-label="Permalink to &quot;自动保存修改&quot;">​</a></h2><p>注意 <code>ESLint</code> 只能提醒有错误，不能自动修复，所以需要配合 <code>VS Code</code> 的插件 <code>Prettier - Code formatter</code> 来使用。</p><h3 id="安装-prettier-插件" tabindex="-1">安装 Prettier 插件 <a class="header-anchor" href="#安装-prettier-插件" aria-label="Permalink to &quot;安装 Prettier 插件&quot;">​</a></h3><ol><li>点击 <code>VS Code</code> 的扩展图标</li><li>搜索 <code>prettier</code></li><li>在搜索结果中找到 <code>Prettier</code></li><li>点击 <code>install</code> 按钮</li><li>安装完成后点击 <code>Reload</code> 按钮或者重启 <code>VS Code</code></li></ol><h3 id="配置-prettier-为默认代码格式化工具" tabindex="-1">配置 Prettier 为默认代码格式化工具 <a class="header-anchor" href="#配置-prettier-为默认代码格式化工具" aria-label="Permalink to &quot;配置 Prettier 为默认代码格式化工具&quot;">​</a></h3><ol><li><code>ctrl + shift + p</code> 键盘（Windows）打开命令窗口</li><li>输入 <code>setting</code></li><li>选择 <code>Preferences: Open User Settings</code> 选项</li><li>搜索 <code>default formatter</code> 配置项，点击下拉框，选中 <code>Prettier</code></li></ol><h3 id="配置文件保存时自动格式化" tabindex="-1">配置文件保存时自动格式化 <a class="header-anchor" href="#配置文件保存时自动格式化" aria-label="Permalink to &quot;配置文件保存时自动格式化&quot;">​</a></h3><ol><li><code>ctrl + shift + p</code> 键盘（Windows）打开命令窗口</li><li>输入 <code>setting</code></li><li>选择 <code>Preferences: Open User Settings</code> 选项</li><li>搜索 <code>format on save</code> 配置项，选中复选框</li></ol>`,16)]))}const E=s(n,[["render",l]]);export{c as __pageData,E as default};
