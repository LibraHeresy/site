import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.28871c17.js";const C=JSON.parse('{"title":"Git 手册","description":"","frontmatter":{},"headers":[],"relativePath":"note/handbook_git.md","filePath":"note/handbook_git.md","lastUpdated":1694764389000}'),p={name:"note/handbook_git.md"},o=l(`<h1 id="git-手册" tabindex="-1">Git 手册 <a class="header-anchor" href="#git-手册" aria-label="Permalink to &quot;Git 手册&quot;">​</a></h1><p>来源文章 <a href="https://zhuanlan.zhihu.com/p/389814854" target="_blank" rel="noreferrer">吐血整理，全网最全 Git 命令手册</a></p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><h3 id="git-config-配置" tabindex="-1">git config（配置） <a class="header-anchor" href="#git-config-配置" aria-label="Permalink to &quot;git config（配置）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出、设置基本的全局变量</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出、设置基本的全局变量</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span></span></code></pre></div><h3 id="git-init-新建" tabindex="-1">git init（新建） <a class="header-anchor" href="#git-init-新建" aria-label="Permalink to &quot;git init（新建）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 初始化当前项目</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在指定目录创建一个空的 Git 仓库</span></span>
<span class="line"><span style="color:#6A737D;"># 运行这个命令会创建一个名为 directory，只包含 .git 子目录的空目录</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--bare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">director</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 初始化当前项目</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在指定目录创建一个空的 Git 仓库</span></span>
<span class="line"><span style="color:#6A737D;"># 运行这个命令会创建一个名为 directory，只包含 .git 子目录的空目录</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--bare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">director</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="git-clone-克隆" tabindex="-1">git clone（克隆） <a class="header-anchor" href="#git-clone-克隆" aria-label="Permalink to &quot;git clone（克隆）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#6A737D;"># 这个命令就是将一个版本库拷贝到另一个目录中，同时也将分支都拷贝到新的版本库中</span></span>
<span class="line"><span style="color:#6A737D;"># 这样就可以在新的版本库中提交到远程分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> [url]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#6A737D;"># 这个命令就是将一个版本库拷贝到另一个目录中，同时也将分支都拷贝到新的版本库中</span></span>
<span class="line"><span style="color:#6A737D;"># 这样就可以在新的版本库中提交到远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> [url]</span></span></code></pre></div><h3 id="git-add-添加" tabindex="-1">git add（添加） <a class="header-anchor" href="#git-add-添加" aria-label="Permalink to &quot;git add（添加）&quot;">​</a></h3><p>添加文件到当前工作空间中。如果你不使用 git add 将文件添加进去，那么这些文件也不会添加到之后的提交之中</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 添加一个文件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加一个子目录中的文件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/path/to/file/test.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 支持正则表达式</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./</span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#6A737D;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 添加一个文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加一个子目录中的文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/path/to/file/test.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 支持正则表达式</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#6A737D;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span></span></code></pre></div><h3 id="git-rm-移除" tabindex="-1">git rm（移除） <a class="header-anchor" href="#git-rm-移除" aria-label="Permalink to &quot;git rm（移除）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 移除 HelloWorld.js</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HelloWorld.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 移除子目录中的文件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/pather/to/the/file/HelloWorld.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span><span style="color:#E1E4E8;"> [file]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 移除 HelloWorld.js</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HelloWorld.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 移除子目录中的文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/pather/to/the/file/HelloWorld.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> [file1] [file2] ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> [file]</span></span></code></pre></div><h3 id="git-status-状态" tabindex="-1">git status（状态） <a class="header-anchor" href="#git-status-状态" aria-label="Permalink to &quot;git status（状态）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示分支，未跟踪文件，更改和其他不同</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看其他的git status的用法</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">help</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示分支，未跟踪文件，更改和其他不同</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看其他的git status的用法</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">help</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span></code></pre></div><h3 id="git-commit-提交" tabindex="-1">git commit（提交） <a class="header-anchor" href="#git-commit-提交" aria-label="Permalink to &quot;git commit（提交）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 提交暂存区到仓库区附带提交信息</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> [file1] [file2] ... -m [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#6A737D;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> [file1] [file2] ...</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 提交暂存区到仓库区附带提交信息</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> [file1] [file2] ... -m [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#6A737D;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> [file1] [file2] ...</span></span></code></pre></div><h3 id="git-stash-暂存" tabindex="-1">git stash（暂存） <a class="header-anchor" href="#git-stash-暂存" aria-label="Permalink to &quot;git stash（暂存）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列所有stash</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复暂存的内容</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除暂存区</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">drop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列所有stash</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复暂存的内容</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">drop</span></span></code></pre></div><h3 id="git-push-推送" tabindex="-1">git push（推送） <a class="header-anchor" href="#git-push-推送" aria-label="Permalink to &quot;git push（推送）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># git push &lt;远端&gt; &lt;分支&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># git push 相当于 git push origin master</span></span>
<span class="line"><span style="color:#6A737D;"># 把本地的分支更新到远端origin的master分支上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] --all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># git push &lt;远端&gt; &lt;分支&gt;</span></span>
<span class="line"><span style="color:#6A737D;"># git push 相当于 git push origin master</span></span>
<span class="line"><span style="color:#6A737D;"># 把本地的分支更新到远端origin的master分支上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] --all</span></span></code></pre></div><h3 id="git-checkout-检出" tabindex="-1">git checkout（检出） <a class="header-anchor" href="#git-checkout-检出" aria-label="Permalink to &quot;git checkout（检出）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 检出一个版本库，默认将更新到master分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出到一个特定的分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，并且切换过去，相当于&quot;git branch &lt;名字&gt;; git checkout &lt;名字&gt;&quot;</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">newBranch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 检出一个版本库，默认将更新到master分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出到一个特定的分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，并且切换过去，相当于&quot;git branch &lt;名字&gt;; git checkout &lt;名字&gt;&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">newBranch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre></div><h3 id="git-branch-分支" tabindex="-1">git branch（分支） <a class="header-anchor" href="#git-branch-分支" aria-label="Permalink to &quot;git branch（分支）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看所有的分支和远程分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个新的分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重命名分支</span></span>
<span class="line"><span style="color:#6A737D;"># git branch -m &lt;旧名称&gt; &lt;新名称&gt;</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> [branch-name] [new-branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑分支的介绍</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [branch-name] --edit-description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [branch] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--track</span><span style="color:#E1E4E8;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--set-upstream</span><span style="color:#E1E4E8;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dr</span><span style="color:#E1E4E8;"> [remote/branch]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看所有的分支和远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建一个新的分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重命名分支</span></span>
<span class="line"><span style="color:#6A737D;"># git branch -m &lt;旧名称&gt; &lt;新名称&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> [branch-name] [new-branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑分支的介绍</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [branch-name] --edit-description</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [branch-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [branch] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--track</span><span style="color:#24292E;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--set-upstream</span><span style="color:#24292E;"> [branch] [remote-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dr</span><span style="color:#24292E;"> [remote/branch]</span></span></code></pre></div><h3 id="git-merge-合并" tabindex="-1">git merge（合并） <a class="header-anchor" href="#git-merge-合并" aria-label="Permalink to &quot;git merge（合并）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 将其他分支合并到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branchName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在合并时创建一个新的合并后的提交</span></span>
<span class="line"><span style="color:#6A737D;"># 不要 Fast-Foward 合并，这样可以生成 merge 提交</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-ff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branchName</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 将其他分支合并到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branchName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 在合并时创建一个新的合并后的提交</span></span>
<span class="line"><span style="color:#6A737D;"># 不要 Fast-Foward 合并，这样可以生成 merge 提交</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-ff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branchName</span></span></code></pre></div><h3 id="git-diff-差异展示" tabindex="-1">git diff（差异展示） <a class="header-anchor" href="#git-diff-差异展示" aria-label="Permalink to &quot;git diff（差异展示）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> [first-branch]...[second-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--shortstat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较暂存区和版本库差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--staged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较暂存区和版本库差异</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅仅比较统计信息</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> [first-branch]...[second-branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--shortstat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较暂存区和版本库差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--staged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较暂存区和版本库差异</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅仅比较统计信息</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span></span></code></pre></div><h3 id="git-revert-撤销" tabindex="-1">git revert（撤销） <a class="header-anchor" href="#git-revert-撤销" aria-label="Permalink to &quot;git revert（撤销）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#6A737D;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复最后一次提交的状态</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#6A737D;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复最后一次提交的状态</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span></code></pre></div><h3 id="git-reset-重置" tabindex="-1">git reset（重置） <a class="header-anchor" href="#git-reset-重置" aria-label="Permalink to &quot;git reset（重置）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span><span style="color:#E1E4E8;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keep</span><span style="color:#E1E4E8;"> [commit]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span><span style="color:#24292E;"> [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keep</span><span style="color:#24292E;"> [commit]</span></span></code></pre></div><h3 id="git-tag-标签" tabindex="-1">git tag（标签） <a class="header-anchor" href="#git-tag-标签" aria-label="Permalink to &quot;git tag（标签）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 列出所有tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> [tag] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看tag信息</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交指定tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交所有tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> [branch] [tag]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 列出所有tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> [tag] [commit]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看tag信息</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交指定tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交所有tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> [branch] [tag]</span></span></code></pre></div><h3 id="git-log-日志" tabindex="-1">git log（日志） <a class="header-anchor" href="#git-log-日志" aria-label="Permalink to &quot;git log（日志）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span><span style="color:#E1E4E8;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> [tag] HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> [tag] HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--follow</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-5</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--pretty</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span><span style="color:#24292E;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> [tag] HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> [tag] HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--follow</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pretty</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span></span></code></pre></div><h3 id="常用语句大全" tabindex="-1">常用语句大全 <a class="header-anchor" href="#常用语句大全" aria-label="Permalink to &quot;常用语句大全&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 初始化本地git仓库（创建新仓库）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置用户名</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;xxx&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置邮件</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user.email</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;xxx@xxx.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看当前版本状态（是否修改）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加xyz文件至index</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xyz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加当前子目录下所有更改过的文件至index</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并上一次提交（用于反复修改）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将add和commit合为一步</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-am</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除index中的文件</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 递归删除</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示提交日志</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示1行日志 -n为n行</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示提交日志及相关变动文件</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个提交的详细内容</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可只用commitid的前几位</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dfb02</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示HEAD提交日志</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示已存在的tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加v2.0的tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v2.0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示v2.0的日志及详细内容</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示v2.0的日志</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  显示所有未添加至index的变更</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有已添加index但还未commit的变更</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较与上一个版本的差异</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD^</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较与HEAD版本lib目录的差异</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./lib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较远程分支master上有本地分支master上没有的</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin/master..master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只显示差异的文件，不显示具体内容</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin/master..master</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加远程定义（用于push/pull/fetch）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git+ssh://git@192.168.53.168/VT.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示本地分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示包含提交50089的分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--contains</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50089</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有原创分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有已合并到当前分支的分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有未合并到当前分支的分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--no-merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地分支改名</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master_copy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从当前分支创建新分支master_copy并检出</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master_copy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上面的完整版</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master_copy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出已存在的features/performance分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">features/performance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--track</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出版本v2.0</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从远程分支develop创建新本地分支devel并检出</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin/develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出head版本的README文件（可用于修改错误回退）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并远程master分支至当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin/master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并提交ff44785404a8e的修改</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cherry-pick</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ff44785404a8e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将当前分支push到远程master分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程仓库的hotfixes/BJVEP933分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 把所有tag推送到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取所有远程分支（不更新本地分支，另需merge）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取所有原创分支并清除服务器上已删掉的分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--prune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取远程分支master并merge到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重命名文件README为README2</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将当前版本重置为HEAD（通常用于merge失败回退）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强制删除分支hotfixes/BJVEP933</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出git index包含的文件</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls-files</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 图示当前分支历史</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show-branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 图示所有分支历史</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show-branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示提交历史对应的文件修改</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">whatchanged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 内部命令：显示某个git对象</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls-tree</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 内部命令：显示某个ref对于的SHA1 HASH</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rev-parse</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有提交，包括孤立节点</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reflog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示master分支昨天的状态</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master@{yesterday}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 图示提交日志</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--pretty=format:</span><span style="color:#9ECBFF;">&#39;%h %s&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--graph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暂存当前修改，将所有至为HEAD状态</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有暂存</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 参考第一次暂存</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash@{</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用第一次暂存</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash@{</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 文件中搜索文本“delete from”</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;delete from&quot;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 初始化本地git仓库（创建新仓库）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置用户名</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;xxx&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置邮件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;xxx@xxx.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看当前版本状态（是否修改）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加xyz文件至index</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xyz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加当前子目录下所有更改过的文件至index</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并上一次提交（用于反复修改）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将add和commit合为一步</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-am</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除index中的文件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 递归删除</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示提交日志</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示1行日志 -n为n行</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示提交日志及相关变动文件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个提交的详细内容</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可只用commitid的前几位</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dfb02</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示HEAD提交日志</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示已存在的tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加v2.0的tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v2.0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;xxx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示v2.0的日志及详细内容</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示v2.0的日志</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  显示所有未添加至index的变更</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有已添加index但还未commit的变更</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较与上一个版本的差异</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD^</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较与HEAD版本lib目录的差异</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./lib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 比较远程分支master上有本地分支master上没有的</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin/master..master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只显示差异的文件，不显示具体内容</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin/master..master</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加远程定义（用于push/pull/fetch）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git+ssh://git@192.168.53.168/VT.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示本地分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示包含提交50089的分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--contains</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50089</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有原创分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有已合并到当前分支的分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有未合并到当前分支的分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地分支改名</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master_copy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从当前分支创建新分支master_copy并检出</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master_copy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上面的完整版</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master_copy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出已存在的features/performance分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">features/performance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--track</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出版本v2.0</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从远程分支develop创建新本地分支devel并检出</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin/develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检出head版本的README文件（可用于修改错误回退）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并远程master分支至当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin/master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并提交ff44785404a8e的修改</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ff44785404a8e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将当前分支push到远程master分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程仓库的hotfixes/BJVEP933分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 把所有tag推送到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取所有远程分支（不更新本地分支，另需merge）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取所有原创分支并清除服务器上已删掉的分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--prune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 获取远程分支master并merge到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重命名文件README为README2</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将当前版本重置为HEAD（通常用于merge失败回退）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强制删除分支hotfixes/BJVEP933</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hotfixes/BJVEP933</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出git index包含的文件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls-files</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 图示当前分支历史</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show-branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 图示所有分支历史</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show-branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示提交历史对应的文件修改</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">whatchanged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 内部命令：显示某个git对象</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls-tree</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 内部命令：显示某个ref对于的SHA1 HASH</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rev-parse</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v2.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有提交，包括孤立节点</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reflog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示master分支昨天的状态</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master@{yesterday}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 图示提交日志</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pretty=format:</span><span style="color:#032F62;">&#39;%h %s&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--graph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暂存当前修改，将所有至为HEAD状态</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有暂存</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 参考第一次暂存</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash@{</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 应用第一次暂存</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash@{</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 文件中搜索文本“delete from”</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;delete from&quot;</span></span></code></pre></div>`,40),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const B=s(p,[["render",c]]);export{C as __pageData,B as default};
