(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{465:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("前言:项目中的配置文件,日志,各种池经常用到单例模式")]),s._v(" "),n("h3",{attrs:{id:"_01、使用模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、使用模块"}},[s._v("#")]),s._v(" 01、使用模块")]),s._v(" "),n("p",[s._v("其实,python的模块就是天然的单例模式,因为模块在第一次导入的时候,会生成.pyc文件,当第二次导入的时候,就会直接加载.pyc文件,而不是再次执行模块代码.如果我们把相关的函数和数据定义在一个模块中,就可以获得一个单例对象了.\n新建一个python文件,mysingleton.py")]),s._v(" "),n("p",[s._v("创建")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Singleton(object):\n    def foo(self):\n        pass\nsingleton = Singleton()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from mysingleton import singleton\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_02、基于-new-方法实现的单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、基于-new-方法实现的单例模式"}},[s._v("#")]),s._v(" 02、基于__new__方法实现的单例模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Singleton():\n    _instance = None\n    _flag = True\n\n    def __new__(cls, *args, **kwargs):\n        if cls._instance == None:\n            cls._instance = object.__new__(cls)\n        return cls._instance\n\n    def __init__(self,name):\n        #防止init方法被执行多次\n        if Singleton._flag:\n            self.name = name\n            Singleton._flag = False\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);