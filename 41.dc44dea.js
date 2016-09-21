webpackJsonp([41],{103:function(t,n){var o,s;t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},42:function(t,n,o){t.exports=o(103),t.exports.template='<h1>Popup</h1>\n<blockquote>\n<p>A popup box with customized contents.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'xdc-ui\'</span>;\n\nVue.component(Popup.name, Popup);\n</code></pre>\n<h2>Example</h2>\n<p><code>position</code> defines the location of the popup. If it\'s <code>bottom</code>, when you switch on the popup, it\'ll slide into the screen from the bottom and become fixed at the bottom. The sliding animation alters with <code>position</code>, and you don\'t need to configure it manually.</p>\n<p>Sync <code>visible</code> with one of your vue instance variables. Toggle it to switch on/off the popup.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-popup</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"popupVisible"</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">"bottom"</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-popup</span>&gt;</span>\n</code></pre>\n<p>If the <code>position</code> attribute is omitted, the popup will be located at the center of the viewport (and of course you can relocate it using CSS). In this case, you may want to set its popup-transition attribute to <code>popup-fade</code> so that it\'ll have a fading effect when switched on/off.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-popup</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"popupVisible"</span>\n  <span class="hljs-attr">popup-transition</span>=<span class="hljs-string">"popup-fade"</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-popup</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>visible</td>\n<td>visibility of the popup</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>position</td>\n<td>location of the popup. If omitted, the popup will be centered</td>\n<td>String</td>\n<td>\'top\'<br>\'right\'<br>\'bottom\'<br>\'left\'</td>\n<td></td>\n</tr>\n<tr>\n<td>pop-transition</td>\n<td>CSS transition of the popup. Configurable only when <code>position</code> is omitted</td>\n<td>String</td>\n<td>\'popup-fade\'</td>\n<td></td>\n</tr>\n<tr>\n<td>modal</td>\n<td>if a modal pops with the popup</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n<tr>\n<td>closeOnClickModal</td>\n<td>if the popup turns off when the modal is clicked</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>content of the popup</td>\n</tr>\n</tbody>\n</table></div>'}});