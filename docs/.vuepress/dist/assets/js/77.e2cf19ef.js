(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{479:function(s,n,e){"use strict";e.r(n);var a=e(6),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("前言:观察者模式又称发布-订阅模式,主要用来解耦对象之间的依赖.简单点说,当发布对象\n发生属性改变时,通知其他对象.")]),s._v(" "),n("h3",{attrs:{id:"_01、观察者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、观察者模式"}},[s._v("#")]),s._v(" 01、观察者模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# -*- ecoding: utf-8 -*-\n# @ModuleName: observer\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/4/29 14:29\nclass Publish:\n    def __init__(self):\n        self.registerList=[]\n\n    def register(self,register):\n        self.registerList.append(register)\n\n\n    def notify(self,num):\n        for register in self.registerList:\n            register.update(num)\n\n\nclass Register:\n    def __init__(self):\n        self.num = 0\n\n    def update(self,num):\n        self.num = num\n\np1 = Publish()\nr1 = Register()\nr2 = Register()\np1.register(r1)\np1.register(r2)\np1.notify(2)\nprint(r1.num)\nprint(r2.num)\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);