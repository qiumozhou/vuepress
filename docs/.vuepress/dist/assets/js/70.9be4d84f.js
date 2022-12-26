(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{470:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("前言:工厂模式应用在对象的创建阶段。简单说,我们可以创建一个类，用这个类去管理其它类对象的创建。\n做了这么多项目,感觉用处不大")]),s._v(" "),n("h3",{attrs:{id:"_01、工厂模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、工厂模式"}},[s._v("#")]),s._v(" 01、工厂模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# -*- ecoding: utf-8 -*-\n# @ModuleName: factory\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/4/22 18:26\n\nclass People:\n    def __init__(self,name,age,*args,**kwargs):\n        self.name = name\n        self.age = age\n\nclass Animal:\n    def __init__(self,type,*args,**kwargs):\n        self.type = type\n\n\nclass Factory:\n    @classmethod\n    def create(cls,name,*args,**kwargs):\n        name = name.lower().strip()\n        if name == "people":\n            return People(*args,**kwargs)\n        if name == "animal":\n            return Animal(*args,**kwargs)\n        else:\n            raise("类不存在")\n\n\np1  = Factory.create("people","qiumozhou",18)\na1 = Factory.create("animal","dog")\nprint(p1)\nprint(a1)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);