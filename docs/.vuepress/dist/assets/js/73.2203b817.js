(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{473:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("前言:说白了就是当前类某些属性或方法不符合我们的需求,我们使用类继承来进行扩展")]),s._v(" "),n("h3",{attrs:{id:"_01、适配器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、适配器模式"}},[s._v("#")]),s._v(" 01、适配器模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# -*- ecoding: utf-8 -*-\n# @ModuleName: adapter\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/4/27 13:54\nclass OldCar:\n    def __init__(self,weight):\n        self.weight = weight\n\n    def run(self):\n        print("最高时速120公里")\n\n\nclass NewCar(OldCar):\n    def __init__(self,weight,name):\n        super().__init__(weight)\n        self.name = name\n\n\n    def run(self):\n        print("最高时速360公里")\n\nNewCar("20T","BMW").run()\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);