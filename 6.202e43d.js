webpackJsonp([6],{138:function(s,n){var a,t;s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},77:function(s,n,a){s.exports=a(138),s.exports.template='<h1>Spinner</h1>\n<blockquote>\n<p>加载动画，可指定显示类型、尺寸和颜色。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Spinner } <span class="hljs-keyword">from</span> <span class="hljs-string">\'xdc-ui\'</span>;\n\nVue.component(Spinner.name, Spinner);\n</code></pre>\n<h2>例子</h2>\n<p>指定类型</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"snake"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"double-bounce"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"triple-bounce"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"fading-circle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- 或者接受传入类型的序号 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<p>指定颜色</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#26a2ff"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"rgb(100, 100, 100)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"yellow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<p>指定尺寸</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-spinner</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-spinner</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>显示类型，提供四种风格，可以指定名称或者序号</td>\n<td>String、Number</td>\n<td>snake <br> double-bounce <br> triple-bounce <br> fading-circle</td>\n<td>snake</td>\n</tr>\n<tr>\n<td>color</td>\n<td>颜色，接受 hex、rgb 等颜色值</td>\n<td>String</td>\n<td></td>\n<td>#ccc</td>\n</tr>\n<tr>\n<td>size</td>\n<td>尺寸，单位 px</td>\n<td>Number</td>\n<td></td>\n<td>28</td>\n</tr>\n</tbody>\n</table></div>'}});