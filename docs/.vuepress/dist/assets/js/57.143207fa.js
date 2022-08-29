(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{454:function(s,a,n){"use strict";n.r(a);var e=n(6),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("前言:csv中的列需要跟数据库表的中的字段一一对应")]),s._v(" "),a("h3",{attrs:{id:"_01、代码如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01、代码如下"}},[s._v("#")]),s._v(" 01、代码如下:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import pandas as pd\n\n\ndef getData():\n    #index_col=0是为了去除csv文件中的第一列脏数据,如果没有，可不写.data的类型为DataFrame\n    data = pd.read_csv("/home/test.csv",engine="python",index_col=false)\n    #将csv中的Nan转为None\n    data = data.astype(object).where(pd.notnull(data),None)\n    #写入数据库\n    data.to_sql(name="test",con=engine,schema="test",if_exists="append",index=0)\n\ngetData()\n\n### name:数据库表名\n### con:数据库连接.必须是engine,不能为池\n### schema:schema\n### if_exists:如果表tablename存在，则将数据添加到这个表的后面\n### index:是否将dataframe的索引列插入数据库.当然是不要啊\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);