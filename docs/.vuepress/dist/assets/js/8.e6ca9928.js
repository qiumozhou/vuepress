(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{498:function(t,s,e){t.exports=e.p+"assets/img/redis-01.d1cb9b71.png"},499:function(t,s,e){t.exports=e.p+"assets/img/redis-02.bf585c3d.png"},500:function(t,s,e){t.exports=e.p+"assets/img/redis-03.03c4cf9e.png"},570:function(t,s,e){"use strict";e.r(s);var r=e(29),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"_01、拉取redis镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_01、拉取redis镜像"}},[t._v("#")]),t._v(" 01、拉取redis镜像")]),t._v(" "),r("p",[t._v("在终端下输入"),r("code",[t._v("docker pull redis:latest")])]),t._v(" "),r("h3",{attrs:{id:"_02、查看本地镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_02、查看本地镜像"}},[t._v("#")]),t._v(" 02、查看本地镜像")]),t._v(" "),r("p",[t._v("在终端下输入"),r("code",[t._v("docker images")]),t._v(" "),r("img",{attrs:{src:e(498),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"_03、运行容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_03、运行容器"}},[t._v("#")]),t._v(" 03、运行容器")]),t._v(" "),r("p",[t._v("安装完成后，我们可以使用以下命令来运行 redis 容器：\n"),r("code",[t._v("docker run -itd --name redis-test -p 6379:6379 redis")])]),t._v(" "),r("h3",{attrs:{id:"_04、安装成功"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_04、安装成功"}},[t._v("#")]),t._v(" 04、安装成功")]),t._v(" "),r("p",[t._v("最后我们可以通过"),r("code",[t._v("docker ps")]),t._v(" 命令查看容器的运行信息：\n"),r("img",{attrs:{src:e(499),alt:""}})]),t._v(" "),r("p",[t._v("接着我们通过 redis-cli 连接测试使用 redis 服务。\n"),r("code",[t._v("docker exec -it redis-test /bin/bash")]),t._v(" "),r("img",{attrs:{src:e(500),alt:""}})])])}),[],!1,null,null,null);s.default=a.exports}}]);