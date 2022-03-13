(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{470:function(s,e,t){s.exports=t.p+"assets/img/celery-01.882edc9a.png"},471:function(s,e,t){s.exports=t.p+"assets/img/celery-03.6e4fe782.png"},472:function(s,e,t){s.exports=t.p+"assets/img/celery-04.11c027c9.png"},473:function(s,e,t){s.exports=t.p+"assets/img/celery-05.61afa860.png"},506:function(s,e,t){"use strict";t.r(e);var a=t(29),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_01、安装celery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01、安装celery"}},[s._v("#")]),s._v(" 01、安装celery")]),s._v(" "),a("p",[s._v("执行"),a("code",[s._v("pip3.8 install celery==4.4.1")]),s._v(" "),a("img",{attrs:{src:t(470),alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_02、编写异步任务代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02、编写异步任务代码"}},[s._v("#")]),s._v(" 02、编写异步任务代码")]),s._v(" "),a("p",[s._v("新建/test/test.py文件，拷贝如下代码:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("from celery import Celery\n\ncelery_app = Celery('test', broker='redis://localhost:6379/0')\n\n@celery_app.task\ndef test_task(n):\n    print(n)\n\nif __name__ == '__main__':\n    test_task.delay('==== ttttt1 =====')\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_03、创建异步任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03、创建异步任务"}},[s._v("#")]),s._v(" 03、创建异步任务")]),s._v(" "),a("p",[s._v("进入test文件夹,执行"),a("code",[s._v("python3.8 test.py")])]),s._v(" "),a("h3",{attrs:{id:"_04、创建worker-消费任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04、创建worker-消费任务"}},[s._v("#")]),s._v(" 04、创建worker,消费任务")]),s._v(" "),a("p",[s._v("进入test文件夹,执行"),a("code",[s._v("python3.8 celery worker -A test --loglevel=debug")]),s._v(" "),a("img",{attrs:{src:t(471),alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_05、创建定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_05、创建定时任务"}},[s._v("#")]),s._v(" 05、创建定时任务")]),s._v(" "),a("p",[s._v("在test.py中加入以下代码:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('celery_app.conf.beat_schedule = {\n    "test":{\n        "task":"test.demo",\n        #秒\n        "schedule":5\n    }\n}\n\n@celery.task\ndef demo():\n    print(1111111)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_06、执行定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_06、执行定时任务"}},[s._v("#")]),s._v(" 06、执行定时任务")]),s._v(" "),a("p",[s._v("进入到test文件夹,执行"),a("code",[s._v("python3.8 -m celery -A test beat")]),s._v(",开始发布任务\n"),a("img",{attrs:{src:t(472),alt:""}})]),s._v(" "),a("p",[s._v("进入到test文件夹,执行"),a("code",[s._v("python3.8 -m celery worker -A test --loglevel=debug")]),s._v(",开始执行任务\n"),a("img",{attrs:{src:t(473),alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);