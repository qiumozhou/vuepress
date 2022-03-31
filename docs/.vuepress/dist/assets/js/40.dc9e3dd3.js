(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{540:function(n,s,a){"use strict";a.r(s);var e=a(29),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("前言:当无法确定任务数量的时候,可以使用进程池")]),n._v(" "),a("h3",{attrs:{id:"示例代码如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码如下"}},[n._v("#")]),n._v(" 示例代码如下:")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('# -*- ecoding: utf-8 -*-\n# @ModuleName: processingPool\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/3/31 12:03\nimport time\nfrom multiprocessing import Pool\n\n\ndef run(name):\n    time.sleep(2)\n    print(name)\n\n\nif __name__=="__main__":\n    # 定义一个进程池,最大进程数2\n    po = Pool(2)\n\n    for i in range(10):\n        #元组传参\n        po.apply_async(run,args=("qiumozhou",))\n        #字典传参\n        po.apply_async(run, kwds={"name":"qiumozhou"})\n    #关闭进程池,不让新的进程加入进来\n    po.close()\n    #守护子进程。跟多进程相反,如果不添加join,主进程结束,进程池会被kill\n    po.join()\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);