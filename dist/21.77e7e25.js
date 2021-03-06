webpackJsonp([21],{123:function(s,a){var n,t;s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},62:function(s,a,n){s.exports=n(123),s.exports.template='<h1>Header</h1>\n<blockquote>\n<p>顶部导航栏，支持显示按钮、自定义文字和固定在顶部。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Header } <span class="hljs-keyword">from</span> <span class="hljs-string">\'xdc-ui\'</span>;\n\nVue.component(Header.name, Header);\n</code></pre>\n<h2>例子</h2>\n<p>固定在页面顶部</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">fixed</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"固定在顶部"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<p>设置 <code>left</code> 或 <code>right</code> slot</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题过长会隐藏后面的内容啊哈哈哈哈"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">v-link</span>=<span class="hljs-string">"\'/\'"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span>&gt;</span>返回<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<p>设置多个按钮</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-header</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"多个按钮"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">v-link</span>=<span class="hljs-string">"\'/\'"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"back"</span>&gt;</span>返回<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>关闭<span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"more"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-header</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>固定在页面顶部</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>left</td>\n<td>左边显示元素</td>\n</tr>\n<tr>\n<td>right</td>\n<td>右边显示元素</td>\n</tr>\n</tbody>\n</table></div>'}});