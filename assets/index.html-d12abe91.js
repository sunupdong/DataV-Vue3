import{_ as k,M as t,p as r,q as d,R as n,t as a,N as s,V as p,a1 as c}from"./framework-7e1a102e.js";const g={},h=n("h1",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),a(" 介绍")],-1),m=n("strong",null,"全屏",-1),v=n("strong",null,"数据可视化",-1),_=c('<ul><li><strong>边框</strong></li></ul><p>带有不同边框的容器</p><ul><li><strong>装饰</strong></li></ul><p>用来点缀页面效果，增加视觉效果</p><ul><li><strong>图表</strong></li></ul><p>Work In Progress</p><ul><li><strong>其他</strong></li></ul><p>Work In Progress</p><h2 id="用前必看" tabindex="-1"><a class="header-anchor" href="#用前必看" aria-hidden="true">#</a> 用前必看</h2><p>使用前应阅读以下提示，这样出现相应问题后可以快速解决</p><div class="custom-container tip"><p class="custom-container-title">Alpha</p><p>目前还处于 Alpha 阶段，所有的 API 及 Props 都可能在后续迭代中发生变化</p></div><div class="custom-container tip"><p class="custom-container-title">兼容性</p><p>组件库的开发和调试都使用 Chrome 浏览器，没有时间和精力做其他浏览器的兼容，尤其是 IE</p><p>所以请使用 Chrome 浏览器</p></div><div class="custom-container warning"><p class="custom-container-title">宽高异常</p><p>组件的默认宽高都是 100%，可以根据父容器宽高进行自适应，但在某些情况下组件宽高可能表现异常，这种情况一般是因为组件的父容器宽高发生了变化，而组件没有侦知这一变化，你可以在组件上绑定 key 值，在更改父容器宽高且页面完成重绘后，更新 key 值，使组件强制刷新，以获取正确宽高，或者显式设置组件宽高。</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',14),f=n("strong",null,"步骤 1",-1),x={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},y=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue3-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>步骤 2</strong>：将@dataview/datav-vue3 安装为本地依赖</li></ul>`,2),b=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(` @dataview/datav-vue3
`)])])],-1),w=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(` @dataview/datav-vue3
`)])])],-1),q=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"install"),a(` @dataview/datav-vue3
`)])])],-1),B=c(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>在引入 DataV 时，可以传入一个包含 <code>classNamePrefix</code> 属性的全局配置对象， <code>classNamePrefix</code> 用于配置组件库 class 前缀，默认为 <code>dv-</code></p><blockquote><p>也可以使用组件库导出的 <em>setClassNamePrefix</em> 方法来设置 class 前缀</p></blockquote><h3 id="完整引入" tabindex="-1"><a class="header-anchor" href="#完整引入" aria-hidden="true">#</a> 完整引入</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DataV<span class="token punctuation">,</span> <span class="token punctuation">{</span> setClassNamePrefix <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@dataview/datav-vue3&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DataV<span class="token punctuation">,</span> <span class="token punctuation">{</span> classNamePrefix<span class="token operator">:</span> <span class="token string">&#39;dv-&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// setClassNamePrefix(&#39;dv-&#39;)</span>
</code></pre></div><h3 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> BorderBox1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@dataview/datav-vue3&#39;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BorderBox1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Content <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BorderBox1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="umd-cdn" tabindex="-1"><a class="header-anchor" href="#umd-cdn" aria-hidden="true">#</a> UMD / CDN</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@dataview/datav-vue3@latest/umd/datav.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,9),C={href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://cdnjs.com/",target:"_blank",rel:"noopener noreferrer"},A=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),a(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("html")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("en"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("head")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"charset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("UTF-8"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"http-equiv"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("X-UA-Compatible"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("IE=edge"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("meta")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("viewport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("width=device-width, initial-scale=1.0"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://unpkg.com/vue@3/dist/vue.global.prod.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://unpkg.com/@dataview/datav-vue3@latest/umd/datav.umd.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("title")]),n("span",{class:"token punctuation"},">")]),a("DataV"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("title")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
      `),n("span",{class:"token selector"},"html, body, #app"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 100%"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),a(" hidden"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 0px"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 0px"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token selector"},"#app"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #282c34"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token selector"},".dv-border-box-content"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token selector"},".welcome"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(" 76px"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),a(" 900"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"-webkit-linear-gradient"),n("span",{class:"token punctuation"},"("),a("315deg"),n("span",{class:"token punctuation"},","),a(" #42d392 25%"),n("span",{class:"token punctuation"},","),a(" #647eff"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"background-clip"),n("span",{class:"token punctuation"},":"),a(" text"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"-webkit-background-clip"),n("span",{class:"token punctuation"},":"),a(" text"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token property"},"-webkit-text-fill-color"),n("span",{class:"token punctuation"},":"),a(" transparent"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("head")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("body")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("body")]),n("span",{class:"token punctuation"},">")]),a(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("app"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("border-box-1")]),n("span",{class:"token punctuation"},">")]),a(` 
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("welcome"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("@dataview/datav-vue3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("BorderBox1")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" createApp "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" Vue"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" BorderBox1 "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" DataV"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" App "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    App`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"component"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'BorderBox1'"),n("span",{class:"token punctuation"},","),a(" BorderBox1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    App`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("html")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function V(j,D){const l=t("ReactPageBtn"),o=t("ExternalLinkIcon"),e=t("CodeGroupItem"),u=t("CodeGroup"),i=t("FoldBox");return r(),d("div",null,[h,n("p",null,[a("组件库基于 Vue3"),s(l),a("，主要用于构建大屏（"),m,a("）数据展示页面即"),v,a("，具有多种类型组件可供使用：")]),_,n("ul",null,[n("li",null,[f,a("：在 Vue3 项目下进行组件库安装 "),n("a",x,[a("(如何创建 Vue3 项目？ → Vue 官网)"),s(o)])])]),y,s(u,null,{default:p(()=>[s(e,{title:"NPM"},{default:p(()=>[b]),_:1}),s(e,{title:"YARN"},{default:p(()=>[w]),_:1}),s(e,{title:"PNPM"},{default:p(()=>[q]),_:1})]),_:1}),B,n("p",null,[a("这里我们使用了 "),n("a",C,[a("unpkg"),s(o)]),a("，但你也可以使用任何提供 npm 包服务的 CDN，例如 "),n("a",N,[a("jsdelivr"),s(o)]),a(" 或 "),n("a",P,[a("cdnjs"),s(o)]),a("。当然，你也可以下载此文件并自行提供服务。")]),s(i,{title:"查看 UMD 使用示例"},{default:p(()=>[A]),_:1})])}const E=k(g,[["render",V],["__file","index.html.vue"]]);export{E as default};