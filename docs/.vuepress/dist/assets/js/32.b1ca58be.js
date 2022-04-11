(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{531:function(s,t,n){"use strict";n.r(t);var e=n(29),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("前言:使用sqlalchemy,且查询结果为字典")]),s._v(" "),n("h3",{attrs:{id:"_01-序列化的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-序列化的使用"}},[s._v("#")]),s._v(" 01.序列化的使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"""将数据库对象列表序列化"""\ndef obj_to_dict(obj_list):\n    temp = []\n    for item in obj_list:\n        model_dict = dict(item.__dict__)\n        del model_dict[\'_sa_instance_state\']\n        temp.append(model_dict)\n    return temp\n\n"""将数据库对象序列化"""\ndef to_dict(obj):\n    model_dict = dict(obj.__dict__)\n    del model_dict[\'_sa_instance_state\']\n    return model_dict\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);