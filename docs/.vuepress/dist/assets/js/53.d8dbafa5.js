(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{560:function(s,n,a){"use strict";a.r(n);var e=a(29),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("前言:说白了就是当前类某些属性或方法不符合我们的需求,我们使用类继承来进行扩展")]),s._v(" "),a("h3",{attrs:{id:"_01、适配器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01、适配器模式"}},[s._v("#")]),s._v(" 01、适配器模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# -*- ecoding: utf-8 -*-\n# @ModuleName: adapter\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/4/27 13:54\nclass OldCar:\n    def __init__(self,weight):\n        self.weight = weight\n\n    def run(self):\n        print("最高时速120公里")\n\n\nclass NewCar(OldCar):\n    def __init__(self,weight,name):\n        super().__init__(weight)\n        self.name = name\n\n\n    def run(self):\n        print("最高时速360公里")\n\nNewCar("20T","BMW").run()\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);