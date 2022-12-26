(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{330:function(s,n,a){s.exports=a.p+"assets/img/socket01.05fbd6f0.png"},460:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_01、安装依赖包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、安装依赖包"}},[s._v("#")]),s._v(" 01、安装依赖包")]),s._v(" "),n("p",[s._v("(相关文档地址:https://python-socketio.readthedocs.io/en/latest/client.html)")]),s._v(" "),n("p",[s._v("执行"),n("code",[s._v("pip install python-socketio,aiohttp")])]),s._v(" "),n("h3",{attrs:{id:"_02、编写服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、编写服务端"}},[s._v("#")]),s._v(" 02、编写服务端")]),s._v(" "),n("p",[s._v("新建server.py文件，拷贝如下内容:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from aiohttp import web\nimport socketio\n\nsio = socketio.AsyncServer()\napp = web.Application()\nsio.attach(app)\n\nasync def index(request):\n    \"\"\"Serve the client-side application.\"\"\"\n    with open('index.html') as f:\n        return web.Response(text=f.read(), content_type='text/html')\n\n@sio.event\ndef connect(sid, environ):\n    print(\"connect \", sid)\n\n@sio.event\nasync def chat_message(sid, data):\n    print(\"message \", data)\n\n@sio.event\ndef disconnect(sid):\n    print('disconnect ', sid)\n\n# app.router.add_static('/static', 'static')\n# app.router.add_get('/', index)\n\nif __name__ == '__main__':\n    web.run_app(app)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h3",{attrs:{id:"_03、编写客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、编写客户端"}},[s._v("#")]),s._v(" 03、编写客户端")]),s._v(" "),n("p",[s._v("新建client.py文件，拷贝如下内容:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import asyncio\nimport socketio\n\nsio = socketio.AsyncClient()\n\n@sio.event\nasync def connect():\n    print('connection established')\n\n@sio.event\nasync def my_message(data):\n    print('message received with ', data)\n    await sio.emit('my response', {'response': 'my response'})\n\n@sio.event\nasync def disconnect():\n    print('disconnected from server')\n\nasync def main():\n    await sio.connect('http://127.0.0.1:8080')\n    await sio.emit(\"chat_message\",{\"1\":2})\n    await sio.wait()\n\nif __name__ == '__main__':\n    asyncio.run(main())\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_04、运行代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_04、运行代码"}},[s._v("#")]),s._v(" 04、运行代码")]),s._v(" "),n("p",[s._v("分别执行"),n("code",[s._v("python server.py")]),s._v("和"),n("code",[s._v("python client.py")])]),s._v(" "),n("p",[s._v("会看到服务端接收到客户端发送过来的消息:\n"),n("img",{attrs:{src:a(330),alt:""}})])])}),[],!1,null,null,null);n.default=e.exports}}]);