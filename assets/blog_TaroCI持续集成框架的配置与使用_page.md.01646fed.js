import{_ as a,c as e,o as s,V as t}from"./chunks/framework.0cefc241.js";const p="/libraheresy-blog/assets/image1.c7c1ed2a.png",o="/libraheresy-blog/assets/image2.a9410415.png",l="/libraheresy-blog/assets/image3.82916129.png",n="/libraheresy-blog/assets/image4.817e8b3f.png",i="/libraheresy-blog/assets/image5.33e89a0b.png",r="/libraheresy-blog/assets/image6.bf6c6aa4.png",c="/libraheresy-blog/assets/image7.99f068d2.png",d="/libraheresy-blog/assets/image8.48e786b6.png",q=JSON.parse('{"title":"Taro CI持续集成框架的配置与使用","description":"","frontmatter":{"prev":false},"headers":[],"relativePath":"blog/TaroCI持续集成框架的配置与使用/page.md","lastUpdated":1684204636000}'),h={name:"blog/TaroCI持续集成框架的配置与使用/page.md"},m=t('<h1 id="taro-ci持续集成框架的配置与使用" tabindex="-1">Taro CI持续集成框架的配置与使用 <a class="header-anchor" href="#taro-ci持续集成框架的配置与使用" aria-label="Permalink to &quot;Taro CI持续集成框架的配置与使用&quot;">​</a></h1><h2 id="痛点" tabindex="-1">痛点 <a class="header-anchor" href="#痛点" aria-label="Permalink to &quot;痛点&quot;">​</a></h2><p>使用Taro跨端框架开发小程序时，需要切换三个界面，进行三次操作，才能上传成功，上传代码步骤过于繁琐。</p><p>且多人开发时，如果想让自己代码生效，需要切换体验版代码为自己上传的版本。</p><div class="tip custom-block"><p class="custom-block-title">步骤</p><p>vscode打包 -&gt; 微信开发者工具上传 -&gt; 设置为体验版</p></div><h2 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;">​</a></h2><p>使用微信官方的CI工具，即可实现命令行上传代码。</p><p>因为我使用的Taro本身就有官方的工具-Taro CI，和Taro一样兼容了各个小程序平台，所以直接使用官方工具即可。</p><div class="tip custom-block"><p class="custom-block-title">步骤</p><p>配置上传信息 -&gt; vscode命令行打包上传</p></div><p>Taro CI完美解决我的痛点，而且因为是机器人上传，所以大家代码都可以上传到同一个体验版内，也不用切换界面，vscode终端一行命令就可以完成打包上传操作。</p><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">环境</p><p>node: 14.17.3</p><p>Taro: 3.0.21</p><p>Taro CI: 3.5.3</p></div><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="安装-tarojs-plugin-mini-ci" tabindex="-1">安装 tarojs/plugin-mini-ci <a class="header-anchor" href="#安装-tarojs-plugin-mini-ci" aria-label="Permalink to &quot;安装 tarojs/plugin-mini-ci&quot;">​</a></h3><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;"> @tarojs/plugin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">mini</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ci </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre></div><p>或</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i @tarojs/plugin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">mini</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ci </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span></code></pre></div><h3 id="配置参数" tabindex="-1">配置参数 <a class="header-anchor" href="#配置参数" aria-label="Permalink to &quot;配置参数&quot;">​</a></h3><p>按照官方文档配置本地参数就可以了</p><p><a href="https://taro-docs.jd.com/docs/plugin-mini-ci" target="_blank" rel="noreferrer">Taro CI官方文档</a></p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="打包报错" tabindex="-1">打包报错 <a class="header-anchor" href="#打包报错" aria-label="Permalink to &quot;打包报错&quot;">​</a></h3><p>UnhandledPromiseRejectionWarning: TypeError: Cannot read property &#39;platform&#39; of undefined <img src="'+p+'" alt="TaroCI异常" title="TaroCI异常"> 此报错的原因是插件本身取值对象有问题，所以我们需要修改它的取值对象。</p><p><code>文件路径：node_modules\\@tarojs\\plugin-mini-ci\\dist\\index.js 51行</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> platform </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">runOpts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">platform</span></span></code></pre></div><p>修改为</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> platform </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">runOpts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">platform</span></span></code></pre></div><h3 id="申请插件权限" tabindex="-1">申请插件权限 <a class="header-anchor" href="#申请插件权限" aria-label="Permalink to &quot;申请插件权限&quot;">​</a></h3><p>插件安装以后是不能直接使用的（有时候也可以。。。），需要申请插件权限，需要用到PostMan等可以模拟请求的工具。</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/plugin-management/managePlugin.html" target="_blank" rel="noreferrer">向插件开发者发起使用插件的申请</a></p><h4 id="_1-获取access-token" tabindex="-1">1. 获取access_token <a class="header-anchor" href="#_1-获取access-token" aria-label="Permalink to &quot;1. 获取access_token&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">示例</p><p>请求方式：GET</p><p>请求地址：<a href="https://api.weixin.qq.com/cgi-bin/token" target="_blank" rel="noreferrer">https://api.weixin.qq.com/cgi-bin/token</a></p><p>请求参数：</p><p>grant_type: &#39;client_credential&#39;, // 固定值</p><p>appid: &#39;&#39;, // 小程序id</p><p>secret: &#39;&#39;, // 小程序密钥</p></div><div class="tip custom-block"><p class="custom-block-title">实例</p><p><a href="https://api.weixin.qq.com/cgi-bin/token" target="_blank" rel="noreferrer">https://api.weixin.qq.com/cgi-bin/token</a>?</p><p>grant_type=client_credential</p><p>&amp;appid=</p><p>&amp;secret=</p></div><h4 id="_2-申请插件权限" tabindex="-1">2. 申请插件权限 <a class="header-anchor" href="#_2-申请插件权限" aria-label="Permalink to &quot;2. 申请插件权限&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">示例</p><p>请求方式：POST</p><p>请求地址：<a href="https://api.weixin.qq.com/wxa/plugin" target="_blank" rel="noreferrer">https://api.weixin.qq.com/wxa/plugin</a></p><p>请求参数：</p><p>access_token: &#39;&#39;, // token</p><p>action: &#39;apply&#39;, // 固定值</p><p>plugin_appid: &#39;&#39;, // 小程序id</p></div><h3 id="ip白名单" tabindex="-1">IP白名单 <a class="header-anchor" href="#ip白名单" aria-label="Permalink to &quot;IP白名单&quot;">​</a></h3><p>有时候会提示ip地址非法，是因为小程序默认开启了ip白名单，所以不能上传。这时候就需要添加ip地址到白名单或者关闭白名单。</p><p>在这推荐的是关闭白名单，因为添加ip白名单需要管理员权限，这是安全与效率的取舍。</p><p><img src="'+o+'" alt="白名单" title="白名单"></p><p><img src="'+l+'" alt="白名单" title="白名单"></p><p><img src="'+n+'" alt="白名单" title="白名单"></p><h3 id="关于其他参数配置" tabindex="-1">关于其他参数配置 <a class="header-anchor" href="#关于其他参数配置" aria-label="Permalink to &quot;关于其他参数配置&quot;">​</a></h3><p>因为TaroCI就是各家小程序持续集成插件的封装，所以各个小程序的配置参数理论上都可以使用，但是因为TaroCI并没有开放出来，所以当我们有自定义需求时，只能直接修改插件包。</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html" target="_blank" rel="noreferrer">微信小程序CI文档</a></p><p>比如我们给微信小程序添加一个压缩参数：</p><p><img src="'+i+'" alt="文档" title="文档"></p><p><img src="'+r+'" alt="文档" title="文档"></p><p><img src="'+c+'" alt="文档" title="文档"></p><p>我们可以看到小程序官方CI的配置数据结构，接下来我们看看TaroCI的：</p><p><code>文件路径：node_modules\\@tarojs\\plugin-mini-ci\\dist\\WeappCI.js</code></p><p><img src="'+d+'" alt="TaroCI源码" title="源码"></p><p>简直是一模一样，所以我直接把我需要的配置写入，测试成功。</p>',52),g=[m];function b(u,C,_,y,D,k){return s(),e("div",null,g)}const A=a(h,[["render",b]]);export{q as __pageData,A as default};
