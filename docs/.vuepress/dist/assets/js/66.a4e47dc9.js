(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{466:function(n,s,a){"use strict";a.r(s);var e=a(6),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("前言:当无法确定任务数量的时候,可以使用进程池")]),n._v(" "),s("h3",{attrs:{id:"示例代码如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码如下"}},[n._v("#")]),n._v(" 示例代码如下:")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('# -*- ecoding: utf-8 -*-\n# @ModuleName: processingPool\n# @Mail: 15717163552@163.com\n# @Author: mozhouqiu\n# @Time: 2022/3/31 12:03\nimport time\nfrom multiprocessing import Pool\n\n\ndef run(name):\n    time.sleep(2)\n    print(name)\n\n\nif __name__=="__main__":\n    # 定义一个进程池,最大进程数2\n    po = Pool(2)\n\n    for i in range(10):\n        #元组传参\n        po.apply_async(run,args=("qiumozhou",))\n        #字典传参\n        po.apply_async(run, kwds={"name":"qiumozhou"})\n    #关闭进程池,不让新的进程加入进来\n    po.close()\n    #守护子进程。跟多进程相反,如果不添加join,主进程结束,进程池会被kill\n    po.join()\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);