(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{622:function(n,s,t){"use strict";t.r(s);var e=t(29),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"_01、代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01、代码实现"}},[n._v("#")]),n._v(" 01、代码实现")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("# -*- ecoding: utf-8 -*-\n# @ModuleName: mergeSort\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/5/23 10:01\ndef merge_sort(alist):\n    n = len(alist)\n    if n <= 1:\n        return alist\n    mid = n//2\n    left_li = merge_sort(alist[:mid])\n    right_li = merge_sort(alist[mid:])\n    left_pointer,right_pointer = 0,0\n    result = []\n    while left_pointer < len(left_li) and right_pointer < len(right_li):\n        if left_li[left_pointer] < right_li[right_pointer]:\n            result.append(left_li[left_pointer])\n            left_pointer += 1\n        else:\n            result.append(right_li[right_pointer])\n            right_pointer += 1\n    result += left_li[left_pointer:]\n    result += right_li[right_pointer:]\n    return result\n\n\na = [2,3,7,9,6,4,8]\nb=merge_sort(a)\nprint(b)\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);